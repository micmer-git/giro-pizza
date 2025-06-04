# Componenti UI/UX Avanzati per Strade Segrete

Questo documento definisce i componenti UI/UX avanzati che implementeremo per il redesign del sito "Strade Segrete", con focus sul Nord Italia e un'esperienza utente superiore.

## 1. Carousel Hero Avanzato

### Specifiche Tecniche
- **Tecnologia**: Swiper.js con effetti parallax
- **Transizioni**: Fade + Slide con timing di 800ms
- **Autoplay**: Attivo con pausa di 5 secondi per slide, pausa al hover
- **Controlli**: Frecce laterali semi-trasparenti + indicatori di pagina
- **Overlay**: Gradiente scuro dal basso verso l'alto per migliorare leggibilità testo
- **Responsive**: Adattamento automatico altezza in base al dispositivo

### Contenuto
- **Slide 1**: Dolomiti con ciclisti + headline "Scopri i Sentieri Nascosti delle Dolomiti"
- **Slide 2**: Lago di Como con ciclisti + headline "Pedala tra i Laghi più Belli del Nord"
- **Slide 3**: Colline del Barolo + headline "Tour Enogastronomici nel Cuore del Piemonte"
- **Slide 4**: Ciclisti che degustano prodotti tipici + headline "Assapora l'Autentica Cucina del Nord"

### Markup di Base
```html
<div class="hero-carousel">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-swiper-parallax="-300">
        <div class="slide-image" style="background-image: url('images/dolomiti.jpg')"></div>
        <div class="slide-content">
          <h1>Scopri i Sentieri Nascosti delle Dolomiti</h1>
          <p>Tour guidati in bici tra paesaggi mozzafiato e sapori autentici</p>
          <a href="/destinazioni/dolomiti" class="btn-primary">Esplora i Tour</a>
        </div>
      </div>
      <!-- Additional slides -->
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</div>
```

### CSS Avanzato
```css
.hero-carousel {
  position: relative;
  height: 80vh;
  min-height: 600px;
}

.swiper-slide {
  position: relative;
  overflow: hidden;
}

.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.1);
  transition: transform 2s ease;
}

.swiper-slide-active .slide-image {
  transform: scale(1);
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 var(--space-lg);
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.slide-content h1 {
  font-size: 3.5rem;
  margin-bottom: var(--space-md);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: 0.3s;
}

.swiper-slide-active .slide-content h1 {
  opacity: 1;
  transform: translateY(0);
}

/* Gradient overlay */
.swiper-slide::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}
```

## 2. Mappa Interattiva del Nord Italia

### Specifiche Tecniche
- **Tecnologia**: Leaflet.js con tiles personalizzati
- **Interazione**: Hover su regioni con highlight, click per navigazione
- **Filtri**: Toggle per percorsi, punti gastronomici, difficoltà
- **Markers**: Icone personalizzate per tipologie di punti di interesse
- **Popup**: Informazioni dettagliate su hover/click
- **Responsive**: Zoom/pan ottimizzati per touch su mobile

### Contenuto
- **Regioni**: Dolomiti, Laghi del Nord, Piemonte, Veneto, Trentino-Alto Adige, Lombardia
- **Percorsi**: Tracciati GPX dei tour principali
- **POI**: Ristoranti, produttori locali, attrazioni culturali

### Markup di Base
```html
<div class="map-container">
  <div class="map-filters">
    <button class="filter-btn active" data-filter="routes">Percorsi</button>
    <button class="filter-btn" data-filter="food">Gastronomia</button>
    <button class="filter-btn" data-filter="culture">Cultura</button>
    <div class="difficulty-filter">
      <span>Difficoltà:</span>
      <div class="difficulty-options">
        <label><input type="checkbox" value="easy" checked> Facile</label>
        <label><input type="checkbox" value="medium" checked> Media</label>
        <label><input type="checkbox" value="hard" checked> Difficile</label>
      </div>
    </div>
  </div>
  <div id="north-italy-map"></div>
  <div class="map-legend">
    <div class="legend-item"><span class="legend-icon route"></span> Percorsi</div>
    <div class="legend-item"><span class="legend-icon food"></span> Gastronomia</div>
    <div class="legend-item"><span class="legend-icon culture"></span> Cultura</div>
  </div>
</div>
```

