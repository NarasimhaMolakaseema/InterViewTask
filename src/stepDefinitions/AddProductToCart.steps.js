const {Given, When, Then} = require('cucumber');

const Homepage = require('./../pages/Home.Page');
const ProductPage = require('./../pages/Product.Page');
const CartPage = require('./../pages/Cart.Page');
const productpage = new ProductPage();
const homepage = new Homepage();
const cartpage = new CartPage();





Given(/^I launch the app$/, () => {
    homepage.launchApp();
});


When(/^Select the country where to Shop Algeria$/, () => {
    homepage.selectCountry();
});

When(/^Enter Username (.*)$/, ( cusName) => {
    homepage.enterUserName(cusName);
});

When(/^Tap on Lets shop button$/, ()=>{
    homepage.tapLetsShop();
});

Then(/^User navigated to (.*) screen$/, (screenTitle) => {
    productpage.verifyUserNavigatedonProductpage(screenTitle);
});

When(/^Tap on Add to cart for Air Jordan 4 Retro$/, () => {
    productpage.addItemToCart();
});

Then(/^Verify Counter text on Cart Iocn in Products page (.*)$/,(counterText)=>{
    productpage.verifyCountertextOnCartButton(counterText);
});

When(/^Tap on Cart button$/,() =>{
    productpage.tapOnCartButton();
});

Then(/^Verify user naviagted to (.*) Page.$/,(pagetitle)=>{
    cartpage.verfiyUserOnCartPage(pagetitle);
});

Then(/^Verify (.*) added to cart$/,(productname)=>{
    cartpage.verfiyItemIntheCart(productname);
});

When(/^Check send email checkbox on Cart page$/,()=>{
    cartpage.SelectemailCheckbox();
});

When(/^Tap on visit the website button$/,()=>{
    cartpage.tapOnProceedButton();
});

