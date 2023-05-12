- You might need to use bright data for a proxy web server. 
  Otherwise, your IP might be banned from the website you are trying to scrape.

### Web Scraping Keywords
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
- Let a div component have `class="col-lg-6 intro-content"`. In that case, use `document.querySelector(".col-lg-6.intro-content")`
- textContent, innerHTML, innerText
- Click href link: `page.click('a[href="/login"]')`
- Add a delay: `page.type("#password", "123", {delay: 100})`
- For `<input type="submit" value="Login" class="btn btn-primary">`, use `page.click('input[value="Login"]')`

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



