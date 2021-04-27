"use strict";

function goAge() {
  var age = prompt("Enter your age");

  if (age >= 0 && age < 12) {
    //опечатка? 0 в этом учавствует?
    alert("You child");
  }

  if (age >= 12 && age < 18) {
    alert("You teenager");
  }

  if (age >= 18 && age < 60) {
    alert("You adult");
  }

  if (age >= 60) {
    alert("You pensioner");
  }
}

function number() {
  var n = parseInt(prompt("Enter a number from 0 to 9"));
  var symbol = '';

  switch (n) {
    case 0:
      symbol = ")";
      break;

    case 1:
      symbol = "!";
      break;

    case 2:
      symbol = "@";
      break;

    case 3:
      symbol = "#";
      break;

    case 4:
      symbol = "$";
      break;

    case 5:
      symbol = "%";
      break;

    case 6:
      symbol = "^";
      break;

    case 7:
      symbol = "&";
      break;

    case 8:
      symbol = "*";
      break;

    case 9:
      symbol = "(";
      break;

    default:
      symbol = "Enter valid number";
      break;
  }

  alert(symbol);
}

function identicalNumbers() {
  var number = parseInt(prompt("Enter a three-digit number")),
      //123
  a = parseInt(number % 10),
      // получили 3
  b = parseInt(number % 100 / 10),
      // получили 2
  d = parseInt(number / 100); //получили 1

  console.log(a);
  console.log(b);
  console.log(d);

  if (a == b || a == d || b == d) {
    alert("yes");
  } else {
    alert("not");
  }
}

function thatYear() {
  var t_year = parseInt(prompt("Enter year"));

  if (t_year % 400 == 0 && t_year % 100 !== 0 || t_year % 4 == 0 && t_year % 100 !== 0) {
    alert("This is a leap year");
  } else {
    alert("This is not a leap year");
  }
}

function palindrome() {
  var number = prompt("Enter five-digit number");
  var numb_arr = number.split('');
  console.log(numb_arr);

  if (numb_arr[0] == numb_arr[4] && numb_arr[1] == numb_arr[3]) {
    alert("It is palindrome");
  } else {
    alert("It is not palindrome");
  }
}

function convertor() {
  var value = parseFloat(prompt("Enter the amount"));

  if (!isNaN(value)) {
    var course_usd_eur = 0.83;
    var course_usd_uah = 27.90;
    var course_usd_azn = 1.70;
    var currency = parseInt(prompt("Enter the number of the desired currency \r 1.EUR \r 2.UAH \r 3.AZN")),
        rez = 0;

    if (currency == 1) {
      rez = (value * course_usd_eur).toFixed(2);
      alert(rez + ' EUR');
    } else if (currency == 2) {
      rez = (value * course_usd_uah).toFixed(2);
      alert(rez + ' UAH');
    } else if (currency == 3) {
      rez = (value * course_usd_azn).toFixed(2);
      alert(rez + ' AZN');
    } else {
      alert("enter invalid data");
    }
  } else {
    alert("Enter the amount in numbers");
  }
}

function discount() {
  var value = parseFloat(prompt("Enter purchase amount"));

  if (!isNaN(value)) {
    var discount_3 = 0.03;
    var discount_5 = 0.05;
    var discount_7 = 0.07;
    var rez = 0;

    if (value >= 200 && value < 300) {
      rez = (value - value * discount_3).toFixed(2);
      alert("The discounted amount was " + rez);
    } else if (value >= 300 && value < 500) {
      rez = (value - value * discount_5).toFixed(2);
      alert("The discounted amount was " + rez);
    } else if (value >= 500) {
      rez = (value - value * discount_7).toFixed(2);
      alert("The discounted amount was " + rez);
    } else {
      alert("Purchase amount: " + value + " Discount amount 0");
    }
  } else {
    alert("Enter purchase amount in numbers");
  }
} // function geometricFigures(){
//     let perimeter = parseFloat(prompt("Enter the perimeter of the square")),
//         circle = parseFloat(prompt("Enter the circumference")),
//         sideSquare = perimeter/4;
//     if (sideSquare>circle) {
//         alert("The circle will fit into the square");
//     } else if(sideSquare<circle){
//         alert("The circle won't fit in the square");
//     } else {
//         alert("Enter corect data");
//     }
// }


