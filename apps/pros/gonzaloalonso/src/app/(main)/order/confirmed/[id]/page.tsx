import { CartItem, Order, enrichLineItems, retrieveOrder } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { OrderCompleted } from 'ui/server'

type Props = {
  params: Promise<{ id: string }>
}

async function getOrder (id: string) {
  const order = await retrieveOrder(id)

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

export default async function OrderConfirmedPage ({ params }: Props) {
  const { id } = await params
  const { order } = await getOrder(id)

  return <OrderCompleted order={order} />
}
