import * as path from 'path'
import * as csv from 'fast-csv'

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  if (secret !== 'secret') return Response.json({ success: false })

  let rowCount = 0
  // const client = initClient()

  await csv.parseFile(path.resolve('import', 'wcp-variants.csv'), { delimiter: ';', skipLines: 1 })
    .on('error', error => console.error(error))
    .on('data', async (row) => {
      rowCount++
      const [sku, vendorSku,,,,, description, image] = row
      const variant = {
        sku,
        product: '1bcc8afb-26dc-4bcb-b450-ddfb75493b46',
        sort: rowCount * 10,
        vendor_code: vendorSku,
        is_active: true,
        stock: 100,
        color: {
          label: description,
          image
        }
      }
      // const { data } = await client
      //   .from('products_variants')
      //   .insert(variant)
      //   .select()

      // if (!data) return

      // const variantImage = {
      //   variant: data[0].id,
      //   image
      // }

      // await client
      //   .from('products_variants_images')
      //   .insert(variantImage)
    })
    .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`))

  return Response.json({ success: true })
}
