// =============================================================================
// DATA
// =============================================================================

const PRODUCT_IMAGES = {
  1:  "img/shop_img1.webp",
  2:  "img/shop_img2.jpg",
  3:  "img/shop_img3.webp",
  4:  "img/shop_img4.webp",
  5:  "https://d1flfk77wl2xk4.cloudfront.net/Assets/i-m-from-mugwort-essence-160ml/79/675/XXL_p0088967579.jpg",
  6:  "img/shop_img6.webp",
  7:  "https://d1flfk77wl2xk4.cloudfront.net/Assets/44/732/l_p0119073244.png",
  8:  "https://d1flfk77wl2xk4.cloudfront.net/Assets/04/723/l_p0130772304.jpg",
  9:  "https://d1flfk77wl2xk4.cloudfront.net/Assets/91/161/l_p0081516191.jpg",
  10: "https://d1flfk77wl2xk4.cloudfront.net/Assets/26/434/l_p0204843426.jpg",
  11: "https://d1flfk77wl2xk4.cloudfront.net/Assets/some-by-mi-aha-bha-pha-30-days-miracle-toner-150ml-150ml/32/799/XXL_p0089879932.jpg",
  12: "https://d1flfk77wl2xk4.cloudfront.net/Assets/49/467/l_p0115846749.jpg",
  13: "https://hmartus.vtexassets.com/arquivos/ids/162171/880101960894.png?v=638448911436600000",
  14: "https://img06.weeecdn.com/item/image/686/676/3F8C40F7ABD5FCC7.jpg",
  15: "https://img06.weeecdn.com/product/image/103/850/3A747663FED06CCC.png",
  16: "https://img06.weeecdn.com/item/image/419/958/642C4879B1411B4A.jpeg",
  17: "https://img06.weeecdn.com/product/image/917/626/5C59AA9FA8E847FE.png",
  18: "https://hmartus.vtexassets.com/arquivos/ids/164158/file_54.png?v=638448919697700000",
  19: "https://k-oneshop.com/cdn/shop/products/083dbffc3a98f2e2f1298bdaeacf625d.jpg?v=1670288228",
  20: "https://img06.weeecdn.com/product/image/582/023/16E4A312DEAEC6F3.png",
  21: "https://www.peachandlily.com/cdn/shop/files/Image_1_14_e2bd1ae4-919d-4eb8-881b-b1d1daf9455c.jpg?v=1769789782",
  22: "https://facetreasures.com/cdn/shop/products/koreansetsphotoshot.jpg?v=1655142951",
  23: "https://koreacrate.com/cdn/shop/files/Main_Image_202602_D.webp?v=1770544052",
  24: "https://i0.wp.com/wanderwithjin.com/wp-content/uploads/2022/12/daebak_2.jpg?resize=800%2C800&ssl=1",
  25: "https://www.peachandlily.com/cdn/shop/files/Image_01_NoRoundel.jpg?v=1763934470",
};

