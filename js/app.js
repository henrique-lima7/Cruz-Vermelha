/* ═══════════════════════════════════════════
   app.js — Lógica de roteamento e interação
   Cruz Vermelha Brasileira
═══════════════════════════════════════════ */

const routes    = ['inicio','quem-somos','projetos','noticias','como-ajudar','contato'];
const navLabels = ['Início','Quem somos','Projetos','Notícias','Como ajudar','Contato'];

// Suporte a páginas standalone (ex: pages/projetos.html define window._initialRoute)
let currentRoute = (typeof window._initialRoute !== 'undefined') ? window._initialRoute : 'inicio';

// Detecta se estamos em subpasta /pages/ para ajustar caminhos de assets
const isSubPage = window.location.pathname.includes('/pages/');
const rootPath  = isSubPage ? '../' : '';

/* ── ROUTER ── */
function navigate(route) {
  if (route === currentRoute) return;
  closeDrawer();
  const tr = document.getElementById('transition');
  tr.classList.add('fade-in');
  setTimeout(() => {
    currentRoute = route;
    renderApp();
    tr.classList.remove('fade-in');
    tr.classList.add('fade-out');
    setTimeout(() => tr.classList.remove('fade-out'), 200);
  }, 200);
}

/* ── DRAWER MOBILE ── */
let drawerOpen = false;
function toggleDrawer() {
  drawerOpen = !drawerOpen;
  document.getElementById('mobile-drawer').classList.toggle('open', drawerOpen);
  document.getElementById('drawer-overlay').classList.toggle('open', drawerOpen);
  const btn = document.getElementById('hamburger-btn');
  if (btn) btn.classList.toggle('open', drawerOpen);
}
function closeDrawer() {
  drawerOpen = false;
  document.getElementById('mobile-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  const btn = document.getElementById('hamburger-btn');
  if (btn) btn.classList.remove('open');
}
function buildDrawer() {
  const nav = document.getElementById('drawer-nav');
  nav.innerHTML = routes.map((r,i)=>
    `<a class="${r===currentRoute?'active':''}" data-nav="${r}">${navLabels[i]}</a>`
  ).join('');
  nav.querySelectorAll('[data-nav]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.nav)));
  document.querySelectorAll('#mobile-drawer [data-modal]').forEach(el=>el.addEventListener('click',()=>{closeDrawer();openModal();}));
}
document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);

/* ── MODAL ── */
function openModal() {
  if (!sessionStorage.getItem('cvb_logged')) {
    window.location.href = rootPath + 'pages/login.html';
    return;
  }
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); }
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
// Botão "Confirmar doação" abre o popup de confirmação
const confirmDoacaoBtn = document.querySelector('.modal-footer .btn-primary');
if (confirmDoacaoBtn) {
  confirmDoacaoBtn.addEventListener('click', openConfirmPopup);
}

document.querySelectorAll('.modal-tab').forEach(tab=>{
  tab.addEventListener('click', function(){
    document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.modal-panel').forEach(p=>p.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('modal-panel-'+this.dataset.tab).classList.add('active');
  });
});
function selectPill(el) {
  el.closest('.amount-pills').querySelectorAll('.amount-pill').forEach(p=>p.classList.remove('selected'));
  el.classList.add('selected');
}

/* ── POPUP DE CONFIRMAÇÃO ── */
function getActiveTab() {
  const activeTab = document.querySelector('.modal-tab.active');
  return activeTab ? activeTab.dataset.tab : 'sangue';
}

function getDadosSangue() {
  const panel = document.getElementById('modal-panel-sangue');
  if (!panel) return {};
  const inputs = panel.querySelectorAll('.modal-input, .modal-select');
  return {
    nome:         inputs[0]?.value?.trim() || '—',
    nascimento:   inputs[1]?.value ? formatDate(inputs[1].value) : '—',
    tipo:         inputs[2]?.value || '—',
    telefone:     inputs[3]?.value?.trim() || '—',
    unidade:      panel.querySelector('.modal-select:last-of-type')?.value || '—',
  };
}

function getDadosFinanceiro() {
  const selected = document.querySelector('.amount-pill.selected');
  return { valor: selected ? selected.textContent.trim() : '—' };
}

function formatDate(val) {
  if (!val) return '—';
  const [y,m,d] = val.split('-');
  return `${d}/${m}/${y}`;
}

