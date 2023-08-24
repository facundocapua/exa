import { getBrand } from './brand'
import { getCategory } from './category'
import type { Brand, Category, Filter, Product } from './types'
import type { FiltersType } from './utils/filters'
import { applyFilters, extractBrandFilter, extractCategoryFilter, extractPriceFilter } from './utils/filters'

export const getProducts = async (): Promise<Array<Product>> => {
  const brandGamma = await getBrand('gama') as Brand
  const brandWella = await getBrand('wella-professional') as Brand
  const parentCategory = await getCategory('coloracion') as Category
  const category = await getCategory('oxidantes-y-decoloracion') as Category

  const data = [
    {
      sku: '1',
      name: 'Afeitadora SH 1527 W&D',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      brand: brandGamma,
      categories: [parentCategory, category],
      slug: 'afeitadora-sh-1527-wet-dry',
      images: [
        '/product/product-1-a.jpg',
        '/product/product-1-b.jpg',
        '/product/product-1-c.jpg',
        '/product/product-1-d.jpg',
        '/product/product-1-e.jpg'
      ],
      salePrice: 25101,
      price: 27890
    },
    {
      sku: '2',
      name: 'Cepillo Secador Modelador Turbo 6 En 1',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'cepillo-secador-modelador-turbo-6-en-1',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-2-a.jpg',
        '/product/product-2-b.jpg'
      ],
      salePrice: 29961,
      price: 33290
    },
    {
      sku: '3',
      name: 'Planchita Starlight IHT Tsubaki 4D Therapy',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'planchita-starlight-iht-tsubaki-4d-therapy',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-3-a.jpg',
        '/product/product-3-b.jpg'
      ],
      salePrice: 35763,
      price: 51090,
      relatedProducts: ['4', '5', '6', '7', '8', '9']
    },
    {
      sku: '4',
      name: 'Secador Diamond Bloom OG',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'secador-diamond-bloom-og',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-4-a.jpg',
        '/product/product-4-b.jpg',
        '/product/product-4-c.jpg'
      ],
      salePrice: 21512,
      price: 26890
    },
    {
      sku: '5',
      name: 'Afeitadora SH 855 Sport',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'afeitadora-sh-855-sport',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-5-a.jpg',
        '/product/product-5-b.jpg',
        '/product/product-5-c.jpg'
      ],
      salePrice: 13941,
      price: 15490
    },
    {
      sku: '6',
      name: 'Corta Barba Race R727',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'corta-barba-race-r727',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-6-a.jpg',
        '/product/product-6-b.jpg',
        '/product/product-6-c.jpg'
      ],
      salePrice: 9261,
      price: 10290
    },
    {
      sku: '7',
      name: 'Shampoo Invigo Brilliance 250',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'shampoo-invigo-brilliance-250',
      brand: brandWella,
      categories: [category],
      images: [
        '/product/product-7-a.jpg'
      ],
      salePrice: 9171,
      price: 10790
    },
    {
      sku: '8',
      name: 'Acondicionador Invigo Nutri-Enrich 200 ML',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'acondicionador-invigo-nutri-enrich-250-ml',
      brand: brandWella,
      categories: [category],
      images: [
        '/product/product-8-a.jpg'
      ],
      salePrice: 10531.50,
      price: 12390
    },
    {
      sku: '9',
      name: 'Shampoo Fusion 250 ML',
      description: `¡Úsala tanto en seco como húmedo!
      <ul>
        <li>Sistema Dual Track</li>
        <li>Cabezales flotantes</li>
        <li>USB</li>
        <li>Cortapatillas desplegable</li>
        <li>BI VOLT</li>
        <li>Nose trimmer</li>
        <li>Base cargadora</li>
        <li>90 min de uso</li>
        <li>Cordless</li>
      </ul>`,
      slug: 'shampoo-fusion-250-ml',
      brand: brandWella,
      categories: [category],
      images: [
        '/product/product-9-a.jpg'
      ],
      salePrice: 12990,
      price: 12990
    }
  ]
  return new Promise((resolve) => {
    resolve(data)
  })
}

export const getFeaturedProducts = async (): Promise<Array<Product>> => {
  const data = await getProducts()

  return new Promise((resolve) => {
    resolve(data)
  })
}

export const getFiltersFromProducts = (products: Array<Product>, exclude: Array<string> = []): Array<Filter> => {
  const filters = []

  if (!exclude.includes('category')) {
    const categoryFilter = extractCategoryFilter(products)
    if (categoryFilter.options.length > 1) {
      filters.push(categoryFilter)
    }
  }

  if (!exclude.includes('brand')) {
    const brandFilter = extractBrandFilter(products)
    if (brandFilter.options.length > 1) {
      filters.push(brandFilter)
    }
  }

  if (!exclude.includes('price')) {
    const priceFilter = extractPriceFilter(products)
    if (priceFilter.options[0].value !== priceFilter.options[1].value) {
      filters.push(priceFilter)
    }
  }

  return filters
}

type GetFilteredProductsType = {
  filters: FiltersType
  restrinctions: FiltersType
  exclude?: Array<string>
}

type GetCategoryProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
  total: number
}

export const getFilteredProducts = async ({ filters, restrinctions, exclude = [] }: GetFilteredProductsType): Promise<GetCategoryProductsResponse> => {
  const products = await getProducts()

  const restrictedData = applyFilters(products, restrinctions)
  const filteredData = applyFilters(restrictedData, filters)

  return new Promise((resolve) => {
    resolve({
      products: filteredData,
      filters: getFiltersFromProducts(restrictedData, exclude),
      total: restrictedData.length
    })
  })
}

export const getProduct = async (slug: string): Promise<Product | undefined> => {
  const products = await getProducts()
  const product = products.find((item) => item.slug === slug)

  return new Promise((resolve) => {
    resolve(product)
  })
}

export const getProductBySku = async (sku: Product['sku']): Promise<Product | undefined> => {
  const products = await getProducts()
  const product = products.find((item) => item.sku === sku)
  return new Promise((resolve) => {
    resolve(product)
  })
}

export const getRelatedProducts = async (sku: Product['sku']): Promise<Array<Product>> => {
  const product = await getProductBySku(sku)
  if (!product) {
    return []
  }

  const products = await getProducts()
  const relatedProducts = products.filter((item) => product.relatedProducts?.includes(item.sku) ?? false)
  return new Promise((resolve) => {
    resolve(relatedProducts)
  })
}
