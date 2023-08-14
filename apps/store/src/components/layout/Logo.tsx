import Link from 'next/link'

export default function Logo () {
  return (
    <Link href="/">
      <h1 className="text-4xl tracking-wider font-logo text-black font-extralight">
        e<span className="font-bold">X</span>a
      </h1>
    </Link>
  )
}
