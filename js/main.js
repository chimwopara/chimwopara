    // ===== YEAR =====
    document.getElementById('year').textContent = new Date().getFullYear();

    // ===== NAV SCROLL =====
    const nav = document.getElementById('site-nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    // ===== SCROLL REVEAL =====
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                revealObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ===== 3D HERO TILT =====
    const hero3d = document.getElementById('hero-3d');
    if (hero3d) {
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            hero3d.style.animation = 'none';
            hero3d.style.transform = `rotateX(${y * -8}deg) rotateY(${x * 8}deg)`;
        });
        heroSection.addEventListener('mouseleave', () => {
            hero3d.style.animation = '';
            hero3d.style.transform = '';
        });
    }

    // ===== WEBSITE BUILDER DEMO =====
    const actionCategories = [
        {
            name: 'Layout',
            actions: [
                { id: 'navbar', label: 'Navbar', icon: 'fa-bars', type: 'append' },
                { id: 'hero', label: 'Hero Section', icon: 'fa-heading', type: 'append' },
                { id: 'hero-img', label: 'Hero Image', icon: 'fa-image', type: 'modify', target: 'hero-section' },
                { id: 'features', label: 'Features Grid', icon: 'fa-th-large', type: 'append' },
                { id: 'two-col', label: 'Two Column', icon: 'fa-columns', type: 'append' },
                { id: 'cta-banner', label: 'CTA Banner', icon: 'fa-bullhorn', type: 'append' },
                { id: 'footer', label: 'Footer', icon: 'fa-shoe-prints', type: 'append' },
            ]
        },
        {
            name: 'Content',
            actions: [
                { id: 'testimonials', label: 'Testimonials', icon: 'fa-comment-alt', type: 'append' },
                { id: 'faq', label: 'FAQ Section', icon: 'fa-question-circle', type: 'append' },
                { id: 'team', label: 'Team Grid', icon: 'fa-users', type: 'append' },
                { id: 'stats', label: 'Stats Counter', icon: 'fa-chart-line', type: 'append' },
                { id: 'timeline', label: 'Timeline', icon: 'fa-clock', type: 'append' },
                { id: 'blog', label: 'Blog Grid', icon: 'fa-newspaper', type: 'append' },
                { id: 'gallery', label: 'Image Gallery', icon: 'fa-images', type: 'append' },
                { id: 'video', label: 'Video Embed', icon: 'fa-play-circle', type: 'append' },
            ]
        },
        {
            name: 'Commerce',
            actions: [
                { id: 'pricing', label: 'Pricing Table', icon: 'fa-tag', type: 'append' },
                { id: 'product-card', label: 'Product Card', icon: 'fa-box', type: 'append' },
                { id: 'cart', label: 'Mini Cart', icon: 'fa-shopping-cart', type: 'overlay' },
                { id: 'badges', label: 'Trust Badges', icon: 'fa-shield-alt', type: 'append' },
                { id: 'countdown', label: 'Countdown', icon: 'fa-hourglass-half', type: 'append' },
            ]
        },
        {
            name: 'Forms',
            actions: [
                { id: 'newsletter', label: 'Newsletter', icon: 'fa-envelope', type: 'append' },
                { id: 'contact', label: 'Contact Form', icon: 'fa-paper-plane', type: 'append' },
                { id: 'login', label: 'Login Modal', icon: 'fa-user-circle', type: 'modify', target: 'navbar' },
                { id: 'search', label: 'Search Bar', icon: 'fa-search', type: 'modify', target: 'navbar' },
                { id: 'survey', label: 'Survey Form', icon: 'fa-poll', type: 'append' },
            ]
        },
        {
            name: 'Widgets',
            actions: [
                { id: 'chat', label: 'Chat Widget', icon: 'fa-comments', type: 'overlay' },
                { id: 'social', label: 'Social Links', icon: 'fa-share-alt', type: 'append' },
                { id: 'back-to-top', label: 'Back to Top', icon: 'fa-arrow-up', type: 'overlay' },
                { id: 'cookie', label: 'Cookie Banner', icon: 'fa-cookie-bite', type: 'overlay' },
                { id: 'notification', label: 'Notification', icon: 'fa-bell', type: 'overlay' },
                { id: 'progress', label: 'Progress Bar', icon: 'fa-tasks', type: 'overlay' },
            ]
        },
        {
            name: 'Style',
            actions: [
                { id: 'dark-mode', label: 'Dark Mode', icon: 'fa-moon', type: 'style', target: 'site-container', class: 'bg-dark-mode' },
                { id: 'rounded', label: 'Round Corners', icon: 'fa-circle-notch', type: 'style-global', class: 'rounded-2xl' },
                { id: 'shadows', label: 'Add Shadows', icon: 'fa-cloud', type: 'style-global', class: 'shadow-xl' },
                { id: 'gradient-bg', label: 'Gradient BG', icon: 'fa-palette', type: 'style', target: 'site-container', class: 'bg-gradient' },
                { id: 'borders', label: 'Add Borders', icon: 'fa-border-all', type: 'style-global', class: 'bordered' },
            ]
        },
        {
            name: 'Advanced',
            actions: [
                { id: 'skeleton', label: 'Skeleton Load', icon: 'fa-spinner', type: 'append' },
                { id: 'tabs', label: 'Tab Component', icon: 'fa-folder', type: 'append' },
                { id: 'accordion', label: 'Accordion', icon: 'fa-chevron-down', type: 'append' },
                { id: 'carousel', label: 'Carousel', icon: 'fa-arrows-alt-h', type: 'append' },
                { id: 'modal', label: 'Modal Popup', icon: 'fa-window-restore', type: 'overlay' },
            ]
        }
    ];

    let activeActions = new Set();
    let virtualAccent = '#3b82f6';
    const actionGrid = document.getElementById('action-grid');
    const siteContainer = document.getElementById('site-container');
    const emptyState = document.getElementById('empty-state');

    // Build chip UI
    actionCategories.forEach(cat => {
        const label = document.createElement('div');
        label.className = 'chip-category-label';
        label.textContent = cat.name;
        actionGrid.appendChild(label);

        const grid = document.createElement('div');
        grid.className = 'chip-grid';
        cat.actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = 'chip';
            btn.innerHTML = `<i class="fa-solid ${action.icon}"></i> ${action.label}`;
            btn.onclick = () => toggleAction(action, btn);
            grid.appendChild(btn);
        });
        actionGrid.appendChild(grid);
    });

    function updateEmptyState() {
        const overlayContainer = document.getElementById('overlay-container');
        const hasMain = siteContainer.children.length > 0;
        const hasOverlay = overlayContainer.children.length > 0;
        if (hasMain || hasOverlay) {
            emptyState.classList.add('hidden');
        } else {
            emptyState.classList.remove('hidden');
        }
    }

    function changeAccentColor(color, swatch) {
        virtualAccent = color;
        document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        siteContainer.querySelectorAll('.virtual-btn').forEach(b => {
            b.style.backgroundColor = color;
            b.style.color = isLight(color) ? '#000' : '#fff';
        });
        siteContainer.querySelectorAll('.virtual-icon').forEach(i => i.style.backgroundColor = color);
    }

    function toggleAction(action, btn) {
        if (activeActions.has(action.id)) {
            removeComponent(action);
            activeActions.delete(action.id);
            btn.classList.remove('active');
        } else {
            executeAction(action);
            activeActions.add(action.id);
            btn.classList.add('active');
        }
        updateEmptyState();
    }

    function executeAction(action) {
        switch(action.type) {
            case 'append': appendComponent(action.id); break;
            case 'overlay': addOverlay(action.id); break;
            case 'style':
                const el = document.getElementById(action.target);
                if (el) el.classList.add(...action.class.split(' '));
                if (action.id === 'dark-mode') {
                    const n = document.querySelector('#comp-navbar nav');
                    if (n) { n.style.background = '#1f2937'; n.style.borderColor = '#374151'; n.style.color = '#fff'; }
                    siteContainer.style.background = '#111827';
                    siteContainer.style.color = '#e5e7eb';
                }
                if (action.id === 'gradient-bg') {
                    siteContainer.style.background = 'linear-gradient(135deg, #f8fafc, #e2e8f0)';
                }
                break;
            case 'style-global': applyGlobalStyle(action.class); break;
            case 'modify': modifyComponent(action.id, action.target, true); break;
        }
        if (action.type === 'append') {
            setTimeout(() => {
                document.getElementById('scroll-container').scrollTo({ top: 99999, behavior: 'smooth' });
            }, 50);
        }
    }

    function removeComponent(action) {
        if (action.type === 'append' || action.type === 'overlay') {
            document.getElementById(`comp-${action.id}`)?.remove();
        } else if (action.type === 'style') {
            const el = document.getElementById(action.target);
            if (el) el.classList.remove(...action.class.split(' '));
            if (action.id === 'dark-mode') {
                const n = document.querySelector('#comp-navbar nav');
                if (n) { n.style.background = ''; n.style.borderColor = ''; n.style.color = ''; }
                siteContainer.style.background = '';
                siteContainer.style.color = '';
            }
            if (action.id === 'gradient-bg') {
                siteContainer.style.background = '';
            }
        } else if (action.type === 'style-global') {
            removeGlobalStyle(action.class);
        } else if (action.type === 'modify') {
            modifyComponent(action.id, action.target, false);
        }
    }

    const orderMap = {
        'navbar':1,'hero':2,'stats':10,'features':20,'two-col':30,'video':35,
        'testimonials':40,'team':50,'timeline':55,'gallery':60,'blog':70,'faq':80,
        'pricing':90,'product-card':95,'cta-banner':100,'badges':105,'countdown':110,
        'newsletter':120,'contact':130,'survey':135,'social':140,'skeleton':145,
        'tabs':150,'accordion':155,'carousel':160,'footer':9999
    };

    function appendComponent(id) {
        const div = document.createElement('div');
        div.id = `comp-${id}`;
        div.className = 'animate-pop';
        div.style.order = orderMap[id] || 500;

        const templates = {
            'navbar': `<nav style="position:sticky;top:0;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:12px 24px;display:flex;justify-content:space-between;align-items:center;z-index:10;"><div style="font-weight:700;font-size:1.1rem;color:${virtualAccent};">Startup.io</div><div id="nav-links" style="display:flex;align-items:center;gap:16px;font-size:0.85rem;color:#6b7280;"><span>Product</span><span>Pricing</span></div></nav>`,
            'hero': `<section id="hero-section" style="padding:48px 32px;text-align:center;"><span style="display:inline-block;padding:4px 12px;font-size:0.7rem;border-radius:100px;color:#fff;margin-bottom:12px;background:${virtualAccent};">v2.0 Released</span><h1 style="font-size:2rem;font-weight:700;margin-bottom:8px;">Build faster than ever.</h1><p style="color:#6b7280;font-size:0.85rem;margin-bottom:20px;max-width:400px;margin-left:auto;margin-right:auto;">The ultimate platform for creators who want to ship.</p><div style="display:flex;gap:8px;justify-content:center;"><button class="virtual-btn" style="padding:8px 24px;border-radius:8px;color:#fff;font-weight:600;font-size:0.85rem;border:none;cursor:pointer;background:${virtualAccent};">Get Started</button><button style="padding:8px 24px;border-radius:8px;border:1px solid #d1d5db;background:transparent;font-size:0.85rem;cursor:pointer;">Learn More</button></div></section>`,
            'features': `<section style="padding:40px 32px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">${['Fast Deploys','Auto-Scaling','Analytics','SSL Included'].map(f=>`<div style="padding:16px;border:1px solid #e5e7eb;border-radius:8px;"><div class="virtual-icon" style="width:32px;height:32px;border-radius:6px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;color:#fff;background:${virtualAccent};"><i class="fa-solid fa-check" style="font-size:0.7rem;"></i></div><div style="font-weight:600;font-size:0.85rem;">${f}</div></div>`).join('')}</section>`,
            'two-col': `<section style="padding:40px 32px;display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center;"><div style="aspect-ratio:16/10;background:#f3f4f6;border-radius:8px;"></div><div><h3 style="font-size:1.2rem;font-weight:700;margin-bottom:8px;">Why choose us?</h3><p style="color:#6b7280;font-size:0.85rem;margin-bottom:12px;">We help you ship faster with less complexity.</p><button class="virtual-btn" style="padding:8px 16px;border-radius:6px;color:#fff;font-size:0.8rem;border:none;cursor:pointer;background:${virtualAccent};">Learn More</button></div></section>`,
            'cta-banner': `<section style="padding:32px;margin:16px;border-radius:12px;text-align:center;color:#fff;background:${virtualAccent};"><h3 style="font-size:1.2rem;font-weight:700;margin-bottom:8px;">Ready to get started?</h3><p style="font-size:0.85rem;opacity:0.8;margin-bottom:12px;">Join thousands of creators today.</p><button style="padding:8px 24px;background:#fff;border:none;border-radius:6px;font-weight:600;font-size:0.85rem;cursor:pointer;color:${virtualAccent};">Start Free</button></section>`,
            'footer': `<footer style="padding:24px;text-align:center;font-size:0.72rem;color:#9ca3af;border-top:1px solid #e5e7eb;background:#f9fafb;">&copy; ${new Date().getFullYear()} Startup Inc.</footer>`,
            'testimonials': `<section style="padding:40px 32px;"><div style="padding:16px;border-left:3px solid ${virtualAccent};background:#f9fafb;"><p style="font-style:italic;font-size:0.85rem;color:#4b5563;">"Saved me 100+ hours."</p><div style="font-weight:600;font-size:0.75rem;margin-top:8px;">— Sarah J.</div></div></section>`,
            'faq': `<section style="padding:40px 32px;"><h3 style="font-weight:700;margin-bottom:16px;font-size:1.1rem;">FAQ</h3><div style="display:flex;flex-direction:column;gap:8px;"><div style="padding:12px;border:1px solid #e5e7eb;border-radius:6px;"><div style="font-weight:600;font-size:0.85rem;">How do I get started?</div><div style="font-size:0.75rem;color:#6b7280;margin-top:4px;">Sign up and follow the onboarding flow.</div></div><div style="padding:12px;border:1px solid #e5e7eb;border-radius:6px;"><div style="font-weight:600;font-size:0.85rem;">Is there a free tier?</div><div style="font-size:0.75rem;color:#6b7280;margin-top:4px;">Yes, you can start for free forever.</div></div></div></section>`,
            'team': `<section style="padding:40px 32px;"><h3 style="font-weight:700;margin-bottom:16px;font-size:1.1rem;">Our Team</h3><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;text-align:center;">${['Alice','Bob','Carol'].map(n=>`<div><div style="width:40px;height:40px;border-radius:50%;background:#e5e7eb;margin:0 auto 8px;"></div><div style="font-size:0.75rem;font-weight:600;">${n}</div></div>`).join('')}</div></section>`,
            'stats': `<section style="padding:40px 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;text-align:center;">${[['10K+','Users'],['99%','Uptime'],['24/7','Support']].map(([v,l])=>`<div><div style="font-size:1.8rem;font-weight:700;color:${virtualAccent};">${v}</div><div style="font-size:0.72rem;color:#6b7280;">${l}</div></div>`).join('')}</section>`,
            'timeline': `<section style="padding:40px 32px;"><h3 style="font-weight:700;margin-bottom:16px;font-size:1.1rem;">Roadmap</h3><div style="border-left:2px solid ${virtualAccent};padding-left:16px;display:flex;flex-direction:column;gap:12px;">${[['Q1','Beta Launch'],['Q2','Public Release'],['Q3','Enterprise Tier']].map(([q,t])=>`<div><div style="font-size:0.65rem;color:#9ca3af;">${q}</div><div style="font-weight:600;font-size:0.85rem;">${t}</div></div>`).join('')}</div></section>`,
            'blog': `<section style="padding:40px 32px;"><h3 style="font-weight:700;margin-bottom:16px;font-size:1.1rem;">Latest News</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">${['Launch Day','New Features'].map(t=>`<div><div style="aspect-ratio:16/10;background:#e5e7eb;border-radius:6px;margin-bottom:6px;"></div><div style="font-size:0.85rem;font-weight:600;">${t}</div></div>`).join('')}</div></section>`,
            'gallery': `<section style="padding:40px 32px;"><h3 style="font-weight:700;margin-bottom:16px;font-size:1.1rem;">Gallery</h3><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;"><div style="aspect-ratio:1;background:#e5e7eb;border-radius:6px;"></div><div style="aspect-ratio:1;background:#e5e7eb;border-radius:6px;"></div><div style="aspect-ratio:1;background:#e5e7eb;border-radius:6px;"></div></div></section>`,
            'video': `<section style="padding:40px 32px;"><div style="aspect-ratio:16/9;background:#111;border-radius:8px;display:flex;align-items:center;justify-content:center;"><div style="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;cursor:pointer;background:${virtualAccent};"><i class="fa-solid fa-play" style="margin-left:3px;"></i></div></div></section>`,
            'pricing': `<section style="padding:40px 32px;display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div style="padding:16px;border:1px solid #e5e7eb;border-radius:8px;text-align:center;"><div style="font-weight:600;font-size:0.85rem;">Hobby</div><div style="font-size:1.5rem;font-weight:700;margin:8px 0;">$0</div><button style="width:100%;padding:6px;background:#e5e7eb;border:none;border-radius:4px;font-size:0.75rem;cursor:pointer;">Start</button></div><div style="padding:16px;border-radius:8px;text-align:center;color:#fff;box-shadow:0 4px 20px rgba(0,0,0,0.15);background:${virtualAccent};"><div style="font-weight:600;font-size:0.85rem;">Pro</div><div style="font-size:1.5rem;font-weight:700;margin:8px 0;">$29</div><button style="width:100%;padding:6px;background:#fff;border:none;border-radius:4px;font-size:0.75rem;font-weight:600;cursor:pointer;color:${virtualAccent};">Upgrade</button></div></section>`,
            'product-card': `<section style="padding:40px 32px;"><div style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;max-width:240px;margin:0 auto;"><div style="aspect-ratio:1;background:#f3f4f6;border-radius:6px;margin-bottom:12px;"></div><div style="font-weight:700;font-size:0.9rem;">Product Name</div><p style="font-size:0.75rem;color:#6b7280;margin:4px 0 8px;">Short description here</p><div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-weight:700;color:${virtualAccent};">$49</span><button class="virtual-btn" style="padding:4px 12px;border-radius:4px;color:#fff;font-size:0.7rem;border:none;cursor:pointer;background:${virtualAccent};">Add to Cart</button></div></div></section>`,
            'badges': `<section style="padding:24px 32px;display:flex;justify-content:center;gap:24px;opacity:0.4;"><i class="fa-solid fa-lock" style="font-size:1.5rem;"></i><i class="fa-solid fa-shield-halved" style="font-size:1.5rem;"></i><i class="fa-brands fa-cc-visa" style="font-size:1.5rem;"></i><i class="fa-brands fa-cc-mastercard" style="font-size:1.5rem;"></i></section>`,
            'countdown': `<section style="padding:24px 32px;text-align:center;"><p style="font-size:0.8rem;color:#6b7280;margin-bottom:8px;">Offer ends in</p><div style="display:flex;justify-content:center;gap:16px;">${[['02','Days'],['14','Hours'],['32','Mins']].map(([v,l])=>`<div><span style="font-size:1.8rem;font-weight:700;color:${virtualAccent};">${v}</span><div style="font-size:0.65rem;">${l}</div></div>`).join('')}</div></section>`,
            'newsletter': `<section style="padding:32px;margin:16px;border-radius:12px;text-align:center;color:#fff;background:${virtualAccent};"><h3 style="font-size:1.1rem;font-weight:700;margin-bottom:4px;">Stay updated</h3><p style="font-size:0.72rem;opacity:0.8;margin-bottom:12px;">No spam. Unsubscribe anytime.</p><div style="display:flex;gap:6px;max-width:260px;margin:0 auto;"><input type="text" placeholder="you@email.com" style="flex:1;padding:8px 12px;border-radius:6px;border:none;font-size:0.75rem;"><button style="padding:8px 16px;background:rgba(0,0,0,0.2);color:#fff;border:none;border-radius:6px;font-size:0.72rem;font-weight:600;cursor:pointer;">Go</button></div></section>`,
            'contact': `<section style="padding:40px 32px;max-width:300px;margin:0 auto;"><input style="width:100%;border:1px solid #e5e7eb;border-radius:6px;padding:8px;margin-bottom:8px;font-size:0.8rem;" placeholder="Name"><textarea style="width:100%;border:1px solid #e5e7eb;border-radius:6px;padding:8px;margin-bottom:8px;font-size:0.8rem;resize:none;" rows="3" placeholder="Message"></textarea><button class="virtual-btn" style="width:100%;padding:8px;border-radius:6px;color:#fff;font-weight:600;font-size:0.85rem;border:none;cursor:pointer;background:${virtualAccent};">Send</button></section>`,
            'survey': `<section style="padding:40px 32px;max-width:300px;margin:0 auto;"><h3 style="font-weight:700;margin-bottom:12px;font-size:1rem;">Quick Survey</h3><div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px;">${['Option A','Option B','Option C'].map(o=>`<label style="display:flex;align-items:center;gap:8px;font-size:0.8rem;"><input type="radio" name="survey"> ${o}</label>`).join('')}</div><button class="virtual-btn" style="width:100%;padding:8px;border-radius:6px;color:#fff;font-weight:600;font-size:0.85rem;border:none;cursor:pointer;background:${virtualAccent};">Submit</button></section>`,
            'social': `<section style="padding:24px 32px;display:flex;justify-content:center;gap:12px;">${['fa-brands fa-twitter','fa-brands fa-linkedin','fa-brands fa-github'].map(i=>`<a style="width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;background:${virtualAccent};"><i class="${i}"></i></a>`).join('')}</section>`,
            'skeleton': `<section style="padding:40px 32px;display:flex;flex-direction:column;gap:12px;"><div style="height:12px;background:#e5e7eb;border-radius:6px;width:75%;animation:skeleton-pulse 1.5s infinite;"></div><div style="height:12px;background:#e5e7eb;border-radius:6px;width:50%;animation:skeleton-pulse 1.5s infinite;"></div><div style="height:80px;background:#e5e7eb;border-radius:6px;animation:skeleton-pulse 1.5s infinite;"></div></section>`,
            'tabs': `<section style="padding:40px 32px;"><div style="display:flex;border-bottom:1px solid #e5e7eb;margin-bottom:12px;"><button style="padding:8px 16px;font-size:0.8rem;font-weight:600;border:none;background:none;border-bottom:2px solid ${virtualAccent};color:${virtualAccent};cursor:pointer;">Tab 1</button><button style="padding:8px 16px;font-size:0.8rem;color:#9ca3af;border:none;background:none;cursor:pointer;">Tab 2</button><button style="padding:8px 16px;font-size:0.8rem;color:#9ca3af;border:none;background:none;cursor:pointer;">Tab 3</button></div><div style="padding:12px;background:#f9fafb;border-radius:6px;font-size:0.8rem;">Tab content goes here...</div></section>`,
            'accordion': `<section style="padding:40px 32px;display:flex;flex-direction:column;gap:6px;"><div style="border:1px solid #e5e7eb;border-radius:6px;"><div style="padding:10px;font-weight:600;font-size:0.85rem;display:flex;justify-content:space-between;cursor:pointer;">Item 1 <i class="fa-solid fa-chevron-down" style="font-size:0.65rem;"></i></div><div style="padding:10px;font-size:0.8rem;color:#6b7280;border-top:1px solid #e5e7eb;">Content for item 1</div></div><div style="border:1px solid #e5e7eb;border-radius:6px;"><div style="padding:10px;font-weight:600;font-size:0.85rem;display:flex;justify-content:space-between;cursor:pointer;">Item 2 <i class="fa-solid fa-chevron-down" style="font-size:0.65rem;"></i></div></div></section>`,
            'carousel': `<section style="padding:40px 32px;"><div style="display:flex;align-items:center;gap:12px;"><button style="width:28px;height:28px;border-radius:50%;border:1px solid #d1d5db;background:none;display:flex;align-items:center;justify-content:center;cursor:pointer;"><i class="fa-solid fa-chevron-left" style="font-size:0.6rem;"></i></button><div style="flex:1;aspect-ratio:16/9;background:#e5e7eb;border-radius:8px;"></div><button style="width:28px;height:28px;border-radius:50%;border:1px solid #d1d5db;background:none;display:flex;align-items:center;justify-content:center;cursor:pointer;"><i class="fa-solid fa-chevron-right" style="font-size:0.6rem;"></i></button></div><div style="display:flex;justify-content:center;gap:6px;margin-top:12px;"><div style="width:6px;height:6px;border-radius:50%;background:${virtualAccent};"></div><div style="width:6px;height:6px;border-radius:50%;background:#d1d5db;"></div><div style="width:6px;height:6px;border-radius:50%;background:#d1d5db;"></div></div></section>`,
        };

        div.innerHTML = templates[id] || '';
        siteContainer.appendChild(div);
    }

    function addOverlay(id) {
        const oc = document.getElementById('overlay-container');
        const div = document.createElement('div');
        div.id = `comp-${id}`;
        div.className = 'animate-pop';
        div.style.pointerEvents = 'auto';

        const overlays = {
            'chat': `<div style="position:absolute;bottom:12px;right:12px;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);background:${virtualAccent};"><i class="fa-solid fa-comment-dots"></i></div>`,
            'cart': `<div style="position:absolute;top:12px;right:12px;background:#fff;box-shadow:0 4px 20px rgba(0,0,0,0.15);border-radius:8px;padding:12px;width:160px;border:1px solid #e5e7eb;"><div style="font-weight:600;font-size:0.8rem;margin-bottom:6px;">Cart (2)</div><div style="font-size:0.7rem;color:#6b7280;margin-bottom:8px;">2 items · $78</div><button style="width:100%;padding:6px;border-radius:4px;color:#fff;border:none;font-size:0.7rem;font-weight:600;cursor:pointer;background:${virtualAccent};">Checkout</button></div>`,
            'back-to-top': `<div style="position:absolute;bottom:12px;left:12px;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);background:${virtualAccent};"><i class="fa-solid fa-arrow-up" style="font-size:0.75rem;"></i></div>`,
            'cookie': `<div style="position:absolute;bottom:0;left:0;right:0;background:#111;color:#fff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:0.72rem;">We use cookies 🍪</span><button style="padding:4px 12px;border-radius:4px;font-size:0.7rem;font-weight:600;border:none;color:#fff;cursor:pointer;background:${virtualAccent};">Accept</button></div>`,
            'notification': `<div style="position:absolute;top:12px;right:12px;background:#fff;box-shadow:0 4px 20px rgba(0,0,0,0.15);border-radius:8px;padding:10px;width:180px;border-left:3px solid ${virtualAccent};"><div style="font-weight:600;font-size:0.8rem;">New Message</div><div style="font-size:0.68rem;color:#6b7280;">3 unread notifications</div></div>`,
            'progress': `<div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(to right,${virtualAccent} 60%,#e5e7eb 60%);"></div>`,
            'modal': `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;"><div style="background:#fff;border-radius:12px;padding:24px;width:200px;text-align:center;"><h3 style="font-weight:700;margin-bottom:6px;font-size:1rem;">Welcome!</h3><p style="font-size:0.8rem;color:#6b7280;margin-bottom:12px;">Sign up for updates</p><button style="width:100%;padding:8px;border-radius:6px;color:#fff;font-weight:600;font-size:0.85rem;border:none;cursor:pointer;background:${virtualAccent};">Subscribe</button></div></div>`,
        };

        div.innerHTML = overlays[id] || '';
        oc.appendChild(div);
    }

    function modifyComponent(id, targetId, add) {
        if (id === 'hero-img') {
            const section = document.querySelector('#comp-hero #hero-section');
            if (!section) return;
            if (add) {
                const img = document.createElement('div');
                img.id = 'added-hero-img';
                img.className = 'animate-pop';
                img.style.cssText = 'margin-top:24px;height:140px;width:100%;border-radius:8px;background:#e2e8f0 url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop") center/cover;opacity:0.9;';
                section.appendChild(img);
            } else {
                document.getElementById('added-hero-img')?.remove();
            }
        } else if (id === 'login') {
            const nav = document.querySelector('#comp-navbar #nav-links');
            if (!nav) return;
            if (add) {
                const btn = document.createElement('div');
                btn.id = 'added-login-btn';
                btn.className = 'animate-pop';
                btn.style.cssText = 'width:28px;height:28px;border-radius:50%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;color:#6b7280;font-size:0.7rem;cursor:pointer;';
                btn.innerHTML = '<i class="fa-solid fa-user"></i>';
                nav.appendChild(btn);
            } else {
                document.getElementById('added-login-btn')?.remove();
            }
        } else if (id === 'search') {
            const nav = document.querySelector('#comp-navbar #nav-links');
            if (!nav) return;
            if (add) {
                const s = document.createElement('div');
                s.id = 'added-search';
                s.className = 'animate-pop';
                s.style.cssText = 'display:flex;align-items:center;gap:6px;padding:4px 12px;border-radius:6px;border:1px solid #e5e7eb;color:#9ca3af;font-size:0.72rem;';
                s.innerHTML = '<i class="fa-solid fa-search"></i> Search...';
                nav.appendChild(s);
            } else {
                document.getElementById('added-search')?.remove();
            }
        }
    }

    function applyGlobalStyle(cls) {
        siteContainer.querySelectorAll('div, section, nav, button, input').forEach(el => {
            if (shouldApplyStyle(el, cls)) el.classList.add(...cls.split(' '));
        });
    }
    function removeGlobalStyle(cls) {
        siteContainer.querySelectorAll('*').forEach(el => el.classList.remove(...cls.split(' ')));
    }
    function shouldApplyStyle(el, type) {
        const tag = el.tagName;
        if (type.includes('rounded')) return tag === 'SECTION' || tag === 'BUTTON' || tag === 'INPUT' || el.style.borderRadius;
        if (type.includes('shadow')) return tag === 'NAV' || tag === 'BUTTON' || el.style.border;
        if (type.includes('bordered')) return tag === 'SECTION';
        return false;
    }
    function isLight(c) { return c === '#f59e0b' || c === '#34d399' || c === '#fbbf24'; }

    function resetDemo() {
        siteContainer.innerHTML = '';
        document.getElementById('overlay-container').innerHTML = '';
        activeActions.clear();
        document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
        siteContainer.style.background = '';
        siteContainer.style.color = '';
        updateEmptyState();
    }

    // ===== OFFICE DEMO =====
    let currentOfficeApp = 'word';

    function switchOfficeApp(app) {
        currentOfficeApp = app;
        // Update tabs
        document.querySelectorAll('.office-tab-btn').forEach(t => {
            t.className = 'office-tab-btn';
        });
        const tab = document.getElementById(`tab-${app}-sidebar`);
        if (app === 'word') tab.classList.add('active-word');
        else if (app === 'excel') tab.classList.add('active-excel');
        else if (app === 'powerpoint') tab.classList.add('active-ppt');

        // Update action groups
        document.querySelectorAll('.office-actions-group').forEach(g => g.classList.add('hidden'));
        const groupId = { word: 'word-actions', excel: 'excel-actions', powerpoint: 'ppt-actions' };
        document.getElementById(groupId[app])?.classList.remove('hidden');

        // Update demo panels
        document.querySelectorAll('.office-demo-panel').forEach(d => d.classList.remove('active'));
        document.getElementById(`demo-${app}`)?.classList.add('active');

        // Update title bar
        const labels = { word: '<i class="fa-solid fa-file-word"></i> Microsoft Word', excel: '<i class="fa-solid fa-file-excel"></i> Microsoft Excel', powerpoint: '<i class="fa-solid fa-file-powerpoint"></i> PowerPoint' };
        document.getElementById('office-app-label').innerHTML = labels[app];
    }

    function resetOfficeDemo() {
        document.getElementById('word-output').style.display = 'none';
        document.getElementById('excel-output').style.display = 'none';
        document.getElementById('ppt-output').style.display = 'none';
        document.querySelectorAll('.office-chip').forEach(b => b.classList.remove('active'));
    }

    function triggerWordAction(action, btn) {
        const output = document.getElementById('word-output');
        const label = document.getElementById('word-output-label');
        const content = document.getElementById('word-output-content');
        document.querySelectorAll('#word-actions .office-chip').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        output.style.display = 'block';

        const t = {
            'report': { l: 'Report Generated', c: `<div style="display:flex;flex-direction:column;gap:0.75rem;"><h3 style="font-weight:700;font-size:1.05rem;border-bottom:1px solid var(--border);padding-bottom:0.5rem;">Q3 Performance Report</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;"><div style="background:rgba(52,211,153,0.1);padding:0.75rem;border-radius:8px;border:1px solid rgba(52,211,153,0.2);"><div style="color:#34d399;font-weight:700;">↑ 23%</div><div style="font-size:0.7rem;color:var(--text-muted);">Sales Growth</div></div><div style="background:rgba(79,143,255,0.1);padding:0.75rem;border-radius:8px;border:1px solid rgba(79,143,255,0.2);"><div style="color:#4f8fff;font-weight:700;">12</div><div style="font-size:0.7rem;color:var(--text-muted);">Team Members</div></div></div><p style="font-size:0.8rem;color:var(--text-secondary);"><strong>Executive Summary:</strong> Q3 exceeded all targets with 23% sales growth. New product launch successful with 3 major client partnerships secured.</p></div>` },
            'summarize': { l: 'Text Summarized', c: `<div style="font-style:italic;border-left:2px solid var(--accent);padding-left:12px;color:var(--text-secondary);">Q3 highlights: 23% sales increase, successful product launch, team grew to 12, exceeded revenue targets, 3 new partnerships.</div>` },
            'rewrite-formal': { l: 'Formal Version', c: `<p style="color:var(--text-secondary);">We are pleased to report that our third-quarter performance demonstrated exceptional growth, with sales increasing by 23% year-over-year. The successful launch of our new product line, combined with strategic team expansion to 12 professionals, has positioned our organization favorably for continued success.</p>` },
            'rewrite-casual': { l: 'Casual Version', c: `<p style="color:var(--text-secondary);">Great news everyone! 🎉 We crushed it in Q3 — sales jumped 23%! The new product launch went super smooth, we've grown to 12 awesome team members, and we beat all our targets. Plus, we just locked in 3 big partnerships!</p>` },
            'expand': { l: 'Content Expanded', c: `<div style="display:flex;flex-direction:column;gap:0.5rem;color:var(--text-secondary);"><p>The third quarter proved to be a period of remarkable growth. Sales demonstrated a robust 23% increase compared to the same period last year.</p><p>The successful flagship product launch was met with enthusiastic market reception. Our marketing campaign generated substantial qualified leads.</p><p>We strategically expanded to 12 dedicated professionals, bringing diverse expertise to operations.</p></div>` },
            'shorten': { l: 'Text Shortened', c: `<p style="color:var(--text-secondary);">Q3: +23% sales, successful launch, 12 team members, targets exceeded, 3 new partners.</p>` },
            'translate-spanish': { l: 'Spanish Translation', c: `<p style="color:var(--text-secondary);">Las ventas del Q3 aumentaron un 23%, el lanzamiento del nuevo producto fue exitoso, el equipo creció a 12 miembros. La campaña de marketing generó buenos clientes potenciales. Los objetivos de ingresos superaron las expectativas.</p>` },
            'translate-french': { l: 'French Translation', c: `<p style="color:var(--text-secondary);">Les ventes du T3 ont augmenté de 23%, le lancement du nouveau produit a été un succès, l'équipe s'est agrandie à 12 membres. La campagne marketing a généré de bons prospects.</p>` },
            'grammar': { l: 'Grammar Fixed', c: `<p style="color:var(--text-secondary);"><span style="background:rgba(52,211,153,0.15);padding:0 4px;border-radius:3px;">Third-quarter</span> sales increased by 23%. The new product launch was successful, and the team has expanded to 12 members. <span style="background:rgba(52,211,153,0.15);padding:0 4px;border-radius:3px;">The marketing</span> campaign generated strong leads.</p>` },
            'bullet-points': { l: 'Converted to Bullets', c: `<ul style="color:var(--text-secondary);list-style:disc;padding-left:20px;display:flex;flex-direction:column;gap:4px;"><li>Q3 sales increased by 23%</li><li>New product launch completed successfully</li><li>Team expanded to 12 members</li><li>Revenue targets exceeded</li><li>3 major partnership deals finalized</li></ul>` },
            'email': { l: 'Email Drafted', c: `<div style="background:rgba(0,0,0,0.1);padding:12px;border-radius:8px;border:1px solid var(--border);color:var(--text-secondary);"><div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;">To: team@company.com</div><div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:8px;">Subject: Q3 Results — Outstanding Performance!</div><hr style="border-color:var(--border);margin-bottom:8px;"><p>Dear Team,</p><p style="margin-top:8px;">I'm thrilled to share our Q3 results. We achieved 23% sales growth, launched our new product successfully, and expanded to 12 team members.</p><p style="margin-top:8px;">Thank you all for your dedication!</p><p style="margin-top:8px;">Best regards</p></div>` },
            'add-headings': { l: 'Headings Added', c: `<div style="display:flex;flex-direction:column;gap:0.75rem;color:var(--text-secondary);"><h3 style="color:var(--accent);font-weight:700;">Sales Performance</h3><p>Q3 sales up 23%, exceeding all targets.</p><h3 style="color:var(--accent);font-weight:700;">Product Launch</h3><p>Successful with strong market reception.</p><h3 style="color:var(--accent);font-weight:700;">Team Growth</h3><p>Expanded to 12 members to support growth.</p></div>` },
            'tone-professional': { l: 'Professional Tone', c: `<p style="color:var(--text-secondary);">The organization achieved a 23% increase in quarterly sales figures. The strategic product launch initiative was executed successfully, and human capital resources have been augmented to 12 personnel.</p>` },
            'tone-friendly': { l: 'Friendly Tone', c: `<p style="color:var(--text-secondary);">Hey there! Just wanted to share some awesome news — we hit 23% growth in Q3! The new product launch went really well, and we've got a great team of 12 now. 😊</p>` },
            'memo': { l: 'Memo Created', c: `<div style="color:var(--text-secondary);"><div style="font-weight:700;margin-bottom:4px;">MEMORANDUM</div><div style="font-size:0.75rem;color:var(--text-muted);">To: All Staff | From: Management | Date: ${new Date().toLocaleDateString()}</div><hr style="margin:8px 0;border-color:var(--border);"><p style="margin-top:8px;">This memo summarizes Q3 performance: 23% sales growth, successful product launch, team expansion to 12, and 3 new partnerships.</p></div>` },
            'proposal': { l: 'Proposal Drafted', c: `<div style="color:var(--text-secondary);"><h3 style="font-weight:700;margin-bottom:8px;">Q4 Growth Proposal</h3><p>Building on Q3's 23% growth, we propose expanding into two new markets and increasing the team by 4 members to capitalize on momentum from our recent partnerships.</p></div>` },
            'meeting-notes': { l: 'Meeting Notes Formatted', c: `<div style="color:var(--text-secondary);"><div style="font-weight:700;margin-bottom:4px;">Meeting Notes — Q3 Review</div><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:8px;">Attendees: Management Team</div><ul style="list-style:disc;padding-left:20px;display:flex;flex-direction:column;gap:2px;"><li>Sales up 23% YoY</li><li>Product launch on track</li><li>Team now at 12 members</li><li>3 partnerships finalized</li></ul></div>` },
            'action-items': { l: 'Action Items Extracted', c: `<div style="color:var(--text-secondary);display:flex;flex-direction:column;gap:4px;"><div style="display:flex;gap:6px;align-items:center;"><i class="fa-solid fa-square-check" style="color:var(--accent-green);"></i> Review Q3 sales data</div><div style="display:flex;gap:6px;align-items:center;"><i class="fa-regular fa-square" style="color:var(--text-muted);"></i> Follow up on 3 partnerships</div><div style="display:flex;gap:6px;align-items:center;"><i class="fa-regular fa-square" style="color:var(--text-muted);"></i> Plan Q4 product development</div></div>` },
            'simplify': { l: 'Language Simplified', c: `<p style="color:var(--text-secondary);">We sold 23% more in Q3. Our new product did well. We hired more people (now 12). Our marketing got good leads. We signed 3 big deals.</p>` },
            'academic': { l: 'Academic Style', c: `<p style="color:var(--text-secondary);">The third fiscal quarter demonstrated statistically significant growth, with sales metrics indicating a 23% year-over-year increase. The successful deployment of the novel product offering, combined with strategic human resource augmentation, suggests robust organizational trajectory.</p>` },
        };

        const transform = t[action] || { l: `${action} Applied`, c: `<p style="color:var(--text-secondary);">The AI has applied the "${action}" transformation.</p>` };
        label.textContent = transform.l;
        content.innerHTML = transform.c;
    }

    function triggerExcelAction(action, btn) {
        const output = document.getElementById('excel-output');
        const label = document.getElementById('excel-output-label');
        const content = document.getElementById('excel-output-content');
        document.querySelectorAll('#excel-actions .office-chip').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        output.style.display = 'block';

        const t = {
            'formula': { l: 'Formula Written', c: `<div style="display:flex;flex-direction:column;gap:0.5rem;"><div style="font-size:0.75rem;color:var(--text-muted);">AI Generated Formula:</div><div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--accent);background:var(--accent-glow);padding:10px;border-radius:6px;border:1px solid rgba(79,143,255,0.2);">=IF(E2>20000, "Top Performer", IF(E2>15000, "Good", "Needs Improvement"))</div><div style="font-size:0.72rem;color:var(--text-muted);">Categorizes employees based on Q2 Sales</div></div>` },
            'chart-bar': { l: 'Bar Chart Created', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:0.75rem;">Monthly Profit</div><div style="display:flex;flex-direction:column;gap:6px;">${[['Jan','55%','$4,200'],['Feb','75%','$6,700'],['Mar','90%','$7,800']].map(([m,w,v])=>`<div style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.65rem;color:var(--text-muted);width:28px;">${m}</span><div style="height:14px;background:var(--accent-green);border-radius:4px;width:${w};"></div><span style="font-size:0.65rem;color:var(--accent-green);">${v}</span></div>`).join('')}</div></div>` },
            'chart-line': { l: 'Line Chart Created', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:0.5rem;">Sales Trend</div><svg viewBox="0 0 200 80" style="width:100%;height:60px;"><polyline fill="none" stroke="#4f8fff" stroke-width="2" points="10,60 70,45 130,30 190,15"/><circle cx="10" cy="60" r="4" fill="#4f8fff"/><circle cx="70" cy="45" r="4" fill="#4f8fff"/><circle cx="130" cy="30" r="4" fill="#4f8fff"/><circle cx="190" cy="15" r="4" fill="#4f8fff"/></svg></div>` },
            'chart-pie': { l: 'Pie Chart Created', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;display:flex;align-items:center;gap:1rem;"><svg viewBox="0 0 36 36" style="width:64px;height:64px;transform:rotate(-90deg);"><circle cx="18" cy="18" r="15.9" fill="none" stroke="#4f8fff" stroke-width="3" stroke-dasharray="40 60"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#34d399" stroke-width="3" stroke-dasharray="35 65" stroke-dashoffset="-40"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="25 75" stroke-dashoffset="-75"/></svg><div style="font-size:0.65rem;display:flex;flex-direction:column;gap:4px;"><div style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#4f8fff;"></span> Sales 40%</div><div style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#34d399;"></span> Costs 35%</div><div style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#fbbf24;"></span> Profit 25%</div></div></div>` },
            'pivot': { l: 'Pivot Table Created', c: `<div style="background:var(--bg-card);border-radius:8px;overflow:hidden;font-size:0.72rem;"><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:var(--border);"><div style="background:rgba(79,143,255,0.15);padding:8px;font-weight:600;color:#93c5fd;">Category</div><div style="background:rgba(79,143,255,0.15);padding:8px;font-weight:600;color:#93c5fd;">Sum Sales</div><div style="background:rgba(79,143,255,0.15);padding:8px;font-weight:600;color:#93c5fd;">Avg Profit</div><div style="background:var(--bg);padding:8px;color:var(--text-secondary);">Q1</div><div style="background:var(--bg);padding:8px;color:var(--text-secondary);">$46,400</div><div style="background:var(--bg);padding:8px;color:var(--text-secondary);">$6,233</div><div style="background:var(--surface);padding:8px;font-weight:700;">Grand Total</div><div style="background:var(--surface);padding:8px;font-weight:700;color:var(--accent-green);">$46,400</div><div style="background:var(--surface);padding:8px;font-weight:700;color:var(--accent-green);">$6,233</div></div></div>` },
            'insights': { l: 'Insights Found', c: `<div style="display:flex;flex-direction:column;gap:6px;">${[['↑','Growth: Q2 up 18% vs Q1','#34d399','rgba(52,211,153,0.1)'],['★','Top: Sarah-Lee Connor $48K','#4f8fff','rgba(79,143,255,0.1)'],['⚠','Duplicate: Rows 1 & 4 identical','#fbbf24','rgba(251,191,36,0.1)'],['💡','East region under by 15%','#a78bfa','rgba(167,139,250,0.1)']].map(([i,t,c,bg])=>`<div style="display:flex;align-items:center;gap:8px;padding:8px;background:${bg};border-radius:6px;border:1px solid ${c}22;font-size:0.75rem;color:${c};">${i} ${t}</div>`).join('')}</div>` },
            'trends': { l: 'Trends Analyzed', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem;"><svg viewBox="0 0 120 50" style="width:100px;height:40px;"><polyline fill="none" stroke="#34d399" stroke-width="2" points="5,40 30,35 55,28 80,20 105,10"/></svg><div><div style="color:#34d399;font-weight:700;font-size:1.2rem;">↑ 18.5%</div><div style="font-size:0.65rem;color:var(--text-muted);">Growth Rate</div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.72rem;"><div style="padding:8px;background:var(--surface);border-radius:6px;"><div style="color:var(--text-muted);">Best Region</div><div style="font-weight:700;">West</div></div><div style="padding:8px;background:var(--surface);border-radius:6px;"><div style="color:var(--text-muted);">Projected Q3</div><div style="font-weight:700;color:var(--accent-purple);">$142,000</div></div></div></div>` },
            'clean': { l: 'Data Cleaned', c: `<div style="display:flex;flex-direction:column;gap:6px;">${[['Fixed capitalization','3 cells'],['Trimmed whitespace','2 cells'],['Standardized format','7 cells']].map(([a,n])=>`<div style="display:flex;justify-content:space-between;padding:8px;background:rgba(52,211,153,0.05);border-radius:6px;border:1px solid rgba(52,211,153,0.15);font-size:0.75rem;"><span style="color:var(--text-secondary);"><i class="fa-solid fa-check" style="color:#34d399;margin-right:6px;"></i>${a}</span><span style="color:#34d399;">${n}</span></div>`).join('')}<div style="font-size:0.65rem;color:var(--text-muted);margin-top:4px;">Example: "jane doe" → "Jane Doe"</div></div>` },
            'sort': { l: 'Data Sorted', c: `<div style="font-size:0.75rem;color:var(--text-secondary);">Data sorted by Sales (High → Low). March leads with $18,200.</div>` },
            'filter': { l: 'Filters Added', c: `<div style="text-align:center;padding:8px;background:rgba(79,143,255,0.08);border-radius:6px;border:1px solid rgba(79,143,255,0.15);font-size:0.75rem;color:#93c5fd;"><i class="fa-solid fa-check-circle" style="margin-right:4px;"></i> Filter dropdowns enabled on all columns</div>` },
            'conditional': { l: 'Conditional Formatting', c: `<div style="font-size:0.75rem;color:var(--text-secondary);">Color scale applied: <span style="color:#f87171;">Low</span> → <span style="color:#fbbf24;">Mid</span> → <span style="color:#34d399;">High</span> values highlighted across Sales and Profit columns.</div>` },
            'sum': { l: 'Sum Calculated', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:4px;">Formula: =SUM(B2:B4)</div><div style="display:flex;align-items:center;gap:8px;"><div style="font-size:1.5rem;font-weight:700;color:#34d399;">$46,400</div><div style="font-size:0.72rem;color:var(--text-muted);">Total Sales (Jan-Mar)</div></div></div>` },
            'average': { l: 'Average Calculated', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:4px;">Formula: =AVERAGE(D2:D4)</div><div style="display:flex;align-items:center;gap:8px;"><div style="font-size:1.5rem;font-weight:700;color:#4f8fff;">$6,233</div><div style="font-size:0.72rem;color:var(--text-muted);">Average Monthly Profit</div></div></div>` },
            'forecast': { l: 'Forecast Generated', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:8px;">Projected Values (Next 3 Months)</div><div style="display:flex;flex-direction:column;gap:4px;font-size:0.8rem;">${[['Apr','$20,500'],['May','$22,800'],['Jun','$25,100']].map(([m,v])=>`<div style="display:flex;justify-content:space-between;"><span style="color:var(--text-secondary);">${m} (Forecast)</span><span style="color:var(--accent-purple);">${v}</span></div>`).join('')}</div></div>` },
            'duplicates': { l: 'Duplicates Removed', c: `<div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(248,113,113,0.08);border-radius:8px;border:1px solid rgba(248,113,113,0.2);"><i class="fa-solid fa-trash" style="color:#f87171;font-size:1.2rem;"></i><div><div style="color:#fca5a5;font-weight:600;">1 Duplicate Removed</div><div style="font-size:0.72rem;color:var(--text-muted);">Row 4 was identical to Row 1</div></div></div>` },
            'vlookup': { l: 'VLOOKUP Formula', c: `<div style="background:var(--bg-card);padding:1rem;border-radius:8px;"><div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent);background:var(--accent-glow);padding:8px;border-radius:6px;margin-bottom:8px;">=VLOOKUP("Feb", A2:D4, 2, FALSE)</div><div style="display:flex;align-items:center;gap:8px;"><div style="font-size:1.2rem;font-weight:700;color:#34d399;">$15,800</div><div style="font-size:0.72rem;color:var(--text-muted);">Feb Sales Found</div></div></div>` },
            'dashboard': { l: 'Dashboard Created', c: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:0.72rem;">${[['$108K','Total Q1','#4f8fff','rgba(79,143,255,0.1)'],['$129K','Total Q2','#34d399','rgba(52,211,153,0.1)'],['↑19%','Growth','#a78bfa','rgba(167,139,250,0.1)']].map(([v,l,c,bg])=>`<div style="padding:10px;background:${bg};border-radius:8px;text-align:center;"><div style="font-size:1.1rem;font-weight:700;color:${c};">${v}</div><div style="color:var(--text-muted);">${l}</div></div>`).join('')}</div>` },
            'sparklines': { l: 'Sparklines Added', c: `<div style="display:flex;flex-direction:column;gap:6px;">${[['John Smith','0,10 20,8 40,5 60,3','↑'],['Jane Doe','0,8 20,6 40,4 60,2','↑'],['Bob Wilson','0,7 20,8 40,6 60,7','→']].map(([n,pts,dir])=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:var(--surface);border-radius:6px;font-size:0.72rem;"><span style="color:var(--text-secondary);">${n}</span><svg viewBox="0 0 60 15" style="width:50px;height:12px;"><polyline fill="none" stroke="#34d399" stroke-width="1.5" points="${pts}"/></svg><span style="color:#34d399;">${dir}</span></div>`).join('')}</div>` },
            'validation': { l: 'Data Validation Added', c: `<div style="display:flex;flex-direction:column;gap:4px;font-size:0.75rem;">${[['Status: Dropdown (Active, Pending, Inactive)','fa-list'],['Sales: Number > 0','fa-dollar-sign'],['Region: North/South/East/West only','fa-map']].map(([t,i])=>`<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--accent-glow);border-radius:6px;border:1px solid rgba(79,143,255,0.15);"><i class="fa-solid ${i}" style="color:var(--accent);width:14px;text-align:center;"></i><span style="color:var(--text-secondary);">${t}</span></div>`).join('')}</div>` },
            'protect': { l: 'Sheet Protected', c: `<div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(52,211,153,0.08);border-radius:8px;border:1px solid rgba(52,211,153,0.15);"><i class="fa-solid fa-lock" style="color:#34d399;font-size:1.2rem;"></i><div><div style="color:#6ee7b7;font-weight:600;">Sheet Protected</div><div style="font-size:0.72rem;color:var(--text-muted);">Password protection enabled, formulas locked</div></div></div>` },
        };

        const transform = t[action] || { l: `${action} Complete`, c: `<p style="color:var(--text-secondary);">Action "${action}" applied.</p>` };
        label.textContent = transform.l;
        content.innerHTML = transform.c;
    }

    function triggerPptAction(action, btn) {
        const output = document.getElementById('ppt-output');
        const label = document.getElementById('ppt-output-label');
        const slides = document.getElementById('ppt-slides');
        document.querySelectorAll('#ppt-actions .office-chip').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        output.style.display = 'block';

        const slideTemplates = {
            'generate': { l: '5 Slides Generated', s: [{ t:'Title',i:'fa-presentation',c:'#4f8fff'},{ t:'Market',i:'fa-chart-line',c:'#34d399'},{ t:'Features',i:'fa-star',c:'#a78bfa'},{ t:'Timeline',i:'fa-clock',c:'#fbbf24'},{ t:'Q&A',i:'fa-question',c:'#f87171'}] },
            'design-modern': { l: 'Modern Design', s: [{ t:'Modern',i:'fa-gem',c:'#06b6d4',bg:'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(79,143,255,0.2))'},{ t:'Clean',i:'fa-sparkles',c:'#06b6d4',bg:'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(79,143,255,0.2))'},{ t:'Bold',i:'fa-bolt',c:'#06b6d4',bg:'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(79,143,255,0.2))'}] },
            'design-minimal': { l: 'Minimal Design', s: [{ t:'Simple',i:'fa-circle',c:'#9ca3af',bg:'rgba(255,255,255,0.05)'},{ t:'Clean',i:'fa-minus',c:'#9ca3af',bg:'rgba(255,255,255,0.05)'},{ t:'Focus',i:'fa-dot-circle',c:'#9ca3af',bg:'rgba(255,255,255,0.05)'}] },
            'design-corporate': { l: 'Corporate Design', s: [{ t:'Executive',i:'fa-building',c:'#93c5fd',bg:'linear-gradient(135deg,rgba(30,58,138,0.4),rgba(51,65,85,0.4))'},{ t:'Professional',i:'fa-briefcase',c:'#93c5fd',bg:'linear-gradient(135deg,rgba(30,58,138,0.4),rgba(51,65,85,0.4))'}] },
            'add-images': { l: 'AI Images Added', s: [{ t:'AI Gen',i:'fa-image',c:'#a78bfa',bg:'rgba(167,139,250,0.15)'},{ t:'AI Gen',i:'fa-image',c:'#a78bfa',bg:'rgba(167,139,250,0.15)'},{ t:'AI Gen',i:'fa-image',c:'#a78bfa',bg:'rgba(167,139,250,0.15)'}] },
            'add-charts': { l: 'Charts Added', s: [{ t:'Bar',i:'fa-chart-bar',c:'#4f8fff'},{ t:'Line',i:'fa-chart-line',c:'#34d399'},{ t:'Pie',i:'fa-chart-pie',c:'#a78bfa'}] },
            'speaker-notes': { l: 'Speaker Notes Generated', s: [{ t:'Slide 1',i:'fa-note-sticky',c:'#fbbf24'},{ t:'Slide 2',i:'fa-note-sticky',c:'#fbbf24'},{ t:'Slide 3',i:'fa-note-sticky',c:'#fbbf24'}] },
            'slide-intro': { l: 'Intro Slide Added', s: [{ t:'INTRO',i:'fa-door-open',c:'#4f8fff',bg:'linear-gradient(135deg,rgba(79,143,255,0.3),rgba(167,139,250,0.3))'}] },
            'slide-agenda': { l: 'Agenda Slide Added', s: [{ t:'AGENDA',i:'fa-list-check',c:'#34d399',bg:'rgba(52,211,153,0.15)'}] },
            'slide-thank-you': { l: 'Thank You Slide', s: [{ t:'THANK YOU',i:'fa-heart',c:'#f87171',bg:'linear-gradient(135deg,rgba(248,113,113,0.3),rgba(236,72,153,0.3))'}] },
            'transitions': { l: 'Transitions Added', msg: 'Fade transitions applied to all slides' },
            'animations': { l: 'Animations Added', msg: 'Entrance animations added to text and images' },
            'color-scheme': { l: 'Color Scheme Changed', s: [{ t:'',i:'fa-droplet',c:'#f87171',bg:'linear-gradient(135deg,rgba(248,113,113,0.2),rgba(251,146,60,0.2))'},{ t:'',i:'fa-droplet',c:'#fb923c',bg:'linear-gradient(135deg,rgba(251,146,60,0.2),rgba(251,191,36,0.2))'}] },
            'layout': { l: 'Layout Optimized', s: [{ t:'2-Col',i:'fa-columns',c:'#a78bfa',bg:'rgba(167,139,250,0.15)'},{ t:'Full',i:'fa-rectangle-wide',c:'#a78bfa',bg:'rgba(167,139,250,0.15)'},{ t:'Grid',i:'fa-th-large',c:'#a78bfa',bg:'rgba(167,139,250,0.15)'}] },
            'simplify': { l: 'Slides Simplified', s: [{ t:'−3',i:'fa-minus-circle',c:'#fbbf24',bg:'rgba(251,191,36,0.1)'},{ t:'−2',i:'fa-minus-circle',c:'#fbbf24',bg:'rgba(251,191,36,0.1)'},{ t:'Clean!',i:'fa-check-circle',c:'#34d399',bg:'rgba(52,211,153,0.15)'}] },
            'accessibility': { l: 'Accessibility OK', msg: '✓ Alt text added · ✓ Color contrast OK · ✓ Reading order set · ✓ Slide titles present' },
        };

        const t = slideTemplates[action];
        if (t) {
            label.textContent = t.l;
            if (t.s) {
                slides.innerHTML = t.s.map(s => `<div class="animate-pop" style="aspect-ratio:16/9;${s.bg ? 'background:'+s.bg : 'background:var(--surface)'};border-radius:8px;border:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:8px;"><i class="fa-solid ${s.i}" style="font-size:1.2rem;color:${s.c};"></i>${s.t ? `<span style="font-size:0.65rem;font-weight:600;color:var(--text-secondary);">${s.t}</span>` : ''}</div>`).join('');
            } else if (t.msg) {
                slides.innerHTML = `<div style="grid-column:1/-1;padding:16px;background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.2);border-radius:8px;text-align:center;"><i class="fa-solid fa-check-circle" style="color:#34d399;font-size:1.2rem;margin-bottom:4px;display:block;"></i><div style="font-size:0.8rem;color:#6ee7b7;">${t.msg}</div></div>`;
            }
        } else {
            label.textContent = `${action} Applied`;
            slides.innerHTML = `<div style="grid-column:1/-1;padding:12px;background:var(--accent-glow);border:1px solid rgba(79,143,255,0.2);border-radius:8px;text-align:center;font-size:0.8rem;color:#93c5fd;">Action applied to presentation</div>`;
        }
    }

    // Initialize empty state
    updateEmptyState();
