import { test, expect } from '@playwright/test'
import { getConfigForEnv } from './config'

test('home loads correctly', async ({ page }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  const config = getConfigForEnv(baseUrl)
  await page.goto(baseUrl)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(config.title)

  const categoryButton = await page.getByText('Coloración', { exact: true })
  await expect(categoryButton).toBeVisible()

  // Find featured products
  const featuredProducts = await page.getByText('Destacados del mes', { exact: true })
  await expect(featuredProducts).toBeVisible()

  const featuredProductsList = await featuredProducts.locator('..').getByRole('article')
  expect(featuredProductsList).not.toBeNull()
})
