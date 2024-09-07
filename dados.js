let dados = [
  {
    titulo: "Nvim-Treesitter",
    descricao: "Parser para uma melhor compreensão da estrutura do código.", 
    link: "https://github.com/nvim-treesitter/nvim-treesitter",
    tags: "syntax parser language", 
    perguntasERespostas: [ // Adicionado o array de perguntas e respostas
      {
        tags: "árvore sintaxe análise código",
        pergunta: "O Nvim-Treesitter analisa a sintaxe em formato de árvore?",
        resposta: "Sim, ele usa uma estrutura de árvore para representar a sintaxe, permitindo uma análise mais profunda."
      },
      {
        tags: "vantagens usar",
        pergunta: "Quais as vantagens de usar o Treesitter?",
        resposta: "Realce de sintaxe preciso, navegação inteligente por código e integração com outros plugins."
      },
      {
        tags: "instalar packer.nvim",
        pergunta: "Como instalo o Nvim-Treesitter?",
        resposta: "Use o 'packer.nvim', adicione `use 'nvim-treesitter/nvim-treesitter'` à sua configuração e rode `:PackerInstall`."
      }
    ]
  },
  {
    titulo: "nvim-lspconfig",
    descricao: "Configurações para o Language Server Protocol.",
    link: "https://github.com/neovim/nvim-lspconfig",
    tags: "lsp language-server code-completion",
    perguntasERespostas: [
      {
        tags: "lsp language server protocol",
        pergunta: "O que é o nvim-lspconfig?",
        resposta: "Um plugin que facilita a configuração do Language Server Protocol no Neovim para recursos como complementação de código e diagnóstico de erros."
      },
      {
        tags: "instalar packer.nvim",
        pergunta: "Como instalar o nvim-lspconfig?",
        resposta: "Use o 'packer.nvim', adicione `use 'neovim/nvim-lspconfig'` à sua configuração e execute `:PackerInstall`."
      },
      {
        tags: "funcionalidades lsp",
        pergunta: "Quais as funcionalidades do LSP?",
        resposta: "Complementação de código, diagnóstico de erros, formatação de código, navegação por símbolos e muito mais!"
      }
    ]
  },
  {
    titulo: "Nvim-Tree",
    descricao: "Explorador de arquivos integrado ao editor.",
    link: "https://github.com/nvim-tree/nvim-tree.luai",
    tags: "file-explorer tree navigation",
    perguntasERespostas: [
      {
        tags: "navegar arquivos",
        pergunta: "Para que serve o Nvim-Tree?",
        resposta: "É um explorador de arquivos que funciona dentro do Neovim, facilitando a visualização e navegação por pastas e arquivos."
      },
      {
        tags: "instalar Nvim-Tree",
        pergunta: "Como instalar o Nvim-Tree?",
        resposta: "Com o 'packer.nvim', adicione `use 'nvim-tree/nvim-tree.lua'` à sua configuração e use `:PackerInstall`."
      },
      {
        tags: "personalizar Nvim-Tree",
        pergunta: "Posso personalizar a aparência do Nvim-Tree?",
        resposta: "Sim, você pode personalizar ícones, cores, tamanho da fonte e mais para se adequar ao seu gosto."
      }
    ]
  },
  {
    titulo: "Tokyo-Night",
    descricao: "Tema escuro e elegante para o Neovim.",
    link: "https://github.com/folke/tokyonight.nvim",
    tags: "theme color-scheme dark-theme",
    perguntasERespostas: [
      {
        tags: "tema escuro",
        pergunta: "O que é o tema Tokyo-Night?",
        resposta: "Um tema escuro e elegante que deixa o Neovim com uma aparência moderna e agradável aos olhos."
      },
      {
        tags: "instalar tema",
        pergunta: "Como instalo o Tokyo-Night?",
        resposta: "Use seu gerenciador de plugins, como o 'packer.nvim', adicione `use 'folke/tokyonight.nvim'` e rode `:PackerInstall`."
      },
      {
        tags: "personalizar cores",
        pergunta: "Posso personalizar as cores do Tokyo-Night?",
        resposta: "Sim, o tema oferece opções para ajustar cores, contraste e outros elementos visuais."
      }
    ]
  },
  {
    titulo: "Lazy.nvim",
    descricao: "Gerenciador de plugins para o Neovim.",
    link: "https://github.com/folke/lazy.nvim",
    tags: "plugin-manager configuration",
    perguntasERespostas: [
      {
        tags: "gerenciar plugins",
        pergunta: "Para que serve o Lazy.nvim?",
        resposta: "Ele gerencia a instalação, atualização e configuração de outros plugins no Neovim, tornando o processo mais fácil."
      },
      {
        tags: "instalar Lazy.nvim",
        pergunta: "Como instalo o próprio Lazy.nvim?",
        resposta: "Você pode instalá-lo manualmente ou usar outro gerenciador de plugins, seguindo as instruções no repositório oficial."
      },
      {
        tags: "configurar Lazy.nvim",
        pergunta: "É difícil configurar o Lazy.nvim?",
        resposta: "Não, ele foi projetado para ser simples. Ele usa uma sintaxe clara e tem uma documentação detalhada."
      }
    ]
  },
  {
    titulo: "Telescope.nvim",
    descricao: "Ferramenta de busca poderosa e flexível.",
    link: "https://github.com/nvim-telescope/telescope.nvim",
    tags: "finder search",
    perguntasERespostas: [
      {
        tags: "busca arquivos Telescope",
        pergunta: "O que posso fazer com o Telescope.nvim?",
        resposta: "Ele busca arquivos, buffers, comandos e muito mais dentro do Neovim de forma rápida e eficiente."
      },
      {
        tags: "instalar Telescope",
        pergunta: "Como instalo o Telescope.nvim?",
        resposta: "Use o 'packer.nvim', adicione `use 'nvim-telescope/telescope.nvim'` à sua configuração e execute `:PackerInstall`."
      },
      {
        tags: "personalizar Telescope",
        pergunta: "Posso personalizar o Telescope.nvim?",
        resposta: "Sim, desde teclas de atalho e aparência até seu comportamento, você pode deixá-lo do seu jeito."
      }
    ]
  },
  {
    titulo: "nvim-cmp",
    descricao: "Complementação de código inteligente.",
    link: "https://github.com/hrsh7th/nvim-cmp",
    tags: "completion autocomplete",
    perguntasERespostas: [
      {
        tags: "completar código",
        pergunta: "O nvim-cmp funciona com várias linguagens?",
        resposta: "Sim, ele oferece complementação inteligente para diversas linguagens, ajudando você a codificar mais rápido."
      },
      {
        tags: "instalar nvim-cmp",
        pergunta: "Como instalo o nvim-cmp?",
        resposta: "Com 'packer.nvim', adicione `use 'hrsh7th/nvim-cmp'` à sua configuração, execute `:PackerInstall` e configure as fontes de complementação."
      },
      {
        tags: "personalizar nvim-cmp",
        pergunta: "O nvim-cmp é personalizável?",
        resposta: "Sim, você pode personalizar desde a aparência e comportamento até as fontes de complementação que ele usa."
      }
    ]
  },
  {
    titulo: "LuaSnip",
    descricao: "Motor de snippets para o Neovim.",
    link: "https://github.com/L3MON4D3/LuaSnip",
    tags: "snippets code-generation",
    perguntasERespostas: [
      {
        tags: "snippets código",
        pergunta: "O que são snippets e para que serve o LuaSnip?",
        resposta: "Snippets são trechos de código pré-definidos. O LuaSnip permite usá-los no Neovim para aumentar sua produtividade."
      },
      {
        tags: "instalar LuaSnip",
        pergunta: "Como posso instalar o LuaSnip no meu Neovim?",
        resposta: "Com 'packer.nvim', adicione `use 'L3MON4D3/LuaSnip'` à sua configuração e execute `:PackerInstall`.  Lembre-se de configurá-lo com seu plugin de complementação."
      },
      {
        tags: "criar snippets",
        pergunta: "Posso criar snippets personalizados com o LuaSnip?",
        resposta: "Sim, você pode criar seus próprios snippets e aumentar ainda mais sua produtividade durante a codificação."
      }
    ]
  },
  {
    titulo: "coc.nvim",
    descricao: "Inteligência de código com base no Language Server Protocol.",
    link: "https://github.com/neoclide/coc.nvim",
    tags: "lsp intellisense",
    perguntasERespostas: [
      {
        tags: "inteligência código",
        pergunta: "O que o coc.nvim faz?",
        resposta: "Ele traz recursos avançados de inteligência de código para o Neovim, como complementação, diagnóstico de erros e refatoração, usando o LSP."
      },
      {
        tags: "instalar coc.nvim",
        pergunta: "Como instalo o coc.nvim?",
        resposta: "Siga as instruções no repositório oficial. Geralmente, você precisa cloná-lo no diretório de plugins e instalar as dependências."
      },
      {
        tags: "configurar linguagens",
        pergunta: "Preciso configurar o coc.nvim para cada linguagem?",
        resposta: "Sim, instale extensões de linguagem para o coc.nvim para usar o LSP em cada linguagem."
      }
    ]
  },
  {
    titulo: "vim-fugitive",
    descricao: "Integração com o Git.",
    link: "https://github.com/tpope/vim-fugitive",
    tags: "git version-control vcs",
    perguntasERespostas: [
      {
        tags: "comandos git",
        pergunta: "Posso usar comandos Git dentro do Neovim com o vim-fugitive?",
        resposta: "Sim, ele integra o Neovim ao Git, permitindo executar comandos, visualizar diffs e mais, tudo sem sair do editor."
      },
      {
        tags: "instalar vim-fugitive",
        pergunta: "Como instalo o vim-fugitive?",
        resposta: "Use o 'packer.nvim', adicione `use 'tpope/vim-fugitive'` em sua configuração e execute `:PackerInstall`."
      },
      {
        tags: "recursos git",
        pergunta: "O que mais o vim-fugitive faz?",
        resposta: "Visualizar status do Git, adicionar arquivos, fazer commits, ver histórico, resolver conflitos de merge e muito mais!"
      }
    ]
  }
];
