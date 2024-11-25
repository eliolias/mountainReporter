import playwright from "playwright";

async () => {
  for (const browserType of ["chromium", "firefox", "webkit"]) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(
      "https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx"
    );
  }
};

// export const pullLogo = async () => {
//     for (const browserType of ['chromium', 'firefox', 'webkit']) {
//         const browser = await playwright[browserType].launch();
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto("https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx")
//     }
// }
