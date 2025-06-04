# Design della Landing Page Ultra-Minimalista

## Concetto Generale
Una landing page ultra-minimalista con navigazione a swipe verticale, focalizzata su tour in bici a Bergamo e dintorni. Il design sarà caratterizzato da un titolo centrato, una citazione elegante, e transizioni fluide tra sezioni a schermo intero.

## Struttura della Landing Page

### Hero Section
- **Background**: Immagine a schermo intero di alta qualità delle colline bergamasche all'alba/tramonto
- **Titolo**: "STRADE SEGRETE" centrato, grande, font sans-serif minimalista
- **Citazione**: "Esplora Bergamo come non l'hai mai vista" in font serif elegante
- **Indicatore di scroll**: Animazione sottile che invita allo scroll verso il basso

### Sezione Tour Bergamo
- **Background**: Immagine a schermo intero di un percorso ciclistico panoramico
- **Titolo**: "TOUR DELLE COLLINE" in posizione asimmetrica
- **Statistiche**: 
  - Distanza: 45 km
  - Dislivello: 850 m
  - Durata: 3.5 ore
- **Descrizione breve**: "Un percorso mozzafiato tra le colline bergamasche"
- **CTA**: Pulsante minimalista "SCOPRI" che porta alla pagina dettagliata

### Sezione Features Uniche
- **Background**: Sfumatura di verde con pattern sottile
- **Titolo**: "ESPERIENZA UNICA" centrato
- **Features**: 3-4 punti chiave presentati con icone minimaliste e brevi descrizioni
  - Strade poco conosciute
  - Guide locali esperte
  - Soste gastronomiche selezionate
  - Gruppi piccoli e personalizzati

### Sezione Carosello Immagini
- **Layout**: Carosello a schermo intero con transizioni fluide
- **Contenuto**: 4-5 immagini di alta qualità che mostrano:
  - Paesaggi mozzafiato
  - Momenti durante i tour
  - Esperienze gastronomiche
  - Dettagli delle biciclette
- **Controlli**: Indicatori minimalisti e frecce discrete

## Elementi di Design

### Tipografia
- **Font Titoli**: Montserrat Ultra Light per un look moderno e minimalista
  ```css
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  ```

- **Font Citazioni**: Playfair Display per un tocco elegante
  ```css
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  ```

- **Font Testo**: Open Sans Light per leggibilità
  ```css
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  ```

### Palette Colori
- **Primario**: Verde foresta scuro `#1A3C2B` - Rappresenta la natura e i paesaggi
- **Secondario**: Verde chiaro `#4A7C59` - Per accenti e dettagli
- **Accento**: Beige chiaro `#F2E8DC` - Per contrasto su elementi importanti
- **Neutri**: 
  - Bianco `#FFFFFF` - Per testo su sfondi scuri
  - Nero `#000000` - Per testo su sfondi chiari
  - Grigio scuro `#333333` - Per testo secondario

### Elementi UI Minimalisti
- **Pulsanti**: Bordi sottili, nessun riempimento, animazione sottile all'hover
  ```css
  .minimal-button {
    border: 1px solid currentColor;
    background: transparent;
    padding: 12px 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .minimal-button:hover {
    background-color: rgba(255,255,255,0.1);
  }
  ```

- **Navigazione**: Pulsanti discreti in alto a destra
  ```css
  .minimal-nav {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 100;
    display: flex;
    gap: 1rem;
  }
  ```

- **Indicatori di Scroll**: Animazione sottile che guida l'utente
  ```css
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 50px;
    border: 2px solid white;
    border-radius: 15px;
  }
  
  .scroll-indicator::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scrollDown 2s infinite;
  }
  ```

## Transizioni e Animazioni

### Transizione tra Sezioni
- Effetto di dissolvenza leggero combinato con un sottile movimento verticale
  ```css
  .section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .section.active {
    opacity: 1;
    transform: translateY(0);
  }
  ```

### Animazione Titoli
- Entrata con leggero ritardo degli elementi
  ```css
  .title-animation {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
  }
  
  .active .title-animation {
    opacity: 1;
    transform: translateY(0);
  }
  ```