function buildConfirmContent(tab) {
  if (tab === 'sangue') {
    const d = getDadosSangue();
    return `
      <div class="confirm-icon-wrap">
        <div class="confirm-icon">🩸</div>
      </div>
      <div class="confirm-body">
        <div class="confirm-title" id="confirm-title">Confirmar doação de sangue?</div>
        <div class="confirm-subtitle">Revise seus dados antes de confirmar. Entraremos em contato em até 1 dia útil para agendar.</div>
      </div>
      <div class="confirm-card">
        <div class="confirm-row">
          <span class="confirm-row-label">Nome</span>
          <span class="confirm-row-value">${d.nome}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-row-label">Nascimento</span>
          <span class="confirm-row-value">${d.nascimento}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-row-label">Tipo sanguíneo</span>
          <span class="confirm-row-value">${d.tipo}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-row-label">Telefone</span>
          <span class="confirm-row-value">${d.telefone}</span>
        </div>
      </div>
      <div class="confirm-footer">
        <button class="btn-primary" id="confirm-ok-btn">Confirmar doação →</button>
        <button class="btn-ghost" id="confirm-back-btn">← Voltar e editar</button>
      </div>`;
  } else {
    const d = getDadosFinanceiro();
    return `
      <div class="confirm-icon-wrap">
        <div class="confirm-icon">💳</div>
      </div>
      <div class="confirm-body">
        <div class="confirm-title" id="confirm-title">Confirmar doação financeira?</div>
        <div class="confirm-subtitle">Você receberá um recibo automaticamente após a confirmação do pagamento.</div>
      </div>
      <div class="confirm-card">
        <div class="confirm-row">
          <span class="confirm-row-label">Valor</span>
          <span class="confirm-row-value">${d.valor}</span>
        </div>
      </div>
      <div class="confirm-footer">
        <button class="btn-primary" id="confirm-ok-btn">Confirmar doação →</button>
        <button class="btn-ghost" id="confirm-back-btn">← Voltar e editar</button>
      </div>`;
  }
}

function buildSuccessContent(tab) {
  const isSangue = tab === 'sangue';
  return `
    <div class="confirm-icon-wrap">
      <div class="confirm-success-icon">✅</div>
    </div>
    <div class="confirm-body">
      <div class="confirm-title">${isSangue ? 'Solicitação enviada!' : 'Doação confirmada!'}</div>
      <div class="confirm-subtitle">${isSangue
        ? 'Obrigado! Entraremos em contato em até 1 dia útil para confirmar seu agendamento.'
        : 'Obrigado pela sua generosidade! O recibo será enviado ao seu e-mail em breve.'}</div>
    </div>
    <div class="confirm-footer">
      <button class="btn-primary" id="confirm-close-final">Fechar</button>
    </div>`;
}

function openConfirmPopup() {
  ensureConfirmOverlay();
  const tab     = getActiveTab();
  const overlay = document.getElementById('confirm-overlay');
  const popup   = document.getElementById('confirm-popup');
  if (!overlay || !popup) return;

  popup.innerHTML = buildConfirmContent(tab);
  overlay.classList.add('open');

  document.getElementById('confirm-ok-btn').addEventListener('click', () => {
    popup.innerHTML = buildSuccessContent(tab);
    document.getElementById('confirm-close-final').addEventListener('click', () => {
      closeConfirmPopup();
      closeModal();
    });
  });

  document.getElementById('confirm-back-btn').addEventListener('click', closeConfirmPopup);
  overlay.addEventListener('click', function handler(e) {
    if (e.target === overlay) { closeConfirmPopup(); overlay.removeEventListener('click', handler); }
  });
}

function closeConfirmPopup() {
  const overlay = document.getElementById('confirm-overlay');
  if (overlay) overlay.classList.remove('open');
}

