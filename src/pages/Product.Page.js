const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();


class ProductPage{

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/Product.Screen.js`);
    }
    
verifyUserNavigatedonProductpage(titleText){
    ActionHelper.waitForElement(this.getObjectLocator().toolbarTitle, 5);
    ActionHelper.getText(this.getObjectLocator().toolbarTitle).should.equal(titleText);
}
addItemToCart(){
    ActionHelper.click(this.getObjectLocator().AirJordan4AddToCart);
    ActionHelper.pause(2);
}

verifyCountertextOnCartButton(counterValue){
    ActionHelper.getText(this.getObjectLocator().counterText).should.equal(counterValue);
}

tapOnCartButton(){
    ActionHelper.click(this.getObjectLocator().ButtonCart);
}
}
module.exports= ProductPage;