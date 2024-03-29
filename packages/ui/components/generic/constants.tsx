import { CreditCardIcon } from '@heroicons/react/24/outline'

export const paymentInfoMap: Record<
string,
{ title: string; icon: React.JSX.Element }
> = {
  stripe: {
    title: 'Credit card',
    icon: <CreditCardIcon className='w-6 h-6' />
  },
  manual: {
    title: 'Test payment',
    icon: <CreditCardIcon className='w-6 h-6' />
  }
// Add more payment providers here
}
