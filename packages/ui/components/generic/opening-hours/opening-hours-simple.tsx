import clsx from 'clsx'

type Props = {
  hours: Array<{
    day: string
    hours: string
  }>
}

export const OpeningHoursSimple = ({ hours }: Props) => {
  if (!hours) return null

  return (
    <section className='grid grid-cols-1 lg:flex lg:flex-row justify-around items-center flex-wrap py-12'>
      {hours.map((item) => (
        <article key={item.day}>
          <div className={clsx(
            'hidden lg:flex flex-col items-center justify-center w-[180px] h-[120px] border-primary-900 border rounded-full',
            item.hours ? 'bg-primary-300' : 'bg-gray-200 opacity-50'
          )}>
            <span className="text-5xl text-primary-900">{item.day.substring(0, 3)}</span>
            <span className="text-lg">{item.hours ? item.hours : 'Cerrado'}</span>
          </div>

          <div className={clsx(
            'flex lg:hidden items-center justify-start w-full px-4',
            item.hours ? '' : 'opacity-40'
          )}>
            <span className="text-lg text-primary-900 w-[140px]">{item.day}</span>
            <span className="text-2xl text-primary-700">{item.hours ? item.hours : 'Cerrado'}</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default OpeningHoursSimple
