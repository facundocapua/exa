'use client'
import type { EffectCallback, ReactNode } from 'react'
import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import { createCustomEqual, deepEqual } from 'fast-equals'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'

const deepCompareEqualsForMaps = createCustomEqual({
  createCustomConfig: () => ({
    areObjectsEqual: (a, b) => {
      if (
        isLatLngLiteral(a) ||
        a instanceof google.maps.LatLng ||
        isLatLngLiteral(b) ||
        b instanceof google.maps.LatLng
      ) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
      }

      return deepEqual(a, b)
    }
  })
})

function useDeepCompareMemoize (value: any) {
  const ref = useRef()

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffectForMaps (
  callback: EffectCallback,
  dependencies: any[]
) {
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

type Props = google.maps.MapOptions & {
  className?: string
  children?: ReactNode
}

export default function Map ({ className, children, ...options }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  return (
    <>
      <div className={className} ref={ref} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}
