
import { Given, When, Then } from '@cucumber/cucumber'
import App from '../pageobjects/form.page'

Given(/^I am on the practice page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Then(/^I Validate page header \"([^\"]*)\"$/, async function (headertext: string) {
    expect(await App.header).toHaveText(headertext);
});

When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname: string, lname: string) {
    await (await App.firstname).setValue(fname)
    await (await App.lastname).setValue(lname)
});

When(/^I select gender (.+) years (.+) favourite chai (.+) and reason (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {

    await App.radiobutton(await App.gender_ratio, gender)
    await(await App.experience).click()
    await (await App.favourite).click()
    await (await App.case).click()

});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {

    await (await App.continent_dropdown).selectByVisibleText(continent)
    await (await App.commands).selectByVisibleText(command)
    await browser.pause(3000);

});

When(/^I click on sumbit button$/, async function () {
    await (await App.submit_btn).click()
});