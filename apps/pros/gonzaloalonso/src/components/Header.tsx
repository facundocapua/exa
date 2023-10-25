import Link from 'next/link'
import Logo from './Logo'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const navigation = [
  { id: crypto.randomUUID(), name: 'Sobre mí', href: '/sobre-mi' },
  { id: crypto.randomUUID(), name: 'Portfolio', href: '/portfolio' },
  { id: crypto.randomUUID(), name: 'Galería', href: '/galeria' }
]

export default async function Header () {
  return (
    <header className="pt-4 pb-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-3 w-full items-center">
        <nav className="flex gap-8">
          {navigation.map((item) => (<Link key={item.id} href={item.href}>{item.name}</Link>))}
        </nav>

        <Logo />

        <Link href="/tienda" className='flex justify-end'>
          <ShoppingBagIcon className="h-6 w-6" />
        </Link>

      </div>
    </header>
  )
}
