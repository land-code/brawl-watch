export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const getLastYear = () => {
  const lastYear = new Date()
  lastYear.setFullYear(lastYear.getFullYear() - 1)
  return lastYear
}

export const getFormattedBattleTime = (battleTime: string) =>
  battleTime.slice(0, 4) +
  '-' +
  battleTime.slice(4, 6) +
  '-' +
  battleTime.slice(6, 11) +
  ':' +
  battleTime.slice(11, 13) +
  ':' +
  battleTime.slice(13)
