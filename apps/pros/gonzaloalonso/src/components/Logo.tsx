import Image from 'next/image'
import Link from 'next/link'

export default async function Logo () {
  return (
    <Link href="/" className='mx-auto'>
      <Image src="/logo2.png" width={150} height={96} alt="Gonzalo Alonso" />
    </Link>
  )
}
