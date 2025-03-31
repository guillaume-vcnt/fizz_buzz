const fizzbuzz = (nb) => {
  if (nb % 3 == 0 && nb % 5 == 0) {
    return "FizzBuzz";
  }
  if (nb % 3 == 0) {
    return "Fizz";
  }
  if (nb % 5 == 0) {
    return "Buzz";
  } else return nb;
};

for (i = 1; i <= 50; i++) {
  console.log(fizzbuzz(i));
}
