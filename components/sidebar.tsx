'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/',        icon: '🏠', label: 'Dashboard' },
  { href: '/teams',   icon: '🏀', label: 'Teams'     },
  { href: '/scores',  icon: '📊', label: 'Scores'    },
]

export function Sidebar() {
  const path = usePathname()
  return (
    <aside style={{
      width: 'var(--sidebar-width)', minHeight: '100vh', position: 'fixed',
      background: 'var(--bg-surface)', borderRight: '1px solid var(--border-subtle)',
      display: 'flex', flexDirection: 'column', zIndex: 40,
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>🏀</span>
          <div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 15 }}>NBA AI Oracle</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 11 }}>Live · Stats · AI</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '12px 8px', flex: 1 }}>
        {NAV.map(item => {
          const active = path === item.href
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px', borderRadius: 8, marginBottom: 2,
              textDecoration: 'none', fontSize: 14, fontWeight: active ? 500 : 400,
              background: active ? 'var(--accent-subtle)' : 'transparent',
              color: active ? 'var(--accent)' : 'var(--text-secondary)',
              border: active ? '1px solid var(--accent-border)' : '1px solid transparent',
              transition: 'all 0.15s',
            }}>
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: 11 }}>
        Powered by ESPN API
      </div>
    </aside>
  )
}
