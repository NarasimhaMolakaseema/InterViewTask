const ActionHelper = require('./../helpers/actionHelpers');
require('chai').should();


class CartPage{


    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/Cart.Screen.js`);
    }

verfiyUserOnCartPage(pagetitle){
    ActionHelper.getText(this.getObjectLocator().toolbarTitle).should.equal(pagetitle);
}

verfiyItemIntheCart(cartItem){
ActionHelper.getText(this.getObjectLocator().cartProductName).should.equal(cartItem);
}

SelectemailCheckbox(){
    ActionHelper.click(this.getObjectLocator().SendEmailCHeckbox);
}

tapOnProceedButton(){
    ActionHelper.click(this.getObjectLocator().btnProceed);
}

}

module.exports = CartPage;