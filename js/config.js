/**
 * ============================================================
 *  ARQUIVO DE CONFIGURAÇÃO DO SITE
 * ============================================================
 *  Este é o ÚNICO arquivo que você precisa editar para
 *  personalizar links, números e conteúdo dinâmico do site.
 *  Não é necessário mexer no HTML, CSS ou no script.js.
 * ============================================================
 */

const SITE_CONFIG = {

  // --- Identidade -------------------------------------------------
  name: "Rafael Rodrigues",
  role: "Desenvolvedor Web",

  // --- Redes sociais e contato -------------------------------------
  // Troque apenas os valores abaixo pelos seus links reais.
  // Deixe uma chave como "" (vazio) para exibi-la como indisponível no site.
  social: {
    instagram: "https://www.instagram.com/rfl.dev156/",
    github: "https://github.com/rafael156ro-creator/Rafael",
    linkedin: "", // ainda não possui — o site mostra "Indisponível no momento"
    whatsapp: "https://wa.me/5584998220050",
    email: "Rafael156ro@gmail.com",
  },

  // --- Estatísticas (seção "Números") -------------------------------
  // "value" é o número final da contagem animada. "suffix" é opcional (ex: "+", "%").
  stats: [
    { value: 40, suffix: "+", label: "Projetos Desenvolvidos" },
    { value: 12, suffix: "+", label: "Tecnologias Dominadas" },
    { value: 3000, suffix: "+", label: "Horas de Estudo" },
    { value: 25, suffix: "+", label: "Clientes Atendidos" },
  ],

  // --- Projetos ------------------------------------------------------
  // Adicione, remova ou edite objetos neste array para atualizar a seção
  // de Projetos. Deixe "image" vazio ("") para usar um placeholder automático.
  projects: [
    {
      title: "Projeto em breve",
      description:
        "Este espaço está reservado para o seu próximo projeto. Adicione imagem, descrição e links assim que estiver pronto.",
      image: "",
      tech: ["React", "Node.js", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Projeto em breve",
      description:
        "Este espaço está reservado para o seu próximo projeto. Adicione imagem, descrição e links assim que estiver pronto.",
      image: "",
      tech: ["Next.js", "TypeScript"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Projeto em breve",
      description:
        "Este espaço está reservado para o seu próximo projeto. Adicione imagem, descrição e links assim que estiver pronto.",
      image: "",
      tech: ["WordPress", "SEO"],
      liveUrl: "",
      githubUrl: "",
    },
  ],

  // --- Depoimentos -----------------------------------------------------
  // Substitua "name" e "role" pelos dados reais do cliente quando tiver
  // (nome e empresa/cargo). Deixe o array vazio ([]) para exibir o
  // estado "ainda sem depoimentos".
  testimonials: [
    {
      name: "Cliente",
      role: "Avaliação do projeto",
      photo: "",
      text: "A proposta do site ficou muito bem estruturada, com uma interface moderna e uma navegação simples e intuitiva.",
      rating: 5,
    },
    {
      name: "Cliente",
      role: "Avaliação do projeto",
      photo: "",
      text: "Gostei bastante da organização visual e da atenção aos detalhes. O site transmite uma aparência profissional.",
      rating: 5,
    },
    {
      name: "Cliente",
      role: "Avaliação do projeto",
      photo: "",
      text: "A responsividade ficou muito boa, principalmente no celular. O design ficou moderno e fácil de navegar.",
      rating: 5,
    },
    {
      name: "Cliente",
      role: "Avaliação do projeto",
      photo: "",
      text: "O projeto mostra bastante cuidado com performance, organização e experiência do usuário.",
      rating: 5,
    },
    {
      name: "Cliente",
      role: "Avaliação do projeto",
      photo: "",
      text: "Uma apresentação profissional e objetiva, com uma identidade visual que combina bem com a proposta.",
      rating: 5,
    },
  ],

  // --- Formulário de contato --------------------------------------------
  // Cole aqui a URL de um serviço de formulários (Formspree, Web3Forms, EmailJS
  // via backend próprio, etc). Deixando em branco, o formulário abre o app de
  // e-mail do visitante com os dados preenchidos (mailto:).
  formEndpoint: "",
};
