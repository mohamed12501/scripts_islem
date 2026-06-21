import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'node-html-parser';

const html = readFileSync('../30_scripts_upgraded.html', 'utf-8');
const root = parse(html);

const blocks = root.querySelectorAll('.script-block');
const days = [];

for (const block of blocks) {
  const dayNum = parseInt(block.querySelector('.day-num')?.text?.trim() || '0');
  const badgeText = block.querySelector('.type-badge')?.text?.trim()?.toLowerCase() || '';
  let type = 'raw';
  if (badgeText.includes('lesson')) type = 'lesson';
  else if (badgeText.includes('proof')) type = 'proof';

  const hook = block.querySelector('.block-hook')?.text?.trim() || '';
  const subtitle = block.querySelector('.block-sub')?.text?.trim() || '';

  const scenes = [];
  const sceneDivs = block.querySelectorAll('.scene');
  for (const scene of sceneDivs) {
    const sceneNum = scene.querySelector('.scene-num')?.text?.trim() || '';
    const sceneTitle = scene.querySelector('.scene-title')?.text?.trim() || '';
    const timing = scene.querySelector('.scene-timing')?.text?.trim() || '';
    const timingSec = parseInt(timing) || 0;
    const direction = scene.querySelector('.scene-dir')?.text?.trim() || '';
    const scriptTexts = scene.querySelectorAll('.script-text');
    const text = scriptTexts.map(s => s.text.trim()).join('\n');
    scenes.push({ id: sceneNum, title: sceneTitle, timingSec, direction, text });
  }

  // Caption
  const captionEl = block.querySelector('.caption-text');
  const caption = captionEl?.text?.trim() || '';

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
    scenes,
    caption,
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
  scenes: Scene[];
  caption: string;
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
