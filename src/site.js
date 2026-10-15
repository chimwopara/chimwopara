const labels = { machine: 'AI assistant tool', spaceship: 'Team workspace tool', ecosystem: 'Wopara application', woparagames: 'Wopara game', websites: 'Business partnership', apps: 'iPhone app', games: 'Game / experiment', myprojects: 'Independent venture' };
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const dialog = document.querySelector('#item-dialog');
function renderFeatureList(item, className) {
 if (!item.featureGroups) return `<ul class="${className}">${item.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join('')}</ul>`;
 return `<div class="feature-groups">${Object.entries(item.featureGroups).map(([title, features]) => `<section class="feature-group"><h5>${escapeHTML(title)}</h5><ul class="${className}">${features.map(feature => `<li>${escapeHTML(feature)}</li>`).join('')}</ul></section>`).join('')}</div>`;
}
function showDetails(item, fashion = false) {
 const heading = `${fashion ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}">` : ""}<p class="eyebrow">${escapeHTML(fashion ? item.collection : labels[item.category])}</p><h2 id="dialog-title">${escapeHTML(item.name)}</h2>`;
 const link = item.url ? `<a class="text-link" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${item.launchLabel || (item.entry ? (item.category === 'machine' ? 'Open Wopara' : 'Open Spaceship') : 'Visit project')} ↗</a>` : '<p class="small muted">A public project link is not available.</p>';
 const content = fashion
  ? `<p>${escapeHTML(item.type + ' · ' + item.sync + (item.sketch ? ' · Concept sketch' : ''))}</p><p>${escapeHTML(item.price)} · Made to order</p><a class="text-link" href="mailto:chim@chimwopara.com?subject=${encodeURIComponent('Fashion inquiry: ' + item.name)}">Inquire about this piece ↗</a>`
  : `<p class="project-purpose">${escapeHTML(item.description)}</p>${item.context ? `<p class="case-context">${escapeHTML(item.context)}</p>` : ""}<section class="detail-features"><h3>What you can do</h3>${renderFeatureList(item, 'detail-feature-list')}</section>
    ${item.entry ? `<p class="launch-note">${escapeHTML(item.entry)}</p>` : ''}
    ${link}
    ${item.example ? `<section class="case-example"><h3>Example use</h3><p>${escapeHTML(item.example)}</p></section>` : ""}<section class="detail-challenge"><h3>Engineering considerations</h3><p>${escapeHTML(item.challenge)}</p></section><details class="build-details" open><summary>How it was built & technical stack <span>+</span></summary><div class="build-content"><h3>How it was built</h3><p>${escapeHTML(item.build)}</p><h3>Technical stack</h3>${item.stack.length ? `<ul class="stack-list">${item.stack.map(tech => `<li>${escapeHTML(tech)}</li>`).join('')}</ul>` : '<p class="small muted">Tools and technologies are not documented for this project.</p>'}${item.note ? `<p class="small muted">${escapeHTML(item.note)}</p>` : ''}</div></details>`;
 document.querySelector('#dialog-content').innerHTML = heading + content;
 dialog.classList.toggle('project-dialog', !fashion);
 dialog.showModal();
 dialog.scrollTop = 0;
 document.body.style.overflow = 'hidden';
}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
let activeCapability = 'all';
const capabilityContainer = document.querySelector('#capability-filters');
function renderCapabilities() {
 capabilityContainer.replaceChildren(...[{ id: 'all', label: 'Everything' }, ...capabilityGroups].map(group => {
 const button = document.createElement('button');
 const count = projects.filter(project => group.id === 'all' || project.capabilities.includes(group.id)).length;
 button.setAttribute('aria-pressed', String(activeCapability === group.id));
 button.innerHTML = `<span>${escapeHTML(group.label)}</span><small>${count} entries</small>`;
 button.addEventListener('click', () => {
  activeCapability = group.id; projectCategory = 'all';
  document.querySelectorAll('#project-filters button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.category === 'all')));
  renderCapabilities(); renderProjects();
 });
 return button;
 }));
}
let projectCategory = 'all', projectQuery = '';
const projectList = document.querySelector('#project-list');
let projectLayoutFrame = 0;
function scheduleProjectLayout() {
 cancelAnimationFrame(projectLayoutFrame);
 projectLayoutFrame = requestAnimationFrame(layoutProjectCards);
}
function layoutProjectCards() {
 if (document.querySelector('#panel-projects').hidden) return;
 const cards = [...projectList.querySelectorAll('.project-case')];
 const twoColumns = window.matchMedia('(min-width: 901px)').matches;
 projectList.classList.toggle('masonry', twoColumns && cards.length > 0);
 if (!twoColumns || !cards.length) {
  projectList.style.height = '';
  cards.forEach(card => { card.style.width = ''; card.style.transform = ''; });
  return;
 }
 const gap = 24;
 const width = (projectList.clientWidth - gap) / 2;
 const heights = [0, 0];
 // Keep the ranked DOM order; place each card in the shorter visual column.
 cards.forEach(card => { card.style.width = width + 'px'; });
 cards.forEach(card => {
  const column = heights[0] <= heights[1] ? 0 : 1;
  card.style.transform = `translate(${column * (width + gap)}px, ${heights[column]}px)`;
  heights[column] += card.getBoundingClientRect().height + gap;
 });
 projectList.style.height = Math.max(...heights) - gap + 'px';
}
const projectCardObserver = new ResizeObserver(scheduleProjectLayout);
window.addEventListener('resize', scheduleProjectLayout);
document.fonts.ready.then(scheduleProjectLayout);
function renderProjects() {
 projectCardObserver.disconnect();
 const filtered = projects.filter(p => (projectCategory === 'all' || p.category === projectCategory) && (activeCapability === 'all' || p.capabilities.includes(activeCapability)) && (!projectQuery || [p.name, p.description, p.build, labels[p.category], ...p.features, ...p.stack].join(' ').toLowerCase().includes(projectQuery)));
 document.querySelector('#project-list').replaceChildren(...filtered.map(p => {
  const row = document.createElement('article'); row.className = 'project-case';
  row.innerHTML = `<div class="case-top"><span class="eyebrow">${escapeHTML(p.catalogType || labels[p.category])}</span><span class="case-number">${String(projects.indexOf(p)+1).padStart(2,'0')}</span></div>
    <h3>${escapeHTML(p.name)}</h3><p class="case-purpose">${escapeHTML(p.description)}</p>${p.context ? `<p class="case-context">${escapeHTML(p.context)}</p>` : ""}
    <h4>What you can do</h4>${renderFeatureList(p, 'case-features')}
    ${p.example ? `<div class="case-example"><h4>Example use</h4><p>${escapeHTML(p.example)}</p></div>` : ""}<div class="case-engineering"><h4>Engineering considerations</h4><p>${escapeHTML(p.challenge)}</p></div>
    <details class="case-build"><summary>How it was built <span>+</span></summary><p>${escapeHTML(p.build)}</p>${p.note ? `<p class="small muted">${escapeHTML(p.note)}</p>` : ''}</details>
    <div class="case-stack"><h4>Technical stack</h4>${p.stack.length ? `<ul class="stack-list">${p.stack.map(tech => `<li>${escapeHTML(tech)}</li>`).join('')}</ul>` : '<p class="small muted">Tools not documented.</p>'}</div>
    <button class="case-open" aria-label="Open details for ${escapeHTML(p.name)}">Project details & access ↗</button>`;
  row.querySelector('.case-open').addEventListener('click', () => showDetails(p));
  return row;
 }));
 if (!filtered.length) {
 const empty = document.createElement('p'); empty.className = 'empty-results';
 empty.textContent = 'No projects match. Try another search or category.';
 document.querySelector('#project-list').append(empty);
}
 projectList.querySelectorAll('.project-case').forEach(card => projectCardObserver.observe(card));
 scheduleProjectLayout();
 document.querySelector('#project-status').textContent = `${filtered.length} matching entries · ${activeCapability === 'all' ? 'All features' : capabilityGroups.find(group => group.id === activeCapability).label}`;
}
function setupFilters(id, callback) {
 document.querySelector(id).addEventListener('click', event => {
  const button = event.target.closest('button[data-category]'); if(!button) return;
  document.querySelectorAll(id + ' button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  callback(button.dataset.category);
 });
}
setupFilters('#project-filters', category => {projectCategory = category; renderProjects();});
document.querySelector('#project-total').textContent = String(projects.length).padStart(2, '0');
let fashionCategory = 'all';
function renderFashion() {
 const filtered = fashionItems.filter(p => fashionCategory === 'all' || p.category === fashionCategory);
 document.querySelector('#fashion-grid').replaceChildren(...filtered.map(p => {
  const card = document.createElement('button'); card.className = 'fashion-card'; card.setAttribute('aria-label', 'View ' + p.name);
  card.innerHTML = `<div class="fashion-art"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)} — ${escapeHTML(p.type)}" loading="lazy">${p.sketch ? '<span class="tag">Concept sketch</span>' : ''}</div><div class="fashion-caption"><strong>${escapeHTML(p.name)}</strong><span>${p.price}</span></div><p>${p.type} / ${p.sync}</p>`;
  card.addEventListener('click', () => showDetails(p, true)); return card;
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
document.querySelector('#project-search').addEventListener('input', event => {
 projectQuery = event.target.value.trim().toLowerCase(); renderProjects();
});
renderCapabilities(); renderProjects(); renderFashion();



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
 if (name === 'projects') scheduleProjectLayout();
}
function tabFromLocation() {
 const section = location.hash.slice(1);
 if (sectionPanels[section]) activatePortfolioTab(sectionPanels[section]);
}
function selectPortfolioTab(tab, scroll = true) {
 activatePortfolioTab(tab.dataset.panel);
 if (location.hash !== '#' + tab.dataset.panel) history.pushState(null, '', '#' + tab.dataset.panel);
 if (scroll) document.querySelector('#portfolio-tabs').scrollIntoView({ block: 'start' });
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
