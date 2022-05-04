//String.prototype.toLowerCase()

//Sets str to Hello World
str = 'Hello World'
//variable that is saying above variable is equal to lower case
lower = str.toLowerCase()
//console logs the result of lower and turns string into lowercase
console.log(lower)

//Building toLowerCase() from scratch

//Declaring a function that takes a string
function toLowerCase(str){
    //setting up a variable named upper to an empty string
    lower = ' ';
    //for loop that will iterate over code
    for(i in str){
        //charCodeAt() returns an integer between 0 and 65535
        //fromCharCode() method returns a string created from a specified sequence of UTF-16 code Units
        //Source (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
        //if statement that is saying charCodeAt(i) is greater than 64 or less than 91
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91){
            lower += String.fromCharCode(str.charCodeAt(i) + 32)
            //if our if statement is not true we will run an else statement
        } else {
            //+= takes the values from the right of the operator and adds it to the variable on the left
            lower += str[i]
        }
    }
    //Returning our result of lower
    return lower
}
//Variable being set to a string
str = 'Hello World';
//console logs our results and takes our string and makes it lowercase. 
console.log(toLowerCase(str))