function StringCalculator() {
    var self = this;

    self.Add = function (numbers) {
        if ((numbers | 0) < 0) throw new Error("negatives not allowed");

        if (!validPattern(numbers)) return 0;

        var sumOfAllNumbers = 0;
        numbers = numbers.replace(/(\d{4})*/g,'');
        var multipleDigits = numbers.match(/(\d{3}|\d{2}|\d{1})*/g);
        if (multipleDigits) {
            for (var i = 0; i < multipleDigits.length; i++) {
                sumOfAllNumbers += multipleDigits[i] | 0;
            }
        }

        return sumOfAllNumbers;
    };

    var validPattern = function(param) {
        var re = /((\d(\\n|,|;){1})+\d)+/g;

        return param.match(re) !== null;
    };
}


var singleton = (function () {

    var instance;

    var createInstance = function () {
        var strCalc = new StringCalculator();
        return strCalc;
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    };
})();