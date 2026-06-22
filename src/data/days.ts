export type ContentType = 'lesson' | 'raw' | 'proof';
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

export const SEED_DAYS: DayEntry[] = [
  {
    "day": 1,
    "week": 1,
    "type": "raw",
    "hook": "\"We just walked in. Nobody's said the quiet part out loud yet.\"",
    "subtitle": "Day 1 / 30",
    "storyBeat": "Story beat: The first frame of a documentary is a promise. Don't explain the challenge — drop the viewer into the middle of arrival. The tension is already there before anyone speaks.",
    "scenes": [
      {
        "id": "S1",
        "title": "Arrival — Face cam, car",
        "timingSec": 5,
        "direction": "Film from inside the car, pulling up. Don't speak yet. 3 seconds of silence. Let the anticipation sit.",
        "text": "\"Day 1. We just arrived. 30 days starts right now.\""
      },
      {
        "id": "S2",
        "title": "Walking In — Wide shot",
        "timingSec": 13,
        "direction": "Film the four of you entering. Wide angle — catch everyone's face. No music yet. Real ambient sound. Then close-up on hands setting down bags, eyes scanning the space.",
        "text": "\"4 people. 4 skills. The plan is simple: 30 days, this house, one goal. 10 million dinars from the internet. We don't leave. We don't wait for clients to come to us. We go to them — every single day.\""
      },
      {
        "id": "S3",
        "title": "Fast Intros — Face cuts",
        "timingSec": 10,
        "direction": "Each person 2 seconds. Name and one word. Fast. No framing, no production. Point camera, they speak, cut.",
        "text": "You: \"I find clients. I close.\"\nAyoub: \"I make the content.\"\nMohamed: \"I build the systems.\"\nImad: \"I run the accounts.\""
      },
      {
        "id": "S4",
        "title": "The Moment of Truth — Face cam",
        "timingSec": 10,
        "direction": "Close-up. Dead still. This is the honest moment before the bravado.",
        "text": "\"Here's the truth: I've tried to build something 6 times before this. 6 times. And each one ended. I've never said that publicly before. This time — I'm filming all of it. The good days and the days I want to turn off the camera. Both.\""
      },
      {
        "id": "S5",
        "title": "The Close — CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Day 2 starts at 6am.\""
      }
    ],
    "caption": "Day 1 / 30. We're in.\r\n4 people. 1 house. 30 days. 10M DZD target.\r\nI've failed at this 6 times before. This time I'm filming everything.\r\nThe good days and the ones I want to turn the camera off.\r\nFollow — day 2 starts at 6am.",
    "counterBar": "DAY 01 / 30 · 0 DZD · GOAL: 10,000,000 DZD",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 2,
    "week": 1,
    "type": "proof",
    "hook": "\"The whiteboard. The math. The moment we all went quiet.\"",
    "subtitle": "Day 2 / 30",
    "storyBeat": "Story beat: Day 1 was emotion. Day 2 is reality. The moment the number goes on the whiteboard and you look each other in the eyes — the real weight of what you've started becomes visible. Let the silence do the work.",
    "scenes": [
      {
        "id": "S1",
        "title": "Morning — Voiceover B-roll",
        "timingSec": 8,
        "direction": "First morning. Film the house waking up. Coffee. Laptops opening. The whiteboard still blank on the wall.",
        "text": "\"Day 2. 6:15am. Nobody slept as well as they pretended to. The whiteboard is still blank. Today we fill it.\""
      },
      {
        "id": "S2",
        "title": "The Number — Whiteboard B-roll",
        "timingSec": 14,
        "direction": "Film the marker writing 10,000,000 DZD. Slow. Then pan to each person's face watching it go up. Get the real reactions — don't direct them.",
        "text": "\"Here's the math: one service — social media management for Algerian businesses. 25,000 DZD per month per client. To reach 10 million, we need 400 client-months. In 30 days, we need enough monthly recurring revenue to project that. First milestone: 5 clients at 25K each. That's 125,000 DZD per month — the proof the model works. That's what we're chasing first.\""
      },
      {
        "id": "S3",
        "title": "The Quiet — Face cam",
        "timingSec": 12,
        "direction": "After the whiteboard moment. You're looking at the camera but you're still in the feeling.",
        "text": "\"We all went quiet for about 10 seconds after I wrote it. Not because we doubted the number. Because once it's on the board — it's real. You can't unfeel that. That quiet is what this whole challenge is about.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Tomorrow: first outreach. Follow.\""
      }
    ],
    "caption": "Day 2 / 30. The number is on the board.\r\n10,000,000 DZD. We all went quiet after I wrote it.\r\nThat quiet is what this is about.\r\nTomorrow: first outreach. Follow.",
    "counterBar": "DAY 02 / 30 · 0 DZD · GOAL: 10,000,000 DZD",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 3,
    "week": 1,
    "type": "raw",
    "hook": "\"40 DMs sent. 1 reply. And the reply said 'not interested.'\"",
    "subtitle": "Day 3 / 30",
    "storyBeat": "Story beat: The first real collision with the market. Theory dies on contact. The viewer watches the confidence from day 2 meet reality on day 3. Don't fix it yet — just feel it.",
    "scenes": [
      {
        "id": "S1",
        "title": "End of Day — Face cam",
        "timingSec": 6,
        "direction": "Film this at the end of the day — not the morning. You should look like someone who worked all day and got almost nothing back.",
        "text": "\"We sent 40 messages today. 10 per person. Businesses across Algiers — schools, gyms, clinics, restaurants. One reply. It said: 'We manage our own social media, thank you.'\""
      },
      {
        "id": "S2",
        "title": "The House — B-roll, quiet",
        "timingSec": 12,
        "direction": "Show everyone sitting. Tired. Not dramatic — just the real quiet of a hard first day of work.",
        "text": "\"Nobody said much tonight. We had a plan. We executed the plan. The market didn't care about the plan. That's day 3. We go again tomorrow.\""
      },
      {
        "id": "S3",
        "title": "Honest close — Face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"I'm not going to pretend this felt good. 40 DMs for 1 rejection is not what I pictured yesterday when I was drawing on the whiteboard. But I also know: day 3 data doesn't predict day 30 results. I know that. Tonight I'm just sitting with the discomfort.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Day 4 — we figure out why.\""
      }
    ],
    "caption": "Day 3 / 30. 40 DMs. 1 reply.\r\nIt said \"not interested.\"\r\nI'm sitting with the discomfort tonight.\r\nDay 4 we figure out why. Follow.",
    "counterBar": "DAY 03 / 30 · 0 DZD · 40 DMs · 1 reply (rejection)",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 4,
    "week": 1,
    "type": "lesson",
    "hook": "\"I read yesterday's messages out loud to the team. The problem became obvious immediately.\"",
    "subtitle": "Day 4 / 30",
    "storyBeat": "Story beat: The morning-after debrief. Four people reading their own writing and cringing. The discovery that every message was about us, not them — arrives from the embarrassment of reading it aloud, not from a lesson.",
    "scenes": [
      {
        "id": "S1",
        "title": "Morning debrief — Group face cam",
        "timingSec": 10,
        "direction": "Film all 4 sitting together. You read one of yesterday's DMs out loud. Real reaction from the team — don't guide it.",
        "text": "\"This morning I read our messages out loud. Every single one started with: 'Hi, we're a social media agency...' or 'We offer...' or 'Our services include...' Listen to those three sentences. What's missing from all of them?\""
      },
      {
        "id": "S2",
        "title": "The realization — Face cam",
        "timingSec": 14,
        "direction": "",
        "text": "\"Them. The business we're messaging. Their problem. Their page. Their situation. Not once did we mention them specifically. We were pitching into the void. Someone reads that and thinks: this is a copy-paste from a stranger who knows nothing about me. Because that's exactly what it was. So today — before any DMs go out — every message gets rewritten. It starts with something specific about their page. One observation. One question. Nothing else.\"\n\n[Insight: Nobody responds to messages about you. They respond to messages about them. The switch from \"we offer\" to \"I noticed your page does X — is that a problem you're trying to solve?\" is the difference between being ignored and being answered. We found this by reading our own bad writing out loud until it hurt.]"
      },
      {
        "id": "S3",
        "title": "Team writing — B-roll",
        "timingSec": 10,
        "direction": "Film everyone at their phones/laptops rewriting. Real working energy.",
        "text": "\"New rule: before you hit send, read it out loud. If it sounds like it was written for anyone — rewrite it until it sounds like it was written only for them.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Comment 'DM' — I'll send you the new message format.\""
      }
    ],
    "caption": "Day 4. I read yesterday's DMs out loud to the team.\r\nEvery single one started with \"we.\" Not once did we mention them.\r\nNew rule: if the message could be sent to anyone — rewrite it.\r\nComment \"DM\" — sending the new format.",
    "counterBar": "DAY 04 / 30 · 0 DZD · Messages rewritten",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 5,
    "week": 1,
    "type": "raw",
    "hook": "\"Someone in this house wants to go home. I'm not going to pretend that's not happening.\"",
    "subtitle": "Day 5 / 30",
    "storyBeat": "Story beat: Day 5 is the first real crisis. The viewer has been watching long enough to care about these people. A team member wanting out — on day 5 — raises the stakes for the entire series. Don't resolve it too quickly.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam, tense",
        "timingSec": 6,
        "direction": "Film this in private — not in front of the team. Like a confessional. Lower energy than every other day so far.",
        "text": "\"Day 5. One of us woke up this morning and said — quietly, to me specifically — 'I don't know if I can do this for 25 more days.' I'm not going to tell you who. But I'm going to tell you everything else.\""
      },
      {
        "id": "S2",
        "title": "The atmosphere — Slow B-roll",
        "timingSec": 12,
        "direction": "Film the house without people in it — or with people very separate from each other. The isolation of doubt. No music.",
        "text": "\"5 days. 0 dinars. 0 confirmed clients. The new messages are better but the market still hasn't said yes. And when the results don't match the energy you put in — something in you starts asking: is this real, or are we doing theater?\""
      },
      {
        "id": "S3",
        "title": "The conversation — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"I didn't argue. I didn't motivate. I just asked: 'What specifically made you feel that today?' And what came out wasn't doubt about the business. It was doubt about their role. They felt like they were executing someone else's vision without being able to see how their part mattered. So I stopped everything. We sat for an hour. Everyone said what they felt was being wasted. We rebuilt the roles. Not the strategy — the roles. And tonight, the person who wanted to leave is still here. Still working. That's the only win today and it's enough.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Day 6 — everyone's still in the house.\""
      }
    ],
    "caption": "Day 5. Someone wanted to go home.\r\nWe stopped everything. Sat for an hour. Rebuilt the roles.\r\nThey're still here.\r\nThat's the only win today. It's enough. Follow.",
    "counterBar": "DAY 05 / 30 · 0 DZD · Team: still intact",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 6,
    "week": 1,
    "type": "lesson",
    "hook": "\"I spent this morning going through 10 Instagram pages of businesses we want to target. I started feeling embarrassed for them.\"",
    "subtitle": "Day 6 / 30",
    "storyBeat": "Story beat: After the team crisis on day 5, a necessary return to work. The audit session becomes the first moment of real confidence — they see the gap between what they can do and what their market has. Confidence from evidence, not bravado.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam, leaning forward",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 6. After yesterday I needed something concrete to hold onto. So I opened Instagram and went through 10 businesses we've been targeting. I wasn't looking for weaknesses. But I found the same three things wrong in all 10 of them.\""
      },
      {
        "id": "S2",
        "title": "The audit — Screen scroll B-roll",
        "timingSec": 12,
        "direction": "Show the actual scrolling. Let the viewer see the pages. They don't need to read everything — the visual pattern of bad content is enough.",
        "text": "\"A private school posting event photos with no hook. A gym reposting motivation quotes from 2019. A restaurant whose last post was 3 weeks ago. Across all 10: bios that don't say what the business actually does, no replies to comments — not one — and content that starts with the business name instead of something that stops the scroll. This is what we're competing against. And honestly — if this is the gap we fill? We deserve to win.\"\n\n[Insight: The competition isn't other agencies. It's inertia. Most Algerian businesses online aren't losing to better competitors — they're losing to their own unchanged habits. The three failure patterns we found in all 10 pages: no scroll-stopping hook, dead bio, zero comment response. Fix those three things on day one and you've already outperformed 80% of local content.]"
      },
      {
        "id": "S3",
        "title": "Team energy — Brief B-roll",
        "timingSec": 10,
        "direction": "Film the team after you share this. The shift in energy after yesterday's low.",
        "text": "\"I showed this to the team this morning. It's the first time in 6 days I saw Imad actually lean forward. He said: 'I could fix all of those in one week.' I believe him.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"DM me 'audit' — I'll check your page for free.\""
      }
    ],
    "caption": "Day 6. Audited 10 Algerian business pages.\r\nSame 3 problems in all of them. No hook. Dead bio. No replies.\r\nThe gap we fill is massive.\r\nDM me \"audit\" — free page review.",
    "counterBar": "DAY 06 / 30 · 0 DZD · 10 pages audited · 3 patterns found",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 7,
    "week": 1,
    "type": "proof",
    "hook": "\"Week 1 done. Here is every number. No filter, no context — just what actually happened.\"",
    "subtitle": "Day 7 / 30",
    "storyBeat": "Story beat: The first weekly reckoning. The viewer has watched 6 days of work and zero revenue. This is the episode where you hand them the full scorecard and don't apologize for it. Transparency earns more trust than good numbers.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Whiteboard face cam",
        "timingSec": 5,
        "direction": "Stand in front of the whiteboard. Point at it.",
        "text": "\"7 days. Week 1 done. Let me show you where we actually are.\""
      },
      {
        "id": "S2",
        "title": "The scoreboard — Face cam, slow",
        "timingSec": 17,
        "direction": "",
        "text": "\"Total DMs sent: 200+. Replies: 18. That's 9%. Of those 18: 3 interested enough to keep talking. 1 discovery call booked for next week. Revenue received: zero. What we actually built this week: a message that works better than what we started with, a system that tracks everything, and one real prospect on the hook. That's week 1.\""
      },
      {
        "id": "S3",
        "title": "Week 2 target — Face cam",
        "timingSec": 14,
        "direction": "",
        "text": "\"Week 2 is different. We stop chasing reply rates. We chase one thing: getting someone to pay us. Everything else — DMs, audits, content — all of it is in service of one first signed contract. The moment that happens, everything changes. Not just the number. The belief.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow — week 2 starts Monday. 23 days left.\""
      }
    ],
    "caption": "Week 1 done. Real numbers:\r\n200+ DMs. 18 replies. 1 call booked. 0 DZD.\r\nWeek 2 target: first paid contract. That's it.\r\nFollow — 23 days left.",
    "counterBar": "END OF WEEK 1 · 0 DZD · 200+ DMs · 18 replies · 1 call booked",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 8,
    "week": 2,
    "type": "lesson",
    "hook": "\"First discovery call. I prepared 20 minutes of material. I used none of it.\"",
    "subtitle": "Day 8 / 30",
    "storyBeat": "Story beat: The first real client conversation. The prepared script vs. the real call. The discovery that listening is the skill, not pitching — arrived through the embarrassment of having prepared the wrong thing.",
    "scenes": [
      {
        "id": "S1",
        "title": "Before the call — Face cam",
        "timingSec": 6,
        "direction": "Film this before the call — real pre-call energy. Slightly nervous.",
        "text": "\"Day 8. First discovery call in 45 minutes. Private school in Algiers. I've prepared 20 minutes of material. I'm probably going to use none of it. Let's find out.\""
      },
      {
        "id": "S2",
        "title": "After the call — Face cam, immediate",
        "timingSec": 20,
        "direction": "Film RIGHT after the call. The reaction before you've processed it fully.",
        "text": "\"I used none of it. I opened with one question: 'What's your biggest frustration with Instagram right now?' And they talked for 7 minutes straight. I said almost nothing. I took notes. When they finished I said: 'Everything you just described — that's exactly what we fix.' Then silence. Maybe 6 seconds. And they said: 'Okay. How much?' That was not what I practiced.\"\n\n[Insight: Preparation is about knowing enough to ask the right question — not about having 20 minutes of answers ready. One question + real listening + reflecting back what you heard = the prospect closes themselves. We found this by accident when the prepared script felt wrong the moment the call started.]"
      },
      {
        "id": "S3",
        "title": "Team reaction — Brief B-roll",
        "timingSec": 8,
        "direction": "Film yourself telling the team. Get their real reaction — especially Ayoub and Mohamed who haven't been on calls.",
        "text": "\"I told the team. Ayoub asked: 'But when do you pitch?' I said: 'I didn't. They asked me.' He didn't believe me. He'll see.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow — tomorrow I find out if they sign.\""
      }
    ],
    "caption": "Day 8. First real call.\r\nI prepared 20 minutes of material. Used none of it.\r\nAsked one question. Listened. Reflected back.\r\nThey asked me for the price. Follow — tomorrow we find out if they sign.",
    "counterBar": "DAY 08 / 30 · 0 DZD · 1 call done · 1 prospect asking for the price",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 9,
    "week": 2,
    "type": "raw",
    "hook": "\"They didn't sign. They said they need to 'think about it.' Here's what happened after I hung up.\"",
    "subtitle": "Day 9 / 30",
    "storyBeat": "Story beat: The day 8 high gets answered with the oldest rejection in sales. The \"think about it\" lands heavier because the viewer watched the hope build yesterday. Show the fall without drama.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam, immediately after",
        "timingSec": 6,
        "direction": "Film within 10 minutes of hanging up. The look on your face says everything.",
        "text": "\"They said they need to think about it. 'We'll be in touch next week.' I'm filming this right now because I want you to see what that does to you on day 9 when you haven't had a single dinar yet.\""
      },
      {
        "id": "S2",
        "title": "Processing — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"I'm not angry. I'm not even that surprised. What I feel is: I ended that call yesterday without a committed next step. I said 'I'll send the proposal' and I hung up. There was no date. No time. No 'let's talk Thursday.' I handed the decision to someone who didn't ask for it and had no reason to hurry. That's on me. I gave away the next move.\""
      },
      {
        "id": "S3",
        "title": "What changes now — Face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"New rule starting today: no call ends without a committed next action. Not 'I'll send something.' A date and time, confirmed before hanging up. Every time. They say 'I'll think about it' — I say 'Of course — want to do 15 minutes Thursday to walk through any questions?' Get the next yes before the current call ends.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Still 0 dinars. Still going.\""
      }
    ],
    "caption": "Day 9. \"We'll think about it.\"\r\nI ended the call without a committed next step. That's why.\r\nNew rule: no call ends without a date and time confirmed.\r\nFollow — still 0 DZD. Still going.",
    "counterBar": "DAY 09 / 30 · 0 DZD · 1 pending (cold) · fixing the close",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 10,
    "week": 2,
    "type": "raw",
    "hook": "\"10 days. 0 dinars. And I want to be completely honest about what that actually feels like.\"",
    "subtitle": "Day 10 / 30",
    "storyBeat": "Story beat: The ten-day mark with no money is the first real test of the series' emotional honesty. This isn't a failure episode — it's the episode where the viewer decides whether to keep watching because they trust you. Don't perform resilience. Show the weight.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam, honest",
        "timingSec": 6,
        "direction": "",
        "text": "\"10 days in this house. 10 days of work. Zero dinars. I'm going to tell you what that actually feels like — not what I think I'm supposed to say.\""
      },
      {
        "id": "S2",
        "title": "The honest reflection — Face cam",
        "timingSec": 22,
        "direction": "This should feel like talking to a friend at the end of a hard day. No performance.",
        "text": "\"It feels like the gap between effort and result is personal. Like the market is telling you something about your worth and not just your strategy. I know that's not true. I know intellectually that day 10 with zero dinars in a 30-day challenge is not a verdict. But feeling and knowing are different things. The 6 businesses I failed before — they all ended around this stage. Around the moment the work didn't produce the result and you have to decide whether the work was wrong or whether you just need more time. That's where I am today. I'm choosing more time.\""
      },
      {
        "id": "S3",
        "title": "What's different — Face cam",
        "timingSec": 10,
        "direction": "",
        "text": "\"One thing is different this time: you're watching. And that changes something. I can't quit privately. Which means I can't quit.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Day 11 tomorrow. Follow.\""
      }
    ],
    "caption": "Day 10. 0 dinars.\r\nThe 6 failures before this all ended around this point.\r\nI'm choosing more time.\r\nOne thing is different: you're watching. Which means I can't quit privately.\r\nFollow — day 11 tomorrow.",
    "counterBar": "DAY 10 / 30 · 0 DZD · Previous failures: 6 · Choosing more time",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 11,
    "week": 2,
    "type": "raw",
    "hook": "\"Mohamed didn't sleep. I found out why at 7am when I opened the tracking sheet.\"",
    "subtitle": "Day 11 / 30",
    "storyBeat": "Story beat: After day 10's emotional weight, a quiet win arrives through a teammate, not through you. Mohamed's 3am system is a story about what people do when they believe in something — not a lesson about automation.",
    "scenes": [
      {
        "id": "S1",
        "title": "Morning discovery — Voiceover B-roll",
        "timingSec": 10,
        "direction": "Film Mohamed's screen with the completed tracking system. Then film Mohamed — who is obviously running on no sleep.",
        "text": "\"Day 11. 7am. I opened the shared tracking sheet and everything was already filled in. Every DM from the last 4 days — tagged, sorted, follow-up dates set, reply rates calculated. Mohamed did this at 3am. Nobody asked him to.\""
      },
      {
        "id": "S2",
        "title": "Mohamed face cam — Let him speak",
        "timingSec": 12,
        "direction": "Point camera at Mohamed. Ask one question: \"Why last night?\" Don't script his answer. Film whatever comes out.",
        "text": "Mohamed: \"[his real answer — film it exactly as he says it]\""
      },
      {
        "id": "S3",
        "title": "What it means — Your face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"Yesterday I talked about what 10 days with zero dinars feels like. Today Mohamed answered that at 3am without knowing I'd said it. That's what it looks like when people actually believe in what they're doing. You don't have to manage belief. You just have to build something worth believing in.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. The system is live. Today we use it.\""
      }
    ],
    "caption": "Day 11. Mohamed built the tracking system at 3am.\r\nNobody asked him to.\r\nI asked him why. Film what he said.\r\nYou don't manage belief. You build something worth believing in. Follow.",
    "counterBar": "DAY 11 / 30 · 0 DZD · System built overnight · Team still intact",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 12,
    "week": 2,
    "type": "proof",
    "hook": "\"Ayoub posted a reel for a client this morning. By lunchtime the gym owner was calling us.\"",
    "subtitle": "Day 12 / 30",
    "storyBeat": "Story beat: The first proof that the service actually works. Not a pitch, not a promise — a result that happened today. The gym owner calling creates the first real moment of external validation. Let it be Ayoub's moment, not yours.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 12. Ayoub posted a reel for the gym at 9am. By 1pm, the gym owner called us. Not to ask a question. To tell us people were messaging them asking for membership prices because of the reel.\""
      },
      {
        "id": "S2",
        "title": "The numbers — Screen B-roll",
        "timingSec": 12,
        "direction": "Show the reel stats alongside the account's previous average. Make the comparison visual and obvious.",
        "text": "\"Their account average before us: 200 to 300 views per reel. This one: [X] views in 4 hours. 11 comments asking about membership. 3 DMs. The gym owner sent a voice note — I'll let you hear it.\""
      },
      {
        "id": "S3",
        "title": "Ayoub's moment — Face cam",
        "timingSec": 10,
        "direction": "Point the camera at Ayoub. Don't direct him. He's been the one doing the content work for 12 days. Let him have this.",
        "text": "Ayoub: \"[his real reaction — film it]\""
      },
      {
        "id": "S4",
        "title": "What this means — Your face cam",
        "timingSec": 8,
        "direction": "",
        "text": "\"12 days ago I drew 10 million on a whiteboard. Today, the whiteboard isn't the proof. The gym owner's phone ringing is the proof.\""
      },
      {
        "id": "S5",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"DM me 'audit' — this is what we do for businesses in Algeria.\""
      }
    ],
    "caption": "Day 12. One reel. 4 hours.\r\n11 people asked the gym about membership prices. From Instagram.\r\nThe gym owner called us at 1pm.\r\nDM me \"audit\" — we do this for businesses in Algeria.",
    "counterBar": "DAY 12 / 30 · First client result · Gym: [X] views · 11 membership inquiries · 0 DZD cash (yet)",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 13,
    "week": 2,
    "type": "raw",
    "hook": "\"A 25-minute call. Everything went well. Then they said: 'I'll think about it.' I stayed on the line 4 extra seconds hoping they'd take it back.\"",
    "subtitle": "Day 13 / 30",
    "storyBeat": "Story beat: The high from day 12 meets sales reality on day 13. The \"I'll think about it\" sting is heightened because the viewer saw the hope from yesterday. Don't fix it yet — let the wound be the episode.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Immediate post-call face cam",
        "timingSec": 6,
        "direction": "Film within 10 minutes of hanging up. Do not composure-collect first.",
        "text": "\"Just got off a 25-minute call. Went well the whole way through. They liked the gym result. They asked good questions. Then at the end: 'Let us think about it.' I stayed on the line 4 extra seconds hoping they'd take it back. They didn't.\""
      },
      {
        "id": "S2",
        "title": "The replay — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"I replayed it. I know where I lost them. Last 5 minutes — I started explaining the service in too much detail. They didn't ask for more detail. They were ready to hear the price. Instead I kept adding: 'and we also do X, and we include Y, and you'll get Z.' I could feel my own doubt filling the air. And they felt it too. Over-explaining is the sound of someone who needs the sale more than they need the client. I've done this before. I'll do it again if I don't fix it.\"\n\n[Insight: The moment you over-explain, the prospect feels your doubt. They don't hear the extra features — they hear insecurity. Give the price. Then stop talking. Silence isn't a gap to fill. It's the space where the client makes a decision. Filling it takes the decision away from them and makes it about you again.]"
      },
      {
        "id": "S3",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Next call — I give the price and shut up.\""
      }
    ],
    "caption": "Day 13. 25-minute call. Good energy throughout.\r\nLast 5 minutes I over-explained and they felt my doubt.\r\n\"I'll think about it.\"\r\nI stayed on the line 4 extra seconds hoping they'd take it back.\r\nNext call: price, then silence. Follow.",
    "counterBar": "DAY 13 / 30 · 0 DZD · 1 warm (pending) · Fixing the close",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 14,
    "week": 2,
    "type": "proof",
    "hook": "\"Week 2 done. The counter finally moved. And what I felt when it did surprised me.\"",
    "subtitle": "Day 14 / 30",
    "storyBeat": "Story beat: First revenue. The week 2 recap is defined by one thing: the counter moved. The emotional response to first money — from someone who's been at zero for 13 days — should be the scene the viewer remembers most clearly. Let it be real.",
    "scenes": [
      {
        "id": "S1",
        "title": "The moment — Reaction B-roll",
        "timingSec": 10,
        "direction": "Film the actual moment when the payment notification arrives or the contract is signed. Don't stage it — set up the camera before the call and let it happen.",
        "text": "\"[Capture this real. Whatever happens — film it.]\""
      },
      {
        "id": "S2",
        "title": "Right after — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"The number isn't large. Honestly, in the context of 10 million, it barely registers on the scale. But I'm going to tell you what I felt when it hit. It wasn't excitement. It was relief. The specific relief of: the idea was real. It works. Not just in a whiteboard calculation — in a bank account. That feeling has nothing to do with the amount. It has everything to do with the proof.\""
      },
      {
        "id": "S3",
        "title": "Week 2 real numbers — Face cam",
        "timingSec": 14,
        "direction": "",
        "text": "\"14 days total: [X] DZD. [X] clients paying. [X] warm prospects in conversation. [X] calls done. Week 3 focus: stop spreading wide. Go deep on what's warm. Use the gym result to close more clients in the same niche. One good proof closes faster than ten generic pitches.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow — 16 days left. The real race starts now.\""
      }
    ],
    "caption": "Week 2 done. The counter moved.\r\n[X] DZD. First money.\r\nIt wasn't excitement I felt. It was relief.\r\nThe idea was real. 16 days left. Follow.",
    "counterBar": "END OF WEEK 2 · [X] DZD · FIRST MONEY · 16 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 15,
    "week": 3,
    "type": "raw",
    "hook": "\"Halfway. I'm standing in front of the day-2 whiteboard. I want to be honest about what I see.\"",
    "subtitle": "Day 15 / 30",
    "storyBeat": "Story beat: The whiteboard callback is a visual anchor the viewer has been carrying since day 2. Returning to it at the midpoint with an honest reckoning is the single most important story beat of the series. Don't soften the gap. Let the honesty carry the weight.",
    "scenes": [
      {
        "id": "S1",
        "title": "Whiteboard — Face cam",
        "timingSec": 8,
        "direction": "Stand in front of the exact same whiteboard from day 2. Same angle if possible. The visual callback should be unmistakable.",
        "text": "\"Day 15. Halfway. I'm standing in front of the same whiteboard. 10,000,000 DZD still written on it in the same marker. Today I need to be honest about where we actually are — not where I want to say we are.\""
      },
      {
        "id": "S2",
        "title": "The honest math — Face cam, slow",
        "timingSec": 16,
        "direction": "",
        "text": "\"We're at [X]% of the goal. At the pace we're currently moving — day 30 ends at [projected amount]. Not 10 million. Not even close to 10 million if I'm being completely straight. And I could frame this in a hundred ways that make it sound better than it is. I'm not going to do that. You've been watching every day. You deserve the real number.\""
      },
      {
        "id": "S3",
        "title": "What IS real — Voiceover B-roll",
        "timingSec": 14,
        "direction": "Film the house — real working footage. The team as they actually are at day 15.",
        "text": "\"But here's what IS real: we have clients. We have proof the service works. We have a team that didn't quit on day 5 even when someone wanted to. We have 15 more days. And we have one choice: play it safe with what we have, or go harder than week 1 for every single dinar remaining. We go harder.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 15 days left. The decision is made.\""
      }
    ],
    "caption": "Day 15. Halfway. Standing in front of the same whiteboard.\r\nWe're at [X]% of the goal. Real number. No spin.\r\n15 days left. Two choices: safe or harder.\r\nWe go harder. Follow.",
    "counterBar": "DAY 15 / 30 · [X] DZD · [X]% of goal · Decision: go harder",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 16,
    "week": 3,
    "type": "lesson",
    "hook": "\"The day-13 prospect said no. I asked them why. The answer changed everything about how we pitch.\"",
    "subtitle": "Day 16 / 30",
    "storyBeat": "Story beat: Day 13's wound gets a conclusion. The viewer has been waiting for this. The no becomes the most valuable thing that's happened so far — because asking \"why\" produces the insight that reshapes the entire pitch strategy. The rejection is the teacher.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Remember day 13 — the call that ended with 'I'll think about it'? They thought about it. The answer was no. And I called them back and asked one question: 'Can you tell me why?'\""
      },
      {
        "id": "S2",
        "title": "What they said — Face cam",
        "timingSec": 14,
        "direction": "",
        "text": "\"They said: 'We didn't feel confident you'd done this for a business like ours.' Not price. Not timing. Not budget. Trust. And specifically — relevant trust. They saw the gym result but they're not a gym. They couldn't see themselves in it. One general case study isn't proof to someone outside that industry. It's just a story about someone else.\"\n\n[Insight: Relevant proof beats impressive proof. A case study from the same industry closes in one call. A case study from a different industry asks the prospect to imagine themselves into it — and imagination is where doubt lives. After this conversation, we built one deep case study per niche and led every pitch with the one that matched the room.]"
      },
      {
        "id": "S3",
        "title": "What changed immediately — B-roll screen",
        "timingSec": 12,
        "direction": "Film yourself rebuilding the pitch — actually rewriting the doc. Make the work visible.",
        "text": "\"I rebuilt the pitch deck that afternoon. Instead of showing 3 results from 3 different industries — I went deep on one. The gym. Before. After. The reel. The comments. The phone call at 1pm. One complete story. Sent it to 2 prospects in fitness and wellness. One replied within the hour.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow — that prospect who replied gets a call tomorrow.\""
      }
    ],
    "caption": "Day 16. Day-13 prospect said no.\r\nI asked why. \"We didn't feel confident you'd done this for a business like ours.\"\r\nNot price. Trust. Specifically — relevant trust.\r\nRebuilt the pitch around one niche. One replied within the hour. Follow.",
    "counterBar": "DAY 16 / 30 · [X] DZD · Pitch rebuilt · 1 warm reply",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 17,
    "week": 3,
    "type": "raw",
    "hook": "\"Day 17. Ayoub and I had an argument. I'm telling you about it.\"",
    "subtitle": "Day 17 / 30",
    "storyBeat": "Story beat: Real tension between two specific people the viewer knows. Not a generic \"team conflict\" — this is Ayoub specifically. The viewer has watched him build content, celebrate the gym result, and now see him clash with you. Stakes are personal now.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 17. Ayoub and I argued this afternoon. I'm not going to cut around it.\""
      },
      {
        "id": "S2",
        "title": "What happened — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"We're two weeks in, the number's not where I said it would be, and I started pushing harder on everything — including how fast content was getting made. Ayoub pushed back. He said: 'You keep changing the brief after I've already started. I spend 3 hours on something and then you say change the angle.' He was right. I've been reacting to the gap on the scoreboard by speeding up in the wrong direction — making more changes instead of better ones. We were both frustrated. Neither of us was wrong.\""
      },
      {
        "id": "S3",
        "title": "How it ended — Face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"We talked for an hour. I took a rule: brief is locked before Ayoub starts. If I want to change something, it waits for the next piece. His time is not a draft. After that conversation — I felt something shift. Not just between us. In me. When you're behind, the instinct is to control more. The answer is usually: trust more.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Day 18 — new brief system, new call.\""
      }
    ],
    "caption": "Day 17. Ayoub and I argued.\r\nHe was right. I was changing briefs after he'd already started.\r\nLesson from the argument: when you're behind, the instinct is to control more.\r\nThe answer is usually — trust more. Follow.",
    "counterBar": "DAY 17 / 30 · [X] DZD · Team tension resolved · Brief system locked",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 18,
    "week": 3,
    "type": "lesson",
    "hook": "\"Second client closed. And the silence that closed it lasted exactly 8 seconds.\"",
    "subtitle": "Day 18 / 30",
    "storyBeat": "Story beat: The payoff from day 16's rebuilt pitch and day 8's listening discovery. The viewer has watched every piece of this close being built — the case study, the question, the silence rule. This moment is the series' first major payoff scene.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Right after the call",
        "timingSec": 6,
        "direction": "Film immediately after hanging up. You should look like someone who just landed something significant.",
        "text": "\"Day 18. Second client. The call that came from rebuilding the pitch on day 16. I want to tell you how the last 2 minutes went.\""
      },
      {
        "id": "S2",
        "title": "The 8 seconds — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"I opened with the gym case study — deep, specific, one story. Asked: 'Does your business have this same problem?' They said yes. I said: 'Same process. Same result. Here's what it costs.' Then I gave the price. And I stopped talking. Day 13 I filled that silence. Day 18 I didn't. 8 seconds. I counted them. They said: 'Let's do it.' That silence was the close. Not the pitch. Not the case study. The 8 seconds I didn't fill.\"\n\n[Insight: The silence after you give the price is not a gap. It's where the decision lives. Fill it and you make the decision about you again. Hold it and the prospect makes the decision. This is the lesson from day 13's failure and day 18's success — same rule, opposite execution, completely different result.]"
      },
      {
        "id": "S3",
        "title": "Team reaction — Real moment",
        "timingSec": 8,
        "direction": "Tell the team. Film the real reaction — especially Ayoub after yesterday's argument.",
        "text": "\"[Film this moment. Whatever the team's real reaction is — that's the scene.]\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 12 days left. Counter moved again.\""
      }
    ],
    "caption": "Day 18. Client #2 signed.\r\nPrice given. 8 seconds of silence I didn't fill.\r\nThey said: \"Let's do it.\"\r\nThe close was in the silence. Follow — 12 days left.",
    "counterBar": "DAY 18 / 30 · [X] DZD · CLIENT #2 · 12 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 19,
    "week": 3,
    "type": "raw",
    "hook": "\"3am. Couldn't sleep. 6 failures in my head. I'm filming this right now.\"",
    "subtitle": "Day 19 / 30",
    "storyBeat": "Story beat: The night after the second close. A win on day 18 should produce rest. Instead it produces a 3am reckoning with every past failure. This emotional truth — that winning doesn't silence old ghosts — is the most human moment in the series.",
    "scenes": [
      {
        "id": "S1",
        "title": "3am — Face cam, dark room",
        "timingSec": 6,
        "direction": "Film at actual night. Dim light only. Whisper if others are sleeping. No production. Just you and the phone.",
        "text": "\"3am. We signed a client today. And I cannot sleep. Because every time I get close to something working, this happens: the list of everything that's ended before comes back.\""
      },
      {
        "id": "S2",
        "title": "The list — Face cam, quiet",
        "timingSec": 16,
        "direction": "",
        "text": "\"The fruit store. The clothing brand. The PC resale. Two partnerships that I thought were built to last. A freelance operation I ran for 8 months and walked away from. Six attempts. Six times I thought I saw what you're supposed to see when it's working. And then it stopped. So at 3am tonight with two clients and 11 days left, the question I can't silence is: is this the one that's different? Or is this just the part before it falls apart again?\""
      },
      {
        "id": "S3",
        "title": "The answer — Face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"I don't know. That's the honest answer. What I know is: every one of those 6 failures happened in private. I hid them. Nobody watched. This one — you're watching. And I can't hide something you're witnessing in real time. That's the only thing I know for certain is different. Maybe that's enough.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Going back to sleep. 11 days left.\""
      }
    ],
    "caption": "Day 19. 3am. Signed a client today. Can't sleep.\r\n6 failures. All hidden. Nobody watched them end.\r\nThis one — you're watching.\r\nMaybe that's enough to make it different. 11 days left. Follow.",
    "counterBar": "DAY 19 / 30 · 3am · 6 past failures · 11 days left · Can't sleep",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 20,
    "week": 3,
    "type": "proof",
    "hook": "\"Imad did something today I didn't know he could do. I need to talk about what I've been getting wrong about him.\"",
    "subtitle": "Day 20 / 30",
    "storyBeat": "Story beat: Day 20 gives the spotlight to Imad — who has been in the background since day 1. The viewer knows his name and role but hasn't seen him carry a scene. The result he produces becomes the vehicle for a leadership confession: you underestimated him by giving him a role instead of space.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 20. I want to talk about Imad. Because this morning he did something that made me realize I've been managing him wrong for 20 days.\""
      },
      {
        "id": "S2",
        "title": "Imad's moment — Let him lead",
        "timingSec": 14,
        "direction": "Point camera at Imad. Ask: \"Walk me through what you did.\" Film his explanation exactly as it comes out. Then show the screen result.",
        "text": "Imad: \"[his own explanation — don't script this]\"\n\n\"Client account before: [X] average reach. After Imad's move: [X]. In [timeframe]. Zero ad budget.\""
      },
      {
        "id": "S3",
        "title": "The confession — Your face cam",
        "timingSec": 14,
        "direction": "",
        "text": "\"20 days ago I introduced Imad as 'the social media guy.' That framing — assigning someone to a role instead of a mission — is what limits people. Imad wasn't executing a role today. He was solving a problem. The second you give someone a job title instead of a problem to own, you've put a ceiling on them. I put a ceiling on Imad for 19 days. Day 20 — I took it off.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow — 10 days left. The team's running differently now.\""
      }
    ],
    "caption": "Day 20. Imad did something I didn't know he could do.\r\nBest result of the challenge. Zero ad budget.\r\nI gave him a role. He needed a problem to own.\r\n10 days left. Follow.",
    "counterBar": "DAY 20 / 30 · [X] DZD · Imad: best result of the challenge · 10 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 21,
    "week": 3,
    "type": "proof",
    "hook": "\"3 weeks. Here is the complete story in numbers — and what the last 9 days have to do to make this real.\"",
    "subtitle": "Day 21 / 30",
    "storyBeat": "Story beat: The week 3 recap is the series' broadest narrative moment. Reference every major story beat from all 3 weeks. Make the viewer feel the full weight of the journey — and the specific pressure of 9 days remaining.",
    "scenes": [
      {
        "id": "S1",
        "title": "Journey montage — B-roll",
        "timingSec": 16,
        "direction": "Chronological clips: day 1 arrival → whiteboard → first rejection → day 5 crisis → gym reel → day 13 \"think about it\" → Mohamed 3am → day 18 close → day 19 3am → Imad's result. 1 second each. Fast. The whole story in 16 seconds.",
        "text": "\"3 weeks.\""
      },
      {
        "id": "S2",
        "title": "The real scoreboard — Face cam, slow",
        "timingSec": 16,
        "direction": "",
        "text": "\"21 days. [X] DZD total. [X] paying clients. [X] active prospects. [X] DMs sent. [X] calls. [X] content pieces made for clients. [X] client results produced. This is the scoreboard — not just the revenue line. All of it.\""
      },
      {
        "id": "S3",
        "title": "9 days — Face cam, direct",
        "timingSec": 12,
        "direction": "",
        "text": "\"9 days to reach 10 million from [X]? The math is brutal. What I can tell you: we go until the last hour of day 30. We close everything in the pipeline. We use Imad's discovery to grow client results so fast that new clients come to us. And whatever the number says on day 30 — it's honest.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow — 9 days. The final push.\""
      }
    ],
    "caption": "Week 3 done. [X] DZD. [X] clients.\r\n9 days to close the gap.\r\nWe go until the last hour of day 30.\r\nFollow — the final push starts now.",
    "counterBar": "END OF WEEK 3 · [X] DZD · [X] clients · 9 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 22,
    "week": 4,
    "type": "raw",
    "hook": "\"8 days left. The weight of having called this challenge has never felt heavier than today.\"",
    "subtitle": "Day 22 / 30",
    "storyBeat": "Story beat: Week 4 opens not with action but with the weight of leadership. The viewer has watched you lead for 22 days. Now they see the cost of being the one who called it — the specific responsibility you carry for three people who said yes because you asked.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 22. 8 days left. I keep thinking about the fact that I called this. And three people said yes. And now we're 8 days from the end and the number isn't what I promised on day 1.\""
      },
      {
        "id": "S2",
        "title": "The team — Quiet observation B-roll",
        "timingSec": 12,
        "direction": "Film each person working — from a distance. Don't alert them you're filming. Let the viewer see what you see when you look at your team.",
        "text": "\"Mohamed gave up a month. Ayoub gave up a month. Imad gave up a month. Because I stood in front of a whiteboard and wrote a number. And they believed me.\""
      },
      {
        "id": "S3",
        "title": "The real responsibility — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"I think about day 5 a lot — when I said 'week 1 always lies to you.' I said it because I needed it to be true. And it turned out to be true. Day 12 Ayoub's reel worked. Day 18 we closed client 2 with an 8-second silence. Day 20 Imad broke through. Those were real. But the weight is still mine. For the next 8 days: every decision I make is in service of making sure that the three people in this house leave with something permanent. A skill sharper. A client served well. Proof they can do this. Whatever the number says.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 8 days. We leave everything in this house.\""
      }
    ],
    "caption": "Day 22. 8 days.\r\n3 people said yes because I called this. That weight is mine.\r\nFor the next 8 days: every decision is in service of what they leave with.\r\nNot just the number. The people. Follow.",
    "counterBar": "DAY 22 / 30 · [X] DZD · 8 days left · Full send",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 23,
    "week": 4,
    "type": "lesson",
    "hook": "\"Client 3 signed. And the close was built piece by piece across 12 days of this challenge. Here's the complete map.\"",
    "subtitle": "Day 23 / 30",
    "storyBeat": "Story beat: The third close is the most earned moment in the series — because the viewer watched every piece of it being built. Day 8 listening close. Day 13 failure. Day 16 rebuilt pitch. Day 18 silence. Now it all comes together in one story that rewards the people who've been watching every day.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 23. Third client. And if you've been watching since day 8 — you already know every step that built this close.\""
      },
      {
        "id": "S2",
        "title": "The complete map — Face cam with quick timeline",
        "timingSec": 22,
        "direction": "Show a visual timeline if possible — or just narrate it clearly. Reference the specific days the viewer watched.",
        "text": "\"Day 11 — first DM. Started with their specific page problem, not us. Day 13 — free audit sent. 5 points about what they're losing. Day 15 — they asked if we could talk. Day 16 — I rebuilt the pitch around one niche case study after the rejection. Day 18 — discovery call. Opened with the gym story. Asked one question. Gave the price. Waited. Day 23 — contract signed. Payment received. 12 days from cold contact to client. Every step we showed you — this is what it looks like when it works.\"\n\n[Insight: Specific DM about their page → Free audit that shows the problem → Discovery call that opens with their words → One niche case study → Price + silence. This isn't a formula we found in a course. It was assembled from every mistake and lesson in this building — day by day.]"
      },
      {
        "id": "S3",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Comment 'process' — I'll send you the full sequence. Follow — 7 days left.\""
      }
    ],
    "caption": "Day 23. Client #3.\r\n12 days from cold DM to signed contract.\r\nEvery step was built from a mistake we made in this house.\r\nComment \"process\" — sending the full sequence. Follow — 7 days.",
    "counterBar": "DAY 23 / 30 · [X] DZD · CLIENT #3 · 7 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 24,
    "week": 4,
    "type": "raw",
    "hook": "\"Ayoub said something tonight I've been thinking about for 3 hours. I want to tell you what it was.\"",
    "subtitle": "Day 24 / 30",
    "storyBeat": "Story beat: After 3 closes, the emotional floor drops slightly. Ayoub's candid admission — the real cost of 24 days — is the episode that holds the challenge's full human weight. It makes the finale land harder.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 24. 6 days left. Ayoub said something tonight that I can't stop thinking about. I want to tell you.\""
      },
      {
        "id": "S2",
        "title": "What he said — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"He said: 'I've never worked this hard at something I didn't fully believe in at the start. And now I believe in it. But I'm also exhausted in a way I've never been before.' I didn't know what to say. Because he's right on all three counts. He didn't fully believe it at the start. He does now. And the cost of that 24-day journey from one to the other — it shows. On all of us.\""
      },
      {
        "id": "S3",
        "title": "What's real — Face cam, quiet",
        "timingSec": 12,
        "direction": "",
        "text": "\"Nobody talks about the real cost of a challenge like this. The missed things. The things you put down for a month. The kind of tired that doesn't show on camera because you're always filming the moment right before the low or right after it. 6 days from now, four people leave this house having paid a real price for something. I want that to mean something permanent.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 6 days. We finish.\""
      }
    ],
    "caption": "Day 24. Ayoub said: \"I've never worked this hard at something I didn't believe in at the start. I believe it now. I'm also exhausted.\"\r\nNobody films the real cost.\r\n6 days left. We finish what we started. Follow.",
    "counterBar": "DAY 24 / 30 · [X] DZD · 6 days left · Real cost visible",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 25,
    "week": 4,
    "type": "proof",
    "hook": "\"5 days left. Here's the complete scoreboard — every number from 25 days. Not just the money.\"",
    "subtitle": "Day 25 / 30",
    "storyBeat": "Story beat: With 5 days left, show the full evidence board — not just revenue, but every metric that proves the business is real. The viewer has watched this be built piece by piece. Seeing it all together makes the scale of what happened visible for the first time.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 25. 5 days left. I want to show you the full picture — not just the revenue number. Everything we actually built in 25 days.\""
      },
      {
        "id": "S2",
        "title": "The full board — Screen or whiteboard",
        "timingSec": 16,
        "direction": "Write it or show it on screen. Read slowly enough to let the viewer process each number.",
        "text": "\"DMs sent: [X]. Replies: [X]. Calls done: [X]. Proposals: [X]. Clients signed: [X]. Revenue: [X] DZD. Content pieces delivered: [X]. Client result [metric 1]: [X]. Client result [metric 2]: [X]. Our own account followers gained: [X]. This is what 25 days of work looks like.\""
      },
      {
        "id": "S3",
        "title": "What it proves — Face cam",
        "timingSec": 10,
        "direction": "",
        "text": "\"25 days ago every one of those numbers was zero. Every single one. The people who said you can't build from Algeria without capital — this board is the answer. Not a theory. Not a plan. A scoreboard from real work.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 5 days. Everything left.\""
      }
    ],
    "caption": "Day 25. The full picture.\r\n[X] DZD. [X] clients. [X] results delivered. [X] DMs sent.\r\n25 days ago: all zeros.\r\n5 days left. Follow.",
    "counterBar": "DAY 25 / 30 · [X] DZD · Full scoreboard revealed · 5 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 26,
    "week": 4,
    "type": "lesson",
    "hook": "\"I watched the day-1 video today. I want to tell you what I thought watching myself from 26 days ago.\"",
    "subtitle": "Day 26 / 30",
    "storyBeat": "Story beat: The most original episode of the series. You watch your own day-1 video and react in real time. The gap between who you were on day 1 and who you are on day 26 IS the documentary. This is the moment where the transformation becomes visible to the viewer and to you simultaneously.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 26. I watched the day-1 video today. The one where I said '10 million dinars in 30 days.' I want to tell you what I thought watching myself from 26 days ago.\""
      },
      {
        "id": "S2",
        "title": "Play day 1 — Split screen or cut",
        "timingSec": 8,
        "direction": "Play the actual day 1 clip on screen. Show yourself watching it if possible — reaction visible on your face.",
        "text": "\"[Day 1 clip plays — '4 people, 1 house, 30 days...']\""
      },
      {
        "id": "S3",
        "title": "The reaction — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"The confidence in that video — I don't regret it. I needed to be that confident to actually start. What I see now that I couldn't see then: I thought this was a sales challenge. 'Find clients, close deals, count the money.' It turned out to be a leadership challenge. A patience challenge. A self-trust challenge after 6 failures. A team challenge on day 5 when someone wanted to go home. A listening challenge on day 8 when the script didn't work. An honesty challenge on day 15 when the number was too far. None of that is what I thought I was signing up for on day 1. All of it is more valuable than the number.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 4 days left. The answer comes soon.\""
      }
    ],
    "caption": "Day 26. Watched the day 1 video.\r\nI thought this was a sales challenge.\r\nIt was a leadership, patience, honesty, team, and self-trust challenge.\r\nNone of that is what I signed up for. All of it matters more.\r\n4 days. Follow.",
    "counterBar": "DAY 26 / 30 · Day 1 vs Day 26 · 4 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 27,
    "week": 4,
    "type": "raw",
    "hook": "\"27 days. I'm going to tell you the one thing that happened in this house that I didn't film.\"",
    "subtitle": "Day 27 / 30",
    "storyBeat": "Story beat: 3 days from the end, reveal something real that happened off-camera. The \"thing I didn't show you\" episode creates the deepest trust of the series — because it proves the journey was more honest than even the camera captured.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 27. I've been going back and forth for 3 days about whether to say this. I'm saying it.\""
      },
      {
        "id": "S2",
        "title": "The thing off-camera — Face cam, unproduced",
        "timingSec": 22,
        "direction": "No cuts. No B-roll. No music. Just you talking directly, single take. This is the most intimate, unproduced moment of the entire series. Choose a real moment — a private conversation, a decision you almost made, something that cost you emotionally to carry alone for 27 days. Be specific. The specific detail is what makes it real.",
        "text": "\"[Your real off-camera moment — film this in one take. Be specific. Whatever it is, it happened, and carrying it alone is why you're saying it now. The viewer will know if it's real or performed.]\""
      },
      {
        "id": "S3",
        "title": "Why now — Face cam",
        "timingSec": 10,
        "direction": "",
        "text": "\"I'm saying this because 3 days from the end I don't want to close this challenge having shown you a version of it that was cleaner than the truth. The real version includes that. And I think the real version is more useful to anyone watching than the polished one.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. 3 days. Almost there.\""
      }
    ],
    "caption": "Day 27. The thing I didn't film.\r\n3 days from the end — not ending this with a version cleaner than the truth.\r\nThe real version includes what the camera didn't catch.\r\nFollow — 3 days.",
    "counterBar": "DAY 27 / 30 · The thing off camera · 3 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 28,
    "week": 4,
    "type": "lesson",
    "hook": "\"2 days left. If I had to restart this tomorrow — here's exactly what I'd do differently, and why.\"",
    "subtitle": "Day 28 / 30",
    "storyBeat": "Story beat: The restart letter. Every single \"change\" must reference a specific day and event the viewer watched. This episode is the reward for anyone who's been watching since day 1 — they recognize every lesson because they lived every mistake alongside you.",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"Day 28. 2 days from the end. If I walked into this house again tomorrow knowing everything — here's exactly what changes. In order.\""
      },
      {
        "id": "S2",
        "title": "The restart — Face cam, referenced",
        "timingSec": 26,
        "direction": "",
        "text": "\"Day 1 — same. Announce publicly. The accountability is what keeps you in when day 10 hits. Day 2 — instead of drawing the business plan, I'd build one case study for free before any DM goes out. One result. One story. One proof. Everything flows from that. Day 3 — DMs start. But different from day 1: already specific, already about them, already with a clear next step in the message. The day-4 rewrite happens on day 1. Day 5 — I'd schedule a role check-in from the start. Not wait for crisis. What I said on day 5 — 'what feels wasted' — I say that on day 2. Day 8 — the listening close I discovered by accident? I would practice it intentionally before the first call. Day 13 — the silence after the price? I'd know to hold it before the call, not learn it from a call I lost. Day 16 — the niche case study? Built on day 2. Not day 16 after a rejection taught me it was necessary.\"\n\n[Insight: Build proof before outreach. Write specific DMs from day 1. Define roles by problems, not titles. Practice the silence before the call. Build niche case studies before you need them. These aren't productivity tips — they're the lessons extracted from specific painful days in this specific house. Each one has a date attached to it.]"
      },
      {
        "id": "S3",
        "title": "What stays the same — Face cam",
        "timingSec": 6,
        "direction": "",
        "text": "\"What I would not change: the team. The public commitment. The filming. And the decision not to quit on day 5.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Follow. Tomorrow is the night before the end.\""
      }
    ],
    "caption": "Day 28. The restart.\r\nEvery change has a day attached. Every lesson has a mistake behind it.\r\nThis is the short version of 28 days in 60 seconds.\r\n2 days left. Follow.",
    "counterBar": "DAY 28 / 30 · The full restart · 2 days left",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 29,
    "week": 4,
    "type": "raw",
    "hook": "\"Day 29. The last night. I'm not doing a lesson. I just want to talk.\"",
    "subtitle": "Day 29 / 30",
    "storyBeat": "Story beat: The penultimate episode has no tactic, no number, no lesson. It is purely human. The viewer has followed 29 days of this story. Tonight they need to feel the weight of the ending approaching — not be taught anything. The video that sets up the finale must be the most personal thing you've filmed.",
    "scenes": [
      {
        "id": "S1",
        "title": "The house at night — Slow B-roll",
        "timingSec": 14,
        "direction": "Film every part of the house that has memory attached to it. The whiteboard. The spot from day 5. The 3am corner. Do this slowly. No rush. Let the viewer recognize these places they've been watching for 29 days.",
        "text": "\"Day 29. Last night in this house. I walked through every room tonight. Each one has a specific moment attached to it now.\""
      },
      {
        "id": "S2",
        "title": "To the viewer — Face cam, direct",
        "timingSec": 20,
        "direction": "Sit. Quiet. No background. This is a direct, unfiltered conversation with the people who've been watching. No performance. No motivational close. Just honest.",
        "text": "\"If you've been watching since day 1 — you watched me not quit on day 5 when someone wanted to leave, and on day 10 when the money was still zero, and on day 13 when I over-explained and lost the call, and on day 15 when the honest midpoint math was brutal. You were there for all of it. And I want to say this directly: there were days where the only reason I posted was because people were watching. Not the business. Not the money. People who needed to see that continuing was possible. Tomorrow you get the final number. Whatever it is — it's honest. And whatever it is — this house produced it. These four people produced it. That's the part I'm proud of.\""
      },
      {
        "id": "S3",
        "title": "CTA",
        "timingSec": 4,
        "direction": "",
        "text": "\"Tomorrow. The answer. Follow.\""
      }
    ],
    "caption": "Day 29. Last night.\r\nNo lesson tonight.\r\nIf you've been watching since day 1 — you know what this house cost.\r\nTomorrow. The answer. Follow.",
    "counterBar": "DAY 29 / 30 · Last night · Tomorrow: the answer",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 30,
    "week": 4,
    "type": "proof",
    "hook": "\"DAY 30. THE FINAL NUMBER. And the full story of what this house actually produced.\"",
    "subtitle": "Day 30 / 30",
    "storyBeat": "Story beat: The finale must deliver the number and the story simultaneously. Every key scene from the 30 days passes through this episode. The number — whatever it is — is presented with full honesty. The real close is not the revenue: it's the proof that this was possible, and the launch of The Content Market. The documentary ends. The business begins.",
    "scenes": [
      {
        "id": "S1",
        "title": "The full journey — Montage B-roll",
        "timingSec": 20,
        "direction": "The best 20 seconds of footage from the entire 30 days. Chronological. No narration — just the footage. The viewer who's been watching since day 1 should feel the weight of the whole journey compressed into this opening.",
        "text": "\"[Pure footage — Day 1 arrival. Whiteboard. Day 5 near-quit. Day 12 gym call. Day 13 'think about it'. Day 18 close. Day 19 3am. Day 20 Imad. Day 26 day-1 replay. Day 29 last night. Day 30.]\""
      },
      {
        "id": "S2",
        "title": "The number — Face cam, slow",
        "timingSec": 16,
        "direction": "Stand in front of the whiteboard. Write the final number next to the original. Let both numbers be visible. Say the final number once. Then say what it means.",
        "text": "\"[Final DZD amount]. That's the number. 30 days. This house. Zero starting capital. Four people. Algeria. [If hit goal: The whiteboard was right. If gap remains: Not 10 million. But I promised you honest, not perfect. Here's what I know: the number is real. The clients are real. The proof is real. And the business is real. Those things don't disappear on day 31.]\""
      },
      {
        "id": "S3",
        "title": "The real answer — Face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"The question from day 1 was: can you build a real business from Algeria in 30 days? The answer isn't in the number. It's in the scoreboard I showed you on day 25. It's in the gym owner who called Ayoub at 1pm because members were DM-ing. It's in Mohamed's 3am system that nobody asked him to build. It's in Imad on day 20 when I stopped giving him a role and gave him a problem. It's in every person watching this who's wondering if it's possible from here. Yes. It is.\""
      },
      {
        "id": "S4",
        "title": "The team — Group face cam, real",
        "timingSec": 6,
        "direction": "All four. No script. Film the real moment when it's done. Whatever happens — that's the scene.",
        "text": "\"[Film this. No direction. The real moment is the scene.]\""
      },
      {
        "id": "S5",
        "title": "The Content Market — Face cam",
        "timingSec": 8,
        "direction": "",
        "text": "\"The challenge is over. The Content Market — built in this house, over 30 days, in front of you — is open. If you want for your business what we built for our clients: DM me 'content.' The documentary ends. The work continues.\""
      }
    ],
    "caption": "Day 30 / 30. DONE.\r\n[Final amount] DZD. From Algeria. From one house. From zero.\r\nThe answer to day 1's question: yes, it's possible.\r\nThe Content Market is open.\r\nDM me \"content.\"\r\n\r\nIf you watched since day 1 — this was built for you too.",
    "counterBar": "DAY 30 / 30 · FINAL: [X] DZD · THE CONTENT MARKET IS OPEN",
    "goalDzd": 40000000,
    "status": "not_started"
  }
];
