import { getPlayerBattleLog } from '@/lib/get-player-battle-log'
import BattlesChartClient from './BattlesChartClient'
import { getFormattedBattleTime, getLastYear } from '@/utils'

interface IBattlesChartProps {
  playerTag: string
}

export default async function BattlesChart({ playerTag }: IBattlesChartProps) {
  const { items } = await getPlayerBattleLog(playerTag)

  const lastYear = getLastYear()

  console.log(items)

  const lastYearBattles = items.filter(battle => {
    const { battleTime } = battle
    if (!battleTime) return false

    const formattedBattleTime = getFormattedBattleTime(battleTime)
    const battleDate = new Date(formattedBattleTime)
    console.log(battleDate, lastYear, battleDate > lastYear)
    return battleDate > lastYear
  })

  const battlesPerMonth = lastYearBattles.reduce(
    (acc, battle) => {
      const { battleTime } = battle
      if (!battleTime) return acc
      const formattedBattleTime = getFormattedBattleTime(battleTime)
      const battleDate = new Date(formattedBattleTime)
      const month = battleDate.toLocaleString('default', { month: 'long' })
      acc[month] = (acc[month] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  console.log(battlesPerMonth)

  return <BattlesChartClient battles={battlesPerMonth} />
}
