const KEYS = {
  DAILY_LOGS: 'daily_logs',
  TOPICS_DONE: 'topics_done',
  ANSWER_LOGS: 'answer_logs',
  TEST_SCORES: 'test_scores',
  CLASS_NOTES: 'class_notes',
  CA_WEEKS: 'ca_weeks',
  BOOKS_PROGRESS: 'books_progress',
  DAILY_HABITS: 'daily_habits',
  MODULE_STATUS: 'module_status',
};

function load(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ── Daily Logs ──────────────────────────────────────────────────────────────
// entry: { date, prelims, gs1, gs2, gs3, gs4, anthro, csat, current_affairs, notes }

function getDailyLogs() { return load(KEYS.DAILY_LOGS) || []; }

function saveDailyLog(entry) {
  const logs = getDailyLogs();
  const idx = logs.findIndex(l => l.date === entry.date);
  if (idx >= 0) logs[idx] = entry; else logs.push(entry);
  save(KEYS.DAILY_LOGS, logs);
}

function getLogForDate(date) {
  return getDailyLogs().find(l => l.date === date) || null;
}

// ── Daily Habits ─────────────────────────────────────────────────────────────
// habits: { date, answer_written, ca_read, class_revised, notes_updated }

function getDailyHabits() { return load(KEYS.DAILY_HABITS) || []; }

function saveHabitsForDate(date, habits) {
  const all = getDailyHabits();
  const idx = all.findIndex(h => h.date === date);
  const entry = { date, ...habits };
  if (idx >= 0) all[idx] = entry; else all.push(entry);
  save(KEYS.DAILY_HABITS, all);
}

function getHabitsForDate(date) {
  return getDailyHabits().find(h => h.date === date) || {};
}

// ── Topics ────────────────────────────────────────────────────────────────────

function getTopicsDone() { return new Set(load(KEYS.TOPICS_DONE) || []); }

function toggleTopic(topicId) {
  const done = getTopicsDone();
  if (done.has(topicId)) done.delete(topicId); else done.add(topicId);
  save(KEYS.TOPICS_DONE, [...done]);
  return done.has(topicId);
}

// ── Books Progress ────────────────────────────────────────────────────────────

function getBooksProgress() { return load(KEYS.BOOKS_PROGRESS) || {}; }

function saveBookProgress(bookId, pagesRead) {
  const p = getBooksProgress();
  p[bookId] = pagesRead;
  save(KEYS.BOOKS_PROGRESS, p);
}

// ── Module Status (Next IAS course) ──────────────────────────────────────────

function getModuleStatuses() { return load(KEYS.MODULE_STATUS) || {}; }

function saveModuleStatus(moduleId, status) {
  const s = getModuleStatuses();
  s[moduleId] = status;
  save(KEYS.MODULE_STATUS, s);
}

// ── Answer Writing ────────────────────────────────────────────────────────────

function getAnswerLogs() { return load(KEYS.ANSWER_LOGS) || []; }

function addAnswerLog(entry) {
  const logs = getAnswerLogs();
  entry.id = entry.id || Date.now().toString();
  logs.unshift(entry);
  save(KEYS.ANSWER_LOGS, logs);
  return entry;
}

function deleteAnswerLog(id) {
  save(KEYS.ANSWER_LOGS, getAnswerLogs().filter(l => l.id !== id));
}

// ── Current Affairs ───────────────────────────────────────────────────────────

function getCAWeeks() { return load(KEYS.CA_WEEKS) || []; }

function saveCAWeek(entry) {
  const weeks = getCAWeeks();
  const idx = weeks.findIndex(w => w.id === entry.id);
  if (idx >= 0) weeks[idx] = entry; else weeks.unshift(entry);
  save(KEYS.CA_WEEKS, weeks);
}

function deleteCAWeek(id) {
  save(KEYS.CA_WEEKS, getCAWeeks().filter(w => w.id !== id));
}

// ── Test Scores ───────────────────────────────────────────────────────────────

function getTestScores() { return load(KEYS.TEST_SCORES) || []; }

function addTestScore(entry) {
  const scores = getTestScores();
  entry.id = entry.id || Date.now().toString();
  scores.unshift(entry);
  save(KEYS.TEST_SCORES, scores);
  return entry;
}

function deleteTestScore(id) {
  save(KEYS.TEST_SCORES, getTestScores().filter(s => s.id !== id));
}

// ── Class Notes ───────────────────────────────────────────────────────────────

function getClassNotes() { return load(KEYS.CLASS_NOTES) || []; }

function addClassNote(entry) {
  const notes = getClassNotes();
  entry.id = entry.id || Date.now().toString();
  notes.unshift(entry);
  save(KEYS.CLASS_NOTES, notes);
  return entry;
}

function updateNoteStatus(id, status) {
  const notes = getClassNotes();
  const idx = notes.findIndex(n => n.id === id);
  if (idx >= 0) { notes[idx].status = status; save(KEYS.CLASS_NOTES, notes); }
}

function deleteClassNote(id) {
  save(KEYS.CLASS_NOTES, getClassNotes().filter(n => n.id !== id));
}

// ── Streak ────────────────────────────────────────────────────────────────────

function computeStreak() {
  const logs = getDailyLogs()
    .filter(l => totalHoursForLog(l) > 0)
    .map(l => l.date)
    .sort().reverse();

  if (!logs.length) return 0;
  const today = todayISO();
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  if (logs[0] !== today && logs[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < logs.length; i++) {
    const diff = (new Date(logs[i - 1]) - new Date(logs[i])) / 864e5;
    if (diff === 1) streak++; else break;
  }
  return streak;
}

function totalHoursForLog(l) {
  return (l.prelims || 0) + (l.gs1 || 0) + (l.gs2 || 0) + (l.gs3 || 0) + (l.gs4 || 0) +
         (l.anthro || 0) + (l.csat || 0) + (l.current_affairs || 0);
}

// ── Utils ─────────────────────────────────────────────────────────────────────

function todayISO() { return new Date().toISOString().slice(0, 10); }

function formatDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function last7Days() {
  return Array.from({ length: 7 }, (_, i) => {
    return new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
  }).reverse();
}

function getDayName(iso) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(iso + 'T00:00:00').getDay()];
}

function isClassDay(iso) {
  const day = new Date(iso + 'T00:00:00').getDay();
  return [0, 2, 3, 6].includes(day); // Sun=0, Tue=2, Wed=3, Sat=6
}

function isOfficeDay(iso) {
  const day = new Date(iso + 'T00:00:00').getDay();
  return day >= 1 && day <= 5; // Mon–Fri
}
