import { ChangelogDetail } from "../e2e/ChangelogPage";
import { LoginPage } from "../e2e/Login";
import { validCredentials } from "../e2e/testData/credential";
import { test, expect } from "@playwright/test";

test.beforeEach(
  " Verify Admin able to click on new changelog ",
  async ({ page }) => {
    const login = new LoginPage(page); // 30 seconds
    await page.goto("/");
    await login.login(validCredentials.mail, validCredentials.password);
  }
);

test(" Verify change log Page data ", async ({ page }) => {
  const changelog = new ChangelogDetail(
    page,
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  );
  await changelog.changelogElements();
});

test("Verify user able to Edit changelog ", async ({ page }) => {
  const changelog = new ChangelogDetail(page);
  await changelog.editChangelog();
});

test(" Verify user able to Delete changelog", async ({ page }) => {
  const changelog = new ChangelogDetail(page);
  await changelog.deleteChangelog();
});
