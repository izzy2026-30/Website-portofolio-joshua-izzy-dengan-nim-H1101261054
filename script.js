const THEME_KEY = 'knight_duality_theme';
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];
let theme = localStorage.getItem(THEME_KEY) || 'dark';

const esc = (s) => { const d = document.createElement('div'); d.textContent = s ?? ''; return d.innerHTML; };
const $ = (id) => document.getElementById(id);

// Bingkai foto: tampilkan gambar jika ada, placeholder jika kosong / file tidak ditemukan
function photoFrame(src, label, heightClass, onclickAttr = '') {
    const placeholder = `
        <div class="w-full h-full flex flex-col items-center justify-center p-4 text-center">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 border" style="border-color: var(--border-highlight); background: var(--badge-bg); color: var(--accent-primary);">
                <i data-lucide="image" class="w-7 h-7"></i>
            </div>
            <p class="font-cinzel font-bold text-xs">${esc(label)}</p>
            <p class="text-[11px] mt-1" style="color: var(--text-secondary);">Foto belum dipasang (isi di bagian DATA)</p>
        </div>`;
    const wrapper = document.createElement('div');
    wrapper.className = `relative w-full ${heightClass} rounded-xl overflow-hidden border mb-4 group`;
    wrapper.style.cssText = 'border-color: var(--border-highlight); background: var(--bg-secondary);';
    if (!src) { wrapper.innerHTML = placeholder; return wrapper; }
    const img = document.createElement('img');
    img.src = src;
    img.alt = label;
    img.className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' + (onclickAttr ? ' cursor-zoom-in' : '');
    img.onerror = () => { wrapper.innerHTML = placeholder; lucide.createIcons(); };
    if (onclickAttr) img.addEventListener('click', onclickAttr);
    wrapper.appendChild(img);
    return wrapper;
}

const corners = `
    <div class="corner-ornament top-3 left-3 border-t-2 border-l-2 rounded-tl-lg"></div>
    <div class="corner-ornament top-3 right-3 border-t-2 border-r-2 rounded-tr-lg"></div>
    <div class="corner-ornament bottom-3 left-3 border-b-2 border-l-2 rounded-bl-lg"></div>
    <div class="corner-ornament bottom-3 right-3 border-b-2 border-r-2 rounded-br-lg"></div>`;

// ---------------- RENDER ----------------
function renderProfile() {
    const p = PORTFOLIO.profile;
    $('navBrandName').textContent = p.nama.toUpperCase();
    $('heroFullName').textContent = 'Website Portofolio izzy';
    $('heroTagline').textContent = p.tagline;
    $('heroBio').textContent = p.bio;
    $('footerOwner').textContent = `Portofolio ${p.nama}`;
    document.title = 'Website Portofolio izzy | Ksatria Cahaya & Kegelapan';

    const items = [
        ['user', 'Nama Lengkap', p.nama],
        ['calendar', 'Tempat, Tanggal Lahir', p.ttl],
        ['map-pin', 'Domisili / Asal', p.alamat],
        ['compass', 'Fokus / Minat Utama', p.minat],
        ['mail', 'Email / Kontak', p.kontak],
        ['flame', 'Semboyan Hidup', p.semboyan]
    ];
    $('profileGrid').innerHTML = items.map(([icon, label, val]) => `
        <div class="p-4 rounded-xl border" style="background: var(--bg-secondary); border-color: var(--border-color);">
            <div class="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold mb-1.5" style="color: var(--accent-primary);">
                <i data-lucide="${icon}" class="w-4 h-4"></i> ${esc(label)}
            </div>
            <p class="font-semibold text-base break-words">${esc(val)}</p>
        </div>`).join('');
}

