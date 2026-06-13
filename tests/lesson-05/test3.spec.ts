import { test } from '@playwright/test';

test('Bài thực hành 3', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Bài học 3: Todo page', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();

    });
    await test.step('Thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    page.on('dialog', async dialog => dialog.accept());

    await test.step('Xoá các todo có số lẻ', async () => {
        for (let i = 1; i <= 100; i += 2) {
            // await page.locator(`//li[span[text()="Todo ${i}"]]//button[text()="Delete"]`).click();
            await page.locator(`//button[@id="todo-${i}-delete"]`).click();
        }
    });
});