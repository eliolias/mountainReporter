import { chromium } from "playwright";

(async () => {
  // Setup
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const numeratorArr: string[] = [];
  const denominatorArr: string[] = [];

  await page.goto(
    "https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx"
  );

  const spanValue = async (
    classString: string,
    i: number
  ): Promise<string | undefined> => {
    try {
      const number = page.locator(classString).locator(`nth=${i}`);
      await number.waitFor();
      const textContent = await number.textContent();
      //console.log(textContent);
      return textContent?.toString();
    } catch (error) {
      console.error("Failed to return span value: ", error);
    }
  };

  const fillArr = async (arr: (string | undefined)[], span: string) => {
    for (let i = 0; i < 3; i++) {
      arr.push(await spanValue(span, i));
    }
    return arr;
  };

  await fillArr(numeratorArr, "span.c118__number1--v1");
  await fillArr(denominatorArr, "span.c118__number2--v1");

  const cleanedDenominatorArr = denominatorArr.map((str) =>
    str.replace(/\s+/g, "")
  );

  //console.log(numeratorArr, denominatorArr);
  console.log("Lifts open: " + numeratorArr[0] + cleanedDenominatorArr[0]);
  console.log("Trails open: " + numeratorArr[1] + cleanedDenominatorArr[1]);
  console.log("Terrain open: " + numeratorArr[2] + cleanedDenominatorArr[2]);

  // Teardown
  await context.close();
  await browser.close();
})();
