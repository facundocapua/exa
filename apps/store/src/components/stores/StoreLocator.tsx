'use client'

import { memo, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api'
import StoreList from './StoreList'
import type { Salon } from 'api'
import StoreListItem from './StoreListItem'
import useStoreLocator from './useStoreLocator'
import StoresFilters from './StoresFilters'
import { ListBulletIcon, MapIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = {
  stores: Array<Salon>
}

const TABS = {
  MAP: 'map',
  LIST: 'list'
} as const

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

  const [tab, setTab] = useState<string>(TABS.MAP)

  const handleStoreListItemClick = (store: Salon | null) => {
    handleStoreClick(store)
    setTab(TABS.MAP)
  }

  if (!isLoaded) return null

  return (
    <div className="flex max-w-6xl mx-auto">
      <section className="gap-4 w-full lg:grid lg:grid-cols-[350px_auto]">
        <aside className={clsx({
          'border-neutral-200 lg:max-h-[600px] grid lg:grid-rows-[minmax(120px,auto)_1fr_70px]': true,
          'grid-rows-[minmax(120px,auto)_1fr_70px]': tab === TABS.LIST
        })}>
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
            <div className='grid grid-cols-[1fr_auto] lg:block'>
              <StoresFilters stores={stores} />
              <div className='flex lg:hidden'>
                <button onClick={() => { setTab(TABS.MAP) }} className={clsx({
                  'border-r border-l border-neutral-300 px-4': true,
                  'border-b-2 border-b-neutral-700': tab === TABS.MAP,
                  'border-b': tab !== TABS.MAP
                })}>
                  <MapIcon className='w-7 h-7 text-neutral-700' />
                </button>
                <button onClick={() => { setTab(TABS.LIST) }} className={clsx({
                  'border-r border-neutral-300 px-4': true,
                  'border-b-2 border-b-neutral-700': tab === TABS.LIST,
                  'border-b': tab !== TABS.LIST
                })}>
                  <ListBulletIcon className='w-7 h-7 text-neutral-700'/>
                </button>
              </div>
            </div>
          </div>
          <main className={clsx({
            'overflow-y-auto block lg:block': true,
            hidden: tab !== TABS.LIST
          })}>
            <StoreList stores={filteredStores} onClick={handleStoreListItemClick} />
            {filteredStores.length === 0
              ? (
                <div className='text-center p-4 text-neutral-500'>
                  No se encontraron salones
                </div>
                )
              : ''}
          </main>
          <footer className={clsx({
            'border-t justify-center items-center flex lg:flex': true,
            hidden: tab !== TABS.LIST
          })}>
            <button
              onClick={resetFilters}
              className='rounded-md border border-neutral-300 px-4 py-2 hover:border-neutral-500 disabled:opacity-60 disabled:hover:border-neutral-300'
              disabled={filteredStores.length === stores.length}
            >
              Mostrar todo
            </button>
          </footer>
        </aside>
        <GoogleMap
          mapContainerClassName={clsx({
            'h-[600px] lg:flex w-full': true,
            hidden: tab !== TABS.MAP
          })}
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
                    position={{ lat: store.lat as number, lng: store.lng as number }}
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
