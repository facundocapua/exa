import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {
  onClick: () => void
}

export default function ForwardButton ({ onClick }: Props) {
  return (
    <button
        type="button"
        className="absolute top-40 md:top-1/2 right-0 z-10 items-center justify-center cursor-pointer flex group focus:outline-hidden p-1"
        onClick={onClick}
      >
      <span className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-700 rounded-full bg-gray-400/10 group-hover:bg-gray-400/20 dark:bg-gray-100/10 dark:border-gray-200 group-hover:scale-105 group-focus:outline-hidden">
        <ChevronRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        <span className="sr-only">Siguiente</span>
      </span>
    </button>
  )
}
