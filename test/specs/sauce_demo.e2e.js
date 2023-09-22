
const assert = require("assert");
const SauceDemo = require("../pageobjects/sauce_demo.page");

describe("Login Test", () => {
  it("Verify Title", async () => {
    await browser.url(
      "https://www.saucedemo.com/"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    await assert.strictEqual(
      title,
      "Swag Labs"
    );
  });

  it("Verify login with valid credentails", async () => {
 
    await SauceDemo.login("standard_user","secret_sauce");
  });
});
