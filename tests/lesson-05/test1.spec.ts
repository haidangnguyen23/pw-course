import { test } from '@playwright/test';

test('Bài thực hành 1', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Bài học 1: Register Page (có đủ các element)', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    });
    await test.step('Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography', async () => {
        await page.locator("//input[@id='username']").fill("Hai Dang");
        await page.locator("//input[@id='email']").pressSequentially('haidangmk1997@gmail.com');
        const maleRadio = page.locator("input[name='gender'][value='male']");
        await maleRadio.check();
        await page.locator("input[name='hobbies'][value='reading']").check();
        await page.locator("input[name='hobbies'][value='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption(
            [
                'technology',
                'science'
            ]);
        const countrySelect = page.locator("#country");
        await countrySelect.selectOption("Australia");
        const dobInput = page.locator("//input[@id='dob']");
        await dobInput.fill("1997-12-23");
        await page.locator("//input[@id='profile']").setInputFiles("c:\\Users\\danghainguyen\\Downloads\\7A562176-86E4-45C5-8DAC-4F47832DBB14.png");
        await page.locator("//textarea[@id='bio']").fill("My name is Nguyen Hai Dang");
        await page.locator("//button[@type='submit']").click();
    });

});



// await page.locator("Register").click();


