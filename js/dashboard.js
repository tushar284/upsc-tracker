const today = todayISO();
document.getElementById('todayLabel').textContent = formatDate(today);
document.getElementById('todayLabel2').textContent = formatDate(today);

function init() {
  const existing = getLogForDate(today);
  if (existing) {
    document.getElementById('logPrelims').value = existing.prelims || '';
    document.getElementById('logCSAT').value = existing.csat || '';
    document.getElementById('logAnthro').value = existing.anthro || '';
    document.getElementById('logCA').value = existing.current_affairs || '';
    document.getElementById('logNotes').value = existing.notes || '';
  }

  const h = getHabitsForDate(today);
  if (h.answer_written) document.getElementById('hq_answer').checked = true;
  if (h.ca_read) document.getElementById('hq_ca').checked = true;
  if (h.class_revised) document.getElementById('hq_revision').checked = true;
  if (h.notes_updated) document.getElementById('hq_notes').checked = true;

  renderStats();
  renderWeekChart();
  renderStreakGrid();
  renderRecentLogs();
}

function quickHabit(key, val) {
  const h = getHabitsForDate(today);
  h[key] = val;
  saveHabitsForDate(today, h);
}

function saveToday() {
  const entry = {
    date: today,
    prelims: parseFloat(document.getElementById('logPrelims').value) || 0,
    csat: parseFloat(document.getElementById('logCSAT').value) || 0,
    anthro: parseFloat(document.getElementById('logAnthro').value) || 0,
    current_affairs: parseFloat(document.getElementById('logCA').value) || 0,
    notes: document.getElementById('logNotes').value.trim(),
  };
  saveDailyLog(entry);
  const msg = document.getElementById('saveMsg');
  msg.textContent = 'Saved! ✓';
  setTimeout(() => msg.textContent = '', 2000);
  renderStats();
  renderWeekChart();
  renderStreakGrid();
  renderRecentLogs();
}

function renderStats() {
  document.getElementById('streakVal').textContent = computeStreak();

  const days = last7Days();
  const logs = getDailyLogs();
  const weekHrs = days.reduce((sum, d) => {
    const l = logs.find(x => x.date === d);
    return sum + (l ? totalHoursForLog(l) : 0);
  }, 0);
  document.getElementById('totalHrsVal').textContent = weekHrs.toFixed(1) + 'h';

  const done = getTopicsDone().size;
  fetch('data/syllabus.json').then(r => r.json()).then(data => {
    let total = 0;
    [data.prelims, data.csat, data.gs1, data.gs2, data.gs3, data.gs4].forEach(s => {
      s.units.forEach(u => total += u.topics.length);
    });
    data.anthropology.paper1.units.forEach(u => total += u.topics.length);
    data.anthropology.paper2.units.forEach(u => total += u.topics.length);
    document.getElementById('topicsDoneVal').textContent =
      total ? Math.round((done / total) * 100) + '%' : '0%';
  });

  document.getElementById('answerCountVal').textContent = getAnswerLogs().length;
}

let weekChartInst = null;
function renderWeekChart() {
  const days = last7Days();
  const logs = getDailyLogs();
  const labels = days.map(d => { const parts = d.split('-'); return parts[2] + '/' + parts[1]; });

  const get = (field) => days.map(d => { const l = logs.find(x => x.date === d); return l ? (l[field] || 0) : 0; });

  if (weekChartInst) weekChartInst.destroy();
  weekChartInst = new Chart(document.getElementById('weekChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Prelims/GS', data: get('prelims'), backgroundColor: '#6c8ef5cc', stack: 'a' },
        { label: 'CSAT', data: get('csat'), backgroundColor: '#f5a623cc', stack: 'a' },
        { label: 'Anthropology', data: get('anthro'), backgroundColor: '#52c99ecc', stack: 'a' },
        { label: 'Curr. Affairs', data: get('current_affairs'), backgroundColor: '#c77dffcc', stack: 'a' },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8892aa', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8892aa' }, grid: { color: '#2e3247' } },
        y: { ticks: { color: '#8892aa' }, grid: { color: '#2e3247' }, title: { display: true, text: 'Hours', color: '#8892aa' } },
      },
    },
  });
}

function renderStreakGrid() {
  const grid = document.getElementById('streakGrid');
  grid.innerHTML = '';
  const logs = getDailyLogs();
  for (let i = 59; i >= 0; i--) {
    const d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
    const log = logs.find(l => l.date === d);
    const hasLog = log && totalHoursForLog(log) > 0;
    const div = document.createElement('div');
    div.className = 'streak-day' + (hasLog ? ' has-log' : '') + (d === today ? ' today' : '');
    div.title = d + (hasLog ? ' (' + totalHoursForLog(log).toFixed(1) + 'h)' : '');
    grid.appendChild(div);
  }
}

function renderRecentLogs() {
  const logs = getDailyLogs().slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14);
  const tbody = document.getElementById('recentBody');
  if (!logs.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="empty">No logs yet. Log today\'s study hours above.</td></tr>';
    return;
  }
  const isClassDayFlag = (iso) => isClassDay(iso) ? '📡' : '';
  tbody.innerHTML = logs.map(l => {
    const total = totalHoursForLog(l);
    return `<tr>
      <td style="white-space:nowrap">${formatDate(l.date)} ${isClassDayFlag(l.date)}</td>
      <td>${l.prelims || 0}h</td>
      <td>${l.csat || 0}h</td>
      <td>${l.anthro || 0}h</td>
      <td>${l.current_affairs || 0}h</td>
      <td><strong>${total.toFixed(1)}h</strong></td>
      <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-muted)">${l.notes || '—'}</td>
    </tr>`;
  }).join('');
}

init();
