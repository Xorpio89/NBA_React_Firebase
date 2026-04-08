import { getTeams } from '@/lib/nba'
import { Header } from '@/components/header'
import Link from 'next/link'

export default async function Teams() {
  const teams = await getTeams()
  return (
    <>
      <Header title="All Teams" subtitle={`${teams.length} NBA franchises`} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
          {teams.map(team => (
            <Link key={team.id} href={`/team/${team.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
                borderRadius: 12, padding: '20px 16px', textAlign: 'center',
                transition: 'border-color 0.15s, background 0.15s', cursor: 'pointer',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-default)'; (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-elevated)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)'; (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface)' }}
              >
                <img
                  src={team.logos?.[0]?.href}
                  alt={team.displayName}
                  style={{ width: 56, height: 56, objectFit: 'contain', marginBottom: 12 }}
                />
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: 13 }}>{team.shortDisplayName}</div>
                <div style={{
                  marginTop: 8, display: 'inline-block', padding: '2px 8px', borderRadius: 999,
                  fontSize: 11, background: `#${team.color}22`, color: `#${team.color}`,
                  border: `1px solid #${team.color}44`,
                }}>
                  {team.abbreviation}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
