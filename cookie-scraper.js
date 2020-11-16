
const puppeteer = require('puppeteer');

class CookieScraper {
    constructor () {
    }

    async scrape(url) {

        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        await page.goto(url);

        let cookies = await page.cookies();
        let cookiesJSON = JSON.stringify(cookies,null,4);

        let x = cookiesJSON;
     
       return (x); 
      
     
    }
}



module.exports = CookieScraper;