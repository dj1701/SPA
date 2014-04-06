function DateDifference(firstDate, secondDate) {
    var self = this;
    self.firstDate = firstDate;
    self.secondDate = secondDate;

    var oneDay = 1000 * 60 * 60 * 24;

    self.Years = function () {
        var difference = self.secondDate - self.firstDate;
        var years = Math.floor((difference / oneDay) % 1.5 == 1 ? (difference / oneDay) / 365.24 : (difference / oneDay) / 365);
        return years;
    };

    self.Months = function () {
        var difference = self.secondDate - self.firstDate;
        var months = Math.floor(((difference / oneDay) / 365 * 12) % 1 == 0 ? ((difference / oneDay) / 365 * 12) : ((difference / oneDay) / 365.24 * 12));
        return months;
    };
}