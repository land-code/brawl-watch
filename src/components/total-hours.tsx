import ClockIcon from '@/icons/clock-icon'
import { Client } from 'brawlstars'
import StatCard, { StatCardSkeleton } from './stat-card'
import { getPlayerBattleLog } from '@/lib/get-player-battle-log'

interface ITotalHoursProps {
  playerTag: string
}

export function TotalHoursSkeleton() {
  return <StatCardSkeleton icon={ClockIcon} label='Horas de juego' />
}

export default async function TotalHours({ playerTag }: ITotalHoursProps) {
  const client = new Client(process.env.BRAWL_STARS_API_KEY!)

  const { items } = await getPlayerBattleLog(playerTag)
  const totalHours = items
    .map(b => {
      const { battle } = b as { battle: unknown }
      if (!battle || typeof battle !== 'object') return 0
      if (!('duration' in battle) || typeof battle.duration !== 'number')
        return 0
      return battle.duration
    })
    .reduce((acc, time) => acc + time, 0)
  return <StatCard icon={ClockIcon} label='Horas de juego' value={totalHours} />
}
