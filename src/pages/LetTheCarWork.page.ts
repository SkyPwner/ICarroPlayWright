import {expect, Locator, Page} from '@playwright/test';

export class LetTheCarWorkPage {
    readonly inputLocation: Locator;
    readonly locationPacItem: Locator
    readonly inputManufacture: Locator
    readonly inputModel: Locator
    readonly inputYear: Locator
    readonly selectFuel: Locator
    readonly inputSeats: Locator
    readonly inputClass: Locator
    readonly inputSerialNumber: Locator
    readonly inputPrice: Locator
    readonly textareaAbout: Locator
    readonly inputPhotos: Locator
    readonly buttonSubmit: Locator
    readonly successAddCarMessage: Locator

    constructor(readonly page: Page) {
        this.inputLocation = page.getByRole('textbox', {name: 'Enter your address'})
        this.locationPacItem = page.locator('.pac-item')
        this.inputManufacture = page.getByRole('textbox', {name: 'Manufacture*'})
        this.inputModel = page.getByRole('textbox', {name: 'Model *'})
        this.inputYear = page.getByRole('spinbutton', {name: 'Year *'})
        this.selectFuel = page.getByRole('combobox', {name: 'Fuel *'})
        this.inputSeats = page.getByRole('spinbutton', {name: 'Seats *'})
        this.inputClass = page.getByRole('textbox', {name: 'Car class *'})
        this.inputSerialNumber = page.getByRole('textbox', {name: 'Car registration number *'})
        this.inputPrice = page.getByRole('spinbutton', {name: 'Price *'})
        this.textareaAbout = page.getByRole('textbox', {name: 'About (max 500 chars)'})
        this.inputPhotos = page.getByRole('textbox', {name: 'Add photos of your car'})
        this.buttonSubmit = page.getByRole('button', {name: 'Submit'})
        this.successAddCarMessage = page.getByRole('heading', {name: 'Car added'})
    }
}

