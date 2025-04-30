//FizzBuzz Classic

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

//FizzBuzz Advenced

let FizzBuzzObj = {
  fizzbuzz: [],
  fizz: [],
  buzz: [],
};

function fizzbuzz(number) {
  const isFizz = number % 3 === 0;
  const isBuzz = number % 5 === 0;

  if (isFizz && isBuzz) {
    FizzBuzzObj["fizzbuzz"].push(number);
    return;
  } else if (isFizz) {
    FizzBuzzObj["fizz"].push(number);
    return;
  } else if (isBuzz) {
    FizzBuzzObj["buzz"].push(number);
    return;
  }
  return number;
}

for (let i = 1; i <= 50; i++) {
  fizzbuzz(i);
}

console.log("\n === FizzBuzz Object === \n");
console.log("FizzBuzz :", FizzBuzzObj["fizzbuzz"]);
console.log("Fizz :", FizzBuzzObj["fizz"]);
console.log("Buzz :", FizzBuzzObj["buzz"]);
