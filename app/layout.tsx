import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ZyroFit Gym',
  description: 'Premium fitness gym in India. Strength training, personal coaching, and community fitness.',
  generator: 'Puneet Kumar Sharma',
  icons: {
    icon: [
      {
        url: '/ZyroFit.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ZyroFit.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ZyroFit.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ZyroFit.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
