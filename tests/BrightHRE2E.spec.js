import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { Dashboard } from '../Pages/Dashboard';
import { EmployeesHub } from '../Pages/EmployeesHub';

// Read the login details from the JSON file
const loginData = require('../Data/loginData.json');
// Read the employee data from the JSON file
const employeeData = require('../Data//employees.json');

//This test cover the Login to the Site and basic Validation 
test.beforeEach('Login', async ({ page, context }) => {
    const login = new LoginPage(page);
    await context.clearCookies();
    const [firstLogin] = loginData;
    const uname = firstLogin.userName;
    const passwrd = firstLogin.passWord;

    await page.goto('about:blank');

    await login.gotoBrightHR();
    await expect(page).toHaveTitle('Lite - BrightHR', { timeout: 5000 });
    await login.navigateToLoginPage();
    await expect(page).toHaveTitle('Bright - Login', { timeout: 5000 });
    await login.performLogin(uname, passwrd);
});
//To Verify that Dashboard Launch and Welcome Message appears
test('Verify user login and dashboard launch', async ({ page }) => {
    const dashboard = new Dashboard(page);
    //To Verify of Logout link available.
    const isLogoutVisibleHandle = await page.waitForSelector(dashboard.linkLogout, { state: 'visible' });
    const isLogoutVisible = !!isLogoutVisibleHandle;
    await expect(isLogoutVisible).toBe(true);
    //Verify the welcome message
    const welcomeMessageText = await page.innerText(dashboard.linkWelcomeMsg);
    console.log(welcomeMessageText);
    await expect(welcomeMessageText).toContain('Hi, Khurram');
});
// Verify User able to navigate to the Employee hub
test('Verify the employees hub', async ({ page }) => {
    const dashboard = new Dashboard(page);
    const empHub = new EmployeesHub(page);

    await dashboard.navigateEmpHub();
    await expect(page).toHaveTitle('Employee Hub - BrightHR');
    await expect(await empHub.pageHeading).toContain('Employee hub');
});
// Verify User able to add the Employees from employee.json file
test('Add Employee', async ({ page }) => {
    const dashboard = new Dashboard(page);
    const empHub = new EmployeesHub(page);

    await dashboard.navigateEmpHub();
    //To add all teh employees presented in json file.
    for (const employee of employeeData) {
        await empHub.navigateToAddEmpPage();
        await empHub.addEmployee(
            employee.firstName,
            employee.lastName,
            employee.email,
            employee.phone,
            employee.startYear,
            employee.startMonth,
            employee.startDay,
            employee.jobTitle
        );
        //Verify the Success message  
        const successMsgHandle = await page.waitForSelector(empHub.lblSuccess, { timeout: 30000 });
        const successMsgText = await successMsgHandle.innerText();
        console.log('Actual success message text:', successMsgText);
        await expect(successMsgText).toContain('Success! New employee added');

        await page.locator(empHub.btnClosePopup).click();
    }
    // Compare the list of Emplyees with JSON file
    const employeeList = await page.$$eval("(//div[@class='flex flex-col'])/h1", elements => elements.map(element => element.innerText));
    const filteredEmployeeList = employeeList.filter(emp => emp !== 'Khurram Khan');

    console.log(filteredEmployeeList);
    for (const fullName of filteredEmployeeList) {
        const employeeDataFound = employeeData.some(employee => fullName.includes(`${employee.firstName} ${employee.lastName}`));
        if (!filteredEmployeeList.includes(fullName)) {
            console.error(`Employee ${fullName} not found in the list.`);
            expect(employeeList).toContain(fullName);
        }
    }
});
