'use strict';

class Actions {
    async click_element(element){
        await element.click();
    }

    async type_value(element, data){
        await element.setValue(data);
    }

    async openLeftHandMenu(locator, menuName) {
        let list_menus = $$(locator);
        await list_menus.forEach(async (element) => {
          await browser.pause(2000);
          await console.log(element.getText())
          if(await element.getText() == menuName){
           await browser.execute(this.clickAction, element);
          }
        });
      }

      async clickForElementIntercept(locator) {
        let list_menus = $$(locator);
        await list_menus.forEach(async (element) => {
          await browser.pause(2000);
           await browser.execute(this.clickAction, element);
        });
      }


      clickAction = async function(argument) { 
        await argument.click();
       };
}

module.exports = new Actions();