
/*
import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { Dashboard } from '../Pages/Dashboard';
import { EmployeesHub } from '../Pages/EmployeesHub';

// Read the login details from the JSON file
const loginData = require('../Data/loginData.json');

// Read the employee data from the JSON file
const employeeData = require('../Data/employees.json');

test.beforeEach('Login' , async({page , context}) =>{
    const login = new LoginPage(page);
    await context.clearCookies();
    const [firstLogin] = loginData;
    const uname = firstLogin.userName;
    const passwrd = firstLogin.passWord;
    

    await page.goto('about:blank'); // Open a blank page to ensure a clean state
   // await page.setViewportSize({ width: 1920, height: 1080 }); // Set viewport size for maximizing

    await login.gotoBrightHR(); 
    await expect(page).toHaveTitle("Lite - BrightHR",{timeout:5000});

    await login.navigateToLoginPage();    
    await expect(page).toHaveTitle("Bright - Login",{timeout:5000});

    await login.performLogin(uname, passwrd);
    //await login.performLogin('go2khurram@hotmail.com','Playwright123');
    
    
})

test('Verify user login and dashboard launch', async({page}) =>{

    const dashboard = new   Dashboard(page);
    //To Verify of Logout link available.
    const isLogoutVisibleHandle  = await page.waitForSelector(dashboard.linkLogout , {state: 'visible'});
    const isLogoutVisible = !!isLogoutVisibleHandle; // Convert ElementHandle to boolean
    await expect(isLogoutVisible).toBe(true);

    //Verify the welcome message
    const welcomeMesasgeText = await page.innerText(dashboard.linkWelcomeMsg);
    await expect(welcomeMesasgeText).toContain("Hi, Khurram");

})

test ('Verify the employees hub', async({page}) =>{
    const dashboard = new Dashboard(page);
    const empHub = new EmployeesHub(page);

   
    await dashboard.navigateEmpHub();
    await expect(page).toHaveTitle("Employee Hub - BrightHR");
    await expect(await empHub.pageHeading).toContain("Employee hub");    

})

test.only("Add Employee" , async ({page}) =>{

    const dashboard = new Dashboard(page);
    const empHub = new EmployeesHub(page);

    await dashboard.navigateEmpHub();
   

    for (const employee of employeeData){
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
        
        //await page.waitForSelector(empHub.lblSuccess);
        //const successMsgHandle = await page.innerText(empHub.lblSuccess);
       const successMsgHandle = await page.waitForSelector(empHub.lblSuccess, { timeout: 30000 });
        //const successMsgText = await page.innerText(empHub.lblSuccess);// Extract text from ElementHandle
        ///const successMsgText = await successMsgHandle.innerText();
        ///console.log("Actual success message text:", successMsgText);
        //Verify the Success message
        ///await expect(successMsgText).toContain("Success! New employee added");

        // Close the popup
        await page.locator(empHub.btnClosePopup).click();
        
        }


    
    // Get all employee profile links
    
    const employeeList = await page.$$eval("(//div[@class='flex flex-col'])/h1", elements => elements.map(element => element.innerText));
    const filteredEmployeeList = employeeList.filter(emp => emp !== 'Khurram Khan');

    console.log(filteredEmployeeList);
    for(const fullName  of filteredEmployeeList)
    {
        //const fullName = `${employee.firstName} ${employee.lastName}`;
        const employeeDataFound = employeeData.some(employee => fullName.includes(`${employee.firstName} ${employee.lastName}`));
        //const fullName = emp;
        if (!filteredEmployeeList.includes(fullName)) {
            console.error(`Employee ${fullName} not found in the list.`);
            expect(employeeList).toContain(fullName);
        }
    }
            

})
*/
