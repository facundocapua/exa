import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}

export default function Button ({ isLoading, children, ...props }: Props) {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-xs text-white bg-primary-600 hover:bg-primary-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      {isLoading ? 'Cargando...' : children}
    </button>
  )
}
