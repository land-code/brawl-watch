import { Client, PlayerBattlelog } from 'brawlstars'

export const getPlayerBattleLog = async (playerTag: string) => {
  const client = new Client(process.env.BRAWL_STARS_API_KEY!)
  // The type assertion is necessary because the typings provided by the library are incorrect
  return (await client.getPlayerBattlelog(playerTag)) as unknown as {
    items: PlayerBattlelog[]
  }
}
