# ✍️ Quick Start: Writing Your First Blog Post

Here's how to quickly publish your first blog post about your ML journey.

## 🎯 Quick Path (5 minutes)

### 1. Go to Supabase

- Open [supabase.com](https://supabase.com)
- Go to your project dashboard
- Click **Table Editor** in the left sidebar

### 2. Open blog_posts Table

- Find and click on `blog_posts` table
- You'll see existing posts (if any)

### 3. Add New Post

Click **Insert row** button

Fill in:

| Field | Example | Notes |
|-------|---------|-------|
| title | "Day 1: Building My First Transformer" | Your post title |
| slug | `day-1-building-transformer` | URL-friendly (lowercase, hyphens) |
| excerpt | "Starting my journey into transformers today..." | Shows in blog list (100-150 chars) |
| content | See below | Full post content |
| category | Transformers | Choose from list below |
| published_at | 2024-12-04 | Set to now or future date |

### 4. Choose a Category

Use one of these:
- `Transformers`
- `LLMs`
- `RL`
- `Audio ML`
- `RAG`
- `Research`
- `Other`

## 📝 Content Format

### Simple HTML (Easiest)

```html
<h2>What I Did Today</h2>
<p>Today I focused on understanding attention mechanisms in transformers.</p>

<h3>Key Learnings</h3>
<ul>
<li>Multi-head attention allows parallel processing</li>
<li>Query, Key, Value matrices are crucial</li>
<li>Positional encodings preserve sequence information</li>
</ul>

<h3>Code I Wrote</h3>
<p>Built a basic attention module from scratch in PyTorch.</p>

<h2>Tomorrow's Plan</h2>
<p>Implement the full transformer block and test it.</p>
```

### Markdown Support

Your content also supports markdown:

```markdown
## What I Did Today

Today I focused on understanding attention mechanisms in transformers.

### Key Learnings

- Multi-head attention allows parallel processing
- Query, Key, Value matrices are crucial
- Positional encodings preserve sequence information

### Code I Wrote

Built a basic attention module from scratch in PyTorch.

## Tomorrow's Plan

Implement the full transformer block and test it.
```

## 📋 Daily Post Template

Copy this template for your daily posts:

```
Title: Day X: [What You Accomplished]
Slug: day-x-[description]
Excerpt: [1-2 sentence summary]
Category: [Choose appropriate category]

Content:
<h2>Today's Session</h2>
<p>Worked from [TIME] - [TIME]</p>

<h3>What I Accomplished</h3>
<ul>
<li>Task 1</li>
<li>Task 2</li>
<li>Task 3</li>
</ul>

<h3>Key Insights</h3>
<p>Describe what you learned...</p>

<h3>Code & Resources</h3>
<p>Links to relevant code, papers, or resources</p>

<h3>Tomorrow's Plan</h3>
<p>What's next...</p>

<h3>Time Log</h3>
<ul>
<li>4 AM - 9 AM: [What you did]</li>
<li>9 AM - 10 AM: Rest</li>
<li>10 AM - 1 PM: [What you did]</li>
<li>1 PM - 3 PM: Rest</li>
<li>3 PM - 6 PM: [What you did]</li>
<li>6 PM - 7 PM: Rest</li>
<li>7 PM - 9 PM: [What you did]</li>
</ul>
```

## 💡 Content Ideas

### Daily Journal Entries
- Morning: What you plan to work on
- Evening: What you accomplished, learned, struggled with

### Deep Dives
- Explaining a concept you just learned
- Implementing an algorithm from scratch
- Debugging a complex problem

### Weekly Reviews
- Summary of the week
- Progress towards goals
- Lessons learned

### Research Summaries
- Paper summaries and key takeaways
- Connections to your projects
- Implementation notes

### Code Walkthroughs
- Explain your implementation
- Show key code snippets
- Share learnings

## 🔍 Before Publishing

Checklist:
- [ ] Title is clear and specific
- [ ] Slug is URL-safe (lowercase, hyphens only)
- [ ] Excerpt is 1-2 sentences
- [ ] Category matches your content
- [ ] Content is well-formatted
- [ ] No typos or grammar errors
- [ ] Links work (if any)
- [ ] published_at is set correctly

## 🔄 Editing Existing Posts

1. In Supabase Table Editor
2. Find your post
3. Click the row to expand
4. Edit fields
5. Click **Save**

Website updates automatically!

## ⚡ Speed Tips

### Save Time
- Write offline in a text editor
- Copy paste into Supabase
- Use HTML snippets for consistency

### Batch Posts
- Write 2-3 posts at once
- Schedule them for different days
- Set published_at to future dates

### Version Control
- Keep copies of posts in a GitHub folder
- Create a `posts/` directory
- Commit post markdown/HTML

## 🎨 Formatting Tips

### Make Text Stand Out

```html
<!-- Bold -->
<strong>Important concept</strong>

<!-- Italics -->
<em>Key insight</em>

<!-- Code -->
<code>function_name()</code>

<!-- Code Block -->
<pre><code>
def attention(Q, K, V):
    scores = Q @ K.T
    return softmax(scores) @ V
</code></pre>

<!-- Blockquote -->
<blockquote>A great quote or insight</blockquote>
```

### Organize Content

```html
<!-- Section Headers -->
<h2>Main Section</h2>
<h3>Subsection</h3>

<!-- Lists -->
<ul>
  <li>Bullet point</li>
  <li>Another point</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

## 📊 Viewing Your Posts

After publishing:
1. Go to [your-domain.me/blog](https://asif-reh.me/blog)
2. Your post appears in the list
3. Click to view full post
4. Changes appear instantly!

## 🚀 Next: Automate Publishing

### Create a Script

Create `scripts/add-post.js`:

```javascript
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addPost(post) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post]);
  
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Post added:', data);
  }
}

// Run: node scripts/add-post.js
```

## 📞 Troubleshooting

### Post Not Appearing?
- Check slug is unique
- Verify published_at is not in future
- Refresh the blog page

### Formatting Looks Wrong?
- Check HTML is valid
- Use browser developer tools to inspect
- Test rendering locally first

### Can't Edit?
- Verify you're logged into Supabase
- Check RLS policies allow your edit
- Use Service Role key for admin access

---

**Ready to write?** 📝 Go to your Supabase dashboard and create your first post!

**Tip:** Set a routine time each day (e.g., 8 PM) to write about your ML journey.
