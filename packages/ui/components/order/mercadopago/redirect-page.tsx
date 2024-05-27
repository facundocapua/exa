'use client'
import { useEffect } from 'react'

type Props = {
  paymentSession: {
    url: string
  }
}
export const MercadoPagoRedirectPage = ({ paymentSession }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      if (paymentSession?.url) {
        window.location.href = paymentSession.url
      }
    }, 3000)
  }, [])

  return (
    <div className='flex justify-center items-center my-12'>
      Estás siendo redirigido a Mercado Pago...
    </div>
  )
}

export default MercadoPagoRedirectPage
