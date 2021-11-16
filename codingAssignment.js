
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

//let ages = [3, 9, 23, 64, 2, 8, 28, 93]

/*Programmatically subtract the value of the first element in the array from the value
 in the last element of the array(do not use numbers to reference the last element, 
find it programmatically, ages[7]–ages[0] is not allowed). Print the result to the console. */ 

 //console.log(ages[ages.length -1] - ages [0]);

 //Add a new age to your array and repeat the step above to ensure 
 //it is dynamic (works for arrays of different lengths).

 //ages.push(34);
 //document.write(ages);

 //console.log(ages[ages.length-1] - ages[0]);


 //Use a loop to iterate through the array and calculate the average age. 
 //Print the result to the console.


//let total = 0;


/*for(let i = 0; i <= ages.length-1; i++) {
    total += total + ages[i];
}

let avg = total/ages.length;
console.log(avg); */


//Create an array called names that contains the following values: 

//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

//let names = [‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’];

//Use a loop to iterate through the array and calculate 
//the average number of letters per name. Print the result to the console.

/*let total = 0;
let avg = 0;

for(let i = 0; i <= names.length - 1; i++) {
    total = total + names[i].length;
}

avg = total/names.length;
console.log(avg);

/* The [i] is doing double duty. It's both a counter and it ends being the number that 
   refers to an element in the names array.
   i 0 names[0]
   i 1 names[1]
   i 2 names[2] */



//functions

/* declare = definition
invoking = run it
parameters = variable inputs
arguments = are the actual values that get put in as inputs 
return = this is the output thats going to be returned back to whatever invokes the function, 
if you don't have a return, total will get said as the result, but you won't have anyway to access 
it because it has been built inside the function
global scope = variable that can be accessed anywhere */

/*function add(num1, num2){
    console.log(num1 + num2);
}

add(2, 2);

function multiply(num1, num2){
    let total = num1 * num2;
    return total;
}

multiply(2, 2);


/* Write a functionthat takes two parameters, word and n,as arguments 
and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’and 3, I would expect the function to 
return ‘HelloHelloHello’) */


/* function stringRepeat(word, n){
    let result = '';
    for(let i = 1; i <= 3; i++){
        result =+word;
    }
    return result;
}

stringRepeat('Hello', 3);

/* Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a numbermoneyInPocket, and returns true if it is hot outside and if 
moneyInPocket is greater than 10.50. */

/*function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside == true && moneyInPocket > 10.5)
        return true;
    else
        return false;
}//

8.	Write a function that takes two parameters, firstName and lastName, 
and returns a full name 
(the full name should be the first and the last name separated by a space). */

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// var fullname = fullName ("Taylor", "Nieman");

// console.log(fullname);

//9.	Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.






