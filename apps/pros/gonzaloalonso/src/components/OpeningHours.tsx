import { getStore } from 'api'
import clsx from 'clsx'

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
  const store = await getStore(storeId)

  if (!store) return null

  const { hours } = store

  const openingHours = Object.entries(weekDays).map(([key, value]) => {
    const openingHours = hours[key] ? `${hours[key].open} - ${hours[key].close}` : ''

    return {
      ...value,
      hours: openingHours
    }
  })

  return (
    <section className='py-8 my-8'>
      <h1 className='mx-auto text-center text-2xl md:text-3xl font-semibold mb-8'>Nuestros horarios</h1>
      <div className="flex max-w-7xl mx-auto justify-around flex-wrap md:justify-between gap-y-4 md:gap-y-0">
        {openingHours.map((item) => (
          <article key={item.day} className={clsx(
            'rounded-full flex flex-col items-center justify-center w-[150px] h-[150px]',
            item.hours ? 'bg-primary-700' : 'bg-gray-600'
          )}>
            <span className="text-5xl">{item.day}</span>
            <span className="text-lg">{item.hours ? item.hours : 'Cerrado'}</span>
          </article>
        ))}

      </div>
    </section>
  )
}
