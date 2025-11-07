# Mobile Menu (frontend)
**Ziel:** Vollflächig, zuverlässig, zugänglich.

## Anforderungen
- Vollbild-Overlay (100vw/100vh), Scroll-Lock für Body.
- Öffnen/Schließen via Button mit `aria-expanded`; Schließen per ESC und Off-Click.
- Ein Menü zur Zeit; State sauber aufräumen bei Route-Wechsel.

## Minimal-CSS
.mobile-nav{position:fixed;inset:0;width:100vw;height:100vh;overflow:auto}
body.nav-open{overflow:hidden}

## Minimal-JS (Vanilla)
const btn=document.querySelector('[data-menu-btn]');
const nav=document.querySelector('[data-menu]');
function open(){document.body.classList.add('nav-open');nav.hidden=false;btn.setAttribute('aria-expanded','true');}
function close(){document.body.classList.remove('nav-open');nav.hidden=true;btn.setAttribute('aria-expanded','false');}
btn.addEventListener('click',()=> (btn.getAttribute('aria-expanded')==='true'?close():open()));
nav.addEventListener('click',e=>{ if(e.target.matches('[data-menu-close], .mobile-nav')) close(); });
window.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });

## Checks
- [ ] Öffnen/Schließen funktioniert via Click, Off-Click, ESC.
- [ ] Vollflächig auf 320–428 px, keine „durchscheinende“ Seite.
- [ ] Body-Scroll ist gelockt, Reflow bei Schließen ok.
