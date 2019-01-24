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


/*
COMPARISONS
    The result of comparison is a boolean.(Either TRUE or FALSE)
    Comparison Operators:
        Greater(>)/less(<) than
        Greater/less than or equals (>=) or (<=)
        Equals ( == )
        Not equals ( != )
*/
    let teamAPoints = 36
    let teamBPoints = 48
    console.log( teamAPoints > teamBPoints )// false.
    console.log( teamAPoints == teamBPoints )// false.
    console.log( teamAPoints < teamBPoints )// true.
    console.log( teamAPoints != teamBPoints )// true.
/*
    String Comparisons
        To determine whether the string is greater than the other, Javascript 
        uses "dictionary" or lexicographical order. Not a real dictionary but Unicode order.
        It compares letter by letter in a string.
        Cases also matters i.e. Letter A and a are not equal. Lowercase 'a' is greater than Upppercase A.
        This is because lowercase character has a greater index in the internal encoding table JavaScript uses
        (Unicode)  
        e.g.
*/
        console.log( 'A' > 'a' )//false
        console.log( 'blood' > 'blook' ) //false
/*
    Special cases
*/
    console.log( true == 1 )//true
    console.log( false == 0 )//false

    let firstNumber = 0
    console.log( Boolean(number) )//false

    let secondNumber = '0'
    console.log( Boolean(number) )//true

    console.log( firstNumber == secondNumber )//true
/*
    Strict equality(===)
        A regular equality check (==) has a problem. It cannot differentiate 1 from true or 0 from false.
        Regular equality converts operands to numbers.
        Strict equality operator checks the equality without type conversion.
        e.g.
*/
        console.log( 0 == false)// true
        console.log( '' == false)// true
        console.log( 1 == true)// true

        // Strict conversion
        console.log( 0 === false )//false
/*
    Comparison with null and undefined
        Strict equality - values are defferent
        e.g.
*/
        console.log( null === undefined ); // false
/*
        Regular equality - they are equal by a special rule "Sweet couple". They are equal to each other
            in sense of == but not any other value.  
*/
        console.log( null == undefined ); // true
/*
     For maths and other comparisons null/undefined are converted to numbers i.e.
     null becomes 0 and undefined becomes NaN.
     Undefined should not be compared to other values.
     e.g.
*/
    console.log( undefined > 0 ); // false 
    console.log( undefined < 0 ); // false
    console.log( undefined == 0 ); // false
/*
    Reasons behind the above:
        Comparison wit < or > return false coz undefined gets converted to NaN and NaN 
            is a special numeric value which returns false for all comparisons
        Equality check returns false coz undefined only equals null and no other value.
*/
/*
    Questions:
        1. why is:
            console.log("2" > "12") true?
        2. Incase we have a mixture of numbers and letters i.e.
            console.log( '2ac' > '2a3' ). Why does it result to true.

            Again, dictionary comparison, first char of "2" is greater than the first char of "1"
*/


/*
Interaction: alert, prompt, confirm
    alert: - shows a message and pauses script execution until the user presses "OK"
        e.g. 
*/
    alert('Some good message.')
/*
    Prompt: - It shows a modal window with a text message, an input and OK/CANCEL buttons.
    it has two arguements:-
        Title - text to show the visitor.
        default - [optional], shows the initial value of the text field.
    If you click cancel, it returns null.
    e.g.
*/
    let yearOfBirth = prompt('Which year were you born?', 1920);
    console.log(`You were born in ${yearOfBirth}`);
    // However the second part of the aptions is not optional in IE. If not provided
    //  it will insert the text undefined into the prompt.
/*
    Confirm: - It shows a modal window with a question and two buttons: OK and CANCEL.
        OK results to true
        Cancel results to false.
*/
    let removeData = confirm('Would you like to delete?')
    console.log(removeData)
/* 
    All these methods pause script execution and blocks the user from iteracting with 
    the rest of the page until the window has been dismissed.
    These look and position of the modals cannot be customized.
*/ 


