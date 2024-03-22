// Question No 1:
var currentdate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayName = days[currentdate.getDay()];
var hours = currentdate.getHours();
var phar = (hours >= 12) ? "PM" : "AM";
hours = (hours % 12 == 0) ? 12 : hours % 12;
var minutes = currentdate.getMinutes();
var seconds = currentdate.getSeconds();
var datetime = "Today is: " + dayName + ".<br>Current time is: " + hours + " " + phar + " : " + minutes + " : " + seconds;

document.getElementById("datetime").innerHTML = datetime;

//Question No 2:
function windowPrint() {
  window.print();
}
// Question No 3
var side1 = 5;
var side2 = 6;
var side3 = 7;

var s = (side1 + side2 + side3) / 2;

var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

document.getElementById("result").textContent = "Area of the triangle: " + area.toFixed(2);

//Question No 5

function rotateStringRight(string) {
  let rotatedString = string;

  setInterval(() => {
    // that remove last character
    const lastChar = rotatedString.charAt(rotatedString.length - 1);
    rotatedString = lastChar + rotatedString.slice(0, -1);
    document.getElementById('rotatedString').innerText = rotatedString;
  }, 500); //  half second
}

const originalString = 'JavascriptTask ';
rotateStringRight(originalString);

//Question No 6:
document.getElementById("pressBtn").addEventListener("click", checkLeapYear);
function checkLeapYear() {
  const year = document.getElementById("Input").value;
  const isLeapYear = (year % 4 === 0);

  if (isLeapYear) {
    document.getElementById("leapyear").innerText = year + " is a leap year.";
  } else {
    document.getElementById("leapyear").innerText = year + " is not a leap year.";
  }
}

//Question No 7:
function isFirstJanuarySunday() {
  let checkofsunday = '';
  for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      checkofsunday = checkofsunday + `<br>1st January ${year} is a Sunday.`;
    }
  }
  return checkofsunday;
}
document.getElementById("checksunday").innerHTML = isFirstJanuarySunday();


//Question No 8:  
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('guess');

  if (guess === randomNumber) {
    result.textContent = 'Good Work!, It is Matched';
  } else {
    result.textContent = 'Oops !, Not matched';
  }
}

//Question No 8: 
function multiply() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);


  var multiplicationResult = num1 * num2;
  document.getElementById('task10').innerHTML = "Multiplication: " + multiplicationResult;

}

function divide() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  var divisionResult = num1 / num2;
  document.getElementById('task10').innerHTML = "Division: " + divisionResult;
}

function add() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  var addResult = num1 + num2;
  document.getElementById('task10').innerHTML = "Addition: " + addResult;
}

//Question No 9: 
var geturl = window.location.href;
document.getElementById("GetURL").innerHTML = geturl;

//Question No 10: 
var name = "Ahmad";
var value = 1;

this[name] = value;
document.getElementById("user-def-name").innerHTML = this.name;
console.log("Question 10")
console.log(this.name)

//Question No 11:
document.getElementById("quest11_btn").addEventListener('click', GetDifference);

function GetDifference() {
  var get_difference = document.getElementById("get_difference").value;
  if (get_difference <= 13) {
    document.getElementById("question11").innerHTML = get_difference + " is less then 13";
  }
  else {
    document.getElementById("question11").innerHTML = (get_difference - 13) * 2;
  }
}

//Question No 12:
function tripe() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  if (number1 === number2) {
    document.getElementById("question12").innerHTML = "Both numbers are equal so their triple is : " + 3 * (number1 + number2);
  } else {
    document.getElementById("question12").innerHTML = "Both numbers are not equal";
  }
}
document.getElementById("check_triple").addEventListener("click", tripe)

//Question No 13: 
function calculateDifference() {
  var number = parseInt(document.getElementById("numberInput").value);
  // Calculate the absolute difference
  var absoluteDifference = Math.abs(number - 19);
  if (number > 19) {
    absoluteDifference *= 3;
    document.getElementById("absolute").innerHTML = "The absolute difference is: " + absoluteDifference;
  }
  else if (number = 19) {
    document.getElementById("absolute").innerHTML = "Number is equal to 19";
  }
  else {
    document.getElementById("absolute").innerHTML = "Not greater than 19";
  }
}

//Question No 14: 
function checkFor50(num1, num2) {

  var res = num1 + num2;
  if (num1 === 50 || num2 === 50 || res === 50) {
    return true;
  } else {
    return false;
  }

}
console.log("numCheck")
console.log(checkFor50(20, 30));

//Question No 15:
function checkOppositeSigns() {
  const integer1 = parseInt(document.getElementById('integer1').value);
  const integer2 = parseInt(document.getElementById('integer2').value);

  if (!isNaN(integer1) && !isNaN(integer2)) {
    if ((integer1 >= 0 && integer2 < 0) || (integer1 < 0 && integer2 >= 0)) {
      document.getElementById('checkit').innerText = "One integer is positive and another one is negative.";
    } else {
      document.getElementById('checkit').innerText = "Integers do not have opposite signs.";
    }
  } else {
    document.getElementById('checkit').innerText = "Please enter valid integers.";
  }
}

