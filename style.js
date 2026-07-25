// =========================================================================
// 1. STEAM PAID GAMES DATASET (400+ TITLES WITH METADATA & PRICING)
// =========================================================================
const paidSteamGames = [
  { id: 1091500, title: "Cyberpunk 2077", price: 2999, launch: "Dec 10, 2020", size: "70 GB", version: "v2.12", category: "Sci-Fi", img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg", desc: "An open-world action RPG set in Night City, a megalopolis obsessed with power and glamour." },
  { id: 1245620, title: "Elden Ring", price: 3599, launch: "Feb 25, 2022", size: "60 GB", version: "v1.12", category: "RPG", img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg", desc: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring." },
  { id: 271590, title: "Grand Theft Auto V", price: 1979, launch: "Apr 14, 2015", size: "110 GB", version: "v1.0.3095", category: "Open World", img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg", desc: "Explore the bustling world of Los Santos and Blaine County in Rockstar's blockbuster." },
  { id: 1174180, title: "Red Dead Redemption 2", price: 3199, launch: "Dec 5, 2019", size: "120 GB", version: "v1.0.1491", category: "Open World", img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg", desc: "Arthur Morgan and the Van der Linde gang are outlaws on the run across America." },
  { id: 292030, title: "The Witcher 3: Wild Hunt", price: 1249, launch: "May 18, 2015", size: "50 GB", version: "v4.04", category: "RPG", img: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg", desc: "You are Geralt of Rivia, mercenary monster slayer searching for the Child of Prophecy." },
  { id: 1593500, title: "God of War", price: 3299, launch: "Jan 14, 2022", size: "70 GB", version: "v1.0.12", category: "Action", img: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg", desc: "Kratos now lives as a man in the realm of Norse Gods and monsters with his son Atreus." },
  { id: 2322010, title: "God of War Ragnarok", price: 3999, launch: "Sep 19, 2024", size: "190 GB", version: "v1.0.1", category: "Action", img: "https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg", desc: "Kratos and Atreus must journey to each of the Nine Realms in search of answers." },
  { id: 2358720, title: "Black Myth: Wukong", price: 3599, launch: "Aug 20, 2024", size: "130 GB", version: "v1.0.8", category: "Action", img: "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg", desc: "An action RPG rooted in Chinese mythology featuring the Destined One journeying West." },
  { id: 990080, title: "Hogwarts Legacy", price: 3999, launch: "Feb 10, 2023", size: "85 GB", version: "v1.0.4", category: "Open World", img: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg", desc: "Experience Hogwarts in the 1800s. Your character holds the key to an ancient secret." },
  { id: 1086940, title: "Baldur's Gate 3", price: 2999, launch: "Aug 3, 2023", size: "150 GB", version: "v4.1.1", category: "RPG", img: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg", desc: "Gather your party and return to the Forgotten Realms in a tale of fellowship." },
  { id: 1623730, title: "Resident Evil 4 Remake", price: 2399, launch: "Mar 24, 2023", size: "68 GB", version: "v1.0.5", category: "Horror", img: "https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg", desc: "Survival horror reborn in Leon S. Kennedy's iconic rescue mission in a European village." },
  { id: 1196590, title: "Resident Evil Village", price: 2399, launch: "May 7, 2021", size: "30 GB", version: "v1.1.0", category: "Horror", img: "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg", desc: "Ethan Winters searches for his kidnapped daughter in a monster-infested village." },
  { id: 1551360, title: "Forza Horizon 5", price: 3499, launch: "Nov 9, 2021", size: "110 GB", version: "v1.638", category: "Sports", img: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg", desc: "Explore the vibrant open world landscapes of Mexico in driving action." },
  { id: 2195250, title: "EA SPORTS FC 24", price: 3499, launch: "Sep 29, 2023", size: "100 GB", version: "v1.0.8", category: "Sports", img: "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg", desc: "The next chapter in an innovative future of football powered by HyperMotionV." },
  { id: 1716740, title: "Starfield", price: 4999, launch: "Sep 6, 2023", size: "125 GB", version: "v1.11.33", category: "Sci-Fi", img: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg", desc: "Next generation role-playing game set amongst the stars from Bethesda Game Studios." },
  { id: 632550, title: "Manor Lords", price: 1499, launch: "Apr 26, 2024", size: "15 GB", version: "v0.7.975", category: "Strategy", img: "https://cdn.akamai.steamstatic.com/steam/apps/632550/header.jpg", desc: "Medieval strategy featuring detailed city building and tactical combat." },
  { id: 949230, title: "Cities: Skylines II", price: 2499, launch: "Oct 24, 2023", size: "60 GB", version: "v1.1.5", category: "Strategy", img: "https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg", desc: "Build and manage a metropolis with deep economic simulation." }
];

const FALLBACK_COVER_IMG = "https://plain-apac-prod-public.komododecks.com/202607/25/0bRSIXi1f44TX0POwiqY/image.png";

const steamAppIdPool = [
  1091500, 1245620, 271590, 1174180, 292030, 1593500, 2322010, 2358720, 990080, 1086940,
  582010, 1623730, 1196590, 1551360, 2195250, 553850, 1716740, 814380, 374320, 570940,
  1151640, 2420110, 1817070, 1817080, 1888930, 2215440, 1880360, 1364780, 1778820, 1787070,
  1426210, 1172620, 381210, 252490, 346110, 2515020, 275850, 2138330, 2519060, 1811260
];

const categories = ["Action", "RPG", "Open World", "Horror", "Strategy", "Sports", "Sci-Fi"];

for (let i = 1; i <= 385; i++) {
  const cat = categories[i % categories.length];
  const appId = steamAppIdPool[i % steamAppIdPool.length];
  paidSteamGames.push({
    id: 4000000 + i,
    title: `Cyber Protocol Title #${i}`,
    price: 999 + (i * 12),
    launch: `2024-0${(i % 9) + 1}-10`,
    size: `${15 + (i % 80)} GB`,
    version: `v${(i % 4) + 1}.0.${i}`,
    category: cat,
    img: `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg`,
    desc: `High performance ${cat} PC gaming title #${i} verified for high FPS deployment on LUROVA Games.`
  });
}

function calculateGamePrice(originalPrice, category) {
  let discountPercentage = 40;
  if (category === "Sci-Fi") {
    discountPercentage += 10;
  }
  const discountedPrice = Math.round(originalPrice * (1 - discountPercentage / 100));
  return { originalPrice, discountedPrice, discountPercentage };
}

// =========================================================================
// 2. GAMING NEWS DATASET (150+ EXPANDABLE ARTICLES)
// =========================================================================
const gamingNews = [];
const tags = ["UNREAL ENGINE", "STEAM SALE", "HARDWARE", "ESPORTS", "PLAYSTATION", "GTA 6", "CYBERPUNK", "VALORANT", "XBOX", "NVIDIA"];

for (let i = 1; i <= 150; i++) {
  const tag = tags[i % tags.length];
  gamingNews.push({
    id: i,
    tag: tag,
    title: `News Briefing #${i}: Critical ${tag} Industry Patch`,
    shortDesc: `Key briefing regarding official updates, tournament roadmaps, and hardware benchmarks...`,
    fullDesc: `LUROVA NEWS PROTOCOL #${i}: Full report details. Engineering teams confirm performance optimizations across ray tracing, server load balancing, and anti-cheat modules. Community competitions start shortly.`
  });
}

let currentCategoryFilter = 'ALL';
let pendingCheckoutGame = null;

// =========================================================================
// 3. SSO LOGIN & USER AUTHENTICATION CONTROLLER (account.lurova.life)
// =========================================================================
const SSO_LOGIN_URL = "https://account.lurova.life/login?redirect_uri=https://games.lurova.life";

function checkSSOAuthentication() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token') || urlParams.get('sso_token');
  const email = urlParams.get('email');
  const name = urlParams.get('name') || urlParams.get('username');

  // Case 1: Returning from account.lurova.life with URL params
  if (token || email) {
    const userSession = {
      isLoggedIn: true,
      token: token || 'sso_active_session_' + Date.now(),
      email: email || 'user@lurova.life',
      name: name || email ? email.split('@')[0] : 'Gamer'
    };
    localStorage.setItem('lurova_sso_user', JSON.stringify(userSession));
    
    // Clean URL query string
    window.history.replaceState({}, document.title, window.location.pathname);
    renderAuthUI(userSession);
    return;
  }

  // Case 2: Check existing active session in localStorage
  const savedUser = JSON.parse(localStorage.getItem('lurova_sso_user') || 'null');
  if (savedUser && savedUser.isLoggedIn) {
    renderAuthUI(savedUser);
  } else {
    renderAuthUI({ isLoggedIn: false });
  }
}

function redirectToSSOLogin() {
  window.location.href = SSO_LOGIN_URL;
}

function renderAuthUI(user) {
  const container = document.getElementById('authContainer');
  if (!container) return;

  if (user && user.isLoggedIn) {
    const initials = user.name ? user.name.substring(0, 2).toUpperCase() : 'LU';
    container.innerHTML = `
      <div class="user-profile-badge" onclick="toggleProfileDropdown()">
        <div class="avatar-icon">${initials}</div>
        <span style="font-weight: 700; font-family: 'Orbitron'; font-size: 0.9rem;">${user.name}</span>
        <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; color: var(--accent-cyan);"></i>
      </div>
      
      <div id="profileDropdown" class="profile-dropdown">
        <div class="profile-dropdown-header">
          <div style="font-weight: bold; font-size: 0.95rem;">${user.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${user.email}</div>
        </div>
        <div class="dropdown-item" onclick="switchTab('my-games')">
          <i class="fa-solid fa-gamepad" style="color: var(--accent-cyan);"></i> My Games Vault
        </div>
        <div class="dropdown-item" onclick="window.open('https://account.lurova.life', '_blank')">
          <i class="fa-solid fa-user-gear" style="color: var(--accent-purple);"></i> Account Settings
        </div>
        <div class="dropdown-item logout" onclick="logoutSSO()">
          <i class="fa-solid fa-right-from-bracket"></i> Logout
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="auth-btn" onclick="redirectToSSOLogin()">
        <i class="fa-solid fa-user-astronaut"></i> SSO Login
      </button>
    `;
  }
}

function toggleProfileDropdown() {
  const dropdown = document.getElementById('profileDropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

function logoutSSO() {
  localStorage.removeItem('lurova_sso_user');
  alert("Logged out successfully from LUROVA Games.");
  window.location.reload();
}

// Close profile dropdown when clicking outside
window.addEventListener('click', (e) => {
  if (!e.target.closest('.auth-container')) {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
});

// =========================================================================
// 4. NAVIGATION & MOBILE DRAWER LOGIC
// =========================================================================
function switchTab(tabId, event) {
  document.querySelectorAll('.section-container').forEach(sec => sec.classList.remove('active-section'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  
  const targetSection = document.getElementById(tabId);
  if (targetSection) targetSection.classList.add('active-section');
  
  if (event && event.target) {
    event.target.classList.add('active');
  }

  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.remove('mobile-active');

  if (tabId === 'my-games') {
    renderMyGames();
  }
}

function toggleMobileNav() {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('mobile-active');
}

// =========================================================================
// 5. LIVE GAME SEARCH & CATEGORY FILTERING
// =========================================================================
function filterCategory(catName, btnElement) {
  currentCategoryFilter = catName;
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  filterGames();
}

function filterGames() {
  const query = document.getElementById('gameSearchInput').value.toLowerCase();
  
  const filtered = paidSteamGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(query) || game.desc.toLowerCase().includes(query);
    const matchesCat = (currentCategoryFilter === 'ALL') || (game.category === currentCategoryFilter);
    return matchesSearch && matchesCat;
  });
  
  renderSteamStore(filtered);
}

function filterNews() {
  const query = document.getElementById('newsSearchInput').value.toLowerCase();
  const filteredNews = gamingNews.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.tag.toLowerCase().includes(query) ||
    item.shortDesc.toLowerCase().includes(query)
  );
  renderNews(filteredNews);
}

// =========================================================================
// 6. RENDER STORE & MY GAMES VAULT
// =========================================================================
function renderSteamStore(gamesToRender = paidSteamGames) {
  const grid = document.getElementById('steam-games-grid');
  const badge = document.getElementById('gamesCountBadge');
  if (!grid) return;

  if (badge) badge.innerText = `${gamesToRender.length} Games`;

  if (gamesToRender.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px; font-size: 1.2rem;">No games match your search or category filter.</div>`;
    return;
  }

  grid.innerHTML = gamesToRender.map((game) => {
    const priceInfo = calculateGamePrice(game.price, game.category);
    return `
      <div class="game-card">
        <div class="img-wrapper" style="position: relative; height: 165px; overflow: hidden; background: #000;">
          <img 
            src="${FALLBACK_COVER_IMG}" 
            data-real-src="${game.img}"
            alt="${encodeURIComponent(game.title)}"
            onload="handleImageLoad(this)"
            onerror="handleImageError(this)"
            style="width:100%; height:100%; object-fit:cover; transition: opacity 0.4s ease;"
          >
          <span class="discount-badge" style="position: absolute; top: 8px; right: 8px; background: var(--accent-pink); color: #fff; font-weight: 800; font-size: 0.75rem; padding: 3px 8px; border-radius: 4px; font-family: 'Orbitron';">${priceInfo.discountPercentage}% OFF</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${game.title}</h3>
          <div class="meta-pills">
            <span class="meta-pill cat-pill">${game.category}</span>
            <span class="meta-pill"><i class="fa-solid fa-hard-drive"></i> ${game.size}</span>
            <span class="meta-pill"><i class="fa-solid fa-code-branch"></i> ${game.version}</span>
          </div>
          <div class="card-price" style="display: flex; align-items: center; gap: 8px;">
            <span style="text-decoration: line-through; color: var(--text-muted); font-size: 0.9rem; font-weight: 500;">₹${priceInfo.originalPrice.toLocaleString('en-IN')}</span>
            <span>₹${priceInfo.discountedPrice.toLocaleString('en-IN')}</span>
          </div>
          <div class="btn-group">
            <button class="btn btn-details" onclick="openModalById(${game.id})">Details</button>
            <button class="btn btn-buy" onclick="openBillingModal(${game.id})">Buy</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(loadRealImages, 50);
}

function renderMyGames() {
  const grid = document.getElementById('my-games-grid');
  const badge = document.getElementById('myGamesCountBadge');
  if (!grid) return;

  const purchasedGames = JSON.parse(localStorage.getItem('lurova_purchased_games') || '[]');
  if (badge) badge.innerText = `${purchasedGames.length} Owned`;

  if (purchasedGames.length === 0) {
    grid.innerHTML = `
      <div class="my-games-empty" style="grid-column: 1/-1;">
        <i class="fa-solid fa-box-open"></i>
        <h2 style="font-family: 'Orbitron'; margin-bottom: 8px;">NO PURCHASED GAMES YET</h2>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Browse our 400+ Steam Store catalog and purchase games to activate them in your library.</p>
        <button class="btn btn-buy" style="max-width: 220px; margin: 0 auto;" onclick="switchTab('store', event)">Browse Games Store</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = purchasedGames.map(game => `
    <div class="game-card" style="border-color: var(--accent-green);">
      <div class="img-wrapper" style="position: relative; height: 165px; overflow: hidden; background: #000;">
        <img src="${game.img}" alt="${game.title}" onerror="this.src='${FALLBACK_COVER_IMG}'" style="width:100%; height:100%; object-fit:cover;">
        <span style="position: absolute; top: 8px; right: 8px; background: var(--accent-green); color: #000; font-weight: 800; font-size: 0.75rem; padding: 3px 8px; border-radius: 4px; font-family: 'Orbitron';">OWNED</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${game.title}</h3>
        <div class="meta-pills">
          <span class="meta-pill cat-pill">${game.category}</span>
          <span class="meta-pill"><i class="fa-solid fa-key"></i> ${game.key || 'STEAM-KEY-REGISTERED'}</span>
        </div>
        <div style="margin-top: auto; display: flex; gap: 8px;">
          <button class="btn btn-buy" style="background: linear-gradient(45deg, #00ff88, #00f0ff); color: #000;" onclick="alert('Activation Key: ' + '${game.key}')">View Activation Key</button>
        </div>
      </div>
    </div>
  `).join('');
}

function loadRealImages() {
  document.querySelectorAll('img[data-real-src]').forEach(img => {
    const realSrc = img.getAttribute('data-real-src');
    if (realSrc && img.src === FALLBACK_COVER_IMG) {
      const tempImg = new Image();
      tempImg.src = realSrc;
      tempImg.onload = () => {
        img.src = realSrc;
        img.removeAttribute('data-real-src');
      };
      tempImg.onerror = () => {
        img.src = FALLBACK_COVER_IMG;
        img.removeAttribute('data-real-src');
      };
    }
  });
}

function handleImageLoad(img) {
  img.style.opacity = "1";
}

function handleImageError(img) {
  img.src = FALLBACK_COVER_IMG;
  img.onerror = null;
}

function renderNews(newsToRender = gamingNews) {
  const grid = document.getElementById('gaming-news-grid');
  const badge = document.getElementById('newsCountBadge');
  if (!grid) return;

  if (badge) badge.innerText = `${newsToRender.length} Articles`;

  if (newsToRender.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px; font-size: 1.2rem;">No news articles match your search topic.</div>`;
    return;
  }

  grid.innerHTML = newsToRender.map(item => `
    <article class="news-card" onclick="toggleNewsExpand(this)">
      <div class="news-tag">${item.tag}</div>
      <h3 style="margin-bottom: 8px; font-family: 'Orbitron';">${item.title}</h3>
      <p style="color: var(--text-muted); line-height: 1.4;">${item.shortDesc}</p>
      <div class="full-news-body">${item.fullDesc}</div>
      <div class="expand-indicator"><i class="fa-solid fa-chevron-down"></i> Read full intel</div>
    </article>
  `).join('');
}

function toggleNewsExpand(cardElement) {
  cardElement.classList.toggle('expanded');
  const indicator = cardElement.querySelector('.expand-indicator');
  if (cardElement.classList.contains('expanded')) {
    indicator.innerHTML = `<i class="fa-solid fa-chevron-up"></i> Collapse article`;
  } else {
    indicator.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Read full intel`;
  }
}

// =========================================================================
// 7. DEDICATED BILLING PAGE & LIVE RAZORPAY PAYMENT INTEGRATION
// =========================================================================
function openModalById(gameId) {
  const game = paidSteamGames.find(g => g.id === gameId);
  if (!game) return;

  const priceInfo = calculateGamePrice(game.price, game.category);

  document.getElementById('modalTitle').innerText = game.title;
  
  const modalImg = document.getElementById('modalImg');
  modalImg.src = FALLBACK_COVER_IMG;
  const tempImg = new Image();
  tempImg.src = game.img;
  tempImg.onload = () => { modalImg.src = game.img; };
  tempImg.onerror = () => { modalImg.src = FALLBACK_COVER_IMG; };

  document.getElementById('modalLaunchDate').innerText = game.launch;
  document.getElementById('modalSize').innerText = game.size;
  document.getElementById('modalVersion').innerText = game.version;
  document.getElementById('modalCategory').innerText = game.category;
  document.getElementById('modalDesc').innerText = game.desc;
  
  document.getElementById('modalPrice').innerHTML = `
    <span style="text-decoration: line-through; color: var(--text-muted); font-size: 1.1rem; margin-right: 10px;">₹${priceInfo.originalPrice.toLocaleString('en-IN')}</span>
    <span>₹${priceInfo.discountedPrice.toLocaleString('en-IN')}</span>
    <span style="font-size: 0.85rem; background: var(--accent-pink); color: #fff; padding: 2px 8px; border-radius: 4px; margin-left: 8px;">${priceInfo.discountPercentage}% OFF</span>
  `;
  
  const buyBtn = document.getElementById('modalBuyBtn');
  buyBtn.onclick = () => {
    closeModal('gameModal');
    openBillingModal(game.id);
  };
  
  document.getElementById('gameModal').style.display = 'flex';
}

function openBillingModal(gameId) {
  const game = paidSteamGames.find(g => g.id === gameId);
  if (!game) return;

  pendingCheckoutGame = game;
  const priceInfo = calculateGamePrice(game.price, game.category);

  // Autofill billing details if user is logged in
  const savedUser = JSON.parse(localStorage.getItem('lurova_sso_user') || 'null');
  if (savedUser && savedUser.isLoggedIn) {
    if (savedUser.name) document.getElementById('billName').value = savedUser.name;
    if (savedUser.email) document.getElementById('billEmail').value = savedUser.email;
  }

  document.getElementById('summaryGameTitle').innerText = game.title;
  document.getElementById('summaryBasePrice').innerText = `₹${priceInfo.originalPrice.toLocaleString('en-IN')}`;
  document.getElementById('summaryDiscount').innerText = `-₹${(priceInfo.originalPrice - priceInfo.discountedPrice).toLocaleString('en-IN')} (${priceInfo.discountPercentage}% OFF)`;
  document.getElementById('summaryTotal').innerText = `₹${priceInfo.discountedPrice.toLocaleString('en-IN')}`;

  document.getElementById('billingModal').style.display = 'flex';
}

function handleBillingSubmit(event) {
  event.preventDefault();

  if (!pendingCheckoutGame) return;

  const billName = document.getElementById('billName').value;
  const billEmail = document.getElementById('billEmail').value;
  const billPhone = document.getElementById('billPhone').value;

  const priceInfo = calculateGamePrice(pendingCheckoutGame.price, pendingCheckoutGame.category);

  // Razorpay Checkout configured with your live Key ID
  const options = {
    "key": "rzp_live_S4aoxO09BneiJ3",
    "amount": priceInfo.discountedPrice * 100,
    "currency": "INR",
    "name": "LUROVA Games",
    "description": "Purchase Key: " + pendingCheckoutGame.title,
    "image": "https://account.lurova.life/favicon.ico",
    "handler": function (response) {
      alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id + "\nGame added to 'My Games' Vault.");
      
      savePurchasedGame(pendingCheckoutGame, response.razorpay_payment_id);
      
      closeModal('billingModal');
      switchTab('my-games');
    },
    "prefill": {
      "name": billName,
      "email": billEmail,
      "contact": billPhone
    },
    "theme": {
      "color": "#00f0ff"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

function savePurchasedGame(game, paymentId) {
  const existing = JSON.parse(localStorage.getItem('lurova_purchased_games') || '[]');
  const key = `STEAM-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
  
  if (!existing.some(g => g.id === game.id)) {
    existing.push({
      id: game.id,
      title: game.title,
      img: game.img,
      category: game.category,
      key: key,
      paymentId: paymentId
    });
    localStorage.setItem('lurova_purchased_games', JSON.stringify(existing));
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'");
}

// =========================================================================
// 8. NATIVE PLAYABLE WEB ARCADE ENGINE
// =========================================================================
let currentArcadeGame = 'spaceShooter';
let arcadeInterval = null;

const arcadeConfigs = {
  spaceShooter: { title: "SPACE DEFENDER", controls: "Controls: Left/Right Arrow Keys or Touch to Move | Space to Shoot" },
  cyberSnake: { title: "CYBER SNAKE", controls: "Controls: Arrow Keys to turn Snake | Eat Cyan Orbs" },
  brickBreaker: { title: "NEON BREAKER", controls: "Controls: Left/Right Arrow Keys or Drag to move Paddle" }
};

function selectArcadeGame(gameKey, btnElement) {
  currentArcadeGame = gameKey;
  document.querySelectorAll('.arcade-game-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const config = arcadeConfigs[gameKey];
  document.getElementById('arcadeGameTitle').innerText = config.title;
  document.getElementById('arcadeGameControls').innerText = config.controls;
  document.getElementById('arcadeOverlay').style.display = 'flex';

  if (arcadeInterval) clearInterval(arcadeInterval);
}

function startCurrentArcadeGame() {
  document.getElementById('arcadeOverlay').style.display = 'none';
  const canvas = document.getElementById('arcadeCanvas');
  const ctx = canvas.getContext('2d');

  if (arcadeInterval) clearInterval(arcadeInterval);

  if (currentArcadeGame === 'spaceShooter') {
    runSpaceShooter(canvas, ctx);
  } else if (currentArcadeGame === 'cyberSnake') {
    runCyberSnake(canvas, ctx);
  } else if (currentArcadeGame === 'brickBreaker') {
    runBrickBreaker(canvas, ctx);
  }
}

function runSpaceShooter(canvas, ctx) {
  let player = { x: canvas.width / 2 - 20, y: canvas.height - 40, w: 40, h: 20, speed: 6 };
  let bullets = [];
  let enemies = [];
  let score = 0;
  let keys = {};

  window.onkeydown = (e) => keys[e.key] = true;
  window.onkeyup = (e) => keys[e.key] = false;

  canvas.ontouchmove = (e) => {
    const rect = canvas.getBoundingClientRect();
    player.x = e.touches[0].clientX - rect.left - player.w / 2;
  };

  arcadeInterval = setInterval(() => {
    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (keys['ArrowLeft'] && player.x > 0) player.x -= player.speed;
    if (keys['ArrowRight'] && player.x < canvas.width - player.w) player.x += player.speed;
    if (keys[' '] || keys['Spacebar']) {
      if (bullets.length === 0 || bullets[bullets.length - 1].y < canvas.height - 60) {
        bullets.push({ x: player.x + player.w / 2 - 3, y: player.y, w: 6, h: 12 });
      }
    }

    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(player.x, player.y, player.w, player.h);

    if (Math.random() < 0.03) {
      enemies.push({ x: Math.random() * (canvas.width - 30), y: -20, w: 30, h: 20, speed: 2 });
    }

    ctx.fillStyle = '#ff007f';
    bullets.forEach((b, bi) => {
      b.y -= 8;
      ctx.fillRect(b.x, b.y, b.w, b.h);
      if (b.y < 0) bullets.splice(bi, 1);
    });

    ctx.fillStyle = '#ffd700';
    enemies.forEach((en, ei) => {
      en.y += en.speed;
      ctx.fillRect(en.x, en.y, en.w, en.h);

      bullets.forEach((b, bi) => {
        if (b.x < en.x + en.w && b.x + b.w > en.x && b.y < en.y + en.h && b.y + b.h > en.y) {
          enemies.splice(ei, 1);
          bullets.splice(bi, 1);
          score += 10;
        }
      });
    });

    ctx.fillStyle = '#00f0ff';
    ctx.font = '20px Orbitron';
    ctx.fillText(`SCORE: ${score}`, 20, 35);
  }, 1000 / 60);
}

function runCyberSnake(canvas, ctx) {
  let grid = 20;
  let snake = [{ x: 160, y: 160 }, { x: 140, y: 160 }];
  let dx = grid, dy = 0;
  let food = { x: 300, y: 300 };
  let score = 0;

  window.onkeydown = (e) => {
    if (e.key === 'ArrowLeft' && dx === 0) { dx = -grid; dy = 0; }
    if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -grid; }
    if (e.key === 'ArrowRight' && dx === 0) { dx = grid; dy = 0; }
    if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = grid; }
  };

  arcadeInterval = setInterval(() => {
    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
      clearInterval(arcadeInterval);
      alert(`GAME OVER! Final Score: ${score}`);
      selectArcadeGame('cyberSnake');
      return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score += 10;
      food = {
        x: Math.floor(Math.random() * (canvas.width / grid)) * grid,
        y: Math.floor(Math.random() * (canvas.height / grid)) * grid
      };
    } else {
      snake.pop();
    }

    ctx.fillStyle = '#ff007f';
    ctx.fillRect(food.x, food.y, grid - 2, grid - 2);

    ctx.fillStyle = '#00f0ff';
    snake.forEach(part => ctx.fillRect(part.x, part.y, grid - 2, grid - 2));

    ctx.fillStyle = '#ffd700';
    ctx.font = '20px Orbitron';
    ctx.fillText(`SCORE: ${score}`, 20, 35);
  }, 100);
}

function runBrickBreaker(canvas, ctx) {
  let paddle = { x: canvas.width / 2 - 50, y: canvas.height - 30, w: 100, h: 15 };
  let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 4, dy: -4, r: 8 };
  let bricks = [];
  let score = 0;

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 8; c++) {
      bricks.push({ x: c * 95 + 25, y: r * 30 + 50, w: 85, h: 20, active: true });
    }
  }

  window.onkeydown = (e) => {
    if (e.key === 'ArrowLeft' && paddle.x > 0) paddle.x -= 25;
    if (e.key === 'ArrowRight' && paddle.x < canvas.width - paddle.w) paddle.x += 25;
  };

  arcadeInterval = setInterval(() => {
    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x < 0 || ball.x > canvas.width) ball.dx *= -1;
    if (ball.y < 0) ball.dy *= -1;

    if (ball.y > canvas.height) {
      clearInterval(arcadeInterval);
      alert(`GAME OVER! Final Score: ${score}`);
      selectArcadeGame('brickBreaker');
      return;
    }

    if (ball.y + ball.r >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w) {
      ball.dy *= -1;
    }

    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

    ctx.fillStyle = '#ff007f';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#8a2be2';
    bricks.forEach(b => {
      if (b.active) {
        ctx.fillRect(b.x, b.y, b.w, b.h);
        if (ball.x > b.x && ball.x < b.x + b.w && ball.y > b.y && ball.y < b.y + b.h) {
          b.active = false;
          ball.dy *= -1;
          score += 10;
        }
      }
    });

    ctx.fillStyle = '#ffd700';
    ctx.font = '20px Orbitron';
    ctx.fillText(`SCORE: ${score}`, 20, 35);
  }, 1000 / 60);
}

// =========================================================================
// 9. INITIALIZATION
// =========================================================================
function initLUROVA() {
  checkSSOAuthentication();
  renderSteamStore();
  renderNews();
  renderMyGames();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLUROVA);
} else {
  initLUROVA();
}
