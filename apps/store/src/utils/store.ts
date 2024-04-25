import type { Salon } from 'api'
import { inBetweenTimes } from './time'

const daysPrefix = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const

export const isStoreOpen = (hours: Salon['hours']): boolean => {
  if (!hours) return false

  const today = new Date()
  const day = daysPrefix[today.getDay()] as keyof Salon['hours']
  if (!hours[day]) return false

  const { open, close } = hours[day] as { open: string, close: string }

  return inBetweenTimes(open, close)
}

export const getClosestOpenTime = (hours: Salon['hours']): Date | false => {
  if (!hours) return false

  const checkingDate = new Date()

  for (let i = 0; i < 7; i++) {
    checkingDate.setDate(checkingDate.getDate() + 1)
    const day = daysPrefix[checkingDate.getDay()] as keyof Salon['hours']
    if (!hours[day]) continue

    const { open } = hours[day] as { open: string }
    const openTime = new Date(`${checkingDate.toDateString()} ${open}`)

    return openTime
  }

  return false
}

export const formatOpenTime = (hours: Salon['hours']): string => {
  if (!hours) return ''

  const today = new Date()
  const day = daysPrefix[today.getDay()] as keyof Salon['hours']
  const { open, close } = hours[day] as { open: string, close: string }

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
    const distance = Math.sqrt(Math.pow(Number(store.lat) - lat, 2) + Math.pow(Number(store.lng) - lng, 2))
    if (distance < closestDistance) {
      closest = store
      closestDistance = distance
    }
  })
  return closest
}
