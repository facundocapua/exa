import { Logo } from '@/components/layout/logo'
import { Cart, CartWithCheckoutStep, createPaymentSession, setPaymentSession } from 'api'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { MobileOrderSummary } from 'ui'
import { CheckoutForm, OrderSummary } from 'ui/server'

const getCheckoutStep = (
  cart: Omit<Cart, 'beforeInsert' | 'beforeUpdate' | 'afterUpdateOrLoad'>
) => {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return 'address'
  } else if (cart?.shipping_methods.length === 0) {
    return 'delivery'
  }

  return 'payment'
}

export default async function CheckoutPage () {
  const c = await cookies()
  const cartId = c.get('cart')?.value
  if (!cartId) return redirect('/')

  const cart = (await createPaymentSession(cartId).then(cart => cart)) as CartWithCheckoutStep
  if (!cart) return redirect('/')

  if (cart?.payment_sessions?.length === 1 && cart?.payment_sessions[0]) {
    const providerId = cart?.payment_sessions[0].provider_id
    await setPaymentSession(cartId, providerId)
    // revalidateTag('cart')
  }

  cart.checkout_step = getCheckoutStep(cart)

  return (
    <main className="lg:flex lg:min-h-screen lg:flex-row-reverse lg:overflow-hidden lg:max-w-7xl lg:mx-auto pt-4">
      <div className="px-4 pb-6 sm:px-6 lg:hidden">
        <div className="mx-auto flex max-w-lg">
          <Logo />
        </div>
      </div>

      <h1 className="sr-only">Checkout</h1>
      <MobileOrderSummary cart={cart} />
      <OrderSummary cart={cart} />

      <section className="flex-auto overflow-y-auto px-4 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0">
        <div className="w-full md:pr-12">
          <div className="hidden pb-12 lg:flex">
            <Logo />
          </div>

          <CheckoutForm cart={cart} />
        </div>
      </section>
    </main>
  )
}
