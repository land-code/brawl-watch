import { TrophyIcon } from '@/icons/trophy-icon'
import { Client, PlayerBattlelog } from 'brawlstars'

import { RewardIcon } from '@/icons/reward-icon'
import TotalHours, { TotalHoursSkeleton } from '@/components/total-hours'
import StatCard, { StatCardSkeleton } from '@/components/stat-card'
import PlayerIcon, { PlayerIconSkeleton } from '@/components/player-icon'
import { Suspense } from 'react'
import BattlesChart from '@/components/BattlesChart'

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
    <div className='flex flex-col items-center gap-4 py-4'>
      <Suspense fallback={<PlayerIconSkeleton />}>
        <PlayerIcon iconId={player.icon.id} />
      </Suspense>
      <h1 className='text-2xl'>{name}</h1>
      <div className='flex flex-wrap gap-4'>
        <StatCard icon={TrophyIcon} label='Trofeos actuales' value={trophies} />
        <StatCard
          icon={RewardIcon}
          label='Trofeos máximos'
          value={highestTrophies}
        />
        <Suspense fallback={<TotalHoursSkeleton />}>
          <TotalHours playerTag={playerTag} />
        </Suspense>
      </div>
      <BattlesChart playerTag={playerTag} />
    </div>
  )
}
