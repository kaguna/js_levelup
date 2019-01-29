/*
OBJECTS
    An object is a collection of properties. A property is an 
    association between a name (or key) and a value.
    An object is created using the curly braces {...}.
    An empty object can be created using the two ways:
*/
    // 1.
    let personalDetails = new Object(); // object constructor syntax

    // 2.
    let userDetails = {};  // object literal syntax

    console.log( typeof(personalDetails) ) // object
    console.log( typeof(userDetails) ) // object

/*
    Literals and properties
        we can use this format to create properties in an object.
        object = {
            key: value
        }
        and separate the values with a comma.
        e.g.
*/
        let carFeatures = { // object
            name: 'Forester', // key "name" value "Forester"
            make: 'Subaru', // key "make" value "Subaru"
            miliage: 2000 // key "miliage" value "2000"
        }

        console.log( carFeatures );

        // Accessing the values.
        console.log( carFeatures.name )
        console.log( carFeatures.make )
        console.log( carFeatures.miliage )

        // To remove a property
        delete carFeatures.make;

        // The last property in the list may end with a comma.
        let person = { // object
            firstname: 'James', 
            lastname: 'Kaguna', 
            age: 31,
        }
        // It is called a trailing or a hanging comma. It makes it easier to 
        // add/remove/move around properties, because all lines become alike.
/*
    Square brackets
        We can also use multiword property names, but then they must be quoted.
        In multiword properties, the dot access doesn’t work
        e.g. 
*/
    let person = { // object
        firstname: 'James', 
        lastname: 'Kaguna', 
        age: 31,
        "loves eating": true
    };

    console.log( person."loves eating"); // Syntax error
    //That’s because the dot requires the key to be a valid variable identifier i.e. no spaces and other limitations.
    // Square bracket is the alternative.
    console.log( person["loves eating"])

    delete person["loves eating"]; // to delete a property.

    // A user can also choose which key to access e.g.

    let person = { // object
        firstname: 'James', 
        lastname: 'Kaguna', 
        age: 31,
        "loves eating": true
    };

    let key = prompt("What do you want to know about the person?", "loves eating");

    // access by variable
    console.log( user[key] ); // true (if enter "loves eating")
/*
    Computed properties
        Use of square brackets in an object literal.
        e.g.
*/
    let wishList = prompt("What to have by the end of 2019", "land");
    let acres = {
        [wishList]: 4, 
    };
    ( acres.land ); // 4 if wishList="land"

/* 
    [wishList] means that the property name should be taken from wishList, hence
     {land: 4}

     Square brackets are much more powerful than the dot natation. They allow any property names
     and variables but cumbersome to write.

     Basically, any name can be used as an object property incliding reserved words. e.g. for, let e.t.c

     "__proto__" can't be used as object property name i.e.
*/
    let obj = {};
    obj.__proto__ = 10;
    alert(obj.__proto__); // [object Object], didn't work as intended

/*
    Property value shorthand
*/
    function carProperties(name, miliage) {
        return {
        name, // same as name:name
        miliage // same as miliage:miliage
        };
    }
    
    let car = carProperties("Mercedez", 3000);
    alert(car.miliage); // Mercedez

/*
    Existence check
        Accessing a non-existing property just returns "undefined".
        hence one can check the existence i.e.
*/
    let carDetails = {}
    console.log( carDetails.type === undefined ); // returns true
    // However, the special operator "in" check the existence of a property.
    // i.e. "key" in object e.g.
    let carFeatures = { 
        name: 'Forester', 
        make: 'Subaru',
        miliage: 2000 
    }

    console.log( "make" in carFeatures );// true since carFeatures.make exists.
    console.log( "type" in carFeatures ); //false since carFeatures.type doesn't exist.
    /* 
        The left side of "in" there must be a quoted property name. If we omit quotes, it 
        would mean a variable containing the actual name will be tested.
    */

/*
    The “for…in” loop
        To access all the keys of an object use this loop.
        i.e. for(let prop in obj) e.g.
*/
    for(let feature in carFeatures) {
        console.log(feature)//name, make, miliage
        console.log(carFeatures[feature])//Forester, Subaru, 2000

    }

