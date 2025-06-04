# Design Guidelines per "Strade Segrete"

## Brand Identity

### Nome e Concept
**Strade Segrete**: Tour guidati in bici da corsa e gravel alla scoperta delle strade meno conosciute d'Italia e delle autentiche tradizioni gastronomiche locali.

### Tagline
"Pedala, Scopri, Assapora: L'Italia autentica su due ruote"

### Valori del Brand
- **Autenticità**: Esperienze genuine lontane dal turismo di massa
- **Qualità**: Tour curati nei minimi dettagli con servizi premium
- **Sostenibilità**: Rispetto per l'ambiente e supporto alle comunità locali
- **Passione**: Amore per il ciclismo e la cultura italiana
- **Scoperta**: Continua ricerca di percorsi nascosti e sapori autentici

## Palette Colori

### Colori Primari
- **Verde Oliva**: #5D7052 - Rappresenta la natura, i paesaggi collinari italiani
- **Blu Cobalto**: #2C4770 - Richiama i laghi e i cieli italiani
- **Terracotta**: #C66B3D - Evoca le strade bianche e l'architettura italiana

### Colori Secondari
- **Crema**: #F2E8DC - Per sfondi e aree di respiro
- **Grigio Pietra**: #7D8491 - Per testi secondari e dettagli
- **Verde Salvia**: #B5C9B7 - Per accenti e sfumature

### Colori Funzionali
- **Call-to-Action**: #E85D04 (arancione bruciato) - Per pulsanti principali
- **Success**: #4D9078 (verde acqua) - Per conferme e messaggi positivi
- **Alert**: #D62828 (rosso mattone) - Per avvisi e notifiche importanti

## Tipografia

### Font Principali (Google Fonts)
- **Titoli**: Montserrat (700, 600)
  - Font sans-serif moderno ma con carattere
  - Ottima leggibilità anche in dimensioni grandi
  - Da usare per h1, h2, h3 e CTA principali

- **Corpo del testo**: Lora (400, 400 italic, 600)
  - Font serif elegante con ottima leggibilità
  - Perfetto per testi lunghi e descrizioni
  - Da usare per paragrafi, citazioni e testi descrittivi

- **Accenti e UI**: Roboto (400, 500)
  - Font sans-serif pulito e versatile
  - Perfetto per elementi UI, menu, etichette
  - Da usare per navigazione, form, etichette

### Gerarchia Tipografica
- **H1**: Montserrat 700, 2.5rem (40px)
- **H2**: Montserrat 600, 2rem (32px)
- **H3**: Montserrat 600, 1.5rem (24px)
- **H4**: Montserrat 600, 1.25rem (20px)
- **Paragrafo**: Lora 400, 1rem (16px)
- **Testo piccolo**: Roboto 400, 0.875rem (14px)
- **Caption**: Roboto 400 italic, 0.75rem (12px)

## Elementi UI

### Pulsanti
- **Primario**: Sfondo #E85D04, testo bianco, bordi arrotondati 4px, padding 12px 24px
- **Secondario**: Bordo 2px #2C4770, testo #2C4770, sfondo trasparente, bordi arrotondati 4px
- **Terziario**: Nessun bordo, testo #2C4770, sottolineatura al hover
- **Disabled**: Sfondo #7D8491 (30% opacità), testo grigio, non cliccabile

### Form Elements
- **Input**: Bordo sottile #7D8491, focus #2C4770, sfondo bianco, padding 10px 12px
- **Select**: Stile simile agli input con icona dropdown personalizzata
- **Checkbox/Radio**: Custom design con animazione al click
- **Form Labels**: Roboto 500, posizionati sopra gli input

### Card e Contenitori
- **Card Tour**: Bordi arrotondati 8px, ombra leggera, immagine in alto, padding interno 16px
- **Contenitori**: Bordi arrotondati 8px, sfondo #F2E8DC (10% opacità) per separare le sezioni
- **Bordi**: Quando necessari, utilizzare #7D8491 con opacità 20%

### Icone
- **Stile**: Lineare con tratto 1.5px, angoli arrotondati
- **Dimensioni**: 24px standard, 16px per elementi più piccoli
- **Colore**: Adattato al contesto (primario o secondario)
- **Set consigliato**: Lucide Icons o Feather Icons

## Stile Fotografico

### Immagini Hero
- Immagini panoramiche di strade poco conosciute in Italia
- Ciclisti in azione su strade bianche o percorsi scenografici
- Palette colori naturali con tonalità calde (alba/tramonto quando possibile)
- Prospettiva che comunica libertà e scoperta

