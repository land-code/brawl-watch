import { API } from '@/api'
import Image from 'next/image'

interface IPlayerIconProps {
  iconId: number
}

export default async function PlayerIcon({ iconId }: IPlayerIconProps) {
  const imageUrl = await API.ICONS.PLAYERS.GET(iconId)
  return (
    <Image
      src={imageUrl}
      alt='Brawl Stars player icon'
      width={128}
      height={128}
    />
  )
}
