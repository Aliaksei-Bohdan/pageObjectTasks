var expect = require('chai').expect;
const BasePage = require('./base_page');

class DownloadSearchPage extends BasePage {
    constructor() {
        super();
    }

    DownloadPage() {
        return this.findByCss('.iM4Rv').isDisplayed().then(function(isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    }
}

module.exports = DownloadSearchPage;