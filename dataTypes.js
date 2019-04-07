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
/*
        Arrays
            Stores ordered collections.
            There are two syntaxes for creating an empty array:   
            - let arr = new Array();
            - let arr = [];

            Methods pop/push, shift/unshift
                A queue is one of most common uses of an array. Implements FIFO.
                    it supports two operations:
                        - push -> appends an element to the end.
                        - shift ->  get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
                A stack is another data structure that makes use of an array. Implements LIFO
                    it supports two operations:
                        - push adds an element to the end.
                        - pop takes an element from the end.

                Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements 
                    both to/from the beginning or the end i.e. dequeue.
            
            Methods that work with the end of the array:
                Pop - Extracts the last element of the array and returns it
*/
let familyMembers = ["James", "Kaguna", "Kariuki", "Njoki"];

console.log( familyMembers.pop() ); // remove "Njoki" and log it
console.log( familyMembers ); // ["James", "Kaguna", "Kariuki"]

/*
Push - Append the element to the end of the array
*/              familyMembers.push("Muthii")
console.log( familyMembers ); // ["James", "Kaguna", "Kariuki", "Njoki", "Muthii"]
/*
Methods that work with the beginning of the array:
shift - Extracts the first element of the array and returns it:
*/              console.log( familyMembers.shift() ); // "James"
console.log( familyMembers ); // ["Kaguna", "Kariuki", "Njoki"]
/*
unshift - Add the element to the beginning of the array:
*/              familyMembers.unshift("Tabitha");
console.log( familyMembers ); // ["Tabitha", "James", "Kaguna", "Kariuki", "Njoki"]
/*             NB: Methods push and unshift can add multiple elements at once.

To loop over the elements of the array:
- for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
- for (let item of arr) – the modern syntax for items only,
- for (let i in arr) – never use.
*/

/*
        Array methods
            - arr.push(...items) – adds items to the end,
            - arr.pop() – extracts an item from the end,
            - arr.shift() – extracts an item from the beginning,
            - arr.unshift(...items) – adds items to the beginning.
            - arr.splice(index, itemsCount) - removes number of itemsCount from the index given.
            - arr.splice(index, itemsCount, items) 
                if itemsCount == 0 it adds items from the specified index.
                else it removes the number of items in the itemCount and replaces with items.
            - arr.slice(start, end) - creates a new array, copies elements from position start till end (not inclusive) into it.
            - concat(...items) – returns a new array: copies all members of the current one and adds items to it. 
                If any of items is an array, then its elements are taken.
            -  Iterate: arr.forEach - method allows to run a function for every element of the array.
                arr.forEach(function(item, index, array) {
                    // ... do something with item
                });

        Searching in array
            - arr.indexOf(item, from) - looks for item starting from index from, and returns the index where it was found, otherwise -1.
            - arr.lastIndexOf(item, from) – same, but looks from right to left.
            - arr.includes(item, from) – looks for item starting from index from, returns true if found. 
            - find and findIndex
                let result = arr.find(function(item, index, array) {
                    // if true is returned, item is returned and iteration is stopped
                    // for falsy scenario returns undefined
                });
                 arr.findIndex method is essentially the same, but it returns the index where the element was found instead 
                    of the element itself and -1 is returned when nothing is found
            - filter(func) – filter elements through the function, return first/all values that make it return true.

        Transform an array
            - map(arr.map) - creates a new array from results of calling func for every element.
                let result = arr.map(function(item, index, array) {
                    // returns the new value instead of item
                })
            - sort(func) – sorts the array in-place, then returns it.
                arr.sort( (a, b) => a - b );

*/
            let arr = [ 1, 2, 15, 3, 7 ];
            arr.sort(function(a, b) { return a - b; });
            console.log(arr);  // 1, 2, 3, 7, 15

            // Using arrow of functions. It is neater.
            let arr = [ 1, 2, 15, 3, 7 ];
            arr.sort((a, b) => a - b );
            console.log(arr);  // 1, 2, 3, 7, 15
