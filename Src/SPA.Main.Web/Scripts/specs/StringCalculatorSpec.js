describe('String Calculator', function () {
    //The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
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
});

describe('Singleton', function () {
    it('Should return same instance of method', function () {
        var instance1 = singleton.getInstance();
        var instance2 = singleton.getInstance();

        expect(instance1).toEqual(instance2);
    });
});