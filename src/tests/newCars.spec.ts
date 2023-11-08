import {test, expect} from '@playwright/test';
import {user} from "../fixtures/login.data";
import {LetTheCarWorkPage} from "../pages/LetTheCarWork.page";
import {car} from "../fixtures/car.data";
import {LoginPage} from "../pages/Login.page";

test.beforeEach(async ({ page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.performLogin(user.email, user.password)
});

test.describe('Add car tests', () => {
    test('Adding a new car', async ({page}) => {
        const letTheCarWorkPage = new LetTheCarWorkPage(page)
        await page.goto('let-car-work')
        await letTheCarWorkPage.inputLocation.fill(car.location)
        await letTheCarWorkPage.locationPacItem.first().click()
        await letTheCarWorkPage.inputManufacture.fill(car.manufacture)
        await letTheCarWorkPage.inputModel.fill(car.model)
        await letTheCarWorkPage.inputYear.fill(car.year)
        await letTheCarWorkPage.selectFuel.selectOption(car.fuel)
        await letTheCarWorkPage.inputSeats.fill(car.seats)
        await letTheCarWorkPage.inputClass.fill(car.carClass)
        await letTheCarWorkPage.inputSerialNumber.fill(car.serialNumber)
        await letTheCarWorkPage.inputPrice.fill(car.price)
        await letTheCarWorkPage.textareaAbout.fill(car.about)
        await letTheCarWorkPage.inputPhotos.setInputFiles(car.photo)
        await letTheCarWorkPage.buttonSubmit.click()
        await expect(letTheCarWorkPage.successAddCarMessage).toBeVisible()
    })
});