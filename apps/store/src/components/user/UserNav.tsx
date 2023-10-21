import { Cart } from 'ui/server'
import Account from './Account'

export default function UserNav () {
  return (
    <div className="flex items-center gap-6 justify-end">
      <Account />
      <div className='flex items-center'>
        <Cart />
      </div>
    </div>
  )
}
