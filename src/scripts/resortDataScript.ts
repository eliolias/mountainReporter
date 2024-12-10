import { chromium } from "playwright";
import fs from "fs";

//import { resorts } from "../assets/resortsData";

export const resortOperationData = async () => {
  // Setup
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const numeratorArray: string[] = [];
  let denominatorArray: string[] = [];

  // Input: a html element's class as string & [optional] a number representing which element if more than one
  // Action: Locates the element and converts the elements text content to string
  // Output: Returns element's text content as string
  const elementToString = async (
    classString: string,
    i?: number
  ): Promise<string | undefined> => {
    try {
      if (i !== null) {
        const number = page.locator(classString).locator(`nth=${i}`);
        await number.waitFor();
        const textContent = await number.textContent();
        return textContent?.toString();
      } else {
        const number = page.locator(classString);
        await number.waitFor();
        const textContent = await number.textContent();
        return textContent?.toString();
      }
    } catch (error) {
      console.error("Failed to return span value: ", error);
    }
  };

  // Fills an array with elements returned by elementToString()
  const fillArray = async (arr: (string | undefined)[], span: string) => {
    for (let i = 0; i < 3; i++) {
      arr.push(await elementToString(span, i));
    }
    return arr;
  };

  await page.goto(
    "https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx"
  );

  // Filling the arrays
  await fillArray(numeratorArray, "span.c118__number1--v1");
  await fillArray(denominatorArray, "span.c118__number2--v1");

  // Cleaning the spaces out of the denominatorArray
  denominatorArray = denominatorArray.map((str) => str.replace(/\s+/g, ""));

  // Sorting data into appropriate arrays for exporting
  const liftData: string = numeratorArray[0].concat(denominatorArray[0]);
  const trailData: string = numeratorArray[1].concat(denominatorArray[1]);
  const terrainData: string = numeratorArray[2].concat(denominatorArray[2]);

  // Writing to JSON for storage
  fs.writeFileSync(
    "src/assets/scrapedResortsData.json",
    JSON.stringify([
      { name: "wildcat", data: { liftData, trailData, terrainData } },
    ])
  );

  // Teardown
  await context.close();
  await browser.close();
};

await resortOperationData();