const PRODUCTS = [
  { id: 1, name: "Rice Water Bright Cleansing Foam", brand: "THE FACE SHOP", price: 12.99, category: "cleanser", badge: "Best Seller", rating: 4.8, reviews: 2341, desc: "Gentle rice water cleanser that brightens and smooths skin.", sizes: ["150ml", "300ml"] },
  { id: 2, name: "Snail Mucin 96% Power Repairing Essence", brand: "COSRX", price: 21.50, category: "essence", badge: "Cult Fave", rating: 4.9, reviews: 8920, desc: "Lightweight snail secretion filtrate for deep hydration and repair.", sizes: ["100ml"] },
  { id: 3, name: "Soon Jung pH 5.5 Relief Toner", brand: "ETUDE", price: 14.00, category: "toner", badge: null, rating: 4.7, reviews: 1560, desc: "Ultra-gentle toner for sensitive and irritated skin.", sizes: ["180ml", "350ml"] },
  { id: 4, name: "Birch Juice Moisturizing Sunscreen SPF50+", brand: "ROUND LAB", price: 18.99, category: "sunscreen", badge: "New", rating: 4.6, reviews: 890, desc: "Lightweight, no white-cast sunscreen with birch sap hydration.", sizes: ["50ml"] },
  { id: 5, name: "Mugwort Essence", brand: "I'M FROM", price: 28.00, category: "essence", badge: null, rating: 4.8, reviews: 3200, desc: "100% mugwort extract to calm redness and soothe skin.", sizes: ["160ml"] },
  { id: 6, name: "Beauty of Joseon Glow Serum", brand: "BEAUTY OF JOSEON", price: 16.50, category: "serum", badge: "Best Seller", rating: 4.9, reviews: 12400, desc: "Propolis + niacinamide glow serum for radiant, dewy skin.", sizes: ["30ml"] },
  { id: 7, name: "Centella Unscented Serum", brand: "PURITO", price: 17.00, category: "serum", badge: null, rating: 4.7, reviews: 2100, desc: "Fragrance-free centella serum for calming and barrier repair.", sizes: ["60ml"] },
  { id: 8, name: "Heartleaf 77% Soothing Toner", brand: "ANUA", price: 19.99, category: "toner", badge: "Trending", rating: 4.8, reviews: 6700, desc: "77% heartleaf extract toner to calm and hydrate troubled skin.", sizes: ["250ml", "500ml"] },
  { id: 9, name: "Vitamin Hyaluronic Acid Vitalizing Cream", brand: "IUNIK", price: 22.00, category: "moisturizer", badge: null, rating: 4.6, reviews: 1890, desc: "Vitamin C + hyaluronic acid cream for glow and moisture.", sizes: ["60ml"] },
  { id: 10, name: "Airy Fit Sun Stick SPF50+", brand: "MISSHA", price: 15.50, category: "sunscreen", badge: "New", rating: 4.5, reviews: 670, desc: "Portable sun stick for easy reapplication with zero stickiness.", sizes: ["16g"] },
  { id: 11, name: "AHA BHA PHA 30 Days Miracle Toner", brand: "SOME BY MI", price: 13.50, category: "toner", badge: null, rating: 4.6, reviews: 4300, desc: "Triple-acid toner for gentle exfoliation and pore care.", sizes: ["150ml"] },
  { id: 12, name: "Cica Daily Soothing Mask", brand: "VT COSMETICS", price: 24.00, category: "mask", badge: null, rating: 4.7, reviews: 1200, desc: "30-pack daily sheet masks with CICA for daily calming care.", sizes: ["30 sheets"] },
  { id: 13, name: "Honey Butter Chips", brand: "HAITAI", price: 4.99, category: "snacks", badge: "Fan Fave", rating: 4.9, reviews: 5600, desc: "The iconic sweet & salty Korean chip that started a craze. Addictively buttery with a honey glaze.", sizes: ["60g", "120g"] },
  { id: 14, name: "Choco Pie Original", brand: "ORION", price: 6.99, category: "snacks", badge: null, rating: 4.8, reviews: 3400, desc: "Soft cake, marshmallow filling, chocolate coating — a Korean childhood classic. 12-pack box.", sizes: ["12-pack"] },
  { id: 15, name: "Tteokbokki Rice Snack", brand: "NONGSHIM", price: 3.99, category: "snacks", badge: null, rating: 4.5, reviews: 1800, desc: "Crunchy rice puff snacks with sweet-spicy tteokbokki seasoning.", sizes: ["75g"] },
  { id: 16, name: "Banana Kick", brand: "NONGSHIM", price: 3.49, category: "snacks", badge: null, rating: 4.7, reviews: 2900, desc: "Light, puffy corn snacks with real banana flavor. Nostalgic and sweet.", sizes: ["75g"] },
  { id: 17, name: "Pepero Almond & Chocolate", brand: "LOTTE", price: 3.99, category: "snacks", badge: "Best Seller", rating: 4.8, reviews: 7200, desc: "Thin pretzel sticks dipped in chocolate and crushed almonds.", sizes: ["32g", "8-pack"] },
  { id: 18, name: "Shin Ramyun Multi-Pack", brand: "NONGSHIM", price: 9.99, category: "snacks", badge: "Staple", rating: 4.9, reviews: 15000, desc: "Korea's #1 spicy instant noodle. Rich beef broth with a kick. 5-pack.", sizes: ["5-pack"] },
  { id: 19, name: "Yakgwa Honey Cookies", brand: "SAMLIP", price: 7.99, category: "snacks", badge: "Trending", rating: 4.7, reviews: 2100, desc: "Traditional deep-fried honey pastry — chewy, fragrant, and lightly spiced. A K-drama sensation.", sizes: ["200g"] },
  { id: 20, name: "Dried Seaweed Snack Variety", brand: "BIBIGO", price: 5.99, category: "snacks", badge: null, rating: 4.6, reviews: 3300, desc: "Crispy roasted seaweed in original, sesame, and wasabi flavors. 12-pack.", sizes: ["12-pack"] },
  { id: 21, name: "Glass Skin Starter Set", brand: "INYEON CURATED", price: 54.99, category: "gift-box", badge: "Limited", rating: 4.9, reviews: 420, desc: "5-step routine set: cleanser, toner, essence, serum & moisturizer. Curated from our best sellers.", sizes: ["Standard"] },
  { id: 22, name: "Mystery Beauty Box", brand: "INYEON CURATED", price: 39.99, category: "gift-box", badge: "Mystery", rating: 4.8, reviews: 890, desc: "6+ full-size K-beauty products worth over $80. Every box is a surprise!", sizes: ["Standard"] },
  { id: 23, name: "Seoul Snack Box", brand: "INYEON CURATED", price: 29.99, category: "gift-box", badge: "Popular", rating: 4.9, reviews: 1560, desc: "10+ Korean snacks & treats in one box: chips, cookies, candy, ramyun, and drinks.", sizes: ["Standard", "XL (20+ items)"] },
  { id: 24, name: "K-Beauty + Snacks Duo Box", brand: "INYEON CURATED", price: 64.99, category: "gift-box", badge: "Exclusive", rating: 4.9, reviews: 340, desc: "The ultimate gift: 4 skincare favorites + 8 Korean snacks in one box.", sizes: ["Standard"] },
  { id: 25, name: "Summer Glow Limited Edition Box", brand: "INYEON CURATED", price: 49.99, category: "gift-box", badge: "Seasonal", rating: 4.7, reviews: 210, desc: "Seasonal summer set: lightweight SPF, mist toner, vitamin serum + cooling aloe gel. Limited run.", sizes: ["Standard"] },
];

