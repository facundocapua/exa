import type { Salon } from 'api'
import { inBetweenTimes } from './time'

const daysPrefix = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const

export const isStoreOpen = (hours: Salon['hours']): boolean => {
  const today = new Date()
  const day = daysPrefix[today.getDay()]
  if (!hours[day]) return false

  const { open, close } = hours[day]

  return inBetweenTimes(open, close)
}

export const getClosestOpenTime = (hours: Salon['hours']): Date | false => {
  const checkingDate = new Date()

  for (let i = 0; i < 7; i++) {
    checkingDate.setDate(checkingDate.getDate() + 1)
    const day = daysPrefix[checkingDate.getDay()]
    if (!hours[day]) continue

    const { open } = hours[day]
    const openTime = new Date(`${checkingDate.toDateString()} ${open}`)

    return openTime
  }

  return false
}

export const formatOpenTime = (hours: Salon['hours']): string => {
  const today = new Date()
  const { open, close } = hours[daysPrefix[today.getDay()]]

  const openTime = new Date(`2021-01-01 ${open}`)
  const closeTime = new Date(`2021-01-01 ${close}`)

  return `${openTime.toLocaleTimeString(['es-AR'], { hour: '2-digit', minute: '2-digit' })} - ${closeTime.toLocaleTimeString(['es-AR'], { hour: '2-digit', minute: '2-digit' })}`
}

export const formatNextOpenTime = (hours: Salon['hours']): string => {
  const nextOpenTime = getClosestOpenTime(hours)
  if (!nextOpenTime) return ''

  const today = new Date()
  if (nextOpenTime.getDay() === today.getDay()) {
    return nextOpenTime.toLocaleTimeString(['es-AR'], { hour: '2-digit', minute: '2-digit' })
  }

  return nextOpenTime.toLocaleString(['es-AR'], { weekday: 'long', hour: '2-digit', minute: '2-digit' })
}

export const findClosest = (lat: number, lng: number, stores: Salon[]) => {
  let closest: Salon | null = null
  let closestDistance = Infinity
  stores.forEach((store) => {
    const distance = Math.sqrt(Math.pow(store.lat - lat, 2) + Math.pow(store.lng - lng, 2))
    if (distance < closestDistance) {
      closest = store
      closestDistance = distance
    }
  })
  return closest
}
