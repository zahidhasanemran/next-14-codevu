import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-orange-600 px-8 py-6">Header</header>
        <main className="py-16 px-16">{children}</main>
        <footer className="bg-sky-600 px-8 py-6">Footer</footer>
      </body>
    </html>
  )
}
