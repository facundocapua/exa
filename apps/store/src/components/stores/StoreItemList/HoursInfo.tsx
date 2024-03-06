import { formatNextOpenTime, formatOpenTime, isStoreOpen } from '@/utils/store'
import { ClockIcon } from '@heroicons/react/24/outline'
import type { Salon } from 'api'

type Props = {
  hours: Salon['hours']
}

export default function HoursInfo ({ hours }: Props) {
  return (
    <div className='flex items-center gap-2'>
      <ClockIcon className="w-4 h-4" />
      <small>{isStoreOpen(hours)
        ? (<>Abierto ahora: {formatOpenTime(hours)} <span className="rounded-full bg-green-800 w-2 h-2 inline-block"></span></>)
        : (<>Cerrado: Abre {formatNextOpenTime(hours)} <span className="rounded-full bg-red-800 w-2 h-2 inline-block"></span></>)
        }
      </small>
    </div>
  )
}
