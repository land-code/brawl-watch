export interface IPlayerIconResponse {
  player: { [key: string]: PlayerIcon }
  club: { [key: string]: ClubIcon }
}

export interface ClubIcon {
  id: number
  imageUrl: string
}

export interface PlayerIcon {
  id: number
  name: string
  name2: string
  imageUrl: string
  imageUrl2: string
  brawler: number | null
  requiredTotalTrophies: number
  sortOrder: number
  isReward: boolean
  isAvailableForOffers: boolean
}
