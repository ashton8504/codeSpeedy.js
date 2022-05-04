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

//String.prototype.concat()
//concat() method (function) concatenates (combines) the string we call to the arguments passed to it as a string
//This is setting string one to Hello
str1 = 'Hello'
//Setting string two to World
str2 = 'World'
//here we are combining str1 to concat with two parameters
//Result is Hello, World
console.log(str1.concat(', ', str2))
//Here we are combining str1 to contact and using 3 parameters when we log
//Result = Hello, Super World
console.log(str1.concat(', ', 'super ', str2))
