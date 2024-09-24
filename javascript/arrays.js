// // Declaring an array
// let fruits = ['Apple', 'Banana', 'Cherry'];

// // Accessing array elements
// console.log(fruits[1]); // Output: Banana

// // Adding an element
// fruits.push('Date');
// console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// //Exercises for arrays

// //Q1: Create an array called numbers with the values 1 through 5.
// let numbers = [1,2,3,4,5,];

// //Q2: Access the third element in the numbers array.

// console.log(numbers[2]);

// // add the number 6 to the end of the numbers array.
// numbers.push(6);
// console.log(numbers);

// //OBJECTS

// //Examples
// // Declaring an object
// let person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// // Accessing object properties
// console.log(person.name); // Output: John
 
// // Adding a property
// person.job = 'Developer';
// console.log(person); // Output: { name: 'John', age: 30, city: 'New York', job: 'Developer' }

// // QUIZ
//  //Q1:Create an object called car with properties make, model, and  year.
//  let car ={
// make: 'volvo',
// model: 'V60',
// year: 2020
//  };
//  //Q2: Access the model property of the car object.
//  console.log(car.model);

//  //Q3:Add a property color to the car object
//  car.color = 'white';
//  console.log(car);

//  //loops statements 

//  // For loop
// for (let i = 0; i < 5; i++) {
//     console.log(i); // Output: 0, 1, 2, 3, 4
// }

// // While loop
// let j = 0;
// while (j < 5) {
//     console.log(j); // Output: 0, 1, 2, 3, 4
//     j++;
// }

// // Do While loop
// let k = 0;
// do {
//     console.log(k); // Output: 0, 1, 2, 3, 4
//     k++;
// } while (k < 5);

// //quiz
// //Q1:Use a for loop to print numbers 1 to 10.

// for(let p=0;10>=p; p++){
//     console.log(p);
    
// }
// //Q2:Use a while loop to print numbers 1 to 10.
// let q = 0;
// while(q<=10){
//     console.log(q);
   
//     }
//     //Q3:Create a loop that iterates through the fruits array and prints each fruit.
//     let Fruits = ['apple', 'banana', 'cherry'];
//     for (let fruit of fruits) {
//         console.log(fruit);
//         }
//         //conditional stetement

// // If statement
// let score = 85;
// if (score >= 90) {
//     console.log('A');
// } else if (score >= 80) {
//     console.log('B'); // Output: B
// } else {
//     console.log('C');
// }

// // Switch statement
// let day = 2;
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday'); // Output: Tuesday
//         break;
//     default:
//         console.log('Another day');
// }

// //Write an if-else statement that checks if a number is even or odd.
// let  number = 10;
// if(number<! 2){
//     console.log("it is an even number")

// }
// else{
//     console.log("it is an odd number")
//     }

    //Q2:Create a switch statement to print the name of a month based on a number (1 for January, 2 for February, etc.).
    let year = 6;
switch (year) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('february');
        break;
        case 3:
            console.log('septemder');
            break;
            case 4:
                console.log('April');
                break;
                
                case 5:
                console.log('May');
                break;
                
                case 6:
                console.log('June');
                break;
                
    default:
        console.log('Another year');
}
//tuesdays
// Pre-increment (++i)
let i =  5;
let preIncrementResult = ++i; // i is incremented before the value is assigned
console.log("preIncrementResult:", preIncrementResult); // Output: 6 (the value aft
// Tonny Oseko
// 12:05 PM
let str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // Access each character by index
}