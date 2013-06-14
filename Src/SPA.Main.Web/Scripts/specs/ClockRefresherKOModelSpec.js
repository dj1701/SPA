describe('Clock Refresher Data', function () {

    it('Should make a real ajax call response with time data response', function () {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds() + 1;
        var expectedResult = '[{"' + hours + '","' + minutes + '","' + seconds + '"}]';
        var foo = new ClockRefresherKOModel(null);

        AjaxHelper.post('/Main/Index', {}, foo);

        expect(AjaxHelper.post.callCount).toBe(1);
        expect(foo.result).toBe(expectedResult);
    });

});