const educationOpen = document.getElementById('openEducation');
const educationModal = document.getElementById('educationModal');
const caseModal = document.getElementById('caseModal');
const caseContent = document.getElementById('caseContent');
const backdrop = document.getElementById('backdrop');

const cases = {
  campaignops: {
    title: 'Creator Campaign Operations',
    deck: 'A workflow-centered case showing how creator campaigns move from sourcing to publication.',
    challenge: 'Creator campaigns require much more than outreach. The process needs creator research, a clean tracker, internal team communication, follow-up discipline, draft review, and launch management.',
    contribution: 'I supported the workflow end to end: identifying creators based on brand fit, personalizing outreach, maintaining the tracker, surfacing useful information to the team, coordinating approvals, and moving content through to publication and post-launch learning.',
    process: [
      ['01','Select the right creators','Screen creators against content fit, audience fit, and the brand’s product or platform requirements.'],
      ['02','Personalize outreach','Reference a specific angle or piece of content so the collaboration feels relevant rather than generic.'],
      ['03','Build the tracker','Track creator fit, quoted terms, status, follow-up, draft stage, posting stage, and next action in one place.'],
      ['04','Coordinate internally','Summarize creator options, pricing, and open questions clearly so the team can decide quickly.'],
      ['05','Guide execution','Support contracts, shipping, draft feedback, final approvals, and the publishing checklist.'],
      ['06','Optimize later','Use performance learnings privately to improve future creator selection and content direction.']
    ],
    metrics: [
      ['End-to-end','campaign workflow'],
      ['1 tracker','shared source of truth'],
      ['Launch-ready','from outreach to posting']
    ],
    evidence: [
      ['workflow-tracker-proof.png','Redacted tracker view showing how campaign progress, creator info, and next steps were organized.']
    ]
  },
  bestqool: {
    title: 'Creator Response Optimization',
    deck: 'A playbook-based case focused on improving outreach quality through better creator categorization and sourcing logic.',
    challenge: 'When reply quality is inconsistent, the answer is not simply more outreach. The real improvement comes from clearer creator categorization, higher-fit selection, and a more disciplined plan.',
    contribution: 'I translated workbook and playbook logic into a cleaner operating approach: defining creator categories, using fit-based prioritization, tightening the ask, and improving how the team chooses and follows up with creators.',
    process: [
      ['01','Define creator categories','Group creators by content pattern and use case such as recovery / mobility, healthy aging, beauty-device review, and home wellness.'],
      ['02','Check fit before outreach','Review recent content and make sure there is a natural way for the product to enter the creator’s existing content style.'],
      ['03','Tier the longlist','Use A / B / C prioritization so the best creators get the deepest research and strongest personalization first.'],
      ['04','Clarify collaboration angles','Frame a collaboration around a specific content observation and a natural integration angle with a clear ask.'],
      ['05','Run the workflow systematically','Use quote tracking, follow-up timing, and structured next steps rather than ad hoc outreach.'],
      ['06','Optimize the sourcing plan','Refine the creator pool, angle, and prioritization based on quote quality and campaign progress.']
    ],
    metrics: [
      ['A / B / C','priority system'],
      ['6/day','qualified quote target'],
      ['Fit-first','outreach logic']
    ],
    visualText: 'This case is intentionally shown as a planning framework instead of reusing the same tracker evidence. The goal is to show how I think about creator categories and optimization logic.',
    evidence: []
  },
  cygnus: {
    title: 'Cygnus / VEGA',
    deck: 'A recruiting work sample built around ICP filtering, buyer mapping, and ARR forecasting.',
    challenge: 'VEGA needed a clearer way to narrow the target market, focus outreach on the right institutional roles, and connect assumptions to revenue outcomes.',
    contribution: 'I supported market research, segmentation, buyer-role analysis, and Excel-based forecasting to translate a broad higher-education market into a more practical GTM view.',
    process: [
      ['01','Filter the market','Narrow the U.S. higher-education universe into a smaller qualified target set.'],
      ['02','Map buyer roles','Identify which institutional roles appeared most often in the reachable contact set.'],
      ['03','Benchmark assumptions','Compare assumptions with a more realistic B2B SaaS motion.'],
      ['04','Forecast ARR in Excel','Model low, base, and high scenarios using engaged accounts, win rates, and ACV.'],
      ['05','Turn analysis into action','Use the model to inform priorities, KPIs, and outreach logic.']
    ],
    metrics: [
      ['6,041 → 292','target narrowing'],
      ['128 / 37','contacts / institutions'],
      ['~$600k','base-case ARR']
    ],
    evidence: [
      ['cygnus-funnel.png','Market filtering from a broad Title IV universe to a qualified 292-school target universe.'],
      ['cygnus-buyers.png','Buyer-role mapping showing the strongest GTM entry points.'],
      ['cygnus-arr.png','Scenario-based revenue forecasting as an example of efficient Excel modeling.']
    ],
    doc: 'cygnus-vega-work-sample.pdf'
  },
  wellness: {
    title: 'Creator Campaign Planning for a Wellness Brand',
    deck: 'An anonymized campaign-planning case that shows how I would plan, execute, measure, and optimize a creator campaign.',
    challenge: 'The brand needed a creator strategy that matched different products to the right creators, clarified which platform should do what, and created a better path from awareness to conversion.',
    contribution: 'I structured the campaign around creator-product fit, channel roles, and content reuse. The flow was not just about activation — it was about planning the campaign logic, managing execution, and using outcomes to improve the next round.',
    process: [
      ['01','Plan the creator mix','Match products to creator types based on audience need, use case, and content style.'],
      ['02','Assign channel roles','Use Instagram and TikTok for discovery and demonstration, and YouTube for deeper evaluation and conversion support.'],
      ['03','Execute the campaign','Activate creators, guide content direction, and make sure the output fits the intended use case.'],
      ['04','Measure by channel role','Evaluate each platform based on what it is meant to do in the campaign journey.'],
      ['05','Optimize the next cycle','Use results to decide renewals, new creator angles, content reuse, and future allocation.']
    ],
    metrics: [
      ['Plan','creator + channel logic'],
      ['Execute','campaign roll-out'],
      ['Optimize','future campaign direction']
    ],
    visualText: 'For confidentiality, this case focuses on the planning logic rather than showing supporting evidence images.'
  },
  hasmo: {
    title: 'SEO Growth & Performance Marketing',
    deck: 'A digital marketing case from Hasmo Consulting showing how I turned competitor research, keyword planning, content production, analytics, and paid search support into one connected growth workflow.',
    challenge: 'Hasmo operated in a crowded B2B consulting category where multiple firms competed for similar search terms across digital transformation, process automation, CRM / ERP implementation, and IT consulting. The marketing challenge was not simply to publish more content, but to identify the highest-value search opportunities and make website structure, content, and paid search more aligned with user intent.',
    contribution: 'I worked across the research-to-optimization cycle: auditing competitors, organizing a 200+ keyword opportunity tracker, producing SEO content assets, analyzing Google Analytics behavior, and supporting Google Ads setup. My role was to connect those activities so that research informed content, analytics informed page updates, and paid search stayed aligned with landing-page intent.',
    process: [
      ['01','Map the competitive search landscape','Audited 5+ consulting competitors and compared service-page structure, keyword emphasis, blog topics, meta copy, and calls-to-action to identify patterns and gaps.'],
      ['02','Prioritize 200+ keyword opportunities','Built a structured keyword tracker across core consulting service areas and prioritized terms by search intent, business relevance, and ranking opportunity.'],
      ['03','Translate keyword strategy into content','Created optimized service-page copy, blog outlines, FAQ modules, meta titles / descriptions, and LinkedIn post drafts so the keyword plan could become usable marketing content.'],
      ['04','Diagnose behavior with Google Analytics','Reviewed traffic sources, top landing pages, engagement rate, average session duration, and page drop-off patterns to identify where content or page structure could be improved.'],
      ['05','Connect paid search to landing-page intent','Supported Google Ads setup through keyword grouping, search ad copy, and landing-page alignment, then monitored CTR, CPC, and conversion performance.'],
      ['06','Turn performance data into the next action','Used organic and paid performance signals to recommend changes to page structure, internal linking, content coverage, targeting, and messaging.']
    ],
    metrics: [
      ['5+','competitor websites audited'],
      ['200+','keywords prioritized'],
      ['+23%','organic traffic growth']
    ],
    customVisual: `
      <div class="hasmo-visual">
        <div class="hasmo-label">RECONSTRUCTED PORTFOLIO VISUALIZATION</div>
        <p class="hasmo-note">The original internship working files are no longer available, so this section reconstructs the workflow from the project scope on my resume. It is not presented as an original client dashboard or tracker.</p>
        <div class="hasmo-flow">
          <div class="hasmo-panel">
            <span>01 · COMPETITOR AUDIT</span>
            <h4>What I compared</h4>
            <div class="mini-tags"><b>Keyword focus</b><b>Service pages</b><b>Blog topics</b><b>Meta copy</b><b>CTAs</b></div>
          </div>
          <div class="hasmo-panel">
            <span>02 · KEYWORD SYSTEM</span>
            <h4>How I prioritized 200+ terms</h4>
            <div class="keyword-table">
              <div><b>Search intent</b><em>What is the user trying to solve?</em></div>
              <div><b>Business relevance</b><em>Does the term map to a core service?</em></div>
              <div><b>Ranking opportunity</b><em>Is there a realistic path to visibility?</em></div>
            </div>
          </div>
          <div class="hasmo-panel wide">
            <span>03 · ANALYTICS → ACTION</span>
            <h4>Turning page behavior into optimization decisions</h4>
            <div class="signal-grid">
              <div><small>Signal</small><strong>Landing-page drop-off</strong><p>Review page structure, relevance, and CTA clarity.</p></div>
              <div><small>Signal</small><strong>Weak engagement</strong><p>Improve content depth, internal linking, or information hierarchy.</p></div>
              <div><small>Signal</small><strong>Paid search performance</strong><p>Refine keyword groups, ad copy, and landing-page alignment.</p></div>
            </div>
          </div>
        </div>
      </div>`,
    visualText: 'This reconstructed visual shows the decision system behind the work without presenting invented client screenshots or confidential account data.'
  }
};

