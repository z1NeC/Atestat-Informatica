/* ============================================
   WAVE — Car Rental Website
   Main JavaScript
   ============================================ */

// ─── Car Database ───────────────────────────
const carDatabase = {
    "BMW": {
        models: {
            "Seria 3": { ani: [2024, 2023, 2022, 2021], motorizari: ["2.0 Diesel 150CP", "2.0 Diesel 190CP", "2.0 Benzină 184CP", "3.0 Benzină 374CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru", "Roșu"], pret: 65, icon: "fa-car" },
            "Seria 5": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 190CP", "3.0 Diesel 286CP", "2.0 Benzină 252CP", "3.0 Benzină 374CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru Metalic"], pret: 85, icon: "fa-car" },
            "X3": { ani: [2024, 2023, 2022, 2021], motorizari: ["2.0 Diesel 150CP", "2.0 Diesel 190CP", "2.0 Benzină 184CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Verde", "Albastru"], pret: 80, icon: "fa-truck-monster" },
            "X5": { ani: [2024, 2023, 2022], motorizari: ["3.0 Diesel 286CP", "3.0 Diesel 340CP", "3.0 Benzină 340CP", "4.4 Benzină 530CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru"], pret: 110, icon: "fa-truck-monster" },
            "Seria 4": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 190CP", "2.0 Benzină 184CP", "3.0 Benzină 374CP"], caroserii: ["Coupe"], culori: ["Negru", "Alb", "Albastru", "Roșu"], pret: 90, icon: "fa-car-side" }
        }
    },
    "Mercedes-Benz": {
        models: {
            "Clasa C": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.6 Diesel 122CP", "2.0 Diesel 163CP", "2.0 Diesel 200CP", "2.0 Benzină 204CP"], caroserii: ["Sedan", "Break", "Coupe"], culori: ["Negru", "Alb", "Gri", "Argintiu", "Albastru"], pret: 70, icon: "fa-car" },
            "Clasa E": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 200CP", "2.0 Diesel 265CP", "2.0 Benzină 265CP", "3.0 Benzină 367CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Argintiu"], pret: 90, icon: "fa-car" },
            "GLC": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 163CP", "2.0 Diesel 200CP", "2.0 Benzină 204CP", "2.0 Benzină 258CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Verde"], pret: 85, icon: "fa-truck-monster" },
            "GLE": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 272CP", "3.0 Diesel 330CP", "3.0 Benzină 367CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri"], pret: 115, icon: "fa-truck-monster" },
            "Clasa A": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.3 Benzină 136CP", "2.0 Diesel 150CP", "2.0 Benzină 224CP"], caroserii: ["Hatchback", "Sedan"], culori: ["Negru", "Alb", "Gri", "Galben", "Roșu"], pret: 55, icon: "fa-car-side" }
        }
    },
    "Audi": {
        models: {
            "A4": { ani: [2024, 2023, 2022, 2021], motorizari: ["2.0 Diesel 150CP", "2.0 Diesel 190CP", "2.0 Benzină 204CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru"], pret: 65, icon: "fa-car" },
            "A6": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 204CP", "3.0 Diesel 286CP", "2.0 Benzină 245CP", "3.0 Benzină 340CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru"], pret: 85, icon: "fa-car" },
            "Q5": { ani: [2024, 2023, 2022], motorizari: ["2.0 Diesel 163CP", "2.0 Diesel 204CP", "2.0 Benzină 265CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Verde", "Albastru"], pret: 80, icon: "fa-truck-monster" },
            "Q7": { ani: [2024, 2023, 2022], motorizari: ["3.0 Diesel 231CP", "3.0 Diesel 286CP", "3.0 Benzină 340CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri"], pret: 105, icon: "fa-truck-monster" },
            "A3": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Benzină 200CP"], caroserii: ["Sedan", "Hatchback"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 50, icon: "fa-car-side" }
        }
    },
    "Volkswagen": {
        models: {
            "Golf": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.0 Benzină 110CP", "1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Benzină 245CP GTI"], caroserii: ["Hatchback"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 40, icon: "fa-car-side" },
            "Passat": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Diesel 200CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru"], pret: 55, icon: "fa-car" },
            "Tiguan": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Diesel 200CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Roșu"], pret: 60, icon: "fa-truck-monster" },
            "Touareg": { ani: [2024, 2023, 2022], motorizari: ["3.0 Diesel 231CP", "3.0 Diesel 286CP", "3.0 Benzină 340CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri"], pret: 95, icon: "fa-truck-monster" },
            "Polo": { ani: [2024, 2023, 2022], motorizari: ["1.0 Benzină 80CP", "1.0 Benzină 95CP", "1.0 Benzină 110CP"], caroserii: ["Hatchback"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru", "Galben"], pret: 30, icon: "fa-car-side" }
        }
    },
    "Toyota": {
        models: {
            "Corolla": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.8 Hybrid 140CP", "2.0 Hybrid 196CP", "1.2 Benzină 116CP"], caroserii: ["Sedan", "Hatchback", "Break"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 45, icon: "fa-car" },
            "RAV4": { ani: [2024, 2023, 2022], motorizari: ["2.5 Hybrid 222CP", "2.5 Plugin Hybrid 306CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Roșu"], pret: 65, icon: "fa-truck-monster" },
            "Yaris": { ani: [2024, 2023, 2022], motorizari: ["1.0 Benzină 72CP", "1.5 Hybrid 116CP"], caroserii: ["Hatchback"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru", "Verde"], pret: 30, icon: "fa-car-side" },
            "Camry": { ani: [2024, 2023, 2022], motorizari: ["2.5 Hybrid 218CP", "2.5 Benzină 209CP"], caroserii: ["Sedan"], culori: ["Negru", "Alb", "Gri", "Albastru"], pret: 60, icon: "fa-car" },
            "C-HR": { ani: [2024, 2023, 2022], motorizari: ["1.8 Hybrid 140CP", "2.0 Hybrid 196CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Verde"], pret: 50, icon: "fa-truck-monster" }
        }
    },
    "Škoda": {
        models: {
            "Octavia": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Diesel 200CP", "2.0 Benzină 245CP RS"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 45, icon: "fa-car" },
            "Superb": { ani: [2024, 2023, 2022], motorizari: ["1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Diesel 200CP"], caroserii: ["Sedan", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru"], pret: 55, icon: "fa-car" },
            "Kodiaq": { ani: [2024, 2023, 2022], motorizari: ["1.5 Benzină 150CP", "2.0 Diesel 150CP", "2.0 Diesel 200CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 60, icon: "fa-truck-monster" },
            "Fabia": { ani: [2024, 2023, 2022], motorizari: ["1.0 Benzină 80CP", "1.0 Benzină 95CP", "1.0 Benzină 110CP"], caroserii: ["Hatchback"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru", "Galben"], pret: 28, icon: "fa-car-side" }
        }
    },
    "Hyundai": {
        models: {
            "Tucson": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.6 Benzină 150CP", "1.6 Diesel 136CP", "1.6 Hybrid 230CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Verde", "Roșu"], pret: 55, icon: "fa-truck-monster" },
            "i30": { ani: [2024, 2023, 2022], motorizari: ["1.0 Benzină 120CP", "1.5 Benzină 160CP", "1.6 Diesel 136CP"], caroserii: ["Hatchback", "Break"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 38, icon: "fa-car-side" },
            "Kona": { ani: [2024, 2023, 2022], motorizari: ["1.0 Benzină 120CP", "1.6 Hybrid 141CP", "Electric 204CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Verde", "Roșu"], pret: 45, icon: "fa-truck-monster" },
            "i20": { ani: [2024, 2023, 2022], motorizari: ["1.0 Benzină 100CP", "1.2 Benzină 84CP"], caroserii: ["Hatchback"], culori: ["Negru", "Alb", "Gri", "Roșu", "Albastru"], pret: 28, icon: "fa-car-side" }
        }
    },
    "Ford": {
        models: {
            "Focus": { ani: [2024, 2023, 2022, 2021], motorizari: ["1.0 EcoBoost 125CP", "1.5 EcoBoost 150CP", "1.5 Diesel 120CP", "2.3 EcoBoost 280CP ST"], caroserii: ["Hatchback", "Break"], culori: ["Negru", "Alb", "Gri", "Albastru", "Roșu"], pret: 40, icon: "fa-car-side" },
            "Kuga": { ani: [2024, 2023, 2022], motorizari: ["1.5 EcoBoost 150CP", "2.0 Diesel 150CP", "2.5 Hybrid 225CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Roșu"], pret: 55, icon: "fa-truck-monster" },
            "Puma": { ani: [2024, 2023, 2022], motorizari: ["1.0 EcoBoost 125CP", "1.0 EcoBoost 155CP", "1.0 Hybrid 125CP"], caroserii: ["SUV"], culori: ["Negru", "Alb", "Gri", "Albastru", "Verde", "Roșu"], pret: 42, icon: "fa-truck-monster" },
            "Mustang": { ani: [2024, 2023], motorizari: ["2.3 EcoBoost 310CP", "5.0 V8 450CP"], caroserii: ["Coupe"], culori: ["Negru", "Alb", "Roșu", "Albastru", "Galben", "Verde"], pret: 150, icon: "fa-car-side" }
        }
    }
};

const bodyTypeMap = {
    "Sedan": "sedan",
    "SUV": "suv",
    "Hatchback": "hatchback",
    "Break": "break",
    "Coupe": "coupe"
};

// ─── Preloader ──────────────────────────────
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
    }, 1200);
});

// ─── Particles ──────────────────────────────
function createParticles() {
    const container = document.getElementById("particles");
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = Math.random() * 100 + "%";
        p.style.width = p.style.height = (Math.random() * 4 + 2) + "px";
        p.style.animationDuration = (Math.random() * 8 + 6) + "s";
        p.style.animationDelay = (Math.random() * 8) + "s";
        container.appendChild(p);
    }
}
createParticles();

// ─── Theme Toggle ───────────────────────────
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("wave_theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("wave_theme", isDark ? "dark" : "light");
    
    if (themeIcon) {
        if (isDark) {
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    }
});

// ─── Navbar ─────────────────────────────────
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
    document.getElementById("backToTop").classList.toggle("visible", window.scrollY > 500);
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle("active", scrollY >= top && scrollY < top + height);
        }
    });
});

// ─── Back to Top ────────────────────────────
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ─── Counter Animation ──────────────────────
function animateCounters() {
    document.querySelectorAll(".stat-number").forEach(el => {
        const target = +el.dataset.count;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current).toLocaleString("ro-RO");
        }, 16);
    });
}

