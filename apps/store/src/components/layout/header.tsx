import MainNavigationMobile from '../navigation/MainNavigationMobile'
import UserNav from '../user/UserNav'
import { Logo } from './logo'
import { SearchBox } from 'ui/components/search-box/search-box'
import { SearchBoxMobile } from 'ui/components/search-box/search-box-mobile'
import styles from './styles.module.css'

type Props = {
  cart: React.ReactNode
  user: React.ReactNode
}

export const Header = ({ cart, user }: Props) => {
  return (
    <header className="w-full grid grid-cols-[1fr_auto_1fr] gap-x-2 justify-between items-center p-4 lg:pb-0 container mx-auto">
      <div>
        <div className='block lg:hidden'>
          <MainNavigationMobile />
        </div>
        <div className='hidden lg:block'>
          <SearchBox />
        </div>
      </div>
      <div className='flex gap-2'>
        <Logo className={styles.logo} />
        <div className='block lg:hidden '>
          <SearchBoxMobile />
        </div>
      </div>
      <div className="text-right">
        <UserNav cart={cart} user={user} />
      </div>
    </header>
  )
}

export default Header
