import { getBrand } from './brand'
import { getCategory } from './category'
import type { Brand, Category, Filter, Product } from './types'
import { extractBrandFilter, extractPriceFilter } from './utils/filters'

export const getProducts = async (): Promise<Array<Product>> => {
  const brandGamma = await getBrand('gama-italy') as Brand
  const brandWella = await getBrand('wella-professional') as Brand
  const category = await getCategory('oxidantes-y-decoloracion') as Category

  const data = [
    {
      id: '1',
      name: 'Afeitadora SH 1527 W&D',
      brand: brandGamma,
      categories: [category],
      slug: 'afeitadora-sh-1527-wet-dry',
      images: [
        '/product/product-1-a.jpg',
        '/product/product-1-b.jpg',
        '/product/product-1-c.jpg',
        '/product/product-1-d.jpg',
        '/product/product-1-e.jpg'
      ],
      price: 27890,
      salePrice: 25101
    },
    {
      id: '2',
      name: 'Cepillo Secador Modelador Turbo 6 En 1',
      slug: 'cepillo-secador-modelador-turbo-6-en-1',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-2-a.jpg',
        '/product/product-2-b.jpg'
      ],
      price: 29961,
      salePrice: 33290
    },
    {
      id: '3',
      name: 'Planchita Starlight IHT Tsubaki 4D Therapy',
      slug: 'planchita-starlight-iht-tsubaki-4d-therapy',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-3-a.jpg',
        '/product/product-3-b.jpg'
      ],
      price: 35763,
      salePrice: 51090
    },
    {
      id: '4',
      name: 'Secador Diamond Bloom OG',
      slug: 'secador-diamond-bloom-og',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-4-a.jpg',
        '/product/product-4-b.jpg',
        '/product/product-4-c.jpg'
      ],
      price: 21512,
      salePrice: 26890
    },
    {
      id: '5',
      name: 'Afeitadora SH 855 Sport',
      slug: 'afeitadora-sh-855-sport',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-5-a.jpg',
        '/product/product-5-b.jpg',
        '/product/product-5-c.jpg'
      ],
      price: 13941,
      salePrice: 15490
    },
    {
      id: '6',
      name: 'Corta Barba Race R727',
      slug: 'corta-barba-race-r727',
      brand: brandGamma,
      categories: [category],
      images: [
        '/product/product-6-a.jpg',
        '/product/product-6-b.jpg',
        '/product/product-6-c.jpg'
      ],
      price: 9261,
      salePrice: 10290
    },
    {
      id: '7',
      name: 'Shampoo Invigo Brilliance 250',
      slug: 'shampoo-invigo-brilliance-250',
      brand: brandWella,
      categories: [category],
      images: [
        '/product/product-7-a.jpg'
      ],
      price: 9171,
      salePrice: 10790
    },
    {
      id: '8',
      name: 'Acondicionador Invigo Nutri-Enrich 200 ML',
      slug: 'acondicionador-invigo-nutri-enrich-250-ml',
      brand: brandWella,
      categories: [category],
      images: [
        '/product/product-8-a.jpg'
      ],
      price: 10531.50,
      salePrice: 12390
    },
    {
      id: '9',
      name: 'Shampoo Fusion 250 ML',
      slug: 'shampoo-fusion-250-ml',
      brand: brandWella,
      categories: [category],
      images: [
        '/product/product-9-a.jpg'
      ],
      price: 12990,
      salePrice: 12990
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

export const getFiltersFromProducts = (products: Array<Product>): Array<Filter> => {
  const brandsFilter = extractBrandFilter(products)
  const priceFilter = extractPriceFilter(products)

  return [brandsFilter, priceFilter]
}

type GetFilteredProductsType = {
  category?: string
}

type GetCategoryProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
}

export const getFilteredProducts = async (appliedFilters: GetFilteredProductsType): Promise<GetCategoryProductsResponse> => {
  const products = await getProducts()

  const { category: categorySlug } = appliedFilters

  const data = products.filter((product) => {
    return product.categories.some((category) => category.slug === categorySlug || categorySlug === undefined)
  })

  return new Promise((resolve) => {
    resolve({
      products: data,
      filters: getFiltersFromProducts(data)
    })
  })
}
