import { chromium } from "playwright";

export const resortOperationData = async (): Promise<object> => {
  // Setup
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const liftsData: string[] = [];
  const trailsData: string[] = [];
  const terrainData: string[] = [];
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
  liftsData.push(numeratorArray[0], denominatorArray[0]);
  trailsData.push(numeratorArray[1], denominatorArray[1]);
  terrainData.push(numeratorArray[2], denominatorArray[2]);

  //console.log("Lifts open: " + liftsData[0] + liftsData[1]);
  //console.log("Trails open: " + trailsData[0] + trailsData[1]);
  //console.log("Terrain open: " + terrainData[0] + terrainData[1]);

  // Teardown
  await context.close();
  await browser.close();

  return { liftsData, trailsData, terrainData };
};

//await resortOperationData();
//console.log(await resortOperationData());
