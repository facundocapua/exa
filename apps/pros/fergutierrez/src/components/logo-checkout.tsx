import Link from 'next/link'
import LogoImg from './logo-img-alt'

export default function LogoCheckout () {
  return (
    <Link href="/" className="focus:outline-none">
      <span className="sr-only">Fernanda Gutierrez</span>
      <LogoImg className='w-[250px]' />
    </Link>
  )
}