### CSS Avanzato
```css
.map-container {
  position: relative;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

#north-italy-map {
  height: 100%;
  width: 100%;
  z-index: 1;
}

.map-filters {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.filter-btn {
  background: var(--color-cream);
  border: none;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--color-olive);
  color: white;
}

/* Custom map styling */
.leaflet-popup-content-wrapper {
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
}

.map-popup {
  width: 250px;
}

.map-popup-image {
  height: 120px;
  background-size: cover;
  background-position: center;
}

.map-popup-content {
  padding: 12px;
}

.map-popup h4 {
  margin: 0 0 8px;
  color: var(--color-cobalt);
}
```

## 3. Filtri Multi-parametro Avanzati

### Specifiche Tecniche
- **Tecnologia**: JavaScript vanilla + CSS Grid per layout
- **Interazione**: Filtri multipli con aggiornamento risultati in tempo reale
- **Visualizzazione**: Toggle tra vista griglia e lista
- **Ordinamento**: Dropdown per ordinare risultati
- **Persistenza**: Salvataggio preferenze in localStorage
- **Responsive**: Layout adattivo per mobile

### Contenuto
- **Filtri Principali**: Regione, Difficoltà, Durata, Tipo di bici, Tema
- **Filtri Secondari**: Prezzo, Alloggio, Periodo, Servizi inclusi

### Markup di Base
```html
<div class="advanced-filters">
  <div class="filters-header">
    <h2>Trova il Tour Perfetto</h2>
    <div class="view-options">
      <button class="view-btn active" data-view="grid"><i class="fas fa-th"></i></button>
      <button class="view-btn" data-view="list"><i class="fas fa-list"></i></button>
      <select class="sort-select">
        <option value="popular">Più popolari</option>
        <option value="price-asc">Prezzo (crescente)</option>
        <option value="price-desc">Prezzo (decrescente)</option>
        <option value="duration">Durata</option>
      </select>
    </div>
  </div>
  
  <div class="filters-body">
    <div class="filter-group">
      <h3>Regione</h3>
      <div class="filter-options">
        <label><input type="checkbox" value="dolomiti"> Dolomiti</label>
        <label><input type="checkbox" value="laghi"> Laghi del Nord</label>
        <label><input type="checkbox" value="piemonte"> Piemonte</label>
        <label><input type="checkbox" value="veneto"> Veneto</label>
        <label><input type="checkbox" value="trentino"> Trentino-Alto Adige</label>
        <label><input type="checkbox" value="lombardia"> Lombardia</label>
      </div>
    </div>
    
    <!-- Additional filter groups -->
    
    <div class="filter-actions">
      <button class="btn-reset">Azzera Filtri</button>
      <button class="btn-apply">Applica Filtri</button>
    </div>
  </div>
  
  <div class="filter-results">
    <p class="results-count"><span id="count">12</span> tour trovati</p>
    <div class="results-grid">
      <!-- Tour cards will be dynamically inserted here -->
    </div>
  </div>
</div>
```

### CSS Avanzato
```css
.advanced-filters {
  margin-bottom: var(--space-xl);
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.view-options {
  display: flex;
  align-items: center;
}

.view-btn {
  background: none;
  border: 1px solid var(--color-stone);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-btn.active {
  background: var(--color-olive);
  color: white;
  border-color: var(--color-olive);
}

.filters-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--color-cream);
  border-radius: 8px;
  margin-bottom: var(--space-md);
}

.filter-group h3 {
  margin-bottom: var(--space-xs);
  font-size: 1rem;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-options label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter-options input {
  margin-right: 8px;
}

.filter-actions {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-md);
  margin-top: var(--space-md);
}

/* List view */
.results-grid.list-view {
  grid-template-columns: 1fr;
}

.results-grid.list-view .tour-card {
  display: flex;
  height: 200px;
}

.results-grid.list-view .tour-card-image {
  width: 300px;
  height: 100%;
}
```