/*
    Const object
     e.g.
*/
    const carFeatures = {
        name: 'Forester', 
        make: 'Subaru',
        miliage: 2000
    }

    carFeatures.type = "Manual";
    // this works fine coz const fixes the value of carFeatures which stores the reference
    // to the same object all the time.
    console.log(carFeatures.type)

    // However, below code will throw an error.
    // Error (can't reassign user)
    carFeatures = {
        name: 'Impreza', 
        make: 'Subaru',
        miliage: 5000
    }
/*
    Cloning and merging, Object.assign
    Copying an object variable creates one more refernce to the same object.
    copying object(make duplicate):
*/
    let carFeatures = { 
        name: 'Forester', 
        make: 'Subaru',
        miliage: 2000 
    }

    let clone = {};

    for (let key in carFeatures) {
        clone[key] = carFeatures[key];
    }
    // now clone is fully independent clone
    clone.name = "Impreza"; // change data in it.
    console.log(carFeatures.name); // still Forester

    // we can also use method Object.assign i.e.
    let carFeatures = { 
        name: 'Forester', 
        make: 'Subaru',
        miliage: 2000 
    }

    let clone = Object.assign({}, carFeatures);
    console.log(clone)

    // To make a “real copy” (a clone) we can use Object.assign or javascript 
    // library called lodash with method called _.cloneDeep(obj).



/*
Garbage collection
    Memory management in JavaScript is performed automatically and invisibly to us.
    The main concept of memory management in JavaScript is reachability.
    Below are set of inherently reachable values and cannot be deleted:
    1. Local variables and parameters of the current function.
    2. Variables and parameters for other functions on the current chain of nested calls.
    3. Global variables.
    The values are called "roots".
    If there’s an object in a local variable, and that object has a property referencing 
    another object, that object is considered reachable. And those that it references are also reachable.
     Garbage collector is a background process in the JavaScript engine. It monitors all objects and removes 
     those that have become unreachable.
     e.g.

*/
    // carFeatures has a reference to the object
    let carFeatures = { 
        name: 'Forester', 
        make: 'Subaru',
        miliage: 2000 
    }
    // if the value of the carFeatures is overwritten, the reference is lost.
    let carFeatures = null
    // now { name: 'Forester', make: 'Subaru', miliage: 2000 } becomes unreachable
    // There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.
/*
    Two references
*/
    let carFeatures = { 
        name: 'Forester', 
        make: 'Subaru',
        miliage: 2000 
    };

    let carDetails = carFeatures;
    // then 
    let carFeatures = null
    // Then the object is still reachable via carDetails global variable, so it’s in memory.

/*
    Interlinked objects
*/
    function marry(man, woman) {
        woman.husband = man;
        man.wife = woman;
    
        return {
        father: man,
        mother: woman
        }
    }
    
    let family = marry({
        name: "John"
    }, {
        name: "Ann"
    });

/*
    Function marry “marries” two objects by giving them references to each other and 
    returns a new object that contains them both.
    All objects are reachable as per now.
    if we delete two references:
*/
    delete family.father;
    delete family.mother.husband;
    // if we delete one of the two references, all objects will be still reachable.
    // But if we delete both, then we can see that John has no incoming reference any more.
    // Outgoing references do not matter. Only incoming ones can make an object reachable. So, John 
    // is now unreachable and will be removed from the memory with all its data that also became unaccessible.

/*
    Unreachable Island
        It is possible that the whole island of interlinked objects becomes 
        unreachable and is removed from the memory.
        i.e.
*/
    family = null;

    // The former "family" object has been unlinked from the root, there’s no reference 
    // to it any more, so the whole island becomes unreachable and will be removed.
/*
    Internal algorithms
        The basic garbage collection algorithm is called “mark-and-sweep”.
        Garbage collection steps performed regularly:
        1. It takes roots and marks/remembers them.
        2. Then it visits and marks all references from them.
        3. Then it visits marked objects and marks their references not to visit them 
            again in the future.
        4. Continues until there are unvisited references (reachable from the roots).
        5. All objects except marked ones are removed.

    JavaScript engines optimizations
        1. Generational collection: - objects are split in two sets i.e. “new ones” and “old ones”.
            They appear to do their job and die fast and the one that remains are the old.
        2. Incremental collection: - the engine tries to split the garbage collection into pieces 
            executed one by one, separately. That requires some extra bookkeeping between them to track
             changes, but we have many tiny delays instead of a big one.
        3. Idle-time collection: - the garbage collector tries to run only while the CPU is idle, 
            to reduce the possible effect on the execution.
*/