function renderEducation() {
    const grid = $('educationGrid');
    grid.innerHTML = '';
    [
        { data: PORTFOLIO.sma, tahap: 'Tahap I • Masa SMA', label: 'KELUARGA 12 C.jpeg' },
        { data: PORTFOLIO.kuliah, tahap: 'Tahap II • Perkuliahan', label: 'Foto Perkuliahan' }
    ].forEach(({ data, tahap, label }) => {
        const card = document.createElement('div');
        card.className = 'royal-card rounded-2xl p-6 sm:p-7 reveal-up visible';
        card.innerHTML = `${corners}
            <div class="flex items-center justify-between gap-2 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-cinzel font-bold tracking-wider uppercase border" style="background: var(--badge-bg); border-color: var(--border-highlight); color: var(--badge-text);">${esc(tahap)}</span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-lg" style="background: var(--bg-secondary); color: var(--text-secondary);">${esc(data.tahun)}</span>
            </div>
            <div class="photo-slot"></div>
            <h3 class="font-cinzel text-xl font-bold leading-snug">${esc(data.nama)}</h3>
            <p class="text-sm font-semibold mt-1" style="color: var(--accent-primary);">${esc(data.jurusan)}</p>
            <p class="text-xs sm:text-sm leading-relaxed mt-3" style="color: var(--text-secondary);">${esc(data.deskripsi)}</p>`;
        card.querySelector('.photo-slot').replaceWith(photoFrame(data.foto, label, 'h-64 sm:h-72'));
        grid.appendChild(card);
    });
}

function renderGallery() {
    const grid = $('galleryGrid');
    grid.innerHTML = '';
    PORTFOLIO.galeri.slice(0, 5).forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'royal-card rounded-2xl p-4 sm:p-5 reveal-up visible';
        card.innerHTML = `${corners}
            <div class="flex items-center justify-between gap-2 mb-3">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-cinzel font-bold tracking-wider uppercase border" style="background: var(--badge-bg); border-color: var(--border-highlight); color: var(--badge-text);">Kenangan ${ROMAN[i]}</span>
                <span class="text-[11px] truncate max-w-[130px]" style="color: var(--text-muted);">${esc(item.momen)}</span>
            </div>
            <div class="photo-slot"></div>
            <h3 class="font-cinzel text-base font-bold leading-snug mb-1.5">${esc(item.judul)}</h3>
            <p class="text-xs leading-relaxed" style="color: var(--text-secondary);">${esc(item.cerita)}</p>`;
        card.querySelector('.photo-slot').replaceWith(
            photoFrame(item.foto, `Bingkai Foto ${i + 1}`, 'h-52', () => openLightbox(i))
        );
        grid.appendChild(card);
    });
}

function renderMaterials() {
    const grid = $('materialsGrid');
    grid.innerHTML = '';
    PORTFOLIO.materi.slice(0, 4).forEach((m, i) => {
        const card = document.createElement('div');
        card.className = 'royal-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal-up visible';
        card.innerHTML = `${corners}
            <div>
                <div class="flex items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-full text-xs font-cinzel font-bold tracking-wider uppercase border" style="background: var(--badge-bg); border-color: var(--border-highlight); color: var(--badge-text);">Kitab ${ROMAN[i]}</span>
                    <span class="text-xs font-medium px-2.5 py-1 rounded-lg" style="background: var(--bg-secondary); color: var(--text-secondary);">${esc(m.kategori)}</span>
                </div>
                <h3 class="font-cinzel text-xl font-bold mb-2.5 leading-snug">${esc(m.judul)}</h3>
                <p class="text-xs sm:text-sm leading-relaxed mb-6" style="color: var(--text-secondary);">${esc(m.ringkasan)}</p>
            </div>
            <div class="pt-4 border-t" style="border-color: var(--border-color);">
                <button onclick="openMaterial(${i})" class="btn-epic px-4 py-2.5 rounded-xl text-xs font-cinzel font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                    <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Baca Materi
                </button>
            </div>`;
        grid.appendChild(card);
    });
}

// ---------------- MODAL ----------------
function show(id) { const m = $(id); m.classList.remove('hidden'); m.classList.add('flex'); lucide.createIcons(); }
function hide(id) { const m = $(id); m.classList.add('hidden'); m.classList.remove('flex'); }

