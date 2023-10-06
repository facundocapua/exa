import Image from 'next/image'
import Link from 'next/link'

export default function Logo () {
  return (
    <Link href="/">
      <Image src="/logo.png" width={128} height={75} alt="eXa" />
    </Link>
  )
}
