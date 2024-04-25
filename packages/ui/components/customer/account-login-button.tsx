import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const AccountLoginButton = () => {
  return (
    <Link href="/login" aria-label="Mi cuenta">
      <UserIcon className='relative flex h-8 w-8 text-neutral-700 transition-colors dark:text-white' />
    </Link>
  )
}

export default AccountLoginButton
