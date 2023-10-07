import './globals.css'
import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'



export const metadata: Metadata = {
  title: 'Saket E-commerce-Pawan Yadav',
  description: 'Saket E-COMMERCE-Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </ClerkProvider>
  )
}
