import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'
import './globals.css'
import { Weight } from 'lucide-react'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' ,


})

export const metadata: Metadata = {
  title: 'Vandy Events',
  description: 'Break free from the dorm and dive into campus events',
  icons: {
    icon: '/assets/images/logo.png'
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
