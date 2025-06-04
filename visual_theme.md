# Tema Visivo e Palette Colori per Strade Segrete

Questo documento definisce il tema visivo completo e la palette colori per il redesign del sito "Strade Segrete", con particolare attenzione all'uso dei verdi e all'ottimizzazione delle CTA.

## Palette Colori Principale

### Verdi (Colori Primari)
- **Verde Alpino** `#2C5E1A` - Verde scuro e ricco per elementi principali e accenti importanti
- **Verde Prato** `#4A7C3A` - Verde medio per elementi secondari e sfondi
- **Verde Salvia** `#7EA172` - Verde chiaro per sfondi, bordi e accenti leggeri
- **Verde Menta** `#C5E0B4` - Verde molto chiaro per sfondi sottili e hover states

### Colori Complementari
- **Terracotta** `#C45C26` - Per accenti e alcuni elementi interattivi
- **Crema** `#F2E8DC` - Per sfondi chiari e texture
- **Pietra** `#5A5A5A` - Per testo secondario e icone
- **Cobalto** `#1D3557` - Per testo principale e alcuni elementi UI

### Colori Funzionali
- **CTA Primario** `#E63946` - Rosso brillante per call-to-action principali
- **CTA Secondario** `#F9A03F` - Arancione per call-to-action secondarie
- **Successo** `#2A9D8F` - Verde-blu per messaggi di successo
- **Errore** `#E76F51` - Rosso-arancio per messaggi di errore
- **Info** `#457B9D` - Blu medio per messaggi informativi

## Applicazione della Palette

### Header
- **Background**: Gradiente da `#2C5E1A` a `#4A7C3A`
- **Testo**: Bianco `#FFFFFF`
- **Accenti**: `#C5E0B4` per hover e elementi attivi
- **CTA nel menu**: `#E63946` con testo bianco

### Hero Section
- **Overlay**: Gradiente semi-trasparente con base `#2C5E1A` (opacity 0.6)
- **Testo**: Bianco `#FFFFFF`
- **CTA Primario**: `#E63946` con testo bianco
- **CTA Secondario**: Bianco trasparente (ghost button) con bordo bianco

### Corpo Pagina
- **Background**: Bianco `#FFFFFF` o `#F9F9F9` per sezioni alternate
- **Testo Principale**: `#1D3557`
- **Testo Secondario**: `#5A5A5A`
- **Accenti**: `#4A7C3A` per link e elementi interattivi
- **Bordi**: `#C5E0B4` o `#E6E6E6`

### Card e Contenitori
- **Background**: Bianco `#FFFFFF`
- **Bordi**: `#E6E6E6` o `#C5E0B4`
- **Header Card**: `#4A7C3A` con testo bianco o `#F2E8DC` con testo scuro
- **Accenti**: `#7EA172` per bordi e dettagli

### Footer
- **Background**: `#2C5E1A`
- **Testo**: Bianco `#FFFFFF`
- **Link**: `#C5E0B4`
- **Bordi**: `#4A7C3A`

## Tipografia

### Font Family
- **Titoli**: "Montserrat", sans-serif (700, 600)
- **Corpo del testo**: "Open Sans", sans-serif (400, 500)
- **UI Elements**: "Roboto", sans-serif (400, 500)

### Dimensioni Font
- **H1**: 3rem (48px) / 2.5rem mobile
- **H2**: 2.25rem (36px) / 2rem mobile
- **H3**: 1.75rem (28px) / 1.5rem mobile
- **H4**: 1.25rem (20px) / 1.125rem mobile
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **XSmall**: 0.75rem (12px)

### Font Weight
- **Bold**: 700
- **Semi-Bold**: 600
- **Medium**: 500
- **Regular**: 400

## Ottimizzazione CTA

### Principi Generali
1. **Contrasto Elevato**: Le CTA devono sempre avere un contrasto elevato rispetto allo sfondo
2. **Dimensioni Generose**: Pulsanti grandi e facilmente cliccabili (min 44x44px)
3. **Spazio Bianco**: Ampio spazio intorno alle CTA per farle risaltare
4. **Gerarchia Visiva**: CTA primarie più evidenti delle secondarie
5. **Consistenza**: Stessi stili in tutto il sito per riconoscibilità immediata

