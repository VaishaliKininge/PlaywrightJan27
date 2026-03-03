// run invalid scenarios in loop

//js = .spec.js OR .spec.ts
//page - is called Fixture 
//hooks - beforeEach , afterEach, beforeAll
//browser = chrome
//page  = it represents tab 
import test, { expect } from "playwright/test";

function f1(){
    console.log("Hello function 1")
}
f1();

const allData = [
    {scenario : "Invalid username" , username: "standard_user123" , password: "secret_sauce" , errMsg :"Epic sadface: Username and password do not match any user in this service"},
    {scenario : "Invalid password", username: "standard_user" , password: "secret_sauce123" , errMsg :"Epic sadface: Username and password do not match any user in this service"},
    {scenario : "Username required", username: "" , password: "secret_sauce" , errMsg :"Epic sadface: Username is required"},
    {scenario : "Password required", username: "standard_user" , password: "" , errMsg :"Epic sadface: Password is required"},
]

test.describe('Invalid scenarios', ()=>{

  //runs before each
    test.beforeEach(async({page})=>{
        await  page.goto("https://www.saucedemo.com/");
    })

    for(const data  of allData ) {
    test(`verify user able to login in application ${data.scenario}`, async({page}) => {
             // await page.goto("https://www.saucedemo.com/");
             await page.getByPlaceholder("Username").fill(data.username);
             await page.getByPlaceholder("Password").fill(data.password);
             await page.locator('//*[@id="login-button"]').click();
            // let expectedErrMgs = "Epic sadface: Username and password do not match any user in this service";
            expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(data.errMsg);
            console.log(data.errMsg);
        }); 
    }
});

