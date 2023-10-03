import type { Store } from 'api'

type Props = {
  stores: Array<Store>
  onClick: (store: Store) => void
}

export default function StoreList ({ stores, onClick }: Props) {
  return (
    <div>
      {stores.map((store) => (
        <article
          key={store.id}
          onClick={() => onClick(store)}
          className="border-b border-b-neutral-300 my-2 py-2 cursor-pointer"
        >
          <h2>{store.name}</h2>
        </article>
      ))}
    </div>
  )
}
