import Image from 'next/image'
import mercadoPagoLogo from './mercadopago.png'

export default function MercadoPagoIcon ({ className }: { className?: string }) {
  return (
    <Image src={mercadoPagoLogo} className={className} alt='Mercado Pago' />
  )
}
