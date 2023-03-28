const { Given, When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/loginPage')

const loginPage = new LoginPage()

Given('I visit the Sauce Demo website login page', async function() {
    await loginPage.navigateToLoginPage()
})


When('I enter valid login credentials', async function() {
    await loginPage.submitLoginForm()
})

Then('I should see the home page', async function() {
    await loginPage.assertUserIsLoggedIn()
})

When(/^I enter "([^"]*)" and "([^"]*)"$/, async function() {
    await loginPage.submitLoginForm()
})