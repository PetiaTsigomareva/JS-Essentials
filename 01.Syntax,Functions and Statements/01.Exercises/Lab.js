//Task 1
function calculateSringsSum(str1,str2,str3) {
    let sumStringsLength=str1.length+str2.length+str3.length;
    let averagelength =Math.floor(sumStringsLength/3);
    console.log(sumStringsLength);
    console.log(averagelength);

}
calculateSringsSum('chocolate', 'ice cream', 'cake');
calculateSringsSum('pasta', '5', '22.3');

//Task 2

function calculate(num1,num2,operator) {
   let result;
    switch (operator){
        case '+': result=num1+num2;
        break;
        case '-': result=num1-num2;
            break;
        case '*': result=num1*num2;
            break;
        case '/': result=num1/num2;
            break;
        case '%': result=num1%num2;
            break;
        case '**': result=num1**num2;
            break;
    }

   console.log(result);
 //  console.log(eval(`${num1}${operator}${num2}`));

}

// calculate(5, 6, '+');
// calculate(3, 5.5, '*')
// calculate(4,2,'%')
// calculate(4,2,'**')

//Task 3

function sum(n,m) {
    let result=0;
    // let start=Number(n);
    // let end=Number(m);
    let start=+n;
    let end=+m;
    for (let i=start;i<=end;i++){
        result+=i;
    }
   return result;

}
let result=sum('1','5');
console.log(result);

let result1=sum('-8', '20');
console.log(result1);

//Task 4
function lagestNumber(num1,num2,num3) {
    let result;
    if(num1>num2 && num1>num3){
        result = num1;
    }

    if(num2>num1 && num2>num3){
        result = num2;
    }

    if(num3>num1 && num3>num2){
        result = num3;
    }

    console.log(`The largest number is ${result}.`);

}

lagestNumber(5, -3, 16);
lagestNumber(-3, -5, -22.5);

//Task 5
function checkType(input) {

   let type= typeof(input);
   if(type==='number'){
      let result=Math.pow(input,2)*Math.PI;
      console.log(result.toFixed(2));
   }
   else {
       console.log(`We can not calculate the circle area, because we receive a ${type}.`);
   }


}
checkType(5);
checkType('5');
checkType('test');
checkType({name:'Petia'});
checkType([5,'Test']);
//Task6
function printStarsRectangle(count=5) {
    for (let i=1;i<=count;i++){
        console.log('*'.repeat(count));
    }
}
printStarsRectangle(1);
 printStarsRectangle(2);
printStarsRectangle(5);
printStarsRectangle();

//Task 7
function printNumberOfTheDayOfWeek(input) {
    let result;
    switch (input){
        case 'Monday':result=1;break;
        case 'Tuesday':result=2;break;
        case 'Wednesday':result=3;break;
        case 'Thursday':result=4;break;
        case 'Friday':result=5;break;
        case 'Saturday':result=6;break;
        case 'Sunday':result=7;break;
        default: result='error';break;
    }

    return result;

}

let result = printNumberOfTheDayOfWeek("Monday");
console.log(result);

let result1 = printNumberOfTheDayOfWeek("Friday");
console.log(result1);

let result2 = printNumberOfTheDayOfWeek("Test");
console.log(result2);

//Task 8
function calculator(num1,num2,operator) {
    let calc=function (num1,num2,operator) {return operator(num1,num2)};
    let sum = function (num1,num2) {return num1+num2};
    let subtract = function(num1, num2) { return num1 - num2 };
    let multiply = function(num1, num2) { return num1 * num2};
    let divide = function(num1, num2) { return num1 / num2 };

    switch (operator){
        case '+': return calc(num1, num2, sum);
        case '-': return calc(num1, num2, subtract);
        case '*': return calc(num1, num2, multiply);
        case '/': return calc(num1, num2, divide);
    }

}


console.log(calculator(5,3,'+'));
console.log( calculator('5','3','+'));
console.log(calculator(9,3,'/'));
console.log(calculator(10,3,'/'));
console.log(calculator('9','3','/'));

//Task 9
/**
 *
 * @param {Array}inputs
 */
function aggregateElements(inputs) {
    aggregateFun(inputs,0,(a,b)=>a+b);
    aggregateFun(inputs,0,(a,b)=>a+1/b);
    aggregateFun(inputs,'',(a,b)=>a+b);

    function aggregateFun(arr,initVal,func) {
        for (let i = 0; i < arr.length; i++) {
           initVal = func(initVal,arr[i]);

        }
        console.log(initVal);

    }

}
aggregateElements([2, 4, 8, 16]);

//Task 10

function wordsUppercase(str) {
    let strUpper=str.toUpperCase();
    let words=extractWords();
    words=words.filter(w=>w!='');
    return words.join(', ')

    function extractWords() {
        return strUpper.split(/\W+/);

    }

}

console.log(wordsUppercase('hello'));
console.log(wordsUppercase('Hi, how are you?'));



