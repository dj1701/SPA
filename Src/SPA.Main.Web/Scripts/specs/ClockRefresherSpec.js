describe('Clock Refresher Data', function () {
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it('Should make a real ajax call response with time data response', function (done) {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var expectedResult = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
        var foo = new ClockRefresher(null);

        AjaxHelper.get('/Index', null, foo);
        setTimeout(function () {
            done();
            expect(foo.result).toBe(expectedResult);
        }, 7000);
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    //Helper function
    function pad(n) { return ("0" + n).slice(-2); }
});