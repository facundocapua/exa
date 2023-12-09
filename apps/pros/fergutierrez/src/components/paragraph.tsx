import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Paragraph ({ children }: Props) {
  return (
    <p className="break-words text-gray-600 mb-4 font-extralight text-lg">{children}</p>
  )
}
