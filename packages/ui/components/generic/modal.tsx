'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  open: boolean
}
export const Modal = ({ children, open }: Props) => {
  const router = useRouter()
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialogEl = dialog.current
    if (!dialogEl) return

    if (open) {
      dialogEl.showModal()
      return
    }

    router.back()
  }, [open])

  return (
    <dialog className="inset-0 rounded-lg bg-zinc-50 bg-opacity-90 backdrop:bg-neutral-800 backdrop:bg-opacity-50 w-full md:w-1/3" ref={dialog}>
      <button
        className="close-modal text-primary-800 absolute top-1 right-1"
        onClick={() => {
          router.back()
        }}
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
      <div className="p-4">
        {children}
      </div>
    </dialog>
  )
}
