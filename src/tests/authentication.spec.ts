import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/Login.page';
import {user} from "../fixtures/login.data";
import {faker} from "@faker-js/faker";
import {generateEmail, generatePassword} from "../utils/random.util";
import {SignUpPage} from "../pages/SignUp.page";

test.describe('Login tests', () => {
        test(`positive login`, async ({page}) => {
            const loginPage = new LoginPage(page)
            await page.goto('/login')
            await loginPage.emailInput.fill(user.email)
            await loginPage.passwordInput.fill(user.password)
            await loginPage.signInButton.click()
            await expect(loginPage.successMessage).toBeVisible()
        });
    test('negative login', async ({page}) => {
        const loginPage  = new LoginPage(page)
        await page.goto('/login')
        await loginPage.emailInput.fill("wrongemail@gmail.com")
        await loginPage.passwordInput.fill("12345678Aa")
        await loginPage.signInButton.click()
        await expect(loginPage.errorMessage).toBeVisible()
    })
})
test.describe('Registration tests', () => {
    test('positive registration', async ({page}) => {
        const signUpPage = new SignUpPage(page)
        await page.goto('/registration')
        await signUpPage.nameInput.fill(user.name)
        await signUpPage.lastNameInput.fill(user.lastName)
        await signUpPage.emailInput.fill(generateEmail())
        await signUpPage.passwordInput.fill(generatePassword())
        await signUpPage.termsCheckBox.click()
        await signUpPage.yallaBtn.click()
        await expect(signUpPage.successMessage).toBeVisible()
    })
    test('registration with user already exists', async ({page}) => {
        const signUpPage = new SignUpPage(page)
        await page.goto('/registration')
        await signUpPage.nameInput.fill(user.name)
        await signUpPage.lastNameInput.fill(user.lastName)
        await signUpPage.emailInput.fill('asdqwe@gmail.com')
        await signUpPage.passwordInput.fill(generatePassword())
        await signUpPage.termsCheckBox.click()
        await signUpPage.yallaBtn.click()
        await expect(signUpPage.errorMessageUsrAlrExists).toBeVisible()
    })
})
