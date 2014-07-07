function StringCalculator() {
    var self = this;

    self.Add = function (numbers) {
        if ((numbers | 0) < 0) throw new Error("negatives not allowed");

        if (!validPattern(numbers)) return 0;

        var separatedNumbers = numbers.replace(/\n|,|;/g, '');

        var sumOfAllNumbers = 0;
        for (var i = 0; i < separatedNumbers.length; i++) {
            sumOfAllNumbers += separatedNumbers[i] | 0;
        }

        //        var sumOfAllNumbers = separatedNumbers.map(function (ele) {
        //            return /^\d+$/.test(ele) ? parseInt(ele) : 0;
        //        }).reduce(function (previous, current) {
        //            return previous + current;
        //        });

        return sumOfAllNumbers;
    };

    var validPattern = function(param) {
        var re = /((\d(\\n|,|;){1})+\d)+/g;

        return param.match(re) !== null || param !== "";
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