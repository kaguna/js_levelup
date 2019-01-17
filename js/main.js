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
