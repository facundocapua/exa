import { findClosest } from '@/utils/store'
import type { Salon } from 'api'
import type { FormEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useStoresStore } from './useStoresStore'

type Props = {
  stores: Array<Salon>
}

export default function useStoreLocator ({ stores }: Props) {
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [currentStore, setCurrentStore] = useState<Salon | null>()
  const [filteredStores, setFilteredStores] = useState<Salon[]>(stores)
  const [searchText, setSearchText] = useState<string>('')
  const [brands] = useStoresStore(state => [state.brands, state.setBrands])

  useEffect(() => {
    if (!map) return
    let filteredStores = [...stores]

    if (brands.length > 0) {
      filteredStores = stores.filter((store) => {
        return store.brands.some((brand) => brands.includes(brand.handle))
      })
    }

    setFilteredStores(filteredStores)
    const bounds = new window.google.maps.LatLngBounds()
    filteredStores.forEach((store) => {
      bounds.extend({ lat: store.lat, lng: store.lng })
    })
    map?.fitBounds(bounds)
  }, [brands, setFilteredStores, stores, map])

  const onLoad = useCallback(function callback (map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds()
    stores.forEach((store) => {
      bounds.extend({ lat: store.lat, lng: store.lng })
    })
    map?.fitBounds(bounds)
    setMap(map)
  }, [stores])

  const onUnmount = useCallback(function callback () {
    setMap(null)
  }, [])

  const onBoundsChanged = useCallback(function callback () {
    if (!map) return
    const bounds = map?.getBounds()

    const filteredStores = stores.filter((store) => {
      if (!bounds?.contains({ lat: store.lat, lng: store.lng })) return false

      if (brands.length > 0) {
        return store.brands.some((brand) => brands.includes(brand.handle))
      }
      return true
    })
    setFilteredStores(filteredStores)
  }, [map, stores, brands])

  const handleStoreClick = (store: Salon | null) => {
    setCurrentStore(store)
    if (!store) return

    map?.setCenter({ lat: store.lat, lng: store.lng })
    map?.setZoom(15)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!searchText) return

    const exactStore = stores.find((store) => {
      return `${store.name} - ${store.address}, ${store.city}, ${store.state}` === searchText
    })
    if (exactStore) return

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchText}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        const { results } = res
        if (results.length === 0) return
        const { geometry } = results[0]
        const { location } = geometry
        const closest = findClosest(location.lat, location.lng, stores)
        if (closest) {
          handleStoreClick(closest)
        }
      })
  }

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value
    setSearchText(search)
    if (!search) return

    const selectedStore = stores.find((store) => {
      return `${store.name} - ${store.address}, ${store.city}, ${store.state}` === search
    })
    if (selectedStore) {
      setSearchText(search)
      handleStoreClick(selectedStore)
    }
  }

  const resetFilters = () => {
    setSearchText('')
    setCurrentStore(null)
    setFilteredStores(stores)
    const bounds = new window.google.maps.LatLngBounds()
    stores.forEach((store) => {
      bounds.extend({ lat: store.lat, lng: store.lng })
    })
    map?.fitBounds(bounds)
  }

  return {
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
  }
}
