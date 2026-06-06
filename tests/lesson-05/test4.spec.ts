import { test } from '@playwright/test';

test('Bài thực hành 4', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Bài học 4: Todo page', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();

    });
    await test.step('Thêm mới 10 note với nội dung sau ở bảng dưới đây.', async () => {
        const notes = [
            ['click', 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'],
            ['fill', 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'],
            ['type', 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'],
            ['hover', 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'],
            ['check', 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'],
            ['uncheck', 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'],
            ['selectOption', 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'],
            ['press', 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'],
            ['dblclick', 'Hàm dblclick dùng để thực hiện double click vào phần tử trên trang web'],
            ['dragAndDrop', 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'],
        ];

        for (const [title, content] of notes) {
            await page.locator("//input[@id='note-title']").fill(title);
            await page.locator("//textarea[@id='note-content']").fill(content);
            await page.locator("//button[@id='add-note']").click();
        }

        await page.locator("//input[@id='search']").fill('web');
    });
});