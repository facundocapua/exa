export const validFilters = [
  'category',
  'brand',
  'price',
  'search'
]

export const cleanFilters = (searchParams: Record<string, string>) => {
  const filters = Object.keys(searchParams)
    .filter(key => validFilters.includes(key))
    .reduce((obj, key) => {
      obj[key] = searchParams[key]
      return obj
    }, {} as Record<string, string>)

  return filters
}
