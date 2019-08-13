// //Task 1
// function calculateFruitMoney(fruit,weightInGrams,pricePerKilogram) {
//     let weight=weightInGrams/1000;
//     let money=(weight)*pricePerKilogram;
//     console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
//
// }
//
// calculateFruitMoney('orange', 2500, 1.80);
// calculateFruitMoney('apple', 1563, 2.35);
//
// //Task 2
// function greatestCommonDivisor(x,y) {
//     if ((typeof x === 'number') && (typeof y === 'number')) {
//         if ((x > 0 && Number.isInteger(x)) && (y > 0 && Number.isInteger(y))) {
//             while (y) {
//                 var t = y;
//                 y = x % y;
//                 x = t;
//             }
//             return x;
//         }
//     }
//
//
// }
// console.log(greatestCommonDivisor(15, 5));
// console.log(greatestCommonDivisor(2154, 458));
// console.log(greatestCommonDivisor(-15, 5));
// console.log(greatestCommonDivisor(15.2, 5));
// console.log(greatestCommonDivisor('15', 5));
//
// //Task 3
// function checkDigitsOfNumber(num) {
//     if(typeof(num) === 'number') {
//         let arr = Array.from(num.toString());
//         let sum = 0;
//         let isSame = true;
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 1; j < arr.length; j++) {
//                 if (arr[i] !== arr[j]) {
//                     isSame = false;
//                     //return;
//                 }
//             }
//             sum += +arr[i];
//         }
//         console.log(isSame);
//         console.log(sum);
//     }
//
// }
//
// checkDigitsOfNumber(2222);
// checkDigitsOfNumber('2222');
// checkDigitsOfNumber(1234);

//Task 4
// function calculateTimeToWalk(steps,footPrintLength,speed) {
//     let walksInM=steps*footPrintLength;
//     let walksInKm=walksInM/1000;
//     let restTime=parseInt(walksInM/500);
//
//     let timeWalkFromHomeToUniversity=walksInKm / speed * 3600 + restTime * 60;
//
//     let hours=parseInt(timeWalkFromHomeToUniversity / 3600);
//     timeWalkFromHomeToUniversity-=hours*3600;
//     let minutes=parseInt(timeWalkFromHomeToUniversity / 60);
//     let seconds=(timeWalkFromHomeToUniversity%60).toFixed(0);
//
//     formatOutput(hours, minutes, seconds);
//
//     function formatOutput(hours, minutes, seconds) {
//         if (hours < 10) {
//             hours = '0' + hours;
//         }
//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }
//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }
//         console.log(`${hours}:${minutes}:${seconds}`);
//
//
//     }
//
// }
// calculateTimeToWalk(4000, 0.60, 5);
// calculateTimeToWalk(2564, 0.70, 5.5);
//Task 5
/**
 *
 * @param {Array}properties
 */
// function createProductsCaloriesObject(properties) {
//     let productsCalories={};
//    for (let i=0;i<properties.length-1;i++){
//        if(i%2==0){
//            productsCalories[`${properties[i]}`] = +properties[i+1];
//        }
//    }
//    console.log(productsCalories);
//
// }
// createProductsCaloriesObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
// createProductsCaloriesObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);

//Task 6
// function checkSpeedLimit(arr) {
//     let result;
//     let overSpeedLimit = 0;
//     let speed = +arr[0];
//     let area = arr[1];
//     let checkOverSpeed = function (speed) {
//         if (speed > 0 && speed <= 20) {
//             result = 'speeding';
//         } else if (speed > 20 && speed <= 40) {
//             result = 'excessive speeding';
//         } else {
//             result = 'reckless driving';
//         }
//
//         console.log(result);
//     }
//     switch (area) {
//
//         case 'motorway':
//             if (speed > 130) {
//                 overSpeedLimit = speed - 130;
//                 checkOverSpeed(overSpeedLimit);
//             }
//             break;
//
//
//         case 'interstate':
//             if (speed > 90) {
//                 overSpeedLimit = speed - 90;
//                 checkOverSpeed(overSpeedLimit);
//
//             }
//             break;
//
//
//         case 'city':
//             if (speed > 50) {
//                 overSpeedLimit = speed - 50;
//                 checkOverSpeed(overSpeedLimit);
//
//             }
//             break;
//
//         case 'residential':
//             if (speed > 20) {
//                 overSpeedLimit = speed - 20;
//                 checkOverSpeed(overSpeedLimit);
//             }
//             break;
//
//     }
//
// }
//
// checkSpeedLimit([40, 'city']);
// checkSpeedLimit([120, 'interstate'])
// checkSpeedLimit([21, 'residential'])

//Task 7
/**
 *
 * @param {Array}inputs
 */
// function cookingByNumbers(inputs) {
//     let startingPoint=+inputs[0];
//     for (let i = 1; i <= inputs.length-1; i++) {
//         const input = inputs[i];
//         switch (input){
//             case 'chop':startingPoint=startingPoint/2;break;
//             case 'dice':startingPoint=Math.sqrt(startingPoint);break;
//             case 'spice':startingPoint=startingPoint+1;break;
//             case 'bake':startingPoint=startingPoint*3;break;
//             case 'fillet':startingPoint=startingPoint-(startingPoint*0.20);break;
//         }
//         console.log(startingPoint);
//     }
//
// }
// cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
// console.log("");
// cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

//Task 8
/**
 *
 * @param {Array}points
 */
function validityChecker(points) {
    let firstAndStartPointsArr = [points[0], points[1], 0, 0];
    let secondAndStartPointsArr = [points[2], points[3], 0, 0];
    let distance = function (arr) {
        let x1 = arr[0];
        let y1 = arr[1];
        let x2 = arr[2];
        let y2 = arr[3];
        let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        return result;
    }

    function checkDistance(distance, pointsArr) {
        if (Number.isInteger(distance)) {
            console.log(`{${pointsArr[0]}, ${pointsArr[1]}} to {${pointsArr[2]}, ${pointsArr[3]}} is valid`);
        } else {
            console.log(`{${pointsArr[0]}, ${pointsArr[1]}} to {${pointsArr[2]}, ${pointsArr[3]}} is invalid`);
        }

    }

    checkDistance(distance(firstAndStartPointsArr), firstAndStartPointsArr);
    checkDistance(distance(secondAndStartPointsArr), secondAndStartPointsArr);
    checkDistance(distance(points), points);
}

validityChecker([3, 0, 0, 4]);
console.log('');
validityChecker([2, 1, 1, 1]);