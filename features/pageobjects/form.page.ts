class App {
    get header() { return $("//h1") }
    get firstname() { return $('//input[@name="firstname"]') }
    get lastname() { return $('//input[@name="lastname"]') }
    get gender_ratio() { return $$('//input[@name="sex"]') }
    get experience() { return $$('//input[@name="exp"]') }
    get favourite() { return $$('//input[@type="checkbox"]') }
    get case() { return $$('//input[@name="tool"]')}
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


}


export default new App()






