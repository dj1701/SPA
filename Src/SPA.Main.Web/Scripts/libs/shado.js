﻿Shado = (function() {

    var DateCompare = function(firstDate, secondDate) {

        if (Object.prototype.toString.call(firstDate) !== "[object Date]" || Object.prototype.toString.call(secondDate) !== "[object Date]") throw new Error('Parameters passed in are not Date objects');

        this.firstDate = firstDate;
        this.secondDate = secondDate;
        this.oneDay = 1000 * 60 * 60 * 24;

        this.getDifference = function() {
            return this.secondDate - this.firstDate;
        };
    };

    DateCompare.prototype = {
        Years: function () {
            var difference = this.getDifference();
            return Math.floor((difference / this.oneDay) % 1.5 == 1 ? (difference / this.oneDay) / 365.24 : (difference / this.oneDay) / 365);
        },
        Months: function () {
            var difference = this.getDifference();
            return Math.floor(((difference / this.oneDay) / 365 * 12) % 1 == 0 ? ((difference / this.oneDay) / 365 * 12) : ((difference / this.oneDay) / 365.24 * 12));
        },
        Weeks: function () {
            var difference = this.getDifference();
            return Math.round(difference / this.oneDay) / 7 | 0;
        },
        Days: function (includeLastDay) {
            var difference = this.getDifference();
            return Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0);
        },
        Hours: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.floor(difference / this.oneDay) * 24) + (includeLastDay ? 24 : 0);
        },
        Minutes: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.floor(difference / this.oneDay) * 24 + (includeLastDay ? 24 : 0)) * 60;
        },
        Seconds: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0)) * 86400;
        },
    };
    return {
       DateCompare : DateCompare 
    };
})();