import { AccountMenu } from 'ui/components/customer/account/account-menu'

type Props = {
  children: React.ReactNode
}

export default function AccountLayout ({ children }: Props) {
  const brecrumbs = []

  brecrumbs.push({
    name: 'Mi cuenta',
    url: '/account',
    current: true
  })

  return (
    <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-12">
      <div className='flex gap-8'>
        <AccountMenu />
        <div className='w-full'>
          {children}
        </div>
      </div>
    </main>
  )
}
