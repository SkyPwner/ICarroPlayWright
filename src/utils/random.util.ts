import *as generator from "generate-password"
export const generatePassword = () => generator.generate({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: "!",
    strict: true,
    length: 8
})
export const generateEmail = () => {
    var randomEmail = require('random-email');
    randomEmail({ domain: 'gmail.com' });
    return randomEmail()
}
