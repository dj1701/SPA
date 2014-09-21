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

    var validateDataIsNotUndefined = function() {
        return !((self.StartDate() === '' || self.EndDate() === '') || (typeof self.StartDate() === "undefined" || typeof self.EndDate() === "undefined"));
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    self.CalculateDates = function () {
        var startDate = self.StartDate();
        var endDate = self.EndDate();
        var includeLastDay = self.IncludeLastDay();
        shado.date.setValues(startDate, endDate);
        self.Years(numberWithCommas(shado.date.compareYears()));
        self.Months(numberWithCommas(shado.date.compareMonths()));
        self.Weeks(numberWithCommas(shado.date.compareWeeks()));
        self.Days(numberWithCommas(shado.date.compareDays(includeLastDay)));
        self.Hours(numberWithCommas(shado.date.compareHours(includeLastDay)));
        self.Minutes(numberWithCommas(shado.date.compareMinutes(includeLastDay)));
        self.Seconds(numberWithCommas(shado.date.compareSeconds(includeLastDay)));
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