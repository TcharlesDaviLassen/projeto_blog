/* ============================================================
 *  TEMPLATE HUB · BASE DE DADOS
 * ============================================================
 *
 *  Este arquivo é o "banco de dados" estático do hub.
 *  Tudo que aparece na interface (categorias, subcategorias e
 *  templates) é lido daqui — sem servidor, sem build.
 *
 *  ──────────────────────────────────────────────────────────
 *  ESTRUTURA
 *  ──────────────────────────────────────────────────────────
 *
 *  CATALOG.categories  →  array de categorias-raiz
 *
 *  Cada nó (categoria, subcategoria, sub-sub-categoria …) é:
 *  {
 *    id:          string  // único; usado na URL e em buscas
 *    name:        string  // o que aparece na tela
 *    glyph?:      string  // emoji/símbolo opcional do ícone
 *    description: string  // texto curto sob o título
 *    tags?:       string[]
 *    children?:   Node[]  // subcategorias  (aninhe à vontade)
 *    templates?:  Template[]
 *  }
 *
 *  Cada template é:
 *  {
 *    id:          string  // único globalmente (importante!)
 *    title:       string
 *    path:        string  // caminho relativo do .html
 *    description: string
 *    tags:        string[]
 *    date:        "YYYY-MM-DD"   // usada na ordenação
 *  }
 *
 *  ──────────────────────────────────────────────────────────
 *  COMO ADICIONAR
 *  ──────────────────────────────────────────────────────────
 *  • Nova categoria   → adicione um objeto em "categories".
 *  • Subcategoria     → use "children" — pode aninhar quantos
 *                       níveis quiser (pasta dentro de pasta).
 *  • Novo template    → coloque o arquivo dentro da pasta da
 *                       categoria e adicione em "templates".
 * ============================================================ */

