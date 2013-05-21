describe('Clock refresher', function () {

    beforeEach(function () {
        jasmine.Clock.installMock();
        jasmine.Clock.useMock();
        AjaxHelper.get.isSpy = false;
    });

    afterEach(function () {
        jasmine.Clock.reset();
        jasmine.Clock.uninstallMock();
    });

    it('Should receive a successful response', function () {
        var refreshRateInSeconds = 1;
        var clockRefresher = new ClockRefresherKOModel('url to get quotes from');

        spyOn(AjaxHelper, 'post').andCallFake(function (url, data, callback) {
            if (url !== 'url to get quotes from') {
                throw "Unexpected ajax to '" + url + "'";
            }
            callback();
        });
        var clockRefresherCallback = jasmine.createSpy();
        jasmine.start(clockRefresherCallback);
        jasmine.Clock.tick(refreshRateInSeconds * 1000);

        expect(clockRefresherCallback.callCount).toBe(1);
        expect(AjaxHelper.post.callCount).toBe(1);
    });
});