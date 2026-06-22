import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'node-html-parser';

// Read the new documentary HTML
let raw = readFileSync('../hhhhhh.txt', 'utf-8');
// Strip trailing non-HTML lines (bash artifacts)
const htmlEnd = raw.lastIndexOf('</html>');
if (htmlEnd !== -1) raw = raw.substring(0, htmlEnd + 7);

const root = parse(raw);

const episodes = root.querySelectorAll('.episode');
const days = [];

for (const ep of episodes) {
  const dayNum = parseInt(ep.querySelector('.ep-day')?.text?.trim() || '0');
  const badgeText = ep.querySelector('.ep-type-badge')?.text?.trim()?.toLowerCase() || '';
  let type = 'raw';
  if (badgeText.includes('lesson')) type = 'lesson';
  else if (badgeText.includes('proof')) type = 'proof';

  const hook = ep.querySelector('.ep-hook')?.text?.trim() || '';
  const beatEl = ep.querySelector('.ep-beat');
  const storyBeat = beatEl?.text?.trim() || '';
  const subtitle = `Day ${dayNum} / 30`;

  // Parse scenes from ep-chapter elements
  const scenes = [];
  const chapters = ep.querySelectorAll('.ep-chapter');
  for (const ch of chapters) {
    const sceneNum = ch.querySelector('.chapter-num')?.text?.trim() || '';
    const sceneTitle = ch.querySelector('.chapter-title')?.text?.trim() || '';
    const timing = ch.querySelector('.chapter-timing')?.text?.trim() || '';
    const timingSec = (() => {
      // Parse "0:00 – 0:05" format to get duration in seconds
      const parts = timing.split('–').map(s => s.trim());
      if (parts.length === 2) {
        const toSec = (t) => { const [m, s] = t.split(':').map(Number); return m * 60 + s; };
        return toSec(parts[1]) - toSec(parts[0]);
      }
      return parseInt(timing) || 0;
    })();
    const direction = ch.querySelector('.chapter-dir')?.text?.trim() || '';
    const scriptEl = ch.querySelector('.chapter-script');
    const text = scriptEl?.text?.trim() || '';

    // Check for insight box inside chapter content
    const insightEl = ch.querySelector('.insight-box .insight-text');
    const insightText = insightEl?.text?.trim() || '';

    scenes.push({
      id: sceneNum,
      title: sceneTitle,
      timingSec,
      direction,
      text: insightText ? text + '\n\n[Insight: ' + insightText + ']' : text
    });
  }

  // Caption
  const captionEl = ep.querySelector('.caption-text');
  const caption = captionEl?.text?.trim() || '';

  // Counter bar text
  const counterEl = ep.querySelector('.counter-label');
  const counterText = counterEl?.text?.trim() || '';

  // Week
  let week = 1;
  if (dayNum > 21) week = 4;
  else if (dayNum > 14) week = 3;
  else if (dayNum > 7) week = 2;

  days.push({
    day: dayNum,
    week,
    type,
    hook,
    subtitle,
    storyBeat,
    scenes,
    caption,
    counterBar: counterText,
    goalDzd: 40000000,
    status: dayNum <= 9 ? 'posted' : 'not_started',
  });
}

console.log(`Parsed ${days.length} days`);

// Generate TypeScript
let ts = `export type ContentType = 'lesson' | 'raw' | 'proof';
export type Status = 'not_started' | 'filming' | 'editing' | 'posted';
export type Assignee = 'You' | 'Ayoub' | 'Mohamed' | 'Imad';

export interface Scene {
  id: string;
  title: string;
  timingSec: number;
  direction: string;
  text: string;
}

export interface DayEntry {
  day: number;
  week: number;
  type: ContentType;
  hook: string;
  subtitle: string;
  storyBeat: string;
  scenes: Scene[];
  caption: string;
  counterBar: string;
  goalDzd: number;
  status: Status;
  assignee?: Assignee;
  actualPostDate?: string;
  actualDzd?: number;
  actualClients?: number;
  notes?: string;
}

export const SEED_DAYS: DayEntry[] = ${JSON.stringify(days, null, 2)};
`;

writeFileSync('src/data/days.ts', ts, 'utf-8');
console.log('Written to src/data/days.ts');
