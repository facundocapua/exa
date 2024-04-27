'use client'
import { ArchiveBoxIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useSelectedLayoutSegment } from 'next/navigation'

const menu = [
  {
    name: 'General',
    slug: null,
    icon: HomeIcon,
    current: true
  },
  {
    name: 'Perfil',
    slug: 'profile',
    icon: UserCircleIcon,
    current: false
  },
  {
    name: 'Pedidos',
    slug: 'orders',
    icon: ArchiveBoxIcon,
    current: false
  }
]

export const AccountMenu = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-0">
      <nav className="flex-none px-4 sm:px-6 lg:px-0">
        <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
          {menu.map((item) => (
            <li key={item.name}>
              <a
              href={`/account/${item.slug ?? ''}`}
              className={clsx(
                'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold',
                {
                  'bg-gray-50 text-primary-600': segment === item.slug,
                  'text-gray-700 hover:text-primary-600 hover:bg-gray-50': segment !== item.slug
                }
              )}>
                <item.icon
                className={clsx(
                  'h-6 w-6 shrink-0', {
                    'text-primary-600': segment === item.slug,
                    'text-gray-400 group-hover:text-primary-600': segment !== item.slug
                  }
                )}
                aria-hidden="true"
              />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default AccountMenu
