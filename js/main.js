/*
Code Structure in javascript
Statements, semicolons and comments are some of the 
buliding blocks js code. 
*/
alert(`This code implements statements 
        in the code structure.`);
// The statement above highlights some building blocks.

/*
Code Style:-Syntax
*/
function pow(x, n) { // space between parameters and curly bracket on the same line after space.
    let result = 1 //identation of 2 spaces
    let newNameForX = x // camelCase naming of variables.
 	let newNameForN = n
	
	for (let i = 0; i < n; i++) {// space after for/if/while & other loops and a semicolon is mandatory at the end.
	result *= x;
	}
	
	return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");
// An empty line between logical blocks
if (n < 0) {
    alert(`Power ${n} is not supported, please 
        enter an integer number, greater then 0`);// short lines(80 to 100 chars)
} else {//else without a line break.
	alert( pow(x,n) );//spaces around a nested call. 
}

/*
        Variable naming restrictions:
        1. The name must contain only letters, digits, or the symbols $ and _.
        2. The first character must not be a digit.
        NB: $ and _ can also be variable names.
            Cases in javascript also matters .e.g. number and Number are two different variables.
            Non-English letters are allowed but not recommended.
            No use of reserved words e.g. let, return etc as variable names.

    Constants are used for unchanging variables such as own date of birth etc. e.g. const myBirthday;
    Uppercase Constants are used as aliases for the difficult to remember values that are known before execution.
        e.g. const PI = 3.141592653589793

    var is the old-school variable declaration.


    Data types: 
        Number e.g. let result = 1. It can be either floating or integer.
        Special numeric values  are: 
                                Infinity; rep the mathematical infinity ∞ as a result of division by 0 e.g. */
console.log(5 / 0)
                               /* NaN; rep computational error i.e. as a result of incorrect or an undefined mathematical operation
                                    e.g. */ 
console.log("number"/3)
    /*
        String: it must be sorrounded by quotes
            e.g.*/
let name = "James Kariuki" 
let message = "Hello there"
let message = 'Hello there'
let message = `Hello ${name}` 

console.log(message)

/*
backticks allows embedding of variables and expressions by wrapping with ${}

        Boolean(logical type): it has only two values true and false. e.g. */
let isGreater = 4 > 1; 
console.log( isGreater ) 
        /* results to "yes"

        null: a special value that represents nothing, empty or value unknown. e.g. let gender = null;

        undefined: value is not assigned. e.g. */
let x;
console.log(x); /* the answer displayed is "undefined"

        objects: used to store collectios of data and more complex entities. e.g. hash, array

        typeof: it returns the type of the arguement. Used when one want to do a quick check or when we want 
                to process values of different types differently. either as an operator typeof x or as a function typeof(x).
                e.g. */
typeof "james" // is a string
typeof Math //is an object etc.

// Type conversions
/*
ToString:
    - happens when we need string form of a value.
*/
let yearOfBirth = 1982
yearOfBirth = String(yearOfBirth)
console.log(typeof(yearOfBirth))// results to string
/*

ToBoolean:
    - can be performed with a call to Boolean()
Rules: - values like 0, empty string, null, undefined and NaN results to false.
       - other values result to true.
examples:
*/
let number = 1
number = Boolean(number)
console.log(number)// results to true

let number = 0
number = Boolean(number)
console.log(number)// results to false

let number = ""
number = Boolean(number)
console.log(number)// results to false

let someSpaces = "   "
someSpaces = Boolean(someSpaces)
console.log(someSpaces)// results to true

// However string with 0 results to true
let number = "0"
number = Boolean(number)
console.log(number)// results to true

/*
ToNumber: it happens in mathematical functions and expressions automatically.
e.g. 
*/
console.log( "10" / "5" )
// Strings are converted to numbers 

let salary = "300,000"
console.log(typeof(salary))// results to string.
salary = Number(salary)
console.log(typeof(salary))// results to number

//if the string is not a valid number it results to NaN. e.g.
let fullName = "James Kariuki Kaguna"
fullName = Number(fullName)
console.log(fullName)// results to NaN

let poBox = "747tharaknithi"
poBox = Number(poBox)
console.log(poBox)// results to NaN

let nothing = null
nothing = Number(nothing)
console.log(nothing)//results to 0. However, when I assign a variable with null in JSFiddle, it opens 
                    // a new tab.?????????????

let something = true
something = Number(something)
console.log(something)// results to 1

let something = false
something = Number(something)
console.log(something)// results to 0


/*
OPERATORS
    Operand: - this is the quantity on which the operation is to be done.
    e.g.
*/
    console.log(12 - 4) // 12 and 4 are operands while (-) is the operator
/*
    Unary:- when an operator has a single operand
        e.g.
*/
    let number = 3
    number = - number
    console.log( number ) // the result is -3. The operand is 3 which is neagated by operator (-)
/*
    Binary: - when an operator has two operands.
    e.g.
*/
    let yearOfBirth = 1920
    let currentYear = 2019
    age = currentYear - yearOfBirth
    console.log( age ) // yearOfBirth and currentYear are the two operands.
/*
NB: (+) operator has other special usage beside summing numbers in javascript.
    It merges(concatenates) strings.
*/
    let firstName = "James"
    let secondName = "Kaguna"
    let fullName = firstName + secondName
    console.log(fullName)// this returns JamesKaguna.
    //However, to have a space between the two names, you can concatenate a space using a plus
    console.log( firstName+" "+secondName )// Prints James Kaguna.

    console.log(5 + 6 + "6") 
    // this sums the numbers to get 11 and merges with the string "6" to get 116

/*
    Numeric Conversion by unary +
    if the operand is not a number, the unary plus converts it into a number.
    It does the same thing as Number(...) but it's shorter.
    e.g.
*/
    console.log( +false) // result is 0
    console.log( +true) // result is 1
    console.log( +"" )// result 0

    let potatoes = "9"
    let tomatoes = "6"
    console.log( +potatoes + +tomatoes )// result is 15
/*
    Remaider % - this is the remainder after division
    e.g.
*/
    console.log( 10 % 2 )// the remainder is zero

/*
    Exponentiation ** - Multiplying a number by itself the number of times incated
    e.g.
*/
    console.log( 10 ** 3 )// 10 * 10 * 10 = 1000
    console.log( 27 ** (1/3) )// cuberoot of 27 = 3

/*
    Increment/Decrement - increasing or decreasing a number by one which is commonly used.

    Increment ++
*/
    let hours = 5;
    hours++;// same as hours = hours + 1
    console.log( hours )// result is 6
/*
    Decrement --
*/
    let hours = 5;
    hours--;// same as hours = hours - 1
    console.log( hours )// result is 4
/*
    SOME EXPLANATIONS REQUIRED HERE.
    We need the prefix if we'd like to increase the value and immediately use the result of the operator.
*/
    let counter = 0
    console.log( ++counter )// the result 1
/*
    SOME EXPLANATIONS REQUIRED HERE.
    We need the postfix if we'd like to increment the value but use the previous value.
*/
    let counter = 0
    console.log( counter++ )// the result 0
    
/*
    Comma: - It allows one to evaluate several expressions dividing them with a comma.
        e.g.
*/
    console.log( 10 * 8, 5 + 3, 20 - 11)// this results to 9
    // All the other operations are thrown away and the last one is taken. 
    // It is one of the most rarest and most unusual operators used to write shorter code.
    // Such tricks are used in many JavaScript frameworks.
