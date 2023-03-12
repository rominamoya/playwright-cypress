import { test, expect } from "@playwright/test";
test("Multi-tabs", async ({ page, context }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const newtab = await context.newPage();
  await newtab.goto("https://example.cypress.io/");
  await page.bringToFront();
  await newtab.getByRole("link", { name: "queryings" }).click();
});
