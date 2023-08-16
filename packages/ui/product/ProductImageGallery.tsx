'use client'
import { Tab } from '@headlessui/react'
import type { Product } from 'api'
import clsx from 'clsx'

type Props = {
  product: Product
}

export default function ProductImageGallery ({ product }: Props) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {product.images.map((image) => (
            <Tab
              key={image}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{product.name}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img src={image} alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span
                    className={clsx(
                      selected ? 'ring-indigo-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {product.images.map((image) => (
          <Tab.Panel key={image}>
            <img
              src={image}
              alt={product.name}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
