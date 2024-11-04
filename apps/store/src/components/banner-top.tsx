import { CreditCardIcon } from '@heroicons/react/20/solid'
import { TruckIcon } from '@heroicons/react/24/solid'
import { clsx } from 'clsx'

type Props = {
  className?: string
}

export const BannerTop = ({ className }: Props) => {
  return (
    <div className={clsx(
      'w-full flex justify-center items-center text-white text-xs md:text-base font-semibold bg-black gap-x-4 px-4',
      className
    )}>
      <div className='flex items-center pr-4 border-r-2'>
        <CreditCardIcon className="w-6 h-6 mr-2" />
        <p>3 cuotas sin interés</p>
      </div>
      <div className='flex items-center'>
        <TruckIcon className="w-6 h-6 mr-2" />
        <p className='text-balance'>Envío gratis a Tandil o compras superiores a $44.999</p>
      </div>
    </div>
  )
}

export default BannerTop
