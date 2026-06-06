import { test } from '@playwright/test';

test('Bài thực hành 2', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Bài học 2: Product page', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();

    });
    await test.step('hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau: Sản phẩm 1: 2 sản phẩm, Sản phẩm 2: 3 sản phẩm, Sản phẩm 3: 1 sản phẩm', async () => {
        await page.locator('//button[@data-product-id="1"]').click();
        await page.locator('//button[@data-product-id="1"]').click();
        await page.locator('//button[@data-product-id="2"]').click();
        await page.locator('//button[@data-product-id="2"]').click();
        await page.locator('//button[@data-product-id="2"]').click();
        await page.locator('//button[@data-product-id="3"]').click();
    });
});