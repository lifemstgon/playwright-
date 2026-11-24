import {test} from '@playwright/test'

test("alert", async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async alert =>{
        await alert.accept();
        const msg = await alert.message();
        console.log(msg);

        const alertType = await alert.type();
        console.log(alertType);
    })
    await page.locator('//button[@id="alertButton"]').click();
    await page.waitForTimeout(3000);
})

test('confim', async({page}) =>{
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async({page}) =>{
        await mobile.accept();
        const alertMessage  = await mobile.message();
        console.log(alertMessage);
        const alertType = await mobile.type();
        console.log(alertType);
    })
    await page.locator('//button[@id="confirmButton"]').click();
    await page.waitForTimeout(3000);
})