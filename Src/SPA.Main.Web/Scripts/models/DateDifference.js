function DateDifference(firstDate, secondDate) {
    var self = this;
    self.firstDate = firstDate;
    self.secondDate = secondDate;

    var oneDay = 1000 * 60 * 60 * 24;

    var getDifference = function() {
        return self.secondDate - self.firstDate;
    };

    self.Years = function () {
        var difference = getDifference();
        var years = Math.floor((difference / oneDay) % 1.5 == 1 ? (difference / oneDay) / 365.24 : (difference / oneDay) / 365);
        return years;
    };

    self.Months = function () {
        var difference = getDifference();
        var months = Math.floor(((difference / oneDay) / 365 * 12) % 1 == 0 ? ((difference / oneDay) / 365 * 12) : ((difference / oneDay) / 365.24 * 12));
        return months;
    };

    self.Days = function (includeLastDay) {
        var difference = getDifference();
        var days = Math.round(difference / oneDay) + (includeLastDay ? 1 : 0);
        return days;
    };

    self.Hours = function (includeLastDay) {
        var difference = getDifference();
        var hours = (Math.floor(difference / oneDay) * 24) + (includeLastDay ? 24 : 0);
        return hours;
    };

    self.Minutes = function (includeLastDay) {
        var difference = getDifference();
        var minutes = (Math.floor(difference / oneDay) * 24 + (includeLastDay ? 24 : 0)) * 60;
        return minutes;
    };
}