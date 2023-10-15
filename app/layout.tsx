import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GentleDog',
  description: 'Ai추천 서비스를 제공하는 반려동물 의류 쇼핑앱',
  manifest: '/manifest.json',
  icons: { apple: '/aseets/images/icons/icon-192x192.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
