import { ChevronDownIcon, ChevronUpIcon, FunnelIcon } from '@heroicons/react/24/outline'
import type { Brand, Salon } from 'api'
import { useSearchParams } from 'next/navigation'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { useStoresStore } from './useStoresStore'

const getBrands = (stores: Array<Salon>) => {
  const allBrands = {} as Record<Brand['id'], Brand>
  stores.forEach(({ brands }) => {
    if (!brands) return
    brands.forEach((brand) => {
      allBrands[brand.id] = brand
    })
  })

  return Object.values(allBrands).sort((a, b) => a.name.localeCompare(b.name))
}

type Props = {
  stores: Array<Salon>
}
export default function StoresFilters ({ stores }: Props) {
  const storesBrands = getBrands(stores)
  const searchParams = useSearchParams()
  const selected = searchParams.get('b')?.split(',') ?? []
  const [brands, setBrands] = useStoresStore(state => [state.brands, state.setBrands])
  const [showFilters, setShowFilters] = useState<boolean>(() => selected.length > 0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newSelected = brands.includes(value)
      ? brands.filter((slug) => slug !== value)
      : [...brands, value]

    setBrands(newSelected)
    setShowFilters(false)
  }

  return (
    <section className='border-b px-2 py-4'>
      <button onClick={() => setShowFilters(value => !value)} className='flex items-center w-full gap-2'>
        <FunnelIcon className='w-5 h-5 text-neutral-500' />
        {showFilters
          ? (<div className="flex items-center w-full justify-between"><span className='text-sm'>Ocultar filtros</span><ChevronUpIcon className='w-4 h-4 text-black' /></div>)
          : (<div className="flex items-center w-full justify-between"><span className='text-sm'>Mostrar filtros</span><ChevronDownIcon className='w-4 h-4 text-black' /></div>)}
      </button>
      {showFilters
        ? (
          <div className='absolute z-10 bg-white w-full border border-neutral-300 drop-shadow-md lg:contents lg:border-0 left-0 mt-[16px] lg:mt-0 lg:drop-shadow-none px-4 pb-4 lg:p-0 lg:z-auto'>
            <ul className='flex flex-col pt-4 gap-2 lg:gap-0'>
              {storesBrands.map((brand) => (
                <li key={brand.id}>
                  <label className='flex items-center gap-2 text'><input type='checkbox' onChange={handleChange} value={brand.handle} checked={brands.includes(brand.handle)} />{brand.name}</label>
                </li>
              ))}
            </ul>
          </div>
          )
        : ''}
    </section>
  )
}
