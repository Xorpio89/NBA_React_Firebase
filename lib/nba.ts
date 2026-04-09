export interface Team {
  id: number
  slug: string
  abbreviation: string
  displayName: string
  shortDisplayName: string
  color: string
  logos: { href: string }[]
}

export interface Game {
  id: string
  status: { type: { name: string; shortDetail: string } }
  competitions: {
    competitors: {
      team: { abbreviation: string; displayName: string; logos: { href: string }[] }
      score: string
      homeAway: string
    }[]
  }[]
}

export async function getTeams(): Promise<Team[]> {
  try {
    const res = await fetch(
      'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=30',
      { next: { revalidate: 3600 } }
    )
    const data = await res.json()
    return data?.sports?.[0]?.leagues?.[0]?.teams?.map((t: { team: Team }) => t.team) ?? []
  } catch { return [] }
}

export async function getTeam(id: string): Promise<Team | null> {
  try {
    const res = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`,
      { next: { revalidate: 3600 } }
    )
    const data = await res.json()
    return data?.team ?? null
  } catch { return null }
}

export async function getScoreboard(): Promise<Game[]> {
  try {
    const res = await fetch(
      'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
      { next: { revalidate: 60 } }
    )
    const data = await res.json()
    return data?.events ?? []
  } catch { return [] }
}
