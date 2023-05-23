import puppeteer from "puppeteer"
import fs from "fs/promises"

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto("http://quotes.toscrape.com/", {
    waitUntil: "load"
  })

  let nextExists = true
  let quotes = []
  while (nextExists) {
    // const curQuotes = await page.$$eval(
    //   ".col-md-8",
    //   (divs) => {
    //     return divs.flatMap((div) => {
    //       return Array.from(div.querySelectorAll("div.quote")).map(els => els.querySelector(".text").innerText )
    //     });
    //   }
    // )
    const curQuotes = await page.$$eval(
      '.col-md-8 div.quote span.text',
      (spans) => {
        return spans.map((span) => span.innerText);
      }
    );

    for (const product of curQuotes) quotes.push(product)

    nextExists = (await page.$("li.next")) !== null
    if (nextExists) {
      // const navBtns = await page.$x('//a[starts-with(@href, "/page/")]');
      await Promise.all([
        page.click("li.next"),
        // navBtns[navBtns.length-1].click(),
        page.waitForNavigation({ waitUntil: "load" })
      ])
    }
    console.log("xx")
  }
  console.log(quotes)
  console.log(quotes.length)

  await browser.close()
})()
