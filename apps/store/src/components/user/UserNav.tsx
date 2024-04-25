
type Props = {
  cart: React.ReactNode
  user: React.ReactNode
}

export default function UserNav ({ cart, user }: Props) {
  return (
    <div className="flex items-center gap-6 justify-end">
      {user}
      <div className='flex items-center'>
        {cart}
      </div>
    </div>
  )
}
