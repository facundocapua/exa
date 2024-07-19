import type { Salon } from 'api'

export const removeSearchParamValue = (searchParams: Record<string, string>, key: string, value: string) => {
  const newSearchParams = structuredClone(searchParams)
  const values = newSearchParams[key]?.split(',') ?? []
  const index = values.findIndex((v) => v === value)
  if (index !== -1) {
    values.splice(index, 1)
  }
  if (values.length) {
    newSearchParams[key] = values.join(',')
  } else {
    delete newSearchParams[key]
  }

  return newSearchParams
}

export const generateUrl = (url: string, searchParams:Record<string, string>) => {
  const params = new URLSearchParams(searchParams)
  return `${url}?${params.toString()}`
}

export const getGoogleSearchLink = (store: Salon) => {
  const search = `${store.address} - ${store.city}, ${store.state}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(search)}`
}
