const BasePage = require('./base_page');
var webDriver = require('selenium-webdriver');

class ColorScroll extends BasePage {
    constructor() {
        super();
        
    }
    changeColor() {
        let headOfUnit = this.findByXpath('//div[contains(@class,"InformersContainerView---index---informer")][@data-id][2]');
        return this.redLineWithJS(headOfUnit);
    }    

    someScroll() {
        return driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    }
}

module.exports = ColorScroll;