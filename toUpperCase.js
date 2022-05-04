//String. prototype.toUpperCase

//Setting str to be equal to Hello World
str = 'Hello World';
//This is telling our string to be uppercase
upper = str.toUpperCase();
//Console.log will print HELLO WORLD to console
console.log(upper)

//Building toUpperCase() from scratch

//Declaring a function that takes a string
function toUpperCase(string){
    //setting up a variable named upper to an empty string
    upper = '';
    //for loop that will iterate through code
    for(i in str) {
        //charCodeAt() returns an integer between 0 and 65535
        //fromCharCode() method returns a string created from a specified sequence of UTF-16 code Units
        //Source (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
        //if statement that is saying charCodeAt(i) is greater than 96 or less than 123
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123){
            //upper is equal to charCodeAt(i) minus 32
            upper += String.fromCharCode(str.charCodeAt(i) - 32)
            // else statement if above is not true
        } else {
            //+= takes the values from the right of the operator and add its to the variable on the left
            upper += str[i]
        }
    }
    //Returning result, this is attached to our variable thats an empty string
    return upper
}
//Variable being set to a string
str = 'Hello World';
//console log our results which take our string and uppercase all letters
console.log(toUpperCase(str));