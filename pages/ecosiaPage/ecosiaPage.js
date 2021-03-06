const ecosiaPageSelectors = require('./ecosiaPageSelectors')

module.exports = function(browser) {

    this.openEcosiaPage = () => {
        return browser
            .url('https://ecosia.org')
    }

    this.setSearchText = (searchText) =>{
        return browser
            .setValue(ecosiaPageSelectors.ecosiaSearchInput, searchText)
            .click(ecosiaPageSelectors.ecosiaSearchSubmitButton)
    }

    this.checkFirstResult = (expectedResult) => {
        return browser
            .assert.containsText(ecosiaPageSelectors.firstSearchValueResult, expectedResult)
    }

    this.goToFirstResultSearch = () => {
        return browser
            .click(ecosiaPageSelectors.firstSearchValueResult)
    }
}