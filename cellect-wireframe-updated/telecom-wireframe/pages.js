// Editable HTML templates for all seven pages and local prototype previews.
// Loaded as a classic script so index.html works directly from disk.

const PAGE_TEMPLATES = {
  "/": `
<section class="home-hero">
 <header class="header on-dark">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <nav aria-label="Main navigation" class="">
   <a class="active" href="#/">
    HOME
   </a>
   <a class="" href="#/deals">
    DEALS
   </a>
   <a class="" href="#/devices">
    DEVICES
   </a>
   <a class="" href="#/upgrades">
    UPGRADES
   </a>
   <a class="" href="#/store-locator">
    STORE LOCATOR
   </a>
   <a class="" href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a class="" href="#/contact">
    CONTACT
   </a>
  </nav>
  <div class="header-actions">
   <button aria-label="Search pages" class="search-icon">
    <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
     <path d="m21 21-4.34-4.34">
     </path>
     <circle cx="11" cy="11" r="8">
     </circle>
    </svg>
   </button>
   <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
    <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
     <path d="M4 5h16">
     </path>
     <path d="M4 12h16">
     </path>
     <path d="M4 19h16">
     </path>
    </svg>
   </button>
  </div>
 </header>
 <div aria-hidden="true" class="hero-cross">
  <svg preserveaspectratio="none" viewbox="0 0 100 100">
   <path d="M0 0L100 100M100 0L0 100">
   </path>
  </svg>
  <div class="hero-image-mark">
   <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="38" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" viewbox="0 0 24 24" width="38" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v18">
    </path>
    <path d="M3 12h18">
    </path>
    <rect height="18" rx="2" width="18" x="3" y="3">
    </rect>
   </svg>
  </div>
 </div>
 <div class="hero-body">
  <span class="eyebrow">
   HOME
  </span>
  <div aria-hidden="true" class="lines large">
   <span>
   </span>
   <span>
   </span>
  </div>
  <div aria-hidden="true" class="lines">
   <span>
   </span>
   <span>
   </span>
  </div>
  <a class="pill hero-cta" href="#/deals">
   DEALS
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </a>
 </div>
 <div class="hero-bottom">
  <div class="hero-tabs">
   <button class="selected">
    DEALS
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
   <button class="">
    DEVICES
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
   <button class="">
    UPGRADES
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
  </div>
  <div class="carousel-controls">
   <span>
    01
    <small>
     / 03
    </small>
   </span>
   <button aria-label="Previous slide">
    <svg aria-hidden="true" class="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
     <path d="m12 19-7-7 7-7">
     </path>
     <path d="M19 12H5">
     </path>
    </svg>
   </button>
   <button aria-label="Next slide">
    <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
     <path d="M5 12h14">
     </path>
     <path d="m12 5 7 7-7 7">
     </path>
    </svg>
   </button>
  </div>
 </div>
</section>
<div class="content home-content">
 <div class="editorial-grid">
  <a class="editorial-card editorial-0" href="#/deals">
   <div class="card-top">
    <span class="eyebrow">
     DEALS
    </span>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
   <div aria-label="Image placeholder" class="media">
    <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
     <path d="M0 0L100 100M100 0L0 100">
     </path>
    </svg>
    <span class="media-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </span>
   </div>
  </a>
  <a class="editorial-card editorial-1" href="#/devices">
   <div class="card-top">
    <span class="eyebrow">
     DEVICES
    </span>
    <span class="arrow dark">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
   <div aria-label="Image placeholder" class="media">
    <div class="phone-outline">
     <span>
     </span>
     <i>
     </i>
    </div>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </a>
  <a class="editorial-card editorial-2" href="#/upgrades">
   <div class="card-top">
    <span class="eyebrow">
     UPGRADES
    </span>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
   <div aria-label="Image placeholder" class="media">
    <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
     <path d="M0 0L100 100M100 0L0 100">
     </path>
    </svg>
    <span class="media-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </span>
   </div>
  </a>
 </div>
 <section class="wide-block">
  <div class="wide-copy">
   <span class="eyebrow">
    UPGRADES
   </span>
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
    <span>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
   <a class="pill" href="#/upgrades">
    UPGRADES
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </a>
  </div>
  <div aria-label="Image placeholder" class="media">
   <div class="phone-outline">
    <span>
    </span>
    <i>
    </i>
   </div>
  </div>
 </section>
 <section class="home-utilities">
  <div class="section-heading">
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
   </div>
  </div>
  <div class="utility-grid">
   <a href="#/store-locator">
    <div class="utility-icon">
     <svg aria-hidden="true" class="lucide lucide-map-pin" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
      </path>
      <circle cx="12" cy="10" r="3">
      </circle>
     </svg>
    </div>
    <h3>
     STORE LOCATOR
    </h3>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </a>
   <a href="#/yello-trader">
    <div class="utility-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </div>
    <h3>
     Y’ELLO TRADER
    </h3>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </a>
   <a href="#/contact">
    <div class="utility-icon">
     <svg aria-hidden="true" class="lucide lucide-phone" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
      </path>
     </svg>
    </div>
    <h3>
     CONTACT
    </h3>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </a>
  </div>
 </section>
</div>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,

  "/deals": `
<header class="header">
 <a aria-label="Home" class="logo" href="#/">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </a>
 <nav aria-label="Main navigation" class="">
  <a class="" href="#/">
   HOME
  </a>
  <a class="active" href="#/deals">
   DEALS
  </a>
  <a class="" href="#/devices">
   DEVICES
  </a>
  <a class="" href="#/upgrades">
   UPGRADES
  </a>
  <a class="" href="#/store-locator">
   STORE LOCATOR
  </a>
  <a class="" href="#/yello-trader">
   Y’ELLO TRADER
  </a>
  <a class="" href="#/contact">
   CONTACT
  </a>
 </nav>
 <div class="header-actions">
  <button aria-label="Search pages" class="search-icon">
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
  </button>
  <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
   <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16">
    </path>
    <path d="M4 12h16">
    </path>
    <path d="M4 19h16">
    </path>
   </svg>
  </button>
 </div>
</header>
<main class="content">
 <section class="page-intro">
  <div>
   <span class="eyebrow">
    02 / 07
   </span>
   <h1>
    DEALS
   </h1>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div aria-hidden="true" class="intro-decoration">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
 </section>
 <div class="catalog-toolbar">
  <div class="tabs">
   <button class="selected">
    All
   </button>
   <button class="">
    SIM only
   </button>
   <button class="">
    Device deals
   </button>
   <button class="">
    Data
   </button>
  </div>
  <label class="sort">
   <svg aria-hidden="true" class="lucide lucide-sliders-horizontal" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5H3">
    </path>
    <path d="M12 19H3">
    </path>
    <path d="M14 3v4">
    </path>
    <path d="M16 17v4">
    </path>
    <path d="M21 12h-9">
    </path>
    <path d="M21 19h-5">
    </path>
    <path d="M21 5h-7">
    </path>
    <path d="M8 10v4">
    </path>
    <path d="M8 12H3">
    </path>
   </svg>
   <select aria-label="Sort">
    <option>
     Featured
    </option>
    <option>
     Newest
    </option>
    <option>
     Price: low to high
    </option>
    <option>
     Price: high to low
    </option>
   </select>
  </label>
 </div>
 <div class="catalog-layout">
  <aside class="filters">
   <span class="eyebrow">
    FILTERS
   </span>
   <details open="">
    <summary>
     Plan type
     <svg aria-hidden="true" class="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6">
      </path>
     </svg>
    </summary>
    <label class="check-placeholder">
     <input aria-label="Plan type option 1" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Plan type option 2" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Plan type option 3" type="checkbox"/>
     <span>
     </span>
    </label>
   </details>
   <details open="">
    <summary>
     Monthly budget
     <svg aria-hidden="true" class="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6">
      </path>
     </svg>
    </summary>
    <label class="check-placeholder">
     <input aria-label="Monthly budget option 1" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Monthly budget option 2" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Monthly budget option 3" type="checkbox"/>
     <span>
     </span>
    </label>
   </details>
   <details open="">
    <summary>
     Contract length
     <svg aria-hidden="true" class="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6">
      </path>
     </svg>
    </summary>
    <label class="check-placeholder">
     <input aria-label="Contract length option 1" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Contract length option 2" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Contract length option 3" type="checkbox"/>
     <span>
     </span>
    </label>
   </details>
   <button class="reset">
    Reset filters
   </button>
  </aside>
  <div class="catalog-main">
   <div class="product-grid">
    <button aria-label="Preview deal 1" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview deal 2" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview deal 3" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
       <path d="M0 0L100 100M100 0L0 100">
       </path>
      </svg>
      <span class="media-icon">
       <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18">
        </path>
        <path d="M3 12h18">
        </path>
        <rect height="18" rx="2" width="18" x="3" y="3">
        </rect>
       </svg>
      </span>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview deal 4" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview deal 5" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview deal 6" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
       <path d="M0 0L100 100M100 0L0 100">
       </path>
      </svg>
      <span class="media-icon">
       <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18">
        </path>
        <path d="M3 12h18">
        </path>
        <rect height="18" rx="2" width="18" x="3" y="3">
        </rect>
       </svg>
      </span>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
   </div>
   <div class="pagination">
    <button aria-label="Previous page" disabled="">
     <svg aria-hidden="true" class="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 19-7-7 7-7">
      </path>
      <path d="M19 12H5">
      </path>
     </svg>
    </button>
    <button class="selected">
     1
    </button>
    <button class="">
     2
    </button>
    <button class="">
     3
    </button>
    <button aria-label="Next page">
     <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14">
      </path>
      <path d="m12 5 7 7-7 7">
      </path>
     </svg>
    </button>
   </div>
  </div>
 </div>
</main>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,

  "/devices": `
<header class="header">
 <a aria-label="Home" class="logo" href="#/">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </a>
 <nav aria-label="Main navigation" class="">
  <a class="" href="#/">
   HOME
  </a>
  <a class="" href="#/deals">
   DEALS
  </a>
  <a class="active" href="#/devices">
   DEVICES
  </a>
  <a class="" href="#/upgrades">
   UPGRADES
  </a>
  <a class="" href="#/store-locator">
   STORE LOCATOR
  </a>
  <a class="" href="#/yello-trader">
   Y’ELLO TRADER
  </a>
  <a class="" href="#/contact">
   CONTACT
  </a>
 </nav>
 <div class="header-actions">
  <button aria-label="Search pages" class="search-icon">
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
  </button>
  <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
   <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16">
    </path>
    <path d="M4 12h16">
    </path>
    <path d="M4 19h16">
    </path>
   </svg>
  </button>
 </div>
</header>
<main class="content">
 <section class="page-intro">
  <div>
   <span class="eyebrow">
    03 / 07
   </span>
   <h1>
    DEVICES
   </h1>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div aria-hidden="true" class="intro-decoration">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
 </section>
 <div class="catalog-toolbar">
  <div class="tabs">
   <button class="selected">
    All
   </button>
   <button class="">
    Smartphones
   </button>
   <button class="">
    Tablets
   </button>
   <button class="">
    Routers
   </button>
  </div>
  <label class="sort">
   <svg aria-hidden="true" class="lucide lucide-sliders-horizontal" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5H3">
    </path>
    <path d="M12 19H3">
    </path>
    <path d="M14 3v4">
    </path>
    <path d="M16 17v4">
    </path>
    <path d="M21 12h-9">
    </path>
    <path d="M21 19h-5">
    </path>
    <path d="M21 5h-7">
    </path>
    <path d="M8 10v4">
    </path>
    <path d="M8 12H3">
    </path>
   </svg>
   <select aria-label="Sort">
    <option>
     Featured
    </option>
    <option>
     Newest
    </option>
    <option>
     Price: low to high
    </option>
    <option>
     Price: high to low
    </option>
   </select>
  </label>
 </div>
 <div class="catalog-layout">
  <aside class="filters">
   <span class="eyebrow">
    FILTERS
   </span>
   <details open="">
    <summary>
     Brand
     <svg aria-hidden="true" class="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6">
      </path>
     </svg>
    </summary>
    <label class="check-placeholder">
     <input aria-label="Brand option 1" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Brand option 2" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Brand option 3" type="checkbox"/>
     <span>
     </span>
    </label>
   </details>
   <details open="">
    <summary>
     Storage
     <svg aria-hidden="true" class="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6">
      </path>
     </svg>
    </summary>
    <label class="check-placeholder">
     <input aria-label="Storage option 1" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Storage option 2" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Storage option 3" type="checkbox"/>
     <span>
     </span>
    </label>
   </details>
   <details open="">
    <summary>
     Connectivity
     <svg aria-hidden="true" class="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6">
      </path>
     </svg>
    </summary>
    <label class="check-placeholder">
     <input aria-label="Connectivity option 1" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Connectivity option 2" type="checkbox"/>
     <span>
     </span>
    </label>
    <label class="check-placeholder">
     <input aria-label="Connectivity option 3" type="checkbox"/>
     <span>
     </span>
    </label>
   </details>
   <button class="reset">
    Reset filters
   </button>
  </aside>
  <div class="catalog-main">
   <div class="product-grid">
    <button aria-label="Preview device 1" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview device 2" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview device 3" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview device 4" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview device 5" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
    <button aria-label="Preview device 6" class="product-card">
     <div aria-label="Image placeholder" class="media">
      <div class="phone-outline">
       <span>
       </span>
       <i>
       </i>
      </div>
     </div>
     <div class="product-details">
      <div aria-hidden="true" class="lines">
       <span>
       </span>
       <span>
       </span>
      </div>
      <div class="product-bottom">
       <div aria-hidden="true" class="lines">
        <span>
        </span>
       </div>
       <span class="arrow">
        <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 7h10v10">
         </path>
         <path d="M7 17 17 7">
         </path>
        </svg>
       </span>
      </div>
     </div>
    </button>
   </div>
   <div class="pagination">
    <button aria-label="Previous page" disabled="">
     <svg aria-hidden="true" class="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 19-7-7 7-7">
      </path>
      <path d="M19 12H5">
      </path>
     </svg>
    </button>
    <button class="selected">
     1
    </button>
    <button class="">
     2
    </button>
    <button class="">
     3
    </button>
    <button aria-label="Next page">
     <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14">
      </path>
      <path d="m12 5 7 7-7 7">
      </path>
     </svg>
    </button>
   </div>
  </div>
 </div>
</main>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,

  "/upgrades": `
<header class="header">
 <a aria-label="Home" class="logo" href="#/">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </a>
 <nav aria-label="Main navigation" class="">
  <a class="" href="#/">
   HOME
  </a>
  <a class="" href="#/deals">
   DEALS
  </a>
  <a class="" href="#/devices">
   DEVICES
  </a>
  <a class="active" href="#/upgrades">
   UPGRADES
  </a>
  <a class="" href="#/store-locator">
   STORE LOCATOR
  </a>
  <a class="" href="#/yello-trader">
   Y’ELLO TRADER
  </a>
  <a class="" href="#/contact">
   CONTACT
  </a>
 </nav>
 <div class="header-actions">
  <button aria-label="Search pages" class="search-icon">
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
  </button>
  <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
   <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16">
    </path>
    <path d="M4 12h16">
    </path>
    <path d="M4 19h16">
    </path>
   </svg>
  </button>
 </div>
</header>
<main class="content">
 <section class="page-intro">
  <div>
   <span class="eyebrow">
    04 / 07
   </span>
   <h1>
    UPGRADES
   </h1>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div aria-hidden="true" class="intro-decoration">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
 </section>
 <section class="upgrade-layout">
  <div class="upgrade-visual">
   <div aria-label="Image placeholder" class="media">
    <div class="phone-outline">
     <span>
     </span>
     <i>
     </i>
    </div>
   </div>
   <div class="visual-caption">
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
   </div>
  </div>
  <div class="form-panel">
   <div class="steps">
    <span class="current">
     01
    </span>
    <i>
    </i>
    <span class="">
     02
    </span>
    <i>
    </i>
    <span>
     03
    </span>
   </div>
   <div class="section-heading">
    <div aria-hidden="true" class="lines large">
     <span>
     </span>
    </div>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
   <form>
    <label>
     Mobile number
     <input aria-label="Mobile number" pattern="[0-9+ ()-]{7,20}" placeholder="Mobile number" required="" type="tel"/>
    </label>
    <label>
     Account type
     <select>
      <option>
       Contract
      </option>
      <option>
       Prepaid
      </option>
     </select>
    </label>
    <label class="consent">
     <input aria-label="Agree to eligibility check" required="" type="checkbox"/>
     I agree to the eligibility check
    </label>
    <button class="pill">
     Check eligibility
     <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14">
      </path>
      <path d="m12 5 7 7-7 7">
      </path>
     </svg>
    </button>
   </form>
  </div>
 </section>
 <section class="steps-grid">
  <div>
   <span class="step-number">
    01
   </span>
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div>
   <span class="step-number">
    02
   </span>
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div>
   <span class="step-number">
    03
   </span>
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
 </section>
</main>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,

  "/store-locator": `
<header class="header">
 <a aria-label="Home" class="logo" href="#/">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </a>
 <nav aria-label="Main navigation" class="">
  <a class="" href="#/">
   HOME
  </a>
  <a class="" href="#/deals">
   DEALS
  </a>
  <a class="" href="#/devices">
   DEVICES
  </a>
  <a class="" href="#/upgrades">
   UPGRADES
  </a>
  <a class="active" href="#/store-locator">
   STORE LOCATOR
  </a>
  <a class="" href="#/yello-trader">
   Y’ELLO TRADER
  </a>
  <a class="" href="#/contact">
   CONTACT
  </a>
 </nav>
 <div class="header-actions">
  <button aria-label="Search pages" class="search-icon">
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
  </button>
  <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
   <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16">
    </path>
    <path d="M4 12h16">
    </path>
    <path d="M4 19h16">
    </path>
   </svg>
  </button>
 </div>
</header>
<main class="content">
 <section class="page-intro">
  <div>
   <span class="eyebrow">
    05 / 07
   </span>
   <h1>
    STORE LOCATOR
   </h1>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div aria-hidden="true" class="intro-decoration">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
 </section>
 <div class="locator-toolbar">
  <form>
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
   <input aria-label="City or postcode" placeholder="City or postcode" value=""/>
   <button class="pill">
    Search
    <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
     <path d="M5 12h14">
     </path>
     <path d="m12 5 7 7-7 7">
     </path>
    </svg>
   </button>
  </form>
  <div class="tabs">
   <button class="selected">
    <svg aria-hidden="true" class="lucide lucide-map-pin" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
     </path>
     <circle cx="12" cy="10" r="3">
     </circle>
    </svg>
    Map
   </button>
   <button class="">
    <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
     <path d="M4 5h16">
     </path>
     <path d="M4 12h16">
     </path>
     <path d="M4 19h16">
     </path>
    </svg>
    List
   </button>
  </div>
 </div>
 <section class="locator">
  <div class="store-list">
   <button aria-label="Select store placeholder 1" class="store-card selected">
    <span class="store-number">
     01
    </span>
    <div>
     <div aria-hidden="true" class="lines">
      <span>
      </span>
      <span>
      </span>
      <span>
      </span>
     </div>
     <div class="store-mini">
      <span>
      </span>
      <span>
      </span>
     </div>
    </div>
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
   <button aria-label="Select store placeholder 2" class="store-card">
    <span class="store-number">
     02
    </span>
    <div>
     <div aria-hidden="true" class="lines">
      <span>
      </span>
      <span>
      </span>
      <span>
      </span>
     </div>
     <div class="store-mini">
      <span>
      </span>
      <span>
      </span>
     </div>
    </div>
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
   <button aria-label="Select store placeholder 3" class="store-card">
    <span class="store-number">
     03
    </span>
    <div>
     <div aria-hidden="true" class="lines">
      <span>
      </span>
      <span>
      </span>
      <span>
      </span>
     </div>
     <div class="store-mini">
      <span>
      </span>
      <span>
      </span>
     </div>
    </div>
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
   <button aria-label="Select store placeholder 4" class="store-card">
    <span class="store-number">
     04
    </span>
    <div>
     <div aria-hidden="true" class="lines">
      <span>
      </span>
      <span>
      </span>
      <span>
      </span>
     </div>
     <div class="store-mini">
      <span>
      </span>
      <span>
      </span>
     </div>
    </div>
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
  </div>
  <div class="map-placeholder">
   <div class="map-grid" style="transform: scale(1);">
    <div class="map-road road-one">
    </div>
    <div class="map-road road-two">
    </div>
    <div class="map-river">
    </div>
    <button aria-label="Select map store placeholder 1" class="map-pin selected" style="left: 25%; top: 32%;">
     <svg aria-hidden="true" class="lucide lucide-map-pin" fill="currentColor" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
      </path>
      <circle cx="12" cy="10" r="3">
      </circle>
     </svg>
     <span>
      1
     </span>
    </button>
    <button aria-label="Select map store placeholder 2" class="map-pin" style="left: 61%; top: 24%;">
     <svg aria-hidden="true" class="lucide lucide-map-pin" fill="currentColor" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
      </path>
      <circle cx="12" cy="10" r="3">
      </circle>
     </svg>
     <span>
      2
     </span>
    </button>
    <button aria-label="Select map store placeholder 3" class="map-pin" style="left: 39%; top: 68%;">
     <svg aria-hidden="true" class="lucide lucide-map-pin" fill="currentColor" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
      </path>
      <circle cx="12" cy="10" r="3">
      </circle>
     </svg>
     <span>
      3
     </span>
    </button>
    <button aria-label="Select map store placeholder 4" class="map-pin" style="left: 77%; top: 60%;">
     <svg aria-hidden="true" class="lucide lucide-map-pin" fill="currentColor" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
      </path>
      <circle cx="12" cy="10" r="3">
      </circle>
     </svg>
     <span>
      4
     </span>
    </button>
   </div>
   <div class="map-controls">
    <button aria-label="Zoom in">
     <svg aria-hidden="true" class="lucide lucide-plus" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14">
      </path>
      <path d="M12 5v14">
      </path>
     </svg>
    </button>
    <button aria-label="Zoom out">
     <svg aria-hidden="true" class="lucide lucide-minus" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14">
      </path>
     </svg>
    </button>
   </div>
   <div class="map-label">
    <svg aria-hidden="true" class="lucide lucide-map-pin" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
     </path>
     <circle cx="12" cy="10" r="3">
     </circle>
    </svg>
    <span>
     Map placeholder
    </span>
   </div>
  </div>
 </section>
</main>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,

  "/yello-trader": `
<header class="header">
 <a aria-label="Home" class="logo" href="#/">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </a>
 <nav aria-label="Main navigation" class="">
  <a class="" href="#/">
   HOME
  </a>
  <a class="" href="#/deals">
   DEALS
  </a>
  <a class="" href="#/devices">
   DEVICES
  </a>
  <a class="" href="#/upgrades">
   UPGRADES
  </a>
  <a class="" href="#/store-locator">
   STORE LOCATOR
  </a>
  <a class="active" href="#/yello-trader">
   Y’ELLO TRADER
  </a>
  <a class="" href="#/contact">
   CONTACT
  </a>
 </nav>
 <div class="header-actions">
  <button aria-label="Search pages" class="search-icon">
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
  </button>
  <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
   <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16">
    </path>
    <path d="M4 12h16">
    </path>
    <path d="M4 19h16">
    </path>
   </svg>
  </button>
 </div>
</header>
<main class="content">
 <section class="page-intro">
  <div>
   <span class="eyebrow">
    06 / 07
   </span>
   <h1>
    Y’ELLO TRADER
   </h1>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div aria-hidden="true" class="intro-decoration">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
 </section>
 <section class="trader-feature">
  <div aria-label="Image placeholder" class="media">
   <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
    <path d="M0 0L100 100M100 0L0 100">
    </path>
   </svg>
   <span class="media-icon">
    <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 3v18">
     </path>
     <path d="M3 12h18">
     </path>
     <rect height="18" rx="2" width="18" x="3" y="3">
     </rect>
    </svg>
   </span>
  </div>
  <div>
   <span class="eyebrow">
    Y’ELLO TRADER
   </span>
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
    <span>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
   <button class="pill">
    View catalogue
    <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 7h10v10">
     </path>
     <path d="M7 17 17 7">
     </path>
    </svg>
   </button>
  </div>
 </section>
 <div class="section-heading">
  <div aria-hidden="true" class="lines large">
   <span>
   </span>
  </div>
  <select aria-label="Filter catalogues by year">
   <option>
    All
   </option>
   <option>
    2026
   </option>
   <option>
    2025
   </option>
  </select>
 </div>
 <div class="publication-grid">
  <button aria-label="Open catalogue placeholder 1" class="publication">
   <div aria-label="Image placeholder" class="media">
    <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
     <path d="M0 0L100 100M100 0L0 100">
     </path>
    </svg>
    <span class="media-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </span>
   </div>
   <div>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
  </button>
  <button aria-label="Open catalogue placeholder 2" class="publication">
   <div aria-label="Image placeholder" class="media">
    <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
     <path d="M0 0L100 100M100 0L0 100">
     </path>
    </svg>
    <span class="media-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </span>
   </div>
   <div>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
  </button>
  <button aria-label="Open catalogue placeholder 3" class="publication">
   <div aria-label="Image placeholder" class="media">
    <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
     <path d="M0 0L100 100M100 0L0 100">
     </path>
    </svg>
    <span class="media-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </span>
   </div>
   <div>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
  </button>
  <button aria-label="Open catalogue placeholder 4" class="publication">
   <div aria-label="Image placeholder" class="media">
    <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
     <path d="M0 0L100 100M100 0L0 100">
     </path>
    </svg>
    <span class="media-icon">
     <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18">
      </path>
      <path d="M3 12h18">
      </path>
      <rect height="18" rx="2" width="18" x="3" y="3">
      </rect>
     </svg>
    </span>
   </div>
   <div>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
    <span class="arrow">
     <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10">
      </path>
      <path d="M7 17 17 7">
      </path>
     </svg>
    </span>
   </div>
  </button>
 </div>
</main>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,

  "/contact": `
<header class="header">
 <a aria-label="Home" class="logo" href="#/">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </a>
 <nav aria-label="Main navigation" class="">
  <a class="" href="#/">
   HOME
  </a>
  <a class="" href="#/deals">
   DEALS
  </a>
  <a class="" href="#/devices">
   DEVICES
  </a>
  <a class="" href="#/upgrades">
   UPGRADES
  </a>
  <a class="" href="#/store-locator">
   STORE LOCATOR
  </a>
  <a class="" href="#/yello-trader">
   Y’ELLO TRADER
  </a>
  <a class="active" href="#/contact">
   CONTACT
  </a>
 </nav>
 <div class="header-actions">
  <button aria-label="Search pages" class="search-icon">
   <svg aria-hidden="true" class="lucide lucide-search" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m21 21-4.34-4.34">
    </path>
    <circle cx="11" cy="11" r="8">
    </circle>
   </svg>
  </button>
  <button aria-expanded="false" aria-label="Toggle navigation" class="menu-toggle">
   <svg aria-hidden="true" class="lucide lucide-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16">
    </path>
    <path d="M4 12h16">
    </path>
    <path d="M4 19h16">
    </path>
   </svg>
  </button>
 </div>
</header>
<main class="content">
 <section class="page-intro">
  <div>
   <span class="eyebrow">
    07 / 07
   </span>
   <h1>
    CONTACT
   </h1>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
   </div>
  </div>
  <div aria-hidden="true" class="intro-decoration">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
 </section>
 <section class="contact-layout">
  <div class="contact-side">
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
    <span>
    </span>
   </div>
   <div aria-hidden="true" class="lines">
    <span>
    </span>
    <span>
    </span>
    <span>
    </span>
   </div>
   <div class="contact-method">
    <svg aria-hidden="true" class="lucide lucide-phone" fill="none" height="21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg">
     <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
     </path>
    </svg>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
   </div>
   <div class="contact-method">
    <svg aria-hidden="true" class="lucide lucide-mail" fill="none" height="21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg">
     <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">
     </path>
     <rect height="16" rx="2" width="20" x="2" y="4">
     </rect>
    </svg>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
   </div>
   <div class="contact-method">
    <svg aria-hidden="true" class="lucide lucide-map-pin" fill="none" height="21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg">
     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
     </path>
     <circle cx="12" cy="10" r="3">
     </circle>
    </svg>
    <div aria-hidden="true" class="lines">
     <span>
     </span>
     <span>
     </span>
    </div>
   </div>
  </div>
  <div class="form-panel">
   <form>
    <div class="form-row">
     <label>
      First name
      <input aria-label="First name" required="" type="text"/>
     </label>
     <label>
      Last name
      <input aria-label="Last name" required="" type="text"/>
     </label>
    </div>
    <label>
     Email address
     <input aria-label="Email address" autocomplete="email" required="" type="email"/>
    </label>
    <label>
     Enquiry type
     <select>
      <option>
       General enquiry
      </option>
      <option>
       Deals
      </option>
      <option>
       Devices
      </option>
      <option>
       Upgrades
      </option>
     </select>
    </label>
    <label>
     Message
     <textarea aria-label="Message" required="" rows="4"></textarea>
    </label>
    <label class="consent">
     <input aria-label="Agree to privacy policy" required="" type="checkbox"/>
     I agree to the privacy policy
    </label>
    <button class="pill">
     Preview submission
     <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14">
      </path>
      <path d="m12 5 7 7-7 7">
      </path>
     </svg>
    </button>
   </form>
  </div>
 </section>
 <section class="faq">
  <div class="section-heading">
   <div aria-hidden="true" class="lines large">
    <span>
    </span>
   </div>
  </div>
  <div class="faq-row">
   <button aria-expanded="false" aria-label="Toggle question placeholder 1">
    <div aria-hidden="true" class="lines">
     <span>
     </span>
    </div>
    <svg aria-hidden="true" class="lucide lucide-plus" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
     <path d="M5 12h14">
     </path>
     <path d="M12 5v14">
     </path>
    </svg>
   </button>
  </div>
  <div class="faq-row">
   <button aria-expanded="false" aria-label="Toggle question placeholder 2">
    <div aria-hidden="true" class="lines">
     <span>
     </span>
    </div>
    <svg aria-hidden="true" class="lucide lucide-plus" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
     <path d="M5 12h14">
     </path>
     <path d="M12 5v14">
     </path>
    </svg>
   </button>
  </div>
  <div class="faq-row">
   <button aria-expanded="false" aria-label="Toggle question placeholder 3">
    <div aria-hidden="true" class="lines">
     <span>
     </span>
    </div>
    <svg aria-hidden="true" class="lucide lucide-plus" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
     <path d="M5 12h14">
     </path>
     <path d="M12 5v14">
     </path>
    </svg>
   </button>
  </div>
 </section>
</main>
<footer>
 <div class="footer-top">
  <a aria-label="Home" class="logo" href="#/">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </a>
  <div class="footer-links">
   <a href="#/deals">
    DEALS
   </a>
   <a href="#/devices">
    DEVICES
   </a>
   <a href="#/upgrades">
    UPGRADES
   </a>
   <a href="#/store-locator">
    STORE LOCATOR
   </a>
   <a href="#/yello-trader">
    Y’ELLO TRADER
   </a>
   <a href="#/contact">
    CONTACT
   </a>
  </div>
  <button aria-label="Back to top" class="arrow">
   <svg aria-hidden="true" class="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v10">
    </path>
    <path d="M7 17 17 7">
    </path>
   </svg>
  </button>
 </div>
 <div class="footer-bottom">
  <div aria-hidden="true" class="lines">
   <span>
   </span>
  </div>
  <div class="footer-dots">
   <i>
   </i>
   <i>
   </i>
   <i>
   </i>
  </div>
 </div>
</footer>
`,
};

