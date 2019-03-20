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