/*

LOGICAL OPERATORS
    There three logical operators:  
    - OR (||)
        If any of its arguments are true, it returns true, otherwise it returns false.
        A chain of OR (||) returns the first truthy value or the last one if no such value is found
        There are four combinations:
*/
    console.log( true || true );   // true
    console.log( false || true );  // true
    console.log( true || false );  // true
    console.log( false || false ); // false
    console.log( null || 2 || undefined ); // the first truthy value is 2
    console.log( alert(1) || 2 || alert(3) ); //????? 1 then 2
    //e.g.
    let age = 32
    let hasIdCard = false
    if ( age > 30 || hasIdCard ) {
        console.log('You are an adult.')
    }

    let a; // undefined (falsy value)
    let b = null; // null (falsy value)
    let c = undefined; // undefined (falsy value)
    let d = 4; // number (NOT falsy)
    let e = 'five'; // assigment short circuits before reaching here
    let f = a || b || c || d || e;
    console.log(f); // the first truthy value is 4
/*
    - AND (&&)
       It returns true if both operands are truthy and false otherwise.
       It finds the first falsy value.
       Here are the four combinations:
*/
    console.log( true && true );   // true
    console.log( false && true );  // false
    console.log( true && false );  // false
    console.log( false && false ); // false
    console.log( 1 && null && 2 ); // the first falsy value is null
    console.log( alert(1) && alert(2) ); //??????? 1 then undefined
    //e.g.
    let age = 32
    let hasIdCard = true
    let inARelationship = true
    if ( age > 30 && hasIdCard && inARelationship ) {
        console.log('You should get married.')
    }
/*
    - NOT (!)
        Converts the operand to boolean type: true/false and returns the inverse value.
        The precedence of NOT ! is the highest of all logical operators, so it always executes 
            first, before && or ||.
        e.g.
*/
    console.log( !true ); // false
    console.log( !0 ); // true
    console.log( !!true ); // true
    console.log( !!0 ); // false


/*
LOOPS
    There are three types of loops:
        While loop
            The condition is checked before each iteration.
*/
        let minutes = 0
        while (minutes <= 7) { //when minutes becomes 7, the condition becomes falsy, and the loop stops
            console.log( minutes )
            minutes++
        }

/*
        for loop
            The condition is checked before each iteration
*/
        let minutes = 0;
        for (minutes = 0; minutes <= 7; minutes++) { // use an existing variable
        console.log(minutes); // 0, 1, 2, 3, 4, 5, 6, 7
        }
        console.log(minutes); // 3, visible, because declared outside of the loop


        for (let minutes = 7; minutes >= 0; minutes++) { // inline variable declaration
        console.log(minutes); // 7, 6, 5, 4, 3, 2, 1, 0
        }
        console.log(minutes); // 0, visible, because declared outside of the loop

        let minutes = 0;
        for (; minutes <= 7; minutes++) { // skipping parts
        console.log(minutes); // 0, 1, 2, 3, 4, 5, 6, 7
        }
        console.log(minutes); // 3, visible, because declared outside of the loop

/*
        do...while loop
            The condition is checked after each iteration.
*/
        let minutes = 7
        do { 
            console.log( minutes )
            minutes--
        } while (minutes >= 0) //when minutes becomes 0, the condition becomes falsy, and the loop stops


/*
SWITCH STATEMENT
    It can replace multiple if checks.
    It has one or more case blocks and an optional default.
    e.g.
*/
    switch (new Date().getDay()) { // this returns the integer of the day current day.
        case 0:
        day = "Sunday";
        console.log(day)
        break;
        case 1:
        day = "Monday";
        console.log(day)
        break;
        case 2:
        day = "Tuesday";
        console.log(day)
        break;
        case 3:
        day = "Wednesday";
        console.log(day)
        break;
        case 4:
        day = "Thursday";
        console.log(day)
        break;
        case 5:
        day = "Friday";
        console.log(day)
        break;
        case 6:
        day = "Saturday";
        console.log(day)
        default:
        day = "Invalid day";
        console.log(day)
    }

    // Equivalent if

    let dateNumber = new Date().getDay();
    let day;
    if ( dateNumber === 0 ){
        day = "Sunday";
        console.log(day)
    } else if (dateNumber === 1 ){
        day = "Monday";
        console.log(day)
    } else if (dateNumber === 2 ){
        day = "Tuesday";
        console.log(day)
    } else if (dateNumber === 3 ){
        day = "Wednesday";
        console.log(day)
    } else if (dateNumber === 4 ){
        day = "Thursday";
        console.log(day)
    } else if (dateNumber === 5 ){
        day = "Friday";
        console.log(day)
    } else if (dateNumber === 6 ){
        day = "Saturday";
        console.log(day)
    } else {
        day = "Invalid day";
        console.log(day)
    }
