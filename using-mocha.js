const HomePage = require('./lib/home_page');
const DownloadSearchPage = require('./lib/download_page');
const SearchMyself = require('./lib/search_myself');
const ColorScroll = require('./lib/color_scroll');

describe('working with telescope', function() {
    this.timeout(50000);
    let homePage, downloadPage;

    before(() => {
        homePage = new HomePage();
        return homePage.visit('https://telescope.epam.com');
    });

    it('Search a main frame and push a message', async () => {
        return await homePage.FindFrame();
    });

    it('should check that Home page is fully loaded', async() => {
        downloadPage = new DownloadSearchPage();
        return await downloadPage.DownloadPage();
    });

    it('should search myself and click to me', async () => {
        searchMyself = new SearchMyself();
        return await searchMyself.SearchClick();
    });

    it('should click to my link', async () => {
        return await searchMyself.clickToMe();
    });

    it('should change color for my head of unit', async () => {
        colorScroll = new ColorScroll();
        await colorScroll.someScroll();
        return await colorScroll.changeColor();
    });

    it('Exit', () => {
        return homePage.quit();
    });
});