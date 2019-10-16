var webDriver = require('selenium-webdriver');
const BasePage = require('./base_page');
var By = webDriver.By;

class HomePage extends BasePage {
    constructor() {
        super(); 
    }

    FindFrame() {
        return driver.switchTo().frame(this.findByXpath("//iframe[@id='duo_iframe']")).then(function() {
            return driver.findElement(By.css('.positive:nth-child(3)')).click();
        });
    };
}

module.exports = HomePage; // можно создать экземпляр класса и не делать это дальше = new HomePage()