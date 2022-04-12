const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.atlassian.com/');
  await page.waitFor(2000)

  // Get the "viewport" of the page, as reported by the page.
//   const dimensions = await page.evaluate(() => {
//     return {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight,
//       deviceScaleFactor: window.devicePixelRatio,
//     };
//   });

//   console.log('Dimensions:', dimensions);
  await page.click('a.global-nav--wac__button--primary')
  await page.waitFor(2000)
  await page.click('a.global-nav--wac__button--secondary')
  await page.waitFor(2000)
  await browser.close();
})();