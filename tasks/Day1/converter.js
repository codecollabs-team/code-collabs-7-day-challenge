const values = {
  zero: 0,
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

const valuesFlipped = Object.assign(
  {},
  ...Object.entries(values).map(([key, value]) => ({ [value]: key }))
);

const multiplier = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
}; // the more '-illions' you add, the higher the limit we have

const multiplierFlipped = Object.assign(
  {},
  ...Object.entries(multiplier).map(([keys, value]) => ({ [value]: keys }))
);

const multiplierValues = Object.keys(multiplier).map((key) => multiplier[key]);

const checkIsInt = (num) => num % 1 === 0;

const stripEmptyValues = (arrayOfNumbers) =>
  arrayOfNumbers.filter((value) => value !== 0);

class Converter {
  runRecursiveCheck = (numberPassedIn, remainder, currentWord) => {
    multiplierValues.map((value, i) => {
      if (i > 1) {
        if (
          multiplierValues[i - 1] < numberPassedIn &&
          numberPassedIn < multiplierValues[i]
        ) {
          remainder = numberPassedIn % multiplierValues[i - 1];
          currentWord = `${this.toString(
            Math.floor(numberPassedIn / multiplierValues[i - 1])
          )} ${String(multiplierFlipped[multiplierValues[i - 1]])}`;
        }
      }
    });
    return { remainder, currentWord };
  };

  toString = (numberPassedIn, previousWords = []) => {
    if (isNaN(numberPassedIn)) {
      console.log(`sorry, ${numberPassedIn} is not a number`);
      return;
    }
    if (checkIsInt(numberPassedIn) === false) {
      console.log(
        `sorry, ${numberPassedIn} appear to be a floating point number, no decimals allowed`
      );
    }

    let remainder = 0;
    let currentWord = "";

    if (numberPassedIn === 0) {
      if (previousWords.length === 0) {
        return "zero";
      } else {
        return previousWords.toString().replace(/,/g, " ");
      }
    }

    if (numberPassedIn < 20) {
      currentWord = valuesFlipped[String(numberPassedIn)];
    } else if (numberPassedIn < 100) {
      remainder = numberPassedIn % 10;

      currentWord = valuesFlipped[String(Math.floor(numberPassedIn / 10) * 10)];
      if (remainder) {
        currentWord += ` ${valuesFlipped[String(remainder)]}`;
        remainder = 0;
      }
    } else if (numberPassedIn < 1000) {
      // less than thousand
      remainder = numberPassedIn % 100;
      currentWord = `${
        valuesFlipped[String(Math.floor(numberPassedIn / 100))]
      } hundred`;
    }
    const recursiveCheck = this.runRecursiveCheck(
      numberPassedIn,
      remainder,
      currentWord
    );
    remainder = recursiveCheck.remainder;
    currentWord = recursiveCheck.currentWord;

    previousWords = [...previousWords, currentWord];

    return this.toString(remainder, previousWords);
  };

  toInterger(inputNumberAsWords) {
    // first check that the input is a valid string
    if (typeof inputNumberAsWords !== "string") {
      console.log("Input must be a string");
      return;
    }

    // check the separate words against the map above
    const tokens = inputNumberAsWords.toLowerCase().split(/[^a-z]+/g); // anything that isn't inbetween a-z after setting everything to lowercase

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
    return finalValue;
  }
}

const c = new Converter();

console.log(c.toString(2345643657));
console.log(
  c.toInterger("five hundred billion nine million twenty five thousand")
);

module.exports = {
  Converter,
};
