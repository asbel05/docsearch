(() => {
  const views = [...document.querySelectorAll('[data-view]')];
  const navigation = [...document.querySelectorAll('nav a')];

  function showView(focusHeading = false) {
    const requested = location.hash.slice(1) || 'biblioteca';
    const active = views.find((view) => view.id === requested) || views[0];
    views.forEach((view) => { view.hidden = view !== active; });
    navigation.forEach((link) => {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const heading = active.querySelector('h1');
    document.title = `${heading.textContent} · DocSearch`;
    document.querySelector('[data-page-name]').textContent = heading.textContent;
    if (focusHeading) heading.focus();
  }

  window.addEventListener('hashchange', () => showView(true));
  showView();
})();
