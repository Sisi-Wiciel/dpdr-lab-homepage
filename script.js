const data = window.siteContent;

const renderCards = (id, items, template) => {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = items.map(template).join('');
};

renderCards('researchGrid', data.research, item => `
  <article class="research-card">
    <h3>${item.title}</h3>
    <div class="en-subtitle">${item.titleEn || ''}</div>
    <p>${item.desc}</p>
    <p class="en-text">${item.descEn || ''}</p>
    <div class="chip-row">${item.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
  </article>
`);

renderCards('pubList', data.publications, item => `
  <article class="pub-card">
    <h3>${item.title}</h3>
    <div class="pub-meta"><strong>${item.journal || ''}</strong> · ${item.year || ''}${item.doi ? ` · DOI: ${item.doi}` : ''}</div>
    <div class="author-line">${item.authors || ''}</div>
    <p>${item.note}</p>
    <p class="en-text">${item.noteEn || ''}</p>
    <div class="chip-row">${(item.tags || []).map(t => `<span class="chip">${t}</span>`).join('')}</div>
    <div class="link-row">
      ${item.url ? `<a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">DOI Link</a>` : ''}
      ${item.pmidUrl ? `<a class="text-link" href="${item.pmidUrl}" target="_blank" rel="noreferrer">PubMed</a>` : ''}
    </div>
  </article>
`);

renderCards('teamGrid', data.team, item => `
  <article class="team-card">
    <div class="avatar">${item.name.slice(0,1)}</div>
    <h3>${item.name}</h3>
    <div class="en-subtitle">${item.nameEn || ''}</div>
    <div class="team-role">${item.role}</div>
    <p>${item.desc}</p>
    <p class="en-text">${item.descEn || ''}</p>
  </article>
`);

renderCards('projectGrid', data.projects, item => `
  <article class="project-card">
    <h3>${item.title}</h3>
    <div class="en-subtitle">${item.titleEn || ''}</div>
    <div class="project-meta">${item.meta}</div>
    <p>${item.desc}</p>
    <p class="en-text">${item.descEn || ''}</p>
  </article>
`);

renderCards('translationTimeline', data.translation, item => `
  <article class="timeline-item">
    <h3>${item.stage}</h3>
    <div class="en-subtitle">${item.stageEn || ''}</div>
    <p>${item.desc}</p>
    <p class="en-text">${item.descEn || ''}</p>
  </article>
`);

renderCards('newsList', data.news, item => `
  <article class="news-card">
    <h3>${item.title}</h3>
    <div class="news-meta">${item.meta}</div>
    <p>${item.desc}</p>
    <p class="en-text">${item.descEn || ''}</p>
  </article>
`);

const softwareList = document.getElementById('softwareList');
if (softwareList && data.assets?.software) {
  softwareList.innerHTML = data.assets.software.map(item => `<span class="chip">${item}</span>`).join('');
}

const patentList = document.getElementById('patentList');
if (patentList && data.assets?.patents) {
  patentList.innerHTML = data.assets.patents.map(item => `<span class="chip">${item}</span>`).join('');
}

const pipelineList = document.getElementById('pipelineList');
if (pipelineList && data.assets?.pipeline) {
  pipelineList.innerHTML = `<ul class="clean-list">${data.assets.pipeline.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
}
