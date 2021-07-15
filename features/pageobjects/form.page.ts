class App {
    get header() { return $("//h1") }
    get firstname() { return $('//input[@name="firstname"]') }
    get lastname() { return $('//input[@name="lastname"]') }
    get gender_ratio() { return $$('//input[@name="sex"]') }
    get experience() { return $$('//input[@name="exp"]') }
    get favourite() { return $$('//input[@type="checkbox"]') }
    get case() { return $$('//input[@name="tool"]') }
    get continent_dropdown() { return $('//select [@id="continents"]') }
    get commands() { return $('//select[@id="selenium_commands"]') }
    get submit_btn() { return $('//div[@class="button"]') }

    async radiobutton(element: WebdriverIO.ElementArray, value: string) {
        for (let i = 0; i < element.length; i++) {
            const elm = await (element[i]).getAttribute('value');
            if (elm == value) {
                await element[i].click()
                break;
            }
        }
    }
    async firstNameAtt(firstname: string) {
        await (await this.firstname).setValue(firstname)
    }
    async lastNameAtt(lastname: string) {
        await (await this.lastname).setValue(lastname)
    }

    async selectGender(gender: string) {
        await this.radiobutton(await this.gender_ratio, gender)

    }

    async selectExperience(years: string) {
        await this.radiobutton(await this.experience, years)
    }

    async selectFavChai(Type: string) {
        await this.radiobutton(await this.favourite, Type)
    }
    async selectReason(reason: string) {
        await this.radiobutton(await this.case, reason)
    }

}


export default new App()






