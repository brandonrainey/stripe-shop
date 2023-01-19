import { test, expect } from '@playwright/test';

test('practice test', async ({ page }) => {
    await page.goto('https://stripe-shop.netlify.app/')

    const header = page.getByRole('heading', { name: 'My Shop'})

    await expect(header).toHaveText('My Shop')
    
})