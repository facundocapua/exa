import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {
  onClick: () => void
}

export default function ForwardButton ({ onClick }: Props) {
  return (
    <button
        type="button"
        className="absolute top-0 right-0 z-10 items-center justify-center h-full px-4 cursor-pointer flex group focus:outline-none"
        onClick={onClick}
      >
      <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-gray-300 rounded-full sm:w-10 sm:h-10 bg-gray-400/10 group-hover:bg-gray-400/20 group-hover:scale-105 group-focus:outline-none">
        <ChevronRightIcon className="w-5 h-5 text-gray-300 sm:w-6 sm:h-6" />
        <span className="sr-only">Siguiente</span>
      </span>
    </button>
  )
}
