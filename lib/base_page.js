var webDriver = require('selenium-webdriver');
const logger = require('../config/logger.config');
var driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
var By = webDriver.By;
var until = webDriver.until;

class BasePage {
    constructor() {
        global.driver = driver;
    }
    
    visit(theUrl) {
        return driver.get(theUrl);
    }

    // checkPageTitle(pageTitle) {
    //     return this.getPageTitle().then((title) => {
    //         return title === pageTitle;
    //     });
    // }

    async checkPageTitle(pageTitle) {
        const title = await this.getPageTitle();
        return title === pageTitle;
    }

    getPageTitle() {
        return driver.getTitle();
    }

    findByCss(el) {
        driver.wait(until.elementLocated(By.css(el)),15000);
        return driver.findElement(By.css(el));
    }

    findByXpath(el) {
        driver.wait(until.elementLocated(By.xpath(el)),15000);
        return driver.findElement(By.xpath(el));
    } 
    
    findByLinkText(el) {
        driver.wait(until.elementLocated(By.linkText(el)),15000);
        return driver.findElement(By.linkText(el));
    }

    redLineWithJS(el) {
        var bg;
        return el.getCssValue("color").then(function (col) {
            bg = col;
        }).then(function () {
            return driver.executeScript("arguments[0].style.color = '" + "red" + "'", el)
        }).then(function () {
            return driver.sleep(3000);
        }).then(function () {
            logger.info(`What is background now: ${bg}`);
            logger.log('debug',"test message for debug logger");
            return driver.executeScript("arguments[0].style.color = '" + bg + "'", el);
        }).then(function () {
            return driver.sleep(1000);
        })
    }

    quit() {
        return driver.quit();
    }
}
module.exports = BasePage;
