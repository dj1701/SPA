describe('Clock refresher fake ajax callback', function () {

    beforeEach(function () {
        jasmine.clock().install();
        AjaxHelper.get.isSpy = false;
    });

    afterEach(function () {
        jasmine.clock().uninstall();
       
    });

    it('Should receive a successful response', function () {
        var refreshRateInSeconds = 1;
        var clockRefresherCallbacks = {
            checkForInformation: jasmine.createSpy(),
            logError: jasmine.createSpy()
        };
        var clockRefresher = new ClockRefresher(null);

        spyOn(AjaxHelper, 'post').and.callFake(function (url, data, callback) {
            callback.checkForInformation();
        });

        clockRefresher.sendRequest(clockRefresherCallbacks);
        jasmine.clock().tick(refreshRateInSeconds * 1000);

        expect(clockRefresherCallbacks.checkForInformation.calls.count()).toBe(1);
        expect(AjaxHelper.post.calls.count()).toBe(1);
    });

    it('Should receive a error callback response', function () {
        var refreshRateInSeconds = 1;
        var clockRefresherCallbacks = {
            checkForInformation: jasmine.createSpy(),
            logError: jasmine.createSpy()
        };

        var clockRefresher = new ClockRefresher(null);

        spyOn(AjaxHelper, 'post').and.callFake(function (url, data, callback) {
            callback.logError();
        });

        clockRefresher.sendRequest(clockRefresherCallbacks);
        jasmine.clock().tick(refreshRateInSeconds * 1000);

        expect(clockRefresherCallbacks.logError.calls.count()).toBe(1);
        expect(AjaxHelper.post.calls.count()).toBe(1);
        expect(clockRefresherCallbacks.checkForInformation).not.toHaveBeenCalled();
    });

});