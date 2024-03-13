import { CartItem as CartItemType } from 'api'
import DeleteItemButton from './DeleteItemButton'
import Image from 'next/image'
import { Price } from '../generic'
import EditItemQuantityButton from './EditItemQuantityButton'

type Props = {
  item: CartItemType
}

export default function CartItem ({ item }: Props) {
  return (
    <div className="relative flex w-full flex-row justify-between px-1 py-4 gap-4">
      <div className="absolute z-40 -mt-2 ml-[55px]">
        <DeleteItemButton item={item} />
      </div>

      <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        {item.variant.metadata?.image
          ? (
            <Image
              className="h-full w-full object-cover"
              width={64}
              height={64}
              alt={item.variant.product.title}
              src={item.variant.metadata.image as string}
            />
            )
          : (
            <Image
                className="h-full w-full object-cover"
                width={64}
                height={64}
                alt={item.variant.product.title}
                src={item.variant.product.thumbnail as string}
              />
            )}

      </div>

      <div className="flex flex-1 flex-col text-base">
        <span className="leading-tight text-sm">
          {item.variant.product.title}
          {item.variant.title && ` - ${item.variant.title}`}
        </span>
      </div>

      <div className="flex h-16 flex-col justify-between">
        <Price
          className="flex justify-end space-y-2 text-right text-sm"
          amount={Number(item.subtotal)}
        />
        {item.original_total !== item.subtotal && (
          <Price
            className="flex justify-end space-y-2 text-right text-sm line-through text-neutral-500 dark:text-neutral-400"
            amount={item.original_total as number}
          />
        )}
        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
          <EditItemQuantityButton item={item} type="minus" />
          <p className="w-6 text-center">
            <span className="w-full text-sm">{item.quantity}</span>
          </p>
          <EditItemQuantityButton item={item} type="plus" />
        </div>
      </div>
    </div>
  )
}
