import {expect, Locator, Page} from '@playwright/test';
import {user} from "../fixtures/login.data";

export class SignUpPage {
    readonly nameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly termsCheckBox: Locator
    readonly yallaBtn: Locator;
    readonly successMessage: Locator;
    readonly errorMessageName: Locator;
    readonly errorMessageLastName: Locator;
    readonly errorMessageEmail: Locator;
    readonly errorMessagePassword: Locator;
    readonly errorMessageUsrAlrExists: Locator;

    constructor(readonly page: Page) {
        this.nameInput = page.getByRole('textbox', {name: 'Name *', exact: true})
        this.lastNameInput = page.getByRole('textbox', {name: 'Last name *'})
        this.emailInput = page.getByRole('textbox', {name: 'Email *'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password *'})
        this.termsCheckBox = page.locator("label[for='terms-of-use']")
        this.yallaBtn = page.getByRole('button', {name: 'Y’alla!'})
        this.successMessage = page.getByRole('heading', {name: 'You are logged in success'}) //level:2 / *exact: true*
        this.errorMessageName = page.getByText(" Name is required ")
        this.errorMessageLastName = page.getByText(" Last name is required ")
        this.errorMessageEmail = page.getByText("Email is required")
        this.errorMessagePassword = page.getByText("Password is required")
        this.errorMessageUsrAlrExists = page.getByRole('heading', {name: '\"User already exists\"'})
    }
}







