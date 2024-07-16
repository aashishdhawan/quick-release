import { releaseCategory } from "../e2e/Category";
import { LoginPage } from "../e2e/Login";
import { validCredentials } from "../e2e/testData/credential";
import { test, expect } from "@playwright/test";

test.beforeEach(
  "verify user able to add release tags",
  async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 300000);
    const login = new LoginPage(page);
    await page.goto("/");
    await login.login(validCredentials.mail, validCredentials.password);
  }
);

test("verify user able to Add Category ", async ({ page }) => {
  const releasecategories = new releaseCategory(page);
  await releasecategories.createCategory();
});

test("verify user able to Edit Category", async ({ page }) => {
  const editcategory = new releaseCategory(page);
  await editcategory.editCategory();
});
test("verify user able to Delete category", async ({ page }) => {
  const deletecategory = new releaseCategory(page);
  await deletecategory.deleteCategory();
});
