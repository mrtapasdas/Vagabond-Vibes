// Main interactive behaviors: mobile nav toggle, form validation and progressive enhancement.
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = year;

  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.style.display = expanded ? 'none' : 'block';
      primaryNav.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form progressive enhancement
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')?.toString().trim();
      const email = data.get('email')?.toString().trim();
      const message = data.get('message')?.toString().trim();

      // Basic client-side validation
      if (!name || !email || !message) {
        status.textContent = 'Please fill in all required fields.';
        status.style.color = 'crimson';
        return;
      }

      status.style.color = '';
      status.textContent = 'Sending…';

      // NOTE: Replace with real endpoint (Formspree, Netlify Forms, or server)
      // Simulate a send with timeout
      setTimeout(() => {
        status.style.color = 'green';
        status.textContent = 'Thanks! Your enquiry has been received. We will get back to you shortly.';
        form.reset();
      }, 800);
    });
  }

  // Basic lazy image placeholder using native loading attribute already set on images
});