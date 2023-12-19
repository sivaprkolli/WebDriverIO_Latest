'use strict';
const assert = require("assert");
const LearningPage = require('learning-po');

describe("Login Test", async () => {
it("Open Url", async () => {
   await browser.url("https://angular.io/guide/example-apps-list");
   await browser.pause(2000);
   await browser.newWindow("https://webdriver.io");
   await browser.pause(2000);
   await browser.switchWindow('angular.io');
   await browser.pause(2000);
   await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js');
   await browser.pause(2000);
   await browser.newWindow("https://the-internet.herokuapp.com/windows");

   await browser.waitUntil(
   async ()=> await $("//*[text()='Click Here']").isDisplayed(),
{
    timeout:5000,
    timeoutMsg: "Element not found",
    interval:1000 
}
   )
   await $("//*[text()='Click Here']").click();
   //browser.findElement('xpath', "//*[text()='Click Here']").click();
   await browser.pause(2000);
   await browser.switchWindow('New Window');
   await browser.pause(2000);
})
});
