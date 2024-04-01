import { CreditCardIcon } from '@heroicons/react/24/outline'
import { MercadoPagoIcon } from '../icons'

export const paymentInfoMap: Record<
string,
{ title: string; icon: React.JSX.Element }
> = {
  mercadopago: {
    title: 'Tarjeta de crédito/débito',
    icon: <MercadoPagoIcon className='max-w-[100px]' />
  },
  manual: {
    title: 'Test payment',
    icon: <CreditCardIcon className='w-6 h-6' />
  }
// Add more payment providers here
}
