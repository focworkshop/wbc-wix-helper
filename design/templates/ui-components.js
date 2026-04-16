/**
 * UI Components — Shared JavaScript for all WBC design templates.
 * Covers: mobile navigation, accordion menus, modals, section subnav,
 *         event share, focus trapping, and iOS scroll-lock.
 */
(function () {
  'use strict';

  /* ==================================================================
     UTILITY: iOS-safe scroll lock
     body.style.overflow='hidden' does NOT work on iOS Safari.
     Instead we pin the body with position:fixed and restore afterward.
     ================================================================== */
  var _scrollY = 0;

  function lockScroll() {
    _scrollY = window.scrollY;
    document.body.classList.add('scroll-locked');
    document.body.style.top = '-' + _scrollY + 'px';
  }

  function unlockScroll() {
    document.body.classList.remove('scroll-locked');
    document.body.style.top = '';
    window.scrollTo(0, _scrollY);
  }

  /* ==================================================================
     UTILITY: Focus trap
     Keeps Tab / Shift+Tab cycling within a container.
     Returns a teardown function.
     ================================================================== */
  function trapFocus(container) {
    var focusable = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return function () {};

    var first = focusable[0];
    var last  = focusable[focusable.length - 1];

    function handler(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    container.addEventListener('keydown', handler);
    first.focus();
    return function () { container.removeEventListener('keydown', handler); };
  }

  /* ==================================================================
     MOBILE NAVIGATION
     ================================================================== */
  var mobileNav      = document.getElementById('mobileNav');
  var _mobileNavTrap = null;
  var _mobileNavTrigger = null;

  function openMobileNav(trigger) {
    if (!mobileNav) return;
    _mobileNavTrigger = trigger || document.activeElement;
    mobileNav.classList.add('active');
    mobileNav.setAttribute('aria-hidden', 'false');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    lockScroll();
    _mobileNavTrap = trapFocus(mobileNav);
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('active');
    mobileNav.setAttribute('aria-hidden', 'true');
    unlockScroll();
    if (_mobileNavTrap) { _mobileNavTrap(); _mobileNavTrap = null; }
    // Restore focus and update aria
    var toggleBtn = document.querySelector('.mobile-menu-toggle');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    if (_mobileNavTrigger) { _mobileNavTrigger.focus(); _mobileNavTrigger = null; }
  }

  // Bind open button
  var openBtn = document.querySelector('.mobile-menu-toggle');
  if (openBtn) {
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.addEventListener('click', function () { openMobileNav(this); });
  }

  // Bind close button
  var closeBtn = mobileNav && mobileNav.querySelector('.mobile-nav__close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileNav);
  }

  // Set initial aria-hidden
  if (mobileNav) mobileNav.setAttribute('aria-hidden', 'true');

  /* ==================================================================
     MOBILE NAV ACCORDION
     ================================================================== */
  var accordionLinks = document.querySelectorAll('.mobile-nav__link[href="#"]');
  accordionLinks.forEach(function (link) {
    var sub = link.nextElementSibling;
    if (!sub || !sub.classList.contains('mobile-nav__sub')) return;

    link.setAttribute('aria-expanded', 'false');

    link.addEventListener('click', function (e) {
      e.preventDefault();
      var expanded = this.classList.toggle('expanded');
      sub.classList.toggle('open');
      this.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });

  /* ==================================================================
     DESKTOP NAV DROPDOWN — aria-expanded
     ================================================================== */
  var dropdownTriggers = document.querySelectorAll('.nav-item > .nav-link');
  dropdownTriggers.forEach(function (trigger) {
    var dropdown = trigger.parentElement.querySelector('.nav-dropdown');
    if (!dropdown) return;

    trigger.setAttribute('aria-expanded', 'false');

    trigger.parentElement.addEventListener('mouseenter', function () {
      trigger.setAttribute('aria-expanded', 'true');
    });
    trigger.parentElement.addEventListener('mouseleave', function () {
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ==================================================================
     MODALS (T5 Team Profiles)
     ================================================================== */
  var _modalTrap    = null;
  var _modalTrigger = null;

  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    _modalTrigger = document.activeElement;
    modal.classList.add('modal--active');
    modal.setAttribute('aria-hidden', 'false');
    lockScroll();
    _modalTrap = trapFocus(modal);
  }

  function closeModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('modal--active');
    modal.setAttribute('aria-hidden', 'true');
    unlockScroll();
    if (_modalTrap) { _modalTrap(); _modalTrap = null; }
    if (_modalTrigger) { _modalTrigger.focus(); _modalTrigger = null; }
  }

  // Expose globally for any remaining references
  window.openModal  = openModal;
  window.closeModal = closeModal;

  // Bind [data-modal] triggers (profile cards → open modal)
  document.querySelectorAll('[data-modal]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(this.getAttribute('data-modal'));
    });
    // "Read Full Bio" buttons inside the card should also open the modal
    var btn = trigger.querySelector('.btn-outline');
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        openModal(trigger.getAttribute('data-modal'));
      });
    }
  });

  // Bind modal overlays → close
  document.querySelectorAll('.modal__overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function () {
      var modal = this.closest('.modal');
      if (modal) closeModal(modal.id);
    });
  });

  // Bind modal close buttons → close
  document.querySelectorAll('.modal__close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modal = this.closest('.modal');
      if (modal) closeModal(modal.id);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      // Close any active modal
      document.querySelectorAll('.modal.modal--active').forEach(function (modal) {
        closeModal(modal.id);
      });
      // Close mobile nav if open
      if (mobileNav && mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    }
  });

  // Set initial aria-hidden on all modals
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.setAttribute('aria-hidden', 'true');
  });

  /* ==================================================================
     SECTION SUB-NAVIGATION (T7 Member Area)
     IntersectionObserver for sticky subnav active-state tracking.
     ================================================================== */
  var subnav = document.getElementById('sectionSubnav');
  if (subnav) {
    var links    = subnav.querySelectorAll('.section-subnav__link');
    var track    = subnav.querySelector('.section-subnav__track');
    var sectionIds = Array.from(links).map(function (l) { return l.getAttribute('href').slice(1); });
    var sections   = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            var active = subnav.querySelector('[href="#' + entry.target.id + '"]');
            if (active) {
              active.classList.add('active');
              var linkLeft   = active.offsetLeft - track.offsetLeft;
              var linkCenter = linkLeft - track.clientWidth / 2 + active.offsetWidth / 2;
              track.scrollTo({ left: linkCenter, behavior: 'smooth' });
            }
          }
        });
      },
      { rootMargin: '-134px 0px -40% 0px', threshold: 0 }
    );

    sections.forEach(function (sec) { observer.observe(sec); });
  }

  /* ==================================================================
     EVENT SHARE (T8 Event Detail)
     ================================================================== */
  document.querySelectorAll('[data-share-title]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var title = this.getAttribute('data-share-title');
      if (navigator.share) {
        navigator.share({ title: title, url: location.href });
      } else {
        navigator.clipboard.writeText(location.href).then(function () {
          alert('Link copied!');
        });
      }
    });
  });

})();
