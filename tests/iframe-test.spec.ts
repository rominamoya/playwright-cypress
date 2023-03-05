import { test, expect } from "@playwright/test";

test("frames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");
  const frame1 = page.frameLocator("#mce_0_ifr").locator("html");
  await frame1.click();
  await frame1.type("Welcome to playwright");
  await page.pause();
});
