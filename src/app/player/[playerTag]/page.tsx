import { Client } from 'brawlstars'

interface IPlayerProps {
  params: {
    playerTag: string
  }
}

export default async function Player({ params: { playerTag } }: IPlayerProps) {
  const client = new Client(process.env.BRAWL_STARS_API_KEY!)
  const player = await client.getPlayer(playerTag)
  const { name, trophies, highestTrophies } = player
  return (
    <div>
      <h1>Player {name}</h1>
      <p>Trophies: {trophies}</p>
      <p>Highest Trophies: {highestTrophies}</p>
    </div>
  )
}
