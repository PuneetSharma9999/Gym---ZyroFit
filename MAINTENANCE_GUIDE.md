# Iron Desi Gym Website - Maintenance & Customization Guide

## Quick Links
- **COMPLETE_FEATURES.md** - Full feature list and testing checklist
- **FILE_GUIDE.md** - File structure and organization
- **QUICK_START.md** - Getting started guide

---

## Most Common Customizations

### 1. Update Gym Contact Information
**File:** `components/Contact.tsx`

```typescript
// Phone number (line ~28)
<p className="text-muted-foreground text-sm">+91 98765 43210</p>

// Email (line ~34)
<p className="text-muted-foreground text-sm">info@irondesi.com</p>

// Address (line ~20)
<p className="text-muted-foreground text-sm">Marutikunj, Gurugram, Haryana 122001</p>

// Hours (line ~40)
<p className="text-muted-foreground text-sm">Mon - Sun: 5:00 AM - 10:00 PM</p>
```

### 2. Update Pricing
**File:** `components/Membership.tsx` (lines 6-52)

```typescript
const plans = [
  {
    name: 'Basic',
    price: '₹3,999',  // Change here
    period: '/month',
    description: 'Perfect for beginners',
    features: [
      // Add/remove features here
      'Gym access during peak hours',
      'Basic equipment access',
    ],
    highlighted: false
  },
  // ... other plans
];
```

### 3. Update Trainer Information
**File:** `components/Trainers.tsx` (lines 4-35)

```typescript
const trainers = [
  {
    name: 'Trainer Name',
    specialty: 'Specialty Area',
    certification: 'Certification Name',
    experience: 'X years',
    initials: 'TN'
  },
  // ... more trainers
];
```

### 4. Modify Programs
**File:** `components/Programs.tsx` (lines 6-45)

```typescript
const programs = [
  {
    title: 'Program Name',
    description: 'Program description',
    duration: '12 weeks',
    icon: '🏋️',
    slug: 'program-slug'  // Must match file name
  },
  // ... more programs
];
```

Then update the program details:
**File:** `app/programs/[slug]/page.tsx` (lines 3-100)

```typescript
const programDetails: Record<string, any> = {
  'program-slug': {
    title: 'Program Name',
    duration: '12 weeks',
    icon: '🏋️',
    description: '...',
    overview: '...',
    benefits: ['benefit 1', 'benefit 2'],
    features: ['feature 1', 'feature 2'],
    schedule: ['Phase 1', 'Phase 2', 'Phase 3'],
    price: '₹3,999/month',
    difficulty: 'Beginner',
    sessions: '4-5 per week'
  }
};
```

### 5. Change Colors (Dark/Light Theme)
**File:** `app/globals.css` (lines 1-130)

```css
:root {
  --primary: #06b6d4;    /* Main color (Teal) */
  --secondary: #ff9500;  /* Accent color (Orange) */
  --foreground: #0d1117; /* Text color */
  --background: #f8f9fa; /* Background color */
  /* ... other colors */
}

.dark {
  --primary: #06b6d4;
  --secondary: #ff9500;
  --foreground: #c9d1d9;
  --background: #0d1117;
  /* ... other dark colors */
}
```

### 6. Add Navigation Items
**File:** `components/Header.tsx` (lines 24-31)

```typescript
const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'New Section', id: 'new-section-id' },  // Add here
  { label: 'Contact', id: 'contact' },
];
```

### 7. Update Features List
**File:** `components/Features.tsx` (lines 4-25)

```typescript
const features = [
  {
    icon: IconComponent,
    title: 'Feature Title',
    description: 'Feature description'
  },
  // ... more features
];
```

### 8. Modify More Services
**File:** `components/MoreFeatures.tsx` (lines 5-35)

```typescript
const features = [
  {
    icon: Utensils,
    title: 'Service Name',
    description: 'Service description',
    details: ['detail 1', 'detail 2', 'detail 3']
  },
  // ... more services
];
```

---

## Adding New Content

### Add a New Training Program
1. **Update** `components/Programs.tsx` - add to programs array with slug
2. **Create** new file `app/programs/your-slug/page.tsx`
3. **Copy** structure from existing program page
4. **Update** header navigation if needed
5. **Test** the link works

### Add a New Section to Homepage
1. **Create** new component `components/NewSection.tsx`
2. **Import** in `app/page.tsx`
3. **Add** to main export (before Footer)
4. **Add** section ID for navigation: `<section id="section-id">`
5. **Update** header navigation items

