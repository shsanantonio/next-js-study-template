/**
 * Main entry point of application
 * Contents will be displayed in every router you create
 * Common layout or template for all of the pages
 * All components in this file will be shared in the entire application
 * Customizes the appearance of HTML document
 * You can mofify language, metadata, scrip tags, links and fonts
 * 
 */
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