let countersAnimated = false;
const heroSection = document.querySelector(".hero");
const counterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        setTimeout(animateCounters, 600);
    }
}, { threshold: 0.5 });
counterObserver.observe(heroSection);

// ─── Scroll Animations ─────────────────────
const animObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add("animated"), +delay);
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll("[data-animate]").forEach(el => animObserver.observe(el));

// ─── Fleet Cards ────────────────────────────
function generateFleetCards() {
    const grid = document.getElementById("fleetGrid");
    const cards = [];

    for (const [marca, data] of Object.entries(carDatabase)) {
        for (const [model, info] of Object.entries(data.models)) {
            const bodyType = info.caroserii[0];
            const filterClass = bodyTypeMap[bodyType] || "other";

            cards.push({
                marca,
                model,
                bodyType,
                filterClass,
                year: info.ani[0],
                engine: info.motorizari[0],
                colors: info.culori,
                price: info.pret,
                icon: info.icon
            });
        }
    }

    cards.sort(() => Math.random() - 0.5);
    const displayed = cards.slice(0, 9);

    grid.innerHTML = displayed.map(car => {
        const makeStr = car.marca.toLowerCase().replace(/[^a-z0-9]/g, '');
        const modelStr = car.model.toLowerCase().replace(/[^a-z0-9]/g, '');
        const imageUrl = `https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=${makeStr}&modelFamily=${modelStr}&zoomType=fullscreen`;

        return `
        <div class="fleet-card" data-type="${car.filterClass}">
            <div class="fleet-card-image" style="background-image: url('${imageUrl}'); background-size: contain; background-position: center; background-repeat: no-repeat;">
                <span class="fleet-badge">${car.bodyType}</span>
            </div>
            <div class="fleet-card-body">
                <h3 class="fleet-card-title">${car.marca} ${car.model}</h3>
                <p class="fleet-card-subtitle">${car.year} • ${car.bodyType}</p>
                <div class="fleet-card-specs">
                    <div class="spec"><i class="fas fa-cog"></i>${car.engine}</div>
                    <div class="spec"><i class="fas fa-calendar"></i>${car.year}</div>
                    <div class="spec"><i class="fas fa-car-side"></i>${car.bodyType}</div>
                    <div class="spec"><i class="fas fa-palette"></i>${car.colors.length} culori</div>
                </div>
                <div class="fleet-card-footer">
                    <div class="fleet-price">${car.price}€ <span>/zi</span></div>
                    <a href="#formular" class="btn-rent">Rezervă</a>
                </div>
            </div>
        </div>
    `;
    }).join("");
}

