// One animation per card. Each is drawn for what that product does, and they share nothing but the palette.
const cardArt = {
 platform: `<svg viewBox="0 0 320 200" role="img" aria-label="People, tools and an account orbiting one shared layer">
  <circle class="a-ring" cx="160" cy="100" r="34"/><circle class="a-ring" cx="160" cy="100" r="62"/><circle class="a-ring" cx="160" cy="100" r="90" stroke-dasharray="3 6"/>
  <g class="pf-o1"><line class="a-link" x1="160" y1="100" x2="222" y2="100"/><g transform="translate(222 100)"><circle r="12" class="a-fill-b"/><circle cy="-2.5" r="3.4" fill="#fff"/><path d="M-5.4 6a5.4 5.4 0 0 1 10.8 0z" fill="#fff"/></g></g>
  <g class="pf-o2"><line class="a-link" x1="160" y1="100" x2="250" y2="100"/><g transform="translate(250 100)"><circle r="11" class="a-fill-g"/><rect x="-5" y="-5" width="10" height="10" rx="2.4" fill="#fff"/></g></g>
  <g class="pf-o3"><line class="a-link" x1="160" y1="100" x2="194" y2="100"/><g transform="translate(194 100)"><circle r="9" class="a-fill-o"/><circle r="3.2" fill="#fff"/></g></g>
  <g class="pf-o4"><line class="a-link" x1="160" y1="100" x2="222" y2="100"/><g transform="translate(222 100)"><circle r="10" class="a-fill-k"/><path d="M-4-1h8M-4 2h5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></g></g>
  <circle class="pf-pulse" cx="160" cy="100" r="22"/><circle cx="160" cy="100" r="22" class="a-fill-b"/><path d="M149 100h22M160 89v22" stroke="#fff" stroke-width="3" stroke-linecap="round" class="pf-plus"/>
 </svg>`,
 apps: `<svg viewBox="0 0 320 200" role="img" aria-label="One file turning into a page, a slide, a sheet and code while two people edit it">
  <rect class="a-card" x="46" y="26" width="228" height="148" rx="12"/>
  <rect x="46" y="26" width="228" height="22" rx="12" class="a-bar"/><rect x="46" y="40" width="228" height="8" class="a-bar"/>
  <circle cx="60" cy="37" r="3" fill="#ff5f57"/><circle cx="71" cy="37" r="3" fill="#febc2e"/><circle cx="82" cy="37" r="3" fill="#28c840"/>
  <g class="ap-k ap-k1"><rect class="a-line" x="70" y="66" width="120" height="8" rx="4"/><rect class="a-line" x="70" y="84" width="170" height="6" rx="3"/><rect class="a-line" x="70" y="98" width="160" height="6" rx="3"/><rect class="a-line" x="70" y="112" width="176" height="6" rx="3"/><rect class="a-line" x="70" y="126" width="110" height="6" rx="3"/><rect class="a-line" x="70" y="140" width="150" height="6" rx="3"/></g>
  <g class="ap-k ap-k2"><rect class="a-line" x="70" y="62" width="96" height="9" rx="4.5"/><rect class="a-line" x="70" y="78" width="70" height="6" rx="3"/><g class="ap-bars"><rect class="a-fill-b" x="172" y="136" width="14" height="0" rx="3"/><rect class="a-fill-g" x="194" y="136" width="14" height="0" rx="3"/><rect class="a-fill-o" x="216" y="136" width="14" height="0" rx="3"/><rect class="a-fill-k" x="238" y="136" width="14" height="0" rx="3"/></g><path d="M166 138h96" stroke="#c7c7cc" stroke-width="1.5"/></g>
  <g class="ap-k ap-k3"><path class="a-grid" d="M70 62h184M70 82h184M70 102h184M70 122h184M70 142h184M70 62v80M116 62v80M162 62v80M208 62v80M254 62v80"/><rect class="ap-cell" x="116" y="82" width="46" height="20"/><text x="139" y="96" class="a-num">42</text><text x="93" y="96" class="a-num">7</text><text x="185" y="96" class="a-num">=B3</text></g>
  <g class="ap-k ap-k4"><rect class="a-fill-k" x="70" y="62" width="30" height="6" rx="3"/><rect class="a-fill-b" x="106" y="62" width="52" height="6" rx="3"/><rect class="a-line" x="82" y="78" width="84" height="6" rx="3"/><rect class="a-fill-g" x="82" y="94" width="40" height="6" rx="3"/><rect class="a-fill-o" x="128" y="94" width="64" height="6" rx="3"/><rect class="a-line" x="82" y="110" width="110" height="6" rx="3"/><rect class="a-fill-b" x="70" y="126" width="22" height="6" rx="3"/><rect class="ap-caret" x="98" y="124" width="2" height="10"/></g>
  <g class="ap-c1"><path d="M0 0l12 5-5 1.6-1.6 5z" class="a-fill-b"/><rect x="12" y="9" width="30" height="13" rx="6.5" class="a-fill-b"/><circle cx="21" cy="15.5" r="2" fill="#fff"/><circle cx="27" cy="15.5" r="2" fill="#fff"/><circle cx="33" cy="15.5" r="2" fill="#fff"/></g>
  <g class="ap-c2"><path d="M0 0l12 5-5 1.6-1.6 5z" class="a-fill-o"/><rect x="12" y="9" width="30" height="13" rx="6.5" class="a-fill-o"/><circle cx="21" cy="15.5" r="2" fill="#fff"/><circle cx="27" cy="15.5" r="2" fill="#fff"/><circle cx="33" cy="15.5" r="2" fill="#fff"/></g>
 </svg>`,
 guide: `<svg viewBox="0 0 320 200" role="img" aria-label="A cursor moving between a field, a switch and a button while a reply is typed">
  <rect class="a-card" x="28" y="22" width="150" height="156" rx="12"/>
  <rect class="a-line" x="44" y="40" width="70" height="7" rx="3.5"/>
  <rect class="a-input" x="44" y="58" width="118" height="24" rx="7"/><rect class="gd-type" x="52" y="66" width="0" height="8" rx="4"/>
  <rect class="a-line" x="44" y="98" width="52" height="7" rx="3.5"/><rect class="gd-sw" x="124" y="94" width="38" height="18" rx="9"/><circle class="gd-knob" cx="133" cy="103" r="6.5"/>
  <rect class="gd-btn" x="44" y="132" width="118" height="30" rx="15"/><text x="103" y="152" text-anchor="middle" class="gd-btn-t">Send</text>
  <circle class="gd-ripple gd-r1" cx="0" cy="0" r="6"/><circle class="gd-ripple gd-r2" cx="0" cy="0" r="6"/><circle class="gd-ripple gd-r3" cx="0" cy="0" r="6"/>
  <g class="gd-cursor"><path d="M0 0l15 7-6.4 2.1-2.1 6.4z" fill="#1d1d1f" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></g>
  <g class="gd-bub"><rect x="196" y="40" width="96" height="42" rx="16" class="a-fill-b"/><circle class="gd-dot gd-d1" cx="226" cy="61" r="4" fill="#fff"/><circle class="gd-dot gd-d2" cx="244" cy="61" r="4" fill="#fff"/><circle class="gd-dot gd-d3" cx="262" cy="61" r="4" fill="#fff"/></g>
  <g class="gd-reply"><rect x="196" y="100" width="106" height="52" rx="16" class="a-card2"/><rect class="a-line" x="210" y="114" width="74" height="6" rx="3"/><rect class="a-line" x="210" y="128" width="52" height="6" rx="3"/></g>
 </svg>`,
 campus: `<svg viewBox="0 0 320 200" role="img" aria-label="A lecture, interactive notes and a progress bar that fills">
  <rect class="a-card" x="40" y="20" width="240" height="160" rx="12"/>
  <rect x="52" y="32" width="216" height="62" rx="8" class="a-dark"/><path class="cm-play" d="M148 50l24 13-24 13z"/><rect x="60" y="84" width="200" height="3" rx="1.5" fill="#fff" opacity=".25"/><rect class="cm-prog" x="60" y="84" width="200" height="3" rx="1.5"/>
  <rect class="a-line" x="52" y="106" width="96" height="7" rx="3.5"/>
  <g><rect class="cm-opt cm-o1" x="52" y="120" width="64" height="22" rx="11"/><rect class="cm-opt cm-o2" x="124" y="120" width="64" height="22" rx="11"/><rect class="cm-opt cm-o3" x="196" y="120" width="64" height="22" rx="11"/>
  <path class="cm-tick" d="M146 131l4 4 8-9" /></g>
  <rect x="52" y="154" width="216" height="10" rx="5" class="a-line"/><rect class="cm-fill" x="52" y="154" width="216" height="10" rx="5"/>
 </svg>`,
 store: `<svg viewBox="0 0 320 200" role="img" aria-label="A game, a film and a track on a shelf">
  <path class="a-line" d="M26 156h268" stroke-width="3"/>
  <g class="st-t st-t1"><rect class="a-card" x="32" y="52" width="80" height="96" rx="12"/><rect x="42" y="62" width="60" height="50" rx="7" class="a-dark"/>
   <rect class="st-b st-b1" x="52" y="66" width="10" height="10" rx="2"/><rect class="st-b st-b2" x="72" y="66" width="10" height="10" rx="2"/><rect class="st-b st-b3" x="62" y="66" width="10" height="10" rx="2"/>
   <rect class="a-fill-g" x="42" y="104" width="60" height="8" rx="2"/><rect class="a-line" x="42" y="122" width="40" height="6" rx="3"/><rect class="a-line" x="42" y="134" width="26" height="5" rx="2.5"/></g>
  <g class="st-t st-t2"><rect class="a-card" x="120" y="52" width="80" height="96" rx="12"/><rect x="130" y="62" width="60" height="50" rx="7" class="a-dark"/>
   <g class="st-film"><rect x="130" y="62" width="6" height="50" fill="#fff" opacity=".18"/><rect x="184" y="62" width="6" height="50" fill="#fff" opacity=".18"/><path d="M152 77l18 10-18 10z" fill="#fff"/></g>
   <rect class="a-line" x="130" y="122" width="48" height="6" rx="3"/><rect class="a-line" x="130" y="134" width="30" height="5" rx="2.5"/></g>
  <g class="st-t st-t3"><rect class="a-card" x="208" y="52" width="80" height="96" rx="12"/><rect x="218" y="62" width="60" height="50" rx="7" class="a-dark"/>
   <rect class="st-e st-e1" x="226" y="100" width="7" height="0" rx="3"/><rect class="st-e st-e2" x="238" y="100" width="7" height="0" rx="3"/><rect class="st-e st-e3" x="250" y="100" width="7" height="0" rx="3"/><rect class="st-e st-e4" x="262" y="100" width="7" height="0" rx="3"/>
   <rect class="a-line" x="218" y="122" width="44" height="6" rx="3"/><rect class="a-line" x="218" y="134" width="28" height="5" rx="2.5"/></g>
 </svg>`,
 landing: `<svg viewBox="0 0 320 200" role="img" aria-label="A page making room for a window that slides in beside it">
  <rect x="20" y="20" width="280" height="160" rx="14" class="a-dark"/>
  <g class="ld-page"><rect x="28" y="28" width="264" height="144" rx="9" class="a-card"/>
   <rect class="a-fill-k" x="42" y="44" width="92" height="12" rx="6"/><rect class="a-line" x="42" y="66" width="130" height="7" rx="3.5"/><rect class="a-line" x="42" y="80" width="104" height="7" rx="3.5"/>
   <rect class="a-fill-b" x="42" y="100" width="58" height="20" rx="10"/><rect class="a-line" x="108" y="104" width="46" height="12" rx="6"/>
   <rect class="a-tile" x="42" y="132" width="60" height="30" rx="7"/><rect class="a-tile" x="108" y="132" width="60" height="30" rx="7"/><rect class="a-tile" x="174" y="132" width="60" height="30" rx="7"/></g>
  <g class="ld-win"><rect x="0" y="28" width="116" height="144" rx="9" class="a-card2 a-edge"/><rect class="a-line" x="12" y="42" width="52" height="8" rx="4"/><rect class="a-input" x="12" y="62" width="92" height="18" rx="6"/><rect class="a-input" x="12" y="88" width="92" height="18" rx="6"/><rect class="a-fill-b" x="12" y="120" width="92" height="22" rx="11"/><rect class="ld-grip" x="-5" y="84" width="4" height="36" rx="2"/></g>
 </svg>`
};
