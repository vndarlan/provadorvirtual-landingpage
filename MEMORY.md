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

- **GitHub:** `vndarlan/provadorvirtual-landingpage`
- **URL:** https://github.com/vndarlan/provadorvirtual-landingpage
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
- **Paleta:** Clean fashion (inspirado em Renner)
  - Background: #FFFFFF / #F5F5F5
  - Primary/CTA: #6366F1 (violeta)
  - Logo accent: #E31B23 (vermelho — só na marca)
  - Text: #1A1A1A / #6B7280
  - Seções escuras: #1A1A1A (dark sections para contraste)

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

### 2026-02-06: Modelo de Integração
- **Escolhido:** Widget JavaScript Universal com Data Attributes
- **Por quê:** Funciona em qualquer plataforma (Shopify, WooCommerce, VTEX, Nuvemshop, custom)
- **Como funciona:**
  1. Lojista adiciona `<div id="lookme-widget" data-product-image="...">` na página de produto
  2. Inclui script `<script src="https://cdn.lookme.ai/widget.js?key=API_KEY">`
  3. Widget injeta botão "Experimentar Virtualmente"
  4. Cliente clica → modal abre → upload foto → API processa → resultado
- **Documentação:** `docs/INTEGRATION.md`

### 2026-02-06: Identidade Visual
- Mudança de dark theme (violet) para red/white (estilo Seedream)

### 2026-02-10: Redesign Paleta — Clean Fashion
- Vermelho era demais, site parecia "Coca-Cola"
- Referência: Renner (vermelho só na logo, resto clean)
- Nova paleta: branco predominante, violeta nos CTAs, vermelho só na marca
- Hero: fundo branco com accents violeta
- Seções "Como Funciona" e "CTA Final": fundo escuro (#1A1A1A) para contraste elegante
- Seções "O Que Fazemos" e "Únicos": fundo cinza claro (#F5F5F5)

---

*Criado: 2026-02-05*