generateFleetCards();

// Fleet Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll(".fleet-card").forEach(card => {
            if (filter === "all" || card.dataset.type === filter) {
                card.style.display = "";
                card.style.animation = "fadeInUp 0.5s ease forwards";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// ─── Testimonials Slider ────────────────────
const track = document.getElementById("testimonialTrack");
const dotsContainer = document.getElementById("testimonialDots");
const cards_t = track.querySelectorAll(".testimonial-card");
let currentSlide = 0;

cards_t.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("testimonial-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".testimonial-dot").forEach((d, i) => {
        d.classList.toggle("active", i === index);
    });
}

document.getElementById("prevBtn").addEventListener("click", () => {
    goToSlide(currentSlide === 0 ? cards_t.length - 1 : currentSlide - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    goToSlide(currentSlide === cards_t.length - 1 ? 0 : currentSlide + 1);
});

setInterval(() => {
    goToSlide(currentSlide === cards_t.length - 1 ? 0 : currentSlide + 1);
}, 6000);

// ─── Form: Cascading Selects ────────────────
const marcaSelect = document.getElementById("marca");
const modelSelect = document.getElementById("model");
const anSelect = document.getElementById("an");
const motorizareSelect = document.getElementById("motorizare");
const caroserieSelect = document.getElementById("caroserie");
const culoareSelect = document.getElementById("culoare");

function populateBrands() {
    Object.keys(carDatabase).sort().forEach(marca => {
        const opt = document.createElement("option");
        opt.value = marca;
        opt.textContent = marca;
        marcaSelect.appendChild(opt);
    });
}
populateBrands();

marcaSelect.addEventListener("change", () => {
    const marca = marcaSelect.value;
    resetSelect(modelSelect, "Selectează modelul");
    resetSelect(anSelect, "Selectează anul");
    resetSelect(motorizareSelect, "Selectează motorizarea");
    resetSelect(caroserieSelect, "Selectează caroseria");
    resetSelect(culoareSelect, "Selectează culoarea");

    if (!marca) {
        disableSelects([modelSelect, anSelect, motorizareSelect, caroserieSelect, culoareSelect]);
        return;
    }

    modelSelect.disabled = false;
    const models = carDatabase[marca].models;
    Object.keys(models).forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        modelSelect.appendChild(opt);
    });
    updateCarPreview();
});