### Animazione Statistiche
- Contatore numerico animato quando la sezione diventa visibile
  ```javascript
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  ```

## Mockup Visivo

### Hero Section
```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                STRADE SEGRETE              │
│                                            │
│      Esplora Bergamo come non l'hai        │
│               mai vista                    │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                    ▼                       │
└────────────────────────────────────────────┘
```

### Tour Bergamo Section
```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│   TOUR DELLE COLLINE                       │
│                                            │
│   45 km    850 m    3.5 ore                │
│                                            │
│   Un percorso mozzafiato tra               │
│   le colline bergamasche                   │
│                                            │
│   [SCOPRI]                                 │
│                                            │
│                                            │
│                                            │
│                    ▼                       │
└────────────────────────────────────────────┘
```

### Features Section
```
┌────────────────────────────────────────────┐
│                                            │
│            ESPERIENZA UNICA                │
│                                            │
│   ○               ○               ○        │
│ STRADE        GUIDE           SOSTE        │
│ SEGRETE       LOCALI      GASTRONOMICHE    │
│                                            │
│ Percorsi     Conoscenza    Prodotti        │
│ esclusivi    del territorio tipici locali  │
│                                            │
│                                            │
│                                            │
│                    ▼                       │
└────────────────────────────────────────────┘
```

### Carosello Immagini
```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│                                            │
│       ○ ● ○ ○ ○                            │
│                                            │
└────────────────────────────────────────────┘
```

## Implementazione Tecnica

### HTML Base
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strade Segrete | Tour in Bici a Bergamo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&family=Open+Sans:wght@300;400&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="minimal-nav">
    <button class="nav-button" data-target="contatti">CONTATTI</button>
    <button class="nav-button" data-target="chi-siamo">CHI SIAMO</button>
  </nav>
  
  <div class="fullpage-container">
    <section class="fullpage-section" id="hero">
      <div class="background" style="background-image: url('images/hero-bg.jpg')"></div>
      <div class="content">
        <h1 class="title-animation">STRADE SEGRETE</h1>
        <p class="quote title-animation">Esplora Bergamo come non l'hai mai vista</p>
      </div>
      <div class="scroll-indicator"></div>
    </section>
    
    <section class="fullpage-section" id="tour-bergamo">
      <div class="background" style="background-image: url('images/tour-bg.jpg')"></div>
      <div class="content">
        <h2 class="title-animation">TOUR DELLE COLLINE</h2>
        <div class="stats">
          <div class="stat"><span class="stat-number" data-value="45">0</span> km</div>
          <div class="stat"><span class="stat-number" data-value="850">0</span> m</div>
          <div class="stat"><span class="stat-number" data-value="3.5">0</span> ore</div>
        </div>
        <p class="description">Un percorso mozzafiato tra le colline bergamasche</p>
        <button class="minimal-button">SCOPRI</button>
      </div>
    </section>
    
    <section class="fullpage-section" id="features">
      <div class="background gradient"></div>
      <div class="content">
        <h2 class="title-animation">ESPERIENZA UNICA</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">○</div>
            <h3>STRADE SEGRETE</h3>
            <p>Percorsi esclusivi lontani dal turismo di massa</p>
          </div>
          <div class="feature">
            <div class="feature-icon">○</div>
            <h3>GUIDE LOCALI</h3>
            <p>Conoscenza approfondita del territorio e della sua storia</p>
          </div>
          <div class="feature">
            <div class="feature-icon">○</div>
            <h3>SOSTE GASTRONOMICHE</h3>
            <p>Degustazione di prodotti tipici locali selezionati</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="fullpage-section" id="gallery">
      <div class="carousel">
        <div class="carousel-item active" style="background-image: url('images/gallery-1.jpg')"></div>
        <div class="carousel-item" style="background-image: url('images/gallery-2.jpg')"></div>
        <div class="carousel-item" style="background-image: url('images/gallery-3.jpg')"></div>
        <div class="carousel-item" style="background-image: url('images/gallery-4.jpg')"></div>
        <div class="carousel-item" style="background-image: url('images/gallery-5.jpg')"></div>
      </div>
      <div class="carousel-indicators">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
      </div>
      <div class="carousel-controls">
        <button class="carousel-control prev">&lt;</button>
        <button class="carousel-control next">&gt;</button>
      </div>
    </section>
  </div>
  
  <script src="js/smooth-scroll.js"></script>
