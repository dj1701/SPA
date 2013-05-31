function ClockRefresherKOModel(url) {
    var self = this;
    self.url = url;

    self.sendRequest = function(callback) {
        AjaxHelper.post(url, null, callback);
    };
}