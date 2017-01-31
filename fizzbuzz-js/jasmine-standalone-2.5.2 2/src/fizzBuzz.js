function fizzBuzz() {

};

  fizzBuzz.prototype.isDivisibleByThree = function(number) {
    return number % 3 == 0
  };

  fizzBuzz.prototype.isDivisibleByFive = function(number) {
    return number % 5 == 0
  };

  fizzBuzz.prototype.isDivisibleByFifteen = function(number) {
    return number % 15 == 0
  };

  fizzBuzz.prototype.output = function(number) {
    if (this.isDivisibleByFifteen(number)){
       return "Fizzbuzz";
    } else if (this.isDivisibleByFive(number)) {
       return "Buzz";
    } else if (this.isDivisibleByThree(number)) {
       return "Fizz";
    } else {
       return number;
    }
  };