## 4. Galleria Gastronomica Immersiva

### Specifiche Tecniche
- **Tecnologia**: Masonry layout + Lightbox avanzato
- **Interazione**: Hover con zoom leggero, click per lightbox
- **Lightbox**: Navigazione con frecce, descrizioni dettagliate, zoom
- **Filtri**: Per regione e tipo di piatto
- **Responsive**: Layout adattivo con breakpoint ottimizzati
- **Performance**: Lazy loading + immagini ottimizzate

### Contenuto
- **Categorie**: Formaggi, Vini, Primi Piatti, Salumi, Dolci
- **Regioni**: Dolomiti, Laghi del Nord, Piemonte, Veneto, Trentino-Alto Adige, Lombardia

### Markup di Base
```html
<div class="food-gallery">
  <div class="gallery-filters">
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">Tutti</button>
      <button class="filter-btn" data-filter="formaggi">Formaggi</button>
      <button class="filter-btn" data-filter="vini">Vini</button>
      <button class="filter-btn" data-filter="primi">Primi Piatti</button>
      <button class="filter-btn" data-filter="salumi">Salumi</button>
      <button class="filter-btn" data-filter="dolci">Dolci</button>
    </div>
    <select class="region-select">
      <option value="all">Tutte le regioni</option>
      <option value="dolomiti">Dolomiti</option>
      <option value="laghi">Laghi del Nord</option>
      <option value="piemonte">Piemonte</option>
      <option value="veneto">Veneto</option>
      <option value="trentino">Trentino-Alto Adige</option>
      <option value="lombardia">Lombardia</option>
    </select>
  </div>
  
  <div class="gallery-grid">
    <div class="gallery-item" data-category="formaggi" data-region="piemonte">
      <div class="gallery-image">
        <img src="images/food/castelmagno.jpg" alt="Formaggio Castelmagno" loading="lazy">
        <div class="gallery-overlay">
          <h4>Castelmagno DOP</h4>
          <span class="gallery-region">Piemonte</span>
        </div>
      </div>
    </div>
    <!-- Additional gallery items -->
  </div>
</div>

<!-- Lightbox template -->
<div class="food-lightbox" id="foodLightbox">
  <div class="lightbox-container">
    <div class="lightbox-image">
      <img src="" alt="">
    </div>
    <div class="lightbox-content">
      <h3 class="lightbox-title"></h3>
      <p class="lightbox-region"></p>
      <div class="lightbox-description"></div>
      <div class="lightbox-tour-link">
        <p>Scopri questo prodotto nei nostri tour:</p>
        <a href="#" class="btn-secondary"></a>
      </div>
    </div>
    <button class="lightbox-close">&times;</button>
    <button class="lightbox-prev">&larr;</button>
    <button class="lightbox-next">&rarr;</button>
  </div>
</div>
```

### CSS Avanzato
```css
.food-gallery {
  margin: var(--space-xl) 0;
}

.gallery-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  background: var(--color-cream);
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--color-olive);
  color: white;
}

.region-select {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--color-stone);
  background: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.gallery-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--space-sm);
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  transition: opacity 0.3s ease;
}

.gallery-overlay h4 {
  margin: 0;
  font-size: 1.1rem;
}

.gallery-region {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Lightbox styles */
.food-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
}

.lightbox-container {
  display: flex;
  width: 90%;
  max-width: 1200px;
  height: 80%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.lightbox-image {
  width: 60%;
  height: 100%;
}

.lightbox-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox-content {
  width: 40%;
  padding: var(--space-md);
  overflow-y: auto;
}
```

## 5. CTA Floating Avanzate

