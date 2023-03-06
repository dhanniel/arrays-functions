/*Question 1
What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
*/
//Mutation in context of javaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas
//Non-mutation is returning a whole new array which has all the changes

//Mutator Methods are array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse(), array.shift(), array.sort() etc.
//Non-Mutator methods are array.concat(), array.includes(), array.indexOf(), array.slice(), array.toString() etc.


/* Question 2
Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
    Add ‘Kotlin’ to the end of the array
    Add ‘Java’ after ‘Ruby’
    Remove the first item in the array
    Add ’Scala’ and ‘Swift’ to the beginning of the array
    Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */

let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

//Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");

//Add ‘Java’ after ‘Ruby’
languages.splice(3,0,"Java");

//Remove the first item in the array
languages.shift();

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala","Swift");

//Replace ‘PHP’ with ‘Go’ and ‘Rust’

languages.splice(-3,1,"Go","Swift");
console.log(languages);

/* Question 3
What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}*/
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    	return fruit;
}

console.log(changeFruit(fruit)); // [ 'apple', 'mango', 'orange' ]

/* Question 4
Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
*/

function max(numbers) {
    let maxNum=numbers[0];
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum=numbers[i];
        }
    }
    return maxNum;
}
console.log(max([4, 5, 10, -12, 20, -100])); // 20

/* Question 5
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30]
*/

function valTimesIndex(numbers) {
    let output=[];
    for (let i=0; i<numbers.length; i++) {
        output.push(i*(numbers[i]));
    }
    return output
}
console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([5,10,15]));