modelSelect.addEventListener("change", () => {
    const marca = marcaSelect.value;
    const model = modelSelect.value;
    resetSelect(anSelect, "Selectează anul");
    resetSelect(motorizareSelect, "Selectează motorizarea");
    resetSelect(caroserieSelect, "Selectează caroseria");
    resetSelect(culoareSelect, "Selectează culoarea");

    if (!model) {
        disableSelects([anSelect, motorizareSelect, caroserieSelect, culoareSelect]);
        return;
    }

    const info = carDatabase[marca].models[model];
    anSelect.disabled = false;
    info.ani.forEach(a => {
        const opt = document.createElement("option");
        opt.value = a;
        opt.textContent = a;
        anSelect.appendChild(opt);
    });
    updateCarPreview();
});

anSelect.addEventListener("change", () => {
    const marca = marcaSelect.value;
    const model = modelSelect.value;
    resetSelect(motorizareSelect, "Selectează motorizarea");
    resetSelect(caroserieSelect, "Selectează caroseria");
    resetSelect(culoareSelect, "Selectează culoarea");

    if (!anSelect.value) {
        disableSelects([motorizareSelect, caroserieSelect, culoareSelect]);
        return;
    }

    const info = carDatabase[marca].models[model];
    motorizareSelect.disabled = false;
    info.motorizari.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        motorizareSelect.appendChild(opt);
    });
    updateCarPreview();
});

