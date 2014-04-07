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
    });

    describe('Calculation difference in days with two dates', function () {
        it('Should return 1 day with dates between 01/01/2014 and 02/01/2014', function () {
            var firstDate = new Date(2014, 0, 1);
            var secondDate = new Date(2014, 0, 2);
            var diff = new DateDifference(firstDate, secondDate);
            var months = diff.Days(false);

            expect(months).toBe(1);
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
    });
});