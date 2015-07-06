describe('Javabuzz', function() {
  // method statements go here
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('isDivisibleByThree', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('isDivisibleByFive', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('isDivisibleByFifteen', function() {

      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);

    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by three', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by five', function() {

      expect (javabuzz.isDivisibleByFive(7)).toBe(false);

    });

  });

});