### Specifiche Tecniche
- **Tecnologia**: Intersection Observer API + CSS Animations
- **Comportamento**: Appare dopo scroll definito, segue lo scroll, scompare in prossimità di altre CTA
- **Animazione**: Fade in + slide up con timing di 500ms
- **Varianti**: Primaria (prenotazione) e secondaria (informazioni)
- **Responsive**: Versione mobile ottimizzata (bottom dock)
- **A/B Testing**: Preparato per test di varianti colore/testo

### Markup di Base
```html
<div class="cta-floating" id="floatingCTA">
  <div class="cta-content">
    <div class="cta-text">
      <h3>Pronto a Scoprire il Nord Italia?</h3>
      <p>Tour personalizzati con guide esperte</p>
    </div>
    <div class="cta-buttons">
      <a href="/tour-personalizzato" class="btn-primary">Crea il Tuo Tour</a>
      <a href="/contatti" class="btn-secondary">Richiedi Info</a>
    </div>
  </div>
  <button class="cta-close" aria-label="Chiudi">&times;</button>
</div>
```

### CSS Avanzato
```css
.cta-floating {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  padding: var(--space-md);
  z-index: 100;
  transform: translateY(100px);
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  pointer-events: none;
}

.cta-floating.visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cta-text {
  flex: 1;
}

.cta-text h3 {
  margin: 0 0 4px;
  font-size: 1.2rem;
  color: var(--color-cobalt);
}

.cta-text p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-stone);
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: var(--space-sm);
}

.cta-close {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-stone);
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.cta-close:hover {
  background: rgba(0,0,0,0.05);
}

/* Mobile version */
@media (max-width: 767px) {
  .cta-floating {
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 8px 8px 0 0;
    padding: var(--space-sm);
  }
  
  .cta-content {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-text {
    margin-bottom: var(--space-xs);
  }
  
  .cta-buttons {
    flex-direction: row;
    margin-left: 0;
  }
}
```

### JavaScript di Base
```javascript
// Floating CTA implementation
document.addEventListener('DOMContentLoaded', function() {
  const floatingCTA = document.getElementById('floatingCTA');
  const ctaClose = floatingCTA.querySelector('.cta-close');
  const footer = document.querySelector('footer');
  const mainCTAs = document.querySelectorAll('.main-cta');
  
  // Close button handler
  ctaClose.addEventListener('click', function() {
    floatingCTA.classList.remove('visible');
    // Save to session storage to prevent reappearing
    sessionStorage.setItem('ctaClosed', 'true');
  });
  
  // Check if already closed
  if (sessionStorage.getItem('ctaClosed') === 'true') {
    return;
  }
  
  // Intersection Observer for footer
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        floatingCTA.classList.remove('visible');
      } else {
        if (window.scrollY > 600) {
          floatingCTA.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.1 });
  
  if (footer) {
    footerObserver.observe(footer);
  }
  
  // Intersection Observer for main CTAs
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        floatingCTA.classList.remove('visible');
      } else {
        if (window.scrollY > 600 && !isFooterVisible()) {
          floatingCTA.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.5 });
  
  mainCTAs.forEach(cta => {
    ctaObserver.observe(cta);
  });
  
  // Show after scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 600 && !isFooterVisible() && !isMainCTAVisible()) {
      floatingCTA.classList.add('visible');
    } else {
      floatingCTA.classList.remove('visible');
    }
  });
  
  function isFooterVisible() {
    if (!footer) return false;
    const rect = footer.getBoundingClientRect();
    return rect.top < window.innerHeight;
  }
  
  function isMainCTAVisible() {
    for (const cta of mainCTAs) {
      const rect = cta.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        return true;
      }
    }
    return false;
  }
});
```

## 6. Tour Card Avanzate

### Specifiche Tecniche
- **Tecnologia**: CSS Grid + Hover Effects
- **Interazione**: Hover con elevazione e highlight
- **Badge**: Difficoltà, popolarità, novità
- **Indicatori**: Durata, distanza, dislivello
- **Responsive**: Adattamento fluido a diverse dimensioni schermo
- **Accessibilità**: Focus states e contrasto ottimizzati

