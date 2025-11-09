import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dailit - Literary Chinese Translation Game',
  description: 'Translate English back into original Literary Chinese. A daily practice game for classical Chinese language learners.',
  keywords: ['Literary Chinese', 'Classical Chinese', 'Translation', 'Language Learning', 'Game'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#faf9f7]">{children}</body>
    </html>
  )
}