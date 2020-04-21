const values = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
};

const multiplier = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
};

const multiplierValues = Object.keys(multiplier).map((key) => multiplier[key]);

const checkIsInt = (num) => num % 1 === 0;

const removeLeadingZeroes = (testString) => {
  while (testString.length > 0 && testString[0] === "0") {
    testString.shift();
  }
  return testString;
};

const stripEmptyValues = (arrayOfNumbers) =>
  arrayOfNumbers.filter((value) => value !== 0);

class Converter {
  static toString(toConvertToString) {
    // first check that it is an interger (like the challenge demands)
    if (isNaN(toConvertToString)) {
      console.log("Sorry, that input is not a number"); // if I'm still in typescript this will never run
      return;
    }
    if (!checkIsInt(toConvertToString)) {
      console.log(
        "Sorry, the challenge says you must not be a floating point value"
      );
      return;
    }

    // convert the interger into a string
    const valueAsString = String(toConvertToString).split("");

    // trim '0's from the beginning of the number to protect against '0000004324' causing issues
    const cleanedStringArray = removeLeadingZeroes(valueAsString); // if I'm still in typescript this will never run

    // check length of the string
    const digits = cleanedStringArray.length;
    console.log(`${digits} digit number`);

    // go along the array of characters against a map and convert them into relevant words

    // return the final string
    return;
  }

  static toInterger(inputNumber) {
    // first check that the input is a valid string
    if (typeof inputNumber !== "string") {
      console.log("Input must be a string");
      return;
    }

    // check the separate words against the map above
    const tokens = inputNumber.toLowerCase().split(/[^a-z]+/g); // anything that isn't inbetween a-z after setting everything to lowercase

    let runningValue = [];

    for (let index = 0; index < tokens.length; index++) {
      if (!!values[tokens[index]]) {
        runningValue[index] = values[tokens[index]];
      } else {
        // give errors if a word is not present in the legal map
        console.log(`${tokens[index]} may be a typo, please double check`);
      }
    }

    // eat right

    for (let i = 0; i < runningValue.length; i++) {
      if (!!runningValue[i + 1] && runningValue[i + 1] < runningValue[i]) {
        // is there a value to the right, and is it smaller than the current value?
        if (multiplierValues.indexOf(runningValue[i]) === -1) {
          runningValue[i] = runningValue[i + 1] + runningValue[i]; // eat the number to the right
          runningValue[i + 1] = 0; // then make sure to clean your plate
        }
      }
    }
    const summedArray = stripEmptyValues(runningValue);

    // eat left

    for (let i = 0; i < summedArray.length; i++) {
      if (
        !!summedArray[i - 1] && // there is a value before this one in the array
        summedArray[i - 1] < summedArray[i] // the value to the left is smaller than the current value
      ) {
        summedArray[i] = summedArray[i - 1] * summedArray[i]; // multiply the current value with the previous value
        summedArray[i - 1] = 0; // set the previous value to zero
      }
    }

    const multiples = stripEmptyValues(summedArray);

    // add all values together for final value

    const finalValue = multiples.reduce((a, b) => a + b, 0);
    console.log(finalValue);
  }
}

Converter.toString(1001340);

// toInterger

// Converter.toInterger("Five Thousand Six Hundred Thirty-two"); // 5632
// Converter.toInterger("five hundred billion nine million twenty five thousand"); // 500009025000
// Converter.toInterger("twenty five hundred"); // 2,500
// Converter.toInterger("two million five hundred thousand"); // 2,500,000

module.exports = {
  Converter,
};
