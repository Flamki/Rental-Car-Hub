import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export const metadata: Metadata = {
  title: 'Car-hub',
  description: 'this is a rental car app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
        <Footer />
    </html>
  )
}
