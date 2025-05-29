# 🚀 DevInsight.ai

**AI-powered developer portfolio and profile scoring engine.**  
Generate a beautiful, shareable portfolio from your public GitHub, LeetCode, blog, and more — complete with a personalized developer score.  
Recruiters can even paste candidate links and get AI-generated summaries. No manual resume writing. No BS.

---

### ✨ Features

- 🔗 **One-click portfolio** — GitHub, LeetCode, blog, LinkedIn, all in one place
- 🎯 **DevScore** — AI-assisted scoring based on your activity and code quality
- 🧠 **GPT-powered insights** — Summarize your repos, blogs, and developer persona
- 📄 **Auto-generated landing page** — Share as a hosted public profile
- 🧑‍💼 **Recruiter mode** — Paste links, get an AI summary of a candidate
- 📤 **Export-ready resume (coming soon)**

---

### 🧱 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS, ShadCN UI
- **Backend:** Next.js API Routes
- **Auth:** GitHub OAuth via NextAuth.js
- **Database:** PostgreSQL via Supabase
- **AI:** OpenAI GPT-3.5 (optional per user)
- **Scraping:** Axios, Cheerio
- **Deployment:** Vercel

---

### 🛠 Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/code-by-deveshwar/devinsight-ai.git
cd devinsight-ai

2. Install dependencies
npm install

3. Set up your .env file
cp .env.example .env

4. Run the dev server
npm run dev
Visit http://localhost:3000

📁 Project Structure
src/
  app/                # App Router pages
  components/         # UI and custom components
  lib/                # Helpers, utils
  types/              # TS types
  styles/             # Tailwind + globals


📦 Planned Features
 GitHub integration + scoring

 LeetCode profile support

 Blog/RSS parsing

 Recruiter insights export

 DevScore leaderboard

 Resume export as PDF

 Custom themes


 🤝 Contributing
PRs, issues, and suggestions welcome.
Run npm run lint before pushing. Please keep commits clean.

🧑‍💻 Author
Built by code-by-deveshwar — fueled by frustration with resumes.

📄 License
MIT

⭐ If you like this, star the repo. It helps!

```
