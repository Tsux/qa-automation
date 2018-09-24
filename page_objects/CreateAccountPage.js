const actions = require('../base/actions');
const dataHandler = require('../base/DataHandler.js');

/**
 * @description Page Object for Sign Page.
 */
function CreateAccountPage() {
    this.maleGenreRadio = element(by.id("id_gender1"));
    this.femaleGenreRadio = element(by.id("id_gender2"));
    this.firstNameField = element(by.id("customer_firstname"));
    this.lastNameField = element(by.id("customer_lastname"));
    this.emailField = element(by.id("email"));
    this.paswdField = element(by.id("passwd"));
    this.bdDaySel = element(by.id("uniform-days"));
    this.bdMonthSel = element(by.id("uniform-months"));
    this.bdMYearSel = element(by.id("uniform-years"));

    this.aiFirstName = element(by.id("firstname"));
    this.aiLastName = element(by.id("lastname"));
    this.companyField = element(by.id("company"));
    this.address1 = element(by.id("address1"));
    this.address2 = element(by.id("address2"));
    this.cityField = element(by.id("city"));
    this.stateSel = element(by.id("uniform-id_state"));
    this.postcode = element(by.id("postcode"));
    this.countrySel = element(by.id("uniform-id_country"));
    this.addInfoTA = element(by.id("other"));
    this.phoneField = element(by.id("phone"));
    this.mobPhoneField = element(by.id("phone_mobile"));
    this.addressAlias = element(by.id("alias"));
    this.submitAccBut = element(by.id("submitAccount"));

    /**
     * @description Fills Create Account Form
     * @method fillCreateAccountForm
     */
    this.fillCreateAccountForm = async (genre, firstName, lastName, email, pass, birthDate, company, address, city, state, zip, country, addInfo, phone, mobPhone, adAlias) => {
        (genre == "Male" ? actions.safetyClick(this.maleGenreRadio) : actions.safetyClick(this.femaleGenreRadio) );
        actions.safetySendText(this.firstNameField, firstName);
        actions.safetySendText(this.lastNameField, lastName);
        actions.safetySendText(this.emailField, email);
        actions.safetySendText(this.paswdField, pass);

        var day = dataHandler.getDateDay(birthDate);
        var month = dataHandler.getDateMonth(birthDate);
        var year = dataHandler.getDateYear(birthDate);

        element(by.id("uniform-days")).click();
        actions.selectItemInDropdown(this.bdDaySel, day);
        actions.selectItemInDropdown(this.bdMonthSel, month);
        actions.selectItemInDropdown(this.bdMYearSel, year);

        actions.safetySendText(this.aiFirstName, firstName);
        actions.safetySendText(this.aiLastName, lastName);
        actions.safetySendText(this.companyField, company);
        actions.safetySendText(this.address1, address);
        actions.safetySendText(this.cityField, city);

        actions.selectItemInDropdown(this.stateSel, state);
        actions.safetySendText(this.postcode, zip);
        actions.selectItemInDropdown(this.countrySel, country);

        actions.safetySendText(this.addInfoTA, addInfo);
        actions.safetySendText(this.phoneField, phone);
        actions.safetySendText(this.mobPhoneField, mobPhone);

        actions.safetySendText(this.addressAlias, adAlias);
        actions.safetyClick(this.submitAccBut);
        browser.wait(100000);
    }
}

module.exports = new CreateAccountPage();