import Link from 'next/link'
import LogoImg from './logo-img'

export default function Logo () {
  return (
    <Link href="/" className="focus:outline-none">
      <span className="sr-only">Fernanda Gutierrez</span>
      <LogoImg className='w-[250px]' />
    </Link>
  )
}
