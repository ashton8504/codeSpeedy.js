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

//Building concat() from scratch

//Setting up a function named concat
//concat returns two or more joined strings
//A spread allows us to iterate as an array expression or string to be expanded
//If we only used str and not the spread results would just be Hello
function concat(...str) {
    //setting up an empty string named concat_str
    concat_str = ''
    //for loop and we are looking for i in str
    for (i in str) {
        //this is setting up concat_str to add or be equal to str[i]
        concat_str += str[i]
    }
    //this will return the result of concat_str
    return concat_str
}
//console logs to print to results console
console.log(concat('Hello', ', ', 'World'))
console.log(concat('Hello', ', ', 'super ', 'World'))