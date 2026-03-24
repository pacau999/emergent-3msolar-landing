# PRD - Três Marias Solar Landing Page

## 📋 Informações do Projeto

**Nome da Empresa:** Três Marias Solar  
**Tipo:** Landing Page para empresa de usinas fotovoltaicas  
**Data de Início:** Dezembro 2025  
**Público-alvo:** Residencial e Empresarial

---

## 🎯 Objetivo do Projeto

Criar uma landing page profissional e conversiva para a Três Marias Solar, empresa especializada em venda e instalação de usinas fotovoltaicas, com mais de 3 megawatts instalados.

---

## 👥 User Personas

### Persona 1: Proprietário Residencial
- **Objetivo:** Reduzir conta de luz e investir em sustentabilidade
- **Dores:** Contas de energia altas, falta de conhecimento sobre energia solar
- **Necessidades:** Informações claras, orçamento transparente, confiança na empresa

### Persona 2: Empresário/Gestor
- **Objetivo:** Reduzir custos operacionais e melhorar imagem sustentável da empresa
- **Dores:** Investimento inicial alto, incerteza sobre ROI
- **Necessidades:** Casos de sucesso, dados de retorno, suporte técnico

---

## 🎨 Design & Identidade Visual

### Paleta de Cores
- **Primária:** Laranja energia (#FF6B35, #F7931E)
- **Secundária:** Cinza profissional (#2C3E50, #4A5568, #718096)
- **Accent:** Branco e tons claros

### Componentes UI
- Shadcn UI como biblioteca principal
- Lucide-react para todos os ícones
- Animações suaves e transições
- Design responsivo (mobile-first)

---

## 📄 Estrutura da Landing Page

### ✅ Seções Implementadas (Fase 1 - Concluída em Dez 2025)

1. **Header/Navbar**
   - Logo oficial 3M Solar (imagem enviada pelo cliente)
   - Menu de navegação (sticky) com 7 itens
   - CTA "Solicitar Orçamento"
   - Menu mobile responsivo

2. **Hero Section**
   - Título: "Expertise em Energia Solar"
   - Descrição da empresa (texto fornecido pelo cliente)
   - 2 CTAs principais
   - Stats cards (3+ MW, 200+ clientes, 5+ anos)
   - Imagem de fundo: painéis solares ao pôr do sol

3. **Benefits Section**
   - 6 cards de benefícios:
     - Economia Garantida
     - Sustentabilidade
     - Valorização do Imóvel
     - Retorno Rápido
     - Baixa Manutenção
     - Energia Independente
   - Imagem ilustrativa ao final

4. **How It Works Section**
   - 4 passos do processo (grid 2x2 limpo, sem conectores):
     1. Consulta Gratuita
     2. Projeto Personalizado
     3. Instalação Profissional
     4. Economia Imediata
   - Imagem split com conteúdo sobre equipe técnica

5. **Portfolio Section** ⭐ NOVA
   - 6 projetos de instalações solares
   - Filtros interativos (Todos, Residencial, Comercial, Industrial, Rural)
   - Cards com:
     - Imagem do projeto
     - Categoria com ícone
     - Potência instalada (kWp)
     - Percentual de economia
     - Descrição
     - Link "Ver detalhes"
   - CTA "Seu projeto pode ser o próximo!"

6. **Testimonials Section**
   - 3 depoimentos de clientes reais (mockados)
   - Rating 5 estrelas
   - Trust badges com estatísticas

7. **FAQ Section**
   - Accordion com 6 perguntas frequentes
   - CTA "Fale Conosco" ao final

8. **Contact Section**
   - Formulário de contato (mock - frontend only)
   - Informações de contato (telefone, email, localização)
   - Horário de atendimento
   - Card de pós-venda 24/7

9. **Footer**
   - Informações da empresa
   - Links rápidos
   - Serviços oferecidos
   - Redes sociais
   - Contato

---

## 🗂️ Dados Mockados (mock.js)

### Dados da Empresa
```javascript
{
  name: "Três Marias Solar",
  tagline: "Expertise em Energia Solar",
  description: "Três Marias Solar significa expertise em energia solar...",
  stats: { installed: "3+ MW", clients: "200+", experience: "5+ Anos" },
  contact: {
    phone: "(31) 99999-9999",
    email: "contato@tresmariassolar.com.br",
    address: "Belo Horizonte, MG"
  }
}
```

### Arrays Mockados
- `benefits` (6 items)
- `howItWorks` (4 steps)
- `testimonials` (3 clientes)
- `faqData` (6 perguntas)
- `projects` (6 projetos - Residencial, Comercial, Industrial, Rural)
- `mockFormSubmit()` - função de simulação de envio de formulário

---

## 🛠️ Stack Técnico

### Frontend (Implementado)
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI components
- Lucide React (ícones)
- Sonner (toasts)
- Axios 1.8.4

### Backend (Planejado - Não Implementado)
- FastAPI
- MongoDB
- Endpoints a serem criados (ver seção API Contracts)

---

## 📡 API Contracts (Backend - Planejado)

### POST /api/contact
**Descrição:** Enviar formulário de contato  
**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

### GET /api/testimonials
**Descrição:** Buscar depoimentos reais do banco  
**Response:**
```json
[
  {
    "id": 1,
    "name": "string",
    "role": "string",
    "text": "string",
    "rating": 5
  }
]
```

### GET /api/company-info
**Descrição:** Buscar informações da empresa  
**Response:**
```json
{
  "name": "string",
  "tagline": "string",
  "description": "string",
  "stats": {...},
  "contact": {...}
}
```

---

## ✅ Checklist de Implementação

### Fase 1 - Frontend com Mock ✅ (CONCLUÍDA)
- [x] Estrutura de pastas
- [x] Header com logo oficial do cliente
- [x] Hero section com CTAs
- [x] Benefits section (6 cards)
- [x] How It Works (4 steps - sem linhas conectoras)
- [x] Portfolio section com 6 projetos
- [x] Filtros interativos no portfólio
- [x] Testimonials (3 clientes)
- [x] FAQ com accordion
- [x] Contact form (mock)
- [x] Footer completo
- [x] Mobile responsive
- [x] Mock data (mock.js)
- [x] Imagens profissionais
- [x] Design laranja + cinza

### Fase 2 - Backend Integration (PLANEJADA)
- [ ] Criar modelos MongoDB
- [ ] Endpoint POST /api/contact
- [ ] Endpoint GET /api/testimonials
- [ ] Endpoint GET /api/company-info
- [ ] Integração com frontend
- [ ] Remover mock.js e usar APIs reais
- [ ] Sistema de email para notificações
- [ ] Validação de dados
- [ ] Error handling

### Fase 3 - Melhorias Futuras (BACKLOG)
- [ ] Sistema de CMS para gerenciar conteúdo
- [ ] Calculadora de economia solar
- [ ] Sistema de orçamento online automatizado
- [ ] Integração com Google Analytics
- [ ] SEO optimization
- [ ] Blog de conteúdo
- [ ] Área de cliente
- [ ] Sistema de agendamento online

---

## 📊 Métricas de Sucesso

### Conversão
- Taxa de preenchimento do formulário de contato
- Cliques no CTA principal
- Tempo médio na página
- Taxa de rejeição

### Engajamento
- Scroll depth
- Interações com FAQ
- Cliques nos botões de contato
- Visualizações em mobile vs desktop

---

## 🚀 Próximos Passos

1. **Imediato:** Coletar feedback do cliente sobre design
2. **Curto Prazo:** Implementar backend com MongoDB
3. **Médio Prazo:** Adicionar calculadora de economia
4. **Longo Prazo:** Sistema completo de CMS e área do cliente

---

## 📝 Notas Importantes

- Todo o código foi desenvolvido seguindo as design guidelines (sem gradientes escuros, cores apropriadas)
- Imagens selecionadas profissionalmente via vision_expert_agent
- Componentes Shadcn UI utilizados corretamente
- Formulário está mockado - dados não são salvos no backend ainda
- Mobile-first approach aplicado
- Acessibilidade considerada (focus states, aria-labels)

---

**Última Atualização:** Dezembro 2025  
**Status:** Fase 1 Completa - Frontend com Mock Data ✅
