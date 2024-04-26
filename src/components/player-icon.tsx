import { API } from '@/api'
import { sleep } from '@/utils'
import Image from 'next/image'

interface IPlayerIconProps {
  iconId: number
}

export function PlayerIconSkeleton() {
  return (
    <div className='m-2.5 box-content h-[108px] w-[108px] animate-pulse bg-zinc-500'></div>
  )
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