### Add a New Trainer
1. Open `components/Trainers.tsx`
2. Add new trainer to `trainers` array
3. Grid automatically adjusts (4 columns on desktop)

---

## Styling & Design

### Common Tailwind Classes Used
```
Spacing: px-4, py-8, gap-6, mb-4, mt-8
Colors: bg-primary, text-foreground, border-border
Layout: flex, grid, max-w-7xl, mx-auto
Responsive: sm:, md:, lg:, hidden sm:flex
Animation: animate-fade-in, hover:scale-105, transition-all
```

### How to Change Section Colors
- Use CSS variables in `globals.css`
- Update both `:root` (light) and `.dark` (dark) sections
- All components use variables, no hardcoded colors

### Add Custom Animations
1. Add keyframes to `app/globals.css`
2. Create utility class in `@layer components`
3. Use in your JSX: `className="animate-custom-animation"`

---

## Troubleshooting

### Program Cards Not Clickable
**Solution:** Check if slug in Programs.tsx matches file name in `app/programs/[slug]/`

### Mobile Menu Not Closing After Click
**Solution:** Check line 20 in Header.tsx - `setIsOpen(false)` should be in scrollToSection

### Theme Not Changing
**Solution:** Check `<Providers>` wrapper in layout.tsx includes `ThemeProvider`

### Buttons Not Working
**Solution:** 
- Ensure Button component imported from `@/components/ui/button`
- Check Link wrapper around buttons for navigation
- Verify onClick handlers are properly defined

### Animations Not Smooth
**Solution:** 
- Check globals.css animations are loaded
- Verify animation class names in JSX
- Check browser hardware acceleration is enabled

---

## Performance Tips

1. **Images:** Use WebP format when possible
2. **Code:** Remove unused imports and components
3. **CSS:** Unused Tailwind classes are auto-purged
4. **JavaScript:** Minimize hook usage, memoize components
5. **Load:** Images lazy load by default in Next.js

---

## Security & Deployment

### Before Going Live
- [ ] Update contact information
- [ ] Change all placeholder data
- [ ] Remove debug console.log statements
- [ ] Test all forms work
- [ ] Check all links are correct
- [ ] Test mobile responsiveness
- [ ] Review color scheme
- [ ] Test dark mode

### Deploy to Vercel
```bash
# Install Vercel CLI (one time)
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables
Currently no environment variables needed. If you add them later:
1. Create `.env.local` file
2. Add variables: `NEXT_PUBLIC_VAR=value`
3. Deploy to Vercel and add in project settings

---

## Common Tasks

### Task: Change Primary Color Theme
1. Open `app/globals.css`
2. Find `:root { --primary: #06b6d4; }`
3. Change hex color value
4. Find `.dark { --primary: #06b6d4; }`
5. Change dark mode color
6. Save and refresh browser

**Time:** 2 minutes

### Task: Add New Membership Plan
1. Open `components/Membership.tsx`
2. Add to `plans` array (copy existing plan)
3. Update: name, price, description, features, highlighted
4. Save and test
5. Check responsive layout

**Time:** 5 minutes

### Task: Update All Social Media Links
1. Open `components/Contact.tsx`
2. Find social buttons section (line ~85)
3. Update button links to your social profiles
4. Save and test clicks

**Time:** 3 minutes

### Task: Add New Feature to Features Section
1. Open `components/Features.tsx`
2. Import icon from lucide-react
3. Add to features array
4. Update title, description, icon
5. Test responsive display

**Time:** 5 minutes

---

## Key File Locations Quick Reference

| Task | File | Line |
|------|------|------|
| Update phone/email | Contact.tsx | 25-40 |
| Change prices | Membership.tsx | 6-52 |
| Add trainers | Trainers.tsx | 4-35 |
| Modify programs | Programs.tsx | 6-45 |
| Update colors | globals.css | 1-130 |
| Navigation menu | Header.tsx | 24-31 |
| Main sections | page.tsx | 14-25 |
| Site metadata | layout.tsx | 8-11 |

---

## Getting Help

All components are self-contained and clearly documented. When making changes:
1. Find the data array (usually at top of file)
2. Understand the structure (data + JSX)
3. Make changes to data
4. Save and test
5. Check mobile view

The website uses Next.js, React, Tailwind CSS, and TypeScript - all industry standard tools with excellent documentation online.