/*
            reverse() – reverses the array in-place, then returns it.
            split/join – convert a string to array and back.
            reduce(func, initial) – calculate a single value over the array by calling func for each 
                element and passing an intermediate result between the calls.
                    let value = arr.reduce(function(previousValue, item, index, array) {
                        // ...
                    }, initial);

                    let arr = [1, 2, 3, 4, 5];
                    let result = arr.reduce((sum, current) => sum + current, 0);
                    console.log(result); // 15

            Array.isArray(arr) checks arr for being an array.
            NB: Please note that methods sort, reverse and splice modify the array itself.
*/
/*
    Iterables
        Iterable objects is a generalization of arrays. That’s a concept that allows to make any object useable in a for..of loop.
        Strings are also iterables.
*/
/*
      Map, Set, WeakMap and WeakSet
        Recap:
            - Objects for storing keyed collections.
            - Arrays for storing ordered collections.
            
        Map: it is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. 
            The main methods are:
                - new Map() – creates the map.
                - map.set(key, value) – stores the value by the key.
                - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
                - map.has(key) – returns true if the key exists, false otherwise.
                - map.delete(key) – removes the value by the key.
                - map.clear() – clears the map
                - map.size – returns the current element count.

            Iteration over Map:
                There are 3 methods:
                    - map.keys() – returns an iterable for keys,
                    - map.values() – returns an iterable for values,
                    - map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/              let facultyStudentMap = new Map([
                    ['CIT', 350],
                    ['Finance', 500],
                    ['Economics',    720]
                ]);
                // iterate over keys (faculties)
                for (let faculties of facultyStudentMap.keys()) {
                    console.log(faculties); // CIT, Finance, Economics
                }
                // iterate over values (students)
                for (let students of facultyStudentMap.values()) {
                    console.log(students); // 350, 500, 720
                }
                // iterate over [key, value] entries
                for (let entries of facultyStudentMap) { // the same as of facultyStudentMap.entries()
                    console.log(entries); // ["CIT", 350]; ["Finance", 500]; ["Economics", 720]
                }
/*
            Besides that, Map has a built-in forEach method, similar to Array:
                // runs the function for each (key, value) pair
                recipeMap.forEach( (value, key, map) => {
                    alert(`${key}: ${value}`); // cucumber: 500 etc
                });

        Set: it is a collection of values, where each value may occur only once.
            Its main methods are:
                - new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
                - set.add(value) – adds a value, returns the set itself.
                - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
                - set.has(value) – returns true if the value exists in the set, otherwise false.
                - set.clear() – removes everything from the set.
                - set.size – is the elements count.

            Set keeps only unique values.

            NB:The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find.
                 But the performance would be much worse, because this method walks through the whole array checking every element. 
                    Set is much better optimized internally for uniqueness checks.
            
            Iteration over Set:
               The same methods Map has for iterators are also supported.
               NB:  The forEach function in the Set has 3 arguments: a value, then again a value, and then the target object. 
                    Indeed, the same value appears in the arguments twice
                    That’s for compatibility with Map where forEach has three arguments hence may help to replace Map with Set 
                        in certain cases with ease, and vice versa.
        
        WeakMap: is the same thing for Map
            - WeakMap keys must be objects, not primitive values. 
            - weakMap.set(obj, key); // works fine (object key)
            - WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.
            - It has only the following methods:
                weakMap.get(key)
                weakMap.set(key, value)
                weakMap.delete(key)
                weakMap.has(key)
            - WeakMap can make things simpler, because it is cleaned up automatically. 
                The information in it like visits count, lives only while the key object exists.

        WeakSet: is a special kind of Set that does not prevent JavaScript from removing its items from memory. 
            - It is similar to Set, but we may only add objects to WeakSet (not primitives).
            - An object exists in the set while it is reachable from somewhere else.
            - Like Set, it supports add, has and delete, but not size, keys() and no iterations.

        NB: The most notable limitation of WeakMap and WeakSet is the absence of iterations, and inability to get all current content.
            They provide an “additional” storage of data for objects which are stored/managed at another place.   
*/
/*
    Destructuring assignment
         is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes they are more convenient.

        Array destructuring:
            we have an array with the fname, lname and surname
*/          let myNames = ["James", "Kariuki", "Kaguna"]
            // destructuring assignment
            let [firstName, lastName, surname] = myNames;
            // this is a shorter way to write the above.
            let firstName = arr[0];
            let lastName = arr[1];
            let surname = arr[2];

            console.log(firstName); // "James"
            console.log(lastName);  // "Kariuki"
            console.log(surname);  // "Kaguna"
/*
        Object destructuring:
*/          let dimensions = {
                name: "Cuboid",
                length: 300,
                width: 100,
                height: 200
            };

            // { sourceProperty: targetVariable }
            let {length: l, width: w, height: h, name} = dimensions;
            // The colon shows “what : goes where”
            // length -> l
            // width -> w
            // height -> h
            // name -> name

            console.log(name);  // Cuboid
            console.log(l);      // 300
            console.log(w);      // 100
            console.log(h);      // 200
/*
        The rest operator:
            This happens when the properties are more than the variables.
            The specification for using the rest operator (three dots) here is almost in the standard,
                 but most browsers do not support it yet.
            e.g. let { name, ...rest } = dimensions;
            // now name="Cuboid", rest={ l: 300, h: 200, w: 100 }

        Smart function parameters:
          There are times when a function may have many parameters, most of which are optional. That’s especially true for user interfaces.  
*/          let dimensions = {
                name: "Cuboid",
                attributes: ["volume", "surfaceArea"]
            };

            function calculations({
                name = "Cuboid",
                length: l = 300, // length goes to l
                width: w = 100,  // width goes to w
                height: h = 200, // height goes to h
                attributes: [ volume, surfaceArea] // items first element goes to volume, second to surfaceArea
            }) {
                console.log(`${name} ${l} ${w} ${h}`); // Cuboid 300 100 200"
                console.log(`${volume}: ${l*w*h}`); // "volume: 6000000"
                console.log(`${surfaceArea}: ${l*w}`); // "surfaceArea: 30000"
            }
            calculations(dimensions)
/*
    JSON methods, toJSON
        JavaScript provides methods:
            - JSON.stringify to convert objects into JSON.
            - JSON.parse to convert JSON back into an object.
        
        Excluding and transforming: replacer
            The full syntax of JSON.stringify is:
                let json = JSON.stringify(value[, replacer, space])

                value
                    - A value to encode.
                replacer
                    - Array of properties to encode or a mapping function function(key, value).
                space
                 - Amount of space to use for formatting
        NB: Most of the time, JSON.stringify is used with the first argument only. But if we need to fine-tune the replacement process, 
            like to filter out circular references, we can use the second argument of JSON.stringify

        Custom “toJSON”:
            Dates have an inbuilt toJSON method which converts to string automatically when JSON.stringify(date)
            is used. e.g.
*/
                stringDate = JSON.stringify(new Date(Date.UTC(2017, 0, 1)));
                console.log(stringDate); // 2017-01-01T00:00:00.000Z
/*
        JSON.parse
            To decode a JSON-string, we need another method named JSON.parse.
             i.e. let value = JSON.parse(str[, reviver]);
                - str
                    JSON-string to parse.
                - reviver
                - optional function(key,value) that will be called for each (key, value) pair and can transform the value.
*/
