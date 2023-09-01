import { Cart } from 'ui/server'
import Account from './Account'

export default function UserNav () {
  return (
    <div className="flex items-center gap-2 justify-end">
      <Account />
      <div>
        <Cart />
      </div>
    </div>
  )
}
