var myNamespace = myNamespace || {};

myNamespace.Customer = function (firstName, lastName, phoneNumbers) {
    var self = this;
    self.Firstname = firstName;
    self.Lastname = lastName;
    self.PhoneNumbers = phoneNumbers || [];

    var getMobileNumber = function () {
        var mobileNumber = "No Mobile Number";

        for (var x = 0; x <= PhoneNumbers.length; x++) {
            if (PhoneNumbers[x].Type == "Mobile")
                mobileNumber = PhoneNumbers[x];

        }
        return mobileNumber;
    };
};

myNamespace.PhoneNumber = function (type, number) {
    var self = this;
    self.Type = type;
    self.Number = number;
};