### CTA Primarie
- **Colore**: `#E63946` (rosso brillante)
- **Testo**: Bianco `#FFFFFF`
- **Padding**: 16px 32px (desktop) / 14px 28px (mobile)
- **Border-radius**: 8px
- **Font**: "Montserrat", 16px, 600
- **Hover**: Scurire del 10%, leggero aumento di dimensione (scale: 1.03)
- **Transizione**: 0.3s ease-in-out
- **Shadow**: 0 4px 8px rgba(230, 57, 70, 0.3)

### CTA Secondarie
- **Colore**: `#F9A03F` (arancione)
- **Testo**: Bianco `#FFFFFF`
- **Padding**: 14px 28px (desktop) / 12px 24px (mobile)
- **Border-radius**: 8px
- **Font**: "Montserrat", 16px, 600
- **Hover**: Scurire del 10%, leggero aumento di dimensione (scale: 1.03)
- **Transizione**: 0.3s ease-in-out
- **Shadow**: 0 4px 8px rgba(249, 160, 63, 0.3)

### CTA Terziarie
- **Colore**: Trasparente con bordo `#4A7C3A` (verde prato)
- **Testo**: `#4A7C3A`
- **Padding**: 14px 28px (desktop) / 12px 24px (mobile)
- **Border-radius**: 8px
- **Font**: "Montserrat", 16px, 600
- **Hover**: Background `#4A7C3A` al 10% di opacità
- **Transizione**: 0.3s ease-in-out

### CTA Floating
- **Background**: Bianco `#FFFFFF`
- **Bordo**: Sottile `#C5E0B4`
- **Shadow**: 0 8px 24px rgba(0, 0, 0, 0.15)
- **CTA Interna**: Stile CTA primaria ma più compatta
- **Posizione**: Angolo inferiore destro, 30px dal bordo
- **Animazione**: Fade-in + slide-up quando appare

## Elementi UI

### Pulsanti
- **Primario**: Stile CTA primaria
- **Secondario**: Stile CTA secondaria
- **Terziario**: Stile CTA terziaria
- **Link**: Testo `#4A7C3A` con underline al hover
- **Disabled**: Grigio `#CCCCCC` con testo `#888888`

### Form Elements
- **Input Background**: Bianco `#FFFFFF`
- **Input Border**: `#C5E0B4` (default), `#4A7C3A` (focus)
- **Input Text**: `#1D3557`
- **Placeholder**: `#AAAAAA`
- **Label**: `#5A5A5A`, 14px, 500
- **Focus Ring**: `#7EA172` con leggero glow

### Card
- **Background**: Bianco `#FFFFFF`
- **Border**: Nessuno o molto sottile `#E6E6E6`
- **Shadow**: 0 4px 12px rgba(0, 0, 0, 0.08)
- **Hover**: Shadow più pronunciata e leggera elevazione
- **Border-radius**: 12px

### Badge e Tag
- **Background**: Varianti trasparenti dei colori principali (opacity 0.1-0.2)
- **Testo**: Versione piena del colore di background
- **Padding**: 4px 12px
- **Border-radius**: 16px o 4px (a seconda del contesto)

## Iconografia

### Stile Icone
- **Tipo**: Line icons con stroke consistente
- **Dimensioni**: 24x24px (default), scalabili secondo contesto
- **Colore**: Ereditato dal testo o specificato dalla palette
- **Hover**: Leggero aumento di opacità o cambio colore

### Icone Funzionali
- **Menu**: Hamburger a 3 linee
- **Chiusura**: X semplice
- **Ricerca**: Lente d'ingrandimento
- **Filtri**: Icona filtro/imbuto
- **Mappa**: Pin di localizzazione
- **Difficoltà**: Montagne (1-3 a seconda del livello)

### Icone Social
- **Stile**: Filled con colori brand o monocromatiche bianche/verdi
- **Dimensioni**: 20x20px
- **Disposizione**: In linea con spaziatura uniforme

## Immagini e Media

### Stile Fotografico
- **Soggetti**: Ciclisti in azione, paesaggi del Nord Italia, esperienze gastronomiche
- **Trattamento**: Luminoso, contrasto medio-alto, colori vividi ma naturali
- **Overlay**: Leggero overlay verde (`#2C5E1A` al 10-20%) per coerenza visiva
- **Crop**: Ritagli dinamici che evidenziano l'azione o il paesaggio

### Proporzioni Immagini
- **Hero**: 16:9 o full-width con altezza variabile
- **Card Tour**: 16:9
- **Galleria**: 1:1 (quadrato) o 4:3
- **Testimonianze**: 1:1 (ritratti)
- **Blog**: 16:9

