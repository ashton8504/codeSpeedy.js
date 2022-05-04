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

function concat(...str) {
    concat_str = ''
    for (i in str) {
        concat_str += str[i]
    }
    return concat_str
}
console.log(concat('Hello', ', ', 'World'))
console.log(concat('Hello', ', ', 'super ', 'World'))