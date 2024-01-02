'use strict';
const assert = require("assert");
const LorryPage = require('lorry-po');
const Actions = require('common-actions');
const { Console } = require("console");

describe("Login Test", async() => {
  it("Verify Title", async () => {
    await browser.url(
      "/"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    await LorryPage.login("test1@trukker.com","trukker@123");
    await browser.pause(5000)
    await LorryPage.openMenu("Inquiries");
    await LorryPage.openSubMenu("Create Inquiry");
    await browser.pause(5000)
    //await LorryPage.openTruckList();
    //await browser.pause(10000)
    // await LorryPage.openTrucksList("Trucks");
    // await LorryPage.openTrucksListItem("Tons");
    // await $('#truckType').scrollIntoView({block:'center'});
    
    // await $("#truckType").click();
    // await $("//*[text()='Flatbed - 2 Axle']").click();
   // await $("//label[text()='Pricing Unit']/../following-sibling::div/descendant::span[@class='ant-select-selection-search']/input").click();
    await Actions.clickForElementIntercept("//label[@title='Pricing Unit']/../../descendant::span[@title='Trucks']");
    await browser.pause(1000);
    await browser.keys('Enter');

    await browser.pause(1000);
    await Actions.clickForElementIntercept("//div[@class='ant-select-item-option-content' and text()='Tons']");

    await $('#inquiryReceivedDateTime').scrollIntoView({block:'center'});
    await Actions.clickForElementIntercept("#inquiryReceivedDateTime");
    await browser.pause(2000);

    // await Actions.clickForElementIntercept("//button[text()='Dec']/following-sibling::button[text()='2023']/ancestor::div[@class='ant-picker-header']/following-sibling::div/table/tbody/tr/td[not(contains(@class,'disabled'))]/div[text()='1']");
    // await browser.pause(3000);
    // await Actions.clickForElementIntercept("//span[text()='OK']");
    await LorryPage.selectDate("Dec","2023", "28");
    await browser.pause(1000);
    await Actions.clickForElementIntercept("//label[@title='Inquiry Source']/../following-sibling::div/div/div/div/div/span[text()='Please Select']");
    await browser.pause(1000);
    await browser.keys('Enter');
    await browser.pause(1000);
    await Actions.clickForElementIntercept("//div[@title='Email']");
    await browser.pause(1000);

    await $('(//table)[1]').scrollIntoView({block:'center'});
    await Actions.clickForElementIntercept("//*[text()='Move Date']/ancestor::table/tbody/tr/td/descendant::span[1]/descendant::div[contains(@class,'picker-input')]");
    await browser.pause(1000);

    await Actions.clickForElementIntercept("//button[text()='Dec']/following-sibling::button[text()='2023']/ancestor::div[@class='ant-picker-header']/following-sibling::div/table/tbody/tr/td[not(contains(@class,'disabled'))]/div[text()='1']");
    await browser.pause(3000);
    await Actions.clickForElementIntercept("//span[text()='OK']");
    await browser.pause(1000);

    await $("//*[text()='Submit']").scrollIntoView({block:'center'});
    await Actions.clickForElementIntercept($("//*[text()='Submit']"));
   
    // await assert.strictEqual(
    //   title,
    //   "Test Tech"
    // );
  });

  xit("Verify login with valid credentails", async () => {
 
    await LorryPage.login("test1@trukker.com","trukker@123");
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
