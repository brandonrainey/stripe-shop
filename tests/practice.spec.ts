import { test, expect } from '@playwright/test';

test('practice test', async ({ page }) => {
    await page.goto('/')

    const header = page.getByRole('heading', { name: 'My Shop'})

    await expect(header).toHaveText('My Shop')
    
})

test('cart is empty on initial click', async ({ page }) => {
    await page.goto('/')

    await page.getByTestId('cart').click()

    const cart = page.getByTestId('cart-container')

    await expect(cart).toHaveCount(0)
})

test('check if deals page has items', async ({ page }) => {
    await page.goto('/')

    await page.getByTestId('deals-link').click()

    const deals = page.getByTestId('deals-list')

    await expect(deals).toBeVisible()
})

test('check if clicking on search item works', async ({ page }) => {
    await page.goto('/')

    await page.getByPlaceholder('Search...').fill('mens cotton jacket')

    await page.getByText('Mens Cotton Jacket').click()

    await expect(page.getByTestId('product-page')).toBeVisible()
})