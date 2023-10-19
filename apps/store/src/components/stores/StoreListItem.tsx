import type { Store } from 'api'
import HoursInfo from './StoreItemList/HoursInfo'
import BrandsList from './StoreItemList/BrandsList'

type Props = {
  store: Store
  showWebsite?: boolean
  showBrands?: boolean
}

export default function StoreListItem ({ store, showWebsite = false, showBrands = false }: Props) {
  return (
    <article className="text-left flex flex-col gap-2 p-2 overflow-x-hidden">
      <h2 className='text-base'>{store.name}</h2>
      <p className='text-sm text-neutral-700'>{store.address} - {store.city}</p>
      <HoursInfo hours={store.hours} />
      {
        showWebsite && store.website
          ? (
            <>
              <hr />
              <a href={store.website} target='_blank' rel='noreferrer' className='text-sm text-neutral-700 hover:text-neutral-800'>{store.website}</a>
            </>
            )
          : null
      }
      {showBrands
        ? (
          <>
            <hr />
            <BrandsList brands={store.brands} />
          </>
          )
        : null }
    </article>
  )
}
