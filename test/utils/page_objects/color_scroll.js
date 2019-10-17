const BasePage = require('./base_page');
const logger = require('../../config/logger.config');

class ColorScroll extends BasePage {
    constructor() {
        super();
        
    }
    async changeColor() {
        let headOfUnit = await this.findByXpath('//div[contains(@class,"InformersContainerView---index---informer")][@data-id][2]');
        logger.info(`"Element for changing color is ${headOfUnit}"`);
        return this.redLineWithJS(headOfUnit);
    }    

    someScroll() {
        return driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    }
}

module.exports = ColorScroll;