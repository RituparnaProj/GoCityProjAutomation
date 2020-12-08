class Base {

    launchApplicationGoCity(){
        browser.url('https://gocity.com/boston/en-us/products/all-inclusive', {'timeout':30000})
        browser.maximizeWindow()
    }

}
export default new Base()