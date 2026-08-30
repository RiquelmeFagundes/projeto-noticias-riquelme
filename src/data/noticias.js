
export const noticias = [
  {
    id: 1,
    titulo: "React 19 é anunciado com foco em Server Components e Ações",
    autor: "Ana Silva",
    data: "2026-03-15",
    temas: ["React", "Desenvolvimento Web", "JavaScript"],
    resumo: "A nova versão principal do React promete simplificar o gerenciamento de estado assíncrono e melhorar a performance geral das aplicações.",
    textoCompleto: "A equipe do React anunciou oficialmente os detalhes da versão 19. A principal novidade inclui o suporte nativo a Server Components sem a necessidade de um framework externo, além de novos hooks como useActionState para facilitar a manipulação de formulários e mutações de dados.",
    foto: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600"
  },
  {
    id: 2,
    titulo: "Vite se consolida como a ferramenta padrão para projetos React",
    autor: "Carlos Oliveira",
    data: "2026-03-20",
    temas: ["Vite", "Build Tools", "Frontend"],
    resumo: "Deixando para trás o antigo Create React App, o Vite tornou-se a escolha primária de desenvolvedores para inicializar projetos rapidamente.",
    textoCompleto: "Com tempos de inicialização quase instantâneos devido ao uso de ES Modules nativos, o Vite continua a ganhar tração no ecossistema JavaScript. Desenvolvedores destacam o Hot Module Replacement (HMR) ultra-rápido como o principal benefício no dia a dia.",
    foto: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"
  },
  {
    id: 3,
    titulo: "O impacto do Tailwind CSS no desenvolvimento de interfaces modernas",
    autor: "Mariana Souza",
    data: "2026-04-02",
    temas: ["CSS", "Tailwind", "UI/UX"],
    resumo: "Entenda por que a abordagem utility-first conquistou a comunidade de desenvolvimento e como ela acelera a criação de protótipos.",
    textoCompleto: "Apesar das críticas iniciais sobre a poluição de classes HTML/JSX, o Tailwind CSS provou ser altamente escalável. Com o ecossistema de componentes reutilizáveis, equipes conseguem padronizar o design system mantendo a flexibilidade necessária.",
    foto: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600"
  },
  {
    id: 4,
    titulo: "Navegação em SPAs: Boas práticas com React Router v6",
    autor: "Lucas Pereira",
    data: "2026-04-10",
    temas: ["React Router", "SPA", "Arquitetura"],
    resumo: "Dicas de como estruturar rotas dinâmicas, gerenciamento de erro 404 e proteção de páginas em aplicações de página única.",
    textoCompleto: "Construir uma navegação fluida é essencial para uma boa experiência do usuário. O uso do componente Outlet e de hooks como useParams e useNavigate permite criar layouts aninhados e transições suaves sem recarregar a página.",
    foto: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
  },
  {
    id: 5,
    titulo: "TypeScript no React: Vale a pena adotar em projetos pequenos?",
    autor: "Fernanda Costa",
    data: "2026-04-18",
    temas: ["TypeScript", "React", "Qualidade de Código"],
    resumo: "A tipagem estática previne erros em tempo de compilação, mas pode adicionar complexidade inicial no desenvolvimento.",
    textoCompleto: "A adoção do TypeScript cresceu significativamente. Mesmo para projetos menores, a autocompletação do código, o autodocumentamento das propriedades (props) e a prevenção de erros comuns de runtime superam o custo do tempo investido na configuração.",
    foto: "https://images.unsplash.com/photo-1516116211223-4258568880c6?w=600"
  },
  {
    id: 6,
    titulo: "Gerenciamento de Estado: Redux, Zustand ou React Context?",
    autor: "Rafael Mendes",
    data: "2026-04-25",
    temas: ["State Management", "Zustand", "Context API"],
    resumo: "Uma comparação entre as principais bibliotecas para lidar com estado global em aplicações React.",
    textoCompleto: "A escolha do gerenciador de estado depende da complexidade do aplicativo. Enquanto o React Context atende bem a cenários simples (como temas e autenticação), bibliotecas modernas e leves como o Zustand vêm ganhando espaço sobre soluções mais verbosas como o Redux Toolkit.",
    foto: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600"
  },
  {
    id: 7,
    titulo: "Como os Server-Sent Events (SSE) superam WebSockets em casos específicos",
    autor: "Beatriz Lima",
    data: "2026-05-02",
    temas: ["Backend", "WebSockets", "Aplicações em Tempo Real"],
    resumo: "Descubra quando vale a pena optar por conexões unidirecionais baseadas em HTTP ao invés de conexões bidirecionais complexas.",
    textoCompleto: "Para fluxos onde apenas o servidor precisa enviar dados para o cliente — como dashboards financeiros, sistemas de notificação ou respostas de modelos de IA —, Server-Sent Events se mostram mais leves, fáceis de implementar e contam com reconexão automática nativa do navegador.",
    foto: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600"
  },
  {
    id: 8,
    titulo: "IA Generativa no Frontend: Integrando modelos diretamente na Web",
    autor: "Thiago Rocha",
    data: "2026-05-11",
    temas: ["Inteligência Artificial", "API", "Frontend"],
    resumo: "Aprenda a consumir APIs de modelos de linguagem diretamente em suas aplicações React com renderização em streaming.",
    textoCompleto: "Integrar assistentes e automações em interfaces web tornou-se um padrão de mercado. O segredo para uma boa UX está na leitura contínua de streams de texto no frontend, garantindo que o usuário veja a resposta sendo gerada em tempo real sem travamentos.",
    foto: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600"
  },
  {
    id: 9,
    titulo: "Otimização de Performance Web: O fim dos arquivos de imagem pesados",
    autor: "Juliana Martins",
    data: "2026-05-19",
    temas: ["Performance", "Web Development", "Mídia"],
    resumo: "Novos formatos como WebP e AVIF garantem compressão sem perda visível de qualidade, acelerando o carregamento.",
    textoCompleto: "Imagens não otimizadas continuam sendo os maiores vilões do tempo de carregamento de páginas web. Com a ampla compatibilidade atual com os formatos AVIF e WebP, desenvolvedores conseguem reduzir o consumo de dados em até 70% comparado ao antigo JPEG.",
    foto: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
  },
  {
    id: 10,
    titulo: "Acessibilidade Web (a11y): Torne seu app utilizável por qualquer pessoa",
    autor: "Gabriel Alves",
    data: "2026-05-28",
    temas: ["Acessibilidade", "HTML", "UX"],
    resumo: "Práticas simples como uso correto de HTML semântico e rótulos ARIA fazem toda a diferença na experiência de navegação.",
    textoCompleto: "Garantir que a sua aplicação seja acessível por leitores de tela não é apenas uma boa prática ética, mas também melhora o SEO e a usabilidade geral. Estruturar cabeçalhos corretamente, fornecer contrastes adequados e garantir navegação via teclado são os primeiros passos.",
    foto: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=600"
  }
];