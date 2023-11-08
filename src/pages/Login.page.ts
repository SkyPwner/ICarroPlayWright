import {expect, Locator, Page} from '@playwright/test';
import {user} from "../fixtures/login.data";

export class LoginPage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly errorMessage: Locator;
    readonly successMessage: Locator;

    constructor(readonly page: Page) {
        this.emailInput = page.getByRole('textbox', {name: 'Email *'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password *'})
        this.signInButton = page.getByRole('button', {name: 'Y’alla!'})
        this.errorMessage = page.getByRole('heading', {name: '"Login or Password incorrect"'})
        this.successMessage = page.getByRole('heading', {level: 1, name: 'Logged in', /*exact: true*/})
    }

    async performLogin(email: string, password: string) {
        await this.page.goto('/login')
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.signInButton.click()
        await this.successMessage.waitFor()
    }
}

