import type { Store } from 'api'
import { useEffect, useState } from 'react'

type Props = {
  storeId: Store['id']
  onClick: (id: Store['id']) => void
} & google.maps.MarkerOptions

export default function InfoWindow ({ storeId, onClick, ...options }: Props) {
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>()

  useEffect(() => {
    if (!infoWindow) {
      setInfoWindow(new window.google.maps.InfoWindow({
        content: '',
        disableAutoPan: true
      }))
    }
  }, [infoWindow])

  useEffect(() => {
    if (infoWindow) {
      infoWindow.setOptions(options)
    }
  }, [infoWindow, options])

  return null
}
