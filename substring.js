// String.prototype.substring()

// Sets string to Hello World
str = 'Hello World'
// These console logs attach str to substring and targets the parameters we want to return a value
console.log(str.substring(2, 9))
console.log(str.substring(3))

// Building substring() from scratch

// This is setting up our function with 3 parameters (arguments)
function substring(str, start, end = -1) {
    // if (statement) end is equal to -1
    // then its equal to str.length
    if (end == -1) {
        end = str.length
    }
    // Another if statement saying if start is greater than end
    // then we set up our parameters for our loop to iterate over
    if (start > end) {
        start = start + end
        end = start - end
        start = start - end
    }
    // sets a substring to an empty string for us to return once we return it
    substr = ''
    // For Loop to iterate over our code
    for (i = start; i < end; i++) {
        substr += str[i]
    }
    // Returns our substr results
    return substr
}
// String is setup to Hello World
str = 'Hello World'

//Console Logs to return our result
console.log(substring(str, 2, 9))
console.log(substring(str, 3)) 