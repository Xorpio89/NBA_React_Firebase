import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'NBA AI Oracle',
  description: 'Live NBA stats with AI-powered analysis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: 'var(--sidebar-width)', flex: 1, minHeight: '100vh' }}>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
