//1
function findLargest(){
    let int1 =parseInt(document.getElementById('int1').value);
    let int2 =parseInt(document.getElementById('int2').value);
    let largest =int1 > int2 ? int1: int2

    document.getElementById('question41').innerText="The Largest integer is:" + largest;
}
//3
function sortInt(){
    let num1=parseInt(document.getElementById('integer1').value);
    let num2=parseInt(document.getElementById('integer2').value);
    let num3=parseInt(document.getElementById('integer3').value);
    let sortedNumbers=[num1 , num2 , num3].sort(function(a, b){
        return a - b
    });
    alert("The Sorted Numbers are: " + sortedNumbers.join(' ,'));
}
//5
function largestNum(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let num3=parseInt(document.getElementById('num3').value);
    let num4=parseInt(document.getElementById('num4').value);
    let num5=parseInt(document.getElementById('num5').value);
     
    let largest=Math.max(num1,num2,num3,num4,num5);
    alert("The Largest number is:" + largest);
}
//12
function sumCalculate(){
    let sum=0;
    for(var i = 1 ; i < 1000 ; i++){
        if(i % 3 === 0 ||i % 5 === 0){
            sum+=i;
        }
    }
    document.getElementById('question44').innerText="The sum of multiples of 3 and 5 under 1000 is " + sum;
}
function patternCon(){
    let pattern ="";
    for (let i = 1; i <= 5; i++){
        for(let j = 1; j <= i; j++){
            pattern += "*";
        }
        pattern+="<br>";
    }
    document.getElementById('question44').innerHTML=pattern;
}