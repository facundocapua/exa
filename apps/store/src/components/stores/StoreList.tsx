import { Store } from "api"

type Props = {
  stores: Array<Store>
  setZoom: (zoom: number) => void
  setCenter: (center: google.maps.LatLngLiteral) => void
}

export default function StoreList({stores, setZoom, setCenter}: Props){
  const handleStoreClick = ({ lat, lng }: Store) => {
    setZoom(15)
    setCenter({ lat, lng })
  }

  return (
    <div>
      {stores.map((store) => (
        <article 
          key={store.id} 
          onClick={() => handleStoreClick(store)} 
          className="border-b border-b-neutral-300 my-2 py-2 cursor-pointer"
        >
          <h2>{store.name}</h2>
        </article>
      ))}
    </div>
  )
}