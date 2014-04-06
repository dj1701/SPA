describe('Clock Refresher Data', function () {

    it('Should make a real ajax call response with time data response', function () {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var expectedResult = pad(hours) + ':' + pad(minutes);
        var foo = new ClockRefresher(null);

        runs(function() {
            AjaxHelper.get('/Index/Index', null, foo);
        });

        waitsFor(function () {
            return foo.result.length > 0;
        }, "Callback for result from ajax call not set", 6000);

        runs(function () {
            expect(foo.result).toBe(expectedResult);
        });

    });

    //Helper function
    function pad(n) { return ("0" + n).slice(-2); }

});