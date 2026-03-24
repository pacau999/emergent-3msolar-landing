// Mock data for Três Marias Solar landing page

export const companyInfo = {
  name: "Três Marias Solar",
  tagline: "Expertise em Energia Solar",
  description: "Três Marias Solar significa expertise em energia solar. Com mais de 3 megawatts instalados, oferecemos soluções viáveis e sob medida e um serviço pós-venda rápido e eficaz, garantindo sua satisfação e o retorno do seu investimento.",
  stats: {
    installed: "3+ MW",
    clients: "200+",
    experience: "5+ Anos"
  },
  contact: {
    phone: "(31) 99999-9999",
    email: "contato@tresmariassolar.com.br",
    address: "Belo Horizonte, MG"
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  }
};

export const benefits = [
  {
    id: 1,
    title: "Economia Garantida",
    description: "Reduza sua conta de energia em até 95% com energia solar limpa e renovável.",
    icon: "Wallet"
  },
  {
    id: 2,
    title: "Sustentabilidade",
    description: "Contribua para um planeta mais limpo e reduza sua pegada de carbono.",
    icon: "Leaf"
  },
  {
    id: 3,
    title: "Valorização do Imóvel",
    description: "Imóveis com energia solar têm valorização média de 3% a 6%.",
    icon: "TrendingUp"
  },
  {
    id: 4,
    title: "Retorno Rápido",
    description: "Retorno do investimento em média de 3 a 5 anos com economia contínua.",
    icon: "DollarSign"
  },
  {
    id: 5,
    title: "Baixa Manutenção",
    description: "Painéis solares requerem manutenção mínima e têm vida útil de 25+ anos.",
    icon: "Settings"
  },
  {
    id: 6,
    title: "Energia Independente",
    description: "Gere sua própria energia e proteja-se contra aumentos de tarifas.",
    icon: "Zap"
  }
];

export const howItWorks = [
  {
    id: 1,
    step: "01",
    title: "Consulta Gratuita",
    description: "Entre em contato conosco e agende uma avaliação gratuita do seu imóvel."
  },
  {
    id: 2,
    step: "02",
    title: "Projeto Personalizado",
    description: "Nossos engenheiros desenvolvem um projeto sob medida para suas necessidades."
  },
  {
    id: 3,
    step: "03",
    title: "Instalação Profissional",
    description: "Equipe técnica especializada instala seu sistema com qualidade e segurança."
  },
  {
    id: 4,
    step: "04",
    title: "Economia Imediata",
    description: "Comece a economizar na sua conta de luz e monitore sua geração de energia."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Proprietário Residencial",
    text: "Minha conta de luz caiu 90%! O atendimento da Três Marias Solar foi excepcional do início ao fim. Recomendo!",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Paula Silva",
    role: "Empresária",
    text: "Instalamos em nossa empresa e o retorno foi impressionante. Equipe profissional e pós-venda impecável.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Oliveira",
    role: "Dono de Comércio",
    text: "Melhor investimento que fiz! Em 4 anos já vai estar pago e continuarei economizando. Excelente serviço!",
    rating: 5
  }
];

export const faqData = [
  {
    id: 1,
    question: "Quanto tempo dura um sistema de energia solar?",
    answer: "Os painéis solares têm vida útil de 25 a 30 anos. Já os inversores geralmente duram de 10 a 15 anos e podem ser substituídos facilmente."
  },
  {
    id: 2,
    question: "Funciona em dias nublados ou chuvosos?",
    answer: "Sim! Mesmo em dias nublados os painéis geram energia, embora em menor quantidade. O sistema é dimensionado considerando a média anual de irradiação solar da sua região."
  },
  {
    id: 3,
    question: "Qual é o tempo de retorno do investimento?",
    answer: "Em média, o retorno do investimento ocorre entre 3 a 5 anos, dependendo do consumo e da tarifa de energia da sua região. Após esse período, toda economia é lucro."
  },
  {
    id: 4,
    question: "É necessário fazer manutenção?",
    answer: "A manutenção é mínima. Recomenda-se limpeza dos painéis 1 a 2 vezes por ano e inspeção anual do sistema. Oferecemos planos de manutenção preventiva."
  },
  {
    id: 5,
    question: "Posso instalar em apartamento?",
    answer: "Sim! Para apartamentos, é possível instalar em áreas comuns do condomínio com aprovação em assembleia. Também oferecemos consultoria para facilitar esse processo."
  },
  {
    id: 6,
    question: "O que acontece se produzir mais energia do que consumo?",
    answer: "A energia excedente é injetada na rede elétrica, gerando créditos que podem ser utilizados em até 60 meses, conforme regulamentação da ANEEL."
  }
];

export const mockFormSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted (MOCK):", formData);
      resolve({ success: true, message: "Mensagem enviada com sucesso!" });
    }, 1000);
  });
};