### Trattamento Immagini
- **Angoli**: Arrotondati (8-12px) per card e thumbnail
- **Effetti Hover**: Leggero zoom (scale 1.05) con transizione fluida
- **Overlay**: Gradiente scuro dal basso per migliorare leggibilità testo sovrapposto

## Animazioni e Transizioni

### Principi
- **Subtile**: Animazioni leggere e non invadenti
- **Purposeful**: Solo animazioni che migliorano l'esperienza utente
- **Consistent**: Timing e curve di easing coerenti
- **Performant**: Ottimizzate per non impattare performance

### Timing
- **Rapido**: 150-200ms (hover, focus)
- **Medio**: 300-500ms (transizioni di pagina, apparizione elementi)
- **Lento**: 700-1000ms (animazioni complesse, parallax)

### Curve di Easing
- **Standard**: ease-in-out
- **Entrata**: ease-out
- **Uscita**: ease-in
- **Bounce**: cubic-bezier(0.175, 0.885, 0.32, 1.275) per effetti più giocosi

### Animazioni Specifiche
- **Hover CTA**: Scale + cambio colore
- **Apparizione Elementi**: Fade-in + leggero movimento dal basso
- **Carousel**: Slide con parallax
- **Menu Mobile**: Slide-in da destra
- **Lightbox**: Fade-in con leggero zoom

## Accessibilità

### Contrasto
- Tutti i testi rispettano WCAG AA (4.5:1 per testo normale, 3:1 per testo grande)
- CTA con contrasto elevato rispetto allo sfondo
- Focus states chiaramente visibili

### Focus States
- Outline visibile in `#4A7C3A` con spessore 2px
- Nessuna rimozione di outline, solo styling
- Focus visibile anche per navigazione da tastiera

### Hover States
- Cambiamenti di stato chiaramente percepibili
- Non affidarsi solo al colore per comunicare lo stato
- Transizioni fluide tra stati

### Testo
- Dimensioni minime leggibili (16px per corpo del testo)
- Line-height generoso (1.5 minimo)
- Contrasto adeguato con lo sfondo

## Responsive Design

### Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: ≥ 1200px

### Adattamenti Mobile
- Menu hamburger con dropdown
- CTA a larghezza piena
- Griglia a singola colonna
- Font size ridotti del 10-15%
- Padding ridotti del 20-30%
- CTA floating ancorata al fondo schermo

### Adattamenti Tablet
- Layout a 2 colonne per grid
- Sidebar collassabile
- Mappa interattiva ridimensionata
- Menu completo ma ottimizzato

## Implementazione CSS

### Variabili CSS
```css
:root {
  /* Colori */
  --color-alpine: #2C5E1A;
  --color-meadow: #4A7C3A;
  --color-sage: #7EA172;
  --color-mint: #C5E0B4;
  
  --color-terracotta: #C45C26;
  --color-cream: #F2E8DC;
  --color-stone: #5A5A5A;
  --color-cobalt: #1D3557;
  
  --color-cta: #E63946;
  --color-cta-secondary: #F9A03F;
  --color-success: #2A9D8F;
  --color-error: #E76F51;
  --color-info: #457B9D;
  
  /* Spacing */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  
  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --font-ui: 'Roboto', sans-serif;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-round: 50%;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-cta: 0 4px 8px rgba(230, 57, 70, 0.3);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-medium: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
}
```

