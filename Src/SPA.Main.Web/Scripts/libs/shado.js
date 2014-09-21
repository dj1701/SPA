﻿var shado = {
    date: {
        createDate: function (str, useUsDateFormat) {
            var dateString = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
            return useUsDateFormat ? new Date(dateString[3], dateString[1] - 1, dateString[2]) : new Date(dateString[3], dateString[2] - 1, dateString[1]);
        },

        setValues: function (firstDate, secondDate, useUsDateFormat) {
            var self = this;

            if (Object.prototype.toString.call(firstDate) !== "[object String]" || Object.prototype.toString.call(secondDate) !== "[object String]") {
                throw new Error('Parameters are not of type string');
            }

            self.firstDate = self.createDate(firstDate, useUsDateFormat);
            self.secondDate = self.createDate(secondDate, useUsDateFormat);
            self.oneDay = 1000 * 60 * 60 * 24;

            self.getDifference = function () {
                return self.secondDate - self.firstDate;
            };
        },

        compareYears: function () {
            var difference = this.getDifference();
            return Math.floor((difference / this.oneDay) % 1.5 == 1 ? (difference / this.oneDay) / 365.24 : (difference / this.oneDay) / 365);
        },

        compareMonths: function () {
            var difference = this.getDifference();
            return Math.floor(((difference / this.oneDay) / 365 * 12) % 1 == 0 ? ((difference / this.oneDay) / 365 * 12) : ((difference / this.oneDay) / 365.24 * 12));
        },

        compareWeeks: function () {
            var difference = this.getDifference();
            return Math.round(difference / this.oneDay) / 7 | 0;
        },

        compareDays: function (includeLastDay) {
            var difference = this.getDifference();
            return Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0);
        },

        compareHours: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.floor(difference / this.oneDay) * 24) + (includeLastDay ? 24 : 0);
        },

        compareMinutes: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.floor(difference / this.oneDay) * 24 + (includeLastDay ? 24 : 0)) * 60;
        },

        compareSeconds: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0)) * 86400;
        }
    }
};