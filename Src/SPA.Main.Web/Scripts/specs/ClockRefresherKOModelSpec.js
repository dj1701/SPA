describe('Clock Refresher Data', function () {

    it('Should make a real ajax call response with time data response', function () {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var expectedResult = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
        var foo = new ClockRefresherKOModel(null);

        runs(
            AjaxHelper.get('/Main/Index', null, foo)
        );

        waits(2000);
        
        runs(function () {
            expect(foo.result).toBe(expectedResult);
        });

    });

    function pad(n) { return ("0" + n).slice(-2); }

});