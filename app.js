/* ==========================================
   OFFPATH Interactive JavaScript Client
   ========================================== */

// --- MOCK DATABASE DATASETS ---

const DESTINATIONS = [
    {
        id: "dest-diyaluma",
        title: "Diyaluma Falls Upper Pools Path",
        description: "A breathtaking trail leading to the upper pools of Sri Lanka's second-highest waterfall. Safe cliff-jumping spots and natural infinity pools await at the summit.",
        district: "Badulla (Near Ella)",
        region: "Ella",
        category: "Waterfalls",
        difficultyLevel: "Moderate",
        safetyRating: 4.8,
        cover_image_url: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-sanduni"
    },
    {
        id: "dest-knuckles",
        title: "Knuckles Range High Forest Trail",
        description: "An adventure through misty peaks, endemic cloud forests, and remote rice terraces. Home to unique wildlife and stunning viewpoints untouched by general tourism.",
        district: "Matale / Kandy",
        region: "Knuckles",
        category: "Hiking Trails",
        difficultyLevel: "Challenging",
        safetyRating: 4.9,
        cover_image_url: "https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-kavindu"
    },
    {
        id: "dest-adisham",
        title: "Adisham Abbey Pine Forest Walk",
        description: "A peaceful forest trail winding through pine trees and strawberry fields near the historic monastery. Excellent bird-watching and scenic views of the southern plains.",
        district: "Badulla (Haputale)",
        region: "Haputale",
        category: "Tea Estates",
        difficultyLevel: "Easy",
        safetyRating: 4.7,
        cover_image_url: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-sanduni"
    },
    {
        id: "dest-belihuloya",
        title: "Belihuloya River Valley Trail",
        description: "A cultural walk along the pristine Belihuloya river, crossing suspension bridges and passing through local farming communities where you can stop for traditional herbal drinks.",
        district: "Ratnapura",
        region: "Belihuloya",
        category: "Villages",
        difficultyLevel: "Easy",
        safetyRating: 4.9,
        cover_image_url: "https://images.unsplash.com/photo-1608958415714-386620ca109c?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-priyantha"
    },
    {
        id: "dest-hanthana",
        title: "Hanthana Range Ridge Hike",
        description: "A popular yet hidden ridge walk offering panoramic vistas of Kandy town and surrounding tea valleys. Winds through the national university watershed lands.",
        district: "Kandy",
        region: "Kandy",
        category: "Hiking Trails",
        difficultyLevel: "Moderate",
        safetyRating: 4.8,
        cover_image_url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-kavindu"
    },
    {
        id: "dest-lipton",
        title: "Dambatenne Secret Tea Path",
        description: "The historical path taken by Sir Thomas Lipton through high-altitude tea plantations. Leads to a spectacular cliff viewpoint over three southern provinces.",
        district: "Badulla (Haputale)",
        region: "Haputale",
        category: "Tea Estates",
        difficultyLevel: "Moderate",
        safetyRating: 4.6,
        cover_image_url: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-sanduni"
    },
    {
        id: "dest-alupolla",
        title: "Alupolla Falls Jungle Path",
        description: "Trek through dense tropical rain forest to find a hidden waterfall basin. Moderate humidity and slippery trails require reliable footwear and local weather coordination.",
        district: "Ratnapura (Near Belihuloya)",
        region: "Belihuloya",
        category: "Waterfalls",
        difficultyLevel: "Challenging",
        safetyRating: 4.5,
        cover_image_url: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-priyantha"
    },
    {
        id: "dest-ellarock",
        title: "Ella Rock Ravana Cave Bypass",
        description: "A secret secondary trail to Ella Rock bypassing the crowded train tracks, leading through local farmlands, rubber patches, and the historic Ravana Cave entrance.",
        district: "Badulla (Ella)",
        region: "Ella",
        category: "Viewpoints",
        difficultyLevel: "Challenging",
        safetyRating: 4.7,
        cover_image_url: "https://images.unsplash.com/photo-1588598130764-3be86d395ccd?q=80&w=600",
        verificationStatus: true,
        createdBy: "guardian-sanduni"
    }
];

