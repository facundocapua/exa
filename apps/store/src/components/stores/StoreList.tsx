import type { Salon } from 'api'
import StoreListItem from './StoreListItem'

type Props = {
  stores: Array<Salon>
  onClick: (store: Salon) => void
}

export default function StoreList ({ stores, onClick }: Props) {
  return (
    <>
      {stores.map((store) => (
        <button key={store.id} onClick={() => onClick(store)} className='w-full hover:bg-neutral-100 border-b border-b-neutral-300 last:border-none py-4 cursor-pointer'>
          <StoreListItem store={store} />
        </button>
      ))}
    </>
  )
}
