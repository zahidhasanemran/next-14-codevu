import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Generative code',
  description: 'Generated by Generative code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-orange-600 px-8 py-6">
          <ul className="flex items-center ">
            <li className="px-4 py-3 text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 py-3 text-white">
              <Link href="/login">Login</Link>
            </li>
            <li className="px-4 py-3 text-white">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="px-4 py-3 text-white">
              <Link href="/docs">Docs</Link>
            </li>
          </ul>
        </header>
        <main className="py-16 px-16">{children}</main>
        <footer className="bg-sky-600 px-8 py-6 text-white text-2xl ">
          Footer
        </footer>
      </body>
    </html>
  )
}