</body>
</html>
```

### CSS Principale
```css
/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  overflow: hidden;
}

/* Fullpage Layout */
.fullpage-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.fullpage-section {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
}

/* Background Styles */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.gradient {
  background: linear-gradient(135deg, #1A3C2B 0%, #4A7C59 100%);
}

/* Content Styles */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Typography */
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 4rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 1rem 0;
}

.quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.5rem;
  max-width: 600px;
}

.description {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 1rem 0 2rem;
}

/* Navigation */
.minimal-nav {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  display: flex;
  gap: 1rem;
}

.nav-button {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  padding: 0.5rem 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: rgba(255,255,255,0.1);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 15px;
}

.scroll-indicator::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  transform: translateX(-50%);
  animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0% { transform: translateX(-50%) translateY(0); opacity: 1; }
  75% { transform: translateX(-50%) translateY(20px); opacity: 0; }
  100% { transform: translateX(-50%) translateY(0); opacity: 0; }
}

/* Stats Section */
.stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
}

.stat {
  font-size: 1.2rem;
  font-weight: 300;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 200;
  display: block;
  margin-bottom: 0.5rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  width: 100%;
  max-width: 1000px;
}

.feature {
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Carousel */
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.5);
  cursor: pointer;
}

.indicator.active {
  background-color: white;
}

.carousel-controls {
  position: absolute;
  bottom: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}

.carousel-control {
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.carousel-control:hover {
  opacity: 1;
}

/* Buttons */
.minimal-button {
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 12px 24px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.minimal-button:hover {
  background-color: rgba(255,255,255,0.1);
}

/* Animations */
.title-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.active .title-animation {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .quote {
    font-size: 1.2rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

### JavaScript per Smooth Scroll e Animazioni
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.fullpage-section');
  const container = document.querySelector('.fullpage-container');
  let currentSection = 0;
  let isScrolling = false;
  
  // Inizializza la prima sezione come attiva
  sections[0].classList.add('active');
  
  // Funzione per animare i numeri
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Funzione per gestire l'intersezione delle sezioni
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Rimuovi la classe active da tutte le sezioni
        sections.forEach(section => section.classList.remove('active'));
        
        // Aggiungi la classe active alla sezione corrente
        entry.target.classList.add('active');
        
        // Anima i numeri se ci sono statistiche
        const stats = entry.target.querySelectorAll('.stat-number');
        stats.forEach(stat => {
          const value = parseFloat(stat.getAttribute('data-value'));
          animateValue(stat, 0, value, 1500);
        });
      }
    });
  }, { threshold: 0.5 });
  
  // Osserva tutte le sezioni
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Gestione del carosello
  const carouselItems = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;
  
  function showSlide(index) {
    // Rimuovi la classe active da tutti gli elementi
    carouselItems.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Aggiungi la classe active all'elemento corrente
    carouselItems[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
  }
  
  // Event listeners per i controlli del carosello
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let index = currentSlide - 1;
      if (index < 0) index = carouselItems.length - 1;
      showSlide(index);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let index = currentSlide + 1;
      if (index >= carouselItems.length) index = 0;
      showSlide(index);
    });
  }
  
  // Event listeners per gli indicatori
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Rotazione automatica del carosello
  setInterval(() => {
    let index = currentSlide + 1;
    if (index >= carouselItems.length) index = 0;
    showSlide(index);
  }, 5000);
});
```

## Considerazioni Finali

### Ottimizzazione Mobile
- Adattamento del layout per schermi piccoli
- Riduzione delle dimensioni dei font
- Semplificazione della navigazione
- Test su diversi dispositivi

### Performance
- Ottimizzazione delle immagini (compressione, dimensioni appropriate)
- Lazy loading per le immagini del carosello
- Minimizzazione di CSS e JavaScript
- Precaricamento delle risorse critiche

### Accessibilità
- Contrasto adeguato per il testo
- Supporto per navigazione da tastiera
- ARIA labels per elementi interattivi
- Alternative testuali per le immagini
