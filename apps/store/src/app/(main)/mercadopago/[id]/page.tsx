import { Cart, CartItem, Order, enrichLineItems, getCart, retrieveOrderByCartId } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { OrderCompleted } from 'ui/server'
import { MercadoPagoRedirectPage } from 'ui/components/order/mercadopago/redirect-page'

type Props = {
  params: { id: string }
}

async function getOrder (id: string) {
  const cart = await getCart(id)
  const order = await retrieveOrderByCartId(id)
  const enrichedItems = await enrichLineItems(cart.items, cart.region_id)
  const result: {order?: Order, cart: Cart} = {
    cart: {
      ...cart,
      items: enrichedItems as CartItem[]
    } as Cart
  }

  if (order) {
    result.order = {
      ...order,
      items: enrichedItems as CartItem[]
    } as Order
  }

  return result
}

export const metadata: Metadata = {
  title: 'Pedido confirmado',
  description: 'Tu compra ha sido exitosa'
}

export default async function MercadoPagoConfirmationPage ({ params }: Props) {
  const { order, cart } = await getOrder(params.id)

  if (!order && !cart) {
    return notFound()
  }

  if (!order) {
    // return <CartCompleted cart={cart} />
    return <MercadoPagoRedirectPage paymentSession={cart.payment_session?.data as {url: string}} />
  }

  return <OrderCompleted order={order} />
}
