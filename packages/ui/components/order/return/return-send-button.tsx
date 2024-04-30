import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
  children: ReactNode
}

export const ReturnSendButton = ({ children }: Props) => {
  const { pending } = useFormStatus()

  return (
    <button className={clsx(
      'md:rounded-md bg-primary-600 py-2 px-4 my-8 text-base text-white hover:bg-primary-700 focus:outline-none w-60',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    )}
      type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? 'Cargando...' : children}
    </button>
  )
}

export default ReturnSendButton
