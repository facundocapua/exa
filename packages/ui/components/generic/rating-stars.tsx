import { StarIcon as StartFilledIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
  rating: number
  className?: string
}

export const RatingStars = ({ rating, className }: Props) => {
  return (
    <div className={clsx(twMerge(
      'flex gap-x-1 text-primary-600',
      className
    ))}>
      {Array.from({ length: 5 }).map((_, i) => (
        <>
          {
            i < rating
              ? <StartFilledIcon key={i} aria-hidden="true" className="h-5 w-5 flex-none" />
              : <StarIcon key={i} aria-hidden="true" className="h-5 w-5 flex-none" />
          }
        </>
      ))}
    </div>
  )
}

export default RatingStars
