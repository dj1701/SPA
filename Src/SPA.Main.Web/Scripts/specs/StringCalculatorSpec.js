describe('String Calculator', function () {
    it('Should return the sum of 0 if empty string is provided', function () {
        var numbers = "";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(0);
    });

    it('Should return the sum of 1 if "0,1" is provided', function () {
        var numbers = "0,1";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(1);
    });

    it('Should return the sum of 2 if "0,2" is provided', function () {
        var numbers = "0,2";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(2);
    });

    it('Should return the sum of 6 if "1,2,3" is provided', function () {
        var numbers = "1,2,3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(6);
    });

    it('Should return the sum of 6 with "1\n2,3" is provided', function () {
        var numbers = "1\n2,3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(6);
    });

    it('Should return the sum of 11 with "1\n2,3,0\n2,3" is provided', function () {
        var numbers = "1\n2,3,0\n2,3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(11);
    });

    it('Should return the sum of 16 with "1\n2,\n\n3,0\n2,3,5" is provided', function () {
        var numbers = "1\n2,\n\n3,0\n2,3,5";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(16);
    });

    it('Should return the sum of 16 with "1\n2,\n,,\n\n3,0\n2,3,5" is provided', function () {
        var numbers = "1\n2,\n,,\n\n3,0\n2,3,5";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(16);
    });

    it('Should return the sum of 11 with "\n1,,\n\n\n,\n\n3,0\n2,,5" is provided', function () {
        var numbers = "\n1,,\n\n\n,\n\n3,0\n2,,5";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(11);
    });

    it('Should return the sum of 3 with "//;\n1;2"', function () {
        var numbers = "//;\n1;2";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(3);
    });

    it('Should raise exception with message "negatives not allowed" when negitive number passed in', function () {
        var numbers = "-1";

        var instance = singleton.getInstance();

        expect(function () {
            instance.Add(numbers);
        }).toThrow(new Error("negatives not allowed"));
    });

    it('Should ignore 1001 in the range provided', function() {
        var numbers = "//;\n2,1001";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(2);
    });
    
    it('Should ignore 1000 in the range provided', function () {
        var numbers = "//;\n2,1000;3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(5);
    });
    
    it('Should not ignore 999 in the range provided', function () {
        var numbers = "//;\n2,999;3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(1004);
    });
    
    it('Should not ignore 99 in the range provided', function () {
        var numbers = "//;\n2,99;3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(104);
    });
    
    it('Should ignore 9999 and 1000 in the range provided', function () {
        var numbers = "//;\n2,99;9999;3,1000";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(104);
    });
});

describe('Singleton', function () {
    it('Should return same instance of method', function () {
        var instance1 = singleton.getInstance();
        var instance2 = singleton.getInstance();

        expect(instance1).toEqual(instance2);
    });
});