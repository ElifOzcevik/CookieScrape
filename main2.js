const CookieScraper = require('./cookie-scraper.js');

const scraper = new CookieScraper();

 const cookies = scraper.scrape('https://efilli.com/');

 cookies.then(response => console.log(response)).catch(err => {
    console.error('fetch failed', err);
  });



