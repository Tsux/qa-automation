const actions = require('../base/actions');

/**
 * @description Page Object for Sign Page.
 */
function SignPage() {
    this.createEmail = element(by.id("email_create"));
    this.signinEmail = element(by.id("email"));
    this.passwdField = element(by.id("passwd"));
    this.signUpBut = element(by.id("SubmitCreate"));
    this.signInBut = element(by.id("SubmitLogin"));
    this.signUpForm = element(by.xpath(""));
    this.signInForm = element(by.xpath("//input[@id='email']//ancestor::div[contains(@class, 'form-group')]"));

    /**
     * @description Fills and Submits SignUp Form
     * @method createTask
     * @param {String} email
    */
    this.fillSignUpAndTry = (email) => {
        actions.safetySendText(this.createEmail, email);
        //expect(actions.safetyGetAttribute(this.signUpForm, "class")).toContain("form-ok");
        actions.safetyClick(this.signUpBut);
    };

    /**
     * @description Fills and Submits SignIn Form 
     * @method createTask
     * @param {String} email
     * @param {String} pass
    */
    this.fillSignInAndTry = (email, password) => {
        actions.safetySendText(this.signinEmail, email);
        actions.safetySendText(this.passwdField, password);
        actions.safetyClick(this.signInBut);
    };
    
}
module.exports = new SignPage();