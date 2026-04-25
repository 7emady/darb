(function () {
  const byId = (id) => document.getElementById(id);
  const menu = byId('mobileMenu');
  const overlay = byId('menuOverlay');
  const toggle = byId('mobileToggle');
  const close = byId('closeMenu');

  const setMenu = (open) => {
    if (!menu || !overlay) return;
    menu.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
  };

  toggle?.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  overlay?.addEventListener('click', () => setMenu(false));
  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
}());
