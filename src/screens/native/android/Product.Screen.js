class ProductScreen{


    constructor(){

        this.AirJordan4RReto ="//*[@text='Air Jordan 4 Retro']";
        this.AirJordan4AddToCart="//*[@text='Air Jordan 4 Retro']/..//android.widget.TextView[@resource-id='com.androidsample.generalstore:id/productAddCart']";
        this.AirJordan4Price ="//*[@text='Air Jordan 4 Retro']/..//android.widget.TextView[@resource-id='com.androidsample.generalstore:id/productPrice']";
        this.ButtonCart ="//*[@resource-id='com.androidsample.generalstore:id/appbar_btn_cart']";
        this.counterText="//*[@resource-id='com.androidsample.generalstore:id/counterText']";
        this.toolbarTitle="//android.widget.TextView[@resource-id='com.androidsample.generalstore:id/toolbar_title']";
    }
}

module.exports = new ProductScreen();