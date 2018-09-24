function Helpers() {
    var waitUntil = protractor.ExpectedConditions;

    function Actions(){
        this.safetyClickOnElement = function(element){
            var isClickable = waitUntil.elementToBeClickable(element);
            browser.wait(isClickable, 3000, "Element is not Clickable");
            element.click()
        };
        
        this.waitForElementToBeVisible = function(element){
            var isVisible = waitUntil.visibilityOf(element);
            browser.wait(isVisible, 3000, "Element not Visible");
            return element.isDisplayed();
        };

        this.waitForElementToBeInvisible = function(element){
            var isVisible = waitUntil.invisibilityOf(element);
            browser.wait(isVisible, 3000, "Element not Invisible");
        };

        this.waitForElementPresence = function(element){
            var isPresent = waitUntil.presenceOf(element);
            browser.wait(isPresent, 3000, "Element not Present");
        };

        this.safetyWriteIntoElement = function(element, text){
            this.waitForElementToBeVisible(element);
            element.clear();
            element.sendKeys(text);
        }

        this.safetyGetText = function(element, text){
            this.waitForElementToBeVisible(element);
            element.clear();
            element.getText(text);
        }

        this.safetyHoverOnElement = function(element){
            var isClickable = waitUntil.elementToBeClickable(element);
            browser.wait(isClickable, 3000, "Element is not Clickable");
            browser.actions().mouseMove(element).perform();
        }
        
    }

}

module.exports = new Helpers()