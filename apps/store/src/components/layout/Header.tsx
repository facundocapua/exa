import MainNavigationMobile from '../navigation/MainNavigationMobile'
import UserNav from '../user/UserNav'
import Logo from './Logo'
import SearchBox from './SearchBox'

type Props = {
  cart: React.ReactNode
}

export default function Header ({ cart }: Props) {
  return (
    <header className="w-full flex justify-between items-center p-4 lg:pb-0 container mx-auto">
      <div className="w-1/3">
        <div className='block lg:hidden'>
          <MainNavigationMobile />
        </div>
        <div className='hidden lg:block'>
          <SearchBox />
        </div>
      </div>
      <div className='w-1/3'>
        <Logo />
      </div>
      <div className="w-1/3 text-right">
        <UserNav cart={cart} />
      </div>
    </header>
  )
}
