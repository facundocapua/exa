'use client'

import { Tab } from '@headlessui/react'
import type { Product } from 'api'
import ZoomImage from './ZoomImage'
import ProductImageGalleryThumb from './ProductImageGalleryThumb'
import { useSearchParams } from 'next/navigation'

type Props = {
  product: Product
}

export default function ProductImageGallery ({ product }: Props) {
  const searchParams = useSearchParams()
  const currentVariant = searchParams.get('v') ? product.variants?.find(variant => variant.sku === searchParams.get('v')) : null

  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6 mx-2 md:mx-0">
          {product.images.map((image) => (
            <Tab
              key={image.id}
              className="relative flex cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <ProductImageGalleryThumb label={product.title} image={image.url} selected={selected} />
              )}
            </Tab>
          ))}
          {currentVariant?.images?.map((image) => (
            <Tab
              key={image.id}
              className="relative flex cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <ProductImageGalleryThumb label={product.title} image={image.url} selected={selected} />
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {product.images.map((image) => (
          <Tab.Panel key={image.id}>
            <ZoomImage image={image.url} alt={product.title} />
          </Tab.Panel>
        ))}
        {currentVariant?.images?.map((image) => (
          <Tab.Panel key={image.id}>
            <ZoomImage image={image.url} alt={product.title} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
