class App {
    get header() { return $("//h1") }
    get firstname() { return $('//input[@name="firstname"]') }
    get lastname() { return $('//input[@name="lastname"]') }
    get gender_ratio() { return $$('//input[@name="sex"]') }
    get experience() { return $('//input[@id="exp-4"]') }
    get favourite() { return $('//input[@id="tea3"]') }
    get case() { return $('//input[@id="tool-0"]') }
    get continent_dropdown() { return $('//select [@id="continents"]') }
    get commands() { return $('//select[@id="selenium_commands"]') }
    get submit_btn() { return $('//div[@class="button"]') }

    async radiobutton(element: WebdriverIO.ElementArray, value:string) {
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






