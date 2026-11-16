const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const dialog = document.querySelector('#item-dialog');
function showDetails(item) {
 const heading = `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}"><p class="eyebrow">${escapeHTML(item.collection)}</p><h2 id="dialog-title">${escapeHTML(item.name)}</h2>`;
 const content = `<p>${escapeHTML(item.type + ' · ' + item.sync + (item.sketch ? ' · Concept sketch' : ''))}</p><p>${escapeHTML(item.price)} · Made to order</p><a class="text-link" href="mailto:chim@chimwopara.com?subject=${encodeURIComponent('Fashion inquiry: ' + item.name)}">Inquire about this piece ↗</a>`;
 document.querySelector('#dialog-content').innerHTML = heading + content;
 dialog.showModal();
 dialog.scrollTop = 0;
 document.body.style.overflow = 'hidden';
}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });

function renderApps() {
 document.querySelector('#project-list').replaceChildren(...builtApps.map((app, index) => {
  const row = document.createElement('article'); row.className = 'project-case app-case';
  row.innerHTML = `<div class="case-top"><span class="eyebrow">${escapeHTML(app.type)}</span><span class="case-number">${String(index + 1).padStart(2, '0')}</span></div>
   <h3>${escapeHTML(app.name)}</h3>
   <div class="app-overview">${app.overview.map(paragraph => `<p class="case-purpose">${escapeHTML(paragraph)}</p>`).join('')}</div>
   <h4>Inside</h4>
   <div class="app-inside">${app.inside.map(([name, description]) => `<section class="app-part"><h5>${escapeHTML(name)}</h5><p>${escapeHTML(description)}</p></section>`).join('')}</div>
   <h4>Capabilities</h4><ul class="case-features">${app.capabilities.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>
   <div class="case-stack"><h4>Technical stack</h4><ul class="stack-list">${app.stack.map(tech => `<li>${escapeHTML(tech)}</li>`).join('')}</ul></div>`;
  return row;
 }));
}
function setupFilters(id, callback) {
 document.querySelector(id).addEventListener('click', event => {
  const button = event.target.closest('button[data-category]'); if(!button) return;
  document.querySelectorAll(id + ' button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  callback(button.dataset.category);
 });
}
let fashionCategory = 'all';
function renderFashion() {
 const filtered = fashionItems.filter(p => fashionCategory === 'all' || p.category === fashionCategory);
 document.querySelector('#fashion-grid').replaceChildren(...filtered.map(p => {
  const card = document.createElement('button'); card.className = 'fashion-card'; card.setAttribute('aria-label', 'View ' + p.name);
  card.innerHTML = `<div class="fashion-art"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)} — ${escapeHTML(p.type)}" loading="lazy">${p.sketch ? '<span class="tag">Concept sketch</span>' : ''}</div><div class="fashion-caption"><strong>${escapeHTML(p.name)}</strong><span>${p.price}</span></div><p>${p.type} / ${p.sync}</p>`;
  card.addEventListener('click', () => showDetails(p)); return card;
 }));

}
setupFilters('#fashion-filters', category => {fashionCategory = category; renderFashion();});
const research = [
 ['Merit Matches','Matching mechanisms that reward merit and align incentives between parties.'],
 ['Choice of Doom','Decision-making under scarcity and constraint, where every choice forecloses alternatives.'],
 ['48 Laws of Matching','Principles governing effective matching markets, from labour to capital to ideas.'],
 ['Rights in Gov. vs Privileges in Org.','Contrasting rights granted by governments against privileges conferred within organisations.'],
 ['Pautacos','The solution to underinvestment in agriculture and food health in developing countries.']
];
document.querySelector('#research-list').innerHTML = research.map(([title, description], i) => `<article class="research-row"><span>0${i+1}</span><h3>${title}</h3><p>${description}</p></article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();
renderApps(); renderFashion();



// Tabs share section addresses with header links and support browser history.
const portfolioTabs = [...document.querySelectorAll('.portfolio-tabs [role="tab"]')];
const sectionPanels = { about: 'about', projects: 'projects', interests: 'interests', fashion: 'interests', research: 'research' };
function activatePortfolioTab(name) {
 portfolioTabs.forEach(tab => {
  const active = tab.dataset.panel === name;
  tab.setAttribute('aria-selected', String(active));
  tab.tabIndex = active ? 0 : -1;
  document.querySelector('#panel-' + tab.dataset.panel).hidden = !active;
 });
}
function tabFromLocation() {
 const section = location.hash.slice(1);
 if (sectionPanels[section]) activatePortfolioTab(sectionPanels[section]);
}
function selectPortfolioTab(tab, scroll = true) {
 activatePortfolioTab(tab.dataset.panel);
 if (location.hash !== '#' + tab.dataset.panel) history.pushState(null, '', '#' + tab.dataset.panel);
 if (scroll) {
  // The tab row is sticky, so scrolling it into view does nothing once it is stuck: go to the top of the new page instead.
  const panel = document.querySelector('#panel-' + tab.dataset.panel);
  const top = panel.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
 }
}
portfolioTabs.forEach((tab, index) => {
 tab.addEventListener('click', () => selectPortfolioTab(tab));
 tab.addEventListener('keydown', event => {
  let next;
  if (event.key === 'ArrowRight') next = (index + 1) % portfolioTabs.length;
  if (event.key === 'ArrowLeft') next = (index + portfolioTabs.length - 1) % portfolioTabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = portfolioTabs.length - 1;
  if (next === undefined) return;
  event.preventDefault();
  portfolioTabs[next].focus();
  selectPortfolioTab(portfolioTabs[next], false);
 });
});
document.addEventListener('click', event => {
 const link = event.target.closest('a[href^="#"]');
 if (!link) return;
 const section = link.getAttribute('href').slice(1);
 const panel = sectionPanels[section];
 if (!panel) return;
 event.preventDefault();
 activatePortfolioTab(panel);
 if (location.hash !== '#' + section) history.pushState(null, '', '#' + section);
 (document.getElementById(section) || document.querySelector('#portfolio-tabs')).scrollIntoView({ block: 'start' });
});
window.addEventListener('hashchange', tabFromLocation);
window.addEventListener('popstate', tabFromLocation);
tabFromLocation();

// Reveal on scroll, as on the Wopara landing page. Content stays visible if the observer is unavailable.
function revealOnScroll() {
 const items = document.querySelectorAll('.section-heading, .about-copy, .initiative, .project-case, .fashion-card, .research-row, .civic-interest > p, .contact-title, .contact-bottom');
 if (!('IntersectionObserver' in window) || matchMedia('(max-width:640px)').matches) return;
 const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { threshold: .08 });
 items.forEach(el => { el.classList.add('rv'); io.observe(el); });
}
revealOnScroll();
