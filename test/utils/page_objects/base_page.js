var webDriver = require('selenium-webdriver');
const logger = require('../../config/logger.config');
var driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
var By = webDriver.By;
var until = webDriver.until;

class BasePage {
    constructor() {
        global.driver = driver;
    }
    
    visit(theUrl) {
        logger.debug(`Opening "${theUrl}" url`);
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

    async redLineWithJS(el) {
        var bg;
        const col = await el.getCssValue("color")
        bg = col;
        await driver.executeScript("arguments[0].style.color = '" + "red" + "'", el)
        await driver.sleep(3000);
        logger.info(`What is background now: "${bg}"`);
        logger.log('debug',"test message for debug logger");
        await driver.executeScript("arguments[0].style.color = '" + bg + "'", el);
        await driver.sleep(1000);
    }

    quit() {
        return driver.quit();
    }
}
module.exports = BasePage;