function geometricFigures() {
  var perimeter = parseFloat(prompt("Enter the perimeter of the square")),
      circle = parseFloat(prompt("Enter the circumference")),
      sideSquare = perimeter / 4;
  sideSquare > circle ? alert("The circle will fit into the square") : alert("The circle won't fit in the square");
}

function question() {
  var q1 = prompt("Choose the correct answer. What is the expression 2+2= \r1.four \r2.two \r3.zero "),
      q2 = prompt("Choose the correct answer. What is the expression 4-2= \r1.four \r2.two \r3.zero "),
      q3 = prompt("Choose the correct answer. What is the expression 2*0= \r1.four \r2.two \r3.zero ");

  if (!isNaN(q1) && !isNaN(q2) && !isNaN(q2)) {
    var rez1 = 0,
        rez2 = 0,
        rez3 = 0,
        appraisal = 0;

    if (q1 == 1) {
      rez1 = 2;
    } else {
      rez1 = 0;
    }

    if (q2 == 2) {
      rez2 = 2;
    } else {
      rez2 = 0;
    }

    if (q3 == 3) {
      rez3 = 2;
    } else {
      rez3 = 0;
    }

    appraisal = rez1 + rez2 + rez3;
    alert("Your score is " + appraisal);
  } else {
    alert("Enter correct data");
  }
}

function nextDate() {
  var day = prompt("Enter the date in the format: day.month.year ");
  dateArr = day.split("."), dayNumber = parseInt(dateArr[0]), monthNumber = parseInt(dateArr[1]), yearNumber = parseInt(dateArr[2]);

  switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (dayNumber > 0 && dayNumber < 31) {
        dayNumber = dayNumber + 1;
        alert(dayNumber + "." + monthNumber + "." + yearNumber);
      } else if (dayNumber == 31) {
        dayNumber = 1;
        monthNumber = monthNumber + 1;
        alert(dayNumber + "." + monthNumber + "." + yearNumber);
      }

      break;

    case 2:
      //високосный
      if (yearNumber % 400 == 0 && t_year % 100 !== 0 || yearNumber % 4 == 0 && yearNumber % 100 !== 0) {
        if (dayNumber > 0 && dayNumber < 29) {
          dayNumber = dayNumber + 1;
          alert(dayNumber + "." + monthNumber + "." + yearNumber);
        } else if (dayNumber == 29) {
          dayNumber = 1;
          monthNumber = monthNumber + 1;
          alert(dayNumber + "." + monthNumber + "." + yearNumber);
        }
      } else {
        if (dayNumber > 0 && dayNumber < 28) {
          dayNumber = dayNumber + 1;
          alert(dayNumber + "." + monthNumber + "." + yearNumber);
        } else if (dayNumber == 28) {
          dayNumber = 1;
          monthNumber = monthNumber + 1;
          alert(dayNumber + "." + monthNumber + "." + yearNumber);
        }
      }

      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (dayNumber > 0 && dayNumber < 30) {
        dayNumber = dayNumber + 1;
        alert(dayNumber + "." + monthNumber + "." + yearNumber);
      } else if (dayNumber == 30) {
        dayNumber = 1;
        monthNumber = monthNumber + 1;
        alert(dayNumber + "." + monthNumber + "." + yearNumber);
      }

      break;

    case 12:
      if (dayNumber > 0 && dayNumber < 31) {
        dayNumber = dayNumber + 1;
        alert(dayNumber + "." + monthNumber + "." + yearNumber);
      } else if (dayNumber == 31) {
        dayNumber = 1;
        monthNumber = 1;
        yearNumber = yearNumber + 1;
        alert(dayNumber + "." + monthNumber + "." + yearNumber);
      }

      break;
  }
}