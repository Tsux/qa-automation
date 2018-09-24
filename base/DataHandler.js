const uuid = require('uuid');

function DataHandler(){

    /**
     * @description Selects Element
     * @method createEmail
     * @returns {String}
    */ 
   this.getRandomEmail = () => {
       return uuid() + "@gmail.com";
   }

    /**
     * @description Selects Element
     * @method getDateDay
     * @param {String} date
     * @returns {String}
    */
    this.getDateDay = (date) => {
        return date.split("/")[0];
    }

    /**
     * @description Selects Element
     * @method getDateMonth
     * @param {String} date
     * @returns {String}
    */
    this.getDateMonth = (date) => {
        var m = "";
        console.log(date.split("/")[1]);
        switch(parseInt(date.split("/")[1])){
            case 1: m =  "January"; break;
            case 2: m =  "February"; break;
            case 3: m =  "March"; break;
            case 4: m =  "April"; break;
            case 5: m =  "May"; break;
            case 6: m =  "June"; break;
            case 7: m =  "July"; break;
            case 8: m =  "August"; break;
            case 9: m =  "September"; break;
            case 10: m =  "October"; break;
            case 11: m =  "November"; break;
            case 12: m =  "December"; break;
        };
        return m;
    }

    /**
     * @description Selects Element
     * @method getDateYear
     * @param {String} date
     * @returns {String}
    */
    this.getDateYear = (date) => {
        return date.split("/")[2];
    }
}

module.exports = new DataHandler();