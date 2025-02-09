const ActionHelper = require('./../helpers/actionHelpers');
require('chai').should();

class Homepage{


    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/Home.screen.js`);
    }


    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    selectCountry(){
        ActionHelper.waitForElement(this.getObjectLocator().CountryDropDown, 4);
        ActionHelper.click(this.getObjectLocator().CountryDropDown);
        ActionHelper.click(this.getObjectLocator().countryAlgeria);
    }
    enterUserName(inputtext){
        //ActionHelper.clearText(this.getObjectLocator().CustomerName);
         ActionHelper.click(this.getObjectLocator().CustomerName);
         $(this.getObjectLocator().CustomerName).addValue(inputtext);
         ActionHelper.hideKeyboard();
    }
   
    selectGenderMale(){
        ActionHelper.click(this.getObjectLocator().genderMale);
    }

    tapLetsShop(){
        ActionHelper.click(this.getObjectLocator().LetsshopBtn);
        
    }

}
module.exports = Homepage;