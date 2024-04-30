import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
  children: ReactNode
  loading?: boolean
}

export default function ContinueButton ({ children, loading }: Props) {
  const { pending } = useFormStatus()

  return (
    <button className={clsx(
      'w-full md:w-60 rounded-md bg-primary-600 py-2 px-4 my-8 text-base text-white hover:bg-primary-700 focus:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    )}
      type="submit" disabled={pending || loading} aria-disabled={pending || loading}>
      {pending || loading ? 'Cargando...' : children}
    </button>
  )
}
