# 🏀 NBA AI Oracle

> Real-time NBA stats with AI-powered game predictions — built with React, Firebase, and CopilotKit.

![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## What it does

Live NBA game data with an AI sidebar that predicts outcomes, compares player stats, and answers any basketball question in natural language.

- 🏆 **Live standings** — real-time via Firebase sync
- 📊 **Player stats** — season averages, per-game breakdowns
- 🤖 **AI Predictions** — "Who wins Lakers vs. Celtics tonight?" → instant AI analysis
- 🔔 **Score alerts** — Firebase push notifications on game updates

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + TypeScript |
| Realtime | Firebase Firestore (live scores) |
| AI | CopilotKit + Claude API |
| Auth | Firebase Auth |
| Styling | Tailwind CSS |

## AI Examples

```
"Compare LeBron vs Curry this season"
→ Side-by-side stat breakdown with AI commentary

"Predict tonight's Celtics game"
→ Win probability based on recent form, H2H, home/away

"Which teams are on a hot streak?"
→ Last 10 games trend analysis
```

## Getting Started

```bash
git clone https://github.com/Xorpio89/NBA_React_Firebase
cd NBA_React_Firebase
npm install
cp .env.example .env.local  # Firebase + Anthropic keys
npm start
```

---

Rebuilt as an AI-powered sports intelligence app. Original 2018 Firebase version on `legacy` branch.