const GUARDIANS = {
    "guardian-kavindu": {
        id: "guardian-kavindu",
        fullName: "Kavindu Perera",
        university_name: "University of Peradeniya",
        verification_status: true,
        rating: 4.9,
        total_reviews: 32,
        bio: "Undergraduate in Environmental Sciences. I guide travelers around Kandy, Hanthana, and the Knuckles Cloud Forest. Specialized in wilderness safety and local ecological history.",
        languages: ["English", "Sinhala", "French"],
        profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
        regionsCovered: ["Kandy", "Knuckles"]
    },
    "guardian-priyantha": {
        id: "guardian-priyantha",
        fullName: "Priyantha Silva",
        university_name: "Sabaragamuwa University",
        verification_status: true,
        rating: 4.8,
        total_reviews: 18,
        bio: "Tourism Management major. Born and raised in Belihuloya. Love showing travelers rural agricultural paths, hidden river pools, and coordinating farm homestay meals.",
        languages: ["English", "Sinhala"],
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        regionsCovered: ["Belihuloya"]
    },
    "guardian-sanduni": {
        id: "guardian-sanduni",
        fullName: "Sanduni Jayasinghe",
        university_name: "University of Ruhuna",
        verification_status: true,
        rating: 4.9,
        total_reviews: 27,
        bio: "Languages & Linguistics major. Based out of Ella and Haputale. Happy to assist with tea plantation hiking, historical reviews of Adisham Abbey, and local train bypass paths.",
        languages: ["English", "Sinhala", "Tamil", "Chinese"],
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
        regionsCovered: ["Ella", "Haputale"]
    }
};

const REVIEWS = [
    {
        stars: 5,
        text: "OFFPATH completely transformed my Sri Lankan trip. Kavindu guided us through the Knuckles forests. Having an academic student who knew the trails, fauna, and local villagers made us feel incredibly safe and welcome.",
        author: "Emma Watson",
        country: "United Kingdom",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
        destinationName: "Knuckles Range"
    },
    {
        stars: 5,
        text: "Upper Diyaluma pools are stunning but the climb can be tricky without directions. We contacted Sanduni via the app; she gave us precise coordinates and hooked us up with a local host for organic rice & curry. Absolute magic!",
        author: "Marc Dubois",
        country: "France",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
        destinationName: "Diyaluma Upper Pools"
    },
    {
        stars: 5,
        text: "The sustainability model is real. When I tipped Priyantha in Belihuloya, I saw how it directly helps fund his university books. The villagers cooked us a traditional millet roti breakfast. Unforgettable local hospitality.",
        author: "Sarah Jenkins",
        country: "Australia",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100",
        destinationName: "Belihuloya River Valley"
    }
];

// Context answers database for our Guardian Chat Simulator
const CHAT_RESPONSES = {
    general: "That sounds like a great plan! Sri Lanka is full of surprises. Make sure to double check trail conditions. Anything else about safety or local hosts I can assist you with?",
    knuckles: "Knuckles Forest Range is stunning but weather changes rapidly. I recommend entering from the Deanston side. Always carry a rain cover, leech socks, and download our offline map data. I can coordinate with a local farmer family in Meemure to prepare lunch for you if you plan to visit!",
    ella: "The upper pools of Diyaluma and Ella Rock are beautiful. If you visit Diyaluma pools, please avoid swimming close to the edge. If you need a local host for traditional clay-pot lunch nearby, I can connect you with Amma's kitchen!",
    belihuloya: "Belihuloya is famous for its clean water streams. The river trail is easy, but do not swim in deep rock pools if it has rained upstream in the Horton Plains. You can stop at the local village cooperative for herbal tea!",
    safety: "Your safety is our top priority. All guardians carry GPS logs and are connected to regional guides. Ensure you check for rain patterns, carry a small first aid kit, and always log your path with a Guardian node.",
    gear: "For jungle treks in Sri Lanka, carry: good hiking shoes with grip, leech prevention (salt/soap spray), insect repellent, raincoat, and at least 2 liters of water. Avoid open basins during lightning.",
    homestay: "Yes! We work with 10+ local hosts who offer village lunches ($3-$5) and overnight homestays ($15-$25). 90% of payments go directly to them. Let me know when you'd like to book!"
};

// --- APP STATE ---
let activeCategory = "all";
let searchFilter = "";
let regionFilter = "all";
let difficultyFilter = "all";
let favoritesList = JSON.parse(localStorage.getItem("offpath_favorites")) || [];
let activeGuardianId = "guardian-kavindu";
let reviewIndex = 0;

