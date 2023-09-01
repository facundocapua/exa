import { createElement } from 'react'
import BrandFilter from './AppliedFilters/BrandFilter'
import PriceFilter from './AppliedFilters/PriceFilter'
import GenericFilter from './AppliedFilters/GenericFilter'
import CategoryFilter from './AppliedFilters/CategoryFilter'
import { generateUrl, removeSearchParamValue } from 'ui/server'

const ATTRIBUTES = {
  category: CategoryFilter,
  brand: BrandFilter,
  price: PriceFilter,
  generic: GenericFilter
} as const

type Props = {
  url: string
  searchParams: Record<string, string>
}

export default function AppliedFilters ({ url, searchParams }: Props) {
  if (!searchParams || Object.keys(searchParams).length === 0) return null

  const filters = Object.entries(searchParams)

  const generateLink = (attribute: string, value: string) => {
    if (attribute === 'price') {
      const { price, ...paramsWithoutPrice } = searchParams
      return generateUrl(url, paramsWithoutPrice)
    }

    const newParams = removeSearchParamValue(searchParams, attribute, value)
    return generateUrl(url, newParams)
  }

  return (
    <section className='pb-4 mb-6 border-b-2 border-b-neutral-200'>
      <header className='flex justify-between items-center'>
        <h3 className='font-semibold text-neutral-700 '>Filtrado por:</h3>
        <a href={url} className='text-xs text-primary-700'>Reiniciar</a>
      </header>

      {filters.map(([key, values]) => (
        createElement(ATTRIBUTES[key as keyof typeof ATTRIBUTES] ?? ATTRIBUTES.generic, { attribute: key, values, generateLink })
      ))}
    </section>
  )
}
