import type { Store } from 'api'
import HoursInfo from './StoreItemList/HoursInfo'

type Props = {
  store: Store
}

export default function StoreListItem ({ store }: Props) {
  return (
    <article className="text-left flex flex-col gap-2 p-2">
      <h2 className='text-base'>{store.name}</h2>
      <p className='text-sm text-neutral-700'>{store.address} - {store.city}</p>
      <HoursInfo hours={store.hours} />
    </article>
  )
}
