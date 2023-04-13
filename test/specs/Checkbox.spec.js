import CheckboxesPage from "../pageobjects/Checkbox.page.js";

describe ('My Checkbox Page', () => {
    it('should select input', async () => {
        await CheckboxesPage.open();
        await browser.pause(3000);
        await (CheckboxesPage).Checkbox1.click();
        await (CheckboxesPage).Checkbox2.click();
        await browser.pause(3000);
    })
})