function openModal(modal){
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeModal(modal){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if(!document.querySelector('.modal.open')){
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
}

educationOpen.addEventListener('click', () => openModal(educationModal));

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-close');
    closeModal(document.getElementById(id));
  });
});
backdrop.addEventListener('click', () => {
  document.querySelectorAll('.modal.open').forEach(closeModal);
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal);
});

function renderCase(key){
  const c = cases[key];
  if(!c) return;
  const process = c.process.map(([n,title,body]) => `
    <div class="case-step">
      <span>${n}</span>
      <b>${title}</b>
      <p>${body}</p>
    </div>`).join('');

  const metrics = c.metrics.map(([big,label]) => `
    <div class="metric">
      <strong>${big}</strong>
      <span>${label}</span>
    </div>`).join('');

  const evidence = c.customVisual ? c.customVisual : (c.evidence && c.evidence.length ? `
    <div class="evidence-grid">
      ${c.evidence.map(([src,cap]) => `
        <figure class="evidence">
          <img src="${src}" alt="${cap}">
          <figcaption>${cap}</figcaption>
        </figure>`).join('')}
    </div>` : `<div class="case-visual"><h4>Notes</h4><p>${c.visualText || 'No public supporting evidence is shown for this case.'}</p></div>`);

  const doc = c.doc ? `<a class="link-pill" href="${c.doc}" target="_blank" rel="noopener">Open work sample PDF</a>` : '';

  caseContent.innerHTML = `
    <p class="eyebrow">CASE STUDY</p>
    <h2>${c.title}</h2>
    <p class="lede">${c.deck}</p>
    <div class="case-layout">
      <div class="case-intro">
        <div class="case-box"><h4>Challenge</h4><p>${c.challenge}</p></div>
        <div class="case-box"><h4>My contribution</h4><p>${c.contribution}</p></div>
      </div>
      <div class="case-process">${process}</div>
      <div class="metrics">${metrics}</div>
      ${evidence}
      ${doc}
    </div>`;
  openModal(caseModal);
}

document.querySelectorAll('.case-card').forEach(card => {
  card.addEventListener('click', () => renderCase(card.dataset.case));
});
