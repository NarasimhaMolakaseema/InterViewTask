class HomeScreen{


    constructor(){

        this.CountryDropDown='//android.widget.Spinner[@resource-id="com.androidsample.generalstore:id/spinnerCountry"]';
        this.CustomerName='//android.widget.EditText[@resource-id="com.androidsample.generalstore:id/nameField"]';
        this.genderMale='//*[@resource-id="com.androidsample.generalstore:id/radioMale"]';
        this.LetsshopBtn='//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]';
        this.countryAlgeria='//*[@text="Algeria"]';
        
    }
}

module.exports = new HomeScreen();