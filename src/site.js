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



// Side windows: Community, My research and Inquire slide in from the edge, one at a time.
const winButtons = [...document.querySelectorAll('.pills [data-win]')];
let openWin = null, winOpener = null;
function setWin(name, on, snap) {
 const win = document.querySelector('#win-' + name); if (!win) return;
 if (snap) win.classList.add('snap');
 win.classList.toggle('open', on);
 if (snap) { void win.offsetWidth; win.classList.remove('snap'); }
 winButtons.forEach(b => { if (b.dataset.win === name) b.setAttribute('aria-expanded', String(on)); });
}
function openWindow(name, opener) {
 if (openWin === name) return closeWindow();
 if (openWin) setWin(openWin, false, true);
 winOpener = opener || winOpener; openWin = name;
 document.documentElement.classList.remove('win-closing'); document.documentElement.classList.add('win-open');
 setWin(name, true);
 const win = document.querySelector('#win-' + name);
 win.querySelector('.win-scroll').scrollTop = 0;
 setTimeout(() => { if (openWin === name) win.focus({ preventScroll: true }); }, 60);
}
function closeWindow() {
 if (!openWin) return;
 const name = openWin; openWin = null;
 setWin(name, false);
 document.documentElement.classList.add('win-closing'); document.documentElement.classList.remove('win-open');
 setTimeout(() => { if (!openWin) document.documentElement.classList.remove('win-closing'); }, 520);
 if (winOpener && winOpener.focus) winOpener.focus({ preventScroll: true });
}
winButtons.forEach(b => b.addEventListener('click', () => openWindow(b.dataset.win, b)));
document.querySelectorAll('[data-win-close]').forEach(b => b.addEventListener('click', closeWindow));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && openWin && !dialog.open) closeWindow(); });
// The grip on the window's left edge resizes it; the width is kept for next time.
const winGrip = document.querySelector('#win-grip'), root = document.documentElement;
try { const saved = parseInt(localStorage.getItem('chim.win.w'), 10); if (saved >= 360) root.style.setProperty('--win-w', saved + 'px'); } catch (e) {}
winGrip.addEventListener('pointerdown', event => {
 event.preventDefault(); winGrip.setPointerCapture(event.pointerId); winGrip.classList.add('on'); root.classList.add('win-drag');
 let width = 0;
 const move = e => { width = Math.round(Math.max(360, Math.min(innerWidth - e.clientX - 8, innerWidth - 340))); root.style.setProperty('--win-w', width + 'px'); };
 const stop = () => { winGrip.removeEventListener('pointermove', move); winGrip.removeEventListener('pointerup', stop); winGrip.removeEventListener('pointercancel', stop); winGrip.classList.remove('on'); root.classList.remove('win-drag');
  if (width) { try { localStorage.setItem('chim.win.w', String(width)); } catch (e) {} } };
 winGrip.addEventListener('pointermove', move); winGrip.addEventListener('pointerup', stop); winGrip.addEventListener('pointercancel', stop);
});
// Addresses: #community, #research and #inquire open their window; #fashion opens Community.
const windowHashes = { community: 'community', interests: 'community', fashion: 'community', research: 'research', inquire: 'inquire' };
function openFromHash() { const name = windowHashes[location.hash.slice(1)]; if (name && openWin !== name) openWindow(name); }
openFromHash();
window.addEventListener('hashchange', openFromHash);

// The header's capsules turn dark-on-light once the dark hero is behind us.
const header = document.querySelector('#header');
new IntersectionObserver(([entry]) => header.classList.toggle('on-light', !entry.isIntersecting), { rootMargin: '-60px 0px 0px 0px', threshold: 0 }).observe(document.querySelector('.hero'));

// Inquire sends the same note Wopara's Inquire does, through Wopara's mail.
const inqForm = document.querySelector('#inq-form');
let inqSending = false;
inqForm.addEventListener('submit', async event => {
 event.preventDefault(); if (inqSending) return;
 const name = inqForm.querySelector('#inq-name').value.trim(), email = inqForm.querySelector('#inq-email').value.trim(), desc = inqForm.querySelector('#inq-desc').value.trim();
 const err = inqForm.querySelector('#inq-err'), sent = inqForm.querySelector('#inq-sent'), button = inqForm.querySelector('#inq-send');
 err.textContent = ''; sent.textContent = '';
 if (!name) { err.textContent = 'Add your name.'; inqForm.querySelector('#inq-name').focus(); return; }
 if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = 'Enter a valid email address.'; inqForm.querySelector('#inq-email').focus(); return; }
 if (!desc) { err.textContent = 'Tell us what you’re inquiring about.'; inqForm.querySelector('#inq-desc').focus(); return; }
 inqSending = true; button.disabled = true; const label = button.textContent; button.textContent = 'Sending...';
 try {
  const response = await fetch('https://wopara.com/mail/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ name, email, subject: 'Message from ' + name + ' via chimwopara.com', message: desc, uid: '', website: inqForm.querySelector('#inq-web').value || '' }) });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.detail || 'That did not send. Try again.');
  sent.textContent = 'Sent. A confirmation is on its way to ' + email + ', and we will reply there.';
  inqForm.querySelector('#inq-desc').value = '';
 } catch (failure) { err.textContent = failure.message || 'That did not send. Try again.'; }
 inqSending = false; button.disabled = false; button.textContent = label;
});

// Reveal on scroll, as on the Wopara landing page. Content stays visible if the observer is unavailable.
function revealOnScroll() {
 const items = document.querySelectorAll('.section-heading, .project-case, .fashion-card, .research-row, .contact-title, .contact-bottom');
 if (!('IntersectionObserver' in window) || matchMedia('(max-width:640px)').matches) return;
 const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { threshold: .08 });
 items.forEach(el => { el.classList.add('rv'); io.observe(el); });
}
revealOnScroll();
