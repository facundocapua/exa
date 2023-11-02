'use client'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { Fragment } from 'react'

type Props = {
  images: Array<string>
}
export default function Portfolio ({ images }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const image = searchParams.get('image') ?? ''

  const setImage = (image: number | null) => {
    const params = new URLSearchParams(searchParams)
    if (image === null) {
      params.delete('image')
    } else {
      params.set('image', String(image))
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <section className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <div key={image} className='relative h-[350px]' onClick={() => setImage(index)}>
            <Image src={image} alt="" className='object-cover  rounded-lg' fill />
          </div>
        ))}
      </section>

      <Transition appear show={image !== ''} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setImage(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="relative">
                    {image !== '' && (<Image src={images[image]} width={1500} height={1000} alt="image" />)}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
