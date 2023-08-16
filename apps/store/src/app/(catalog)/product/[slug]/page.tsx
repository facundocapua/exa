import { getProduct } from 'api'
import { notFound } from 'next/navigation'
import { Price, ProductImageGallery } from 'ui'

type Props = {
  params: {
    slug: string
  }
}

export default async function Product ({ params }: Props) {
  const { slug } = params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductImageGallery product={product} />
          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <Price amount={product.price} className='text-3xl tracking-tight text-gray-900' />
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.name }}
                />
            </div>

            <form className="mt-6">
              {/* Colors */}
              {/* <div>
                <h3 className="text-sm text-gray-600">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            clsx(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div> */}

              <div className="mt-10 flex">
                <button
                    type="submit"
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                  Agregar al carrito
                </button>

                {/* <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                  <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Add to favorites</span>
                </button> */}
              </div>
            </form>

          </div>
        </div>

      </div>
    </main>
  )
}
