import { getSalon } from 'api'
import Image from 'next/image'
import { OpeningHoursSlider } from 'ui'

const weekDays = {
  mon: {
    day: 'LUN',
    hours: '',
    number: 1
  },
  tue: {
    day: 'MAR',
    hours: '',
    number: 2
  },
  wed: {
    day: 'MIE',
    hours: '',
    number: 3
  },
  thu: {
    day: 'JUE',
    hours: '',
    number: 4
  },
  fri: {
    day: 'VIE',
    hours: '',
    number: 5
  },
  sat: {
    day: 'SAB',
    hours: '',
    number: 6
  },
  sun: {
    day: 'DOM',
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
    const openingHours = hours[key] && hours[key].open && hours[key].close ? `${hours[key]!.open} - ${hours[key]!.close}` : ''

    return {
      ...value,
      hours: openingHours
    }
  })

  return (
    <section className='relative'>
      <div className='absolute w-full h-full -z-10 object-cover overflow-hidden'>
        <div className='from-primary-200 from-0 to-100% md:from-20% md:to-80% 2xl:from-25% 2xl:to-75% via-primary-500/20 to-primary-200 w-full h-full bg-gradient-to-r absolute z-10'></div>
        <div className='relative w-[700px] md:w-full h-[350px] mx-auto'>
          <Image alt='Nuestros horarios' src="/bg-hours.jpg" width={900} height={442} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
      </div>
      <OpeningHoursSlider
        hours={openingHours}
        itemActiveClassName='bg-secondary-600 text-primary-200'
        itemClassName='bg-secondary-600/70 text-primary-200/40'
      />
    </section>
  )
}
