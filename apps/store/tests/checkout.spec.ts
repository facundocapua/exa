import { test, expect } from '@playwright/test'

test('checkout with mercadopago works correctly', async ({ page }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  await page.goto(baseUrl)

  const button = await page.getByLabel('Agregar al carrito', { exact: true })
  await button.first().click()
  const cartButton = await page.getByRole('link', { name: 'COMPRAR' })
  expect(cartButton).toBeVisible()

  await cartButton.click()
  await page.waitForURL('**/checkout')

  // Fill in the shipping address form
  await page.getByLabel('Nombre').fill('Facundo')
  await page.getByLabel('Apellido').fill('Capua')
  await page.getByLabel('Dirección*').fill('Garibaldi 1082')
  await page.getByLabel('Ciudad').fill('Tandil')
  await page.locator('[id="shipping_address\\.province"]').selectOption({ label: 'Buenos Aires' })
  await page.getByLabel('Código postal').fill('7000')

  await page.getByRole('textbox', { name: 'Ingrese un email válido' }).fill('facundocapua@gmail.com')
  await page.getByLabel('Teléfono').fill('1160322854')

  // await page.getByRole('button', { name: 'Continuar con el envio' }).click()

  const saveShippingButton = await page.getByRole('button', { name: 'Continuar con el envio' })
  expect(saveShippingButton).toBeVisible()
  expect(saveShippingButton).toBeEnabled()
  saveShippingButton.click()

  // Select the shipping method
  await page.waitForURL('**/checkout?step=delivery')
  await page.getByRole('radio', { name: 'Envio Standard' }).click()
  const saveShippingMethodButton = await page.getByRole('button', { name: 'Continuar con el pago' })
  saveShippingMethodButton.click()

  // Confirm order
  await page.waitForURL('**/checkout?step=review')
  const mercadoPagoButton = await page.getByLabel('Pagar con Mercado Pago', { exact: true })
  await mercadoPagoButton.click()

  await page.waitForTimeout(5000)
  const title = await page.getByText('eXa Beauty Solutions')
  expect(title).toBeVisible()
  expect(page.url()).toContain('https://www.mercadopago.com.ar/checkout/v1/payment')
})
