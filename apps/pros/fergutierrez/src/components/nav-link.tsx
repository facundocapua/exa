import Link from 'next/link'
import clsx from 'clsx'

export default function NavLink ({ href, name, active = false }: { href: string, name: string, active?: boolean }) {
  return (
    <Link href={href} className='uppercase group transition-all duration-150 flex flex-col items-center select-none'>
      <span className={clsx(
        'font-medium text-lg select-none',
        {
          'text-gray-100 group-hover:text-black transition-all duration-200': !active,
          'text-black': active
        }
      )}>{name}</span>
      <div className={clsx({
        'bg-black w-0 h-0.5 group-hover:w-full transition-all duration-200': !active,
        'bg-black w-full h-0.5': active
      })}></div>
    </Link>
  )
}
