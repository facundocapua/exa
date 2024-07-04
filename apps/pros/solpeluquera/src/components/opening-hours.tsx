import { getSalon } from 'api'
import { OpeningHoursSimple } from 'ui/components/generic/opening-hours/opening-hours-simple'

const weekDays = {
  mon: {
    day: 'LUNES',
    hours: '',
    number: 1
  },
  tue: {
    day: 'MARTES',
    hours: '',
    number: 2
  },
  wed: {
    day: 'MIERCOLES',
    hours: '',
    number: 3
  },
  thu: {
    day: 'JUEVES',
    hours: '',
    number: 4
  },
  fri: {
    day: 'VIERNES',
    hours: '',
    number: 5
  },
  sat: {
    day: 'SABADO',
    hours: '',
    number: 6
  },
  sun: {
    day: 'DOMINGO',
    hours: '',
    number: 7
  }
}

export default async function OpeningHours () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const store = await getSalon(storeId)

  if (!store) return null

  const { hours } = store

  if (!hours) return null

  const openingHours = Object.entries(weekDays).map(([key, value]) => {
    const openingHours = hours[key] ? `${hours[key]!.open} - ${hours[key]!.close}` : ''

    return {
      ...value,
      hours: openingHours
    }
  })

  return (
    <section className='relative'>
      <OpeningHoursSimple hours={openingHours} />
    </section>
  )
}
