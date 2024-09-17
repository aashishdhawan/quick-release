const { test, expect } = require("@playwright/test");
exports.changePassword = class changePassword {
  constructor(page) {
    this.page = page;
    this.userMenu = this.page.locator("#open-user-menu");
    this.profileSettingsButton = this.page.locator("#profile-settings");
    this.changePasswordButton = this.page.getByText("Change Password");
    this.oldPasswordInput = this.page.locator("input[name='oldPassword']");
    this.newPasswordInput = this.page.locator("input[name='password']");
    this.confirmPasswordInput = this.page.locator(
      "input[name='confirmPassword']"
    );
    this.saveButton = this.page.getByText("Save");
    this.profileSettingsHeader = this.page.getByText(
      "Change your personal profile settings"
    );
  }

  async navigateToProfileSettings() {
    const maxRetries = 10; 
    const retryInterval = 3000; 
    
    let isUser = false;
    
    for (let i = 0; i < maxRetries; i++) {
      isUser = await this.userMenu.isVisible();
      if (isUser) {
        await this.userMenu.click()
        await this.profileSettingsButton.click()
        break;
      }
      await new Promise(resolve => setTimeout(resolve, retryInterval)); 
    }
    
  }

  async waitForProfileSettings() {
    await this.page.waitForTimeout(5000);
  }

  async verifyProfileSettingsPage() {
    await expect(this.profileSettingsHeader).toBeVisible();
  }

  async clickChangePassword() {
    await this.changePasswordButton.click();
  }

  async fillOldPassword(password) {
    await this.oldPasswordInput.fill(password);
  }

  async fillNewPassword(password) {
    await this.newPasswordInput.fill(password);
  }

  async fillConfirmPassword(password) {
    await this.confirmPasswordInput.fill(password);
  }

  async savePassword() {
    await this.saveButton.click();
  }

  async changePassword(oldPassword, newPassword) {
    await this.navigateToProfileSettings();
    await this.verifyProfileSettingsPage();
    await this.clickChangePassword();
    await this.fillOldPassword(oldPassword);
    await this.fillNewPassword(newPassword);
    await this.fillConfirmPassword(newPassword);
    await this.savePassword();
  }
};
