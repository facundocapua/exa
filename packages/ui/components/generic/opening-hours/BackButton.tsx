import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type Props = {
  onClick: () => void
}

export default function BackButton ({ onClick }: Props) {
  return (
    <button
        type="button"
        className="absolute top-40 md:top-1/2 left-0 z-10 items-center justify-center px-1 cursor-pointer flex group focus:outline-hidden md:hidden"
        onClick={onClick}
      >
      <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-gray-700 rounded-full md:w-10 sm:h-10 bg-gray-400/10 dark:bg-gray-100/10 dark:border-gray-200 group-hover:bg-gray-400/20 group-hover:scale-105 group-focus:outline-hidden">
        <ChevronLeftIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 sm:w-6 sm:h-6" />
        <span className="sr-only">Atras</span>
      </span>
    </button>
  )
}
