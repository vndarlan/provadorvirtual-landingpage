# Documentação de Integração — look.me Widget

## Visão Geral

O look.me é um **provador virtual** que permite aos clientes do seu e-commerce experimentarem roupas virtualmente antes de comprar.

A integração é feita através de um **widget JavaScript** que você adiciona nas páginas de produto da sua loja.

---

## Como Funciona

```
┌─────────────────────────────────────────────────────────────┐
│                      SUA LOJA                               │
│                                                             │
│  Página de Produto                                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │  [Foto do Produto]                                    │  │
│  │                                                       │  │
│  │  Nome do Produto                                      │  │
│  │  R$ XX,XX                                             │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  👁️ Experimentar Virtualmente                  │  │  │ ← Widget look.me
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  [COMPRAR]                                            │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼ Cliente clica
┌─────────────────────────────────────────────────────────────┐
│                    MODAL LOOK.ME                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │  📷 Faça upload da sua foto                          │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │                                                 │  │  │
│  │  │         Arraste sua foto aqui                   │  │  │
│  │  │              ou clique                          │  │  │
│  │  │                                                 │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  [📸 Usar Câmera]                                    │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼ Upload + Processamento IA
┌─────────────────────────────────────────────────────────────┐
│                      RESULTADO                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │    [ANTES]              [DEPOIS]                      │  │
│  │      👤         →         👤👗                        │  │
│  │                                                       │  │
│  │  ✅ Veja como ficou!                                  │  │
│  │                                                       │  │
│  │  [COMPRAR AGORA]        [TENTAR OUTRA FOTO]          │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Instalação

### Passo 1: Cadastre-se no look.me

1. Acesse [lookme.ai](https://lookme.ai)
2. Crie sua conta de lojista
3. Receba sua **API Key** única

### Passo 2: Adicione o Widget na Página de Produto

Adicione o seguinte código na página de produto da sua loja:

```html
<!-- Container do Widget look.me -->
<div 
  id="lookme-widget"
  data-product-image="URL_DA_IMAGEM_DO_PRODUTO"
  data-product-name="NOME_DO_PRODUTO"
  data-product-id="ID_DO_PRODUTO"
></div>

<!-- Script do look.me (adicione antes do </body>) -->
<script src="https://cdn.lookme.ai/widget.js?key=SUA_API_KEY"></script>
```

### Passo 3: Configure os Data Attributes

| Atributo | Obrigatório | Descrição |
|----------|-------------|-----------|
| `data-product-image` | ✅ Sim | URL da imagem da roupa (PNG ou JPG) |
| `data-product-name` | ❌ Não | Nome do produto (exibido no modal) |
| `data-product-id` | ❌ Não | ID/SKU do produto (para analytics) |
| `data-product-price` | ❌ Não | Preço do produto |
| `data-button-text` | ❌ Não | Texto do botão (padrão: "Experimentar Virtualmente") |
| `data-button-color` | ❌ Não | Cor do botão em hex (padrão: #E31B23) |

---

## Exemplos por Plataforma

### Shopify

No arquivo `product.liquid` ou no bloco de produto:

```html
<div 
  id="lookme-widget"
  data-product-image="{{ product.featured_image | img_url: '1024x1024' }}"
  data-product-name="{{ product.title }}"
  data-product-id="{{ product.id }}"
  data-product-price="{{ product.price | money }}"
></div>

<script src="https://cdn.lookme.ai/widget.js?key=SUA_API_KEY"></script>
```

### WooCommerce (WordPress)

No arquivo `single-product.php` ou via plugin:

```php
<div 
  id="lookme-widget"
  data-product-image="<?php echo wp_get_attachment_url(get_post_thumbnail_id()); ?>"
  data-product-name="<?php echo get_the_title(); ?>"
  data-product-id="<?php echo get_the_ID(); ?>"
  data-product-price="<?php echo $product->get_price(); ?>"
></div>

<script src="https://cdn.lookme.ai/widget.js?key=SUA_API_KEY"></script>
```

### VTEX

No template de produto:

```html
<div 
  id="lookme-widget"
  data-product-image="{productImage}"
  data-product-name="{productName}"
  data-product-id="{productId}"
></div>

<script src="https://cdn.lookme.ai/widget.js?key=SUA_API_KEY"></script>
```

### Nuvemshop

No tema, arquivo de produto:

```html
<div 
  id="lookme-widget"
  data-product-image="{{ product.featured_image | product_image_url('large') }}"
  data-product-name="{{ product.name }}"
  data-product-id="{{ product.id }}"
></div>

