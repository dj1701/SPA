describe('Date Difference', function () {

    describe('Calculate difference in years with two dates', function () {
        it('Should return 16 years with dates between 01/01/1970 and 01/01/1986', function () {
            var firstDate = new Date(1970, 0, 1);
            var secondDate = new Date(1986, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(16);
        });

        it('Should return 23 years with dates between 31/12/1990 and 29/03/2014', function () {
            var firstDate = new Date(1990, 11, 31);
            var secondDate = new Date(2014, 2, 29);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(23);
        });

        it('Should return 23 years with dates between 01/01/1991 and 29/03/2014', function () {
            var firstDate = new Date(1991, 0, 1);
            var secondDate = new Date(2014, 2, 29);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(23);
        });

        it('Should return 23 years with dates between 30/10/1990 and 29/03/2014', function () {
            var firstDate = new Date(1990, 9, 30);
            var secondDate = new Date(2014, 2, 29);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(23);
        });

        it('Should return 16 years with dates between 30/04/1997 and 29/03/2014', function () {
            var firstDate = new Date(1997, 3, 30);
            var secondDate = new Date(2014, 2, 29);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 01/01/1986', function () {
            var firstDate = new Date(1969, 11, 31);
            var secondDate = new Date(1986, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 30/12/1986', function () {
            var firstDate = new Date(1969, 11, 31);
            var secondDate = new Date(1986, 11, 30);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(16);
        });

        it('Should return 50 years with dates between 30/03/1964 and 30/03/2014', function () {
            var firstDate = new Date(1964, 2, 30);
            var secondDate = new Date(2014, 2, 30);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(50);
        });

        it('Should return 24 years with dates between 30/11/1989 and 01/04/2014', function () {
            var firstDate = new Date(1989, 10, 30);
            var secondDate = new Date(2014, 3, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(24);
        });

        it('Should return 64 years with dates between 31/10/1949 and 01/05/2014', function () {
            var firstDate = new Date(1949, 9, 31);
            var secondDate = new Date(2014, 4, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(64);
        });

        it('Should return 1 year with dates between 01/01/2014 and 01/01/2015', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2015, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(1);
        });

        it('Should return 2 years with dates between 01/01/2013 and 01/01/2015', function () {
            var firstDate = new Date(2013, 0, 1);
            var secondDate = new Date(2015, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var years = diff.Years();

            expect(years).toBe(1);
        });
    });

    describe('Calculation difference in months with two dates', function () {
        it('Should return 12 months between 01/01/2014 and 01/01/2015', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2015, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(12);
        });

        it('Should return 24 months between 01/01/2013 and 01/01/2015', function () {
            var firstDate = new Date(2013, 0, 1);
            var secondDate = new Date(2015, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(24);
        });

        it('Should return 7 months between 01/06/2014 and 01/01/2015', function () {
            var firstDate = new Date(2014, 5, 1);
            var secondDate = new Date(2015, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(7);
        });

        it('Should return 6 months between 01/07/2014 and 01/01/2015', function () {
            var firstDate = new Date(2014, 6, 1);
            var secondDate = new Date(2015, 0, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(6);
        });

        it('Should return 203 months with dates between 31/12/1969 and 30/12/1986', function () {
            var firstDate = new Date(1969, 11, 31);
            var secondDate = new Date(1986, 11, 30);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(203);
        });

        it('Should return 773 months with dates between 31/10/1949 and 01/05/2014', function () {
            var firstDate = new Date(1949, 9, 31);
            var secondDate = new Date(2014, 4, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(773);
        });

        it('Should return 470 months with dates between 18/02/1975 and 21/04/2014', function () {
            var firstDate = new Date(1975, 1, 18);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(470);
        });

        it('Should return 531 months with dates between 01/01/1970 and 21/04/2014', function () {
            var firstDate = new Date(1970, 0, 1);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(531);
        });

        it('Should return 171 months with dates between 01/01/2000 and 21/04/2014', function () {
            var firstDate = new Date(2000, 0, 1);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Months();

            expect(months).toBe(171);
        });
    });

    describe('Calculation difference in days with two dates', function () {
        it('Should return 1 day with dates between 01/01/2014 and 02/01/2014 excluding last day', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 0, 2);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Days(false);

            expect(months).toBe(1);
        });

        it('Should return 2 days with dates between 01/01/2014 and 02/01/2014 including last day', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 0, 2);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Days(true);

            expect(months).toBe(2);
        });

        it('Should return 100 days with dates between 01/01/2014 and 10/04/2014 including last day', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 3, 10);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(true);

            expect(days).toBe(100);
        });

        it('Should return 99 days with dates between 01/01/2014 and 10/04/2014 excluding last day', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 3, 10);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(false);

            expect(days).toBe(99);
        });

        it('Should return 23473 days with dates between 31/12/1949 and 07/04/2014 excluding last day', function () {
            var firstDate = new Date(1949, 11, 31);
            var secondDate = new Date(2014, 3, 7);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(false);

            expect(days).toBe(23473);
        });

        it('Should return 23474 days with dates between 31/12/1949 and 07/04/2014 including last day', function () {
            var firstDate = new Date(1949, 11, 31);
            var secondDate = new Date(2014, 3, 7);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(true);

            expect(days).toBe(23474);
        });

        it('Should return 78 days with dates between 25/09/1988 and 12/12/1988 excluding last day', function () {
            var firstDate = new Date(1988, 8, 25);
            var secondDate = new Date(1988, 11, 12);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(false);

            expect(days).toBe(78);
        });

        it('Should return 79 days with dates between 25/09/1988 and 12/12/1988 including last day', function () {
            var firstDate = new Date(1988, 8, 25);
            var secondDate = new Date(1988, 11, 12);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(true);

            expect(days).toBe(79);
        });

        it('Should return 33 days with dates between 29/02/2012 and 01/04/2012 including last day', function () {
            var firstDate = new Date(2012, 1, 29);
            var secondDate = new Date(2012, 3, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(true);

            expect(days).toBe(33);
        });

        it('Should return 32 days with dates between 29/02/2014 and 01/04/2014 excluding last day', function () {
            var firstDate = new Date(2012, 1, 29);
            var secondDate = new Date(2012, 3, 1);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(false);

            expect(days).toBe(32);
        });

        it('Should return 1037 days with dates between 20/01/1961 and 22/11/1963 including last day', function () {
            var firstDate = new Date(1961, 0, 20);
            var secondDate = new Date(1963, 10, 22);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(true);

            expect(days).toBe(1037);
        });

        it('Should return 1036 days with dates between 20/01/1961 and 22/11/1963 excluding last day', function () {
            var firstDate = new Date(1961, 0, 20);
            var secondDate = new Date(1963, 10, 22);
            var diff = new DateDifference(firstDate, secondDate);
            var days = diff.Days(false);

            expect(days).toBe(1036);
        });
    });

    describe('Calculation difference in hours with two dates', function () {
        it('Should return 343368 hours with dates between 18/02/1975 and 21/04/2014 including last day', function () {
            var firstDate = new Date(1975, 1, 18);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(true);

            expect(hours).toBe(343368);
        });

        it('Should return 343344 hours with dates between 18/02/1975 and 21/04/2014 excluding last day', function () {
            var firstDate = new Date(1975, 1, 18);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(false);

            expect(hours).toBe(343344);
        });

        it('Should return 24 hours with dates between 01/01/2014 and 02/01/2014 excluding last day', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 0, 2);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(false);

            expect(hours).toBe(24);
        });

        it('Should return 48 hours with dates between 01/01/2014 and 02/01/2014 including last day', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 0, 2);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(true);

            expect(hours).toBe(48);
        });

        it('Should return 125376 hours with dates between 01/01/2000 and 21/04/2014 including last day', function () {
            var firstDate = new Date(2000, 0, 1);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(true);

            expect(hours).toBe(125376);
        });

        it('Should return 125352 hours with dates between 01/01/2000 and 21/04/2014 excluding last day', function () {
            var firstDate = new Date(2000, 0, 1);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(false);

            expect(hours).toBe(125352);
        });

        it('Should return 388344 hours with dates between 01/01/1970 and 21/04/2014 including last day', function () {
            var firstDate = new Date(1970, 0, 1);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(true);

            expect(hours).toBe(388344);
        });

        it('Should return 388322 hours with dates between 01/01/1970 and 21/04/2014 excluding last day', function () {
            var firstDate = new Date(1970, 0, 1);
            var secondDate = new Date(2014, 3, 21);
            var diff = new DateDifference(firstDate, secondDate);
            var hours = diff.Hours(false);

            expect(hours).toBe(388320);
        });
    });
});