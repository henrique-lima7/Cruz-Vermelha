/**
 * pages.js
 * Módulo de templates de página — cada função retorna o HTML interno da rota.
 * Importado por app.js via <script src="js/pages.js"> antes do app.js.
 */

/* ─────────── HOME ─────────── */
function pageInicio() {
  return `
  <div class="hero">
    <div class="hero-visual">
      <div class="hero-visual-bg"></div>
      <div class="hero-visual-overlay"></div>
      <div class="hero-visual-pattern"></div>
      <div class="hero-content">
        <div class="hero-eyebrow">Desde 1908 · Presente em todo o Brasil</div>
        <h1 class="hero-title">Humanidade em <em>cada</em> ação que tomamos</h1>
        <p class="hero-desc">A Cruz Vermelha Brasileira atua em situações de emergência, promove saúde e dignidade — sempre ao lado de quem mais precisa.</p>
        <div class="hero-ctas">
          <button class="btn-primary" data-modal="true">🩸 Doe sangue agora</button>
          <button class="btn-ghost" style="color:#fff;border-color:rgba(255,255,255,0.4);" data-nav="como-ajudar">Seja voluntário →</button>
        </div>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hero-panel-label">Urgente</div>
      <div class="hero-panel-title">Estoque crítico de sangue O−</div>
      <p>Hemocentros em SP e RJ estão abaixo de 30% da capacidade. Cada doação pode salvar até 4 vidas.</p>
      <a class="link-arrow" data-nav="quem-somos">Conheça nossa história <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <div class="urgency-banner" data-modal="true">
        <div class="urgency-icon">
          <svg viewBox="0 0 18 18" fill="none"><path d="M9 2C6 6 3 8.5 3 11a6 6 0 0 0 12 0c0-2.5-3-5-6-9z" stroke="#fff" stroke-width="1.5"/></svg>
        </div>
        <div class="urgency-text">
          <strong>Agendar doação →</strong>
          <span>Leva apenas 45 minutos · Sem custo</span>
        </div>
      </div>
    </div>
  </div>

  <div class="stats">
    ${[['4.2M','Vidas beneficiadas em 2024'],['312','Projetos ativos no Brasil'],['18K+','Voluntários cadastrados'],['116','Anos de história']]
      .map(([n,l])=>`<div class="stat"><div class="stat-num">${n}</div><div class="stat-label">${l}</div></div>`).join('')}
  </div>

  <div class="section-body">
    <span class="section-label">O que fazemos</span>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <div class="section-title" style="margin-bottom:0;">Nossas áreas de atuação</div>
      <a class="link-arrow" data-nav="projetos">Ver todos os projetos <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
    <div class="acoes-grid">
      ${[
        {title:'Doação de Sangue',desc:'Conectamos doadores a hemocentros. Processo seguro, rápido e que salva até 4 vidas por doação.',icon:`<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 7.5 5 10.5 5 14a7 7 0 0 0 14 0c0-3.5-4-7-7-11z" stroke="#CC1B1B" stroke-width="1.5"/></svg>`,nav:'como-ajudar'},
        {title:'Assistência Humanitária',desc:'Apoio imediato em desastres, conflitos e situações de vulnerabilidade em todo o território nacional.',icon:`<svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#CC1B1B" stroke-width="1.5"/><polyline points="9,22 9,12 15,12 15,22" stroke="#CC1B1B" stroke-width="1.5"/></svg>`,nav:'projetos'},
        {title:'Saúde e Bem-estar',desc:'Programas de prevenção, primeiros socorros e capacitação para comunidades em situação de risco.',icon:`<svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#CC1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,nav:'projetos'},
      ].map(c=>`
        <div class="acao-card" data-nav="${c.nav}">
          <div class="acao-icon">${c.icon}</div>
          <div class="acao-title">${c.title}</div>
          <div class="acao-desc">${c.desc}</div>
          <a class="link-arrow" data-nav="${c.nav}">Saiba mais <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>`).join('')}
    </div>
  </div>

  <div class="section-body">
    <div class="noticias-header">
      <div>
        <span class="section-label">Últimas notícias</span>
        <div class="section-title" style="margin-bottom:0;">Fique por dentro</div>
      </div>
      <a class="link-arrow" data-nav="noticias">Ver todas <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
    <div class="noticias-grid">
      <div class="news-card" data-nav="noticias">
        <div class="news-img news-img-main">
          <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80" alt="Doação de sangue">
        </div>
        <div class="news-body">
          <div class="news-meta"><span class="tag">Doação</span><span class="news-date">12 jan 2025</span></div>
          <div class="news-title">Campanha de inverno bate recorde com 42 mil doações em SP</div>
          <div class="news-excerpt">Em parceria com prefeituras e hospitais, a CVB mobilizou doadores em 80 cidades durante julho e agosto.</div>
          <a class="link-arrow" style="font-size:11px;" data-nav="noticias">Ler mais <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
      <div class="news-card" data-nav="noticias">
        <div class="news-img news-img-sm">
          <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80" alt="Voluntários">
        </div>
        <div class="news-body">
          <div class="news-meta"><span class="tag">Voluntariado</span><span class="news-date">5 jan 2025</span></div>
          <div class="news-title-sm">Novos voluntários recebem treinamento em primeiros socorros</div>
          <a class="link-arrow" style="font-size:11px;" data-nav="noticias">Ler mais <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
      <div class="news-card" data-nav="noticias">
        <div class="news-img news-img-sm">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80" alt="Emergência">
        </div>
        <div class="news-body">
          <div class="news-meta"><span class="tag">Emergência</span><span class="news-date">28 dez 2024</span></div>
          <div class="news-title-sm">CVB responde a enchentes no RS com equipes de emergência</div>
          <a class="link-arrow" style="font-size:11px;" data-nav="noticias">Ler mais <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
    </div>
  </div>

  <div class="section-body">
    <span class="section-label">Localização</span>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div class="section-title-sm" style="margin-bottom:0;">Nossas unidades em SP</div>
      <a class="link-arrow" style="font-size:12px;" data-nav="contato">Ver todas no mapa <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
    <div class="mapa-inner">
      <div class="map-frame">
        <iframe
          id="gmaps-home"
          class="real-map"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58884.44!2d-46.6965!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sCruz%20Vermelha%20Brasileira%20-%20Filial%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1"
        ></iframe>
        <div class="map-label">📍 São Paulo — 4 unidades</div>
      </div>
      <div class="filiais">
        <div class="filiais-header">Unidades abertas hoje</div>
        ${[
          ['Sede Central',    'Seg–Sex · 08h–18h', true,  'https://maps.google.com/?q=Cruz+Vermelha+Brasileira+Sao+Paulo'],
          ['Unidade Lapa',    'Seg–Sex · 07h–16h', true,  'https://maps.google.com/?q=Lapa+Sao+Paulo'],
          ['Unidade Tatuapé', 'Seg–Sex · 08h–18h', true,  'https://maps.google.com/?q=Tatuape+Sao+Paulo'],
          ['Unidade Santo André','Seg–Sex · 08h–17h',false,'https://maps.google.com/?q=Santo+Andre+SP']
        ].map(([n,m,open,url])=>`
          <a class="filial-item filial-link" href="${url}" target="_blank" rel="noopener">
            <div class="filial-name"><span class="filial-status${open?'':' closed'}"></span>${n}</div>
            <div class="filial-meta">${m} <span class="filial-arrow">↗</span></div>
          </a>`).join('')}
      </div>
    </div>
  </div>

  <div class="section-body" style="text-align:center;padding:56px 32px;">
    <span class="section-label">Junte-se a nós</span>
    <div class="section-title" style="max-width:480px;margin:0 auto 12px;">Sua ajuda faz a diferença</div>
    <p class="body-text" style="max-width:440px;margin:0 auto 28px;">Seja como doador, voluntário ou parceiro — cada contribuição alimenta uma corrente de solidariedade que transforma vidas.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button class="btn-primary" data-modal="true">🩸 Doe agora</button>
      <button class="btn-ghost" data-nav="como-ajudar">Seja voluntário</button>
    </div>
  </div>
  ${footer()}`;
}

/* ─────────── QUEM SOMOS ─────────── */
function pageQuemSomos() {
  return `
  <div class="sobre-hero">
    <div class="sobre-text">
      <span class="section-label">Nossa história</span>
      <div class="section-title">Mais de um século de humanidade</div>
      <p class="body-text">Fundada em 1908, a Cruz Vermelha Brasileira é uma das organizações humanitárias mais antigas do país. Atuamos em conformidade com os Princípios Fundamentais do Movimento Internacional da Cruz Vermelha e do Crescente Vermelho.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">
        <button class="btn-primary" data-modal="true">Apoie nossa missão</button>
        <button class="btn-ghost" data-nav="contato">Entre em contato</button>
      </div>
    </div>
    <div class="sobre-img">
      <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=700&q=80" alt="História CVB">
      <div class="sobre-img-overlay"></div>
    </div>
  </div>

  <div class="section-body">
    <span class="section-label">Nossa trajetória</span>
    <div class="section-title-sm">Linha do tempo</div>
    <div class="timeline">
      ${[
        ['1908','Fundação','A Cruz Vermelha Brasileira é fundada no Rio de Janeiro, então capital do país, seguindo os ideais de Henry Dunant.'],
        ['1916','Primeira missão','Envio de equipes médicas ao front europeu durante a Primeira Guerra Mundial, consolidando a presença internacional da CVB.'],
        ['1942','Expansão nacional','Abertura de filiais em todos os estados brasileiros e intensificação das atividades de saúde pública.'],
        ['1988','Nova constituição','Reconhecimento formal como sociedade auxiliar dos poderes públicos na área humanitária pela Constituição Federal.'],
        ['2010','Resposta ao Haiti','Mobilização de mais de 200 voluntários e R$ 18 milhões em recursos para a reconstrução após o terremoto.'],
        ['2020','Pandemia COVID-19','Distribuição de mais de 5 milhões de itens de proteção e apoio a populações vulneráveis em todo o Brasil.'],
        ['2024','Centenário digital','Lançamento de plataformas digitais para facilitar doações, voluntariado e rastreamento de impacto em tempo real.'],
      ].map(([y,t,d])=>`
        <div class="timeline-item">
          <div class="timeline-year">${y}</div>
          <div class="timeline-content">
            <div class="timeline-title">${t}</div>
            <div class="timeline-desc">${d}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>

  <div class="section-body" style="background:var(--white);">
    <span class="section-label">Princípios</span>
    <div class="section-title-sm">Nossos valores fundamentais</div>
    <div class="values-grid">
      ${[
        ['Humanidade','Prevenir e aliviar o sofrimento humano em todas as circunstâncias.',`<svg viewBox="0 0 20 20" fill="none"><path d="M10 18s-7-4.35-7-9a7 7 0 0 1 14 0c0 4.65-7 9-7 9z" stroke="#CC1B1B" stroke-width="1.5"/></svg>`],
        ['Imparcialidade','Não fazemos distinção de nacionalidade, raça, religião ou opinião política.',`<svg viewBox="0 0 20 20" fill="none"><path d="M10 2v16M2 10h16" stroke="#CC1B1B" stroke-width="1.5" stroke-linecap="round"/></svg>`],
        ['Neutralidade','Não tomamos partido em hostilidades nem controvérsias de natureza política.',`<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#CC1B1B" stroke-width="1.5"/><path d="M6 10h8" stroke="#CC1B1B" stroke-width="1.5" stroke-linecap="round"/></svg>`],
        ['Independência','Mantemos autonomia para agir de acordo com os princípios do Movimento.',`<svg viewBox="0 0 20 20" fill="none"><path d="M10 2l2.5 5 5.5.8-4 3.9.95 5.5L10 14.75 5.05 17.2 6 11.7 2 7.8l5.5-.8L10 2z" stroke="#CC1B1B" stroke-width="1.5"/></svg>`],
      ].map(([t,d,icon])=>`
        <div class="value-card">
          <div class="value-icon">${icon}</div>
          <div class="value-title">${t}</div>
          <div class="value-desc">${d}</div>
        </div>`).join('')}
    </div>
  </div>

  <div class="section-body">
    <span class="section-label">Nossa equipe</span>
    <div class="section-title-sm" style="margin-bottom:20px;">Liderança institucional</div>
    <div class="team-grid">
      ${[
        ['Dra. Ana Ferreira','Presidenta Nacional','https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80'],
        ['Dr. Carlos Mendes','Diretor de Operações','https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80'],
        ['Dra. Juliana Costa','Diretora de Saúde','https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80'],
        ['Eng. Paulo Lima','Diretor de TI','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80'],
      ].map(([n,r,img])=>`
        <div class="team-card">
          <div class="team-avatar"><img src="${img}" alt="${n}"></div>
          <div class="team-info">
            <div class="team-name">${n}</div>
            <div class="team-role">${r}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>
  ${footer()}`;
}

/* ─────────── PROJETOS ─────────── */
function pageProjetos() {
  const projetos = [
    {tag:'Saúde',title:'Banco de Sangue Móvel',desc:'Unidades itinerantes que percorrem comunidades remotas e municípios sem hemocentro fixo.',img:'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80',pct:78,meta:'312 de 400 coletas'},
    {tag:'Emergência',title:'Brigadas de Resposta Rápida',desc:'Equipes treinadas para atuar nas primeiras 72h após desastres naturais em todo o país.',img:'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',pct:92,meta:'R$ 2,3M de R$ 2,5M'},
    {tag:'Educação',title:'Primeiros Socorros nas Escolas',desc:'Capacitação de professores e alunos em técnicas básicas de primeiros socorros e RCP.',img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',pct:55,meta:'8.200 de 15.000 alunos'},
    {tag:'Vulnerabilidade',title:'Apoio a Refugiados',desc:'Assistência jurídica, psicológica e de documentação para famílias refugiadas em SP e RJ.',img:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',pct:41,meta:'1.840 de 4.500 famílias'},
    {tag:'Saúde',title:'Triagem Neonatal',desc:'Parcerias com maternidades públicas para ampliação do teste do pezinho e acompanhamento familiar.',img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',pct:68,meta:'R$ 680K de R$ 1M'},
    {tag:'Educação',title:'Voluntários pela Educação',desc:'Reforço escolar e mentorias para crianças em situação de vulnerabilidade socioeconômica.',img:'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&q=80',pct:83,meta:'996 de 1.200 crianças'},
  ];
  return `
  <div class="projetos-header-bar">
    <span class="section-label">Iniciativas ativas</span>
    <div class="projetos-page-title">Nossos Projetos</div>
    <div class="filter-bar">
      ${['Todos','Saúde','Emergência','Educação','Vulnerabilidade'].map((f,i)=>`<div class="filter-chip${i===0?' active':''}">${f}</div>`).join('')}
    </div>
  </div>
  <div class="projetos-grid">
    ${projetos.map(p=>`
      <div class="projeto-card" data-tag="${p.tag}">
        <div class="projeto-img"><img src="${p.img}" alt="${p.title}"></div>
        <div class="projeto-body">
          <div class="projeto-tag-line"><span class="tag">${p.tag}</span></div>
          <div class="projeto-title">${p.title}</div>
          <div class="projeto-desc">${p.desc}</div>
          <div class="projeto-progress-wrap">
            <div class="projeto-progress-bar"><div class="projeto-progress-fill" style="width:${p.pct}%"></div></div>
            <div class="projeto-progress-meta"><span>${p.pct}% atingido</span><span>${p.meta}</span></div>
          </div>
          <button class="btn-outline-red" data-modal="true">Apoiar projeto →</button>
        </div>
      </div>`).join('')}
    <div class="filter-empty">Nenhum projeto encontrado para este filtro.</div>
  </div>
  ${footer()}`;
}

/* ─────────── NOTÍCIAS ─────────── */
function pageNoticias() {
  const noticias = [
    {tag:'Doação',date:'12 jan 2025',title:'Campanha de verão bate recorde com 42 mil doações em SP',excerpt:'Em parceria com prefeituras e hospitais, a CVB mobilizou doadores em 80 cidades durante janeiro.',img:'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'},
    {tag:'Emergência',date:'8 jan 2025',title:'CVB lidera resposta humanitária às enchentes no Vale do Ribeira',excerpt:'Mais de 300 voluntários foram mobilizados em menos de 24h para atender famílias desabrigadas.',img:'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80'},
    {tag:'Voluntariado',date:'5 jan 2025',title:'Novos voluntários recebem treinamento em primeiros socorros',excerpt:'600 pessoas concluíram o curso básico oferecido gratuitamente pela CVB em dezembro.',img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80'},
    {tag:'Parceria',date:'28 dez 2024',title:'CVB e Ministério da Saúde firmam acordo para ampliar bancos de sangue',excerpt:'Investimento de R$ 45 milhões vai criar 12 novos hemocentros em regiões carentes.',img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'},
    {tag:'Saúde',date:'20 dez 2024',title:'Programa de triagem neonatal atinge 50 mil bebês no interior de SP',excerpt:'Parceria com maternidades municipais garante acesso ao teste do pezinho ampliado.',img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80'},
    {tag:'Educação',date:'15 dez 2024',title:'Escola pública de Heliópolis recebe aulas de primeiros socorros',excerpt:'Iniciativa-piloto vai capacitar 800 alunos do ensino fundamental até março de 2025.',img:'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=400&q=80'},
    {tag:'Internacional',date:'10 dez 2024',title:'CVB envia equipe à resposta humanitária na América Central',excerpt:'Seis profissionais de saúde atuam em coordenação com o CICV após passagem de furacão.',img:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80'},
    {tag:'Doação',date:'3 dez 2024',title:'Doação de medula óssea: CVB cadastra 12 mil novos doadores em 2024',excerpt:'Campanha nacional sensibilizou brasileiros sobre a importância do registro no REDOME.',img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80'},
  ];
  return `
  <div class="section-body" style="padding-bottom:0;">
    <span class="section-label">Imprensa & Comunicação</span>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0;">
      <div class="section-title" style="margin-bottom:0;">Notícias</div>
    </div>
  </div>
  <div class="section-body" style="padding-top:20px;padding-bottom:8px;border-bottom:none;">
    <div class="noticias-filter-bar filter-bar">
      ${['Todas','Doação','Emergência','Voluntariado','Saúde','Educação','Parceria','Internacional'].map((f,i)=>`<div class="filter-chip${i===0?' active':''}">${f}</div>`).join('')}
    </div>
  </div>
  <div class="noticias-list">
    ${noticias.map(n=>`
      <div class="noticia-row" data-tag="${n.tag}">
        <div class="noticia-thumb"><img src="${n.img}" alt="${n.title}"></div>
        <div class="noticia-body">
          <div class="noticia-meta"><span class="tag">${n.tag}</span><span class="noticia-date">${n.date}</span></div>
          <div class="noticia-title">${n.title}</div>
          <div class="noticia-excerpt">${n.excerpt}</div>
          <a class="link-arrow" style="font-size:12px;">Ler matéria completa <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>`).join('')}
    <div class="filter-empty">Nenhuma notícia encontrada para esta categoria.</div>
  </div>
  <div class="pagination">
    ${[1,2,3,'…',8].map((p,i)=>`<div class="page-btn${i===0?' current':''}">${p}</div>`).join('')}
    <div class="page-btn">›</div>
  </div>
  ${footer()}`;
}

/* ─────────── COMO AJUDAR ─────────── */
function pageComoAjudar() {
  return `
  <div class="ajudar-hero">
    <span class="section-label" style="color:rgba(255,255,255,0.7);">Faça parte</span>
    <div class="ajudar-title">Como você pode ajudar</div>
    <div class="ajudar-subtitle">Existem muitas formas de contribuir com a missão da Cruz Vermelha. Encontre a que mais combina com você.</div>
    <div class="ajudar-opts">
      <button class="btn-primary" style="background:rgba(255,255,255,0.2);border:1.5px solid rgba(255,255,255,0.4);" data-modal="true">🩸 Doe sangue</button>
      <button class="btn-primary" style="background:rgba(255,255,255,0.2);border:1.5px solid rgba(255,255,255,0.4);" data-modal="true">💳 Doe recursos</button>
      <button class="btn-primary" style="background:rgba(255,255,255,0.2);border:1.5px solid rgba(255,255,255,0.4);" data-modal="true">🤝 Seja voluntário</button>
    </div>
  </div>

  <div class="ajudar-cards">
    ${[
      {
        title:'Doação de Sangue',sub:'O gesto mais simples que salva 4 vidas',icon:`<svg viewBox="0 0 26 26" fill="none"><path d="M13 3C9.5 8 5 11 5 15a8 8 0 0 0 16 0c0-4-4.5-7-8-12z" stroke="#CC1B1B" stroke-width="1.5"/></svg>`,
        reqs:['Ter entre 16 e 69 anos (menores com autorização)','Pesar no mínimo 50 kg','Estar em bom estado de saúde','Não ter ingerido bebida alcoólica nas 12h anteriores','Ter dormido pelo menos 6 horas']
      },
      {
        title:'Voluntariado',sub:'Doe seu tempo e talento',icon:`<svg viewBox="0 0 26 26" fill="none"><path d="M13 22s-9-5.5-9-11a9 9 0 0 1 18 0c0 5.5-9 11-9 11z" stroke="#CC1B1B" stroke-width="1.5"/><circle cx="13" cy="11" r="3" stroke="#CC1B1B" stroke-width="1.5"/></svg>`,
        reqs:['Ter 18 anos ou mais','Disponibilidade mínima de 4h semanais','Comprometimento com os valores da CVB','Participar do treinamento introdutório obrigatório','Habilidades específicas são bem-vindas (médicos, advogados, TI)']
      },
      {
        title:'Doação Financeira',sub:'100% dos recursos são auditados',icon:`<svg viewBox="0 0 26 26" fill="none"><rect x="4" y="7" width="18" height="13" rx="2.5" stroke="#CC1B1B" stroke-width="1.5"/><path d="M4 11h18" stroke="#CC1B1B" stroke-width="1.5"/><rect x="8" y="15" width="5" height="2" rx="1" fill="#CC1B1B" opacity=".4"/></svg>`,
        reqs:['A partir de R$ 10 por mês (recorrente)','Recibo fiscal emitido automaticamente','Dedutível no IR para pessoas jurídicas','Relatório de impacto trimestral','Transparência total no uso dos recursos']
      },
      {
        title:'Doação de Itens',sub:'Roupas, alimentos e medicamentos',icon:`<svg viewBox="0 0 26 26" fill="none"><path d="M5 7h16v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z" stroke="#CC1B1B" stroke-width="1.5"/><path d="M2 7h22M10 7V5a2 2 0 0 1 4 0v2" stroke="#CC1B1B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        reqs:['Roupas em bom estado (limpas e higienizadas)','Alimentos não perecíveis dentro da validade','Medicamentos lacrados e dentro do prazo','Itens de higiene pessoal','Consultar lista de necessidades no site']
      },
    ].map(c=>`
    <div class="ajudar-card">
      <div class="ajudar-card-header">
        <div class="ajudar-card-icon">${c.icon}</div>
        <div><div class="ajudar-card-title">${c.title}</div><div class="ajudar-card-subtitle">${c.sub}</div></div>
      </div>
      <div class="ajudar-reqs">${c.reqs.map(r=>`<div class="req-item"><div class="req-dot"></div>${r}</div>`).join('')}</div>
      <button class="btn-outline-red" data-modal="true">Quero participar →</button>
    </div>`).join('')}
  </div>
  ${footer()}`;
}

/* ─────────── CONTATO ─────────── */
function pageContato() {
  return `
  <div class="contato-layout">
    <div class="contato-info">
      <span class="section-label">Fale conosco</span>
      <div class="contato-page-title">Contato</div>
      <div class="contato-block">
        <div class="contato-label">Endereço</div>
        <div class="contato-value">Rua Voluntários da Pátria, 100<br>São Paulo — SP, 01310-000</div>
      </div>
      <div class="contato-block">
        <div class="contato-label">Telefone</div>
        <div class="contato-value">(11) 3825-0000<br>0800 282 0000 (gratuito)</div>
      </div>
      <div class="contato-block">
        <div class="contato-label">E-mail</div>
        <div class="contato-value">contato@cvb.org.br<br>imprensa@cvb.org.br</div>
      </div>
      <div class="contato-block">
        <div class="contato-label">Horário de atendimento</div>
        <div class="contato-value">Segunda a sexta<br>08h às 18h</div>
      </div>
      <div class="social-row" style="margin-top:8px;">
        <div class="social-btn">f</div>
        <div class="social-btn">in</div>
        <div class="social-btn">ig</div>
        <div class="social-btn">yt</div>
      </div>
    </div>
    <div class="contato-form">
      <div id="form-content">
        <div class="form-title">Envie uma mensagem</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Nome *</label>
            <input class="form-input" type="text" placeholder="Seu nome completo">
          </div>
          <div class="form-group">
            <label class="form-label">E-mail *</label>
            <input class="form-input" type="email" placeholder="seu@email.com.br">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Telefone</label>
            <input class="form-input" type="tel" placeholder="(11) 99999-0000">
          </div>
          <div class="form-group">
            <label class="form-label">Assunto *</label>
            <select class="form-select">
              <option value="">Selecione um assunto</option>
              <option>Doação de Sangue</option>
              <option>Voluntariado</option>
              <option>Doação Financeira</option>
              <option>Projetos e Parcerias</option>
              <option>Imprensa</option>
              <option>Outro</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Mensagem *</label>
          <textarea class="form-textarea" placeholder="Descreva sua mensagem em detalhes..."></textarea>
        </div>
        <div class="form-hint">* Campos obrigatórios. Respondemos em até 2 dias úteis.</div>
        <button class="btn-primary" id="form-submit-btn">Enviar mensagem →</button>
      </div>
      <div class="form-loading-state" id="form-loading">
        <div class="spinner"></div>
        <p style="font-size:13px;color:var(--ink3);">Enviando sua mensagem…</p>
      </div>
      <div class="form-success-state" id="form-success">
        <div class="success-circle">
          <svg viewBox="0 0 28 28" fill="none"><polyline points="6,15 11,21 22,9" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="success-title">Mensagem enviada!</div>
        <p class="success-msg">Recebemos seu contato e responderemos em até 2 dias úteis. Obrigado por se conectar com a Cruz Vermelha Brasileira.</p>
        <button class="btn-ghost" onclick="location.reload()">Enviar outra mensagem</button>
      </div>
    </div>
  </div>

  <div class="section-body">
    <span class="section-label">Localização</span>
    <div class="section-title-sm" style="margin-bottom:16px;">Nossas unidades</div>
    <div class="mapa-inner">
      <div class="map-frame">
        <iframe
          class="real-map"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58884.44!2d-46.6965!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sCruz%20Vermelha%20Brasileira%20-%20Filial%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1"
        ></iframe>
        <div class="map-label">📍 São Paulo — 4 unidades</div>
      </div>
      <div class="filiais">
        <div class="filiais-header">Todas as unidades</div>
        ${[
          ['Sede Central',     'Seg–Sex · 08h–18h', true,  'https://maps.google.com/?q=Cruz+Vermelha+Brasileira+Sao+Paulo'],
          ['Unidade Lapa',     'Seg–Sex · 07h–16h', true,  'https://maps.google.com/?q=Lapa+Sao+Paulo'],
          ['Unidade Tatuapé',  'Seg–Sex · 08h–18h', true,  'https://maps.google.com/?q=Tatuape+Sao+Paulo'],
          ['Unidade Santo André','Seg–Sex · 08h–17h',false, 'https://maps.google.com/?q=Santo+Andre+SP']
        ].map(([n,m,open,url])=>`
          <a class="filial-item filial-link" href="${url}" target="_blank" rel="noopener">
            <div class="filial-name"><span class="filial-status${open?'':' closed'}"></span>${n}</div>
            <div class="filial-meta">${m} <span class="filial-arrow">↗</span></div>
          </a>`).join('')}
      </div>
    </div>
  </div>
  ${footer()}`;
}

/* ─────────── FOOTER ─────────── */
function footer() {
  return `
  <footer class="footer">
    <div class="footer-cols">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-box"><div class="footer-logo-cross"></div></div>
          <span class="footer-brand">Cruz Vermelha Brasileira</span>
        </div>
        <p class="footer-desc">Promovendo humanidade, imparcialidade e neutralidade desde 1908. Presente em todos os estados do Brasil, trabalhando por quem mais precisa.</p>
        <div class="social-row">
          <div class="social-btn">f</div>
          <div class="social-btn">in</div>
          <div class="social-btn">ig</div>
          <div class="social-btn">yt</div>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Institucional</div>
        <div class="footer-links">
          <span class="footer-link" data-nav="quem-somos">Sobre nós</span>
          <span class="footer-link" data-nav="quem-somos">Transparência</span>
          <span class="footer-link" data-nav="contato">Trabalhe conosco</span>
          <span class="footer-link" data-nav="contato">Política de privacidade</span>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Como ajudar</div>
        <div class="footer-links">
          <span class="footer-link" data-nav="como-ajudar">Doe sangue</span>
          <span class="footer-link" data-nav="como-ajudar">Doação financeira</span>
          <span class="footer-link" data-nav="como-ajudar">Voluntariado</span>
          <span class="footer-link" data-nav="projetos">Parcerias</span>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Contato</div>
        <div class="footer-links">
          <span class="footer-link" style="color:rgba(255,255,255,0.4);cursor:default;">(11) 3825-0000</span>
          <span class="footer-link" style="color:rgba(255,255,255,0.4);cursor:default;">contato@cvb.org.br</span>
          <span class="footer-link" style="color:rgba(255,255,255,0.4);cursor:default;">Seg–Sex · 08h–18h</span>
          <span class="footer-link" data-nav="contato">Fale conosco</span>
        </div>
      </div>
    </div>
    <hr class="footer-divider">
    <div class="footer-copy">© 2025 Cruz Vermelha Brasileira. Todos os direitos reservados. CNPJ 03.650.918/0001-69</div>
  </footer>`;
}
