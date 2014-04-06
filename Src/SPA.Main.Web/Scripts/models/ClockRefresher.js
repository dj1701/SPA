function ClockRefresher(url) {
    var self = this;
    self.url = url;
    self.result = '';

    self.sendRequest = function(callback) {
        AjaxHelper.post(url, null, callback);
    };

    self.checkForInformation = function(responseData) {
        self.result = responseData;
    };

    self.logError = function (responseData) {
        self.result = responseData;
    };
}