<script src="https://cdn.lookme.ai/widget.js?key=SUA_API_KEY"></script>
```

### HTML/Site Próprio

```html
<div 
  id="lookme-widget"
  data-product-image="https://seusite.com/imagens/vestido-azul.jpg"
  data-product-name="Vestido Azul Elegante"
  data-product-id="SKU-001"
></div>

<script src="https://cdn.lookme.ai/widget.js?key=SUA_API_KEY"></script>
```

---

## Requisitos da Imagem do Produto

Para melhores resultados, a imagem do produto deve:

| Requisito | Especificação |
|-----------|---------------|
| Formato | PNG ou JPG |
| Resolução mínima | 512x512 pixels |
| Resolução recomendada | 1024x1024 pixels |
| Fundo | Preferencialmente branco ou transparente |
| Enquadramento | Roupa inteira visível, sem cortes |
| Modelo | Pode ser foto em modelo ou foto flat lay |

**Exemplos de imagens ideais:**

```
✅ BOM                    ❌ RUIM
┌─────────────┐          ┌─────────────┐
│             │          │    ┌───┐    │
│   ┌─────┐   │          │    │   │    │  ← Cortada
│   │     │   │          │    │   │    │
│   │ 👗  │   │          │    └───┘    │
│   │     │   │          │             │
│   └─────┘   │          └─────────────┘
│             │          
│ Fundo limpo │          ┌─────────────┐
└─────────────┘          │ 👗👜👠🧣   │  ← Muitos itens
                         └─────────────┘
```

---

## Customização Visual

### Cores e Estilo

```html
<div 
  id="lookme-widget"
  data-product-image="..."
  data-button-text="Prove Virtualmente"
  data-button-color="#E31B23"
  data-button-style="rounded"
></div>
```

### Estilos disponíveis:

| `data-button-style` | Aparência |
|---------------------|-----------|
| `rounded` | Bordas arredondadas (padrão) |
| `square` | Bordas retas |
| `pill` | Formato pílula |
| `minimal` | Apenas texto, sem fundo |

### CSS Customizado

Você pode sobrescrever os estilos padrão:

```css
/* Botão principal */
#lookme-widget button {
  background: #seu-cor !important;
  font-family: 'Sua Fonte', sans-serif !important;
}

/* Modal */
.lookme-modal {
  /* seus estilos */
}
```

---

## Eventos JavaScript

O widget dispara eventos que você pode capturar:

```javascript
// Quando o modal abre
document.addEventListener('lookme:open', (e) => {
  console.log('Modal aberto para:', e.detail.productName);
  // Analytics, etc.
});

// Quando o cliente faz upload
document.addEventListener('lookme:upload', (e) => {
  console.log('Foto enviada');
});

// Quando o resultado é gerado
document.addEventListener('lookme:result', (e) => {
  console.log('Resultado pronto:', e.detail.resultImage);
});

// Quando o cliente clica em comprar (no modal)
document.addEventListener('lookme:purchase', (e) => {
  console.log('Intenção de compra:', e.detail.productId);
});

// Quando o modal fecha
document.addEventListener('lookme:close', (e) => {
  console.log('Modal fechado');
});
```

---

## API Avançada

Para integrações mais complexas, você pode controlar o widget via JavaScript:

```javascript
// Inicializar manualmente
LookMe.init({
  apiKey: 'sua-api-key',
  productImage: 'https://...',
  productName: 'Vestido',
  productId: '123',
  
  // Callbacks
  onOpen: () => {},
  onClose: () => {},
  onResult: (imageUrl) => {},
  onError: (error) => {},
});

// Abrir modal programaticamente
LookMe.open();

// Fechar modal
LookMe.close();

// Mudar produto (para SPAs)
LookMe.setProduct({
  image: 'https://...',
  name: 'Novo Produto',
  id: '456'
});
```

---

## FAQ

### O widget funciona em mobile?
Sim! O widget é totalmente responsivo e funciona em smartphones e tablets.

### Quanto tempo leva para gerar a imagem?
Em média, 3-5 segundos dependendo da qualidade da imagem.

### As fotos dos clientes são armazenadas?
Não. As fotos são processadas em tempo real e descartadas imediatamente após gerar o resultado. Não armazenamos dados pessoais.

### Funciona com qualquer tipo de roupa?
Funciona melhor com: vestidos, camisetas, blusas, calças, saias, casacos. Acessórios (bolsas, sapatos, óculos) ainda não são suportados.

### Posso testar antes de contratar?
Sim! Oferecemos 100 processamentos gratuitos para teste.

---

## Suporte

- **Email:** suporte@lookme.ai
- **WhatsApp:** +55 11 99999-9999
- **Documentação:** docs.lookme.ai

---

## Changelog

| Versão | Data | Mudanças |
|--------|------|----------|
| 1.0.0 | 2026-02-06 | Lançamento inicial |

