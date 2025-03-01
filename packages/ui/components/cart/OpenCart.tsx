import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string;
  onClick?: () => void;
  quantity?: number;
}

export default function OpenCart ({ className, onClick, quantity }: Props) {
  return (
    <button aria-label="Abrir carrito" onClick={onClick} className='relative'>
      <ShoppingCartIcon
        className={twMerge(clsx(
          'h-8 w-8 text-neutral-700 transition-colors dark:text-white',
          className
        ))}
      />
      {quantity
        ? (
          <div className="absolute right-0 top-0 -mr-1 -mt-1 h-4 w-4 rounded-sm bg-primary-600 text-[11px] font-medium text-white">
            {quantity}
          </div>
          )
        : null}
    </button>
  )
}
