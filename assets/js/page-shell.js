(function () {
  const byId = (id) => document.getElementById(id);
  const menu = byId('mobileMenu');
  const overlay = byId('menuOverlay');
  const toggle = byId('mobileToggle');
  const close = byId('closeMenu');
  const navbar = document.querySelector('.navbar');

  const setMenu = (open) => {
    if (!menu || !overlay) return;
    menu.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
  };

  const syncNavbar = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 18);
  };

  toggle?.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  overlay?.addEventListener('click', () => setMenu(false));
  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
  window.addEventListener('scroll', syncNavbar, { passive: true });
  syncNavbar();
}());
