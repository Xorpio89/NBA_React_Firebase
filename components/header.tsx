'use client'
import { useCopilotChat } from '@copilotkit/react-core'

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  const { visibleMessages } = useCopilotChat()
  return (
    <header style={{
      height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)', position: 'sticky', top: 0, zIndex: 30,
    }}>
      <div>
        <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 16 }}>{title}</div>
        {subtitle && <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{subtitle}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {visibleMessages.length > 0 && (
          <span style={{
            background: 'var(--accent-subtle)', color: 'var(--accent)',
            border: '1px solid var(--accent-border)', borderRadius: 999,
            fontSize: 11, padding: '2px 8px',
          }}>
            {visibleMessages.length} messages
          </span>
        )}
      </div>
    </header>
  )
}
