import { chromium } from "playwright";

(async () => {
  // Setup
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx"
  );

  await page.waitForSelector("header img");

  const logoImageLocator = page.locator('header img[alt="Wildcat Mountain"]');

  const logoSrc = await logoImageLocator.getAttribute("src");

  // Teardown
  await context.close();
  await browser.close();
})();
