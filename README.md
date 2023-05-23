- You might need to use bright data for a proxy web server. 
  Otherwise, your IP might be banned from the website you are trying to scrape.

### Web Scraping Topics
When performing web scraping, there are various actions you should be aware of to effectively interact with websites and extract the desired data. Here are 20 actions commonly used in web scraping:

1. Sending HTTP requests: You need to send GET or POST requests to retrieve web pages or submit forms.
2. Parsing HTML: Extracting relevant information from the HTML structure of a web page using libraries like BeautifulSoup or lxml.
3. Locating elements: Identifying specific elements on a web page, such as input fields, buttons, or links.
4. Filling out forms: Inputting data into text fields, checkboxes, radio buttons, dropdown menus, etc.
5. Clicking buttons: Simulating button clicks to trigger actions, like submitting a form or loading additional content.
6. Handling cookies: Managing session cookies to maintain a logged-in state or handle website authentication.
7. Handling redirects: Following redirects to reach the final destination of a URL.
8. Extracting text: Retrieving the text content of elements, such as paragraphs, headings, or table cells.
9. Extracting attributes: Getting values of specific HTML attributes, like source URLs of images or links.
10. Navigating through pages: Moving from one page to another within a website, following links or pagination.
11. Capturing screenshots: Taking screenshots of web pages for visual reference or to extract information from images.
12. Handling AJAX requests: Dealing with dynamic content loaded through AJAX, which may require additional requests or techniques like waiting for elements to appear.
13. Scrolling: Simulating scrolling actions to load more content dynamically loaded as the user scrolls down.
14. Handling timeouts and delays: Implementing timeouts and delays to ensure web pages fully load before interacting with them.
15. Handling errors: Managing various errors, such as connection errors, timeouts, or element not found errors.
16. Handling JavaScript: Dealing with websites that heavily rely on JavaScript by using tools like Selenium or headless browsers.
17. Handling user sessions: Managing user sessions, such as logging in, staying logged in, or logging out.
18. Handling CAPTCHAs: Handling CAPTCHA challenges that websites use to prevent automated access.
19. IP rotation: Rotating IP addresses or using proxies to bypass rate limiting or scraping restrictions.
20. Data storage: Storing the scraped data in a suitable format, such as CSV, JSON, or a database.

Keep in mind that while web scraping, you should always respect website terms of service, robots.txt files, and be mindful of the legal and ethical considerations of web scraping.

### Puppeteer Notes
- `$$eval()` for every instance of the css selector - like for all photos -.
`$eval()` for the first single instance.

- "." for class, "#" for id of the element
  - `await page.$('button[id="69"].a-disabled.btn')` equals to `await page.$('button#69.a-disabled.btn')`;
  - Let a div component have `class="col-lg-6 intro-content"`. In that case, use `document.querySelector(".col-lg-6.intro-content")`

- textContent, innerHTML, innerText
- Click href link: `page.click('a[href="/login"]')`
- Add a delay: `page.type("#password", "123", {delay: 100})`
- For `<input type="submit" value="Login" class="btn btn-primary">`, use `page.click('input[value="Login"]')`
- `waitUntil: "load"` vs `await page.waitForNavigation()`:
  - `await page.waitForNavigation()`:
    - Use this method when you want to wait for any navigation event, such as clicks, form submissions, or redirects, to complete before proceeding with the script.
    - It is not limited to a specific navigation method like page.goto(), but can be used after any action that triggers a page navigation.
    - By default, `waitForNavigation()` waits for both the "load" event (entire page loaded) and the "networkidle0" event (no more than 0 network connections for at least 500 milliseconds).
  - `waitUntil: "load"` in `await page.goto()`:
    - This is an option specific to the page.goto() method, and it defines the condition to wait for before considering the navigation complete.
    - When using `waitUntil: "load"`, page.goto() waits for the load event, which indicates that the entire document, including its dependencies like stylesheets and images, has finished loading.
    - This option is useful when you specifically want to wait for the page to be fully loaded before proceeding with the script.
- "starts with" `(^=)` operator:
  - `await page.$('a[href^="/-/en/s?k=self+care&page="]')`;
- Here's how `page.$()` works:
  - It takes a CSS selector as its argument.
  - It searches for the first element on the page that matches the CSS selector.
  - It returns a Promise that resolves to the matching element or null if no element is found.
- `page.$()` vs `page.$x()`:
  - `page.$(selector)` selects and returns only the first element that matches the CSS selector.
  - `page.$x(expression)` selects and returns all elements that match the XPath expression as an array.

- With Puppeteer's $x() function, you can leverage XPath expressions to select elements based on various criteria such as element names, attributes, text content, element hierarchy, and more. XPath expressions can be used to select single or multiple elements based on the provided criteria.
  - `const elements = await page.$x("//div[contains(@class, 'my-class')]")`: In this example, the XPath expression //div[contains(@class, 'my-class')] is used to select all <div> elements that have the class attribute containing the value "my-class". The resulting array elements will contain the matching <div> elements.
    - `<div class="my-class">Content 1</div>`
    - `<div class="my-class another-class">Content 2</div>`
    - `<div class="another-class my-class">Content 3</div>`
    - `<div class="some-class">Content 4</div>`
  - `const nextPageElement = await page.$x("//a[contains(text(), 'Next')]")`;
  - `const nextPageElement = await page.$x("//a[contains(@class, 's-pagination-next') and contains(text(), 'Next')]")`;
  - `const element = await page.$x("//a[contains(@aria-label, 'Go to next page')]");`. Here is an example element: `<a href="www.google.com" aria-label="Go to next page, page 3"></a>`
  - `page.$x()` function with an XPath expression to select the `<a>` element that contains the text "Next". The contains() function is used to match any element that has the text "Next" within it.
- `await page.waitForSelector("li.a-last", { visible: true });`



  
### Playgrounds
- http://quotes.toscrape.com/
- 

#### Useful Node Libraries
- sharp - Image Processing

#### Node Notes
- `for each` does not support `await` but `for of` does.
- Promise.all()
- Array.from()
- arr.reduce()


#### References
- [Puppeteer docs](https://pptr.dev/)
- [Puppeteer examples](https://github.com/puppeteer/examples)

### Markdown Cheatsheet
[Markdown cheatsheet](https://wordpress.com/support/markdown-quick-reference/ "Markdown Reference").
> Quotation
> `This is code`



`This is code`
```
Code block
```

```css
#button {
 border: none;
}
```