### Markup di Base
```html
<div class="tour-card">
  <div class="tour-card-image">
    <img src="images/tours/dolomiti-tour.jpg" alt="Tour delle Dolomiti" loading="lazy">
    <div class="tour-difficulty">Intermedio</div>
    <div class="tour-badge popular">Più Richiesto</div>
  </div>
  <div class="tour-card-content">
    <div class="tour-region">Dolomiti</div>
    <h3>Tra le Vette delle Dolomiti</h3>
    <p>Un viaggio indimenticabile attraverso paesaggi UNESCO, con soste gastronomiche in rifugi tipici.</p>
    <div class="tour-meta">
      <div class="tour-meta-item">
        <i class="fas fa-calendar"></i> 7 giorni
      </div>
      <div class="tour-meta-item">
        <i class="fas fa-road"></i> 350 km
      </div>
      <div class="tour-meta-item">
        <i class="fas fa-mountain"></i> 5200 m
      </div>
    </div>
    <div class="tour-highlights">
      <span class="highlight-tag">Gravel</span>
      <span class="highlight-tag">Gastronomia</span>
      <span class="highlight-tag">Paesaggi</span>
    </div>
  </div>
  <div class="tour-card-footer">
    <div class="tour-price">
      €1,890 <span>per persona</span>
    </div>
    <a href="tour-dolomiti.html" class="btn-tertiary">Scopri di più</a>
  </div>
</div>
```

### CSS Avanzato
```css
.tour-card {
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.tour-card:hover .tour-card-image img {
  transform: scale(1.05);
}

.tour-card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.tour-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tour-difficulty {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 500;
}

.tour-badge {
  position: absolute;
  top: var(--space-sm);
  left: var(--space-sm);
  padding: 4px 12px;
  border-radius: 20px;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 500;
}

.tour-badge.popular {
  background-color: var(--color-cta);
  color: white;
}

.tour-badge.new {
  background-color: var(--color-success);
  color: white;
}

.tour-card-content {
  padding: var(--space-md);
  flex-grow: 1;
}

.tour-region {
  color: var(--color-terracotta);
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: var(--space-xs);
}

.tour-card-content h3 {
  margin-bottom: var(--space-xs);
  font-size: 1.25rem;
}

.tour-card-content p {
  color: var(--color-stone);
  font-size: 0.9rem;
  margin-bottom: var(--space-sm);
  line-height: 1.5;
}

.tour-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-sm);
}

.tour-meta-item {
  display: flex;
  align-items: center;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  color: var(--color-stone);
  background: var(--color-cream);
  padding: 4px 8px;
  border-radius: 4px;
}

.tour-meta-item i {
  margin-right: 4px;
  color: var(--color-olive);
}

.tour-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.highlight-tag {
  background: rgba(93, 112, 82, 0.1);
  color: var(--color-olive);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tour-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(242, 232, 220, 0.3);
}

.tour-price {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-cobalt);
}

.tour-price span {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-stone);
}
```

## Implementazione JavaScript

Per implementare questi componenti avanzati, creeremo moduli JavaScript separati che verranno poi importati nel file principale. Ecco la struttura di base:

```javascript
// main.js
import { initCarousel } from './modules/carousel.js';
import { initMap } from './modules/map.js';
import { initFilters } from './modules/filters.js';
import { initGallery } from './modules/gallery.js';
import { initFloatingCTA } from './modules/floating-cta.js';

document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initCarousel();
  initMap();
  initFilters();
  initGallery();
  initFloatingCTA();
  
  // Global interactions
  initMobileMenu();
  initScrollAnimations();
  
  // Helper functions
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-mobile');
    
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });
    }
  }
  
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
});
```

Questi componenti UI/UX avanzati trasformeranno il sito "Strade Segrete" in un'esperienza utente di livello superiore, con particolare attenzione alla presentazione dei tour nel Nord Italia e all'integrazione delle esperienze gastronomiche.