### Utility Classes
```css
/* Text colors */
.text-alpine { color: var(--color-alpine); }
.text-meadow { color: var(--color-meadow); }
.text-sage { color: var(--color-sage); }
.text-terracotta { color: var(--color-terracotta); }
.text-stone { color: var(--color-stone); }
.text-cobalt { color: var(--color-cobalt); }

/* Background colors */
.bg-alpine { background-color: var(--color-alpine); }
.bg-meadow { background-color: var(--color-meadow); }
.bg-sage { background-color: var(--color-sage); }
.bg-mint { background-color: var(--color-mint); }
.bg-cream { background-color: var(--color-cream); }
.bg-white { background-color: white; }

/* Buttons */
.btn-primary {
  background-color: var(--color-cta);
  color: white;
  padding: 16px 32px;
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  box-shadow: var(--shadow-cta);
  transition: var(--transition-medium);
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #d02c38;
  transform: scale(1.03);
}

.btn-secondary {
  background-color: var(--color-cta-secondary);
  color: white;
  padding: 14px 28px;
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  box-shadow: 0 4px 8px rgba(249, 160, 63, 0.3);
  transition: var(--transition-medium);
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #e8900a;
  transform: scale(1.03);
}

.btn-tertiary {
  background-color: transparent;
  color: var(--color-meadow);
  padding: 14px 28px;
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid var(--color-meadow);
  transition: var(--transition-medium);
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn-tertiary:hover {
  background-color: rgba(74, 124, 58, 0.1);
}

/* Spacing */
.mt-xs { margin-top: var(--space-xs); }
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }

.mb-xs { margin-bottom: var(--space-xs); }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }

.py-xs { padding-top: var(--space-xs); padding-bottom: var(--space-xs); }
.py-sm { padding-top: var(--space-sm); padding-bottom: var(--space-sm); }
.py-md { padding-top: var(--space-md); padding-bottom: var(--space-md); }
.py-lg { padding-top: var(--space-lg); padding-bottom: var(--space-lg); }
.py-xl { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }

.px-xs { padding-left: var(--space-xs); padding-right: var(--space-xs); }
.px-sm { padding-left: var(--space-sm); padding-right: var(--space-sm); }
.px-md { padding-left: var(--space-md); padding-right: var(--space-md); }
.px-lg { padding-left: var(--space-lg); padding-right: var(--space-lg); }
.px-xl { padding-left: var(--space-xl); padding-right: var(--space-xl); }

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-sm);
}

@media (min-width: 576px) {
  .container {
    padding: 0 var(--space-md);
  }
}

/* Flex utilities */
.d-flex { display: flex; }
.flex-column { flex-direction: column; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.align-center { align-items: center; }
.flex-wrap { flex-wrap: wrap; }
.gap-xs { gap: var(--space-xs); }
.gap-sm { gap: var(--space-sm); }
.gap-md { gap: var(--space-md); }

/* Text utilities */
.text-center { text-align: center; }
.text-bold { font-weight: 700; }
.text-semibold { font-weight: 600; }
.text-medium { font-weight: 500; }
.text-regular { font-weight: 400; }

/* Responsive utilities */
@media (max-width: 575px) {
  .hide-mobile { display: none !important; }
}

@media (min-width: 576px) and (max-width: 991px) {
  .hide-tablet { display: none !important; }
}

@media (min-width: 992px) {
  .hide-desktop { display: none !important; }
}
```

## Esempi di Implementazione

### Header con CTA
```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <a href="/" class="logo">
        <img src="images/logo.svg" alt="Strade Segrete">
      </a>
      <nav class="nav-desktop hide-mobile hide-tablet">
        <ul>
          <li><a href="/destinazioni">Destinazioni</a></li>
          <li><a href="/tour">Tour</a></li>
          <li><a href="/sapori">Sapori del Nord</a></li>
          <li><a href="/chi-siamo">Chi Siamo</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contatti">Contatti</a></li>
        </ul>
      </nav>
      <a href="/tour-personalizzato" class="btn-primary hide-mobile">Crea il Tuo Tour</a>
      <button class="hamburger hide-desktop" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</header>
```

### Hero Section con CTA
```html
<section class="hero" style="background-image: url('images/hero-dolomiti.jpg');">
  <div class="hero-overlay"></div>
  <div class="container">
    <div class="hero-content">
      <h1>Scopri i Sentieri Nascosti del Nord Italia</h1>
      <p>Tour guidati in bici tra paesaggi mozzafiato e sapori autentici delle Dolomiti, dei Laghi e del Piemonte.</p>
      <div class="hero-buttons">
        <a href="/tour" class="btn-primary">Esplora i Tour</a>
        <a href="/tour-personalizzato" class="btn-secondary">Crea il Tuo Tour</a>
      </div>
    </div>
  </div>
</section>
```

### CTA Floating
```html
<div class="cta-floating" id="floatingCTA">
  <div class="cta-content">
    <div class="cta-text">
      <h3>Pronto a Scoprire il Nord Italia?</h3>
      <p>Tour personalizzati con guide esperte</p>
    </div>
    <div class="cta-buttons">
      <a href="/tour-personalizzato" class="btn-primary">Crea il Tuo Tour</a>
    </div>
  </div>
  <button class="cta-close" aria-label="Chiudi">&times;</button>
</div>
```

Questo tema visivo garantirà una coerenza estetica in tutto il sito, con particolare attenzione all'uso strategico dei verdi e all'ottimizzazione delle CTA per massimizzare le conversioni.
