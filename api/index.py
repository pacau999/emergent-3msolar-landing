from fastapi import FastAPI, APIRouter, HTTPException, Depends, status, UploadFile, File
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from datetime import datetime, timedelta
import base64
from typing import List

# Import models and auth
from models import (
    User, UserCreate, UserLogin, Token,
    Project, ProjectCreate, ProjectUpdate,
    ContactForm, ContactFormCreate
)
from auth import (
    get_password_hash, verify_password, create_access_token,
    get_current_user, ACCESS_TOKEN_EXPIRE_MINUTES
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ============================================
# AUTHENTICATION ROUTES
# ============================================

@api_router.post("/auth/register", response_model=Token)
async def register(user_data: UserCreate):
    """Register a new user"""
    # Check if user already exists
    existing_user = await db.users.find_one({"username": user_data.username})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered"
        )
    
    existing_email = await db.users.find_one({"email": user_data.email})
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create new user
    user = User(
        username=user_data.username,
        email=user_data.email,
        hashed_password=get_password_hash(user_data.password)
    )
    
    await db.users.insert_one(user.dict())
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@api_router.post("/auth/login", response_model=Token)
async def login(user_data: UserLogin):
    """Login user and return JWT token"""
    user = await db.users.find_one({"username": user_data.username})
    if not user or not verify_password(user_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["username"]}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@api_router.get("/auth/me")
async def get_me(current_user: dict = Depends(get_current_user)):
    """Get current user info"""
    user = await db.users.find_one({"username": current_user["username"]})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {
        "username": user["username"],
        "email": user["email"],
        "is_active": user.get("is_active", True)
    }

# ============================================
# PROJECT ROUTES (PROTECTED)
# ============================================

@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects (public)"""
    projects = await db.projects.find().sort("created_at", -1).to_list(1000)
    return [Project(**project) for project in projects]

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a specific project by ID (public)"""
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@api_router.post("/projects", response_model=Project)
async def create_project(
    project_data: ProjectCreate,
    current_user: dict = Depends(get_current_user)
):
    """Create a new project (protected)"""
    project = Project(**project_data.dict())
    await db.projects.insert_one(project.dict())
    logger.info(f"Project created: {project.title} by {current_user['username']}")
    return project

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(
    project_id: str,
    project_data: ProjectUpdate,
    current_user: dict = Depends(get_current_user)
):
    """Update a project (protected)"""
    existing_project = await db.projects.find_one({"id": project_id})
    if not existing_project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Update only provided fields
    update_data = {k: v for k, v in project_data.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.projects.update_one(
        {"id": project_id},
        {"$set": update_data}
    )
    
    updated_project = await db.projects.find_one({"id": project_id})
    logger.info(f"Project updated: {project_id} by {current_user['username']}")
    return Project(**updated_project)

@api_router.delete("/projects/{project_id}")
async def delete_project(
    project_id: str,
    current_user: dict = Depends(get_current_user)
):
    """Delete a project (protected)"""
    result = await db.projects.delete_one({"id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    
    logger.info(f"Project deleted: {project_id} by {current_user['username']}")
    return {"message": "Project deleted successfully"}

@api_router.post("/projects/upload-image")
async def upload_project_image(
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user)
):
    """Upload project image and return base64 (protected)"""
    # Read file content
    content = await file.read()
    
    # Convert to base64
    base64_image = base64.b64encode(content).decode('utf-8')
    image_url = f"data:{file.content_type};base64,{base64_image}"
    
    return {"image_url": image_url}

# ============================================
# CONTACT FORM ROUTES
# ============================================

@api_router.post("/contact", response_model=ContactForm)
async def submit_contact_form(form_data: ContactFormCreate):
    """Submit contact form"""
    contact = ContactForm(**form_data.dict())
    await db.contacts.insert_one(contact.dict())
    logger.info(f"Contact form submitted: {contact.name} - {contact.email}")
    return contact

@api_router.get("/contacts", response_model=List[ContactForm])
async def get_contacts(current_user: dict = Depends(get_current_user)):
    """Get all contact form submissions (protected)"""
    contacts = await db.contacts.find().sort("created_at", -1).to_list(1000)
    return [ContactForm(**contact) for contact in contacts]

# ============================================
# BASIC ROUTES
# ============================================

@api_router.get("/")
async def root():
    return {"message": "Três Marias Solar API", "version": "1.0"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Initialize default admin user on startup
@app.on_event("startup")
async def create_default_admin():
    """Create default admin user if not exists"""
    admin_username = "admin"
    admin_exists = await db.users.find_one({"username": admin_username})
    
    if not admin_exists:
        admin_user = User(
            username=admin_username,
            email="admin@3msolar.com.br",
            hashed_password=get_password_hash("admin123")  # Change this password!
        )
        await db.users.insert_one(admin_user.dict())
        logger.info("Default admin user created: username=admin, password=admin123")
