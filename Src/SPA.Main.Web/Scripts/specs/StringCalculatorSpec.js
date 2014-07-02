describe('String Calculator', function () {
    it('Should return the sum of 0 if empty string is provided', function () {
        var numbers = "";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(0);
    });

    it('Should return the sum of 1 if 0,1 is provided', function () {
        var numbers = "0,1";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(1);
    });

    it('Should return the sum of 2 if 0,2 is provided', function () {
        var numbers = "0,2";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(2);
    });

    it('Should return the sum of 6 if 1,2,3 is provided', function () {
        var numbers = "1,2,3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(6);
    });

    it('Should return the sum of 6 with 1\n2,3 is provided', function() {
        var numbers = "1\n2,3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(6);
    });

    it('Should return the sum of 11 with 1\n2,3,0\n2,3 is provided', function () {
        var numbers = "1\n2,3,0\n2,3";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(11);
    });

    it('Should return the sum of 16 with 1\n2,\n\n3,0\n2,3,5 is provided', function () {
        var numbers = "1\n2,\n\n3,0\n2,3,5";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(16);
    });

    it('Should return the sum of 16 with 1\n2,\n,,\n\n3,0\n2,3,5 is provided', function () {
        var numbers = "1\n2,\n,,\n\n3,0\n2,3,5";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(16);
    });

    it('Should return the sum of 11 with \n1,,\n\n\n,\n\n3,0\n2,,5 is provided', function () {
        var numbers = "\n1,,\n\n\n,\n\n3,0\n2,,5";

        var instance = singleton.getInstance();

        var result = instance.Add(numbers);

        expect(result).toBe(11);
    });
});

describe('Singleton', function () {
    it('Should return same instance of method', function () {
        var instance1 = singleton.getInstance();
        var instance2 = singleton.getInstance();

        expect(instance1).toEqual(instance2);
    });
});