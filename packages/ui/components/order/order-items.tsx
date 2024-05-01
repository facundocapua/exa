import type { CartItem } from 'api'
import OrderItem from './order-item'
import SkeletonLineItem from './skeleton/skeleton-order-line-item'
import Divider from '../generic/divider'

type Props = {
  items: CartItem[]
}

export default function OrderItems ({ items }: Props) {
  return (
    <>
      <h2 className="flex flex-row text-3xl">
        Resumen
      </h2>
      <div className="flex flex-col">
        <Divider />
        <ul role="list" className="divide-y border-t-neutral-200 dark:border-t-neutral-700">
          {items?.length
            ? items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => {
                return <OrderItem key={item.id} item={item} />
              })
            : Array.from(Array(5).keys()).map((i) => {
              return <SkeletonLineItem key={i} />
            })}
        </ul>
      </div>
    </>
  )
}
