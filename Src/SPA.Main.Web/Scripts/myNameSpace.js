var myNamespace = myNamespace || {};

myNamespace.Customer = function (firstName, lastName, phoneNumbers) {
    var self = this;
    self.Firstname = firstName;
    self.Lastname = lastName;
    self.PhoneNumbers = phoneNumbers || [];

    var getMobileNumber = function () {
        var mobileNumber = "No Mobile Number";
        for (var x = 0; x <= self.PhoneNumbers.length; x++) {
            if (self.PhoneNumbers[x].Type == "Mobile")
                mobileNumber = self.PhoneNumbers[x];

        }
        return mobileNumber;
    };
};

myNamespace.PhoneNumber = function (type, number) {
    this.Type = type;
    this.Number = number;
};

