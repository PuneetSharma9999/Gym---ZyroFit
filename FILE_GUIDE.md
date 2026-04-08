# Iron Desi Gym - File Guide & Where to Edit

## 📁 Directory Structure

```
iron-desi-gym/
├── app/                      # Next.js app directory
│   ├── page.tsx             # 🏠 HOME PAGE - imports all sections
│   ├── layout.tsx           # ROOT LAYOUT - theme provider setup
│   ├── globals.css          # 🎨 COLOR THEME - edit here to change colors
│   ├── providers.tsx        # Theme configuration
│   └── api/
│       └── contact/
│           └── route.example.ts  # 📧 EMAIL API - optional setup guide
│
├── components/              # Reusable React components
│   ├── Header.tsx          # 🧭 NAVIGATION & DARK MODE
│   ├── Hero.tsx            # 🎯 MAIN BANNER with headline & CTA
│   ├── Features.tsx        # ⭐ WHY CHOOSE US section
│   ├── Programs.tsx        # 💪 TRAINING PROGRAMS
│   ├── Trainers.tsx        # 👥 TRAINER PROFILES
│   ├── Membership.tsx      # 💳 PRICING PLANS
│   ├── Testimonials.tsx    # ⭐ SUCCESS STORIES
│   ├── Contact.tsx         # 📞 CONTACT FORM & INFO
│   ├── Footer.tsx          # 📄 FOOTER with links
│   └── ui/
│       └── button.tsx      # Button component
│
├── public/                  # Static assets
│   └── gym-hero.jpg        # 🖼️ HERO IMAGE - replace with your photo
│
├── lib/
│   └── utils.ts            # Utility functions
│
├── 📚 DOCUMENTATION FILES
│   ├── QUICK_START.md       # ⭐ START HERE - 5min customizations
│   ├── MAINTENANCE.md       # Detailed editing guide
│   ├── PROJECT_SUMMARY.md   # Complete project overview
│   ├── FEATURES_CHECKLIST.md # What's implemented
│   └── FILE_GUIDE.md        # This file
│
└── Config Files
    ├── package.json         # Dependencies
    ├── tsconfig.json        # TypeScript config
    ├── next.config.mjs      # Next.js config
    └── tailwind.config.ts   # Tailwind CSS config
```

## 🎯 Quick Find: What to Edit?

### Change Gym Basic Info
```
Phone Number      → components/Contact.tsx, components/Header.tsx
Address           → components/Contact.tsx
Email             → components/Contact.tsx, components/Footer.tsx
Hours             → components/Contact.tsx
Location Name     → components/Footer.tsx
```

### Change Main Content
```
Hero Headline     → components/Hero.tsx
Hero Description  → components/Hero.tsx
Hero Image        → public/gym-hero.jpg
Features List     → components/Features.tsx
```

### Change Programs/Training
```
Program List      → components/Programs.tsx (array at top)
New Program       → Add object to programs array
Program Colors    → Change 'color' property in programs array
```

### Change Trainer Info
```
Trainer List      → components/Trainers.tsx (array at top)
Add Trainer       → Add object to trainers array
Trainer Details   → Edit name, specialty, certification, experience
```

### Change Pricing
```
Pricing Plans     → components/Membership.tsx (array at top)
Plan Prices       → Edit 'price' field
Plan Features     → Edit 'features' array
Featured Plan     → Set 'highlighted: true' on desired plan
```

### Change Testimonials
```
Member Stories    → components/Testimonials.tsx (array at top)
Add Testimony     → Add object to testimonials array
Ratings           → Edit 'rating' field (1-5)
```

### Change Colors/Theme
```
Primary Color     → app/globals.css (line ~7, 42)
Secondary Color   → app/globals.css (line ~8, 43)
Background Color  → app/globals.css (line ~6, 41)
Text Color        → app/globals.css (line ~7, 42)
```

### Change Navigation
```
Menu Items        → components/Header.tsx (navItems array)
Logo              → components/Header.tsx
```

### Change Footer
```
Footer Links      → components/Footer.tsx
Company Info      → components/Footer.tsx
Social Links      → components/Footer.tsx
```

## 📝 Component Files Explained

### Header.tsx
- Navigation menu
- Dark mode toggle button
- Logo
- Mobile hamburger menu
- Smooth scroll to sections

**Edit for**:
- Change gym name
- Change phone number (in contact button)
- Add/remove navigation items
- Change logo color

### Hero.tsx
- Main banner section
- Headline and subheading
- Hero background image
- CTA buttons
- Statistics display

**Edit for**:
- Change main headline
- Change subheading
- Replace hero image
- Update statistics (members, equipment, trainers)
- Change button text

### Features.tsx
- 6 feature cards
- Icons (from lucide-react)
- Descriptions

