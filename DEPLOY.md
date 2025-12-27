# Deploy to Vercel

## Quick Deploy

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
cd ~/human-unicorn-pod-wrapped
vercel
```

4. When prompted:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name: **humanunicornpodwrapped2025**
   - Directory: **./** (press Enter)
   - Override settings? **No**

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Using GitHub + Vercel Dashboard

1. Create a new repository on GitHub (name it `humanunicornpodwrapped2025`)

2. Push your code to GitHub:
```bash
cd ~/human-unicorn-pod-wrapped
git remote add origin https://github.com/YOUR_USERNAME/humanunicornpodwrapped2025.git
git branch -M main
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com) and:
   - Click "New Project"
   - Import your GitHub repository
   - Project name: **humanunicornpodwrapped2025**
   - Framework Preset: **Vite**
   - Root Directory: **./**
   - Click "Deploy"

## Project Configuration

The project is already configured with:
- `vercel.json` for routing
- Vite build settings
- All dependencies in `package.json`

## After Deployment

Your site will be available at:
- **https://humanunicornpodwrapped2025.vercel.app**

You can also set a custom domain in Vercel dashboard settings.

