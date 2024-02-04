'use strict';
const assert = require("assert");
const SauceDemo = require('sauce-po');
const Actions = require('common-actions')
const fs = require('fs');

let credentials = JSON.parse(fs.readFileSync('./testData/user_creds.json'))

let loginInfo = JSON.parse(credentials);

let userName = loginInfo["user1"]["username"];
let password = loginInfo["user1"]["password"];


describe("Login Test", async() => {
  await console.log("user1 - username :: " + userName);
    await console.log("user1 - password :: " + password);
  /*xit("Verify Title", async () => {
    await browser.url(
      "/"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    await assert.strictEqual(
      title,
      "Swag Labs"
    );
  });*/

  it("Verify login with valid credentails", async () => {
    await console.log("user1 - username :: " + userName);
    await console.log("user1 - password :: " + password);
   await credentials.forEach( async({username, password}) =>
      {
        await browser.url("/");
        browser.pause(3000)
        await browser.maximizeWindow();
        await SauceDemo.login(username,password);
      });
    
  });

});
