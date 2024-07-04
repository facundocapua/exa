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
    const openingHours = hours[key] ? `${hours[key]!.open} - ${hours[key]!.close}` : ''

    return {
      ...value,
      hours: openingHours
    }
  })

  return (
    <section className='relative'>
      <div className='absolute w-full h-full -z-10 object-cover overflow-hidden'>
        <div className='from-primary-600 from-0 to-100% md:from-40% md:to-80% 2xl:from-55% 2xl:to-85% to-transparent w-full h-full bg-gradient-to-r absolute z-10'></div>
        <div className='relative w-[700px] md:w-full h-[350px]'>
          <Image alt='Nuestros horarios' src="/bg-hours.webp" width={912} height={1368} className='absolute top-1/2 right-0 -translate-y-[650px]' />
        </div>
      </div>
      <OpeningHoursSlider
        hours={openingHours}
        itemActiveClassName='bg-secondary-200 text-primary-700'
        itemClassName='bg-secondary-200/70 text-primary-900/40'
      />
    </section>
  )
}
