describe('Clock refresher fake ajax callback', function () {

    beforeEach(function () {
        jasmine.Clock.install();
        jasmine.Clock.uninstall();
        AjaxHelper.get.isSpy = false;
    });

    afterEach(function () {
        jasmine.Clock.reset();
        jasmine.Clock.uninstallMock();
    });

    it('Should receive a successful response', function () {
        var refreshRateInSeconds = 1;
        var clockRefresherCallbacks = {
            checkForInformation: jasmine.createSpy(),
            logError: jasmine.createSpy()
        };
        var clockRefresher = new ClockRefresher(null);

        spyOn(AjaxHelper, 'post').andCallFake(function (url, data, callback) {
            callback.checkForInformation();
        });

        clockRefresher.sendRequest(clockRefresherCallbacks);
        jasmine.Clock.tick(refreshRateInSeconds * 1000);

        expect(clockRefresherCallbacks.checkForInformation.callCount).toBe(1);
        expect(AjaxHelper.post.callCount).toBe(1);
    });

    it('Should receive a error callback response', function () {
        var refreshRateInSeconds = 1;
        var clockRefresherCallbacks = {
            checkForInformation: jasmine.createSpy(),
            logError: jasmine.createSpy()
        };

        var clockRefresher = new ClockRefresher(null);

        spyOn(AjaxHelper, 'post').andCallFake(function (url, data, callback) {
            callback.logError();
        });

        clockRefresher.sendRequest(clockRefresherCallbacks);
        jasmine.Clock.tick(refreshRateInSeconds * 1000);

        expect(clockRefresherCallbacks.logError.callCount).toBe(1);
        expect(AjaxHelper.post.callCount).toBe(1);
        expect(clockRefresherCallbacks.checkForInformation).not.toHaveBeenCalled();
    });

});