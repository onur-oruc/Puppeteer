import puppeteer from "puppeteer"
import fs from "fs/promises"

(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto("https://www.amazon.de/s?k=self+care&sprefix=self%2Caps%2C285&ref=nb_sb_ss_ts-doa-p_1_4", {
    waitUntil: "load"
  })

  let isDisabled = false
  let products = []
  while (!isDisabled) {
    const curProducts = await page.$$eval(
      "div.sg-col-20-of-24.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16",
      (divs) => {
        return divs.map((div) => {
          const descendants = div.querySelector("a.a-link-normal.s-no-outline");
          return descendants.href;
        });
      }
    )
    for (const product of curProducts) products.push(product)

    const isDisabled = (await page.$('span.s-pagination-next.s-pagination-disabled')) !== null
    await page.setDefaultNavigationTimeout(0);
    if (!isDisabled) {
      // const nextPageElement = await page.$x("//a[contains(@class, 's-pagination-next')]");
      await page.waitForSelector(".s-pagination-next", { visible: true });
      await Promise.all([
        //nextPageElement[0].click(),
        page.click(".s-pagination-next"),
        page.waitForNavigation({ waitUntil: "load" })])
    }
  }
  console.log(products)
  console.log(products.length)

  await browser.close()
})()
