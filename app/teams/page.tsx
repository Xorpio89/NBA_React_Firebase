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
            <Link key={team.id} href={`/team/${team.id}`} className="team-card">
              <img
                src={team.logos?.[0]?.href}
                alt={team.displayName}
                style={{ width: 56, height: 56, objectFit: 'contain', marginBottom: 12 }}
              />
              <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: 13 }}>
                {team.shortDisplayName}
              </div>
              <div style={{
                marginTop: 8, display: 'inline-block', padding: '2px 8px', borderRadius: 999,
                fontSize: 11,
                background: team.color ? `#${team.color}22` : 'var(--accent-subtle)',
                color: team.color ? `#${team.color}` : 'var(--accent)',
                border: team.color ? `1px solid #${team.color}44` : '1px solid var(--accent-border)',
              }}>
                {team.abbreviation}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
