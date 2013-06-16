var AjaxHelper = AjaxHelper || {};

AjaxHelper.post = function (url, data, callback) {

    var encodedUri = encodeURI(url);
    $.ajax({
        url: encodedUri,
        type: 'POST',
        data: data,
        async: false,
        success: function (responseData) {
            if (callback) {
                callback.checkForInformation(responseData);
            }
        },
        error: function (responseData) {
            if (callback) {
                callback.logError(responseData);
            }
        }
    });
};


AjaxHelper.get = function (url, data, callback) {

    var encodedUri = encodeURI(url);

    $.ajax({
        url: encodedUri,
        type: 'GET',
        data: data,
        async: true,
        success: function (responseData) {
            if (callback) {
                callback.checkForInformation(responseData);
            }
        },
        error: function (responseData) {
            if (callback) {
                callback.logError(responseData);
            }
        }
    });
};