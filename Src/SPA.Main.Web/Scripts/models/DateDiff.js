function DateDiff() {
    var self = this;

    self.ShowDateComparisons = ko.observable(false);
    self.StartDate = ko.observable();
    self.EndDate = ko.observable();
    self.Years = ko.observable();
    self.Months = ko.observable();
    self.Weeks = ko.observable();
    self.Days = ko.observable();
    self.Hours = ko.observable();
    self.Minutes = ko.observable();
    self.Seconds = ko.observable();
    self.IncludeLastDay = ko.observable();

    var parseDate = function (str) {
        var dy = parseInt(str.substring(0, 2));
        var mon = parseInt(str.substring(3, 5));
        var yr = parseInt(str.substring(6, 10));
        return new Date(yr, mon - 1, dy);
    };

    var validateDataIsNotUndefined = function() {
        return !((self.StartDate() === '' || self.EndDate() === '') || (typeof self.StartDate() === "undefined" || typeof self.EndDate() === "undefined"));
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    self.CalculateDates = function () {
        var startDate = parseDate(self.StartDate());
        var endDate = parseDate(self.EndDate());
        var includeLastDay = self.IncludeLastDay();
        Shado.Date.Compare(startDate, endDate);
        self.Years(numberWithCommas(Shado.Date.Years()));
        self.Months(numberWithCommas(Shado.Date.Months()));
        self.Weeks(numberWithCommas(Shado.Date.Weeks()));
        self.Days(numberWithCommas(Shado.Date.Days(includeLastDay)));
        self.Hours(numberWithCommas(Shado.Date.Hours(includeLastDay)));
        self.Minutes(numberWithCommas(Shado.Date.Minutes(includeLastDay)));
        self.Seconds(numberWithCommas(Shado.Date.Seconds(includeLastDay)));
    };

    self.ToggleDateComparisons = function () {
        var state = validateDataIsNotUndefined();
        self.ShowDateComparisons(state);
        if (state) {
            self.CalculateDates();
        }
    };

    self.Reset = function () {
        self.ShowDateComparisons(false);
        self.StartDate('');
        self.EndDate('');
        self.Years('');
        self.Months('');
        self.Weeks('');
        self.Days('');
        self.Hours('');
        self.Minutes('');
        self.Seconds('');
    };
};

$(document).ready(function () {
    ko.applyBindings(new DateDiff());
});