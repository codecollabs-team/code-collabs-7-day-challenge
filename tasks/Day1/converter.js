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
  ...Object.entries(values).map(([a, b]) => ({ [b]: a }))
);

const multiplier = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
};

const multiplierValues = Object.keys(multiplier).map((key) => multiplier[key]);

const checkIsInt = (num) => num % 1 === 0;

const stripEmptyValues = (arrayOfNumbers) =>
  arrayOfNumbers.filter((value) => value !== 0);

class Converter {
  toString = (numberPassedIn, words = []) => {
    if (isNaN(numberPassedIn)) {
      console.log(`sorry, ${numberPassedIn} is not a number`);
      return;
    }
    if (!isFinite(numberPassedIn)) {
      console.log("no infinites allowed!");
    }
    if (checkIsInt(numberPassedIn) === false) {
      console.log(
        `sorry, ${numberPassedIn} appear to be a floating point number, no decimals allowed`
      );
    }

    let remainder = 0;
    let word = "";

    if (numberPassedIn === 0) {
      if (words.length === 0) {
        console.log("zero");
        return;
      } else {
        console.log(words.toString().replace(",", " "));
        return;
      }
    }

    if (numberPassedIn < 20) {
      word = valuesFlipped[String(numberPassedIn)];
    } else if (numberPassedIn < 100) {
      remainder = numberPassedIn % 10;

      word = valuesFlipped[String(Math.floor(numberPassedIn / 10) * 10)];
      if (remainder) {
        word += ` ${valuesFlipped[String(remainder)]}`;
        remainder = 0;
      }
    } else if (numberPassedIn < 1000) {
      remainder = numberPassedIn % 100;
      word =
        valuesFlipped[String(Math.floor(numberPassedIn / 100))] + " hundred";
    }

    words = [...words, word];

    return this.toString(remainder, words);
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
    console.log(finalValue);
  }
}

/**
 * 
const c = new Converter();

for (let i = 0; i < 1000; i++) {
  c.toString(i);
}

// toInterger

c.toInterger("Five Thousand Six Hundred Thirty-two"); // 5632
c.toInterger("five hundred billion nine million twenty five thousand"); // 500009025000
c.toInterger("twenty five hundred"); // 2,500
c.toInterger("two million five hundred thousand"); // 2,500,000

 */

module.exports = {
  Converter,
};
