class converter {
  static toString(num) {
    let singleNumbers = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    let doubleNumbers = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    let doubleTens = ["Twenty", "Thirty", "Fourty", "Fifty"];
    let lenNum = num.toString().length;
    if (lenNum == 1) {
      console.log(singleNumbers[parseInt(num)]);
    }
    if (lenNum == 2 && num.toString().charAt(0) == 1) {
      console.log(doubleNumbers[num.toString().charAt(1)]);
    }
    if (lenNum == 2 && num.toString().charAt(0) > 1) {
      switch (num.toString().charAt(0)) {
        case "2":
          console.log(
            doubleTens[0] +
              " " +
              singleNumbers[parseInt(num.toString().charAt(1))]
          );
          break;
        case "3":
          console.log(
            doubleTens[1] +
              " " +
              singleNumbers[parseInt(num.toString().charAt(1))]
          );
          break;
        case "4":
          console.log(
            doubleTens[2] +
              " " +
              singleNumbers[parseInt(num.toString().charAt(1))]
          );
          break;
        case "5":
          console.log(
            doubleTens[3] +
              " " +
              singleNumbers[parseInt(num.toString().charAt(1))]
          );
          break;
        default:
          null;
      }
    }
  }
  static toInteger(string) {
    let value = string.split("-");
    let singleNumbers = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    let doubleNumbers = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    if (value.length == 1) {
      if (string.charAt(0) !== string.charAt(0).toUpperCase()) {
        console.log("value must start with capital letter");
      } else {
        let sinNum = singleNumbers.indexOf(string);
        let douNum = doubleNumbers.indexOf(string);
        if (sinNum != -1) console.log(sinNum);
        if (douNum != -1) console.log("1" + douNum);
        else if (douNum == -1 && sinNum == -1)
          console.log(
            "value must be in this format(One) and your input should be correct"
          );
      }
    }
    if (value.length > 1) {
      let indexOfSinNum = singleNumbers.indexOf(value[1]);
      if (!indexOfSinNum) {
        console.log(
          "value must be in this format(Twenty-One) and your input should be correct"
        );
      } else {
        switch (value[0]) {
          case "Twenty":
            console.log("2" + indexOfSinNum);
            break;
          case "Thirty":
            console.log("3" + indexOfSinNum);
            break;
          case "Fourty":
            console.log("4" + indexOfSinNum);
            break;
          case "Fifty":
            console.log("5" + indexOfSinNum);
            break;
          default:
            console.log(
              "value must be in this format(Twenty-One) and your input must be correct "
            );
        }
      }
    }
  }
}
let c = converter;
console.log("example 1");
c.toString("47"); // prints Fifty Seven
c.toInteger("Fifty-Two"); // prints 52

console.log("\nexample 2");

c.toString("3"); // prints Three
c.toInteger("Nine"); // prints 9