const CATALOG = {
  categories: [
    /* ============================================
     * SIMBOLISMO  (categoria-raiz)
     * ============================================ */
    {
      id: "simbolismo",
      name: "Simbolismo",
      glyph: "✦",
      description:
        "Iconografia, alegorias e linguagens ocultas. Templates que falam por símbolos.",
      tags: ["esotérico", "místico", "editorial"],
      templates: [],
      children: [
        /* ── Alquimia ───────────────────────────── */
        // {
        //   id: "alquimia",
        //   name: "Alquimia",
        //   glyph: "☿",
        //   description: "Sol, lua, mercúrio. A grande obra em HTML.",
        //   templates: [
        //     {
        //       id: "alq-001",
        //       title: "Tábua de Esmeralda",
        //       path: "templates/simbolismo/alquimia/tabua-esmeralda.html",
        //       description:
        //         "Landing page editorial com tipografia serifada e ornamentos.",
        //       tags: ["landing", "editorial", "dark"],
        //       date: "2026-05-20",
        //     },
        //   ],
        //   children: [],
        //   // children: [
        //   //   {
        //   //     id: "ouro",
        //   //     name: "Opus Magnum",
        //   //     glyph: "☉",
        //   //     description:
        //   //       "A última etapa: ouro filosofal. Subcategoria dentro de subcategoria.",
        //   //     templates: [],
        //   //     children: [],
        //   //   },
        //   // ],
        // },

        /* ── Tarot ──────────────────────────────── */
        // {
        //   id: "tarot",
        //   name: "Tarot",
        //   glyph: "✷",
        //   description: "Os 22 arcanos maiores como sistema de design.",
        //   children: [],
        //   templates: [
        //     {
        //       id: "tar-001",
        //       title: "O Eremita",
        //       path: "templates/simbolismo/tarot/eremita.html",
        //       description:
        //         "Card layout com lanterna, capuz e gradientes noturnos.",
        //       tags: ["card", "dark", "interativo"],
        //       date: "2026-05-18",
        //     },
        //   ],
        // },

        /* ── Cultismo ───────────────────────────── */
        {
          id: "cultismo",
          name: "Cultismo",
          glyph: "✸",
          description:
            "Os livros que não deveriam existir · mistérios ocultos da humanidade.",
          children: [],
          templates: [
            {
              id: "cult-001",
              title: "Os Livros Que Não Deveriam Existir",
              path: "templates/simbolismo/cultismo/continuacao.html",
              description:
                "Mistérios ocultos da humanidade em um layout de arquivo proibido.",
              tags: ["esotérico", "místico", "editorial"],
              date: "2026-05-20",
            },
            {
              id: "cult-002",
              title: "Codex Profundus",
              path: "templates/simbolismo/cultismo/cultismo_codex_profundus.html",
              description: "Os Guardiões do Silêncio.",
              tags: ["esotérico", "místico", "editorial"],
              date: "2026-05-20",
            },
            {
              id: "cult-003",
              title: "Cultismo & Simbolismos Ocultos",
              path: "templates/simbolismo/cultismo/cultismo_simbolismos.html",
              description:
                "Compêndio visual de símbolos esquecidos e suas correspondências.",
              tags: ["esotérico", "místico", "editorial"],
              date: "2026-05-21",
            },
          ],
        },
      ],
    },
    /* ============================================
     * TUNELAMENTO QUÂNTICO
     * ============================================ */

    {
      id: "tunelamento_quantico",
      name: "Tunelamento Quântico",
      glyph: "✦",
      description:
        "Fenômeno quântico-mecânico pelo qual uma partícula atravessa uma barreira.",
      tags: ["esotérico", "místico", "mecânica quântica"],
      children: [],
      templates: [
        {
          id: "tun-001",
          title: "Tunelamento Quântico",
          path: "templates/tunelamento_quantico/tunelamento_quantico.html",
          description:
            "Fenômeno quântico-mecânico pelo qual uma partícula atravessa uma barreira.",
          tags: ["esotérico", "místico", "mecânica quântica"],
          date: "2026-05-20",
        },
      ],
    },

    /* ============================================
     * O CAPTALISMO POR PLATÃO
     * ============================================ */

    {
      id: "capitalismo",
      name: "Capitalismo por Platão",
      glyph: "◇",
      description:
        "O capitalismo não é bom — é o que melhor usa nossa natureza imperfeita.",
      tags: ["capitalismo", "platônico", "política"],
      children: [],
      templates: [
        {
          id: "cap-001",
          title: "Platão",
          path: "templates/Platão/plato-capitalism.html",
          description:
            "O capitalismo não é bom — é o que melhor usa nossa natureza imperfeita.",
          tags: ["capitalismo", "platônico", "política"],
          date: "2026-05-20",
        },
      ],
    },

    /* ============================================
     * BURACO NEGRO DE KERR
     * ============================================ */

    {
      id: "buraco_negro_Kerr",
      name: "Buraco Negro de Kerr",
      glyph: "◉",
      description:
        "Modelo de buraco negro em rotação, descrito pela solução de Kerr.",
      tags: ["física", "astronomia", "relatividade"],
      children: [],
      templates: [
        {
          id: "bur-001",
          title: "Buraco Negro de Kerr",
          path: "templates/buraco_negro_Kerr/kerr_black_hole.html",
          description:
            "Modelo de buraco negro em rotação, descrito pela solução de Kerr.",
          tags: ["física", "astronomia", "relatividade"],
          date: "2026-05-20",
        },
      ],
    },

    /* ============================================
     * BATERIA
     * ============================================ */

    {
      id: "bateria_bagda",
      name: "Bateria Bagda",
      glyph: "◉",
      description: "Bateria Bagda.",
      tags: ["antigo", "mesopotâmia", "arqueologia"],
      templates: [
        // {
        //   id: "bat-001",
        //   title: "Bateria Bagda",
        //   path: "templates/bateria_bagda/bateria_de_bagda.html",
        //   description:
        //     "Nas profundezas silenciosas da antiga Mesopotâmia, onde o vento atravessa ruínas enterradas pelo tempo e a areia parece esconder memórias esquecidas da humanidade, arqueólogos encontraram um objeto que desafiaria séculos de compreensão histórica.",
        //   tags: ["antigo", "mesopotâmia", "arqueologia"],
        //   date: "2026-05-20",
        // },
        {
          id: "bat-001",
          title: "Bateria Bagda",
          path: "templates/bateria_bagda/bateria_bagda.html",
          description:
            "Nas profundezas silenciosas da antiga Mesopotâmia, onde o vento atravessa ruínas enterradas pelo tempo e a areia parece esconder memórias esquecidas da humanidade, arqueólogos encontraram um objeto que desafiaria séculos de compreensão histórica.",
          tags: ["antigo", "mesopotâmia", "arqueologia"],
          date: "2026-05-20",
        },
      ],
      children: [],
    },

    /* ============================================
     * ADRENOCROMO
     * ============================================ */
    {
      id: "adrenocromo",
      name: "Adrenocromo",
      glyph: "🧪",
      description: "Teorias, mitos urbanos e documentações sobre o composto.",
      tags: ["conspiração", "mistério", "documentário"],
      children: [],
      templates: [
        {
          id: "adr-001",
          title: "Documentário Adrenocromo",
          path: "templates/adrenocromo/documentario_adrenocromo.html",
          description: "Interface e index principal para o acervo documental.",
          tags: ["documentário", "dark", "layout"],
          date: "2026-05-31",
        },
        {
          id: "adr-002",
          title: "Template Documentário Adrenocromo",
          path: "templates/adrenocromo/template_documentario_adrenocromo.html",
          description: "Layout de página estruturado para exibição de mídia.",
          tags: ["documentário", "media", "template"],
          date: "2026-05-31",
        },
      ],
    },

    /* ============================================
     * DIVULGAÇÃO UAPs
     * ============================================ */
    {
      id: "divulgacao_uaps",
      name: "Divulgação UAPs",
      glyph: "🛸",
      description:
        "Registros e relatórios oficiais sobre Fenômenos Anômalos Não Identificados.",
      tags: ["uap", "ovni", "militar"],
      children: [],
      templates: [
        {
          id: "uap-001",
          title: "Codex UAP",
          path: "templates/divulgacao_uaps/codex.html",
          description: "Compêndio histórico e registros ufológicos.",
          tags: ["arquivo", "documentos", "história"],
          date: "2026-05-31",
        },
        {
          id: "uap-002",
          title: "Player Interativo UAP",
          path: "templates/divulgacao_uaps/player_interativo.html",
          description:
            "Módulo interativo para análise de avistamentos e áudio.",
          tags: ["interativo", "player", "multimídia"],
          date: "2026-05-31",
        },
        {
          id: "uap-003",
          title: "Roteiro do Template UAP",
          path: "templates/divulgacao_uaps/roteiro_template.html",
          description: "Estrutura narrativa e roteiros de apresentação.",
          tags: ["roteiro", "documentação", "texto"],
          date: "2026-05-31",
        },
      ],
    },
    /* ============================================
     * RELATÓRIO INSTITUCIONAL DE INVESTIMENTOS
     * ============================================ */
    {
      id: "relatorio_institucional_investimentos",
      name: "Relatório Institucional de Investimentos",
      glyph: "📊",
      description:
        "Análises de mercado, balanços e projeções estratégicas institucionais.",
      tags: ["investimentos", "corporativo", "relatório"],
      children: [],
      templates: [
        {
          id: "inv-001",
          title: "Relatório de Investimentos 2026",
          path: "templates/relatorio_institucional_investimentos/relatorio_investimentos_2026.html",
          description:
            "Painel executivo com indicadores macroeconômicos e alocação de ativos.",
          tags: ["finanças", "dashboard", "executivo"],
          date: "2026-05-31",
        },
      ],
    },

    /* ============================================
     * MINIMALISMO
     * ============================================ */
    // {
    //   id: "minimalismo",
    //   name: "Minimalismo",
    //   glyph: "◯",
    //   description:
    //     "Subtração como ferramenta. Espaço, ritmo, silêncio tipográfico.",
    //   tags: ["clean", "moderno"],
    //   children: [],
    //   templates: [
    //     {
    //       id: "min-001",
    //       title: "Branco Absoluto",
    //       path: "templates/minimalismo/branco-absoluto.html",
    //       description:
    //         "Página de portfolio com grid suíço e tipografia sem-serifa.",
    //       tags: ["portfolio", "light", "swiss"],
    //       date: "2026-05-15",
    //     },
    //   ],
    // },

    /* ============================================
     * CYBERPUNK
     * ============================================ */
    // {
    //   id: "cyberpunk",
    //   name: "Cyberpunk",
    //   glyph: "◉",
    //   description:
    //     "Neon, ruído, tipografia mono. Estética dos becos de Neo-Tokyo.",
    //   tags: ["neon", "glitch", "futurista"],
    //   children: [],
    //   templates: [
    //     {
    //       id: "cyb-001",
    //       title: "Neon Sprawl",
    //       path: "templates/cyberpunk/neon-sprawl.html",
    //       description: "Dashboard com elementos brutalistas e cores saturadas.",
    //       tags: ["dashboard", "dark", "glitch"],
    //       date: "2026-05-22",
    //     },
    //   ],
    // },
  ],
};
