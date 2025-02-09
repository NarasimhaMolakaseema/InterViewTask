class CartScreen{

constructor(){

    this.cartProductName="//android.widget.TextView[@resource-id='com.androidsample.generalstore:id/productName']";
    this.cartPrice="com.androidsample.generalstore:id/productPrice";
    this.SendEmailCHeckbox="//*[@class='android.widget.CheckBox']";
    this.btnProceed="//android.widget.Button[@resource-id='com.androidsample.generalstore:id/btnProceed']";
    this.toolbarTitle="//android.widget.TextView[@resource-id='com.androidsample.generalstore:id/toolbar_title']";
}

}
module.exports =  new CartScreen();