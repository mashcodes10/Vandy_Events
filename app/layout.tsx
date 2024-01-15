import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'VandyEvents',
  description: 'Unlock a world beyond your dorm door to enjoy your Commodore life',
  icons: {
    icon: '/assets/images/headlogo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
