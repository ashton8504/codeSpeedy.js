//https://www.codespeedy.com/building-javascript-string-methods-from-scratch///
//Methods focused on: charAt()
/*Methods Focused on:
* charAt()
* concat()
* toUpperCase()
* toLowerCase()
* substring()
* */

//String.prototype.charAt()
//This is setting a string to hello world
str = 'Hello World';
//charAt() is a string object method(function) that takes an index as an argument
//We are saying (6) and since its 0 based index the answer is "w"
character = str.charAt(6);
console.log(character)

//Building charAt() from scratch
//this is variable and we are setting a string to hello world
str = 'Hello World';
//This is saying index is equal to position 6 on a 0 based index
index = 6;
//this is console logging str and putting index into an array to find the solution which is still W
console.log(str[index])

