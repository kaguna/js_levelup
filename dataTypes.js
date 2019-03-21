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

/*
    STRINGS
        The internal format for strings is always UTF-16, it is not tied to the page encoding

        Quotes
            let single = 'single-quoted';
            let double = "double-quoted";
            let backticks = `backticks`;
    
        Special characters
            \b - Backspace
            \f - Form feed
            \n - New line
            \r - Carriage return
            \t - Tab
            \uNNNN	A unicode symbol with the hex code NNNN, for instance \u00A9 – is a unicode for the copyright symbol ©. 
                It must be exactly 4 hex digits.
            \u{NNNNNNNN}	Some rare characters are encoded with two unicode symbols, taking up to 4 bytes. 
                This long unicode requires braces around it.
            Examples:
*/
            console.log( "\u0147" ); // Ň
            console.log( "\u{1F64F}" ); // 🙏, folded hands (another long unicode)
/*
        String length
            The length property has the string length:
*/           console.log( `James/kaguna`.length ); // 12
/*
        Accessing characters
            To get a character at position pos, use square brackets [pos] or call the method str.charAt(pos). 
                The first character starts from the zero position:
*/
            let name = `James Kariuki`;

            // the first character
            console.log( name[0] ); // J
            console.log( name.charAt(4) ); // s

            // the last character
            console.log( name[name.length - 1] ); // i
/*
        Strings are immutable i.e. Strings can’t be changed in JavaScript. It is impossible to change a character.
        The usual workaround is to create a whole new string and assign it to "name" instead of the old one.


        Searching for a substring:
            To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
*/
        let description = 'James is a footballer.';

        console.log( description.indexOf('James') ); // 0, because 'James' is found at the beginning
        console.log( description.indexOf('james') ); // -1, not found, the search is case-sensitive

        console.log( description.indexOf("footballer") ); // 11, "footballer" is found at the position 11
/*
        includes - returns true/false depending on whether str contains substr within.
            str.includes("substr")
        startsWith - checks whether a str starts with a substring
             str.startsWith("substr")
        endsWith -  checks whether a str ends with a substring
             str.endsWith("substr")

/*
        Getting a substring
            To get a substring, use: slice, substr or substring.
            str.slice(start [, end])
            str.substring(start [, end])
            str.substr(start [, length])

            slice(start, end)	        from start to end (not including end)	    allows negatives
            substring(start, end)	    between start and end	                    negative values mean 0
            substr(start, length)	    from start get length characters	        allows negative start
*/
        console.log( description.slice(3, 8) ); // es is (between pos 3 & 8 not including 3 & 8)
        console.log( description.slice(3) ); // es is a footballer.(from pos till end)
        console.log( description.slice(-8, -2) ); // ler.(start at the 8th position from the right, end at the 2nd from the right)

        console.log( description.substring(2, 6) ); // mes
        console.log( description.substring(6, 2) ); // mes. NB: this does not apply to slice.

        console.log( description.substr(2, 6) ); // mes is
/*
        Comparing strings
            strings are compared character-by-character in alphabetical order.
            To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
            
            str.codePointAt(pos) - Returns the code for the character at position pos
            String.fromCodePoint(code) - Creates a character by its numeric code
*/
        console.log( "z".codePointAt() ); // 122
        console.log( "Z".codePointAt() ); // 90

        console.log( String.fromCodePoint(35) ); // #
        console.log( String.fromCodePoint(90) ); // Z

        let string = '';

        for (let i = 65; i <= 220; i++) {
        string += String.fromCodePoint(i);
        }
        console.log( string );
        // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
        // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
/*
        Correct comparisons
            The call str.localeCompare(str2):
                - Returns 1 if str is greater than str2 according to the language rules.
                - Returns -1 if str is less than str2.
                - Returns 0 if they are equal.
*/       
        console.log( 'james'.localeCompare('james') ); // 0
        console.log( 'jamesk'.localeCompare('james') ); // 1
        console.log( 'james'.localeCompare('jamesk') ); // -1
/*
        Surrogate pairs
            Most symbols have a 2-byte code. Letters in most european languages, numbers, 
                and even most hieroglyphs, have a 2-byte representation.
            But 2 bytes only allow 65536 combinations and that’s not enough for every possible symbol.
                 So rare symbols are encoded with a pair of 2-byte characters called “a surrogate pair”.
            The length of such symbols is 2:
*/
        console.log( '❤️'.length ); // 2, Heart
