import MainNavigationMobile from '../navigation/MainNavigationMobile'
import UserNav from '../user/UserNav'
import Logo from './Logo'
import SearchBox from './SearchBox'

export default function Header () {
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
        <UserNav />
      </div>
    </header>
  )
}
