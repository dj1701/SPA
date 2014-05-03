function DateComparisions() {
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

    self.CalculateDates = function () {
        var startDate = parseDate(self.StartDate());
        var endDate = parseDate(self.EndDate());
        var includeLastDay = self.IncludeLastDay();
        var dateDiff = new DateComparison(startDate, endDate);
        self.Years(dateDiff.Years());
        self.Months(dateDiff.Months());
        self.Weeks(dateDiff.Weeks());
        self.Days(dateDiff.Days(includeLastDay));
        self.Hours(dateDiff.Hours(includeLastDay));
        self.Minutes(dateDiff.Minutes(includeLastDay));
        self.Seconds(dateDiff.Seconds(includeLastDay));
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
    ko.applyBindings(new DateComparisions());
});