**Edit for**:
- Add/remove features
- Change feature titles
- Change descriptions
- Change icons (see lucide-react docs)

### Programs.tsx
- 6 training programs
- Gradient overlays
- Duration information
- Descriptions

**Edit for**:
- Add/remove programs
- Update program names
- Update descriptions
- Change durations
- Change gradient colors

### Trainers.tsx
- 4 trainer profiles
- Avatar initials
- Certifications
- Experience
- Contact buttons

**Edit for**:
- Add/remove trainers
- Update trainer names
- Change specialization
- Update certifications
- Change experience years

### Membership.tsx
- 3 pricing tiers
- Feature lists
- Pricing in INR
- Highlighted "Most Popular" plan

**Edit for**:
- Change prices
- Add/remove plans
- Update features
- Change which plan is highlighted
- Update plan descriptions

### Testimonials.tsx
- 4 member success stories
- Star ratings
- Member names
- Transformation achievements

**Edit for**:
- Add/remove testimonials
- Update member names
- Change quotes
- Update transformations
- Change ratings

### Contact.tsx
- Contact form
- Contact information
- Address, phone, email, hours
- Social media links
- Form handling

**Edit for**:
- Update gym address
- Change phone number
- Update email
- Change hours
- Update social media links
- Add form backend (API integration)

### Footer.tsx
- Footer links and sections
- Company info
- Contact details
- Social links

**Edit for**:
- Update company name
- Change links
- Update address
- Change contact info
- Update social links

## 🎨 CSS Files

### globals.css
- Main color theme
- Font configuration
- Global styles
- Light and dark mode variables

**Edit for**:
- Change primary color
- Change secondary color
- Change background color
- Change text color
- Adjust spacing
- Change border colors

### Tailwind Config
- Configured in tsconfig.json paths
- Utility classes for styling
- Responsive prefixes (md:, lg:, etc.)

## 🔧 Configuration Files

### package.json
- Project dependencies
- npm scripts
- Version management

### tsconfig.json
- TypeScript configuration
- Path aliases (@/* → current directory)
- Type checking rules

### next.config.mjs
- Next.js configuration
- Build optimizations

### tailwind.config.ts
- Tailwind CSS customization
- Theme extensions
- Plugin configuration

## 📚 Documentation Files

### QUICK_START.md ⭐
- **Start here first**
- 5-minute customizations
- Copy-paste guide
- Most common edits

### MAINTENANCE.md
- Detailed editing guide
- File-by-file instructions
- How to edit each section
- Troubleshooting tips

### PROJECT_SUMMARY.md
- Complete project overview
- Features implemented
- Technical stack
- Deployment instructions

### FEATURES_CHECKLIST.md
- All features listed
- What's implemented
- What's ready to customize
- Quality metrics

### FILE_GUIDE.md
- This file
- Directory structure
- Quick find guide
- Component explanations

## 🚀 Start Editing

### Fastest Way to Get Started
1. Open `QUICK_START.md`
2. Find the section you want to edit
3. Copy the exact file location
4. Make your changes
5. Save and reload browser (automatic with dev server)

### Step-by-Step Example

**Want to change phone number?**
1. Open `components/Contact.tsx`
2. Find: `+91 98765 43210`
3. Replace with your number
4. Done! (Page updates automatically)

**Want to add new trainer?**
1. Open `components/Trainers.tsx`
2. Find the `trainers` array (line 10)
3. Add new object:
   ```tsx
   {
     name: 'Your Name',
     specialty: 'Your Specialty',
     certification: 'Certifications',
     experience: '5+ years',
     initials: 'YN'
   },
   ```
4. Done! New trainer appears on page

**Want to change colors?**
1. Open `app/globals.css`
2. Find `:root {` section
3. Change `--primary: #ff4455;` to your color
4. Find `.dark {` section
5. Change dark mode primary color
6. Done! All primary colored elements update

## 📱 Responsive Classes Used

```
Base (mobile):    no prefix
Tablet:           md: prefix
Desktop:          lg: prefix

Examples:
md:grid-cols-2    → 1 column mobile, 2 columns tablet+
lg:text-xl        → smaller on mobile, larger on desktop
hidden md:flex    → hidden mobile, visible tablet+
```

## 🎯 Color Variables Reference

Use these in any component:

```
Text:       text-foreground, text-muted-foreground
Background: bg-background, bg-card
Buttons:    bg-primary, bg-secondary
Borders:    border-border, border-input
Special:    bg-accent, text-accent-foreground
```

## ✨ Next Steps

1. **Read QUICK_START.md** - Learn 5-minute customizations
2. **Edit your content** - Change gym info, programs, pricing
3. **Update images** - Replace gym photo
4. **Test locally** - Run `npm run dev` and check
5. **Deploy** - Push to GitHub and deploy to Vercel

---

**Happy customizing! Your website is ready to launch.** 🚀
