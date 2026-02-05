# MEMORY.md — Guarda-Roupa Virtual

## Visão do Produto

**Provador Virtual B2B** — Plugin para lojas de roupa com e-commerce.

### Proposta de Valor
- Cliente faz upload de foto → vê como ficaria com a roupa
- Aumenta conversão (cliente "experimenta" antes de comprar)
- Reduz devolução (expectativa alinhada com realidade)

### Público-Alvo (B2B)
- Lojas de roupa com e-commerce
- Pode ter loja física, mas obrigatoriamente tem online
- Primeiro: médias lojas brasileiras
- Futuro: grandes marcas

## Contexto

- **Origem:** Hackathon interno da empresa do Vinícius
- **Equipe:** Vinícius + parceiro
- **Prazo:** Hackathon (definir data limite)

## Roadmap

### Fase 1 — MVP (Hackathon)
- [ ] Landing page para vender o conceito B2B
- [ ] Demo funcional de try-on com upload de foto
- [ ] Integração com modelo de geração de imagem

### Fase 2 — Produto
- [ ] Plugin instalável (Shopify? WooCommerce? Custom?)
- [ ] Painel para lojista gerenciar catálogo
- [ ] API para integração

### Fase 3 — Evolução
- [ ] Avatar 3D paramétrico (estilo Zara)
- [ ] Múltiplos ângulos
- [ ] Recomendação de tamanho baseada em medidas

## Repositório

- **GitHub:** `vndarlan/openclaw-provadorvirtual`
- **URL:** https://github.com/vndarlan/openclaw-provadorvirtual
- **Local:** `/home/clawd/.openclaw/workspace/look.me/repo/`

## Stack (definida)

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS (dark theme)
- **Animações:** Framer Motion
- **Icons:** Lucide React
- **Try-on Model:** IDM-VTON / OOTDiffusion / API terceira (a definir)
- **Deploy:** Railway
- **Repo:** GitHub vndarlan/openclaw-provadorvirtual
- **URL Repo:** https://github.com/vndarlan/openclaw-provadorvirtual

## Identidade Visual

- **Marca:** look.me
- **Slogan:** "O provador oficial do seu e-commerce."
- **Paleta:** Dark theme (inspirado em Seedream)
  - Background: #0A0A0B
  - Surface: #141416
  - Accent: #6366F1 (violeta)
  - Text: #FFFFFF / #8B8D98

## Referências

### Zara Virtual Fitting
- Usa avatares 3D pré-renderizados
- Cliente escolhe avatar parecido (não usa foto própria)
- Roupas escaneadas em 3D
- Visualização 360° com animação

### Modelos de Try-On
- **IDM-VTON** — open source, bons resultados
- **OOTDiffusion** — alternativa open source
- **Kolors/Fashn.ai** — APIs pagas, mais fáceis de integrar

## Decisões

*(registrar aqui cada decisão importante)*

---

*Criado: 2026-02-05*
