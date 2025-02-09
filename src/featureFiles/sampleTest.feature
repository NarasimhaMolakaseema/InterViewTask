Feature: Sample feature file to illustrate app and browser tests

  @androidApp
  Scenario: Add Air Jordan 4 Retro shoes to cart
    Given I launch the app
    When Select the country where to Shop Algeria
    And Enter Username Narasimha
    And Tap on Lets shop button
    Then User navigated to Products screen
    And  Tap on Add to cart for Air Jordan 4 Retro
    Then Verify Counter text on Cart Iocn in Products page 1
    And Tap on Cart button 
    Then Verify user naviagted to Cart Page.
    Then Verify Air Jordan 4 Retro added to cart
    And Check send email checkbox on Cart page
    And Tap on visit the website button