// --- DOM ELEMENTS ---
document.addEventListener("DOMContentLoaded", () => {
    // Nav Elements
    const header = document.querySelector(".header");
    const openFavsBtn = document.getElementById("open-favorites-btn");
    const closeFavsBtn = document.getElementById("close-favorites-btn");
    const favDrawer = document.getElementById("favorites-drawer");
    const favOverlay = document.getElementById("favorites-overlay");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileCloseBtn = document.getElementById("mobile-close-btn");
    const mobileNavMenu = document.getElementById("mobile-nav-menu");
    
    // Filters & Destination Elements
    const destinationFilters = document.getElementById("destination-filters");
    const cardsContainer = document.getElementById("destination-cards-container");
    const emptyState = document.getElementById("empty-state-destinations");
    const heroSearchForm = document.getElementById("hero-search-form");
    const searchInput = document.getElementById("search-input");
    const regionSelect = document.getElementById("region-select");
    const difficultySelect = document.getElementById("difficulty-select");
    const searchStatusBar = document.getElementById("search-status-bar");
    const searchCountBadge = document.getElementById("search-results-count");
    const clearFiltersBtn = document.getElementById("clear-all-filters-btn");
    const resetFiltersBtn = document.getElementById("empty-reset-filters-btn");
    
    // Guardians Elements
    const guardiansContainer = document.getElementById("guardians-container");
    
    // Testimonials Carousel Elements
    const carouselTrack = document.getElementById("reviews-carousel");
    const carouselPrev = document.getElementById("carousel-prev");
    const carouselNext = document.getElementById("carousel-next");
    const carouselIndicators = document.getElementById("carousel-indicators");
    
    // Map Elements
    const mapInfoPopup = document.getElementById("map-info-popup");
    const mapInfoClose = document.getElementById("map-info-close-btn");
    const mapInfoContent = document.getElementById("map-info-content");
    
    // Chat Elements
    const chatFab = document.getElementById("chat-fab");
    const chatDrawer = document.getElementById("chat-drawer");
    const chatClose = document.getElementById("chat-close");
    const chatMessages = document.getElementById("chat-messages");
    const chatForm = document.getElementById("chat-form");
    const chatInputText = document.getElementById("chat-input-text");
    const chatQuickReplies = document.getElementById("chat-quick-replies");
    const chatUnread = document.getElementById("chat-unread");
    
    // Modal Elements
    const guardianModal = document.getElementById("guardian-modal");
    const closeGuardianModal = document.getElementById("close-guardian-modal");
    const becomeGuardianNavBtn = document.getElementById("become-guardian-nav-btn");
    const becomeGuardianMobileBtn = document.getElementById("become-guardian-mobile-btn");
    const becomeGuardianFooter = document.getElementById("become-guardian-footer");
    const becomeHostFooter = document.getElementById("become-host-footer");
    const guardianAppForm = document.getElementById("guardian-application-form");
    
    // Sustainability Elements
    const calcDays = document.getElementById("calc-days");
    const calcSpend = document.getElementById("calc-spend");
    const resCarbon = document.getElementById("res-carbon");
    const resImpact = document.getElementById("res-impact");

    // --- STICKY NAV SCROLL LISTENER ---
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- MOBILE MENU EVENTS ---
    mobileMenuBtn.addEventListener("click", () => mobileNavMenu.classList.add("open"));
    mobileCloseBtn.addEventListener("click", () => mobileNavMenu.classList.remove("open"));
    
    // Close mobile nav when clicking nav links
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => mobileNavMenu.classList.remove("open"));
    });

    // --- FAVORITES DRAWER EVENTS ---
    openFavsBtn.addEventListener("click", () => {
        renderFavoritesDrawer();
        favDrawer.classList.add("open");
    });
    closeFavsBtn.addEventListener("click", () => favDrawer.classList.remove("open"));
    favOverlay.addEventListener("click", () => favDrawer.classList.remove("open"));
    document.getElementById("fav-explore-btn").addEventListener("click", () => favDrawer.classList.remove("open"));

    // --- RENDER FUNCTIONS ---

    // Render Destination Explorer Grid
    function renderDestinations() {
        // Filter destinations array
        const filtered = DESTINATIONS.filter(item => {
            const matchesCat = activeCategory === "all" || item.category === activeCategory;
            const matchesRegion = regionFilter === "all" || item.region === regionFilter;
            const matchesDiff = difficultyFilter === "all" || item.difficultyLevel === difficultyFilter;
            
            const searchLower = searchFilter.toLowerCase();
            const matchesSearch = !searchFilter || 
                item.title.toLowerCase().includes(searchLower) ||
                item.description.toLowerCase().includes(searchLower) ||
                item.district.toLowerCase().includes(searchLower);
                
            return matchesCat && matchesRegion && matchesDiff && matchesSearch;
        });

        // Update status bar
        if (activeCategory !== "all" || regionFilter !== "all" || difficultyFilter !== "all" || searchFilter) {
            searchStatusBar.style.display = "flex";
            searchCountBadge.textContent = filtered.length;
        } else {
            searchStatusBar.style.display = "none";
        }

        // Render card markup
        if (filtered.length === 0) {
            cardsContainer.innerHTML = "";
            emptyState.style.display = "block";
            return;
        }

        emptyState.style.display = "none";
        
        cardsContainer.innerHTML = filtered.map(item => {
            const isFav = favoritesList.includes(item.id);
            const difficultyClass = item.difficultyLevel.toLowerCase();
            
            return `
                <div class="destination-card" data-category="${item.category}" data-region="${item.region}">
                    <div class="card-img-wrapper">
                        <img src="${item.cover_image_url}" alt="${item.title}">
                        <div class="card-badge-row">
                            <span class="category-badge">${item.category}</span>
                            <span class="rating-badge">
                                <i class="ph-fill ph-star"></i>
                                <span>${item.safetyRating}</span>
                            </span>
                        </div>
                        <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Favorite">
                            <i class="${isFav ? 'ph-fill' : 'ph-bold'} ph-heart"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="card-loc">
                            <i class="ph ph-map-pin"></i>
                            <span>${item.district}</span>
                        </div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.description}</p>
                        <div class="card-footer-info">
                            <div class="card-difficulty">
                                <span class="difficulty-dot ${difficultyClass}"></span>
                                <span>${item.difficultyLevel}</span>
                            </div>
                            <div class="card-actions">
                                <button class="btn-card-action ask-guardian-trigger" data-guardian-ref="${item.createdBy}" data-dest-title="${item.title}">Ask Guardian</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        // Wire event listeners on dynamically added cards
        addCardEventListeners();
    }

    function addCardEventListeners() {
        // Wire favorite buttons
        document.querySelectorAll(".card-fav-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const destId = btn.getAttribute("data-id");
                toggleFavorite(destId);
            });
        });

        // Wire ask guardian buttons
        document.querySelectorAll(".ask-guardian-trigger").forEach(btn => {
            btn.addEventListener("click", () => {
                const guardianId = btn.getAttribute("data-guardian-ref");
                const destTitle = btn.getAttribute("data-dest-title");
                openChatWithGuardian(guardianId, `Hi! I'm planning to visit ${destTitle}. Can you give me some safety advice?`);
            });
        });
    }

    // Toggle Favorites List
    function toggleFavorite(id) {
        if (favoritesList.includes(id)) {
            favoritesList = favoritesList.filter(item => item !== id);
        } else {
            favoritesList.push(id);
        }
        localStorage.setItem("offpath_favorites", JSON.stringify(favoritesList));
        
        // Update all active cards, badges, and drawers
        updateFavoritesBadges();
        renderDestinations();
        renderFavoritesDrawer();
    }

    function updateFavoritesBadges() {
        const badge = document.getElementById("favorites-badge");
        badge.textContent = favoritesList.length;
        if (favoritesList.length > 0) {
            badge.style.display = "flex";
        } else {
            badge.style.display = "none";
        }
    }

    // Render Saved Favorites list in drawer
    function renderFavoritesDrawer() {
        const container = document.getElementById("favorites-list-container");
        const footer = document.getElementById("favorites-drawer-footer");
        const emptyState = document.getElementById("favorites-empty-state");
        
        if (favoritesList.length === 0) {
            container.innerHTML = "";
            container.appendChild(emptyState);
            emptyState.style.display = "flex";
            footer.style.display = "none";
            return;
        }

        emptyState.style.display = "none";
        footer.style.display = "block";
        
        const favItems = DESTINATIONS.filter(item => favoritesList.includes(item.id));
        
        container.innerHTML = favItems.map(item => `
            <div class="fav-item-row" data-id="${item.id}">
                <img src="${item.cover_image_url}" alt="${item.title}" class="fav-item-img">
                <div class="fav-item-info">
                    <h4 class="fav-item-title">${item.title}</h4>
                    <div class="fav-item-region">
                        <i class="ph ph-map-pin"></i>
                        <span>${item.region}</span>
                    </div>
                </div>
                <button class="fav-item-remove" data-id="${item.id}" aria-label="Remove">
                    <i class="ph-bold ph-trash"></i>
                </button>
            </div>
        `).join("");

        // Wire trash remove buttons
        container.querySelectorAll(".fav-item-remove").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                toggleFavorite(id);
            });
        });
    }

    // Render Local Guardians Directory
    function renderGuardians() {
        guardiansContainer.innerHTML = Object.values(GUARDIANS).map(g => `
            <div class="guardian-card" id="card-${g.id}">
                <div class="g-avatar-wrapper">
                    <img src="${g.profileImage}" alt="${g.fullName}" class="g-avatar">
                    <span class="g-verif-badge"><i class="ph-fill ph-seal-check"></i></span>
                </div>
                <h3 class="g-name">${g.fullName}</h3>
                <span class="g-uni">${g.university_name}</span>
                <div class="g-rating-row">
                    <i class="ph-fill ph-star"></i>
                    <strong>${g.rating}</strong>
                    <span>(${g.total_reviews} reviews)</span>
                </div>
                <p class="g-bio">${g.bio}</p>
                <div class="g-languages">
                    ${g.languages.map(lang => `<span class="g-lang-tag">${lang}</span>`).join("")}
                </div>
                <button class="btn-g-chat guardian-chat-btn" data-guardian-ref="${g.id}">
                    <i class="ph-bold ph-chat-circle"></i>
                    <span>Chat with ${g.fullName.split(" ")[0]}</span>
                </button>
            </div>
        `).join("");

        // Wire Chat with Guardian button event
        document.querySelectorAll(".guardian-chat-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const gId = btn.getAttribute("data-guardian-ref");
                openChatWithGuardian(gId, `Hello! I saw your guardian profile on the OFFPATH network. Are you currently available to provide path assistance?`);
            });
        });
    }

    // Render Testimonials Reviews Carousel
    function renderTestimonials() {
        carouselTrack.innerHTML = REVIEWS.map(r => `
            <div class="carousel-slide">
                <div class="testimonial-card">
                    <div class="test-stars">
                        ${Array(r.stars).fill('<i class="ph-fill ph-star"></i>').join("")}
                    </div>
                    <blockquote class="test-text">
                        "${r.text}"
                    </blockquote>
                    <div class="test-author">
                        <img src="${r.avatar}" alt="${r.author}" class="author-avatar">
                        <div class="author-info">
                            <h4>${r.author}</h4>
                            <p>${r.country} • Vetted on ${r.destinationName}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");

        // Generate indicators dots
        carouselIndicators.innerHTML = REVIEWS.map((_, idx) => `
            <span class="indicator ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
        `).join("");

        // Add indicator click events
        document.querySelectorAll(".indicator").forEach(dot => {
            dot.addEventListener("click", () => {
                const idx = parseInt(dot.getAttribute("data-index"));
                moveToSlide(idx);
            });
        });
    }

    function moveToSlide(index) {
        reviewIndex = index;
        const offset = -reviewIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
        
        // Update indicators active status
        document.querySelectorAll(".indicator").forEach((dot, idx) => {
            if (idx === reviewIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Testimonial auto-rotate (every 6 seconds)
    let autoRotate = setInterval(() => {
        let nextIndex = (reviewIndex + 1) % REVIEWS.length;
        moveToSlide(nextIndex);
    }, 6000);

    carouselPrev.addEventListener("click", () => {
        clearInterval(autoRotate);
        let prevIndex = (reviewIndex - 1 + REVIEWS.length) % REVIEWS.length;
        moveToSlide(prevIndex);
    });

    carouselNext.addEventListener("click", () => {
        clearInterval(autoRotate);
        let nextIndex = (reviewIndex + 1) % REVIEWS.length;
        moveToSlide(nextIndex);
    });

    // --- INTERACTIVE MAP MARKER BEHAVIORS ---
    
    // Clicking Map markers
    document.querySelectorAll(".map-marker").forEach(marker => {
        marker.addEventListener("click", (e) => {
            e.stopPropagation();
            
            // Check if marker points to a destination or a guardian node
            const destId = marker.getAttribute("data-id");
            const guardianId = marker.getAttribute("data-guardian-ref");

            let htmlContent = "";

            if (destId) {
                const dest = DESTINATIONS.find(d => d.id === destId);
                const guardian = GUARDIANS[dest.createdBy];
                const difficultyClass = dest.difficultyLevel.toLowerCase();

                htmlContent = `
                    <div class="map-info-header">
                        <img src="${dest.cover_image_url}" alt="${dest.title}" class="map-info-img">
                        <span class="category-badge map-info-badge">${dest.category}</span>
                    </div>
                    <div class="map-info-body">
                        <h4>${dest.title}</h4>
                        <div class="map-info-meta">
                            <span class="card-difficulty"><span class="difficulty-dot ${difficultyClass}"></span>${dest.difficultyLevel}</span>
                            <span class="rating-badge"><i class="ph-fill ph-star"></i>${dest.safetyRating}</span>
                        </div>
                        <p class="map-info-desc">${dest.description}</p>
                        <div class="map-info-footer">
                            <small>Guardian node: ${guardian.fullName.split(" ")[0]} (${guardian.university_name.split(" ")[2]})</small>
                            <button class="btn btn-primary w-full map-action-chat-btn" data-guardian-ref="${guardian.id}" data-dest-title="${dest.title}">
                                <i class="ph-bold ph-chat-circle"></i>
                                <span>Consult Guardian</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (guardianId) {
                const g = GUARDIANS[guardianId];
                htmlContent = `
                    <div class="map-info-body text-center" style="padding-top: var(--space-md);">
                        <img src="${g.profileImage}" alt="${g.fullName}" class="g-avatar" style="width: 64px; height: 64px; margin: 0 auto 8px;">
                        <h4>${g.fullName}</h4>
                        <span class="g-uni" style="margin-bottom: 8px;">${g.university_name}</span>
                        <div class="g-rating-row" style="justify-content: center; margin-bottom: 8px;">
                            <i class="ph-fill ph-star"></i>
                            <strong>${g.rating}</strong>
                            <span>(${g.total_reviews} reviews)</span>
                        </div>
                        <p style="font-size: 0.8rem; margin-bottom: var(--space-md);">${g.bio.substring(0, 100)}...</p>
                        <button class="btn btn-primary w-full map-action-chat-btn" data-guardian-ref="${g.id}">
                            <i class="ph-bold ph-chat-circle"></i>
                            <span>Chat with ${g.fullName.split(" ")[0]}</span>
                        </button>
                    </div>
                `;
            }

            mapInfoContent.innerHTML = htmlContent;
            mapInfoPopup.classList.add("active");

            // Wire chat action button inside the map popover
            const actionBtn = mapInfoContent.querySelector(".map-action-chat-btn");
            if (actionBtn) {
                actionBtn.addEventListener("click", () => {
                    const gId = actionBtn.getAttribute("data-guardian-ref");
                    const destTitle = actionBtn.getAttribute("data-dest-title");
                    let initialMsg = destTitle ? `Hi! I'm checking out ${destTitle} on the map. Is the trail clear today?` : "Hello! I saw you are online in this region on the map.";
                    openChatWithGuardian(gId, initialMsg);
                });
            }
        });
    });

    mapInfoClose.addEventListener("click", () => {
        mapInfoPopup.classList.remove("active");
    });

    // Close map popup on clicking outside
    document.addEventListener("click", () => {
        mapInfoPopup.classList.remove("active");
    });
    
    // Prevent closing when clicking inside popup
    mapInfoPopup.addEventListener("click", (e) => e.stopPropagation());

    // --- GUARDIAN LIVE CHAT SIMULATOR ---

    // Open Chat panel with specific student guardian
    function openChatWithGuardian(guardianId, initialMessage = null) {
        activeGuardianId = guardianId;
        const g = GUARDIANS[activeGuardianId];
        
        // Update UI headers
        document.getElementById("chat-g-name").textContent = g.fullName;
        document.getElementById("chat-g-avatar").textContent = g.fullName.split(" ").map(n => n[0]).join("");
        
        // Reset messages logs
        chatMessages.innerHTML = `
            <div class="message system-msg">
                <p>Verified Student Guardian connected. Safe travel assistance logs active.</p>
            </div>
            <div class="message guardian-msg">
                <p>Ayubowan! 🍂 I'm ${g.fullName.split(" ")[0]}. I specialize in local guidance around ${g.regionsCovered.join(" and ")}. How can I help you travel safely today?</p>
                <span class="msg-time">Just now</span>
            </div>
        `;
        
        // If an initial message exists, post it and trigger reply
        if (initialMessage) {
            // Post traveler message
            postTravelerMessage(initialMessage);
            
            // Queue smart reply
            queueGuardianReply(initialMessage);
        }

        // Open chat panel drawer
        chatDrawer.classList.add("open");
        chatUnread.style.display = "none";
    }

    // Toggle Chat Widget Drawer open/close
    chatFab.addEventListener("click", () => {
        chatDrawer.classList.toggle("open");
        chatUnread.style.display = "none";
    });

    chatClose.addEventListener("click", () => {
        chatDrawer.classList.remove("open");
    });

    // Handle typing custom message
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInputText.value.trim();
        if (!text) return;

        postTravelerMessage(text);
        chatInputText.value = "";
        
        // Queue automated response
        queueGuardianReply(text);
    });

    // Handle Quick questions bubble clicks
    document.querySelectorAll(".quick-reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const queryText = btn.getAttribute("data-query");
            postTravelerMessage(queryText);
            queueGuardianReply(queryText);
        });
    });

    function postTravelerMessage(text) {
        const msgDiv = document.createElement("div");
        msgDiv.className = "message traveler-msg";
        msgDiv.innerHTML = `
            <p>${escapeHTML(text)}</p>
            <span class="msg-time">Sent</span>
        `;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function queueGuardianReply(userQueryText) {
        // Show typing feedback indicator
        const typingDiv = document.createElement("div");
        typingDiv.className = "message guardian-msg typing-indicator-msg";
        typingDiv.id = "chat-typing-indicator";
        typingDiv.innerHTML = `<p>Typing safety data...</p>`;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            // Remove typing indicator
            const indicator = document.getElementById("chat-typing-indicator");
            if (indicator) indicator.remove();

            // Choose reply based on keyword matching
            let replyText = CHAT_RESPONSES.general;
            const query = userQueryText.toLowerCase();

            if (query.includes("knuckles") || query.includes("forest") || query.includes("hike")) {
                replyText = CHAT_RESPONSES.knuckles;
            } else if (query.includes("ella") || query.includes("diyaluma") || query.includes("waterfall")) {
                replyText = CHAT_RESPONSES.ella;
            } else if (query.includes("belihuloya") || query.includes("river") || query.includes("pool")) {
                replyText = CHAT_RESPONSES.belihuloya;
            } else if (query.includes("safe") || query.includes("hazard") || query.includes("accident")) {
                replyText = CHAT_RESPONSES.safety;
            } else if (query.includes("gear") || query.includes("socks") || query.includes("carry")) {
                replyText = CHAT_RESPONSES.gear;
            } else if (query.includes("homestay") || query.includes("cooking") || query.includes("eat") || query.includes("host")) {
                replyText = CHAT_RESPONSES.homestay;
            }

            // Post reply
            const replyDiv = document.createElement("div");
            replyDiv.className = "message guardian-msg";
            replyDiv.innerHTML = `
                <p>${replyText}</p>
                <span class="msg-time">Guardian • Just now</span>
            `;
            chatMessages.appendChild(replyDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Trigger notification sound/vibe indicators if widget closed
            if (!chatDrawer.classList.contains("open")) {
                chatUnread.style.display = "block";
            }
        }, 1200);
    }

    // Helper to prevent HTML injections
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // --- FILTER FORM EVENTS ---

    // Top Category filter click
    destinationFilters.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            // Remove active class from old filters
            destinationFilters.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            activeCategory = e.target.getAttribute("data-filter");
            renderDestinations();
        }
    });

    // Quick Search Form Submit
    heroSearchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        searchFilter = searchInput.value.trim();
        regionFilter = regionSelect.value;
        difficultyFilter = difficultySelect.value;

        // Render matching destinations
        renderDestinations();
        
        // Scroll to destinations anchor smooth
        document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
    });

    // Quick search tabs selection
    document.querySelectorAll(".search-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".search-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeCategory = tab.getAttribute("data-search-cat");
            
            // Sync filter buttons active class
            document.querySelectorAll(".filter-btn").forEach(btn => {
                if (btn.getAttribute("data-filter") === activeCategory) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });
        });
    });

    // Clear filter buttons
    clearFiltersBtn.addEventListener("click", resetAllFilters);
    resetFiltersBtn.addEventListener("click", resetAllFilters);

    function resetAllFilters() {
        activeCategory = "all";
        searchFilter = "";
        regionFilter = "all";
        difficultyFilter = "all";
        
        // Reset Inputs
        searchInput.value = "";
        regionSelect.value = "all";
        difficultySelect.value = "all";
        
        // Reset Active states
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-filter") === "all");
        });
        document.querySelectorAll(".search-tab").forEach(tab => {
            tab.classList.toggle("active", tab.getAttribute("data-search-cat") === "all");
        });

        renderDestinations();
    }

    // --- SUSTAINABILITY CALCULATOR INPUT LISTENER ---
    function updateEcoImpact() {
        const days = parseFloat(calcDays.value) || 0;
        const spend = parseFloat(calcSpend.value) || 0;
        
        // Calculate offset (e.g. 1 tree per 2 travel days)
        const trees = (days * 0.5).toFixed(1);
        
        // Calculate community revenue (e.g. 90% platform earnings straight to host pockets)
        const revenue = (spend * 0.90).toFixed(2);
        
        resCarbon.textContent = trees;
        resImpact.textContent = `$${revenue}`;
    }

    calcDays.addEventListener("input", updateEcoImpact);
    calcSpend.addEventListener("input", updateEcoImpact);

    // --- MODAL FOR BECOMING A GUARDIAN ---
    becomeGuardianNavBtn.addEventListener("click", openGuardianForm);
    becomeGuardianMobileBtn.addEventListener("click", () => {
        mobileNavMenu.classList.remove("open");
        openGuardianForm();
    });
    becomeGuardianFooter.addEventListener("click", (e) => { e.preventDefault(); openGuardianForm(); });
    becomeHostFooter.addEventListener("click", (e) => { 
        e.preventDefault(); 
        alert("Homestay Host Registrations will open in Phase 2 of pilot program in Ella. Stay tuned!");
    });
    document.getElementById("safety-guidelines-footer").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Local Guardian Safety Standard Protocols:\n\n1. GPS Log validation required for paths.\n2. Compulsory weather audits before recommending trails.\n3. University credentials checked termly.\n4. Real-time hazard reports logged with local district police.");
    });
    document.getElementById("guardian-verification-rules").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Guardian Vetting Checklist:\n\n- Valid active University registration\n- National ID verification\n- Physical verification of safety equipment (leeches spray, ropes, safety kit)\n- Completion of 10-hour wilderness navigation training.");
    });
    document.getElementById("privacy-policy").addEventListener("click", (e) => { e.preventDefault(); alert("OFFPATH strictly safeguards location and identification logs. Private data is only shared with emergency authorities during hazard alerts."); });
    document.getElementById("terms-of-service").addEventListener("click", (e) => { e.preventDefault(); alert("Travelers explore hidden destinations at their own discretion. Local Guardians serve as verified local information agents and guides."); });

    function openGuardianForm() {
        guardianModal.classList.add("open");
    }

    closeGuardianModal.addEventListener("click", () => {
        guardianModal.classList.remove("open");
    });

    document.getElementById("guardian-modal-overlay").addEventListener("click", () => {
        guardianModal.classList.remove("open");
    });

    // Form submit simulated action
    guardianAppForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameVal = document.getElementById("apply-name").value;
        const uniVal = document.getElementById("apply-uni").value;
        
        alert(`Congratulations ${nameVal}! Your application to guide in the ${document.getElementById("apply-region").value} region has been submitted.\n\nWe have sent a verification code to your university email. Our admin team will approve your application once university ID checking is completed.`);
        
        // Reset form and close modal
        guardianAppForm.reset();
        guardianModal.classList.remove("open");
    });

    // Contact Guardians for Favorites CTA inside favorites drawer
    document.getElementById("contact-guardians-for-favs").addEventListener("click", () => {
        if (favoritesList.length === 0) return;
        
        // Grab first favorite item details
        const firstFav = DESTINATIONS.find(d => d.id === favoritesList[0]);
        favDrawer.classList.remove("open");
        
        openChatWithGuardian(firstFav.createdBy, `Hello! I have saved ${firstFav.title} to my favorites. Can you tell me if this destination is accessible this week?`);
    });

    // Play Mock Video Action
    document.getElementById("play-video-btn").addEventListener("click", () => {
        alert("Playing OFFPATH promo video: 'Discover Sri Lanka Beyond the Tourist Trail - Sustainable Community Tourism Platform.'");
    });

    // --- INITIAL APP BOOTSTRAP ---
    updateFavoritesBadges();
    renderDestinations();
    renderGuardians();
    renderTestimonials();
    updateEcoImpact();
});
