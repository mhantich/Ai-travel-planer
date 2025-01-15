import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack App',
  description: 'A full stack application with Next.js and Express',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className  } `}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}