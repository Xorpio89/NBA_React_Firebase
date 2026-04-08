export interface Team {
  id: number
  uid: string
  slug: string
  abbreviation: string
  displayName: string
  shortDisplayName: string
  color: string
  alternateColor: string
  logos: { href: string }[]
  record?: { items: { summary: string; stats: { name: string; value: number }[] }[] }
}

export interface Game {
  id: string
  date: string
  name: string
  shortName: string
  status: { type: { name: string; shortDetail: string }; displayClock: string }
  competitions: {
    competitors: {
      team: { abbreviation: string; displayName: string; logos: { href: string }[] }
      score: string
      winner: boolean
      homeAway: string
    }[]
  }[]
}

export async function getTeams(): Promise<Team[]> {
  const res = await fetch(
    'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=30',
    { next: { revalidate: 3600 } }
  )
  const data = await res.json()
  return data.sports[0].leagues[0].teams.map((t: { team: Team }) => t.team)
}

export async function getTeam(id: string): Promise<Team> {
  const res = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`,
    { next: { revalidate: 3600 } }
  )
  const data = await res.json()
  return data.team
}

export async function getScoreboard(): Promise<Game[]> {
  const res = await fetch(
    'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    { next: { revalidate: 60 } }
  )
  const data = await res.json()
  return data.events ?? []
}
