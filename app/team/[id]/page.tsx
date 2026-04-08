'use client'
import { use, useEffect, useState } from 'react'
import { useCopilotReadable } from '@copilotkit/react-core'
import { Header } from '@/components/header'
import Link from 'next/link'
import type { Team } from '@/lib/nba'

export default function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [team, setTeam] = useState<Team | null>(null)

  useEffect(() => {
    fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`)
      .then(r => r.json()).then(d => setTeam(d.team))
  }, [id])

  useCopilotReadable({
    description: 'Currently viewed NBA team',
    value: team ? { name: team.displayName, abbreviation: team.abbreviation } : 'Loading...',
  })

  if (!team) return (
    <>
      <Header title="Loading..." />
      <div style={{ padding: 24, color: 'var(--text-muted)' }}>Loading team...</div>
    </>
  )

  return (
    <>
      <Header title={team.displayName} subtitle={`${team.abbreviation} · NBA`} />
      <div style={{ padding: 24 }}>
        <Link href="/teams" style={{ color: 'var(--text-muted)', fontSize: 13, textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>
          ← All Teams
        </Link>

        {/* Hero Card */}
        <div style={{
          background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
          borderRadius: 16, padding: 32, display: 'flex', alignItems: 'center', gap: 32,
          marginBottom: 20,
          borderTop: `3px solid #${team.color || '6366f1'}`,
        }}>
          <img src={team.logos?.[0]?.href} alt={team.displayName} style={{ width: 100, height: 100, objectFit: 'contain' }} />
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 4 }}>NBA FRANCHISE</div>
            <h1 style={{ color: 'var(--text-primary)', fontSize: 28, fontWeight: 700, margin: '0 0 8px' }}>{team.displayName}</h1>
            <div style={{
              display: 'inline-flex', gap: 8, padding: '4px 12px', borderRadius: 999,
              background: `#${team.color}22`, color: `#${team.color}`,
              border: `1px solid #${team.color}44`, fontSize: 13, fontWeight: 500,
            }}>
              {team.abbreviation}
            </div>
          </div>
        </div>

        {/* AI Hint */}
        <div style={{
          background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)',
          borderRadius: 12, padding: 16,
        }}>
          <div style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 500, marginBottom: 4 }}>🤖 AI ANALYSIS</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>
            Ask the AI sidebar about {team.displayName} — roster, recent form, predictions.
          </div>
        </div>
      </div>
    </>
  )
}
