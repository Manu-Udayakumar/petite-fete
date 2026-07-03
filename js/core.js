/* js/core.js */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Shared Structures
  injectSharedLayout();

  // 2. Initialize Loading Screen
  initLoader();

  // 3. Initialize Interactive Cursor
  initCursor();

  // 4. Initialize Navigation Burger Menu & Link transitions
  initNavigation();

  // 5. Initialize Scroll Reveals
  initScrollReveals();

  // 6. Initialize Homepage Map-Scroll Journey
  initMapScroll();
});

// Layout Injection Function
function injectSharedLayout() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  // Determine if header should start dark/transparent (like on Home page with full hero)
  const isDarkHeader = pageName === 'index.html' || pageName === 'india.html';

  // Create Header Markup
  const header = document.createElement('header');
  header.className = `global-header ${isDarkHeader ? 'global-header-dark' : ''}`;
  header.innerHTML = `
    <div class="container header-container">
      <div class="header-logo" style="display: flex; align-items: center; gap: var(--space-sm);">
        <img src="assets/images/logo.png" alt="TCC Monogram Logo" style="height: 52px; width: 52px; object-fit: contain; filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));">
        <a href="index.html" class="hover-target" style="letter-spacing: 0.15em; font-size: 1.25rem; font-weight: 500;">THE CULINARY CANVAS</a>
      </div>
      <div class="header-actions">
        <a href="contact.html" class="inquiry-btn hover-target">Plan An Event</a>
        <button class="burger-menu hover-target" id="burger-toggle" aria-label="Toggle Navigation">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </div>
    </div>
  `;

  // Create Fullscreen Drawer Navigation Markup
  const drawer = document.createElement('div');
  drawer.className = 'drawer-nav';
  drawer.id = 'drawer-menu';
  drawer.innerHTML = `
    <div class="drawer-content">
      <ul class="drawer-links">
        <li><a href="index.html" class="hover-target ${pageName === 'index.html' ? 'active' : ''}">Home</a></li>
        <li><a href="about.html" class="hover-target ${pageName === 'about.html' ? 'active' : ''}">About</a></li>
        <li><a href="journeys.html" class="hover-target ${pageName === 'journeys.html' ? 'active' : ''}">Culinary Journeys</a></li>
        <li><a href="menu.html" class="hover-target ${pageName === 'menu.html' ? 'active' : ''}">Menu Collection</a></li>
        <li><a href="india.html" class="hover-target ${pageName === 'india.html' ? 'active' : ''}">Interactive Map</a></li>
        <li><a href="contact.html" class="hover-target ${pageName === 'contact.html' ? 'active' : ''}">Contact</a></li>
      </ul>
      <div class="drawer-info">
        <p class="drawer-editorial">"The street food culture of India & the world, elevated into a Michelin-inspired, luxury culinary experience."</p>
        <div class="drawer-contact-details">
          <p>INQUIRIES: <a href="mailto:curator@theculinarycanvas.co" class="hover-target">curator@theculinarycanvas.co</a></p>
          <p>PHONE: +91 98100 55555 / +91 11 4655 8888</p>
          <p>STUDIOS: NEW DELHI • MUMBAI • RAJASTHAN</p>
          <p>ADDRESS: The Culinary Pavilion, Chanakyapuri, New Delhi, India</p>
        </div>
      </div>
    </div>
  `;

  // Create Footer Markup
  const footer = document.createElement('footer');
  footer.className = 'global-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display: flex; align-items: center; gap: var(--space-sm); margin-bottom: var(--space-sm);">
            <img src="assets/images/logo.png" alt="TCC Monogram Logo" style="height: 64px; width: 64px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
            <h2 style="margin-bottom: 0; font-size: 1.6rem; letter-spacing: 0.15em;">THE CULINARY CANVAS</h2>
          </div>
          <p style="font-size: 0.75rem; letter-spacing: 0.05em; color: var(--color-terracotta); margin-bottom: var(--space-xs); text-transform: uppercase;">From the House of Girdhars</p>
          <p>Curators of luxury, culture-rich culinary experiences and elevated street food journeys, based in New Delhi, India. <br><strong style="color: var(--color-ivory); font-style: italic;">"Your Vision, Our Passion!"</strong></p>
        </div>
        <div class="footer-col">
          <h3>The Brand</h3>
          <ul>
            <li><a href="about.html" class="hover-target">Our Story & Heritage</a></li>
            <li><a href="journeys.html" class="hover-target">Culinary Journeys</a></li>
            <li><a href="menu.html" class="hover-target">Menu Collection</a></li>
            <li><a href="india.html" class="hover-target">Interactive Map</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="journeys.html" class="hover-target">Bespoke Journeys</a></li>
            <li><a href="menu.html" class="hover-target">Signature Creations</a></li>
            <li><a href="india.html" class="hover-target">Regional Map</a></li>
            <li><a href="contact.html" class="hover-target">Plan An Event</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Subscribe</h3>
          <p style="margin-bottom: var(--space-sm); font-size: 0.85rem; color: var(--color-olive);">Receive invitations to private preview events.</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Merci! You have been added to our private ledger.');">
            <input type="email" placeholder="Your Email Address" required class="hover-target">
            <button type="submit" class="newsletter-submit hover-target">→</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 The Culinary Canvas India. All rights reserved.</p>
        <p>Awwwards Design Inspiration • Privacy Policy • T&C</p>
      </div>
    </div>
  `;

  // Create Custom Cursor and Page Shutter Transition Panels
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor';
  cursorDot.id = 'cursor-dot';

  const cursorRing = document.createElement('div');
  cursorRing.className = 'custom-cursor-ring';
  cursorRing.id = 'cursor-ring';

  const wipe = document.createElement('div');
  wipe.className = 'wipe-transition';
  wipe.id = 'wipe-transition';

  // Inject into body
  document.body.prepend(header);
  document.body.appendChild(drawer);
  document.body.appendChild(footer);
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);
  document.body.appendChild(wipe);

  // Toggle Header scrolled status
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add(isDarkHeader ? 'scrolled-dark' : 'scrolled');
    } else {
      header.classList.remove('scrolled', 'scrolled-dark');
    }
  });
}

// Custom Cursor Implementation
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth delayed follow animation for the outer ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Attach hover events to interactive tags
  const addHoverEffects = () => {
    const targets = document.querySelectorAll('.hover-target, a, button, input, select, textarea, [role="button"], .map-pin');
    targets.forEach(el => {
      // Avoid duplicate binding
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "true";

      el.addEventListener('mouseenter', () => {
        dot.classList.add('hovered');
        ring.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('hovered');
        ring.classList.remove('hovered');
      });
    });
  };

  addHoverEffects();

  // Rebind if page changes contents dynamically (e.g. filters)
  const observer = new MutationObserver(addHoverEffects);
  observer.observe(document.body, { childList: true, subtree: true });
}

// Loading Animation
function initLoader() {
  const loader = document.getElementById('loader-overlay');
  if (!loader) return;

  const bar = loader.querySelector('.loader-bar');
  const num = loader.querySelector('.loader-number');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // Add fade out
      setTimeout(() => {
        loader.style.transform = 'translateY(-100%)';
        setTimeout(() => {
          loader.remove();
        }, 1200);
      }, 300);
    }
    num.innerText = `${progress}%`;
  }, 40);
}

// Toggle Navigation Hamburger and Page Transition interceptors
function initNavigation() {
  const burger = document.getElementById('burger-toggle');
  const menu = document.getElementById('drawer-menu');
  const wipe = document.getElementById('wipe-transition');
  const header = document.querySelector('header.global-header');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      menu.classList.toggle('open');
      if (header) {
        header.classList.toggle('menu-active');
      }

      // Prevent scrolling when drawer is open
      if (menu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  // Intercept links for smooth fullscreen wipe transitions
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    // Check if it's a valid local page link
    if (href && href.endsWith('.html') && !href.startsWith('http') && !anchor.getAttribute('target')) {
      e.preventDefault();
      
      // Close menu if it was open
      if (menu && menu.classList.contains('open')) {
        burger.classList.remove('open');
        menu.classList.remove('open');
        if (header) {
          header.classList.remove('menu-active');
        }
        document.body.style.overflow = '';
      }

      // Trigger transition
      if (wipe) {
        wipe.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 650); // Navigate mid-transition
      } else {
        window.location.href = href;
      }
    }
  });

  // Retract transition panel if landing with active
  if (wipe) {
    // Retract on page load
    setTimeout(() => {
      wipe.classList.add('exit');
      setTimeout(() => {
        wipe.classList.remove('active', 'exit');
      }, 800);
    }, 100);
  }
}

// Section Scroll Reveal system
function initScrollReveals() {
  // Inject reveal styles dynamically to avoid style pollution
  const style = document.createElement('style');
  style.innerHTML = `
    .reveal-el {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .reveal-el.revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, options);

  // Bind to headers, grids, split layouts
  const revealSelectors = [
    '.editorial-text', '.editorial-image-container', 
    '.accordion-item', '.station-card', 
    '.gallery-item', '.timeline-step', 
    '.menu-item-card', '.contact-visual',
    '.luxury-form', '.section h2', '.section p'
  ];

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal-el');
      observer.observe(el);
    });
  });
}

