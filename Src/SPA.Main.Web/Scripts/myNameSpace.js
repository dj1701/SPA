var myNamespace = myNamespace || {};

myNamespace.Customer = function (firstName, lastName, phoneNumbers) {
    this.Firstname = firstName;
    this.Lastname = lastName;
    this.PhoneNumbers = phoneNumbers || [];

    var getMobileNumber = function () {
        for (var x = 0; x <= PhoneNumbers.length; x++) {
            if (PhoneNumbers[x].Type == "Mobile")
                return PhoneNumbers[x];

        }
        return "No Mobile Number";
    };
};

myNamespace.PhoneNumber = function (type, number) {
    this.Type = type;
    this.Number = number;
};

