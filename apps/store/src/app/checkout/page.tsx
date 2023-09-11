import Logo from '@/components/layout/Logo'
import { getCart } from 'api'
import { cookies } from 'next/headers'
import { MobileOrderSummary } from 'ui'
import { CheckoutForm, OrderSummary } from 'ui/server'

export default async function CheckoutPage () {
  const cartRaw = cookies().get('cart')?.value
  const cartInfo = cartRaw ? JSON.parse(cartRaw) : undefined
  let cart

  if (cartInfo) {
    cart = await getCart(cartInfo)
  }

  if (!cart) {
    return null
  }

  return (
    <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden lg:max-w-7xl lg:mx-auto pt-12">
      <div className="px-4 py-6 sm:px-6 lg:hidden">
        <div className="mx-auto flex max-w-lg">
          <Logo />
        </div>
      </div>

      <h1 className="sr-only">Checkout</h1>
      <MobileOrderSummary cart={cart} />
      <OrderSummary cart={cart} />

      <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
        >
        <div className="mx-auto max-w-lg">
          <div className="hidden pb-12 lg:flex">
            <Logo />
          </div>

          <CheckoutForm total={cart.cost.total} />
        </div>
      </section>
    </main>
  )
}
