import { Breadcrumb } from 'ui/server'
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
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">Mi cuenta</h1>
      </div>

      <div className='flex gap-8'>
        <AccountMenu />
        <div>
          {children}
        </div>
      </div>
    </main>
  )
}
