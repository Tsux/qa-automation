const page = require('../page_objects/page');
const signPage = require('../page_objects/SignPage.js');
const createAcc = require('../page_objects/CreateAccountPage.js');
const dataHandler = require('../base/DataHandler.js');
const actions = require('../base/actions');

beforeAll(function () {
  page.openUrl();
});

describe("Register into Site", function() {
    var email = dataHandler.getRandomEmail();

    it("Validate User is able to navigate to Sign Page", function(){
        element(by.css('.login')).click();
        actions.waitForElementToBeVisible(signPage.signinEmail);
    });
    it("Validate user can ", function(){
        actions.safetyClick(signPage.signUpBut);
        console.log(actions.textToBePresent("Invalid email address."));
        expect(actions.textToBePresent("Invalid email address.")).toBe(true);
    });
    it("Validate a new user Sign Up", function() {
        signPage.fillSignUpAndTry(email);
        createAcc.fillCreateAccountForm(browser.params.genre, browser.params.firstName, browser.params.lastName, email, "hardPa$$", browser.params.birthDate, browser.params.companyName, browser.params.address, browser.params.city, browser.params.state, browser.params.zip, browser.params.country, browser.params.addInfo, browser.params.phone, browser.params.mobPhone, browser.params.addressAlias);
        browser.sleep(15000);
    });
});