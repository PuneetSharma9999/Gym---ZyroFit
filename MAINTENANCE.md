# Iron Desi Gym Website - Maintenance Guide

## Project Structure

```
/app
  ├── page.tsx          # Main home page (imports all sections)
  ├── layout.tsx        # Root layout with theme provider
  ├── globals.css       # Global styles & color theme
  └── providers.tsx     # Next-themes configuration

/components
  ├── Header.tsx        # Navigation & dark mode toggle
  ├── Hero.tsx          # Hero section with CTA buttons
  ├── Features.tsx      # Why choose us section
  ├── Programs.tsx      # Training programs cards
  ├── Trainers.tsx      # Trainer profiles
  ├── Membership.tsx    # Pricing plans
  ├── Testimonials.tsx  # Member reviews
  ├── Contact.tsx       # Contact form & info
  ├── Footer.tsx        # Footer links
  └── /ui
      └── button.tsx    # Reusable button component

/public
  └── gym-hero.jpg      # Hero section background image

/lib
  └── utils.ts          # Utility functions (cn for classnames)
```

## Color Theme System

The website uses a **dark-first design** with warm Indian gym aesthetics:

### Colors (Edit in `app/globals.css`):
- **Primary**: `#ff4455` (Vibrant Red) - Main brand color for CTAs and highlights
- **Secondary**: `#ffd700` (Gold) - Accent color for badges and highlights
- **Background**: `#0f0f0f` (Dark) - Main background
- **Foreground**: `#f5f1e8` (Cream) - Text color
- **Card**: `#1a1a1a` (Slightly lighter dark) - Card backgrounds

### Light Mode:
- **Primary**: `#c41e3a` (Deep Red)
- **Secondary**: `#ffd700` (Gold)
- **Background**: `#f5f1e8` (Cream)
- **Foreground**: `#1a1a1a` (Dark)

## How to Edit Content

### 1. Update Gym Information (Header & Footer)
**Files**: `components/Header.tsx`, `components/Footer.tsx`

```tsx
// Update gym name
<span className="font-bold text-lg">Iron Desi</span>

// Update location, phone, email
<p className="text-muted-foreground">Your new location</p>
```

### 2. Update Programs
**File**: `components/Programs.tsx`

```tsx
const programs = [
  {
    title: 'New Program',
    description: 'Program description',
    duration: '12 weeks',
    color: 'from-red-600 to-red-700'
  },
  // Add more programs...
];
```

### 3. Update Trainers
**File**: `components/Trainers.tsx`

```tsx
const trainers = [
  {
    name: 'Trainer Name',
    specialty: 'Training specialty',
    certification: 'Certifications',
    experience: '5+ years',
    initials: 'TN' // 2 letter initials for avatar
  },
  // Add more trainers...
];
```

### 4. Update Membership Plans
**File**: `components/Membership.tsx`

```tsx
const plans = [
  {
    name: 'Plan Name',
    price: '₹5,999',
    period: '/month',
    description: 'Plan description',
    features: [
      'Feature 1',
      'Feature 2',
      // Add features...
    ],
    highlighted: false // Set to true for featured plan
  },
  // Add more plans...
];
```

### 5. Update Testimonials
**File**: `components/Testimonials.tsx`

```tsx
const testimonials = [
  {
    name: 'Member Name',
    transformation: 'Transformation achieved',
    quote: 'Member testimonial quote',
    rating: 5,
    initials: 'MN' // 2 letter initials for avatar
  },
  // Add more testimonials...
];
```

### 6. Update Hero Section
**File**: `components/Hero.tsx`

```tsx
// Update headline
<h1 className="text-5xl sm:text-6xl font-bold leading-tight">
  Your new headline here
</h1>

// Update description
<p className="text-xl text-muted-foreground">
  Your description here
</p>

// Update stats
<p className="text-3xl font-bold text-primary">123+</p>
<p className="text-sm text-muted-foreground">Your stat</p>
```

### 7. Update Features
**File**: `components/Features.tsx`

```tsx
const features = [
  {
    icon: Dumbbell, // Use any icon from lucide-react
    title: 'Feature Title',
    description: 'Feature description'
  },
  // Add more features...
];
```

## Dark Mode Toggle

The dark mode is **fully functional** using `next-themes`:

- Toggle button in the header (Sun/Moon icon)
- Automatically persists user preference
- Smooth transitions between themes
- Color variables automatically update in `app/globals.css`

### How it works:
1. Header component uses `useTheme()` hook
2. Clicking icon toggles between 'dark' and 'light' themes
3. CSS variables in globals.css update automatically based on `.dark` class

## Form Handling

**Contact Form** (`components/Contact.tsx`):
- Currently logs to console
- Shows success message after submission
- To add backend:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your API call here:
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

## Common Customizations

### Change Button Colors
```tsx
<Button className="bg-primary hover:bg-primary/90">
  Click Me
</Button>
```

### Change Card Styling
```tsx
<div className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg">
  Content
</div>
```

### Add New Section
1. Create new file: `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to JSX: `<YourSection />`

### Update Images
- Replace `/public/gym-hero.jpg` with your image
- Use same path in components

## Performance Tips

1. **Images**: Keep gym images optimized (max 2MB)
2. **Sections**: Use React.memo() if you have many repeated components
3. **Forms**: Consider debouncing form inputs for large forms
4. **Dark Mode**: Already optimized with next-themes

## Troubleshooting

### Dark mode not working?
- Check `app/layout.tsx` has `suppressHydrationWarning` attribute
- Ensure `Providers` component wraps children
- Check `app/globals.css` has `.dark` class styles

### Styling issues?
- Check color variables in `app/globals.css`
- Verify Tailwind classes are spelled correctly
- Use `bg-card`, `text-foreground` instead of hardcoded colors

### Form not working?
- Check browser console for errors
- Ensure form inputs have `name` attributes
- Verify `handleChange` and `handleSubmit` functions

## Deployment

The site is ready for deployment:

```bash
# Build for production
npm run build

# Run production build locally
npm start
```

Deploy to Vercel with one click or via Git integration.

## Key Features Implemented

✅ **Working Dark Mode** - Fully functional with next-themes  
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS  
✅ **Modular Components** - Easy to edit and maintain  
✅ **Beautiful Styling** - Indian gym aesthetic with warm colors  
✅ **Smooth Animations** - Hover effects and transitions  
✅ **Contact Form** - Fully functional form component  
✅ **Mobile Menu** - Hamburger menu for mobile devices  
✅ **SEO Ready** - Proper semantic HTML and metadata  

---

**Last Updated**: 2024  
**Website**: Iron Desi Gym, Marutikunj, Gurugram
