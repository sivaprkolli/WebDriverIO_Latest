'use strict';

class Actions {
    async click_element(element){
        await element.click();
    }
}

module.exports = new Actions();