// Homepage Topographical Map-Scroll Journey
function initMapScroll() {
  const track = document.getElementById('map-scroll-track');
  const viewport = document.getElementById('map-viewport-target');
  const cards = document.querySelectorAll('.map-scroll-card');
  const pins = document.querySelectorAll('.map-scroll-pin');

  if (!track || !viewport) return;

  function handleScroll() {
    const viewHeight = window.innerHeight;
    const triggerPoint = viewHeight * 0.45; // Center of screen trigger point

    let activeCard = null;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
        activeCard = card;
      }
    });

    if (activeCard) {
      // Deactivate all
      cards.forEach(c => c.classList.remove('active'));
      pins.forEach(p => p.classList.remove('active'));

      // Activate current
      activeCard.classList.add('active');
      const region = activeCard.getAttribute('data-region');
      const zoom = activeCard.getAttribute('data-zoom') || '1.5';
      const x = activeCard.getAttribute('data-x') || '0';
      const y = activeCard.getAttribute('data-y') || '0';

      const activePin = document.querySelector(`.map-scroll-pin[data-region="${region}"]`);
      if (activePin) {
        activePin.classList.add('active');
      }

      // Pan & Zoom the Map Viewport smoothly using translate3d & scale
      viewport.style.transform = `scale(${zoom}) translate3d(${x}%, ${y}%, 0)`;
    }
  }

  // Bind pins to click scroll to active card
  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      const region = pin.getAttribute('data-region');
      const targetCard = document.querySelector(`.map-scroll-card[data-region="${region}"]`);
      if (targetCard) {
        const offset = targetCard.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.35);
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
  });
  window.addEventListener('resize', handleScroll);

  // Initialize
  handleScroll();
}


