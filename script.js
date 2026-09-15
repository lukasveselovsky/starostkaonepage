function renderAccordion(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  items.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'accordion-item';

    const paragraphs = item.text
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');

    el.innerHTML = `
      <button class="accordion-item__header" type="button">
        <span><span class="accordion-item__number">${String(index + 1).padStart(2, '0')}</span>${item.title}</span>
        <span class="accordion-item__icon">+</span>
      </button>
      <div class="accordion-item__panel">
        <div class="accordion-item__panel-inner">${paragraphs}</div>
      </div>
    `;

    const header = el.querySelector('.accordion-item__header');
    const panel = el.querySelector('.accordion-item__panel');

    header.addEventListener('click', () => {
      const isOpen = el.classList.contains('is-open');
      if (isOpen) {
        panel.style.maxHeight = null;
        el.classList.remove('is-open');
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        el.classList.add('is-open');
      }
    });

    container.appendChild(el);
  });
}

renderAccordion('accordion-long', LONG_TERM_GOALS);
renderAccordion('accordion-short', SHORT_TERM_GOALS);

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
}
