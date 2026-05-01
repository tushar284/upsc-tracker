let syllabus = null;

async function init() {
  syllabus = await fetch('data/syllabus.json').then(r => r.json());
  renderOverall();
  renderUnits(syllabus.prelims.units, 'tab-prelims', syllabus.prelims.title, 'var(--accent)');
  renderUnits(syllabus.csat.units, 'tab-csat', syllabus.csat.title, '#f5a623');
  renderUnits(syllabus.gs1.units, 'tab-gs1', syllabus.gs1.title, 'var(--accent)');
  renderUnits(syllabus.gs2.units, 'tab-gs2', syllabus.gs2.title, 'var(--accent)');
  renderUnits(syllabus.gs3.units, 'tab-gs3', syllabus.gs3.title, 'var(--accent)');
  renderUnits(syllabus.gs4.units, 'tab-gs4', syllabus.gs4.title, 'var(--accent)');
  renderUnits(syllabus.anthropology.paper1.units, 'tab-anthro1', syllabus.anthropology.paper1.title, 'var(--accent2)');
  renderUnits(syllabus.anthropology.paper2.units, 'tab-anthro2', syllabus.anthropology.paper2.title, 'var(--accent2)');
  renderBooks(syllabus.books, 'tab-books');
}

// ── Tab switching ──────────────────────────────────────────────────────────

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.classList.add('btn-outline');
    });
    btn.classList.add('active');
    btn.classList.remove('btn-outline');
    document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
    document.getElementById('tab-' + btn.dataset.tab).style.display = '';
  });
});

// ── Overall progress ───────────────────────────────────────────────────────

function renderOverall() {
  if (!syllabus) return;
  const done = getTopicsDone();
  const sections = [
    { label: 'Prelims GS', units: syllabus.prelims.units },
    { label: 'CSAT', units: syllabus.csat.units },
    { label: 'GS I (Mains)', units: syllabus.gs1.units },
    { label: 'GS II (Mains)', units: syllabus.gs2.units },
    { label: 'GS III (Mains)', units: syllabus.gs3.units },
    { label: 'GS IV (Mains)', units: syllabus.gs4.units },
    { label: 'Anthropology P1', units: syllabus.anthropology.paper1.units },
    { label: 'Anthropology P2', units: syllabus.anthropology.paper2.units },
  ];
  document.getElementById('overallProgress').innerHTML = sections.map(s => {
    const ids = s.units.flatMap(u => u.topics.map(t => t.id));
    const n = ids.filter(id => done.has(id)).length;
    const pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
    const isAnthro = s.label.includes('Anthro');
    return `<div style="margin-bottom:0.85rem">
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.3rem">
        <span>${s.label}</span><span style="color:var(--text-muted)">${n}/${ids.length}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width:${pct}%;background:${isAnthro ? 'var(--accent2)' : 'var(--accent)'}"></div>
      </div>
    </div>`;
  }).join('');
}

// ── Render units ───────────────────────────────────────────────────────────

function renderUnits(units, containerId, title, color) {
  const done = getTopicsDone();
  const container = document.getElementById(containerId);
  const html = units.map(unit => {
    const doneCount = unit.topics.filter(t => done.has(t.id)).length;
    const pct = Math.round((doneCount / unit.topics.length) * 100);
    return `
      <div class="card" style="margin-bottom:0.75rem">
        <div class="unit-header" onclick="toggleUnit('${unit.id}')">
          <span>${unit.title}</span>
          <span style="font-size:0.8rem;color:var(--text-muted)">${doneCount}/${unit.topics.length} &nbsp; ${pct}%</span>
        </div>
        <div class="progress-bar" style="margin-bottom:0.5rem">
          <div class="progress-bar-fill" style="width:${pct}%;background:${color}" id="bar-${unit.id}"></div>
        </div>
        <ul class="checklist unit-body" id="body-${unit.id}">
          ${unit.topics.map(t => `
            <li class="${done.has(t.id) ? 'done' : ''}" id="li-${t.id}">
              <input type="checkbox" ${done.has(t.id) ? 'checked' : ''}
                onchange="handleCheck('${t.id}', '${unit.id}', ${unit.topics.length}, '${color}')">
              <span>${t.text}</span>
            </li>`).join('')}
        </ul>
      </div>`;
  }).join('');
  container.innerHTML = `<h2>${title}</h2>${html}`;
}

function renderBooks(books, containerId) {
  const progress = getBooksProgress();
  const container = document.getElementById(containerId);
  const subjectColors = { anthro: 'var(--accent2)', gs: 'var(--accent)' };
  const subjectLabels = { anthro: 'Anthro', gs: 'GS' };
  container.innerHTML = `
    <h2>Standard Books</h2>
    <div class="card">
      ${books.map(b => {
        const read = progress[b.id] || 0;
        const pct = Math.round((read / b.totalPages) * 100);
        return `
          <div style="margin-bottom:1.25rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem;flex-wrap:wrap;gap:0.3rem">
              <div>
                <span style="font-weight:600">${b.title}</span>
                <span class="badge ${b.subject === 'anthro' ? 'badge-green' : 'badge-blue'}" style="margin-left:0.5rem">${subjectLabels[b.subject]}</span>
              </div>
              <div style="display:flex;align-items:center;gap:0.5rem">
                <input type="number" min="0" max="${b.totalPages}" value="${read}"
                  style="width:80px;text-align:center"
                  onchange="updateBook('${b.id}', this.value, ${b.totalPages}, '${subjectColors[b.subject]}')">
                <span style="font-size:0.8rem;color:var(--text-muted)">/ ${b.totalPages} pg</span>
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill" id="bbar-${b.id}" style="width:${pct}%;background:${subjectColors[b.subject]}"></div>
            </div>
            <div class="progress-label" id="blbl-${b.id}">${pct}% complete</div>
          </div>`;
      }).join('')}
    </div>`;
}

// ── Event handlers ─────────────────────────────────────────────────────────

function handleCheck(topicId, unitId, total, color) {
  const isNowDone = toggleTopic(topicId);
  const li = document.getElementById('li-' + topicId);
  if (isNowDone) li.classList.add('done'); else li.classList.remove('done');

  const body = document.getElementById('body-' + unitId);
  const doneCount = [...body.querySelectorAll('input[type=checkbox]')].filter(c => c.checked).length;
  const pct = Math.round((doneCount / total) * 100);
  const bar = document.getElementById('bar-' + unitId);
  if (bar) bar.style.width = pct + '%';

  renderOverall();
}

function toggleUnit(id) {
  document.getElementById('body-' + id).classList.toggle('collapsed');
}

function updateBook(bookId, pagesStr, total, color) {
  const pages = Math.min(Math.max(parseInt(pagesStr) || 0, 0), total);
  saveBookProgress(bookId, pages);
  const pct = Math.round((pages / total) * 100);
  const bar = document.getElementById('bbar-' + bookId);
  const lbl = document.getElementById('blbl-' + bookId);
  if (bar) bar.style.width = pct + '%';
  if (lbl) lbl.textContent = pct + '% complete';
}

init();
