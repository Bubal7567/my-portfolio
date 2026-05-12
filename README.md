# Boobalan Selvakumar — Portfolio Website

Dark cybersecurity-themed personal portfolio built with Next.js 14 and Tailwind CSS.

## Features
- Dark glassmorphism UI with cyberpunk aesthetic
- Animated hero with typing effect
- Smooth scroll animations
- Mobile responsive
- Sticky navbar
- Sections: Hero, About, Skills, Experience, Certifications, Projects, Badminton, Contact

## Tech Stack
- Next.js 14
- Tailwind CSS 3
- Google Fonts (Syne, DM Sans, JetBrains Mono)

---

## Local Development

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Run development server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Deploy to Vercel (Free)

### Option A: Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts — select Next.js when asked
```

### Option B: Via GitHub (Recommended)

1. Create a GitHub account at github.com
2. Create a new repository called "portfolio"
3. Push this folder to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
4. Go to vercel.com and sign up with your GitHub account
5. Click "New Project" and import your portfolio repository
6. Click Deploy — Vercel handles everything automatically
7. Your site will be live at: https://portfolio-YOUR_USERNAME.vercel.app

### Custom Domain (Optional)
- In Vercel dashboard, go to your project → Settings → Domains
- Add your custom domain and follow the DNS instructions

---

## Adding Your CV for Download

Place your CV PDF file at:
```
/public/cv.pdf
```

The "Download CV" button in the navbar will automatically link to it.

---

## Customisation

Edit `/pages/index.js` to update:
- Personal details in the DATA section at the top
- Skills, experience, certifications, projects
- Contact information
- Social media links

Edit `/styles/globals.css` to change:
- Accent colors (--cyber-blue, --cyber-purple)
- Background color (--cyber-dark)

---

## Folder Structure
```
portfolio/
├── pages/
│   ├── _app.js          # App wrapper
│   └── index.js         # Main portfolio page (all sections)
├── styles/
│   └── globals.css      # Global styles, animations, glassmorphism
├── public/
│   └── cv.pdf           # Your CV (add this file)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```
