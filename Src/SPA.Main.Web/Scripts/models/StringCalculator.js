function StringCalculator() {
    var self = this;

    self.Add = function (numbers) {
        if (numbers == "") return 0;

        var separatedNumbers = numbers.split(',');

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