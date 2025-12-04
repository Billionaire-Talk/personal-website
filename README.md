# 🚀 Asif's ML Journey - Personal Learning Website

A modern, production-ready personal website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Supabase**. Designed for daily journaling through the world of Machine Learning, Transformers, LLMs, and AI Engineering.

**Live at:** [asif-reh.me](https://asif-reh.me) | **GitHub:** [@asif-reh](https://github.com/asif-reh)

---

## 🎯 Purpose

This website is a **daily learning journal** documenting the journey of building AI/ML projects from scratch.

## ⏰ Daily Routine

```
4:00 AM - 9:00 AM   → Deep Work (ML/DL, research, implementation)
9:00 AM - 10:00 AM  → Rest & Recovery
10:00 AM - 1:00 PM  → Deep Work (Coding, building, experimenting)
1:00 PM - 3:00 PM   → Rest & Exam Preparation
3:00 PM - 6:00 PM   → Deep Work (Project development, learning)
6:00 PM - 7:00 PM   → Rest & Reflection
7:00 PM - 9:00 PM   → Deep Work (Writing, documentation, journaling)
```

Total: **15 hours of structured learning per day**

## 🎓 Learning Areas

- ⚙️ **Transformers** - Building from scratch
- 🤖 **LLMs & GPTs** - Large language models
- 🧠 **Reasoning Models** - Advanced problem solving
- 🎵 **Audio ML** - Speech and audio processing
- 🎯 **Reinforcement Learning** - Policy optimization
- 📚 **RAG & MCP** - Retrieval and protocol systems
- 📊 **ML Papers** - Re-implementation and deep understanding

## 🛠️ Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript 5
- **Styling:** Tailwind CSS 4
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Domain:** .me (GitHub Student Pack)

## �� Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Setup Supabase Database

See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for detailed guide.

Execute in Supabase SQL Editor:
```sql
CREATE TABLE public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  published_at TIMESTAMP DEFAULT now(),
  created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON public.blog_posts
  FOR SELECT USING (true);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete guide.

## 📝 Writing Blog Posts

See [WRITING_GUIDE.md](./WRITING_GUIDE.md) for comprehensive guide.

## 🎯 Features

- ✅ Homepage with daily routine and learning areas
- ✅ Blog system with category filtering
- ✅ Dynamic blog post pages
- ✅ About page with mission
- ✅ Responsive mobile design
- ✅ Fast performance with Next.js
- ✅ Type-safe with TypeScript
- ✅ Real-time updates with Supabase

## 📚 Complete Guides

| Guide | Purpose |
|-------|---------|
| [SETUP_GUIDE.md](./SETUP_GUIDE.md) | Installation & configuration |
| [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) | Database setup |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Vercel & domain setup |
| [WRITING_GUIDE.md](./WRITING_GUIDE.md) | How to write posts |

## 🛠️ Development

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📞 Connect

- **Website**: [asif-reh.me](https://asif-reh.me)
- **GitHub**: [@asif-reh](https://github.com/asif-reh)

## 📜 License

MIT License - Feel free to use as template!

---

**Start your learning journey today! 🎉**

Built with ❤️ for daily learning and growth.