function openMaterial(i) {
    const m = PORTFOLIO.materi[i];
    $('materialModalHeading').textContent = `Kitab ${ROMAN[i]} • Arsip Pengetahuan`;
    $('readMatCategory').textContent = m.kategori;
    $('readMatTitle').textContent = m.judul;
    $('readMatContent').textContent = m.isi;
    show('materialModal');
}
function closeMaterial() { hide('materialModal'); }

function openLightbox(i) {
    const g = PORTFOLIO.galeri[i];
    if (!g.foto) return;
    $('lightboxImg').src = g.foto;
    $('lightboxMoment').textContent = g.momen;
    $('lightboxTitle').textContent = g.judul;
    $('lightboxCaption').textContent = g.cerita;
    show('lightboxModal');
}
function closeLightbox() { hide('lightboxModal'); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeMaterial(); closeLightbox(); }
});

// ---------------- TEMA ----------------
function applyTheme(t) {
    theme = t;
    localStorage.setItem(THEME_KEY, t);
    document.documentElement.setAttribute('data-theme', t);
    const light = t === 'light';
    $('themeLabelText').textContent = light ? 'Mode Cahaya' : 'Mode Kegelapan';
    $('themeIconWrap').innerHTML = light
        ? '<i data-lucide="sun" class="w-4 h-4 text-amber-600"></i>'
        : '<i data-lucide="moon" class="w-4 h-4 text-red-500"></i>';
    $('realmSubtitle').textContent = light ? 'Aula Tahta Cahaya' : 'Benteng Kegelapan';
    $('heroRealmBadge').textContent = light ? 'Alam Cahaya • Sang Pelindung Bermahkota Emas' : 'Alam Kegelapan • Ksatria Zirah Baja & Gagak';
    $('crestTitle').textContent = light ? 'KSATRIA CAHAYA' : 'KSATRIA KEGELAPAN';
    $('crestSub').textContent = light ? 'Kebijaksanaan & Kemuliaan' : 'Keteguhan & Keberanian';

    $('knightCrestVisual').innerHTML = light ? `
        <svg class="w-24 h-24 sm:w-28 sm:h-28 mx-auto" viewBox="0 0 120 120" fill="none">
            <defs><linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#fde68a"/><stop offset="100%" stop-color="#b45309"/>
            </linearGradient></defs>
            <circle cx="60" cy="60" r="46" stroke="url(#goldGrad)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <path d="M32 76C32 42 44 24 60 24C76 24 88 42 88 76L78 96H42L32 76Z" fill="url(#goldGrad)" fill-opacity="0.18" stroke="url(#goldGrad)" stroke-width="2.5"/>
            <path d="M44 48C44 38 51 32 60 32C69 32 76 38 76 48V68C76 78 68 86 60 88C52 86 44 78 44 68V48Z" fill="url(#goldGrad)" fill-opacity="0.32" stroke="#92400e" stroke-width="2"/>
            <path d="M46 26L52 16L60 23L68 16L74 26H46Z" fill="url(#goldGrad)" stroke="#92400e" stroke-width="1.5"/>
            <path d="M49 54L56 56L49 58Z" fill="#78350f"/><path d="M71 54L64 56L71 58Z" fill="#78350f"/>
            <path d="M60 52V67" stroke="#92400e" stroke-width="1.8" stroke-linecap="round"/>
        </svg>` : `
        <svg class="w-24 h-24 sm:w-28 sm:h-28 mx-auto" viewBox="0 0 120 120" fill="none">
            <defs><linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e2e8f0"/><stop offset="50%" stop-color="#64748b"/><stop offset="100%" stop-color="#1e293b"/>
            </linearGradient></defs>
            <circle cx="60" cy="60" r="46" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.75"/>
            <path d="M60 16L66 28L78 24L74 38L82 52L76 82L60 96L44 82L38 52L46 38L42 24L54 28L60 16Z" fill="url(#steelGrad)" fill-opacity="0.28" stroke="url(#steelGrad)" stroke-width="2.3"/>
            <path d="M45 50H75L63 56V78H57V56L45 50Z" fill="#dc2626" opacity="0.85"/>
            <path d="M60 28V48M44 64L55 68M76 64L65 68" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`;
    lucide.createIcons();
}
function toggleDualityTheme() { applyTheme(theme === 'dark' ? 'light' : 'dark'); }