motorizareSelect.addEventListener("change", () => {
    const marca = marcaSelect.value;
    const model = modelSelect.value;
    resetSelect(caroserieSelect, "Selectează caroseria");
    resetSelect(culoareSelect, "Selectează culoarea");

    if (!motorizareSelect.value) {
        disableSelects([caroserieSelect, culoareSelect]);
        return;
    }

    const info = carDatabase[marca].models[model];
    caroserieSelect.disabled = false;
    info.caroserii.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        caroserieSelect.appendChild(opt);
    });
    updateCarPreview();
});

caroserieSelect.addEventListener("change", () => {
    const marca = marcaSelect.value;
    const model = modelSelect.value;
    resetSelect(culoareSelect, "Selectează culoarea");

    if (!caroserieSelect.value) {
        disableSelects([culoareSelect]);
        return;
    }

    const info = carDatabase[marca].models[model];
    culoareSelect.disabled = false;
    info.culori.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        culoareSelect.appendChild(opt);
    });
    updateCarPreview();
});

culoareSelect.addEventListener("change", updateCarPreview);

function resetSelect(select, placeholder) {
    select.innerHTML = `<option value="">${placeholder}</option>`;
    select.disabled = true;
}

function disableSelects(selects) {
    selects.forEach(s => s.disabled = true);
}

function updateCarPreview() {
    const preview = document.getElementById("carPreview");
    const text = document.getElementById("carPreviewText");
    const parts = [
        marcaSelect.value,
        modelSelect.value,
        anSelect.value,
        motorizareSelect.value,
        caroserieSelect.value,
        culoareSelect.value
    ].filter(Boolean);

    if (parts.length > 1) {
        preview.style.display = "block";
        text.textContent = parts.join(" • ");
    } else {
        preview.style.display = "none";
    }
}

// ─── Form: Date Inputs ─────────────────────
const today = new Date().toISOString().split("T")[0];
document.getElementById("dataStart").min = today;
document.getElementById("dataStart").addEventListener("change", function() {
    document.getElementById("dataEnd").min = this.value;
    calculateDuration();
});
document.getElementById("dataEnd").addEventListener("change", calculateDuration);

function calculateDuration() {
    const start = document.getElementById("dataStart").value;
    const end = document.getElementById("dataEnd").value;
    const summary = document.getElementById("rentalSummary");
    if (start && end) {
        const diff = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
        if (diff > 0) {
            summary.style.display = "block";
            document.getElementById("durata").textContent = `${diff} ${diff === 1 ? "zi" : "zile"}`;
        } else {
            summary.style.display = "none";
        }
    } else {
        summary.style.display = "none";
    }
}

// ─── Form: Multi-Step Navigation ────────────
let currentFormStep = 1;

