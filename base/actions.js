// If you want to know more about the ExpectedConditions
// please visit the URL https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
// so you can see all the Functions fo ExpectedConditions.
const EC = protractor.ExpectedConditions;

const Actions = function () {

    /**
     * @description Wait for element to be clickable then perform click
     * @method safetyClick
     * @param {webElement}  element
     */
    this.safetyClick = function (element) {
      var isClickable = EC.elementToBeClickable(element);
      browser.wait(isClickable, 30000, 'Element is not clickable');
      element.click();
    };

    /**
     * @description Wait for element to be clickable then perform click
     * @method waitForElementToBeVisible
     * @param {webElement}  element
     */
    this.waitForElementToBeVisible = function(element){
      var isVisible = EC.visibilityOf(element);
      browser.wait(isVisible, 3000, "Element not Visible");
    };

    /**
     * @description Wait for element to be visible then getText
     * @method safetyGetText
     * @param {webElement} element
     * @return {String}
     */
    this.safetyGetText = function (element) {
      this.waitForElementToBeVisible(element);
      return element.getText();
    };

    /**
     * @description Wait for element to be visible then getText
     * @method safetyGetText
     * @param {webElement} element
     * @param {string} attributeName
     * @return {String}
     */
    this.safetyGetAttribute = function(element, attributeName) {
      var isPresent = EC.presenceOf(element);
      browser.wait(isPresent, 30000, 'Element is not present in current page');
      return element.getAttribute(attributeName);
    };

    /**
     * @description Wait for element to be visible then sendKeys.
     * @method safetySendText
     * @param {webElement} element
     * @param {String} text
     */
    this.safetySendText = function (element, text) {
      this.waitForElementToBeVisible(element);
      element.clear();
      element.sendKeys(text);
    };

    /**
     * @description Wait for element to be visible then clear box.
     * @method clearTextField
     * @param {webElement} element
     */
    this.clearTextField = function (element) {
      this.waitForElementToBeVisible(element);
      element.clear();
    };

    /**
     * @description Wait for element to be visible then verify if element is displayed.
     * @method isElementDisplayed
     * @param {webElement} element
     * @return {bool}
     */
  this.isElementDisplayed = function (element) {
    var isPresent = EC.visibilityOf(element);
    browser.wait(isPresent, 30000);
    return element.isDisplayed();
  };

  /**
     * @description Wait for element to be present
     * @method waitForElementToBePresent
     * @param {by} locator
     */
    this.waitForElementToBePresent = function (locator) {
      var isPresent = EC.presenceOf(element(locator));
      browser.wait(isPresent, 30000, "Element searched by " + locator + " locator was not found");
    };

    /**
     * @description Checks for text to be Present
     * @method textToBePresent
     * @param {String} text
     */
    this.textToBePresent = function (text) {
      this.waitForElementToBePresent(by.xpath("//*[text()='" + text + "']"));
      return this.isElementDisplayed(element(by.xpath("//*[text()='" + text + "']")));
    };

  /**
   * @description Wait for element to be invisible
   * @method waitForInvisible
   * @param {webElement} elem
   */
  this.waitForInvisible = (elem) => {
    const isNotVisible = EC.invisibilityOf(elem);
    browser.wait(isNotVisible, 4000, 'Element is visible');
  };
  
  /**
   * @description Wait for element to be clickable and hover to element
   * @method hoverElement
   * @param {webElement} elem
   */
  this.hoverElement = (elem) => {
    const isClickable = EC.elementToBeClickable(elem);
    browser.wait(isClickable, 30000, 'Element is not hoverable');
    browser.actions().mouseMove(elem).perform();
  };

  /**
   * @description Selects Element
   * @method selectItemInDropdown
   * @param {webElement} selElement
   * @param {String} option
   */
  this.selectItemInDropdown = (selElement, option) => {
    console.log(option);
    browser.wait(EC.elementToBeClickable(selElement), 30000, 'Element ' + selElement + ' is not clickable');
    selElement.click();
    var optionItem = element(by.xpath("//option[contains(text(), '" + option + "')]"));
    browser.wait(EC.elementToBeClickable(optionItem), 30000, 'Element is not clickable');
    optionItem.click();
  };

  /**
   * @description Selects Element
   * @method selectItemInDropdown
   * @param {webElement} selElement
   * @param {String} option
   */
  this.selectItemByValueInDropdown = (selElement, value) => {
    browser.wait(EC.elementToBeClickable(selElement), 30000, 'Element ' + selElement + ' is not clickable');
    selElement.click();
    console.log(selElement.getAttribute('id'));
    var fXpath = "//*[@id='" + String(selElement.getAttribute('id')) + "']/select/option[@value='" + value + "']";
    console.log(fXpath);
    var optionItem = element(by.xpath(fXpath));
    browser.wait(EC.elementToBeClickable(optionItem), 30000, 'Element ' + optionItem + 'is not clickable');
    optionItem.click();
  };
}

module.exports = new Actions();