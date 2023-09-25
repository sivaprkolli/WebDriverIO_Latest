'use strict';
const Actions = require('common-actions')
class SauceDemo {
    /**
     * define selectors using getter methods
     */
  
    get username_inputbox() {
      return $("#user-name");
    }
    get password_inputbox() {
      return $("#password");
    }
    get submit_button() {
      return $(".submit-button.btn_action");
    }
    get btnSubmit() {
      return $("a[aria-label='Search']");
    }

  async login(username, password) {
    await this.username_inputbox.setValue(username);
    await this.password_inputbox.setValue(password);
    //await this.submit_button.click();
    await Actions.click_element(this.submit_button)
  }

   
  }
  module.exports = new SauceDemo();
  