import { TrophyIcon } from '@/icons/trophy-icon'
import { Client, PlayerBattlelog } from 'brawlstars'

import { RewardIcon } from '@/icons/reward-icon'
import ClockIcon from '@/icons/clock-icon'

interface IPlayerProps {
  params: {
    playerTag: string
  }
}

export default async function Player({ params: { playerTag } }: IPlayerProps) {
  const client = new Client(process.env.BRAWL_STARS_API_KEY!)
  const player = await client.getPlayer(playerTag)
  const { name, trophies, highestTrophies } = player
  // getPlayerBattlelog is not typed well in the library
  const battleLog = (await client.getPlayerBattlelog(playerTag)) as unknown as {
    items: PlayerBattlelog[]
  }
  const totalHours = battleLog.items
    .map(battle => (battle.battle as unknown as { duration: number }).duration)
    .reduce((acc, time) => acc + time, 0)
  return (
    <div className='flex flex-col items-center gap-4 py-4'>
      <h1 className='text-2xl'>{name}</h1>
      <div className='flex flex-wrap gap-4'>
        <p className='flex w-max flex-col items-center rounded-xl border-2 border-zinc-400 p-4'>
          <TrophyIcon className='size-12' />{' '}
          <span className='pt-2 text-zinc-200'>Trofeos actuales</span>{' '}
          <span className='text-xl'>{trophies}</span>
        </p>
        <p className='flex w-max flex-col items-center rounded-xl border-2 border-zinc-400 p-4'>
          <RewardIcon className='size-12' />{' '}
          <span className='pt-2 text-zinc-200'>Trofeos máximos</span>{' '}
          <span>{highestTrophies}</span>
        </p>
        <p className='flex w-max flex-col items-center rounded-xl border-2 border-zinc-400 p-4'>
          <ClockIcon className='size-12' />{' '}
          <span className='pt-2 text-zinc-200'>Horas de juego</span>{' '}
          <span>{totalHours}</span>
        </p>
      </div>
    </div>
  )
}
