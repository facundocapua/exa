import Account from './Account'

type Props = {
  cart: React.ReactNode
}

export default function UserNav ({ cart }: Props) {
  return (
    <div className="flex items-center gap-6 justify-end">
      <Account />
      <div className='flex items-center'>
        {cart}
      </div>
    </div>
  )
}
