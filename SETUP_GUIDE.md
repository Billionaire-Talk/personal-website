# Asif's ML Journey - Personal Website

A modern, minimalist personal website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Supabase**. Designed for daily journaling and documenting my journey through Machine Learning, Transformers, LLMs, and AI Engineering.

**Live at:** [asif-reh.me](https://asif-reh.me)

## 🎯 Mission

To master machine learning from first principles by building transformers, LLMs, reasoning models, and other AI systems end-to-end, while maintaining daily consistency and documenting everything publicly.

## 📋 What I'm Building & Learning

- ⚙️ **Transformers** - Architecture, attention mechanisms, implementations from scratch
- 🤖 **LLMs & GPT Models** - Large language models, fine-tuning, prompt engineering
- 🧠 **Reasoning Models** - Advanced reasoning, chain-of-thought, multi-step problem solving
- 🎵 **Audio ML** - Speech recognition, audio processing, music generation
- 🎯 **Reinforcement Learning** - Policy gradient, Q-learning, reward design
- 📚 **RAG & MCP** - Retrieval augmented generation, Model Context Protocol

## ⏰ Daily Routine

- **4:00 AM - 9:00 AM**: Deep work session (Core ML/DL work, research, implementation)
- **9:00 AM - 10:00 AM**: Rest & recovery
- **10:00 AM - 1:00 PM**: Deep work session (Coding, building, experimenting)
- **1:00 PM - 3:00 PM**: Rest & exam preparation
- **3:00 PM - 6:00 PM**: Deep work session (Project development, learning)
- **6:00 PM - 7:00 PM**: Rest & reflection
- **7:00 PM - 9:00 PM**: Deep work session (Writing, documentation, journaling)

## 🚀 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Domain**: .me domain (from GitHub Student Pack)

## 📁 Project Structure

```
asif-journey/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation with mobile support
│   │   └── Footer.tsx          # Footer with links and info
│   ├── blog/
│   │   ├── page.tsx            # Blog listing with category filtering
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic blog post pages
│   ├── about/
│   │   └── page.tsx            # About page with mission and philosophy
│   ├── page.tsx                # Homepage with daily routine and learning areas
│   ├── layout.tsx              # Root layout with Navigation and Footer
│   └── globals.css             # Global styles
├── lib/
│   └── supabase.ts             # Supabase client configuration
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── .env.local                  # Environment variables (not in git)
```

## 🔧 Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier available)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your API URL and Anon Key from Settings → API
4. Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Setup Supabase Database

Execute this SQL in your Supabase dashboard (SQL Editor):

```sql
-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  published_at TIMESTAMP DEFAULT now(),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create index for faster lookups
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_published ON blog_posts(published_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access" ON blog_posts
  FOR SELECT USING (true);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

## 📝 Creating Blog Posts

You can add blog posts directly to your Supabase database. Each post needs:

- **title**: Post title
- **slug**: URL-friendly identifier (e.g., "understanding-transformers")
- **excerpt**: Short summary for the blog listing
- **content**: Full markdown/HTML content
- **category**: One of: Transformers, LLMs, RL, Audio ML, RAG, Research
- **published_at**: When to publish (set to past for immediate publication)

### Example SQL:

```sql
INSERT INTO blog_posts (title, slug, excerpt, content, category, published_at)
VALUES (
  'Building a Transformer from Scratch',
  'building-transformer-from-scratch',
  'Understanding attention mechanisms and building a complete transformer architecture from first principles.',
  'In this post, I''ll walk through the process of implementing a transformer...',
  'Transformers',
  NOW()
);
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Custom Domain

1. Get your free .me domain from the GitHub Student Pack
2. In Vercel project settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## 📊 Features

- ✅ Responsive design (mobile-first)
- ✅ Blog with category filtering
- ✅ Dynamic blog post pages
- ✅ About page with mission and philosophy
- ✅ Daily routine showcase
- ✅ Learning areas display
- ✅ Fast performance with Next.js optimization
- ✅ SEO optimized
- ✅ Clean, modern UI with Tailwind CSS
- ✅ Type-safe with TypeScript

## 📚 Learning Resources

As I progress, I'll be documenting:
- Building and training transformers
- Implementing LLM architectures
- Reinforcement learning projects
- Audio ML applications
- ML paper re-implementations
- Research findings and insights

## 🛠️ Development

### Code Quality

```bash
# Run ESLint
npm run lint
```

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📄 Blog Post Schema

```typescript
interface BlogPost {
  id: string;              // UUID
  title: string;           // Post title
  slug: string;            // URL slug (unique)
  excerpt: string;         // Summary/preview text
  content: string;         // Full content (supports HTML/Markdown)
  category: string;        // Category tag
  published_at: Date;      // Publication date
  created_at: Date;        // Creation timestamp
  updated_at?: Date;       // Last update
}
```

## 🔐 Security Notes

- Supabase RLS (Row Level Security) is configured for public read-only access
- The blog is read-only for public users
- All sensitive API keys are in `.env.local` (not committed)
- Use Supabase Studio for admin access to add/edit posts

## 🤝 Contributing

This is a personal learning project. If you'd like to discuss any of the content or have suggestions, feel free to reach out!

## 📞 Get in Touch

- GitHub: [@asif-reh](https://github.com/asif-reh)
- Website: [asif-reh.me](https://asif-reh.me)

## 📜 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for daily learning and growth.**
