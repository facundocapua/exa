type Props = {
  children: React.JSX.Element | string
}

export default function FeaturedTitle ({ children }: Props) {
  return (
    <h2 className="uppercase text-3xl text-gray-700 font-light text-center pb-8">{children}</h2>
  )
}
