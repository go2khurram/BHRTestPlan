const { expect } = require("@playwright/test");

exports.LoginPage =
class LoginPage {

    constructor (page) 
    {
        this.page = page;
        this.loginLink = "//a[contains(text(), 'Log in')]";
        this.emailInput  = "//*[@id='email']";
        this.passwordInput  = "//*[@id='password']"
        this.loginButton = "//button[@type = 'submit']";
    }

    //Navigate to the BrightHR site and verify the page title
    async gotoBrightHR() 
    {
        
        await this.page.goto("https://sandbox-app.brighthr.com/lite");
        
    }

    //Navigate to Login page
    async navigateToLoginPage()
    {
        
        await this.page.locator(this.loginLink).click();

    }

    // Perform thelogin action
    async performLogin(email,password)
    {
        //await this.page.locator(this.loginLink).click();
        await this.page.waitForSelector(this.emailInput);
        await this.page.locator(this.emailInput).fill(email);

        await this.page.waitForSelector(this.passwordInput);
        await this.page.locator(this.passwordInput).fill(password);

        await this.page.waitForSelector(this.loginButton);
        await this.page.locator(this.loginButton).click();
        
    }
}