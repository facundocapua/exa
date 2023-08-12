import { UserIcon } from '@heroicons/react/24/outline'

export default function Account () {
  return (
    <button>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
        <UserIcon className='h-4 transition-all ease-in-out hover:scale-110 ' />
      </div>
    </button>
  )
}