const CATEGORIES = ["all", "cleanser", "toner", "essence", "serum", "moisturizer", "sunscreen", "mask", "snacks", "gift-box"];
const CATEGORY_LABELS = {
  all: "All", cleanser: "Cleansers", toner: "Toners", essence: "Essences",
  serum: "Serums", moisturizer: "Moisturizers", sunscreen: "Sunscreen", mask: "Masks",
  snacks: "Snacks", "gift-box": "Sets",
};

const BADGE_COLORS = {
  "Best Seller": "#D4AF37", "Cult Fave": "#C46B89", "New": "#6BAE8E", "Trending": "#7B8CDE",
  "Fan Fave": "#E8915A", "Staple": "#8A7E76", "Limited": "#C46B89", "Mystery": "#9B7EC8",
  "Popular": "#D4AF37", "Exclusive": "#2C2420", "Seasonal": "#E8915A",
};

const HERO_SLIDES = [
  {
    id: "main",
    tagline: "Authentic Korean Beauty · Curated for You",
    titleHtml: (a) => `Your Daily Glow,<br><span style="font-style:italic;color:${a}">Delivered</span>`,
    desc: "Hand-picked K-beauty essentials from Seoul's most trusted brands. Glass skin starts here.",
    bg: "linear-gradient(135deg, #FAF7F2 0%, #F2D9E0 50%, #E8D5C4 100%)",
    pattern: "repeating-linear-gradient(45deg, transparent, transparent 40px, #C46B89 40px, #C46B89 41px)",
    patternOpacity: 0.08, accentColor: "#C46B89",
    buttons: [{label:"Shop All",action:"all",primary:true},{label:"Shop Serums",action:"serum",primary:false}],
    emojis: ["✨","🧴","💧","🌿"],
  },
  {
    id: "seasonal",
    tagline: "Limited Edition · Summer 2026",
    titleHtml: (a) => `Summer Glow<br><span style="font-style:italic;color:${a}">Collection</span>`,
    desc: "Lightweight SPFs, vitamin serums & cooling gels — everything your skin craves this season.",
    bg: "linear-gradient(135deg, #FFF8F0 0%, #FFE4CC 40%, #FFDAB9 100%)",
    pattern: "radial-gradient(circle at 20% 50%, rgba(232,145,90,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,180,100,0.12) 0%, transparent 50%)",
    patternOpacity: 1, accentColor: "#E8915A",
    buttons: [{label:"Shop Seasonal",action:"gift-box",primary:true}],
    emojis: ["☀️","🌸","🧊","💦"],
  },
  {
    id: "mystery",
    tagline: "Can't Decide? Let Us Surprise You",
    titleHtml: (a) => `Mystery<br><span style="font-style:italic;color:${a}">Beauty Box</span>`,
    desc: "6+ full-size K-beauty products worth over $80. Every box is different — discover new holy grails!",
    bg: "linear-gradient(135deg, #F5F0FA 0%, #E8D9F5 50%, #D9CCE8 100%)",
    pattern: "repeating-conic-gradient(rgba(155,126,200,0.06) 0% 25%, transparent 0% 50%)",
    patternOpacity: 1, accentColor: "#9B7EC8",
    buttons: [{label:"Explore Gift Boxes",action:"gift-box",primary:true}],
    emojis: ["✉️","🎁","🎀","✨"],
  },
  {
    id: "snacks",
    tagline: "New Category · 맛있다!",
    titleHtml: (a) => `Korean Snacks,<br><span style="font-style:italic;color:${a}">Straight from Seoul</span>`,
    desc: "Honey butter chips, choco pies, yakgwa, shin ramyun — all the convenience store hits delivered to you.",
    bg: "linear-gradient(135deg, #FFFBF0 0%, #FFE8C8 50%, #FFDCAA 100%)",
    pattern: "repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(212,133,59,0.07) 30px, rgba(212,133,59,0.07) 31px)",
    patternOpacity: 1, accentColor: "#D4853B",
    buttons: [{label:"Shop Snacks",action:"snacks",primary:true},{label:"Seoul Snack Box",action:"gift-box",primary:false}],
    emojis: ["🍯","🍜","🍫","🌶️"],
  },
  {
    id: "giftbox",
    tagline: "The Perfect Gift · Curated Sets",
    titleHtml: (a) => `Gift Boxes<br><span style="font-style:italic;color:${a}">&amp; Bundles</span>`,
    desc: "Skincare sets, snack boxes, mystery bundles — beautifully packaged and ready to gift.",
    bg: "linear-gradient(135deg, #FFF5F7 0%, #F9DDE4 50%, #F2CEDB 100%)",
    pattern: "radial-gradient(circle at 30% 70%, rgba(196,107,137,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(212,175,55,0.07) 0%, transparent 40%)",
    patternOpacity: 1, accentColor: "#C46B89",
    buttons: [{label:"Browse Gift Boxes",action:"gift-box",primary:true}],
    emojis: ["🎁","📦","🎀","🌸"],
  },
];