function nextStep(step) {
    if (!validateStep(step)) return;

    const current = document.getElementById(`step${step}`);
    const next = document.getElementById(`step${step + 1}`);
    const progressSteps = document.querySelectorAll(".progress-step");

    progressSteps[step - 1].classList.remove("active");
    progressSteps[step - 1].classList.add("completed");
    progressSteps[step].classList.add("active");

    document.getElementById(`progressFill${step}`).style.width = "100%";

    current.classList.remove("active");
    next.classList.add("active");
    currentFormStep = step + 1;

    document.querySelector(".form-wrapper").scrollIntoView({ behavior: "smooth", block: "start" });
}

function prevStep(step) {
    const current = document.getElementById(`step${step}`);
    const prev = document.getElementById(`step${step - 1}`);
    const progressSteps = document.querySelectorAll(".progress-step");

    progressSteps[step - 1].classList.remove("active");
    progressSteps[step - 2].classList.remove("completed");
    progressSteps[step - 2].classList.add("active");

    document.getElementById(`progressFill${step - 1}`).style.width = "0%";

    current.classList.remove("active");
    prev.classList.add("active");
    currentFormStep = step - 1;
}

// ─── Form: Validation ───────────────────────
function validateStep(step) {
    let valid = true;

    if (step === 1) {
        valid = validateField("marca", "errorMarca", "Selectează o marcă") && valid;
        valid = validateField("model", "errorModel", "Selectează un model") && valid;
        valid = validateField("an", "errorAn", "Selectează anul") && valid;
        valid = validateField("motorizare", "errorMotorizare", "Selectează motorizarea") && valid;
        valid = validateField("caroserie", "errorCaroserie", "Selectează caroseria") && valid;
        valid = validateField("culoare", "errorCuloare", "Selectează culoarea") && valid;
    }

    if (step === 2) {
        valid = validateField("dataStart", "errorDataStart", "Selectează data preluării") && valid;
        valid = validateField("dataEnd", "errorDataEnd", "Selectează data returnării") && valid;
        valid = validateField("locPreluare", "errorLocPreluare", "Selectează locul preluării") && valid;
        valid = validateField("locReturnare", "errorLocReturnare", "Selectează locul returnării") && valid;

        if (valid) {
            const start = new Date(document.getElementById("dataStart").value);
            const end = new Date(document.getElementById("dataEnd").value);
            if (end <= start) {
                showError("dataEnd", "errorDataEnd", "Data returnării trebuie să fie după data preluării");
                valid = false;
            }
        }
    }

    if (step === 3) {
        valid = validateField("nume", "errorNume", "Introdu numele") && valid;
        valid = validateField("prenume", "errorPrenume", "Introdu prenumele") && valid;

        const cnp = document.getElementById("cnp").value.trim();
        if (!cnp) {
            showError("cnp", "errorCnp", "Introdu CNP-ul");
            valid = false;
        } else if (!/^\d{13}$/.test(cnp)) {
            showError("cnp", "errorCnp", "CNP-ul trebuie să conțină exact 13 cifre");
            valid = false;
        } else {
            clearError("cnp", "errorCnp");
        }

        valid = validateField("dataNastere", "errorDataNastere", "Selectează data nașterii") && valid;

        const email = document.getElementById("email").value.trim();
        if (!email) {
            showError("email", "errorEmail", "Introdu adresa de email");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("email", "errorEmail", "Introdu o adresă de email validă");
            valid = false;
        } else {
            clearError("email", "errorEmail");
        }

        const telefon = document.getElementById("telefon").value.trim();
        if (!telefon) {
            showError("telefon", "errorTelefon", "Introdu numărul de telefon");
            valid = false;
        } else if (!/^(\+40|0)[0-9]{9}$/.test(telefon.replace(/\s/g, ""))) {
            showError("telefon", "errorTelefon", "Introdu un număr valid (ex: 07XX XXX XXX)");
            valid = false;
        } else {
            clearError("telefon", "errorTelefon");
        }

        valid = validateField("categorie", "errorCategorie", "Selectează categoria permisului") && valid;

        if (!document.getElementById("termeni").checked) {
            document.getElementById("errorTermeni").textContent = "Trebuie să accepți termenii";
            valid = false;
        } else {
            document.getElementById("errorTermeni").textContent = "";
        }
    }

    return valid;
}

