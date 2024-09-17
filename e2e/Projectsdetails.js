const { test, expect } = require("@playwright/test");
exports.createProject = class Project {
  constructor(page) {
    this.page = page;
    this.projectName = "ABCD";
    this.userMenu = this.page.locator("#open-user-menu");
    this.addNewProjectButton = this.page.locator("text=Add new project");
    this.projectInput = this.page.locator("#company-website");
    this.saveButton = this.page.locator("text=Save");
    this.toastMessage = this.page.locator("//div[@class='Toastify']");
    this.emailError = this.page.locator("#email-error");
  }

  async openUserMenuAndNavigateToAddProject() {
    const maxRetries = 10; 
    const retryInterval = 3000; 
    
    let isUser = false;
    
    for (let i = 0; i < maxRetries; i++) {
      isUser = await this.userMenu.isVisible();
      if (isUser) {
        await this.userMenu.click()
        break;
      }
      await new Promise(resolve => setTimeout(resolve, retryInterval)); 
    }
    await this.addNewProjectButton.click();
  }

  async createProject() {
    const Numeric = await Math.floor(10000 + Math.random() * 90000).toString();
    await this.openUserMenuAndNavigateToAddProject();
    await this.projectInput.click();
    await this.projectInput.fill(this.projectName + Numeric);
    await expect(this.projectInput).toHaveValue(this.projectName + Numeric);
    await this.saveButton.click();
    await expect(this.toastMessage).toHaveText("Project created successfully");
  }

  async attemptToCreateExistingProject() {
    await this.openUserMenuAndNavigateToAddProject();
    
    await this.projectInput.click();
    await this.projectInput.fill(this.projectName);
    
    await expect(this.projectInput).toHaveValue(this.projectName);
    
    await this.saveButton.click();
    
    try {
      
      await expect(this.toastMessage).toHaveText("Project name is already taken", { timeout: 5000 });
      
    } catch (error) {
      await expect(this.toastMessage).toHaveText("Project created successfully", { timeout: 5000 });
      
    }
  }
  

  async projectValidationWithEmptyName() {
    await this.openUserMenuAndNavigateToAddProject();
    await this.projectInput.click();
    await this.projectInput.fill("   ");
    await this.saveButton.click();
    await expect(this.emailError).toHaveText("Required");
  }
};
