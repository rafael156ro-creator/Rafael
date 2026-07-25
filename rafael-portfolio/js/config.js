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
  // Substitua pelos depoimentos reais dos seus clientes quando tiver.
  // Deixe o array vazio ([]) para exibir o estado "ainda sem depoimentos".
  testimonials: [
    {
      name: "Nome do Cliente",
      role: "Cargo, Empresa",
      photo: "",
      text: "Espaço reservado para o depoimento do seu cliente sobre a experiência de trabalhar com você.",
      rating: 5,
    },
    {
      name: "Nome do Cliente",
      role: "Cargo, Empresa",
      photo: "",
      text: "Espaço reservado para o depoimento do seu cliente sobre a experiência de trabalhar com você.",
      rating: 5,
    },
  ],

  // --- Formulário de contato --------------------------------------------
  // Cole aqui a URL de um serviço de formulários (Formspree, Web3Forms, EmailJS
  // via backend próprio, etc). Deixando em branco, o formulário abre o app de
  // e-mail do visitante com os dados preenchidos (mailto:).
  formEndpoint: "",
};