function ensureConfirmOverlay() {
  if (document.getElementById('confirm-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'confirm-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = '<div class="confirm-popup" id="confirm-popup"></div>';
  document.body.appendChild(overlay);
}


function toggleHighContrast() {
  document.body.classList.toggle('hc');
  document.querySelectorAll('.a11y-btn').forEach(b=>b.classList.toggle('active', document.body.classList.contains('hc')));
}

/* ── LOGOUT ── */
function logout() {
  sessionStorage.removeItem('cvb_logged');
  sessionStorage.removeItem('cvb_user');
  renderApp();
}

/* ── FILTROS ── */
function applyFilter(container, chipEl, itemSel, tagAttr) {
  container.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  chipEl.classList.add('active');
  const val = chipEl.textContent.trim();
  let count = 0;
  container.querySelectorAll(itemSel).forEach(item=>{
    const tag = item.getAttribute(tagAttr) || '';
    const show = val==='Todos'||val==='Todas'||tag===val;
    item.classList.toggle('hidden', !show);
    if(show) count++;
  });
  const empty = container.querySelector('.filter-empty');
  if(empty) empty.classList.toggle('visible', count===0);
}

/* ── FORMULÁRIO ── */
function handleFormSubmit() {
  const content = document.getElementById('form-content');
  const loading = document.getElementById('form-loading');
  const success = document.getElementById('form-success');
  if(!content||!loading||!success) return;
  content.style.display = 'none';
  loading.classList.add('visible');
  setTimeout(()=>{ loading.classList.remove('visible'); success.classList.add('visible'); }, 1400);
}

/* ── RENDER ── */
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(buildHeader());
  const pageWrap = document.createElement('div');
  pageWrap.className = 'page-view active';
  if(currentRoute !== 'inicio') {
    const crumb = document.createElement('div');
    crumb.className = 'breadcrumb';
    crumb.innerHTML = `<a data-nav="inicio">Início</a><span class="sep">›</span><span class="cur">${navLabels[routes.indexOf(currentRoute)]}</span>`;
    crumb.querySelector('a').onclick = ()=>navigate('inicio');
    pageWrap.appendChild(crumb);
  }
  const inner = document.createElement('div');
  inner.className = 'scroll-inner';
  inner.innerHTML = buildPage(currentRoute);
  pageWrap.appendChild(inner);
  app.appendChild(pageWrap);
  buildDrawer();
  bindEvents(pageWrap);
  setTimeout(initScrollReveal, 120);
}

function buildHeader() {
  const h = document.createElement('header');
  h.className = 'header';
  h.innerHTML = `
    <div class="logo" data-nav="inicio">
      <div class="logo-box"><div class="logo-cross"></div></div>
      <div class="logo-text"><strong>Cruz Vermelha</strong><span>Brasileira</span></div>
    </div>
    <button class="hamburger" id="hamburger-btn" aria-label="Abrir menu"><span></span><span></span><span></span></button>
    <nav>
      ${routes.map((r,i)=>`<a class="${r===currentRoute?'active':''}" data-nav="${r}">${navLabels[i]}</a>`).join('')}
    </nav>
    <div class="header-right">
      <div class="search-wrap">
        <svg viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <input type="text" placeholder="Buscar no site...">
      </div>
      <div class="a11y-btn" title="Alternar alto contraste" id="a11y-toggle">
        <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 0 1 0 12V2z" fill="currentColor"/><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/></svg>
      </div>
      <button class="btn-header" data-modal="true">🩸 Doe agora</button>
      ${sessionStorage.getItem('cvb_logged')
        ? `<div class="user-badge">
             <span>👤 ${sessionStorage.getItem('cvb_user') || 'Usuário'}</span>
             <button class="user-logout" onclick="logout()">Sair</button>
           </div>`
        : `<a href="${rootPath}pages/login.html" class="btn-login-header">Entrar</a>`
      }
    </div>`;
  h.querySelector('#hamburger-btn').addEventListener('click', toggleDrawer);
  h.querySelector('#a11y-toggle').addEventListener('click', toggleHighContrast);
  return h;
}

function bindEvents(container) {
  container.querySelectorAll('[data-nav]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.nav)));
  document.querySelectorAll('.header [data-nav]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.nav)));
  container.querySelectorAll('[data-modal]').forEach(el=>el.addEventListener('click',openModal));
  const projHeader = container.querySelector('.projetos-header-bar');
  if(projHeader) projHeader.querySelectorAll('.filter-chip').forEach(chip=>
    chip.addEventListener('click',function(){ applyFilter(container, this, '.projeto-card[data-tag]','data-tag'); }));
  const notHeader = container.querySelector('.noticias-filter-bar');
  if(notHeader) notHeader.querySelectorAll('.filter-chip').forEach(chip=>
    chip.addEventListener('click',function(){ applyFilter(container, this, '.noticia-row[data-tag]','data-tag'); }));
  const submitBtn = container.querySelector('#form-submit-btn');
  if(submitBtn) submitBtn.addEventListener('click', handleFormSubmit);
}

function buildPage(route) {
  switch(route){
    case 'inicio':      return pageInicio();
    case 'quem-somos':  return pageQuemSomos();
    case 'projetos':    return pageProjetos();
    case 'noticias':    return pageNoticias();
    case 'como-ajudar': return pageComoAjudar();
    case 'contato':     return pageContato();
    default: return pageInicio();
  }
}

/* ── BOOT ── */
renderApp();


/* ════════════════════════════
   SCROLL REVEAL + CONTADORES NOS STATS
════════════════════════════ */
function initScrollReveal() {
  addRevealClasses();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stat')) {
          animateStatNum(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stat').forEach(el => {
    observer.observe(el);
  });
}



function addRevealClasses() {
  // Cards de ação
  document.querySelectorAll('.acao-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.1) + 's';
  });
  // Cards de notícias
  document.querySelectorAll('.news-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.08) + 's';
  });
  // Section bodies
  document.querySelectorAll('.section-body').forEach(el => {
    el.classList.add('reveal');
  });
  // Mapa
  const mapa = document.querySelector('.mapa-inner');
  if (mapa) mapa.classList.add('reveal');
  // Filiais
  document.querySelectorAll('.filial-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.07) + 's';
  });
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateStatNum(statEl) {
  const numEl = statEl.querySelector('.stat-num');
  if (!numEl || numEl.dataset.animated) return;
  numEl.dataset.animated = '1';

  const rawText = numEl.textContent.trim(); // e.g. "4.2M" "18K+" "116"
  const match = rawText.match(/^([\d.]+)([^\d.]*)$/);
  if (!match) return;

  const targetVal = parseFloat(match[1]);
  const suffix    = match[2] || '';
  const decimals  = (match[1].includes('.')) ? 1 : 0;
  const duration  = 1400;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased    = easeOutExpo(progress);
    const current  = targetVal * eased;
    numEl.textContent = current.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else numEl.textContent = rawText;
  }
  requestAnimationFrame(tick);
}



