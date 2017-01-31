describe ('fizzBuzz', function(){

  var fizzbuzz = new fizzBuzz();

  describe('knows when a number is ', function(){

    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is not', function(){

    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });
    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(4)).toBe(false);
    });

  });

  describe('prints', function(){

    it('Fizz if divisble by 3', function(){
      expect(fizzbuzz.output(3)).toEqual('Fizz');
    });
    it('Buzz if divisble by 5', function(){
      expect(fizzbuzz.output(5)).toEqual('Buzz');
    });
    it('Fizzbuzz if divisible by 3 and 5', function() {
      expect(fizzbuzz.output(15)).toEqual('Fizzbuzz');
    });
    it('number if not divisble by 3 or 5', function(){
      expect(fizzbuzz.output(11)).toEqual(11);
    });

  });

});
