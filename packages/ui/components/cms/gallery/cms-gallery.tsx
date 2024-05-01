'use client'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { Fragment, useCallback, useEffect } from 'react'
import { imagesClasses } from './consts'

type Props = {
  images: Array<string>
}

export const CmsGallery = ({ images }: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const image = searchParams.get('image') ?? ''

  const setImage = useCallback((image: number | null) => {
    const params = new URLSearchParams(searchParams)
    if (image === null) {
      params.delete('image')
    } else {
      params.set('image', String(image))
    }
    replace(`${pathname}?${params.toString()}`)
  }, [pathname, replace, searchParams])

  useEffect(() => {
    const keyDownEvent = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        const newImage = Number(image) - 1
        const prevImage = newImage < 0 ? images.length - 1 : newImage
        setImage(prevImage)
        return
      }
      if (event.key === 'ArrowRight') {
        const nextImage = (Number(image) + 1) % images.length
        setImage(nextImage)
      }
    }

    window.addEventListener('keydown', keyDownEvent)

    return () => window.removeEventListener('keydown', keyDownEvent)
  }, [image, images, setImage])

  return (
    <>
      <div className="grid md:grid-cols-3 md:grid-rows-[350px_350px_350px] gap-4">
        {imagesClasses.map((imageClasses, index) => (
          <div key={index} className={imageClasses}>
            {images[index] && <Image src={images[index]!} alt="" className='object-cover rounded-lg cursor-pointer' fill onClick={() => setImage(index)} />}
          </div>
        ))}
      </div>

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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <div className="relative">
                    {image !== '' ? (<Image src={images[Number(image)]!} width={1500} height={1000} alt="image" />) : ''}
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

export default CmsGallery