const PREVIEW_TEMPLATES = {
  device: `
<div class="modal-head">
 <h2>
  Device preview
 </h2>
 <button aria-label="Close preview">
  <svg aria-hidden="true" class="lucide lucide-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
   <path d="M18 6 6 18">
   </path>
   <path d="m6 6 12 12">
   </path>
  </svg>
 </button>
</div>
<div class="preview-layout">
 <div aria-label="Image placeholder" class="media">
  <div class="phone-outline">
   <span>
   </span>
   <i>
   </i>
  </div>
 </div>
 <div>
  <div aria-hidden="true" class="lines large">
   <span>
   </span>
   <span>
   </span>
  </div>
  <div aria-hidden="true" class="lines">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
  <div class="color-swatches">
   <button aria-label="Color option 1">
   </button>
   <button aria-label="Color option 2">
   </button>
   <button aria-label="Color option 3">
   </button>
  </div>
  <a class="pill" href="#/upgrades">
   UPGRADES
   <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14">
    </path>
    <path d="m12 5 7 7-7 7">
    </path>
   </svg>
  </a>
 </div>
</div>
`,

  search: `
<div class="modal-head">
 <h2>
  Search
 </h2>
 <button aria-label="Close preview">
  <svg aria-hidden="true" class="lucide lucide-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
   <path d="M18 6 6 18">
   </path>
   <path d="m6 6 12 12">
   </path>
  </svg>
 </button>
</div>
<input aria-label="Search pages" class="search-input" placeholder="Search pages" value=""/>
<div class="search-results">
 <a href="#/">
  HOME
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <a href="#/deals">
  DEALS
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <a href="#/devices">
  DEVICES
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <a href="#/upgrades">
  UPGRADES
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <a href="#/store-locator">
  STORE LOCATOR
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <a href="#/yello-trader">
  Y’ELLO TRADER
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <a href="#/contact">
  CONTACT
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
</div>
`,

  deal: `
<div class="modal-head">
 <h2>
  Deal preview
 </h2>
 <button aria-label="Close preview">
  <svg aria-hidden="true" class="lucide lucide-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
   <path d="M18 6 6 18">
   </path>
   <path d="m6 6 12 12">
   </path>
  </svg>
 </button>
</div>
<div class="preview-layout">
 <div aria-label="Image placeholder" class="media">
  <div class="phone-outline">
   <span>
   </span>
   <i>
   </i>
  </div>
 </div>
 <div>
  <div aria-hidden="true" class="lines large">
   <span>
   </span>
   <span>
   </span>
  </div>
  <div aria-hidden="true" class="lines">
   <span>
   </span>
   <span>
   </span>
   <span>
   </span>
  </div>
  <div class="color-swatches">
   <button aria-label="Color option 1">
   </button>
   <button aria-label="Color option 2">
   </button>
   <button aria-label="Color option 3">
   </button>
  </div>
  <a class="pill" href="#/upgrades">
   UPGRADES
   <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14">
    </path>
    <path d="m12 5 7 7-7 7">
    </path>
   </svg>
  </a>
 </div>
</div>
`,

  catalogue: `
<div class="modal-head">
 <h2>
  Catalogue preview
 </h2>
 <button aria-label="Close preview">
  <svg aria-hidden="true" class="lucide lucide-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
   <path d="M18 6 6 18">
   </path>
   <path d="m6 6 12 12">
   </path>
  </svg>
 </button>
</div>
<div aria-label="Image placeholder" class="media catalogue-sheet">
 <svg aria-hidden="true" preserveaspectratio="none" viewbox="0 0 100 100">
  <path d="M0 0L100 100M100 0L0 100">
  </path>
 </svg>
 <span class="media-icon">
  <svg aria-hidden="true" class="lucide lucide-grid2x2 lucide-grid-2x2" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
   <path d="M12 3v18">
   </path>
   <path d="M3 12h18">
   </path>
   <rect height="18" rx="2" width="18" x="3" y="3">
   </rect>
  </svg>
 </span>
</div>
<div class="pagination">
 <button aria-label="Previous catalogue page" disabled="">
  <svg aria-hidden="true" class="lucide lucide-arrow-left" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
   <path d="m12 19-7-7 7-7">
   </path>
   <path d="M19 12H5">
   </path>
  </svg>
 </button>
 <span>
  1 / 8
 </span>
 <button aria-label="Next catalogue page">
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </button>
</div>
`,

  eligibility: `
<div class="form-result">
 <svg aria-hidden="true" class="lucide lucide-check" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6 9 17l-5-5">
  </path>
 </svg>
 <h3>
  Eligibility preview
 </h3>
 <div aria-hidden="true" class="lines">
  <span>
  </span>
  <span>
  </span>
  <span>
  </span>
 </div>
 <a class="pill" href="#/devices">
  DEVICES
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </a>
 <button class="reset">
  Start again
 </button>
</div>
`,

  contact: `
<div class="form-result">
 <svg aria-hidden="true" class="lucide lucide-check" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6 9 17l-5-5">
  </path>
 </svg>
 <h3>
  Form preview complete
 </h3>
 <p>
  No message has been sent.
 </p>
 <button class="pill">
  Reset form
  <svg aria-hidden="true" class="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12h14">
   </path>
   <path d="m12 5 7 7-7 7">
   </path>
  </svg>
 </button>
</div>
`,
};
