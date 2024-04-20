import { UserIcon } from '@heroicons/react/24/outline'

export default function Account () {
  return (
    <button aria-label="Mi cuenta">
      {/* <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
        <UserIcon className='h-4 transition-all ease-in-out hover:scale-110 ' />
      </div> */}
      <UserIcon className='relative flex h-8 w-8 text-neutral-700 transition-colors dark:text-white' />
    </button>
  )
}
