'use client'

import { memo, useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF, MarkerClustererF } from '@react-google-maps/api'
import StoreList from './StoreList'
import type { Store } from 'api'

type Props = {
  stores: Array<Store>
}

function StoreLocator ({ stores }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ''
  })

  // const [map, setMap] = useState<google.maps.Map | null>(null)
  const [center, setCenter] = useState({ lat: -37.3230533, lng: -59.138622 })
  const [zoom, setZoom] = useState(7)
  const [currentStore, setCurrentStore] = useState<Store | null>()

  // const onLoad = useCallback(function callback (map: google.maps.Map) {
  //   setMap(map)
  // }, [])

  // const onUnmount = useCallback(function callback () {
  //   setMap(null)
  // }, [])

  const handleStoreClick = (store: Store) => {
    setCurrentStore(store)
    setCenter({ lat: store.lat, lng: store.lng })
    setZoom(15)
  }

  if (!isLoaded) return null

  return (
    <div className="flex max-w-6xl mx-auto">
      <section className="flex gap-12 w-full">
        <div className="w-[350px]">
          <StoreList stores={stores} onClick={handleStoreClick} />
        </div>
        <GoogleMap
          mapContainerClassName='h-[600px] flex w-full'
          center={center}
          zoom={zoom}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >

          <MarkerClustererF>
            {(clusterer) => (
              <div>
                {stores.map((store) => (
                  <MarkerF
                    key={store.id}
                    position={{ lat: store.lat, lng: store.lng }}
                    onClick={() => handleStoreClick(store)}
                    animation={google.maps.Animation.DROP}
                    icon={{
                      scaledSize: new google.maps.Size(40, 40),
                      url: '/stores/marker.png#custom_marker',
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(20, 40)
                    }}
                    clusterer={clusterer}
                  >
                    {store.id === currentStore?.id
                      ? (<InfoWindowF onCloseClick={() => setCurrentStore(null)}>
                        <> { store.name } </>
                      </InfoWindowF>)
                      : ''}
                  </MarkerF>

                ))}
              </div>
            )}

          </MarkerClustererF>
        </GoogleMap>
      </section>
    </div>
  )
}

export default memo(StoreLocator)
