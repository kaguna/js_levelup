/*
DATATYPES
    JavaScript allows us to work with primitives (strings, numbers, etc.) 
        as if they were objects.
    Distinctions between primitives and objects:
        - Primitive:
            1. Is a value of a primitive type.
            2. 6 primitive types: string, number, boolean, symbol, null and undefined
        - Object:
            1. Is capable of storing multiple values as properties.
            2. Can be created with {} also functions are objects.

    A primitive as an object:
        Primitives except null and undefined provide many helpful methods.
        e.g.
*/
    let myName = "James Kariuki Kaguna";
    console.log(myName.toUpperCase())
/*
    The language allows access to methods and properties of strings, numbers, booleans and symbols.
    When this happens, a special “object wrapper” is created that provides the extra functionality, and then is destroyed.
    These object wrappers are called: String, Number, Boolean and Symbol. Thus, they provide different sets of methods.

    other examples:
        - toFixed(x) - rounds the number to the given precision x
*/

/*
    Numbers
        All numbers in JavaScript are stored in 64-bit format IEEE-754, aka “double precision”.
        In javascript, we shorten a number with many zeroes with letter e to specify the number of zeros i.e.  
*/
    let fakeMoney = 17.3e9; // for large numbers. 
    console.log(fakeMoney);  // 7.3 billions (17, 300, 000, 000)

    let microSecond = 0.000001; // for small numbers.
    let ms = 1e-6 
    console.log(ms);  // 0.000001 seconds
/*
    Hex, binary and octal numbers:
        There exists a shorter way to write the above numbers i.e. 
            hex (0x), octal (0o) and binary (0b)
    e.g.
*/
    console.log(0xcc ); // hex form of 204
    console.log( 0b0110010 ); // binary form of 50
    console.log( 0o437 ); // octal form of 287
/*
    toString(base)
        The method num.toString(base) returns a string representation of num in the numeral system with the given base.
*/
    let number = 204;
    console.log( number.toString(8) );  // 314
    console.log( number.toString(16) );  // cc
    console.log( number.toString(2) );   // 11001100
/*
    Rounding
        One of the most used operations when working with numbers is rounding.

        There are several built-in functions for rounding:
            Math.floor
                Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
            Math.ceil
                Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
            Math.round
                Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
            Math.trunc (not supported by Internet Explorer)
                Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
        The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
*/
    let number = 47.564;
    console.log(number.toFixed(2)); // 47.56
    console.log(number.toFixed(6)); // 47.564000

    console.log( 0.1 + 0.2 == 0.3 ); // false; this is because there is a loss of precision when working with fractions.
/*
    isFinite and isNaN
        - Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
        - NaN represents an error.

    - isNaN(value) converts its argument to a number and then tests it for being NaN:
    - isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity
    example:
*/
    console.log( isNaN("James") ); // true
    console.log( isFinite("15") ); // true
/*
    parseInt and parseFloat
        These extracts the numeric value out of a number with a currency, unit e.t.c symbols.
        e.g.
*/

    console.log( parseInt('50rem') ); // 50
    console.log( parseFloat('21.67em') ); // 21.67

    console.log( parseInt('18.3454') ); // 18, only the integer part is returned
    console.log( parseFloat('12.06.43') ); // 12.06, the second point stops the reading
/*
   NB: JavaScript has a built-in Math object which contains a small library of mathematical functions and constants
*/
    console.log( Math.random() ); // Returns a random number from 0 to 1 (not including 1)

    console.log( Math.max(3, 5, -10, 0, 1) ); // 5
    console.log( Math.min(1, 2) ); // 1

    console.log( Math.pow(2, 10) ); // 2 in power 10 = 1024
