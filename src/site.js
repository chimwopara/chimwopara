const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const dialog = document.querySelector('#item-dialog');
function showDetails(item) {
 const heading = `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}"><p class="eyebrow">${escapeHTML(item.collection)}</p><h2 id="dialog-title">${escapeHTML(item.name)}</h2>`;
 const content = `<p>${escapeHTML(item.type + ' · ' + item.sync + (item.sketch ? ' · Concept sketch' : ''))}</p><p>${escapeHTML(item.price)} · Made to order</p><a class="text-link" href="mailto:chim@chimwopara.com?subject=${encodeURIComponent('Fashion inquiry: ' + item.name)}">Inquire about this piece ↗</a>`;
 dialog.classList.remove('shot'); document.querySelector('#dialog-content').innerHTML = heading + content;
 dialog.showModal();
 dialog.scrollTop = 0;
 document.body.style.overflow = 'hidden';
}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });

function appCards() {
 return builtApps.map((app, index) => {
  const row = document.createElement('article'); row.className = 'project-case app-case';
  const id = 'more-' + index;
  row.innerHTML = `<div class="case-top"><span class="eyebrow">${escapeHTML(app.type)}</span><span class="case-number">${String(index + 1).padStart(2, '0')}</span></div>
   <h3>${escapeHTML(app.name)}</h3>
   <div class="app-overview">${app.overview.map(paragraph => `<p class="case-purpose">${escapeHTML(paragraph)}</p>`).join('')}</div>
   <div class="card-art" aria-hidden="false">${cardArt[app.art] || ''}</div>
   <div class="card-actions"><a class="card-btn open" href="${escapeHTML(app.open)}" target="_blank" rel="noopener">Open<span aria-hidden="true">↗</span></a><button type="button" class="card-btn more" aria-expanded="false" aria-controls="${id}"><span class="lbl">Learn more</span><span class="chev" aria-hidden="true"></span></button></div>
   <div class="card-more" id="${id}" inert><div class="card-more-in">
   <h4>Inside</h4>
   <div class="app-inside">${app.inside.map(([name, description, shots]) => `<section class="app-part"><h5>${escapeHTML(name)}</h5><p>${escapeHTML(description)}</p>${shots && shots.length ? `<div class="shots">${shots.map((src, k) => `<button type="button" data-shot="${escapeHTML(src)}" data-alt="${escapeHTML(name)}" aria-label="Enlarge ${escapeHTML(name)} ${k + 1}"><img src="${escapeHTML(src)}" alt="${escapeHTML(name)}" loading="lazy" decoding="async"></button>`).join('')}</div>` : ''}</section>`).join('')}</div>
   <h4>Capabilities</h4><ul class="case-features">${app.capabilities.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>
   <div class="case-stack"><h4>Technical stack</h4><ul class="stack-list">${app.stack.map(tech => `<li>${escapeHTML(tech)}</li>`).join('')}</ul></div></div></div>`;
  const button = row.querySelector('.card-btn.more'), more = row.querySelector('.card-more');
  button.addEventListener('click', () => {
   const on = button.getAttribute('aria-expanded') !== 'true';
   button.setAttribute('aria-expanded', String(on)); button.querySelector('.lbl').textContent = on ? 'Show less' : 'Learn more';
   more.classList.toggle('on', on); if (on) more.removeAttribute('inert'); else more.setAttribute('inert', '');
  });
  row.addEventListener('click', event => {
   const shot = event.target.closest('button[data-shot]'); if (!shot) return;
   document.querySelector('#dialog-content').innerHTML = `<img src="${escapeHTML(shot.dataset.shot)}" alt="${escapeHTML(shot.dataset.alt)}"><h2 id="dialog-title">${escapeHTML(shot.dataset.alt)}</h2>`;
   dialog.classList.add('shot'); dialog.showModal(); dialog.scrollTop = 0; document.body.style.overflow = 'hidden';
  });
  return row;
 });
}
function clientCards() {
 return clientWork.map(c => {
  const card = document.createElement('article'); card.className = 'client-card';
  card.innerHTML = `<div class="client-art"><img src="${escapeHTML(c.image)}" alt="${escapeHTML(c.name)}" loading="lazy" decoding="async"></div>
   <div class="client-body">${c.date ? `<span class="eyebrow">${escapeHTML(c.date)}</span>` : ''}<h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.description)}</p>${c.url ? `<a class="text-link" href="${escapeHTML(c.url)}" target="_blank" rel="noopener">Visit<span aria-hidden="true"> ↗</span></a>` : ''}</div>`;
  return card;
 });
}
// Two lists. The one chosen opens first; at its end the other follows on its own.
function renderWork() {
 const host = document.querySelector('#project-list');
 const SEG = { mine: 'For my company', clients: 'For other companies' };
 host.innerHTML = `<div class="seg" role="group" aria-label="Work">${Object.keys(SEG).map(k => `<button type="button" data-seg="${k}" aria-pressed="false">${SEG[k]}</button>`).join('')}</div>
  <div class="seg-lists"><section class="seg-panel" id="seg-mine" data-k="mine"><div class="seg-in"><div class="seg-cards"></div><div class="seg-end" aria-hidden="true"></div></div></section>
  <section class="seg-panel" id="seg-clients" data-k="clients"><div class="seg-in"><div class="client-grid"></div><div class="seg-end" aria-hidden="true"></div></div></section></div>`;
 host.querySelector('#seg-mine .seg-cards').append(...appCards());
 host.querySelector('#seg-clients .client-grid').append(...clientCards());
 const panels = { mine: host.querySelector('#seg-mine'), clients: host.querySelector('#seg-clients') };
 const buttons = [...host.querySelectorAll('[data-seg]')];
 const lists = host.querySelector('.seg-lists');
 let first = 'mine', io = null, arm = 0;
 const other = k => k === 'mine' ? 'clients' : 'mine';
 const setOn = (k, on) => { panels[k].classList.toggle('on', on); if (on) panels[k].removeAttribute('inert'); else panels[k].setAttribute('inert', ''); };
 const mark = k => buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.seg === k)));
 function show(k, scroll) {
  first = k; lists.style.setProperty('--first', k === 'mine' ? '0' : '1');
  panels[k].style.order = '0'; panels[other(k)].style.order = '1'; panels[k].classList.remove('second'); panels[other(k)].classList.add('second');
  setOn(k, true); setOn(other(k), false); mark(k);
  if (io) io.disconnect(); clearTimeout(arm);
  // Watch the end of the open list once it has finished opening, so the other follows only when the reader gets there.
  arm = setTimeout(() => {
   if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting) && first === k) { setOn(other(k), true); io.disconnect(); } }, { rootMargin: '0px 0px 40px 0px' });
    io.observe(panels[k].querySelector('.seg-end'));
   } else setOn(other(k), true);
  }, 700);
  if (scroll) host.scrollIntoView({ block: 'start' });
 }
 buttons.forEach(b => b.addEventListener('click', () => show(b.dataset.seg, true)));
 // While both are open, the button follows the list the reader is in.
 let ticking = false;
 const spy = () => {
  ticking = false;
  if (!(panels.mine.classList.contains('on') && panels.clients.classList.contains('on'))) return;
  const y = innerHeight * .45, hit = ['mine', 'clients'].find(k => { const r = panels[k].getBoundingClientRect(); return r.top <= y && r.bottom > y; });
  if (hit) mark(hit);
 };
 addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
 show('mine', false);
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
renderWork(); renderFashion();



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
