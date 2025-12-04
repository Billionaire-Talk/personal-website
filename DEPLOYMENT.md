# 🚀 Deployment Guide: Vercel + Custom Domain

Complete guide to deploy your personal website to Vercel and set up your custom .me domain.

## Part 1: Deploy to Vercel

### Option A: Push to GitHub First (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Create repo on github.com first, then:
   cd /Users/code-asif/me/asif-journey
   git remote add origin https://github.com/YOUR_USERNAME/asif-journey.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy from Vercel Dashboard**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Configure settings:
     - **Framework**: Next.js
     - **Root Directory**: ./
   - Add environment variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     ```
   - Click "Deploy"

### Option B: Deploy CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/code-asif/me/asif-journey
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# Deploy to production
vercel --prod
```

## Part 2: Configure Custom Domain

### Get Your .me Domain

If you have GitHub Student Pack:

1. Go to [GitHub Student Pack](https://education.github.com/pack)
2. Look for **Namecheap** offer
3. Follow the link and claim your free .me domain
4. Complete domain registration

### Connect Domain to Vercel

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click "Add Domain"
3. Enter your domain (e.g., `asif-reh.me`)
4. Choose **Add** when Vercel suggests the project
5. Vercel will provide DNS records to add

### Update DNS Records (Namecheap)

If using Namecheap:

1. Go to [namecheap.com/dashboard](https://www.namecheap.com/dashboard)
2. Find your domain
3. Click **Manage** → **Advanced DNS**
4. Add the DNS records Vercel provided:
   - Update **A Record** to Vercel's IP
   - Add **CNAME** record if needed

5. DNS propagation takes 15-30 minutes

### Alternative: Point to Vercel Nameservers

1. In Namecheap, **Manage** → **Nameservers**
2. Change to custom nameservers
3. Add Vercel's nameservers:
   ```
   ns1.vercel.com
   ns2.vercel.com
   ```

4. Update in Vercel settings
5. Wait for propagation (5-48 hours)

## Part 3: SSL Certificate

Vercel automatically provisions SSL certificates. To verify:

1. Vercel dashboard → Your project → Settings → Domains
2. Check that your domain shows as "Valid Configuration"
3. HTTPS should work automatically

## Part 4: Environment Variables

### In Vercel Production

1. Go to project **Settings** → **Environment Variables**
2. Add:
   ```
   NEXT_PUBLIC_SUPABASE_URL = your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your_key
   ```
3. Redeploy to apply changes

### For Local Development

Keep `.env.local` locally:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Part 5: Verify Deployment

1. Visit [asif-reh.me](https://asif-reh.me) (your domain)
2. Check homepage loads correctly
3. Try navigating to:
   - `/blog` - Blog listing
   - `/about` - About page
   - Blog post (if you added any)

## 🔍 Troubleshooting

### Domain not resolving?
- DNS changes take time to propagate
- Check DNS propagation at [whatsmydns.net](https://www.whatsmydns.net/)
- Vercel might need additional DNS records

### Site showing 404?
- Verify Vercel deployment succeeded
- Check build logs in Vercel dashboard
- Redeploy if needed

### Environment variables not working?
- Verify they're added in Vercel project settings
- Redeploy after adding variables
- Check Production environment specifically

### HTTPS not working?
- Wait 15 minutes for SSL provisioning
- Refresh browser cache
- Check domain is properly configured

## 📊 Vercel Analytics

Monitor your site:

1. Vercel dashboard → Analytics
2. View:
   - Page performance
   - Web Vitals
   - Visitor analytics
   - Error tracking

## 🔄 Continuous Deployment

Your site automatically redeploys when you:
1. Push to `main` branch on GitHub
2. Vercel detects the push
3. Runs build and deploys automatically

## 🛠️ Common Tasks

### Rollback to Previous Deployment
- Vercel dashboard → Deployments → Select previous → Promote

### Clear Cache
- Vercel dashboard → Settings → Caching → Clear Cache

### Custom Domain Alias
- Add multiple domains pointing to same site
- Settings → Domains → Add additional domain

### Environment for Different Branches
- Settings → Environment Variables
- Set for specific Git branches (Preview, Production)

## 📞 Support

- [Vercel Docs](https://vercel.com/docs)
- [Namecheap Support](https://www.namecheap.com/support/)
- [GitHub Student Pack Help](https://education.github.com/help)

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Initial deployment successful
- [ ] Custom domain registered (.me)
- [ ] DNS records configured
- [ ] Domain resolving correctly
- [ ] HTTPS working
- [ ] Blog posts visible
- [ ] Mobile responsive checked

---

**Your site is live!** 🎉

Next step: Start writing daily blog posts about your ML journey!
