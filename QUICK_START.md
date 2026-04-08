# Iron Desi Gym Website - Quick Start Guide

## ⚡ Quick Edits (Most Common)

### 1. Change Gym Phone Number
**File**: `components/Header.tsx` (line ~40) and `components/Contact.tsx` (line ~75)

Find: `+91 98765 43210`  
Replace with your number

### 2. Change Gym Address
**File**: `components/Contact.tsx` (line ~70)

Find: `Marutikunj, Gurugram, Haryana 122001`  
Replace with your address

### 3. Change Gym Email
**File**: `components/Contact.tsx` (line ~80)

Find: `info@irondesi.com`  
Replace with your email

### 4. Update Membership Prices
**File**: `components/Membership.tsx` (line ~10)

```tsx
const plans = [
  {
    name: 'Basic',
    price: '₹5,999',  // ← Change here
    // ...
  },
  // ...
];
```

### 5. Add New Trainer
**File**: `components/Trainers.tsx` (line ~10)

```tsx
const trainers = [
  // ... existing trainers
  {
    name: 'New Trainer Name',
    specialty: 'Their specialty',
    certification: 'NASM, ACE',
    experience: '5+ years',
    initials: 'NT' // Use 2 letters from their name
  },
];
```

### 6. Add New Program
**File**: `components/Programs.tsx` (line ~10)

```tsx
const programs = [
  // ... existing programs
  {
    title: 'New Program Name',
    description: 'Program description',
    duration: '12 weeks',
    color: 'from-blue-600 to-blue-700' // Use any Tailwind color
  },
];
```

## 🎨 Customize Colors

**File**: `app/globals.css` (lines 5-35)

Example - Change primary color from red to blue:
```css
--primary: #0066ff;  /* Light mode blue */
```

And in `.dark` section:
```css
--primary: #0088ff;  /* Dark mode blue */
```

All components using `text-primary`, `bg-primary`, etc. will automatically update!

## 📱 Change Hero Image

1. Replace image: Upload your gym image to `/public/gym-hero.jpg`
2. Or update path in `components/Hero.tsx`:
   ```tsx
   <img src="/path/to/your/image.jpg" alt="Gym" />
   ```

## 🔧 Add New Section

1. Create file: `components/YourSection.tsx`
2. Copy structure from existing section:
   ```tsx
   export function YourSection() {
     return (
       <section className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
           {/* Your content */}
         </div>
       </section>
     );
   }
   ```
3. Add to `app/page.tsx`:
   ```tsx
   import { YourSection } from '@/components/YourSection';
   
   export default function Home() {
     return (
       <main>
         {/* other sections */}
         <YourSection />
       </main>
     );
   }
   ```

## ✅ Dark Mode Toggle

**Already works!** Click the Sun/Moon icon in the header to toggle.

### How to verify:
1. Open website
2. Click Sun/Moon icon (top right)
3. Page should smoothly transition between dark and light themes

If it's not working:
- Check browser console (F12) for errors
- Make sure `app/layout.tsx` has `suppressHydrationWarning` on `<html>`

## 🚀 Deploy Your Site

### Deploy to Vercel (Easiest):
1. Push code to GitHub
2. Go to vercel.com
3. Import project
4. Click Deploy

Your site will be live in seconds!

### Local Testing:
```bash
npm install    # Install dependencies
npm run dev    # Start dev server
# Open http://localhost:3000
```

## 📝 Useful Tailwind Classes

Use these for custom styling:

**Spacing**: `p-4` (padding), `m-4` (margin), `gap-4` (space between)  
**Colors**: `bg-primary`, `text-foreground`, `border-border`  
**Text**: `text-sm`, `font-bold`, `text-center`  
**Responsive**: `md:grid-cols-2`, `lg:text-xl`  
**Effects**: `rounded-lg`, `shadow-lg`, `hover:bg-primary/90`

## 💡 File Guide

| File | What to edit |
|------|-------------|
| `components/Header.tsx` | Navigation, phone number |
| `components/Hero.tsx` | Main headline, CTA buttons |
| `components/Programs.tsx` | Training programs list |
| `components/Trainers.tsx` | Trainer information |
| `components/Membership.tsx` | Pricing plans |
| `components/Contact.tsx` | Contact info, email, phone |
| `components/Footer.tsx` | Footer links and info |
| `app/globals.css` | Colors and theme |

## 🆘 Need Help?

1. Check `MAINTENANCE.md` for detailed guides
2. Search component files for the text you want to change
3. Use browser DevTools (F12) to inspect elements
4. All styling uses Tailwind CSS - check tailwindcss.com

---

**That's it!** The website is production-ready. Just edit the text, images, and colors to match your gym's branding.
