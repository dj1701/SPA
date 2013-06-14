function ClockRefresherKOModel(url) {
    var self = this;
    self.url = url;
    self.result = '';

    self.sendRequest = function(callback) {
        AjaxHelper.post(url, null, callback);
    };

    self.checkForInformation = function(responseData) {
        self.result = $.parseJSON(responseData);
    };
}