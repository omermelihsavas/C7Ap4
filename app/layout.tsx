import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'

const manrope = Manrope({ subsets: ['latin'] })

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
      <body className={manrope.className}>
          <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
