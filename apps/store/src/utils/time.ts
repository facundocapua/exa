export const inBetweenTimes = (start: string, end: string, time: string | undefined = undefined) => {
  const today = new Date()

  const findTime = time ? new Date(`${today.toDateString()} ${time}`) : today
  const startTime = new Date(`${today.toDateString()} ${start}`)
  const endTime = new Date(`${today.toDateString()} ${end}`)

  return findTime >= startTime && findTime <= endTime
}
