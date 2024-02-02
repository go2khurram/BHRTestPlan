exports.EmployeesHub =
class EmployeesHub {

    constructor (page) {
        this.page = page;
        this.btnAddEmployee = "//button[contains(text(),'Add employee')]";
        this.txtFname = "//input[@id='firstName']";
        this.txtLname = "//input[@id='lastName']";
        this.txtEmail = "//input[@id='email']";
        this.txtPhone = "//input[@id='phoneNumber']";
        this.startDate = "//span[contains(text(),'Select date')]";
        this.txtJobTitle = "//input[@id='jobTitle']";
        this.year = "//*[@data-e2e='select-year']";
        this.month = "//*[@data-e2e='select-month']";
        this.day = "`//*[@class ='DayPicker-Day-Number'][text()='${day}']`";
        this.dateNavigator = ".sc-fAjcbJ";
        this.dateNext = "(//*[name()='svg'][@class='sc-caSCKo hpHtoP'])[1]";
        this.pageHeading = "//h1[contains(text(),'Employee hub')]";
        this.btnSubmit = "button[type='submit']";
        this.lblSuccess = "//h1[normalize-space()='Success! New employee added']";
        this.btnClosePopup = "//button[@aria-label='Close modal']";
        this.btnAddAnotherEmp = "//button[contains(text(),'Add another employee')]";
        
    }

    async pickdate(year, month, day){

        //Reset the date picker
        while(await this.page.isVisible(this.dateNavigator))
        {
            await this.page.locator(this.dateNavigator).click();
                     
        }
        while(true)
        {
            const currentYear = await this.page.locator(this.year).textContent();
            const currentMonth = await this.page.locator(this.month).textContent();

            if (currentYear == year && currentMonth == month)
            {
                break;
            }

            await this.page.locator(this.dateNext).click();           
        }

        await this.page.click(`//*[@class ='DayPicker-Day-Number'][text()='${day}']`);
    }

     //Navigate to Add Employee page
     async navigateToAddEmpPage()
    {        
        await this.page.locator(this.btnAddEmployee).click();
    }

    async addEmployee(fName,lName,email,phone,startYear,startMonth,startDay,jobTitle)
    {
        try{     
            await this.page.locator(this.txtFname).fill(fName);
            await this.page.locator(this.txtLname).fill(lName);
            await this.page.locator(this.txtEmail).fill(email);
            await this.page.locator(this.txtPhone).scrollIntoViewIfNeeded();
            await this.page.locator(this.txtPhone).fill(phone);
            
            await this.page.locator(this.startDate).scrollIntoViewIfNeeded();
            await this.page.locator(this.startDate).click();

            await this.pickdate(startYear,startMonth,startDay);
            await this.page.locator(this.txtJobTitle).scrollIntoViewIfNeeded();
            await this.page.locator(this.txtJobTitle).fill(jobTitle);
            await this.page.locator(this.btnSubmit).click(); 
        } catch (error) {
            console.error(`Error adding employee: ${error}`);                      
        }
    }
    
    

}