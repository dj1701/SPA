function DateComparison(firstDate, secondDate) {
    var self = this;
    self.firstDate = firstDate;
    self.secondDate = secondDate;

    var oneDay = 1000 * 60 * 60 * 24;

    var getDifference = function() {
        return self.secondDate - self.firstDate;
    };

    self.Years = function () {
        var difference = getDifference();
        return Math.floor((difference / oneDay) % 1.5 == 1 ? (difference / oneDay) / 365.24 : (difference / oneDay) / 365);
    };

    self.Months = function () {
        var difference = getDifference();
        return Math.floor(((difference / oneDay) / 365 * 12) % 1 == 0 ? ((difference / oneDay) / 365 * 12) : ((difference / oneDay) / 365.24 * 12));
    };

    self.Weeks = function () {
        var difference = getDifference();
        return Math.round(difference / oneDay) / 7 | 0;
    };

    self.Days = function (includeLastDay) {
        var difference = getDifference();
        return Math.round(difference / oneDay) + (includeLastDay ? 1 : 0);
    };

    self.Hours = function (includeLastDay) {
        var difference = getDifference();
        return (Math.floor(difference / oneDay) * 24) + (includeLastDay ? 24 : 0);
    };

    self.Minutes = function (includeLastDay) {
        var difference = getDifference();
        return (Math.floor(difference / oneDay) * 24 + (includeLastDay ? 24 : 0)) * 60;
    };

    self.Seconds = function (includeLastDay) {
        var difference = getDifference();
        return (Math.round(difference / oneDay) + (includeLastDay ? 1 : 0)) * 86400;
    };
}