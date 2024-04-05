export const formatPrice = (value: number) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0
  })

  return formatter.format(value)
}

export const formatPriceWithDecimals = (value: number) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 2
  })

  return formatter.format(value)
}
