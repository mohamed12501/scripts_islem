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

export const SEED_DAYS: DayEntry[] = [
  {
    "day": 1,
    "week": 1,
    "type": "raw",
    "hook": "\"Can you build a real business from Algeria in 30 days? I'm about to find out.\"",
    "subtitle": "Day 1 / 30 — The challenge begins",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "Straight to camera. Dead serious. No smile. Let the silence sit for one beat before speaking.",
        "text": "\"Can you build a real business from Algeria — from the internet — in 30 days? I'm about to find out.\""
      },
      {
        "id": "S2",
        "title": "The Setup — Voiceover on B-roll",
        "timingSec": 8,
        "direction": "Film the house: entrance, workspace, all 4 people. Wide shot then tight close-ups of hands on keyboards, phones, notebooks.",
        "text": "\"This house is our lab. 4 people. 4 different skills. 30 days. One goal: 10 million dinars from the internet. Nothing staged. Everything documented.\""
      },
      {
        "id": "S3",
        "title": "Team Intro — Fast cuts",
        "timingSec": 6,
        "direction": "Each person — 1.5 seconds max. Name + role. Ultra fast montage. No music pause between them.",
        "text": "You: \"Strategy and closing.\"\nAyoub: \"Video.\"\nMohamed: \"Systems.\"\nImad: \"Social media.\""
      },
      {
        "id": "S4",
        "title": "The Rules — Face cam",
        "timingSec": 7,
        "direction": "",
        "text": "\"Rules: we don't leave this house. We don't wait for clients to come to us. We work online only. Day 30 — we show everything. Whether we made it or not.\""
      },
      {
        "id": "S5",
        "title": "CTA — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow to see if we make it. Day 2 tomorrow.\""
      }
    ],
    "caption": "Day 1 / 30. 0 DZD.\n4 people. 1 house. 30 days. 1 goal: 10M DZD from the internet.\nWe don't leave. We don't wait. We build live.\nFollow if you want to see if it's possible from Algeria.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 2,
    "week": 1,
    "type": "proof",
    "hook": "\"Here's the exact business plan to reach 10 million dinars — laid out on a whiteboard.\"",
    "subtitle": "Day 2 / 30 — The model revealed",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Day 2. Yesterday we announced it. Today — the actual plan. Numbers on the table.\""
      },
      {
        "id": "S2",
        "title": "Whiteboard — Voiceover B-roll",
        "timingSec": 10,
        "direction": "Film the whiteboard with the plan written out. Marker on paper. Each person points to their role.",
        "text": "\"One service: complete social media management for Algerian businesses. 25,000 DZD per month. To hit 10 million — we need 20 clients. First target: 5 clients in 30 days. That's 125,000 DZD monthly recurring. That's where we start.\""
      },
      {
        "id": "S3",
        "title": "Team Roles — Face cam",
        "timingSec": 8,
        "direction": "",
        "text": "Ayoub: \"I create the content.\"\nMohamed: \"I build the systems.\"\nImad: \"I manage the accounts.\"\nYou: \"I find the clients and close.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Tomorrow we start hunting. Follow to see what happens.\""
      }
    ],
    "caption": "Day 2 / 30. Still 0 DZD.\nThe plan is on the board. 4 roles. 1 service. 1 target.\nTomorrow: outreach begins.\nFollow to see if the plan holds.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 3,
    "week": 1,
    "type": "lesson",
    "hook": "\"We sent 40 DMs on day 1. Here's what the reply rate actually taught me about cold outreach.\"",
    "subtitle": "Day 3 / 30 — First outreach lesson",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"Day 3. 40 DMs sent. 4 replies. 1 warm prospect. That 10% reply rate taught me something I didn't expect.\""
      },
      {
        "id": "S2",
        "title": "What Happened — B-roll",
        "timingSec": 7,
        "direction": "Film all 4 on phones/laptops. Energy of a real operation — not staged.",
        "text": "\"Each person had 10 businesses to DM. Free audit offer. Show them what they're losing. Ask if they want a fix. We thought it would work better than it did.\""
      },
      {
        "id": "S3",
        "title": "The Lesson — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"Here's what 10% reply rate actually means: the other 90% aren't bad prospects. The message was bad. When you cold DM someone, they don't know you. They don't care about your offer. They care about one thing: their problem. So if your message starts with YOU — your agency, your service, your offer — you've already lost. The message that worked was the one that started with THEM. Their page. Their specific problem. A question about their situation. Start with them. Always.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Comment 'DM' — I'll send you the message format that got the replies.\""
      }
    ],
    "caption": "Day 3. 40 DMs. 4 replies. 1 warm prospect.\nNot bad results. Bad message.\nThe one that worked started with their problem, not my offer.\nComment \"DM\" — I'll send you the format.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 4,
    "week": 1,
    "type": "lesson",
    "hook": "\"I tested 2 DM messages yesterday. One got replies. One didn't. Here's the word-for-word difference.\"",
    "subtitle": "Day 4 / 30 — The outreach A/B test",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"I ran a real A/B test on my DMs yesterday. Same product. Same target. Two different messages. The results were not close.\""
      },
      {
        "id": "S2",
        "title": "Message A — Screen",
        "timingSec": 8,
        "direction": "Show the phone with the first message visible on screen. Read it aloud as you show it.",
        "text": "\"Message A — long, formal, all about us. 'Hi, we're an agency specializing in social media management. We help businesses grow online. Let us know if you're interested.' Result: zero replies.\""
      },
      {
        "id": "S3",
        "title": "Message B + The Lesson — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"Message B — short, specific, opens with a question about them. 'I looked at your account — you have a great product but your Instagram isn't reaching new people. Got 3 minutes? I'll show you exactly what I'd change.' Result: 4 replies from 20 sends. That's 20%. Six times better. The difference isn't skill. It's where you put the attention. Message A is about me. Message B is about them. Nobody cares about you when you cold DM them. They care about their problem.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Comment 'DM' and I'll send you both messages so you can see the full comparison.\""
      }
    ],
    "caption": "2 DM messages. Same product. Same target.\nMessage A: 0 replies. Message B: 4 from 20.\nThe difference: stop talking about yourself.\nComment \"DM\" — I'll send both messages.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 5,
    "week": 1,
    "type": "raw",
    "hook": "\"Day 5 — someone in the house almost quit today. I'm telling you exactly what happened.\"",
    "subtitle": "Day 5 / 30 — The first crisis",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"Day 5. Someone in this house is done. Or almost done. And honestly — I understand why.\""
      },
      {
        "id": "S2",
        "title": "The Atmosphere — Voiceover B-roll",
        "timingSec": 8,
        "direction": "Film the house quietly — tension visible. Someone sitting apart, not working. Keep it real, not dramatic.",
        "text": "\"5 days in. 0 dinars. 0 signed clients. Hundreds of DMs ignored. You work this hard and nothing moves — the doubt hits hard. It hit us today.\""
      },
      {
        "id": "S3",
        "title": "The Conversation — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"We talked. For a long time. And I said this: the first week of building anything always lies to you. It looks like nothing is working because results take longer than effort. We planted seeds in days 1, 2, 3, 4. We haven't harvested yet. The problem isn't the work. The problem is comparing day 5 results to day 30 expectations. We're still here. All four of us.\""
      },
      {
        "id": "S4",
        "title": "Team Shot — Group face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"We go again tomorrow.\""
      }
    ],
    "caption": "Day 5. Someone almost quit.\nWe talked it out. We're still here.\nWeek 1 is a lie — nothing looks like it's working yet.\nFollow to see what day 6 brings.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 6,
    "week": 1,
    "type": "lesson",
    "hook": "\"I analyzed 10 Algerian business Instagram accounts this morning. The same 3 mistakes in all of them.\"",
    "subtitle": "Day 6 / 30 — Market research lesson",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"I spent this morning auditing 10 Algerian business accounts on Instagram. Same 3 mistakes in all of them.\""
      },
      {
        "id": "S2",
        "title": "Context — Screen scroll B-roll",
        "timingSec": 7,
        "direction": "",
        "text": "\"Schools, gyms, clinics, restaurants — all posting, nobody growing. Not because the product is bad. Because the content strategy is broken.\""
      },
      {
        "id": "S3",
        "title": "The 3 Mistakes — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"Mistake 1: posting event photos with no hook. The algorithm doesn't push content that starts with 'we organized an event.' Nobody cares. You have 2 seconds to stop the scroll. Mistake 2: the bio doesn't say what the business does. Someone lands on the page and has no idea. That's a conversion killer. Mistake 3: no reply to comments. The algorithm reads comment response time as a signal of community health. Ignore your comments, Instagram buries you. Fix these three things and you're already ahead of 80% of Algerian businesses online.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"DM me 'audit' — I'll check your account for free.\""
      }
    ],
    "caption": "10 Algerian business accounts audited. Same 3 mistakes.\nNo hook. Broken bio. No comment replies.\nFix these 3 and you're ahead of 80% of local competition.\nDM me \"audit\" — I'll tell you exactly what you're losing.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 7,
    "week": 1,
    "type": "proof",
    "hook": "\"Week 1 is done. Here are the exact numbers — no filter, no spin.\"",
    "subtitle": "Day 7 / 30 — First weekly recap",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Week 1 done. Real numbers. No filter.\""
      },
      {
        "id": "S2",
        "title": "The Numbers — Voiceover on data",
        "timingSec": 10,
        "direction": "",
        "text": "\"7 days. 200+ DMs sent. 18 replies. 3 interested. 1 discovery call booked. 0 DZD made. That's week 1.\""
      },
      {
        "id": "S3",
        "title": "Analysis — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"Here's what the numbers actually mean: 9% reply rate is workable. The problem is what happens AFTER the reply — we're losing prospects between 'interested' and 'booked call.' That's the conversion hole. Week 2 focus: fix that gap. Get the 3 warm leads on calls. Make one of them pay. One client changes everything.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — week 2 starts tomorrow. The pace changes.\""
      }
    ],
    "caption": "Week 1. Real numbers:\n200+ DMs. 18 replies. 3 warm. 1 call booked. 0 DZD.\nThe outreach works. The conversion is broken.\nWeek 2: fix the hole. Get the first client. Follow.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 8,
    "week": 2,
    "type": "lesson",
    "hook": "\"A prospect said yes to a call. Here's the exact discovery call technique that had them say 'okay, how much?' without me pitching anything.\"",
    "subtitle": "Day 8 / 30 — The listening sell",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"Day 8. First discovery call. I didn't pitch once. They asked me for the price. Here's exactly what I did.\""
      },
      {
        "id": "S2",
        "title": "Context — Voiceover B-roll",
        "timingSec": 6,
        "direction": "",
        "text": "\"Private school in Algiers. Struggling with Instagram — posting but zero engagement. Classic case. I had 20 minutes.\""
      },
      {
        "id": "S3",
        "title": "The Technique — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"Here's exactly what I did: I opened with one question — 'What's your biggest frustration with Instagram right now?' Then I shut up. They talked for 5 minutes. I took notes. I didn't interrupt. When they finished, I said: 'Everything you just described — that's exactly what we fix.' Silence. Then they said: 'Okay, how much?' That's the close without closing. Let them sell themselves on needing you. Your job isn't to explain what you do. Your job is to ask the question that makes them realize they have a problem you can solve.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — tomorrow I find out if they sign.\""
      }
    ],
    "caption": "Day 8. First discovery call.\nI didn't pitch once. They asked me for the price.\nOne question + silence = they close themselves.\nFollow to see if they sign tomorrow.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 9,
    "week": 2,
    "type": "lesson",
    "hook": "\"After 9 days of outreach in Algeria, I know exactly which 5 business types are worth targeting — and which ones waste your time.\"",
    "subtitle": "Day 9 / 30 — Niche selection from real experience",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"9 days of talking to Algerian businesses. I know which ones have money, urgency, and are actually closable. Here's the list.\""
      },
      {
        "id": "S2",
        "title": "Context — Face cam",
        "timingSec": 7,
        "direction": "",
        "text": "\"I'm not guessing. I'm reporting. These 5 niches came from real conversations, real rejections, and what I've seen work in the past 9 days in the Algerian market specifically.\""
      },
      {
        "id": "S3",
        "title": "The 5 Niches — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"One — private schools. Enrollment season = urgency = budget. Two — dental clinics and doctors. Budget exists. Social media presence is almost zero. They need you more than they know. Three — gyms and fitness centers. Visual content, fast results to show. Easy to demonstrate value. Four — premium restaurants and cafés. Constant need for content. Easy retainer. Five — emerging local brands — they want to grow, they're open, they'll actually listen. These five: budget, urgency, and need. Go there first.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — tomorrow I show you the exact approach for each one.\""
      }
    ],
    "caption": "9 days. Real outreach. Real conversations.\n5 Algerian niches with budget + urgency + need:\nSchools. Clinics. Gyms. Restaurants. Local brands.\nFollow for the approach strategy for each.",
    "goalDzd": 40000000,
    "status": "posted"
  },
  {
    "day": 10,
    "week": 2,
    "type": "raw",
    "hook": "\"10 days in this house. 10 days working. 0 dinars. I need to be honest about how that feels.\"",
    "subtitle": "Day 10 / 30 — The real emotional check-in",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"10 days. 10 days of work. 0 dinars. I'm not going to pretend that doesn't hit.\""
      },
      {
        "id": "S2",
        "title": "The Feeling — Quiet B-roll voiceover",
        "timingSec": 8,
        "direction": "",
        "text": "\"I've failed 6 times before this. A store. A brand. Partnerships. All failed. And when I sit here on day 10 with nothing to show — that familiar feeling comes back.\""
      },
      {
        "id": "S3",
        "title": "What's Different — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"But here's what's different this time: I'm filming it. I'm not hiding it. And that changes something. When you commit publicly — quitting becomes harder than continuing. Every day I post, there are people watching. People who need to see that you can keep going. That accountability isn't just to myself. It's to everyone watching this. That's what gets me back to work when the feeling hits.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — I'm not stopping. Day 11 tomorrow.\""
      }
    ],
    "caption": "10 days. 0 dinars. 6 failed businesses before this.\nThe feeling comes back. I'm not hiding it.\nBut filming it means I can't quit.\nFollow — I'm not stopping.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 11,
    "week": 2,
    "type": "lesson",
    "hook": "\"Mohamed built something last night that saved us 3 hours a day. Here's the exact system — and why most agencies will never do this.\"",
    "subtitle": "Day 11 / 30 — The automation lesson",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Day 11. Mohamed worked all night. This morning he showed me something that freed 3 hours from our daily workflow.\""
      },
      {
        "id": "S2",
        "title": "Mohamed's System — B-roll screen",
        "timingSec": 10,
        "direction": "Film Mohamed at his screen showing the automation. Make it visual — not just Mohamed talking to camera.",
        "text": "\"Prospect research, DM tracking, follow-up reminders — all automated. What we were doing manually for 2 hours every day now runs on its own.\""
      },
      {
        "id": "S3",
        "title": "The Lesson — Face cam",
        "timingSec": 16,
        "direction": "",
        "text": "\"Here's the lesson most small agencies miss: they're always working IN the business — doing tasks. Copying names. Tracking replies. Chasing follow-ups. Manually. Every. Day. That's not a business. That's a job you gave yourself. Automation is what separates a 3-client agency from a 20-client agency. Same hours. Same team. More leverage. Build the system FIRST — then use the time the system creates to go get more clients.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — tomorrow we run this system at full speed.\""
      }
    ],
    "caption": "Day 11. Mohamed built an automation overnight.\n3 hours of daily manual work — gone.\nLesson: working IN your business keeps you small.\nAutomate first. Then scale. Follow to see it in action.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 12,
    "week": 2,
    "type": "proof",
    "hook": "\"Ayoub made a reel for a client. 24 hours later — here are the exact numbers and the 3 things he did differently.\"",
    "subtitle": "Day 12 / 30 — First content proof",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Ayoub edited a reel for a client yesterday. Here's what happened in 24 hours.\""
      },
      {
        "id": "S2",
        "title": "The Reel + Stats — Screen B-roll",
        "timingSec": 10,
        "direction": "Show the reel playing + Instagram insights side by side.",
        "text": "\"Before: their average reel — 200 to 300 views. This one: [X] views in 24 hours. Same account. Same product. Different approach.\""
      },
      {
        "id": "S3",
        "title": "The 3 Changes — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"What Ayoub changed: one — strong hook in the first 2 seconds. Not a greeting. A statement that stops the scroll. Two — zero dead time. Every second earns its place. Three — trending audio that's growing, not saturated. Not the most viral sound — the one about to explode. Those three things pushed the algorithm. This is what we're selling. This is the proof.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"DM me 'audit' if you want us to do this for your business.\""
      }
    ],
    "caption": "1 reel. 24 hours. [X] views. Zero ad budget.\n3 changes: hook + no dead time + right audio.\nSame account. Same product. Different result.\nDM me \"audit\" — I'll look at yours for free.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 13,
    "week": 2,
    "type": "lesson",
    "hook": "\"I've been on 4 sales calls this week. Here's what I learned about selling to Algerian clients that no SMMA course will ever teach you.\"",
    "subtitle": "Day 13 / 30 — The local market truth",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"4 discovery calls this week. Selling in Algeria is a completely different game than everything I learned online. Here's what's actually true.\""
      },
      {
        "id": "S2",
        "title": "The Setup",
        "timingSec": 6,
        "direction": "",
        "text": "\"Every SMMA course I've studied is built on Western markets. The psychology, the objections, the timeline — none of it maps directly to Algeria. I learned this the hard way on these 4 calls.\""
      },
      {
        "id": "S3",
        "title": "The 3 Truths — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"Truth 1: Trust comes before price. Algerian clients don't buy from strangers. They need to have seen you, heard about you, or been recommended by someone they know. The stranger with a pitch doesn't win here. Truth 2: They want local proof. Not a case study from Dubai or France. An Algerian business that got results. Show that. Truth 3: They test you slowly. Don't expect a 3-month contract on call one. Start small. Prove yourself. Then expand. This isn't a weakness in the market — it's the game. Adapt your closing to these 3 realities and everything changes.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — tomorrow I show you how I adapted my closing to this.\""
      }
    ],
    "caption": "4 Algerian sales calls. 4 lessons no course will teach you.\nTrust first. Local proof second. Small win third.\nThis is the Algerian closing sequence.\nFollow for the full approach.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 14,
    "week": 2,
    "type": "proof",
    "hook": "\"Week 2 done. The counter finally moved. Here's the honest breakdown.\"",
    "subtitle": "Day 14 / 30 — Second weekly recap",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Week 2 done. And this time — the number isn't zero.\""
      },
      {
        "id": "S2",
        "title": "The Numbers",
        "timingSec": 10,
        "direction": "",
        "text": "\"14 days. 400+ DMs total. 6 calls. 2 proposals sent. [amount] DZD received or contracted. It's not 10 million. But it's proof the model works.\""
      },
      {
        "id": "S3",
        "title": "Week 3 Plan — Face cam",
        "timingSec": 12,
        "direction": "",
        "text": "\"Week 3 focus: stop spreading wide. Go deep on the clients we have. Get results fast. Use those results as proof. Close the next 3 clients with that proof. Quality over quantity now. The machine is built. Time to use it.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 16 days left. The real race starts now.\""
      }
    ],
    "caption": "Week 2 done. Counter moved.\n[X] DZD. Not 10 million. But proof the model works.\n16 days left. Week 3: depth, not width.\nFollow — this is where it gets real.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 15,
    "week": 3,
    "type": "raw",
    "hook": "\"Halfway through. I'm going to be completely honest: we're not on track. Here's what I actually think.\"",
    "subtitle": "Day 15 / 30 — The honest midpoint",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"Day 15. Halfway. We're not on pace for 10 million. I'm not going to pretend otherwise.\""
      },
      {
        "id": "S2",
        "title": "The Reality — Quiet B-roll",
        "timingSec": 8,
        "direction": "",
        "text": "\"15 days ago I announced 10 million dinars in 30 days. The numbers right now don't support that. And I think you deserve honesty more than you deserve a good story.\""
      },
      {
        "id": "S3",
        "title": "What We're Actually Building — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"Here's what I've realized: 10 million in 30 days was always the most ambitious version of this. What we're building — the clients, the systems, the proof, the audience — that's real. That doesn't disappear on day 31. The 10 million is a goal. The agency is a business. And the business is alive. I'd rather be honest about where we are and build something that lasts than inflate a number that looks good for 24 hours.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 15 days left. We're still going.\""
      }
    ],
    "caption": "Halfway. We're not on pace for 10M.\nI'm telling you that directly.\nBut the agency is real. The clients are real. The systems are real.\nFollow — 15 days left. We're not stopping.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 16,
    "week": 3,
    "type": "lesson",
    "hook": "\"I lost a good prospect today. My fault. I found the exact moment I lost them — and the fix.\"",
    "subtitle": "Day 16 / 30 — The closing mistake",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Lost a prospect today. Good one. My fault. I replayed the call 3 times to find the exact moment I lost them.\""
      },
      {
        "id": "S2",
        "title": "Context — B-roll",
        "timingSec": 7,
        "direction": "",
        "text": "\"The call went well. They were interested. I sent the proposal. 2 days of silence. Then: 'We decided to go another direction.' I knew something was wrong in how I ended that call.\""
      },
      {
        "id": "S3",
        "title": "The Mistake + Fix — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"Found it. I ended the call with: 'I'll send you a proposal.' No next step. No date. No committed follow-up. I left the decision completely in their hands with zero structure. The moment you say 'I'll send something' and hang up — you've handed over control. The fix: never end a sales conversation without a committed next step. Not 'I'll send something.' Say: 'I'll send the proposal tonight — can we do a quick 15-minute call Thursday to walk through it together?' Get the YES on the next step before you hang up. Always.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — applying this fix on the next call tomorrow.\""
      }
    ],
    "caption": "Lost a prospect today. My fault.\nMistake: I ended the call with no committed next step.\nFix: always agree on what happens next before you hang up.\nLearning expensive lessons so you don't have to. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 17,
    "week": 3,
    "type": "proof",
    "hook": "\"7 days managing a gym's Instagram in Algiers. Real numbers — before and after.\"",
    "subtitle": "Day 17 / 30 — First local client proof",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"7 days running a gym's Instagram in Algiers. Here are the before and after numbers.\""
      },
      {
        "id": "S2",
        "title": "Imad's Work — B-roll + Imad face cam",
        "timingSec": 10,
        "direction": "Show Imad actively managing the account — creating posts, replying to comments.",
        "text": "\"Before Imad: posting twice a week, under 500 followers, zero DMs from potential members. Here's what 7 days of managed content did.\""
      },
      {
        "id": "S3",
        "title": "Results + 3 Changes — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"[X] new followers. Engagement rate up. 3 people DMing asking about membership. Directly from Instagram. Three changes Imad made: daily posting with a consistent visual theme, transformation content showing real members, and replying to every comment within the hour. That last one alone doubled the reach. The algorithm rewards response speed. Consistency + speed. That's the formula.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"DM me 'audit' if you run a business in Algeria.\""
      }
    ],
    "caption": "7 days. 1 gym. Algiers.\n3 changes. Real results. Zero ad budget.\nConsistency + speed of reply = algorithm growth.\nDM me \"audit\" if you want the same.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 18,
    "week": 3,
    "type": "raw",
    "hook": "\"3am. Couldn't sleep. 6 failed businesses playing in my head. Here's what I was thinking.\"",
    "subtitle": "Day 18 / 30 — The 3am moment",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"3am last night. House is quiet. 12 days left. And every business I failed before this was in my head.\""
      },
      {
        "id": "S2",
        "title": "Late Night — Dark B-roll voiceover",
        "timingSec": 8,
        "direction": "Film the house at night — dim light. Nobody awake. The mood should feel real, not cinematic.",
        "text": "\"The fruit store. The clothing brand. The PC resale. Six attempts. Six endings. That 3am quiet is where all of them come back.\""
      },
      {
        "id": "S3",
        "title": "What Kept Me Going — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"Then I thought about why this is different. This time I'm not hiding it. Every failure before — I hid it. This time I'm filming it. And that means someone in Algeria is watching. Someone who's tried and failed too. If one person watches this and decides to start something because they saw that I kept going — that's bigger than the 10 million. That's what got me back to sleep.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — day 19 starts now.\""
      }
    ],
    "caption": "3am. Couldn't sleep.\n6 failed businesses in my head.\nThis time is different: I'm filming it.\nOne person watching and deciding to start — worth more than 10M. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 19,
    "week": 3,
    "type": "lesson",
    "hook": "\"Day 19 — one number changed everything. And it taught me the most important thing I've learned in this entire challenge.\"",
    "subtitle": "Day 19 / 30 — The momentum shift lesson",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Day 19. One number changed the energy in this house completely. And it reminded me of something everyone building something needs to hear.\""
      },
      {
        "id": "S2",
        "title": "The Moment — Reaction B-roll",
        "timingSec": 8,
        "direction": "Film the genuine team reaction when the number comes in — don't stage it. Real reaction.",
        "text": "\"[The milestone] hit today. And the energy in the room shifted immediately.\""
      },
      {
        "id": "S3",
        "title": "The Lesson — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"Here's what this taught me: results don't build gradually. They build underground — then they jump. Weeks 1 and 2, nothing moves visibly. You work, you send, you create, and it looks like nothing is happening. Then one day, everything starts moving at once. This is why 90% of people quit in week 2. They don't see that momentum is compounding underground. Day 1 through 18 — I was planting. Day 19 — the plant broke through the surface. Stay long enough to see the jump.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 11 days left. The jump is happening.\""
      }
    ],
    "caption": "Day 19. One number changed everything.\nResults don't build gradually — they jump.\nMost people quit before the jump.\n11 days left. We're in it. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 20,
    "week": 3,
    "type": "lesson",
    "hook": "\"20 days locked in a house with 3 people. Here are 5 leadership lessons I learned that no university teaches.\"",
    "subtitle": "Day 20 / 30 — The leadership lesson",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"20 days managing a team where we can't escape each other. The leadership lessons hit completely different.\""
      },
      {
        "id": "S2",
        "title": "Context — B-roll team working",
        "timingSec": 7,
        "direction": "",
        "text": "\"When you live and work in the same space — every mistake is visible. Every mood affects everyone. Every decision has immediate consequences. You can't hide behind Slack or a meeting room.\""
      },
      {
        "id": "S3",
        "title": "5 Lessons — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"Lesson 1: manage your energy before you manage your team. Your mood is contagious — they feel it before you say anything. Lesson 2: clear roles prevent 80% of conflicts. Ambiguity is what creates arguments. Lesson 3: give credit loudly and publicly. People work harder when the team sees them win. Lesson 4: when someone is off — ask first, push second. Pressure makes it worse. Questions open it. Lesson 5: the leader's job isn't to have all the answers. It's to make the team believe they can find them. I didn't learn any of this in school. I learned it in this house.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 10 days to go.\""
      }
    ],
    "caption": "20 days. 3 teammates. No exit.\n5 leadership lessons you can't learn anywhere else.\nThe real education happens in the field.\n10 days left. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 21,
    "week": 3,
    "type": "proof",
    "hook": "\"Week 3 done. 9 days left. Real numbers. Honest assessment.\"",
    "subtitle": "Day 21 / 30 — Third weekly recap",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Week 3 done. 9 days left. The real numbers, no spin.\""
      },
      {
        "id": "S2",
        "title": "The Numbers — Screen B-roll",
        "timingSec": 10,
        "direction": "",
        "text": "\"21 days: [X] DZD in revenue or contracts. [X] active or pending clients. [X] followers gained. We're at [X]% of the goal.\""
      },
      {
        "id": "S3",
        "title": "The Honest Take — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"10 million in 9 days? Probably not the full amount. But here's what's actually true: 3 weeks ago we had zero clients, zero systems, zero proof. Now we have all three. The challenge was always bigger than the number. The goal was to prove it's possible from Algeria. We've already proven that. 9 days of push is what we have left.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — final 9 days. This is the sprint.\""
      }
    ],
    "caption": "Week 3 done. [X] DZD. 9 days left.\n10M in 9 days? Probably not.\nBut we proved it's possible from Algeria. That was always the real goal.\nFollow — the sprint begins.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 22,
    "week": 4,
    "type": "raw",
    "hook": "\"Day 22. 8 days left. I want to be honest about the weight I feel right now.\"",
    "subtitle": "Day 22 / 30 — The leader's weight",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"8 days left. I want to talk about something I haven't said out loud yet — the weight of calling this challenge.\""
      },
      {
        "id": "S2",
        "title": "Context — House B-roll",
        "timingSec": 8,
        "direction": "",
        "text": "\"Three people gave up 30 days of their life because I said 'let's do this.' That's not nothing. When the number isn't where we wanted — that's on me.\""
      },
      {
        "id": "S3",
        "title": "The Leader's Mindset — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"My job right now isn't to push harder. It's to make sure everyone leaves this house with something permanent. A skill that's sharper. A system they built. A client they served. Proof that they can do this. The number might not hit. But those things don't expire. That's what a leader is responsible for — not just the result. The people.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 8 days. We leave everything in this house.\""
      }
    ],
    "caption": "Day 22. 8 days left.\n3 people gave up 30 days because I called this challenge.\nMy job: make sure they leave with something permanent.\nSkill. System. Client. Proof. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 23,
    "week": 4,
    "type": "lesson",
    "hook": "\"A client rejected us. Instead of moving on, I asked them exactly why. Their answer changed how I pitch.\"",
    "subtitle": "Day 23 / 30 — The rejection debrief",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Got rejected today. Instead of moving on — I asked them why. The answer was uncomfortable but worth everything.\""
      },
      {
        "id": "S2",
        "title": "Context",
        "timingSec": 7,
        "direction": "",
        "text": "\"Most people when they get rejected just move to the next lead. I've learned that a rejection with a reason is more valuable than 10 warm leads. So I asked.\""
      },
      {
        "id": "S3",
        "title": "What They Said + The Lesson — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"They said: 'We didn't trust that you had experience.' That hit. Because we have the skills — but we hadn't shown the proof in the right way. They needed to see work from businesses LIKE them, not generic results. That's when I realized: social proof is not just about having results. It's about having the RIGHT results for the specific person in front of you. One relevant case study beats ten generic ones. I went back and rebuilt our proof system around niches. Every pitch now leads with a case study from their exact industry.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — applying this on the next pitch tomorrow.\""
      }
    ],
    "caption": "Got rejected. Asked why.\nThey said: \"We didn't trust you had experience.\"\nLesson: relevant proof beats impressive proof.\nOne industry-specific case study closes faster than a full portfolio. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 24,
    "week": 4,
    "type": "lesson",
    "hook": "\"After 24 days, here's the honest truth about what actually makes content go viral in Algeria — and what people get wrong.\"",
    "subtitle": "Day 24 / 30 — The content truth",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"24 days creating content for Algerian businesses. Here's what I've learned about what actually works — and what everyone thinks works but doesn't.\""
      },
      {
        "id": "S2",
        "title": "The Common Mistake — Face cam",
        "timingSec": 8,
        "direction": "",
        "text": "\"Most Algerian businesses chase aesthetic. They want to look professional. Branded. Clean. That's not what drives engagement on Instagram in 2025.\""
      },
      {
        "id": "S3",
        "title": "The Truth + Lesson — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"What drives engagement is identification. When someone watches your content and thinks 'that's exactly me' or 'that's exactly my problem' — they stop scrolling, they save, they share. The content that's worked best for our clients in the last 24 days: behind the scenes of the real work, real customer moments, honest answers to the questions people are already asking. Not polished. Not produced. Real. The brands that win in Algeria are the ones people feel they know personally. Be a person before you're a brand.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"DM me 'content' — I'll audit your brand for free.\""
      }
    ],
    "caption": "24 days creating content for Algerian businesses.\nWhat works: identification, not aesthetics.\nReal, not polished. Person, not brand.\nDM me \"content\" — I'll audit yours free.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 25,
    "week": 4,
    "type": "proof",
    "hook": "\"Day 25 — second client signed. Here's the exact conversation from first DM to payment.\"",
    "subtitle": "Day 25 / 30 — The full close breakdown",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"Second client signed today. I'm going to show you the entire journey — first DM to payment — so you can copy it.\""
      },
      {
        "id": "S2",
        "title": "The Full Timeline — Screen B-roll",
        "timingSec": 12,
        "direction": "Show the DM conversation scrolling. Blur out identifying info if needed.",
        "text": "\"Day 1: first DM — specific question about their page. Day 3: they replied. Day 4: short audit sent. Day 6: discovery call. Day 8: proposal. Day 9: signed. 9 days from cold DM to payment.\""
      },
      {
        "id": "S3",
        "title": "The Key Moves — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"Three things that made this close happen: one — I never pushed. I asked questions and waited. Two — the free audit built enough trust to get on a call. Three — on the call, I ended with a committed next step: 'Thursday at 4pm to walk through the proposal.' They said yes. The close was already done before I sent the numbers. This is the process. Repeat it.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Comment 'process' — I'll send you the full sequence.\""
      }
    ],
    "caption": "Day 25. Second client signed.\nCold DM to payment: 9 days.\n3 moves: no push, free audit, committed next step.\nComment \"process\" — I'll send you the full sequence.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 26,
    "week": 4,
    "type": "lesson",
    "hook": "\"I made 6 mistakes in the first 3 weeks of this challenge. Here they are — so you don't repeat them.\"",
    "subtitle": "Day 26 / 30 — The mistakes breakdown",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"26 days in. I'm going to tell you the 6 mistakes I made in the first 3 weeks so you can skip them entirely.\""
      },
      {
        "id": "S2",
        "title": "The Mistakes — Face cam",
        "timingSec": 22,
        "direction": "",
        "text": "\"Mistake 1: DMs that started with me, not them. Cost: 2 weeks of bad reply rates. Mistake 2: ending calls without a committed next step. Cost: lost prospects. Mistake 3: targeting too broad — any business, any size. Cost: wasted outreach. Mistake 4: showing generic proof instead of niche-specific results. Cost: lost trust in pitches. Mistake 5: ignoring the team's energy on bad days. Cost: almost lost a teammate. Mistake 6: treating the content as a diary instead of as a lesson. Cost: missed authority opportunities early. Every single one of these is fixable. And every single one came from doing the actual work.\""
      },
      {
        "id": "S3",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Save this video. You'll need it.\""
      }
    ],
    "caption": "26 days. 6 mistakes that cost me 3 weeks.\nBad DMs. No next step. Wrong proof. Broad targeting. Ignoring team. No lessons from content.\nAll fixable. All preventable.\nSave this. Start clean.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 27,
    "week": 4,
    "type": "raw",
    "hook": "\"27 days in Algeria, no capital, no connections. Here's what we actually proved.\"",
    "subtitle": "Day 27 / 30 — The proof of concept moment",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"27 days. No starting capital. No connections. No office. And here's what we actually proved.\""
      },
      {
        "id": "S2",
        "title": "Recap Montage — B-roll",
        "timingSec": 10,
        "direction": "Fast montage: day 1 arrival, whiteboard, calls, team moments, late nights, client reactions.",
        "text": "\"27 days of this — every step documented.\""
      },
      {
        "id": "S3",
        "title": "The Proof — Face cam",
        "timingSec": 18,
        "direction": "",
        "text": "\"What we proved: one — a digital agency can be built from Algeria with zero starting capital. Two — Algerian businesses need and want social media management — they just need someone they trust. Three — a team of young Algerians with different skills can build a real service business in under a month. Four — documenting the journey builds the audience that becomes the first clients. If you're young, Algerian, wondering if you can start something from here — this 27-day story is your answer.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 3 days to the final answer.\""
      }
    ],
    "caption": "27 days. From Algeria. No capital. No connections.\nWe proved it's possible.\nIf you're wondering if you can start something from here — this is your answer.\n3 days to the final result. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 28,
    "week": 4,
    "type": "lesson",
    "hook": "\"28 days. 5 truths about building a business that nobody tells you before you start.\"",
    "subtitle": "Day 28 / 30 — The knowledge summary",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 3,
        "direction": "",
        "text": "\"28 days. 5 things I know now that I wish someone had told me before I started.\""
      },
      {
        "id": "S2",
        "title": "B-roll journey highlights",
        "timingSec": 7,
        "direction": "Quick montage of key moments.",
        "text": "\"I came in thinking I understood business. I was wrong about almost everything that actually matters.\""
      },
      {
        "id": "S3",
        "title": "The 5 Truths — Face cam",
        "timingSec": 22,
        "direction": "",
        "text": "\"Truth 1: speed of execution beats quality of planning. Start ugly, improve fast. Truth 2: your first client is not found — it's built through trust over time. Truth 3: the real competition isn't other agencies. It's client inertia — getting them to change anything at all is the hardest part. Truth 4: public accountability is the most powerful motivator I've ever experienced. Truth 5: the goal you announce matters less than the process you document. The journey is the product. These 5 things — remember them.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — 2 days to the final reveal.\""
      }
    ],
    "caption": "28 days. 5 truths nobody tells you before you start.\nSpeed beats planning. Trust beats pitching. Inertia is the enemy.\nPublic accountability beats motivation. The journey is the product.\n2 days to the final result. Follow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 29,
    "week": 4,
    "type": "raw",
    "hook": "\"Tomorrow is day 30. I want to talk to you before the final answer.\"",
    "subtitle": "Day 29 / 30 — The night before",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"Tomorrow is day 30. The final day. I want to say something before the answer comes.\""
      },
      {
        "id": "S2",
        "title": "The Night Before — Quiet, personal",
        "timingSec": 12,
        "direction": "Calm. Most personal energy of the whole series. No performance.",
        "text": "\"29 days ago I walked into this house with 3 friends and a challenge. We've had great days and terrible ones. Clients and rejections. Total confidence and real doubt. 3am moments where I didn't know if we'd make it. All of it was real. None of it was performed.\""
      },
      {
        "id": "S3",
        "title": "What Tomorrow Means — Face cam",
        "timingSec": 15,
        "direction": "",
        "text": "\"Tomorrow I'll tell you the final number. Whatever it is — I'm proud of it. Not because of the amount. Because it's honest. Because we built something real. Because we documented every day. And because somewhere in Algeria, someone watched this and decided to start something they were afraid to start. That's the result that matters most to me. Tomorrow — you'll see everything.\""
      },
      {
        "id": "S4",
        "title": "CTA",
        "timingSec": 3,
        "direction": "",
        "text": "\"Follow — tomorrow is the final answer.\""
      }
    ],
    "caption": "Day 29. The night before.\nTomorrow you'll see the final number. Real. No filter.\nWhatever it is — we built something real.\nFollow — the answer comes tomorrow.",
    "goalDzd": 40000000,
    "status": "not_started"
  },
  {
    "day": 30,
    "week": 4,
    "type": "proof",
    "hook": "\"DAY 30. This is the final number — and the full honest story of how we got here.\"",
    "subtitle": "Day 30 / 30 — The finale",
    "scenes": [
      {
        "id": "S1",
        "title": "Hook — Face cam",
        "timingSec": 4,
        "direction": "",
        "text": "\"Day 30. This is it. Here is the final number — and the real story of how we got here.\""
      },
      {
        "id": "S2",
        "title": "Journey Recap — Montage B-roll",
        "timingSec": 15,
        "direction": "Best moments: day 1 walk-in, whiteboard, first call, almost quit moment, first client, team reactions, late nights.",
        "text": "\"30 days. 4 people. One house. Here's what happened.\""
      },
      {
        "id": "S3",
        "title": "The Final Number — Face cam",
        "timingSec": 20,
        "direction": "",
        "text": "\"[Final amount] DZD. That's what we made or contracted in 30 days from the internet, from Algeria, from this house. [If hit: We proved it's possible. If didn't hit: We didn't hit 10 million. And I'm telling you that honestly — because that was always the point. The truth.] What we built: real clients. Real systems. Real proof. And on [launch date] — The Content Market officially opens. The challenge is over. The mission continues.\""
      },
      {
        "id": "S4",
        "title": "Final CTA — Face cam",
        "timingSec": 5,
        "direction": "",
        "text": "\"If this challenge showed you one thing — it showed you that starting is possible. From Algeria. With what you have. Right now. DM me 'content' if you want to be one of The Content Market's first clients.\""
      }
    ],
    "caption": "Day 30 / 30. DONE.\n[Final amount] DZD. From Algeria. From a house. From zero.\nThe challenge is over. The Content Market launches [date].\nDM me \"content\" to be one of the first clients.\n\nThank you for watching every day. This was for you.",
    "goalDzd": 40000000,
    "status": "not_started"
  }
];