### Immagini Tour
- Mix di paesaggi, dettagli strade, momenti gastronomici
- Persone che vivono l'esperienza (non pose statiche)
- Dettagli autentici della cultura locale
- Cibo fotografato in modo naturale e appetitoso

### Trattamento Immagini
- Leggera vignettatura per focalizzare l'attenzione
- Contrasto medio-alto per enfatizzare texture (specialmente strade bianche)
- Saturazione moderata per colori realistici ma vivaci
- Overlay colorati sottili per mantenere coerenza visiva

## Layout e Griglia

### Struttura Base
- **Desktop**: Griglia a 12 colonne con gutter 24px
- **Tablet**: Griglia a 8 colonne con gutter 16px
- **Mobile**: Griglia a 4 colonne con gutter 16px

### Spaziatura
- **Micro**: 4px, 8px (elementi UI ravvicinati)
- **Small**: 16px (tra elementi correlati)
- **Medium**: 24px, 32px (tra sezioni correlate)
- **Large**: 48px, 64px (tra sezioni principali)
- **XLarge**: 80px, 96px (prima/dopo sezioni hero)

### Breakpoint Responsive
- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: 992px - 1399px
- **Large Desktop**: ≥ 1400px

## Componenti Specifici

### Header
- Sticky con sfondo trasparente che diventa solido allo scroll
- Logo a sinistra, menu principale al centro, CTA a destra
- Versione mobile con menu hamburger e logo centrato

### Footer
- Sfondo #2C4770 (blu cobalto)
- Testo e link in bianco/crema
- 3-4 colonne su desktop, impilate su mobile
- Include newsletter signup, social media, contatti rapidi

### Mappa Interattiva
- Stile mappa personalizzato con colori brand
- Pins personalizzati per indicare i percorsi
- Controlli minimal ma intuitivi
- Responsive con zoom/pan ottimizzati per touch

### Tour Cards
- Immagine principale con overlay per difficoltà
- Titolo, breve descrizione, icone per caratteristiche principali
- Prezzo e CTA ben visibili
- Hover state con leggera elevazione e highlight

### Filtri
- Design clean con toggle e slider
- Feedback visivo immediato sui risultati
- Collassabili su mobile
- Persistenti durante la navigazione

## Micro-interazioni e Animazioni

### Transizioni di Pagina
- Fade-in leggero per i contenuti principali
- Parallax sottile per immagini hero
- Tempo di transizione: 300-500ms

### Hover States
- Pulsanti: Leggero cambio di scala (1.05) e saturazione
- Card: Elevazione sottile e highlight bordo
- Link: Sottolineatura animata da sinistra a destra

### Loading States
- Spinner personalizzato con logo semplificato
- Skeleton screens per contenuti in caricamento
- Progress bar sottile per operazioni lunghe

### Feedback
- Micro-animazioni per conferme (check, pulsazione)
- Tooltip contestuali per informazioni aggiuntive
- Notifiche toast per conferme non bloccanti

## Accessibilità

### Contrasto
- Tutti i testi rispettano WCAG 2.1 AA (minimo 4.5:1 per testi normali)
- CTA e elementi interattivi con contrasto elevato
- Possibilità di attivare modalità alto contrasto

### Navigazione
- Supporto completo per navigazione da tastiera
- Focus states ben visibili
- Skip links per screen reader

### Testo
- Nessun testo in immagini per informazioni critiche
- Alternative text per tutte le immagini
- Possibilità di ridimensionare il testo fino a 200% senza perdita di funzionalità

## Mobile-First Considerations

### Touch Targets
- Minimo 44x44px per elementi interattivi
- Spaziatura adeguata tra elementi cliccabili
- Feedback tattile visibile

### Performance
- Immagini ottimizzate con lazy loading
- Critical CSS inline
- Minimizzazione delle dipendenze JavaScript

### Navigazione Mobile
- Menu hamburger con animazione fluida
- Bottom navigation per azioni principali
- Pull-to-refresh per aggiornamenti contenuti

## Implementazione Tecnica

### CSS Framework
- Tailwind CSS per sviluppo rapido e coerente
- Variabili CSS per colori, spaziature e tipografia
- Approccio mobile-first con media queries

### Componenti React
- Struttura componenti atomica (Atomic Design)
- Storybook per documentazione componenti
- Styled Components o CSS Modules per styling isolato

### Asset Management
- SVG per icone e elementi UI
- WebP con fallback JPG per fotografie
- Font subset per ottimizzazione performance
