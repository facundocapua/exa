import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return (
    <div className="pt-12 pb-6 mb-6 border-b border-secondary-500">
      <h1 className="text-3xl font-normal font-custom uppercase tracking-tight text-primary-500">
        {children}
      </h1>
    </div>
  )
}

export default Title
