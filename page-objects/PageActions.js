class PageActions {

    get howItWorks(){
        return $('*=How it works')
    }

    get howItWorksPageLabel(){
        return $('//*[@id="block-node-banner"]/div/div/div/div/div/div/div/h1')
    }

    get planYourtrip(){
        return $('#block-secondarylinks > div > div > div > div > div > ul > li:nth-child(5) > a')
    }

    get downloadYourFreeBostonGuideBook(){
        return $('//*[@id="block-node-banner"]/div/div/div/div/div[2]/div[2]/div/h1')
    }

    get firstName(){
        return $('//*[@id="edit-first-name"]')
    }

    get lastName(){
        return $('//*[@id="edit-last-name"]')
    }

    get eMail(){
        return $('//*[@id="edit-email"]')
    }

    get datePicker(){
        return $('//*[@id="edit-travel-date"]')
    }

    get futureDate(){
        return $('//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[5]/a')
    }

    get subscription(){

        return $('//*[@id="edit-subscription"]')
    }

    get getYourGuideBookButton(){

        return $('//*[@id="edit-actions-submit"]')
    }

    get everythingYouNeedToPlanYourTrip(){

        return $('//*[@class="guidebook--description"]')
    }

    howitworkspage(){
        this.howItWorksPageLabel.waitForExist()
        browser.pause(3000)
    }

    selectHowitworks(){
        this.howItWorks.click()
    }

    selectPlanyourtrip(){
        this.planYourtrip.click()
        browser.pause(2000)
    }

    fillInDetailsForTrip(){

        this.downloadYourFreeBostonGuideBook.waitForExist()
        this.firstName.setValue('John')   
        this.lastName.setValue('Brown')   
        this.eMail.setValue('JohnBrown1985@gmail.com')  
        this.getYourGuideBookButton.scrollIntoView() 
        this.datePicker.click()
        this.futureDate.click()
        this.subscription.click()
        this.getYourGuideBookButton.click()
        browser.pause(10000)

    }

    shouldSeeGuideBookPage(){

        this.everythingYouNeedToPlanYourTrip.scrollIntoView()
        this.everythingYouNeedToPlanYourTrip.waitForExist()
        browser.pause(2000)

    }

}

export default new PageActions()