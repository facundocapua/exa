import { CartItem, Order, enrichLineItems, getCart, retrieveOrder } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { OrderCompleted } from 'ui/server'

type Props = {
  params: { id: string }
}

async function getOrder (id: string) {
  const cart = await getCart(id)
  const orderId = cart?.payment.order_id
  const order = await retrieveOrder(orderId)

  if (!order) {
    return notFound()
  }

  const enrichedItems = await enrichLineItems(order.items, order.region_id)

  return {
    order: {
      ...order,
      items: enrichedItems as CartItem[]
    } as Order
  }
}

export const metadata: Metadata = {
  title: 'Pedido confirmado',
  description: 'Tu compra ha sido exitosa'
}

export default async function MercadoPagoConfirmationPage ({ params }: Props) {
  const { order } = await getOrder(params.id)

  return <OrderCompleted order={order} />
}