// =============================================================================
// STATE
// =============================================================================
let state = {
  category: "all",
  cart: [],
  view: "shop",        // "shop" | "product" | "cart" | "checkout"
  selectedProduct: null,
  selectedSize: 0,
  searchQuery: "",
  heroSlide: 0,
  categoriesExpanded: false,
};

let heroTimer = null;
let notifTimer = null;

// =============================================================================
// HELPERS
// =============================================================================
function starsHtml(rating) {
  return '<span class="stars">' + "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "") + '</span>';
}

function formatNum(n) { return n.toLocaleString(); }

function getCartTotal() { return state.cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return state.cart.reduce((s, i) => s + i.qty, 0); }

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchCat = state.category === "all" || p.category === state.category;
    const q = state.searchQuery.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function scrollToTop() {
  document.getElementById("top-anchor").scrollIntoView({ behavior: "smooth" });
}

// =============================================================================
// HERO CAROUSEL
// =============================================================================
function initHero() {
  renderHeroSlide();
  resetHeroTimer();
}

function renderHeroSlide() {
  const slide = HERO_SLIDES[state.heroSlide];
  const accent = slide.accentColor;

  // Update gradient background on section
  const heroEl = document.getElementById("hero-section");
  heroEl.style.background = slide.bg;

  // Pattern overlay
  const patternEl = document.getElementById("hero-pattern");
  patternEl.style.background = slide.pattern;
  patternEl.style.opacity = slide.patternOpacity;

  // Floating emojis
  const emojiContainer = document.getElementById("hero-emojis");
  emojiContainer.innerHTML = slide.emojis.map((e, i) => `
    <span class="hero-emoji" style="
      font-size:${28 + i * 6}px;
      opacity:${0.13 + i * 0.03};
      top:${15 + i * 20}%;
      ${i % 2 === 0 ? 'left:' + (6 + i * 3) + '%' : 'right:' + (6 + i * 3) + '%'};
      animation:floatEmoji${i} ${4 + i}s ease-in-out infinite;
    ">${e}</span>
  `).join("");

  // Content with fresh animation
  const content = document.getElementById("hero-content");
  content.style.animation = "none";
  content.offsetHeight; // force reflow
  content.style.animation = "heroFadeIn .55s cubic-bezier(.25,.46,.45,.94) both";
  content.innerHTML = `
    <p class="hero-tagline" style="color:${accent}">${slide.tagline}</p>
    <h1 class="hero-title">${slide.titleHtml(accent)}</h1>
    <p class="hero-desc">${slide.desc}</p>
    <div class="hero-buttons">
      ${slide.buttons.map(btn => `
        <button class="action-btn" onclick="handleHeroAction('${btn.action}')" style="
          background:${btn.primary ? accent : 'transparent'};
          color:${btn.primary ? '#fff' : 'var(--text)'};
          border:${btn.primary ? 'none' : '1.5px solid var(--text)'};
          padding:12px 30px;border-radius:28px;font-size:13px;font-weight:600;
          letter-spacing:.8px;font-family:var(--font-body);
        ">${btn.label}</button>
      `).join("")}
    </div>
  `;

  // Dots
  const dotsEl = document.getElementById("hero-dots");
  dotsEl.innerHTML = HERO_SLIDES.map((_, i) =>
    `<button class="hero-dot" onclick="heroGoTo(${i})" aria-label="Slide ${i + 1}" style="
      width:${i === state.heroSlide ? 24 : 8}px;
      background:${i === state.heroSlide ? accent : 'rgba(44,36,32,.18)'};
    "></button>`
  ).join("");

  // Progress bar
  const prog = document.getElementById("hero-progress");
  prog.style.background = accent;
  prog.style.animation = "none";
  prog.offsetHeight;
  prog.style.animation = "progressBar 5.5s linear";
}

function resetHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    state.heroSlide = (state.heroSlide + 1) % HERO_SLIDES.length;
    renderHeroSlide();
  }, 5500);
}

function heroGoTo(idx) {
  if (idx === state.heroSlide) return;
  state.heroSlide = idx;
  renderHeroSlide();
  resetHeroTimer();
}
function heroNext() { heroGoTo((state.heroSlide + 1) % HERO_SLIDES.length); }
function heroPrev() { heroGoTo((state.heroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length); }

function handleHeroAction(action) {
  state.category = action;
  state.searchQuery = "";
  document.getElementById("search-input").value = "";
  renderShop();
}

// =============================================================================
// CATEGORY PILLS
// =============================================================================
function renderCategoryPills() {
  const row = document.getElementById("category-row");
  row.innerHTML = CATEGORIES.map(c => `
    <button class="cat-btn ${state.category === c ? 'active' : ''}" onclick="setCategory('${c}')">${CATEGORY_LABELS[c]}</button>
  `).join("");

  checkCategoryOverflow();
}

function checkCategoryOverflow() {
  const row = document.getElementById("category-row");
  const btn = document.getElementById("more-categories-btn");
  // Temporarily expand to measure
  row.style.maxHeight = "9999px";
  const overflows = row.scrollHeight > 46;
  if (!state.categoriesExpanded && overflows) {
    row.style.maxHeight = "38px";
  }
  btn.classList.toggle("hidden", !overflows);
}

function toggleCategoryExpand() {
  state.categoriesExpanded = !state.categoriesExpanded;
  const row = document.getElementById("category-row");
  const btn = document.getElementById("more-categories-btn");
  row.style.maxHeight = state.categoriesExpanded ? "9999px" : "38px";
  btn.textContent = state.categoriesExpanded ? "Show less ↑" : "More categories ↓";
}

function setCategory(cat) {
  state.category = cat;
  if (state.view !== "shop") {
    state.view = "shop";
    state.selectedProduct = null;
  }
  renderAll();
}

// =============================================================================
// PRODUCT GRID
// =============================================================================
function renderProductGrid() {
  const products = getFilteredProducts();
  const grid = document.getElementById("product-grid");
  const noResults = document.getElementById("no-results");
  const searchInfo = document.getElementById("search-info");

  if (state.searchQuery) {
    searchInfo.classList.remove("hidden");
    searchInfo.textContent = `${products.length} result${products.length !== 1 ? 's' : ''} for "${state.searchQuery}"`;
  } else {
    searchInfo.classList.add("hidden");
  }

  if (products.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  grid.innerHTML = products.map((p, i) => `
    <div class="prod-card" onclick="openProduct(${p.id})" style="animation:fadeUp .5s ease ${i * .06}s both">
      ${p.badge ? `<span class="badge-tag" style="background:${BADGE_COLORS[p.badge] || '#888'}">${p.badge}</span>` : ''}
      <div class="prod-img-wrap">
        <img class="prod-img" src="${PRODUCT_IMAGES[p.id]}" alt="${p.name}" />
      </div>
      <div class="prod-info">
        <p class="prod-brand">${p.brand}</p>
        <h3 class="prod-name">${p.name}</h3>
        <div class="prod-rating-row">
          ${starsHtml(p.rating)}
          <span class="review-count">(${formatNum(p.reviews)})</span>
        </div>
        <div class="prod-bottom">
          <span class="prod-price">$${p.price.toFixed(2)}</span>
          <button class="action-btn add-btn" onclick="event.stopPropagation(); addToCart(${p.id}, '${p.sizes[0]}')">Add +</button>
        </div>
      </div>
    </div>
  `).join("");
}

// =============================================================================
// PRODUCT DETAIL
// =============================================================================
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  state.selectedProduct = p;
  state.selectedSize = 0;
  state.view = "product";
  renderAll();
  scrollToTop();
}

function renderProductDetail() {
  const container = document.getElementById("view-product");
  const p = state.selectedProduct;
  if (!p) { container.innerHTML = ""; return; }

  const sizeButtons = p.sizes.length > 1
    ? `<div style="margin-bottom:28px">
        <p class="size-label">Size</p>
        <div class="size-options">
          ${p.sizes.map((s, i) => `
            <button class="size-btn ${state.selectedSize === i ? 'active' : ''}" onclick="selectSize(${i})">${s}</button>
          `).join("")}
        </div>
      </div>`
    : '';

  container.innerHTML = `
    <button class="back-btn nav-link" onclick="goShop()">← Back to shop</button>
    <div class="detail-grid">
      <div class="detail-img-wrap">
        <img class="detail-img" src="${PRODUCT_IMAGES[p.id]}" alt="${p.name}" />
      </div>
      <div style="padding-top:10px">
        <p class="detail-brand">${p.brand}</p>
        <h2 class="detail-name">${p.name}</h2>
        <div class="detail-rating-row">
          ${starsHtml(p.rating)}
          <span class="detail-rating-text">${p.rating} · ${formatNum(p.reviews)} reviews</span>
        </div>
        <p class="detail-price">$${p.price.toFixed(2)}</p>
        <p class="detail-desc">${p.desc}</p>
        ${sizeButtons}
        <button class="action-btn primary-action-btn" onclick="addToCart(${p.id}, '${p.sizes[state.selectedSize]}')">Add to Cart — $${p.price.toFixed(2)}</button>
        <div class="detail-perks">
          <div>🚚 Free shipping over $35</div>
          <div>🌿 ${p.category === "snacks" ? "Imported fresh" : "Cruelty-free"}</div>
          <div>✨ Authentic from Korea</div>
          <div>↩️ 30-day returns</div>
        </div>
      </div>
    </div>
  `;
}

function selectSize(i) {
  state.selectedSize = i;
  renderProductDetail();
}

// =============================================================================
// CART
// =============================================================================
function addToCart(productId, size) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const key = `${product.id}-${size}`;
  const existing = state.cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({
      key, id: product.id, name: product.name, brand: product.brand,
      price: product.price, image: PRODUCT_IMAGES[product.id], size, qty: 1
    });
  }
  updateCartBadge();
  showCartNotif();
}

function updateQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  state.cart = state.cart.filter(i => i.qty > 0);
  renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById("cart-badge");
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function showCartNotif() {
  const el = document.getElementById("cart-notif");
  el.classList.add("show");
  if (notifTimer) clearTimeout(notifTimer);
  notifTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

function renderCart() {
  const container = document.getElementById("view-cart");
  const count = getCartCount();
  const total = getCartTotal();

  if (state.cart.length === 0) {
    container.innerHTML = `
      <h2 class="cart-title">Your Cart</h2>
      <p class="cart-subtitle">${count} item${count !== 1 ? 's' : ''}</p>
      <div class="cart-empty">
        <p class="cart-empty-emoji">🧴</p>
        <p class="cart-empty-text">Your cart is empty</p>
        <button class="action-btn" onclick="goShop()" style="background:var(--accent);color:#fff;border:none;padding:12px 32px;border-radius:28px;font-size:13px;font-weight:600;font-family:var(--font-body)">Start Shopping</button>
      </div>
    `;
    return;
  }

  const shipping = total >= 35 ? 0 : 5.99;
  const grandTotal = total + shipping;

  container.innerHTML = `
    <h2 class="cart-title">Your Cart</h2>
    <p class="cart-subtitle">${count} item${count !== 1 ? 's' : ''}</p>
    ${state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" /></div>
        <div class="cart-item-info">
          <p class="cart-item-brand">${item.brand}</p>
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-size">${item.size}</p>
        </div>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="updateQty('${item.key}', -1)">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.key}', 1)">+</button>
        </div>
        <span class="cart-item-total">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join("")}
    <div class="cart-summary">
      <div class="summary-row">
        <span class="summary-label">Subtotal</span>
        <span class="summary-value">$${total.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Shipping</span>
        <span class="shipping-free">${total >= 35 ? 'FREE' : '$5.99'}</span>
      </div>
      ${total < 35 ? `<p class="free-shipping-hint">Add $${(35 - total).toFixed(2)} more for free shipping!</p>` : ''}
      <div class="total-row">
        <span class="total-label">Total</span>
        <span class="total-value">$${grandTotal.toFixed(2)}</span>
      </div>
    </div>
    <button class="action-btn primary-action-btn" onclick="setView('checkout')" style="margin-top:20px">Proceed to Checkout</button>
    <button class="continue-shopping" onclick="goShop()">Continue Shopping</button>
  `;
}

// =============================================================================
// CHECKOUT
// =============================================================================
function renderCheckout() {
  const container = document.getElementById("view-checkout");
  const count = getCartCount();
  const total = getCartTotal();
  const shipping = total >= 35 ? 0 : 5.99;
  const grandTotal = total + shipping;

  const fields = [
    { label: "Email", placeholder: "you@email.com", type: "email" },
    { label: "Full Name", placeholder: "Jane Kim", type: "text" },
    { label: "Address", placeholder: "123 Glow Street", type: "text" },
    { label: "City", placeholder: "Vancouver", type: "text" },
  ];

  container.innerHTML = `
    <h2 class="checkout-title">Checkout</h2>
    ${fields.map((f, i) => `
      <div class="form-group" style="animation:fadeUp .4s ease ${i * .08}s both">
        <label class="form-label">${f.label}</label>
        <input class="form-input" type="${f.type}" placeholder="${f.placeholder}" />
      </div>
    `).join("")}
    <div class="form-row">
      <div>
        <label class="form-label">Province / State</label>
        <input class="form-input" placeholder="BC" />
      </div>
      <div>
        <label class="form-label">Postal Code</label>
        <input class="form-input" placeholder="V6B 1A1" />
      </div>
    </div>
    <div class="checkout-summary">
      <div class="checkout-summary-row">
        <span>${count} items</span>
        <span style="font-weight:600;color:var(--text)">$${total.toFixed(2)}</span>
      </div>
      <div class="checkout-summary-row" style="margin-bottom:10px">
        <span>Shipping</span>
        <span style="font-weight:600;color:var(--green)">${total >= 35 ? 'FREE' : '$5.99'}</span>
      </div>
      <div class="checkout-total-row">
        <span style="font-weight:700;color:var(--text)">Total</span>
        <span style="font-family:var(--font-display);font-weight:700;font-size:18px;color:var(--text)">$${grandTotal.toFixed(2)}</span>
      </div>
    </div>
    <button class="action-btn primary-action-btn" onclick="placeOrder()">Place Order</button>
    <button class="back-to-cart" onclick="setView('cart')">← Back to Cart</button>
  `;
}

function placeOrder() {
  const overlay = document.getElementById("order-overlay");
  overlay.classList.add("show");
  state.cart = [];
  updateCartBadge();
  setTimeout(() => {
    overlay.classList.remove("show");
    state.view = "shop";
    renderAll();
  }, 3500);
}

// =============================================================================
// NAVIGATION
// =============================================================================
function setView(v) {
  state.view = v;
  renderAll();
  scrollToTop();
}

function goShop() {
  state.view = "shop";
  state.selectedProduct = null;
  renderAll();
}

function handleSearch(value) {
  state.searchQuery = value;
  // Keep both inputs in sync
  const desktop = document.getElementById("search-input");
  const mobile = document.getElementById("mobile-search-input");
  if (desktop.value !== value) desktop.value = value;
  if (mobile.value !== value) mobile.value = value;
  if (state.view !== "shop") goShop();
  else renderShop();
}

function toggleMobileSearch() {
  const bar = document.getElementById("mobile-search-bar");
  const isHidden = bar.classList.toggle("hidden");
  if (!isHidden) {
    document.getElementById("mobile-search-input").focus();
  }
}

// =============================================================================
// RENDER ORCHESTRATION
// =============================================================================
function renderAll() {
  const views = ["view-shop", "view-product", "view-cart", "view-checkout"];
  views.forEach(id => document.getElementById(id).classList.add("hidden"));

  // Show hero only on shop view with no search and category "all"
  const heroEl = document.getElementById("hero-section");
  const showHero = state.view === "shop" && !state.searchQuery && state.category === "all";
  heroEl.classList.toggle("hidden", !showHero);

  // Update active nav
  document.getElementById("nav-shop").classList.toggle("active", state.view === "shop");

  switch (state.view) {
    case "shop":
      document.getElementById("view-shop").classList.remove("hidden");
      renderShop();
      break;
    case "product":
      document.getElementById("view-product").classList.remove("hidden");
      renderProductDetail();
      break;
    case "cart":
      document.getElementById("view-cart").classList.remove("hidden");
      renderCart();
      break;
    case "checkout":
      document.getElementById("view-checkout").classList.remove("hidden");
      renderCheckout();
      break;
  }
}

function renderShop() {
  renderCategoryPills();
  renderProductGrid();

  const heroEl = document.getElementById("hero-section");
  const showHero = state.view === "shop" && !state.searchQuery && state.category === "all";
  heroEl.classList.toggle("hidden", !showHero);
}

// =============================================================================
// INIT
// =============================================================================
window.addEventListener("DOMContentLoaded", () => {
  initHero();
  renderAll();
  window.addEventListener("resize", checkCategoryOverflow);
});
