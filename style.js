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

// Fallback Loading Cover Image URL
const FALLBACK_COVER_IMG = "https://plain-apac-prod-public.komododecks.com/202607/25/0bRSIXi1f44TX0POwiqY/image.png";

// Known Steam App IDs pool to ensure real game covers for generated titles
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

// =========================================================================
// 2. DISCOUNT CALCULATION HELPER
// =========================================================================
function calculateGamePrice(originalPrice, category) {
  let discountPercentage = 40; // Base flat 40% off
  if (category === "Sci-Fi") {
    discountPercentage += 10; // Additional 10% off for Sci-Fi (50% total)
  }
  const discountedPrice = Math.round(originalPrice * (1 - discountPercentage / 100));
  return {
    originalPrice,
    discountedPrice,
    discountPercentage
  };
}

// =========================================================================
// 3. CREATOR VIDEOS DATASET (150+ INLINE PLAYABLE VIDEOS)
// =========================================================================
const indianCreatorVideos = [];
const creatorList = ["Techno Gamerz", "CarryIsLive", "Total Gaming", "Mortal", "Dynamo Gaming", "Scout", "Jonathan Gaming", "Lokesh Gamer", "Mythpat", "GamerFleet"];

for (let i = 1; i <= 150; i++) {
  const creator = creatorList[i % creatorList.length];
  indianCreatorVideos.push({
    creator: creator,
    title: `${creator} - Episode #${i} Stream`,
    url: `https://www.youtube.com/embed/videoseries?list=PL479C9338959DF0A3`
  });
}

// =========================================================================
// 4. GAMING NEWS DATASET (150+ EXPANDABLE ARTICLES)
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

// =========================================================================
// 5. NAVIGATION & MOBILE DRAWER LOGIC
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
}

function toggleMobileNav() {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('mobile-active');
}

// =========================================================================
// 6. LIVE GAME SEARCH & CATEGORY FILTERING
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

// =========================================================================
// 7. DEDICATED NEWS SEARCH FILTERING
// =========================================================================
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
// 8. RENDER COMPONENT FUNCTIONS WITH IMAGE LOADING COVER & DISCOUNTS
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
          <span class="discount-badge" style="position: absolute; top: 8px; right: 8px; background: var(--accent-pink); color: #fff; font-weight: 800; font-size: 0.75rem; padding: 3px 8px; border-radius: 4px; font-family: 'Orbitron'; shadow: 0 0 10px rgba(255,0,127,0.5);">${priceInfo.discountPercentage}% OFF</span>
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
            <button class="btn btn-buy" onclick="triggerRazorpay(${priceInfo.discountedPrice}, '${escapeQuotes(game.title)}')">Buy</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Trigger loading real images after initial placeholder render
  setTimeout(loadRealImages, 50);
}

// Progressive image loading handler
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
  img.onerror = null; // Prevent infinite fallback loops
}

function renderVideos() {
  const grid = document.getElementById('youtube-videos-grid');
  const badge = document.getElementById('videoCountBadge');
  if (!grid) return;

  if (badge) badge.innerText = `${indianCreatorVideos.length} Videos`;

  grid.innerHTML = indianCreatorVideos.map(vid => `
    <div class="video-card">
      <div class="video-wrapper">
        <iframe src="${vid.url}" allowfullscreen title="${vid.title}"></iframe>
      </div>
      <div class="video-info">
        <i class="fa-brands fa-youtube" style="color: #ff0000;"></i>
        <span>${vid.title}</span>
      </div>
    </div>
  `).join('');
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
// 9. MODAL & RAZORPAY CONTROLLER WITH DISCOUNT SUPPORT
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
  buyBtn.onclick = () => triggerRazorpay(priceInfo.discountedPrice, game.title);
  
  document.getElementById('gameModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('gameModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('gameModal');
  if (event.target === modal) {
    closeModal();
  }
};

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'");
}

function triggerRazorpay(amountINR, itemTitle) {
  const options = {
    "key": "YOUR_RAZORPAY_KEY_ID",
    "amount": amountINR * 100,
    "currency": "INR",
    "name": "LUROVA Games",
    "description": "Purchase: " + itemTitle,
    "image": "https://account.lurova.life/favicon.ico",
    "handler": function (response) {
      alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
      closeModal();
    },
    "prefill": {
      "name": "Gamer",
      "email": "user@lurova.life"
    },
    "theme": {
      "color": "#00f0ff"
    }
  };
  
  const rzp = new Razorpay(options);
  rzp.open();
}

// =========================================================================
// 10. INITIALIZATION
// =========================================================================
function initLUROVA() {
  renderSteamStore();
  renderVideos();
  renderNews();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLUROVA);
} else {
  initLUROVA();
}