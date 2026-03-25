# Três Marias Solar - Landing Page & Admin Dashboard

Landing page profissional e sistema administrativo completo para empresa de energia solar fotovoltaica.

![React](https://img.shields.io/badge/React-19.0.0-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-green)
![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-brightgreen)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando Localmente](#executando-localmente)
- [Deploy](#deploy)
- [Área Administrativa](#área-administrativa)
- [API Endpoints](#api-endpoints)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Troubleshooting](#troubleshooting)

---

## 🌟 Sobre o Projeto

Sistema completo para empresa de energia solar com:

### Frontend (Landing Page)
- ✨ Hero section com stats e CTAs
- 🎯 Seção de benefícios da energia solar
- 📊 Como funciona (processo em 4 passos)
- 🖼️ Portfólio de projetos com filtros por categoria
- 💬 Depoimentos de clientes
- ❓ FAQ com accordion
- 📧 Formulário de contato funcional
- 📱 100% Responsivo

### Backend (API + Admin)
- 🔐 Sistema de autenticação JWT
- 📝 CRUD completo de projetos
- 🖼️ Upload de imagens (base64)
- 📨 API de formulário de contato
- 🛡️ Rotas protegidas
- 💾 Persistência em MongoDB

### Dashboard Administrativo
- 🔑 Login seguro com JWT
- ➕ Criar, editar e excluir projetos
- 📤 Upload de imagens drag-and-drop
- 🏷️ Categorização de projetos
- 📊 Visualização de todos os projetos

---

## 🛠️ Tecnologias

### Frontend
- **React** 19.0.0 - Biblioteca JavaScript
- **React Router DOM** 7.5.1 - Roteamento
- **Tailwind CSS** 3.4.17 - Estilização
- **Shadcn UI** - Componentes
- **Axios** 1.8.4 - Requisições HTTP
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

### Backend
- **FastAPI** 0.110.1 - Framework Python
- **MongoDB** (Motor) 3.3.1 - Banco de dados
- **PyJWT** 3.5.0 - Autenticação JWT
- **Passlib** 1.7.4 - Hash de senhas
- **Python-Multipart** - Upload de arquivos
- **Uvicorn** 0.25.0 - Servidor ASGI

---

## 📦 Pré-requisitos

### Sistema Operacional
- Linux, macOS ou Windows
- Node.js 16+ e npm/yarn
- Python 3.8+
- MongoDB 4.0+

### Serviços Necessários
- **MongoDB** (local ou cloud - MongoDB Atlas)
- **Node.js** e **npm** ou **yarn**
- **Python** e **pip**

---

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone <seu-repositorio>
cd tres-marias-solar
```

### 2. Instale as Dependências

#### Frontend
```bash
cd frontend
yarn install
# ou
npm install
```

#### Backend
```bash
cd backend
pip install -r requirements.txt
```

---

## ⚙️ Configuração

### 1. Configure o MongoDB

#### Opção A: MongoDB Local
```bash
# Instalar MongoDB (Ubuntu/Debian)
sudo apt-get install mongodb

# Iniciar MongoDB
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### Opção B: MongoDB Atlas (Cloud)
1. Crie uma conta em [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crie um cluster gratuito
3. Configure Network Access (adicione seu IP ou 0.0.0.0/0 para qualquer IP)
4. Crie um usuário de banco de dados
5. Copie a connection string

### 2. Configure as Variáveis de Ambiente

#### Backend (`/backend/.env`)

```env
# MongoDB
MONGO_URL=mongodb://localhost:27017
# OU para MongoDB Atlas:
# MONGO_URL=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/?retryWrites=true&w=majority

DB_NAME=tres_marias_solar

# JWT Secret (MUDE ISTO EM PRODUÇÃO!)
SECRET_KEY=tres-marias-solar-secret-key-2025-CHANGE-THIS

# Servidor
HOST=0.0.0.0
PORT=8001
```

#### Frontend (`/frontend/.env`)

```env
# URL do Backend
REACT_APP_BACKEND_URL=http://localhost:8001
# OU para produção:
# REACT_APP_BACKEND_URL=https://seu-dominio.com
```

### 3. Atualize Informações da Empresa

Edite `/frontend/src/data/mock.js`:

```javascript
export const companyInfo = {
  name: "Três Marias Solar",
  cnpj: "24.899.169/0001-93",
  contact: {
    phone: "38 99752-3325",
    phoneUrl: "https://wa.me/5538997523325",
    email: "arthur@3msolar.com.br",
    address: "Rua Barão do rio Branco, 64 Patos de Minas, MG, 38700-170",
    mapsUrl: "https://maps.app.goo.gl/YgwxceX57JZyGWMy7"
  },
  // ... resto do arquivo
};
```

---

## 💻 Executando Localmente

### Modo Desenvolvimento

#### 1. Inicie o Backend
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

O backend estará rodando em: `http://localhost:8001`

#### 2. Inicie o Frontend (em outro terminal)
```bash
cd frontend
yarn start
# ou
npm start
```

O frontend estará rodando em: `http://localhost:3000`

### Credenciais Admin Padrão

Ao iniciar o backend pela primeira vez, um usuário admin é criado automaticamente:

- **Usuário:** `admin`
- **Senha:** `admin123`

⚠️ **IMPORTANTE:** Altere essas credenciais em produção!

---

## 🌐 Deploy

### Deploy do Backend

#### Opção 1: VPS (DigitalOcean, AWS, etc.)

```bash
# 1. Clone o repositório no servidor
git clone <seu-repositorio>
cd tres-marias-solar/backend

# 2. Instale dependências
pip install -r requirements.txt

# 3. Configure .env com suas variáveis

# 4. Use Supervisor para manter o processo rodando
sudo apt-get install supervisor

# 5. Crie arquivo de configuração do Supervisor
sudo nano /etc/supervisor/conf.d/backend.conf
```

**Conteúdo do backend.conf:**
```ini
[program:backend]
command=/usr/bin/python3 -m uvicorn server:app --host 0.0.0.0 --port 8001
directory=/caminho/para/backend
user=seu-usuario
autostart=true
autorestart=true
stderr_logfile=/var/log/backend.err.log
stdout_logfile=/var/log/backend.out.log
```

```bash
# 6. Recarregue o Supervisor
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start backend
```

#### Opção 2: Docker

```dockerfile
# backend/Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8001

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

```bash
docker build -t tres-marias-backend .
docker run -p 8001:8001 --env-file .env tres-marias-backend
```

### Deploy (Monorepo Vercel)

Esta aplicação foi reestruturada para suportar deploy zero-config no Vercel como um monorepo (React + FastAPI).

#### Passos para Vercel:

1. Suba o repositório para o GitHub.
2. Importe o projeto no Vercel.
3. O Vercel detectará automaticamente o Frontend React e as Serverless Functions Python na pasta `/api`.
4. Configure as Variáveis de Ambiente no painel do Vercel:
   - `MONGO_URL`
   - `DB_NAME`
   - `SECRET_KEY`
5. Clique em Deploy.

#### Opção 2: Build Estático + Nginx

```bash
# 1. Build de produção
cd frontend
yarn build
# ou
npm run build

# 2. Copie pasta build para servidor
scp -r build/* usuario@servidor:/var/www/tres-marias-solar

# 3. Configure Nginx
sudo nano /etc/nginx/sites-available/tres-marias-solar
```

**Configuração Nginx:**
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    root /var/www/tres-marias-solar;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy para API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# 4. Ative o site
sudo ln -s /etc/nginx/sites-available/tres-marias-solar /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL/HTTPS com Let's Encrypt

```bash
# Instale Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtenha certificado
sudo certbot --nginx -d seu-dominio.com
```

---

## 🔐 Área Administrativa

### Acesso

URL: `https://seu-dominio.com/admin/login`

### Funcionalidades

#### Gerenciar Projetos
1. **Criar Projeto:**
   - Clique em "Novo Projeto"
   - Preencha: título, descrição, categoria, potência
   - Faça upload da imagem
   - Clique em "Criar Projeto"

2. **Editar Projeto:**
   - Clique no ícone de edição no card do projeto
   - Modifique os campos desejados
   - Clique em "Salvar Alterações"

3. **Excluir Projeto:**
   - Clique no ícone de lixeira no card do projeto
   - Confirme a exclusão

### Alterar Senha do Admin

```bash
# Conecte-se ao MongoDB
mongo

# Use o banco de dados
use tres_marias_solar

# Gere novo hash de senha (Python)
python3 -c "from passlib.context import CryptContext; pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto'); print(pwd_context.hash('sua_nova_senha'))"

# Atualize no MongoDB
db.users.updateOne(
  { username: "admin" },
  { $set: { hashed_password: "HASH_GERADO_ACIMA" } }
)
```

---

## 📡 API Endpoints

### Autenticação

#### POST `/api/auth/register`
Registrar novo usuário admin

**Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "access_token": "string",
  "token_type": "bearer"
}
```

#### POST `/api/auth/login`
Login de usuário

**Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "access_token": "string",
  "token_type": "bearer"
}
```

#### GET `/api/auth/me`
Obter informações do usuário autenticado

**Headers:**
```
Authorization: Bearer <token>
```

### Projetos

#### GET `/api/projects`
Listar todos os projetos (público)

**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "category": "Residencial|Comercial|Industrial|Rural",
    "power": "string",
    "image": "string",
    "created_at": "datetime",
    "updated_at": "datetime"
  }
]
```

#### GET `/api/projects/{project_id}`
Obter projeto específico (público)

#### POST `/api/projects`
Criar novo projeto (protegido)

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "title": "string",
  "description": "string",
  "category": "string",
  "power": "string",
  "image": "string (base64 ou URL)"
}
```

#### PUT `/api/projects/{project_id}`
Atualizar projeto (protegido)

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "title": "string (opcional)",
  "description": "string (opcional)",
  "category": "string (opcional)",
  "power": "string (opcional)",
  "image": "string (opcional)"
}
```

#### DELETE `/api/projects/{project_id}`
Deletar projeto (protegido)

**Headers:**
```
Authorization: Bearer <token>
```

### Contato

#### POST `/api/contact`
Enviar formulário de contato (público)

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

#### GET `/api/contacts`
Listar todos os contatos recebidos (protegido)

**Headers:**
```
Authorization: Bearer <token>
```

---

## 📁 Estrutura do Projeto

```
tres-marias-solar/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes Shadcn UI
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AdminLogin.jsx
│   │   └── AdminDashboard.jsx
│   ├── data/
│   │   └── mock.js          # Dados da empresa
│   ├── App.js
│   ├── App.css
│   └── index.css
├── api/
│   ├── index.py                 # (Antigo server.py) Entrypoint Vercel
│   ├── models.py                # Modelos Pydantic
│   ├── auth.py                  # Autenticação JWT
│   └── .env                     # Variáveis backend
├── .env                         # Variáveis frontend
├── package.json
├── requirements.txt             # Dependências Python
├── vercel.json                  # Configurações de rotas do Vercel
├── tailwind.config.js
└── README.md
```

---

## 🐛 Troubleshooting

### Backend não inicia

**Erro: "No module named 'fastapi'"**
```bash
# Reinstale as dependências
pip install -r requirements.txt
```

**Erro: "Connection refused" MongoDB**
```bash
# Verifique se MongoDB está rodando
sudo systemctl status mongodb

# Inicie MongoDB
sudo systemctl start mongodb

# Verifique a connection string no .env
```

### Frontend não conecta ao Backend

**Erro: "Network Error" ou "CORS"**

1. Verifique se `REACT_APP_BACKEND_URL` no `.env` está correto
2. Verifique se o backend está rodando
3. Teste a API diretamente:
```bash
curl http://localhost:8001/api/
```

### Upload de imagens muito grande

**Erro: "413 Payload Too Large"**

Configure o nginx:
```nginx
client_max_body_size 10M;
```

### Token JWT expirado

**Erro: "Could not validate credentials"**

- Tokens expiram em 24 horas
- Faça login novamente no admin

### Projetos não aparecem no frontend

1. Verifique se há projetos no banco:
```bash
mongo
use tres_marias_solar
db.projects.find().pretty()
```

2. Verifique os logs do backend:
```bash
tail -f /var/log/supervisor/backend.out.log
```

3. Verifique o console do navegador (F12)

---

## 📝 Licença

Este projeto foi desenvolvido para Três Marias Solar.

---

## 👨‍💻 Suporte

Para suporte técnico ou dúvidas:

- **Email:** arthur@3msolar.com.br
- **WhatsApp:** (38) 99752-3325

---

## 🚀 Próximos Passos

- [ ] Implementar paginação de projetos
- [ ] Sistema de backup automático
- [ ] Dashboard de analytics
- [ ] Sistema de envio de email automático
- [ ] Multi-idioma (PT/EN)
- [ ] PWA (Progressive Web App)
- [ ] Integração com Google Analytics
- [ ] Sistema de blog/notícias

---

**Desenvolvido com ❤️ para Três Marias Solar**
