'use strict';
const assert = require("assert");
const LorryPage = require('lorry-po');
const Actions = require('common-actions');
const { Console } = require("console");

describe("Login Test", () => {
  it("Verify Title", async () => {
    await browser.url(
      "/"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    // await assert.strictEqual(
    //   title,
    //   "Test Tech"
    // );
  });

  it("Verify login with valid credentails", async () => {
 
    await LorryPage.login("testauto@yopmail.com","test");
    //await LorryPage.openLHM();
    await LorryPage.openMenu("Shipper");
  
    await browser.pause(10000)

    let home = $("//*[@class='icon']/following-sibling::span[text()='Home']");

    let inq = $(".icon + span:first-of-type")[6];

    // await browser.executeScript("document.querySelectorAll('.icon + span:first-of-type').item(6).click()");
    // await browser.executeScript("document.querySelector('[href='#/inquiry/add']').click()");
    await console.log("Test")
  });
});