function validateField(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
        showError(fieldId, errorId, message);
        return false;
    }
    clearError(fieldId, errorId);
    return true;
}

function showError(fieldId, errorId, message) {
    document.getElementById(fieldId).classList.add("error");
    document.getElementById(errorId).textContent = message;
}

function clearError(fieldId, errorId) {
    document.getElementById(fieldId).classList.remove("error");
    document.getElementById(errorId).textContent = "";
}

// Clear errors on input
document.querySelectorAll(".form-group input, .form-group select, .form-group textarea").forEach(el => {
    el.addEventListener("input", () => {
        el.classList.remove("error");
        const errorEl = el.closest(".form-group").querySelector(".error-msg");
        if (errorEl) errorEl.textContent = "";
    });
    el.addEventListener("change", () => {
        el.classList.remove("error");
        const errorEl = el.closest(".form-group").querySelector(".error-msg");
        if (errorEl) errorEl.textContent = "";
    });
});

// ─── Form: Submit ───────────────────────────
document.getElementById("rentalForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (!validateStep(3)) return;

    const formData = {
        id: "CMD-" + Date.now().toString().slice(-6),
        timestamp: new Date().toISOString(),
        status: "pending",
        note: "",
        masina: {
            marca: marcaSelect.value,
            model: modelSelect.value,
            an: anSelect.value,
            motorizare: motorizareSelect.value,
            caroserie: caroserieSelect.value,
            culoare: culoareSelect.value
        },
        perioada: {
            dataStart: document.getElementById("dataStart").value,
            dataEnd: document.getElementById("dataEnd").value,
            locPreluare: document.getElementById("locPreluare").value,
            locReturnare: document.getElementById("locReturnare").value
        },
        datePersonale: {
            nume: document.getElementById("nume").value,
            prenume: document.getElementById("prenume").value,
            cnp: document.getElementById("cnp").value,
            dataNastere: document.getElementById("dataNastere").value,
            email: document.getElementById("email").value,
            telefon: document.getElementById("telefon").value,
            categoriePermis: document.getElementById("categorie").value,
            observatii: document.getElementById("observatii").value
        }
    };

    console.log("Rezervare trimisă:", formData);

    let orders = JSON.parse(localStorage.getItem("wave_rent_orders") || "[]");
    orders.push(formData);
    localStorage.setItem("wave_rent_orders", JSON.stringify(orders));

    this.style.display = "none";
    document.querySelector(".form-progress").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
});

function resetForm() {
    document.getElementById("rentalForm").reset();
    document.getElementById("rentalForm").style.display = "block";
    document.querySelector(".form-progress").style.display = "flex";
    document.getElementById("successMessage").style.display = "none";

    resetSelect(modelSelect, "Selectează mai întâi marca");
    resetSelect(anSelect, "Selectează anul");
    resetSelect(motorizareSelect, "Selectează motorizarea");
    resetSelect(caroserieSelect, "Selectează caroseria");
    resetSelect(culoareSelect, "Selectează culoarea");
    document.getElementById("carPreview").style.display = "none";
    document.getElementById("rentalSummary").style.display = "none";

    const progressSteps = document.querySelectorAll(".progress-step");
    progressSteps.forEach((s, i) => {
        s.classList.remove("active", "completed");
        if (i === 0) s.classList.add("active");
    });
    document.getElementById("progressFill1").style.width = "0%";
    document.getElementById("progressFill2").style.width = "0%";

    document.querySelectorAll(".form-step").forEach((s, i) => {
        s.classList.toggle("active", i === 0);
    });

    currentFormStep = 1;
}

// ─── Smooth Scroll for Anchor Links ─────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
