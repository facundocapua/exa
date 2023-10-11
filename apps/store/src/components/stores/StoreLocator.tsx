'use client'

import { memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api'
import StoreList from './StoreList'
import type { Store } from 'api'
import StoreListItem from './StoreListItem'
import useStoreLocator from './useStoreLocator'
import StoresFilters from './StoresFilters'

type Props = {
  stores: Array<Store>
}

function StoreLocator ({ stores }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ''
  })

  const {
    currentStore,
    filteredStores,
    handleInput,
    handleSearch,
    handleStoreClick,
    onBoundsChanged,
    onLoad,
    onUnmount,
    resetFilters,
    searchText
  } = useStoreLocator({ stores })

  if (!isLoaded) return null

  return (
    <div className="flex max-w-6xl mx-auto">
      <section className="gap-4 w-full grid grid-cols-[350px_auto]">
        <aside className='border border-neutral-200 max-h-[600px] grid grid-rows-[120px_auto_50px]'>
          <div>
            <form onSubmit={handleSearch} className='flex items-center border-b border-neutral-200 p-4 bg-neutral-100'>
              <div className="w-full px-4 py-2 text-sm bg-white relative">
                <input type="text" className='w-full' placeholder="Buscar salón" list='stores-list' onInput={handleInput} value={searchText} />
                {searchText ? (<button type="button" className='absolute right-0 text-neutral-700 bg-transparent text-xs h-full top-0 px-2' onClick={() => resetFilters()}>X</button>) : null}
              </div>
              <datalist id="stores-list">
                {stores.map((store) => (
                  <option key={store.id} value={`${store.name} - ${store.address}, ${store.city}, ${store.state}`} />
                ))}
              </datalist>
              <button type='submit' className='bg-neutral-800 text-neutral-100 text-sm px-4 py-2 hover:opacity-80'>Buscar</button>
            </form>

            <StoresFilters stores={stores} />
          </div>
          <div className='overflow-y-auto'>
            <StoreList stores={filteredStores} onClick={handleStoreClick} />
            {filteredStores.length === 0
              ? (
                <div className='text-center p-4 text-neutral-500'>
                  No se encontraron salones
                </div>
                )
              : ''}
          </div>
          <button onClick={resetFilters} className='border-t'>Mostrar todo</button>
        </aside>
        <GoogleMap
          mapContainerClassName='h-[600px] flex w-full'
          onLoad={onLoad}
          onUnmount={onUnmount}
          onBoundsChanged={onBoundsChanged}
        >
          <MarkerClusterer>
            {(clusterer) => (
              <div>
                {filteredStores.map((store) => (
                  <Marker
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
                      ? (
                        <InfoWindow onCloseClick={() => handleStoreClick(null)}>
                          <StoreListItem store={store} showWebsite={true} showBrands={true} />
                        </InfoWindow>
                        )
                      : null
                    }
                  </Marker>

                ))}
              </div>
            )}
          </MarkerClusterer>
        </GoogleMap>
      </section>
    </div>
  )
}

export default memo(StoreLocator)
