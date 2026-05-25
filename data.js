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
        {
          id: "alquimia",
          name: "Alquimia",
          glyph: "☿",
          description: "Sol, lua, mercúrio. A grande obra em HTML.",
          templates: [
            {
              id: "alq-001",
              title: "Tábua de Esmeralda",
              path: "templates/simbolismo/alquimia/tabua-esmeralda.html",
              description:
                "Landing page editorial com tipografia serifada e ornamentos.",
              tags: ["landing", "editorial", "dark"],
              date: "2026-05-20",
            },
          ],
          children: [
            {
              id: "ouro",
              name: "Opus Magnum",
              glyph: "☉",
              description:
                "A última etapa: ouro filosofal. Subcategoria dentro de subcategoria.",
              templates: [],
              children: [],
            },
          ],
        },

        /* ── Tarot ──────────────────────────────── */
        {
          id: "tarot",
          name: "Tarot",
          glyph: "✷",
          description: "Os 22 arcanos maiores como sistema de design.",
          children: [],
          templates: [
            {
              id: "tar-001",
              title: "O Eremita",
              path: "templates/simbolismo/tarot/eremita.html",
              description:
                "Card layout com lanterna, capuz e gradientes noturnos.",
              tags: ["card", "dark", "interativo"],
              date: "2026-05-18",
            },
          ],
        },

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
     * MINIMALISMO
     * ============================================ */
    {
      id: "minimalismo",
      name: "Minimalismo",
      glyph: "◯",
      description:
        "Subtração como ferramenta. Espaço, ritmo, silêncio tipográfico.",
      tags: ["clean", "moderno"],
      children: [],
      templates: [
        {
          id: "min-001",
          title: "Branco Absoluto",
          path: "templates/minimalismo/branco-absoluto.html",
          description:
            "Página de portfolio com grid suíço e tipografia sem-serifa.",
          tags: ["portfolio", "light", "swiss"],
          date: "2026-05-15",
        },
      ],
    },

    /* ============================================
     * CYBERPUNK
     * ============================================ */
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      glyph: "◉",
      description:
        "Neon, ruído, tipografia mono. Estética dos becos de Neo-Tokyo.",
      tags: ["neon", "glitch", "futurista"],
      children: [],
      templates: [
        {
          id: "cyb-001",
          title: "Neon Sprawl",
          path: "templates/cyberpunk/neon-sprawl.html",
          description: "Dashboard com elementos brutalistas e cores saturadas.",
          tags: ["dashboard", "dark", "glitch"],
          date: "2026-05-22",
        },
      ],
    },
  ],
};
