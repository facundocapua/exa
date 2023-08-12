import UserNav from '../user/UserNav'
import Logo from './Logo'
import SearchBox from './SearchBox'

export default function Header () {
  return (
    <header className="w-full flex justify-between items-center p-4 container mx-auto">
      <div className="w-1/3">
        <SearchBox />
      </div>
      <Logo />
      <div className="w-1/3 text-right">
        <UserNav />
      </div>
    </header>
  )
}
