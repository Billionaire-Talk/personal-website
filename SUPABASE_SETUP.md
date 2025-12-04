# 📊 Supabase Database Setup Guide

This guide walks you through setting up your Supabase database for the blog functionality.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up or log in
4. Create a new organization
5. Create a new project with:
   - **Name**: asif-journey
   - **Database Password**: Use a strong password
   - **Region**: Choose closest to your location
   - **Pricing**: Free tier is sufficient

## Step 2: Get Your API Credentials

1. In your Supabase project, go to **Settings** → **API**
2. Copy:
   - **Project URL** (goes in `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (goes in `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

3. Create `.env.local` in your project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 3: Create Blog Posts Table

1. In Supabase, go to **SQL Editor**
2. Click **New Query**
3. Paste the following SQL:

```sql
-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  published_at TIMESTAMP DEFAULT now(),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published_at DESC);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access on blog_posts" ON public.blog_posts
  FOR SELECT
  USING (true);
```

4. Click **Run** to execute

## Step 4: Add Sample Blog Posts

Copy and paste this SQL to add a sample post:

```sql
INSERT INTO public.blog_posts 
  (title, slug, excerpt, content, category, published_at)
VALUES (
  'Understanding Transformers: The Journey Begins',
  'understanding-transformers-journey-begins',
  'Starting my journey to understand and build transformers from scratch. Today I dive into attention mechanisms and the fundamental architecture.',
  '<h2>Why Transformers Matter</h2>
<p>Transformers have revolutionized deep learning. They power GPT, BERT, and countless other state-of-the-art models.</p>
<h2>Today''s Focus</h2>
<ul>
<li>Understanding multi-head attention</li>
<li>Positional encodings</li>
<li>Feed-forward networks</li>
</ul>
<p>Starting with the basics and building up to a full implementation. The key is to understand each component deeply.</p>',
  'Transformers',
  NOW()
);

INSERT INTO public.blog_posts 
  (title, slug, excerpt, content, category, published_at)
VALUES (
  'Day 1: Consistency Over Perfection',
  'day-1-consistency-over-perfection',
  'First day of my public learning journey. It''s not about being perfect, it''s about showing up every single day.',
  '<h2>The Commitment</h2>
<p>I''m dedicating my time to learning Machine Learning by building things end-to-end.</p>
<h3>Why Public?</h3>
<p>Learning in public holds me accountable and helps others who might be on the same journey.</p>
<h3>Today''s Session</h3>
<p>4 AM - 9 AM: Set up the personal website infrastructure
9 AM - 10 AM: Rest and breakfast
10 AM - 1 PM: Reviewed transformer architecture basics
1 PM - 3 PM: Exam preparation time
3 PM - 6 PM: Started implementing attention mechanism
6 PM - 7 PM: Evening break
7 PM - 9 PM: Wrote this first post and documented learnings</p>',
  'Research',
  NOW()
);
```

## Step 5: Verify Connection

1. Start your dev server: `npm run dev`
2. Go to [http://localhost:3000/blog](http://localhost:3000/blog)
3. You should see your sample posts displayed!

## 📝 Blog Post Categories

Use these categories for your posts:
- `Transformers`
- `LLMs`
- `RL` (Reinforcement Learning)
- `Audio ML`
- `RAG` (Retrieval Augmented Generation)
- `Research`
- `Other`

## 🔒 Security

Your configuration uses:
- **Public read-only access** for blog posts
- **API Key** authentication (anon key)
- **Row Level Security (RLS)** policies

To add/edit posts:
1. Use Supabase Studio (authenticated)
2. Or use a backend service with admin key

## 📝 Adding Posts Programmatically

You can also add posts from your backend:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!  // Use service role for admin access
);

async function addBlogPost(post: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
}) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post]);
  
  if (error) console.error('Error adding post:', error);
  return data;
}
```

## 🆘 Troubleshooting

### Posts not showing?
1. Check `.env.local` has correct URLs and keys
2. Verify table exists in Supabase
3. Check browser console for errors
4. Verify RLS policies allow public SELECT

### Slow queries?
1. Indexes are created automatically
2. Queries are optimized by default
3. Free tier has sufficient performance

### Need to delete posts?
Use Supabase Studio → Table Editor → blog_posts → Right-click row → Delete

## 🚀 Next Steps

1. Configure your domain (asif-reh.me)
2. Deploy to Vercel
3. Start writing daily posts!
4. Set up automated backups

---

**Questions?** Check the [Supabase documentation](https://supabase.com/docs) or GitHub issues.
