import { LoginPage } from "../e2e/Login";
import { searchChangelog } from "../e2e/SearchLog";
import { test, expect } from "@playwright/test";

test.beforeEach(
  " Verify Admin able to click on new changelog ",
  async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto("/");
    await login.login("divanshu@crownstack.com", "pass1234");
  }
);

test(" Verify admin should able to search changelogs ", async ({ page }) => {
  const search = new searchChangelog(page);
  await search.searchChangelog();
});