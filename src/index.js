import puppeteer from "puppeteer"
import fs from "fs/promises"
import cron from "node-cron"

async function start() {
  const browser = await puppeteer.launch( {headless: true})
  const page = await browser.newPage()
  await page.goto("https://learnwebcode.github.io/practice-requests/")

  // Screenshots
  // 1.
  // await page.screenshot({path: "cat.png"})
  // 2.
  // await page.goto("https://en.wikipedia.org/wiki/JavaScript")
  // await page.screenshot({path: "long.png", fullPage: true})

  // Writing an array to a txt
  // const arr = ["new", "line", "array"]
  // await fs.writeFile("file.txt", arr.join("\r\n"))

  // SCRAPING TEXT FROM HTML
  const catNames = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".info strong")).map((x) => x.textContent)
  })
  await fs.writeFile("../assets/catNames.txt", catNames.join("\r\n"))

  // SAVE IMAGES TO HARD DRIVE
  const photos = await page.$$eval("img", imgs => {
    return imgs.map(x => x.src)
  })

  // use `for of` instead of `for each` the former supports `await` and the latter does NOT
  for (const photo of photos) {
    const imagePage = await page.goto(photo)
    await fs.writeFile("../assets/" + photo.split("/").pop(), await imagePage.buffer())
  }

  // CLICK BUTTON AND REVEAL CONTENT
  await page.goto("https://learnwebcode.github.io/practice-requests/")
  await page.click("#clickme")  // "#" for id
  const buttonContent = await page.$eval("#data", elm => elm.textContent)

  // FILLING OUT A FROM
  await page.type("#ourfield", "blue")
  await page.click("#ourform button")
  await page.waitForNavigation()

  // If two separate awaits above do NOT work, try:
  // await Promise.all([page.click("#ourform button"), page.waitForNavigation()])

  const info = await page.evaluate(() => {
    return document.querySelector("#message").textContent
  })
  const infoV2 = await page.$eval("#message", msg => msg.textContent)

  console.log(info)
  console.log(infoV2)
  await page.click('a[href="/login"]')
  // do NOT forget to close the browser.
  await browser.close()
}

// start()
// setInterval(start, 5000)
cron.schedule("*/5 * * * * *", start) // Google cron job or cron tab



