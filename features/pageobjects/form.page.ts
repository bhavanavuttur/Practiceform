class App {
    get header() { return $("//h1") }
    get firstname() { return $('//input[@name="firstname"]') }
    get lastname() { return $('//input[@name="lastname"]') }
    get gender() { return $('//input[@id="sex-1"]') }
    get experience() { return $('//input[@id="exp-4"]') }
    get favourite() { return $('//input[@id="tea3"]') }
    get case() { return $('//input[@id="tool-0"]') }
    get continent_dropdown() { return $('//select [@id="continents"]') }
    get commands() { return $('//select[@id="selenium_commands"]') }
    get submit_btn() { return $('//div[@class="button"]') }
}
export default new App()






