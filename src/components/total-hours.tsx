import ClockIcon from '@/icons/clock-icon'
import { PlayerBattlelog } from 'brawlstars'
import StatCard from './StatCard'

interface ITotalHoursProps {
  battleLogItems: PlayerBattlelog[]
}
export default function TotalHours({ battleLogItems }: ITotalHoursProps) {
  const totalHours = battleLogItems
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
