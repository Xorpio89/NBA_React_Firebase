export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{
      height: 56, display: 'flex', alignItems: 'center',
      padding: '0 24px', borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)', position: 'sticky', top: 0, zIndex: 30,
    }}>
      <div>
        <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 16 }}>{title}</div>
        {subtitle && <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{subtitle}</div>}
      </div>
    </header>
  )
}
