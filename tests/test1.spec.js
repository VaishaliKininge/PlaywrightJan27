

//js = .spec.js OR .spec.ts
//page - is called Fixture 
//hooks - beforeEach , afterEach, beforeAll
import test, { expect } from "playwright/test";

function f1(){
    console.log("Hello function 1")
}
f1();

const allData = [
    {username: "" , password: "" , errMsg :""}
]
//runs before each
test.beforeEach(async()=>{
       await  page.goto("https://www.saucedemo.com/");
})

//browser = chrome
//page  = it represents tab 
test("verify user able to login in application", async({page}) => {
    await  page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator('//*[@id="login-button"]').click();
    await page.selectOption("[class=product_sort_container]",{index : 1});
    //label  - option value 
   // await page.selectOption("[class=product_sort_container]",{lable : "lohi"});

}); 

/* test("verify 2nd test" , async({page})=>{
    await page.goto("");

}); */



test("verify user able to see error message for invalid credentials  ", async({page}) => {
    await  page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("username123");
    await page.getByPlaceholder("Password").fill("password123");
    await page.locator('//*[@id="login-button"]').click();
    let expectedErrMgs = "Epic sadface: Username and password do not match any user in this service";
    let actualErrMsg = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3/button').textContent();
    console.log(actualErrMsg);
    //verify err message
    expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3/button')).toHaveText(expectedErrMgs);
});