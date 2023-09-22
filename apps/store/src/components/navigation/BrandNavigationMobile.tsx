import { Disclosure, Transition } from '@headlessui/react'
import type { Brand } from 'api'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  brands: Array<Brand>
  setOpen: (open: boolean) => void
}

export default function BrandNavigationMobile ({ brands, setOpen }: Props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={
              clsx(
                open ? 'border-primary-600 text-primary-600' : 'border-transparent text-neutral-900',
                'flex w-full whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
              )
            }>
            Marcas
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="space-y-12 px-4 py-6" static>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                {brands.map((item) => (
                  <Link href={`/brand/${item.slug}`} key={item.name} className="group relative" onClick={() => setOpen(false)}>
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md  group-hover:opacity-75">
                      <Image src={item.image} alt={item.name} className="object-cover object-center" width={280} height={280} />
                    </div>
                    <h3 className="mt-6 block text-sm font-medium text-neutral-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                      {item.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
