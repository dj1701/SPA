function ClockRefresherKOModel(url) {
    var self = this;
    self.url = url;

    self.sendRequest = function(callbacks) {
        AjaxHelper.post(url, null, callbacks.checkForInformation);
    };
}