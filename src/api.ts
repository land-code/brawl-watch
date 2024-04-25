import { IPlayerIconResponse } from './types/api/icons'

export const API = {
  ICONS: {
    PLAYERS: {
      LIST: async () => {
        const res = await fetch('https://api.brawlapi.com/v1/icons')
        const { player } = (await res.json()) as IPlayerIconResponse
        return player
      },
      GET: async (iconId: number) => {
        const list = await API.ICONS.PLAYERS.LIST()
        return list[iconId].imageUrl
      }
    }
  }
}