//Question No 16:
function removeCharacter() {
  const inputString = document.getElementById('inputString').value;
  const position = parseInt(document.getElementById('position').value);

  if (isNaN(position) || position < 0 || position >= inputString.length) {
    document.getElementById('remove-char').innerText = "Invalid position";
    return;
  }

  // Remove the character at the specified position
  const modifiedStr = inputString.slice(0, position) + inputString.slice(position + 1);

  document.getElementById('remove-char').innerText = "Modified string: " + modifiedStr;
}
//Question No 17:
function checkMultiples() {
  const number = parseInt(document.getElementById('number').value);
  if (isNaN(number) || number <= 0) {
    document.getElementById('question17').innerText = "please Enter a valid number";
    return;
  }
  if (number % 3 === 0 || number % 7 === 0) {
    document.getElementById('question17').innerText = number + "is a multiple of 3 and 7";
  } else {
    document.getElementById('question17').innerText = number + "is not a multiple of 3 and 7";
  }
}
//Question No 18:
function checkString() {
  const inputString = document.getElementById('inputString').value;

  if (inputString.startsWith('Java')) {
    document.getElementById('question18').innerText = "The string starts with 'Java'.";
  } else {
    document.getElementById('question18').innerText = "The string does not start with 'Java'.";
  }
}
//Question No 19:
function findLarge() {
  const integ1 = parseInt(document.getElementById('integ1').value);
  const integ2 = parseInt(document.getElementById('integ2').value);
  const integ3 = parseInt(document.getElementById('integ3').value);

  let largest = integ1;

  if (integ2 > largest) {
    largest = integ2;
  }
  if (integ3 > largest) {
    largest = integ3;
  }
  document.getElementById('question19').innerText = "The Largest integer is:" + largest;
}
//Question No 20:
function findCloset() {
  const sat1 = document.getElementById('sat1').value;
  const sat2 = document.getElementById('sat2').value;
  //to find difference 
  const diff1 = Math.abs(100 - sat1);
  const diff2 = Math.abs(100 - sat2);
  if (diff1 < diff2) {
    document.getElementById('question20').innerText = "The closet value to 100 is:" + sat1;
  }
  if (diff2 < diff1) {
    document.getElementById('question20').innerText = "The closet value to 100 is:" + sat2;
  }

}
//Question No 21:
function lastInteger() {
  const lastInt1 = parseInt(document.getElementById('lastInt1').value);
  const lastInt2 = parseInt(document.getElementById('lastInt2').value);
  const lastInt3 = parseInt(document.getElementById('lastInt3').value);

  const lastDigit1 = lastInt1 % 10;
  const lastDigit2 = lastInt2 % 10;
  const lastDigit3 = lastInt3 % 10;

  if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
    document.getElementById('question21').innerText = "The last digit of all integer is same.";
  } else {
    document.getElementById('question21').innerText = "The last digit of all integer is not same.";
  }

}
//Question No 22:
function changeCase() {
  const stringCase = document.getElementById('stringCase').value;

  let resultString;

  if (stringCase.length < 3) {
    resultString = stringCase.toUpperCase();
  } else {
    resultString = stringCase.substring(0, 3).toLowerCase() + stringCase.substring(3);
  }
  document.getElementById('question22').innerText = "Result:" + resultString;
}
//Question No 23:
function sumOfInt() {
  const intt1 = parseInt(document.getElementById('intt1').value);
  const intt2 = parseInt(document.getElementById('intt2').value);
  const sum = intt1 + intt2;
  let result2;
  if (sum >= 50 && sum <= 80) {
    result2 = 65;
  } else {
    result2 = 85;
  }
  document.getElementById('question23').innerText = "Result:" + result2;
}
//Question No 24:
function isEight(){
  const digital1=parseInt(document.getElementById('digital1').value);
  const digital2=parseInt(document.getElementById('digital2').value);

  if(digital1 === 8 ||digital2 === 8 || digital1 + digital2 === 8 || Math.abs(digital1 - digital2) === 8){
    document.getElementById('question24').innerText="On of them is 8 or there sum/differnce is 8.";
  }else{
    document.getElementById('question24').innerText="Neither of the condition met.";
  }
}
//Question No 25:
function checkNum(){
  const snum1 =parseInt(document.getElementById('snum1').value);
  const snum2 =parseInt(document.getElementById('snum2').value);
  const snum3 =parseInt(document.getElementById('snum3').value);
  let result4;
  if(snum1 === snum2  &&  snum2 === snum3){
    result4 = 30;
  }else if(snum1 === snum2|| snum1 === snum3 || snum2 === snum3){
    result4 =40;
  }else{
    result4=20;
  }
  document.getElementById('question25').innerHTML="Result:" + result4;
}

/*
// Question no 1 of loop section
function findLargestInteger(num1 , num2){
    if (num1> num2){
        return num1 + "integer1 is the largest";
    }
    else if (num1 < num2){
        return num2 + "integer2 is the largest";
    } else{
        return "both integers are equal";
    }
}

var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));

var resultElement = document.getElementById("result2");
resultElement.textContent = findLargestInteger(num1, num2);

// Question no 2 of loop section

*/
