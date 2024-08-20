import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const SectionTitle = ({ children }: Props) => {
  return (
    <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
      <h1 className="text-4xl font-bold tracking-tight border-neutral-900">
        {children}
      </h1>
    </div>
  )
}

export default SectionTitle
