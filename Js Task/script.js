// 48
function reverseString(){
    var inputString =document.getElementById('inputString').value;
    var reverseString="";
    for (var i=inputString.length -1; i>=0; i--){
        reverseString +=inputString[i];
    }
    document.getElementById('question26').innerText="Reverse String:" + reverseString;
}
//50
function capitalString(){
    var capString =document.getElementById('capString').value;
    var words=  capString.split("");
    for (var i = 0 ; i < words.length; i++){
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    var captilizedString = words.join("");
    document.getElementById('question27').innerText="Captilized String" + captilizedString;
}
//52
function converter(){
    var convertStr= document.getElementById('convertStr').value;
    var charcter=convertStr.split("");
    charcter.sort(function(a, b){
        return a.localeCompare(b, 'en' ,{sensitivity:'base'});
    });
    var sortedString=charcter.join("");

    document.getElementById('question28').innerText="Alphabaticatically sort string:"+ sortedString;
}
//54
function vowelsCounter() {
    // Get the input string from the text field
    var vowelsAdd = document.getElementById('VowelsAdd').value;

    // Convert the input string to lowercase to make the comparison case-insensitive
    vowelsAdd = vowelsAdd.toLowerCase();

    // Define an array of vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a variable to store the count of vowels
    var vowelsCount = 0;

    // Iterate through each character in the input string
    for (var i = 0; i < vowelsAdd.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(vowelsAdd[i])) {
            vowelsCount++;
        }
    }

    // Display the count of vowels in the result div
    document.getElementById('question29').innerText = "Number of Vowels: " + vowelsCount;
}
//60
function strCreate(){
    let createStr = document.getElementById('createStr').value;
     if (createStr.length<2){
        alert("input String must contain atleast two charcters");
        return;
     }
     var newString=createStr.substring(1,createStr.length -1);

     document.getElementById('question30').innerText="New string:" + newString;
}
//61
function strConcate(){
    var conString1= document.getElementById('conString1').value;
    var conString2= document.getElementById('conString2').value;
     
    var concatedString=conString1.substring(1)+ conString2.substring(1);
    document.getElementById('question31').innerText="concatenated String:" + concatedString;
}
//65
function stringEnding(){
    var endString=document.getElementById('endString').value;
    if(endString.length>=6 && endString.endsWith("script")){
        document.getElementById('question32').innerText="String ends with script.";
    }else{
        document.getElementById('question32').innerText="String does not end with script or has less then 6 letters";
    }
}
//69
function computeSum(){
    var arrayElements =[
            parseInt(document.getElementById('value1').value),
            parseInt(document.getElementById('value2').value),
            parseInt(document.getElementById('value3').value)
    ]
    var sum = arrayElements[0] + arrayElements[1] + arrayElements[2];
    document.getElementById('question33').innerText="Sum of Numbers:" + sum;
}
//73
function reverseArray(){
    var revArray =[
        parseInt(document.getElementById('element1').value),
        parseInt(document.getElementById('element2').value),
        parseInt(document.getElementById('element3').value)
    ]   
    revArray.reverse();

    document.getElementById('question34').innerText="Reversed Array:" + revArray.join(", ");
}
//77
function arrayChecker(){
    let arrayDigit =[
        parseInt(document.getElementById('digit1').value),
        parseInt(document.getElementById('digit2').value)
    ]
    if (arrayDigit.includes(1) || arrayDigit.includes(3)){
        document.getElementById('question35').innerText="Array contain 1 or 3";
    }else{
        document.getElementById('question35').innerText="Array does not contain 1 or 3";
    }
}
//78
function arrayFinder(){
    let arrayFinder =[
        parseInt(document.getElementById('digit3').value),
        parseInt(document.getElementById('digit4').value)
    ]
    if (!arrayFinder.includes(1) || !arrayFinder.includes(3)){
        document.getElementById('question36').innerText=" Array does not contain 1 or 3";
    }else{
        document.getElementById('question36').innerText="Array contain 1 or 3";
    }
}
//70
function rotNum(){
    var digiArray=[
        parseInt(document.getElementById('digi1').value),
        parseInt(document.getElementById('digi2').value),
        parseInt(document.getElementById('digi3').value)
    ]
    var temp = digiArray[0];
    digiArray[0] = digiArray[1];
    digiArray[1] = digiArray[2];
    digiArray[2] = temp;

    document.getElementById('question37').innerText="Rotated Array:" + digiArray.join(" ,")
}
//72
function checkFirst(){
    var firstElemnt =[
        parseInt(document.getElementById('val1').value),
        parseInt(document.getElementById('val2').value),
        parseInt(document.getElementById('val3').value)
    ]
    if(firstElemnt[0]===firstElemnt[2]){
        document.getElementById('question38').innerText="First and the last element are same."
    }else{
        document.getElementById('question38').innerText="First and the last element are not same."
    }
}
//75
function middleElement(){
    var array1 = [
        parseInt(document.getElementById('array1Element1').value),
        parseInt(document.getElementById('array1Element2').value),
        parseInt(document.getElementById('array1Element3').value)
    ]
    var array2 = [
        parseInt(document.getElementById('array2Element1').value),
        parseInt(document.getElementById('array2Element2').value),
        parseInt(document.getElementById('array2Element3').value)
    ]
    var middElement=[ array1[1] , array2[1] ];
    document.getElementById('question39').innerText="Middle Element"+ middElement.join(" , ");
}
//83
function getFileExtension(filename) {
    return filename.split('.').pop();
}

function getExtension() {
    const filename = document.getElementById('filename').value;
    const extension = getFileExtension(filename);
    document.getElementById('question40').innerText = "Extension: " + extension;
}