import { getScoreboard } from '@/lib/nba'
import { Header } from '@/components/header'

export default async function Dashboard() {
  const games = await getScoreboard()

  return (
    <>
      <Header title="Today's Games" subtitle="Live NBA scoreboard" />
      <div style={{ padding: 24 }}>
        {games.length === 0 ? (
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            borderRadius: 12, padding: 40, textAlign: 'center', color: 'var(--text-muted)',
          }}>
            No games scheduled today. Ask the AI about upcoming matchups →
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            {games.map(game => {
              const comp = game.competitions[0]
              const [away, home] = comp.competitors[0].homeAway === 'away'
                ? [comp.competitors[0], comp.competitors[1]]
                : [comp.competitors[1], comp.competitors[0]]
              const live = game.status.type.name === 'STATUS_IN_PROGRESS'
              return (
                <div key={game.id} style={{
                  background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
                  borderRadius: 12, padding: '16px 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                    <img src={away.team.logos?.[0]?.href} alt={away.team.abbreviation} style={{ width: 36, height: 36, objectFit: 'contain' }} />
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{away.team.displayName}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Away</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', padding: '0 20px' }}>
                    <div style={{ color: 'var(--text-primary)', fontSize: 22, fontWeight: 700 }}>
                      {away.score} – {home.score}
                    </div>
                    <span style={{
                      fontSize: 11, padding: '2px 8px', borderRadius: 999,
                      background: live ? 'rgba(34,197,94,0.12)' : 'var(--bg-elevated)',
                      color: live ? 'var(--success)' : 'var(--text-muted)',
                      border: live ? '1px solid rgba(34,197,94,0.25)' : '1px solid var(--border-subtle)',
                    }}>
                      {live ? '🔴 LIVE' : game.status.type.shortDetail}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, justifyContent: 'flex-end' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{home.team.displayName}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Home</div>
                    </div>
                    <img src={home.team.logos?.[0]?.href} alt={home.team.abbreviation} style={{ width: 36, height: 36, objectFit: 'contain' }} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
