// Shared weekly schedule — used by Dashboard (index.html) and Planner (schedule.html).
// Each day: array of [timeRange, taskLabel] pairs. Office hours are context, not tasks.
const schedules = {
  Monday: [
    ['6:30–7:15 AM', '🏋️ Gym'],
    ['7:30–10:00 AM', '✍️ Answer writing + GS revision'],
    ['7:00–8:30 PM', '🎬 Anthropology video series — 2 lessons'],
    ['9:00–10:00 PM', '📰 Current Affairs (The Hindu + PIB)'],
  ],
  Tuesday: [
    ['6:30–7:15 AM', '🏋️ Gym'],
    ['7:30–10:00 AM', '📡 Next IAS Live Class'],
    ['6:30–7:30 PM', '📝 Revise today\'s class notes'],
    ['9:00–10:00 PM', '📰 CA + Anthropology video (1 lesson)'],
  ],
  Wednesday: [
    ['6:30–7:15 AM', '🏋️ Gym'],
    ['7:30–10:00 AM', '📡 Next IAS Live Class'],
    ['6:30–7:30 PM', '✍️ Answer writing — 1 question from class topic'],
    ['9:00–10:00 PM', '📰 CA + Anthropology video (1 lesson)'],
  ],
  Thursday: [
    ['6:30–7:15 AM', '🏋️ Gym'],
    ['7:30–10:00 AM', '✍️ Answer writing — GS topic'],
    ['7:00–8:30 PM', '🎬 Anthropology video series — 2 lessons'],
    ['9:00–10:00 PM', '📰 CA: compile weekly notes'],
  ],
  Friday: [
    ['6:30–7:15 AM', '🏋️ Gym'],
    ['7:30–10:00 AM', '🔁 Weekly revision — skim Mon–Thu notes'],
    ['7:00–8:30 PM', '🎬 Anthropology video series — 2 lessons'],
    ['9:00–10:00 PM', '📰 CA wrap-up for the week'],
  ],
  Saturday: [
    ['7:30–10:00 AM', '📡 Next IAS Live Class'],
    ['11:00 AM–1:30 PM', '📝 Consolidate class notes + 2 answer writings'],
    ['2:00–4:30 PM', '🎬 Anthropology video series — 3 lessons'],
  ],
  Sunday: [
    ['7:30–10:30 AM', '📡 Next IAS Live Class'],
    ['1:30–5:00 PM', '📡 Next IAS CA Class (Live)'],
    ['6:00–7:00 PM', '📰 Compile CA notes'],
    ['7:30–8:30 PM', '🗓️ Plan next week'],
  ],
};
