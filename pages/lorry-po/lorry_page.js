'use strict';
const Actions = require('common-actions');

class LorryPage {
    /**
     * define selectors using getter methods
     */
  
    get username_inputbox() { return $("#username");}
    get password_inputbox() { return $("#password");}
    get submit_button() { return $("#kc-login");}

    get LHMItems() {
      return $(".icon + span")[6];
    }

    get inquiresMenu(){
      return $("//span[text()='Inquiries']");
    }

    get createInquiry(){
      return $("[href='#/inquiry/add']");
    }
    

  async login(username, password) {
    await Actions.type_value(this.username_inputbox, username);
    
    await Actions.type_value(this.password_inputbox, password);
    await Actions.click_element(this.submit_button);
    await browser.pause(10000);
   // await Actions.click_element(this.inquiresMenu);
  }

  async openMenu(menuName){
      await Actions.openLeftHandMenu(".icon + span", menuName)
  }

  async openSubMenu(submenu){
    await Actions.openLeftHandMenu("span > [href='#/inquiry/add'] > span > span", submenu)
  }

  async openTrucksList(listName){
    await Actions.openLeftHandMenu("//label[text()='Pricing Unit']/../following-sibling::div/descendant::span[@class='ant-select-selection-search']/input", listName)
  }

  async openTrucksListItem(listNameItem){
    await Actions.openLeftHandMenu(".ant-select-item-option-content", listNameItem)
  }

  async selectDate(month, year, date){
    await Actions.clickForElementIntercept("//button[text()='"+month+"']/following-sibling::button[text()='"+year+"']/ancestor::div[@class='ant-picker-header']/following-sibling::div/table/tbody/tr/td[not(contains(@class,'disabled'))]/div[text()='"+date+"']");
    await browser.pause(3000);
    await Actions.clickForElementIntercept("//span[text()='OK']");
  }

////label[@title='Pricing Unit']/../../descendant::span[@title='Trucks']
  async openTruckList(){
    await Actions.click_element($("//label[text()='Pricing Unit']/../following-sibling::div/descendant::span[@class='ant-select-arrow']"));
    await browser.pause(5000);
    await Actions.clickForElementIntercept("//label[text()='Pricing Unit']/../following-sibling::div/descendant::span[@class='ant-select-arrow']");
  }

  async openLHM() {
    await $('span.dropdown-tile > img + span').waitForDisplayed({timeout:10000})
    let list_articles = $$(
      ".icon + span"
    );
    var total_elements = [];
    await list_articles.forEach(async (element) => {
      await browser.pause(2000);
      //total_elements = total_elements.concat(element.getText());
      await console.log(element.getText())
      if(await element.getText() == "Inquiries"){

       await browser.execute(this.runInBrowser, element);
       //await element.click();
      }
    });
    // var addInq = browser.$("[href='#/inquiry/add']")

    // await browser.execute(this.runInBrowser, addInq);
    Actions.openLeftHandMenu("a[href*='add'] > .submenuTitle > span", "Create Inquiry")
  }

   runInBrowser = async function(argument) { 
    await argument.click();
   };

  async get_all_menu_links() {
   await $('span.dropdown-tile > img + span').waitForDisplayed({timeout:10000})
    let list_articles = $$(
      ".icon + span"
    );
    var total_elements = [];
    await list_articles.forEach((element) => {
      browser.pause(2000);
      total_elements = total_elements.concat(element.getText());
      //total_elements.push.apply(total_elements, element.getText());
      console.log("all menus" + total_elements);
    });
    await console.log("size of arrray = " + total_elements.length);
    return total_elements.length;
  }



  }
  module.exports = new LorryPage();
  