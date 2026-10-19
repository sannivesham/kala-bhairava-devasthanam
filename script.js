/**
 * SRI KALA BHAIRAVA DEVASTHANAM - OFFICIAL CLIENT SCRIPT
 * Bilingual (Telugu / English), Navigation, Modals, Lightbox & Audio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current Language State
  let currentLang = localStorage.getItem('temple_lang') || 'en';

  const langButtons = document.querySelectorAll('.lang-btn');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const toast = document.getElementById('toast');
  const yearSpan = document.getElementById('currentYear');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Language Switch Function
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('temple_lang', lang);
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-te', lang === 'te');

    // Update active state on language pills
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all elements with data-en and data-te
    document.querySelectorAll('[data-en][data-te]').forEach(el => {
      const translated = el.dataset[lang];
      if (translated) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translated;
        } else {
          el.textContent = translated;
        }
      }
    });

    // Update HTML page title for search engines & browser tab
    document.title = lang === 'te' 
      ? 'శ్రీ కాలభైరవ దేవస్థానం | అధికారిక ఆలయ వెబ్‌సైట్'
      : 'Sri Kala Bhairava Devasthanam | Official Temple Website';
  }

  // Attach language toggle listeners
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Initialize with stored or default language
  setLanguage(currentLang);

  // Mobile Navigation Drawer Toggle
  if (mobileNavToggle && mobileNavDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      mobileNavToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when link clicked
    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
      });
    });
  }

  // Toast Helper
  window.showToast = function(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = 'block';
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.style.display = 'none';
    }, 4000);
  };

  // Generic Modal Handlers
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  // Close modal when clicking outside box
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Gallery Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  window.openLightbox = function(src, caption) {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption || '';
      lightboxModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeLightbox = function() {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
  }

  // Seva Booking Form Submission
  const sevaForm = document.getElementById('sevaBookingForm');
  if (sevaForm) {
    sevaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const devoteeName = document.getElementById('devoteeName')?.value || 'Devotee';
      closeModal('sevaModal');
      showToast(currentLang === 'te' 
        ? `ధన్యవాదాలు ${devoteeName} గారూ! మీ సేవా అభ్యర్థన అందింది. ఆలయ నిర్వాహకులు మిమ్మల్ని త్వరలో సంప్రదిస్తారు.`
        : `Thank you ${devoteeName}! Your seva inquiry has been recorded. Temple authorities will contact you shortly.`);
      sevaForm.reset();
    });
  }

  // Copy UPI / Bank Details
  window.copyText = function(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Copied to clipboard!');
    }).catch(() => {
      showToast('Text copied: ' + text);
    });
  };

  // Active Navigation link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-item');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});