// ---------------- SCROLL REVEAL ----------------
function initScrollReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal-up').forEach(el => obs.observe(el));
}

// ---------------- PARTIKEL ----------------
const canvas = $('dualityCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() { canvas.width = innerWidth; canvas.height = innerHeight; }

class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height : (theme === 'light' ? canvas.height + 15 : -15);
        this.size = Math.random() * 3.2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.9;
        this.speedY = Math.random() * 0.85 + 0.25;
        this.alpha = Math.random() * 0.65 + 0.15;
        this.wobble = Math.random() * Math.PI * 2;
    }
    update() {
        this.wobble += 0.025;
        this.x += this.speedX + Math.sin(this.wobble) * 0.35;
        this.y += theme === 'light' ? -this.speedY : this.speedY;
        if (theme === 'light' && this.y < -20) this.reset();
        if (theme === 'dark' && this.y > canvas.height + 20) this.reset();
        if (this.x < -20 || this.x > canvas.width + 20) this.x = Math.random() * canvas.width;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        if (theme === 'light') {
            const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2.5);
            g.addColorStop(0, '#fffbeb'); g.addColorStop(0.4, '#f59e0b'); g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2); ctx.fill();
        } else {
            const ember = this.size > 2.6;
            ctx.fillStyle = ember ? '#ef4444' : '#94a3b8';
            ctx.beginPath();
            if (ember) ctx.arc(this.x, this.y, this.size * 0.9, 0, Math.PI * 2);
            else ctx.ellipse(this.x, this.y, this.size * 1.4, this.size * 0.5, this.wobble, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}

function initParticles() {
    const n = Math.min(75, Math.floor((innerWidth * innerHeight) / 18000));
    particles = Array.from({ length: n }, () => new Particle());
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

addEventListener('resize', () => { resizeCanvas(); initParticles(); });

// ---------------- MUSIK ----------------
const bgMusic = $('bgMusic');
bgMusic.volume = 0.5; // 0.0 - 1.0, ubah sesuai selera

function updateMusicUI() {
    const playing = !bgMusic.paused;
    $('musicBtn').classList.toggle('playing', playing);
    $('musicIconWrap').innerHTML = playing
        ? '<i data-lucide="volume-2" class="w-5 h-5"></i>'
        : '<i data-lucide="volume-x" class="w-5 h-5"></i>';
    lucide.createIcons();
}

function toggleMusic() {
    if (bgMusic.paused) bgMusic.play().then(updateMusicUI).catch(() => {});
    else { bgMusic.pause(); updateMusicUI(); }
    $('musicHint').classList.remove('show');
}

function autoPlayMusic() {
    bgMusic.play().then(updateMusicUI).catch(() => {
        // Autoplay diblokir browser: mulai saat interaksi pertama
        $('musicHint').classList.add('show');
        const events = ['click', 'touchstart', 'keydown', 'wheel'];
        const start = () => {
            bgMusic.play().then(() => {
                updateMusicUI();
                $('musicHint').classList.remove('show');
            }).catch(() => {});
            events.forEach(ev => removeEventListener(ev, start));
        };
        events.forEach(ev => addEventListener(ev, start, { passive: true }));
    });
}

// Shortcut keyboard: tekan M untuk play/pause
addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm' && !e.ctrlKey && !e.metaKey && !e.altKey) toggleMusic();
});
bgMusic.addEventListener('play', updateMusicUI);
bgMusic.addEventListener('pause', updateMusicUI);

window.onload = () => {
    resizeCanvas(); initParticles(); animate();
    renderProfile(); renderEducation(); renderGallery(); renderMaterials();
    applyTheme(theme);
    initScrollReveal();
    lucide.createIcons();
    updateMusicUI();
    autoPlayMusic();
};
