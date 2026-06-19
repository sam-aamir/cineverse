# 🎬 CineVerse

A modern movie streaming platform built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Firebase Authentication**.

> Browse 16 iconic movies, manage your watchlist, track watch history, and enjoy a Netflix-style UI — all with secure Google & Email/Password login.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Install & Run

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🔐 Environment Variables (Firebase Auth)

Authentication uses **Firebase**. Copy `.env.example` to `.env.local` and fill in your Firebase web app config:

```bash
cp .env.example .env.local
```

Required variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=   # optional (analytics)
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) → Create a project
2. Go to **Project Settings → Your Apps → SDK Setup** → copy the config values above
3. Enable **Authentication → Sign-in method → Email/Password** (and **Google** for OAuth)
4. Add your domain under **Authentication → Settings → Authorized domains**

> `.env.local` is git-ignored and never committed. For hosted deployments, add the same `NEXT_PUBLIC_FIREBASE_*` variables in **Vercel → Project → Settings → Environment Variables**, then redeploy. `NEXT_PUBLIC_*` values are inlined at build time.

---

## 📁 Project Structure

```
cineverse-main/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml          # Lint + typecheck + build on every push/PR
│   │   ├── deploy.yml      # Auto-deploy to Vercel on push to main
│   │   └── preview.yml     # Preview deploy on every pull request
│   └── dependabot.yml      # Weekly dependency updates
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   ├── components/ui/      # Reusable UI components
│   ├── context/            # React context providers (auth, theme)
│   ├── lib/
│   │   └── mockData.ts     # Centralized movie data (16 movies)
│   ├── services/           # Firebase & API service layer
│   └── store/              # Global state management
├── public/                 # Static assets (SVGs, icons)
├── .env.example            # Environment variable template
└── ...config files
```

---

## ⚙️ CI/CD Pipeline

This project uses **GitHub Actions** + **Vercel** for fully automated deployments.

### Pipeline Overview

| Trigger | Workflow | What it does |
|---|---|---|
| Push to `main` or `develop` | `ci.yml` | ESLint → TypeScript check → Build |
| Open / update a Pull Request | `preview.yml` | Deploys a Vercel preview URL, posts it as a PR comment |
| Merge to `main` | `deploy.yml` | Deploys to Vercel **production** |

### Flow Diagram

```
Developer pushes code
        │
        ▼
  ┌─────────────┐
  │  GitHub PR  │ ──► Preview Deploy ──► Preview URL posted on PR
  └─────────────┘
        │
        │ Merge to main
        ▼
  ┌─────────────┐
  │  CI Checks  │ ──► ESLint + TypeScript + Build
  └─────────────┘
        │ ✅ Pass
        ▼
  ┌─────────────┐
  │  CD Deploy  │ ──► Vercel Production 🚀
  └─────────────┘
```

### Required GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions** and add:

| Secret | How to get it |
|---|---|
| `VERCEL_TOKEN` | Vercel Dashboard → Settings → Tokens → Create |
| `VERCEL_ORG_ID` | Run `vercel link` locally → check `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Same `.vercel/project.json` file |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Console → Project Settings |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Console → Project Settings |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Console → Project Settings |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Console → Project Settings |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Console → Project Settings |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase Console → Project Settings |

### Get Vercel IDs

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project (run once in project root)
vercel link

# IDs are saved here:
cat .vercel/project.json
```

---

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🌿 Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys to Vercel on every push |
| `develop` | Staging — CI checks run, no auto-deploy |
| `feature/*` | Feature branches — open a PR to get a preview URL |

---

## 📦 First Push to GitHub

```bash
# 1. Initialize git (skip if already done)
git init

# 2. Stage all files
git add .

# 3. First commit
git commit -m "feat: initial commit — CineVerse"

# 4. Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/cineverse.git

# 5. Push
git push -u origin main
```

---

## 🚢 Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Add all `NEXT_PUBLIC_FIREBASE_*` environment variables in Vercel project settings
4. Click **Deploy** — Vercel auto-detects Next.js

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 🎬 Movies Included

| # | Title | Year | Rating |
|---|---|---|---|
| 1 | Avengers: Endgame | 2019 | 8.4 |
| 2 | Spider-Man: No Way Home | 2021 | 8.2 |
| 3 | Oppenheimer | 2023 | 8.4 |
| 4 | Interstellar | 2014 | 8.6 |
| 5 | The Dark Knight | 2008 | 9.0 |
| 6 | Dune: Part Two | 2024 | 8.5 |
| 7 | John Wick: Chapter 4 | 2023 | 7.8 |
| 8 | Top Gun: Maverick | 2022 | 8.3 |
| 9 | Avatar: The Way of Water | 2022 | 7.6 |
| 10 | Joker | 2019 | 8.4 |
| 11 | The Matrix | 1999 | 8.7 |
| 12 | Inception | 2010 | 8.8 |
| 13 | Black Panther | 2018 | 7.3 |
| 14 | Guardians of the Galaxy Vol. 3 | 2023 | 8.0 |
| 15 | Alien: Romulus | 2024 | 7.3 |
| 16 | Doctor Strange in the Multiverse of Madness | 2022 | 6.9 |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Firebase Auth | Authentication (Email + Google) |
| Vercel | Hosting & deployment |
| GitHub Actions | CI/CD pipeline |