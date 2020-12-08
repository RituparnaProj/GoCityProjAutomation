import { Given, When, Then } from 'cucumber'
import base from '../page-objects/BasePage'
import pageActions from '../page-objects/PageActions'

Given(/^I am on the Go City Products page$/, function(){ 

    base.launchApplicationGoCity()

})

When(/^I select How it works$/, function(){

    pageActions.selectHowitworks()    

})

Then(/^I should see how it works page$/, function(){

    pageActions.howitworkspage()    

})

When(/^I select Plan your trip$/, function(){

    pageActions.selectPlanyourtrip()    

})

Then(/^I fill in the details for the trip and select get your guidebook$/, function(){

    pageActions.fillInDetailsForTrip()    

})

Then(/^I should see Guide Book page$/, function(){

    pageActions.shouldSeeGuideBookPage()    

})


