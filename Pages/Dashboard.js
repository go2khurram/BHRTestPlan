exports.Dashboard =

class Dashboard {
    
    constructor (page) {
        this.page = page;
        this.lnkEmployee = "//a[@href='/employee-hub']";
        this.linkWelcomeMsg = "//h3[@class='mb-0 text-2xl font-bold']"
        this.linkLogout = "//span [contains(text(), 'Logout')]";

    }

    //Navigate to Employees hub

    async navigateEmpHub() {
        await this.page.locator(this.lnkEmployee).click();
    }

}