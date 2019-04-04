/*
    Property flags and descriptors
        Till now, a property was a simple “key-value” pair to us. But an object property is
             actually a more flexible and powerful thing.
        Property flags:
            - writable – if true, can be changed, otherwise it’s read-only.
            - enumerable – if true, then listed in loops, otherwise not listed.
            - configurable – if true, the property can be deleted and these attributes can
                 be modified, otherwise not.
            
            The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

            Syntax:
                let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
            
            The returned value is a so-called “property descriptor” object: it contains the value and 
                all the flags.
*/
                let member = {
                    nationalId: "34786523"
                };
                
                let descriptor = Object.getOwnPropertyDescriptor(member, 'nationalId');
                
                console.log( JSON.stringify(descriptor, null, 2 ) );
                /* property descriptor:
                {
                    "value": "34786523",
                    "writable": true,
                    "enumerable": true,
                    "configurable": true
                }
                */
/*
            To change the flags, we can use Object.defineProperty.

            Syntax:
                Object.defineProperty(obj, propertyName, descriptor)
        
        Read-only:
            This is done by changing the writtable flag to false. 
            i.e.
*/
            Object.defineProperty(member, "nationalId", {
                writable: false
            });

            member.nationalId = "35176345"; // Error: Cannot assign to read only property 'name'...
/*
        Non-enumerable:
            Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. 
                But if we add toString of our own, then by default it shows up in for..in
            We can also set enumerable:false. Then it won’t appear in for..in loop, just like the built-in one
            i.e.
*/
            let member = {
                fName: "James",
                toString() {
                return this.fName;
                }
            };
            
            Object.defineProperty(member, "toString", {
                enumerable: false
            });
            
            // Now our toString disappears:
            for (let key in member) console.log(key); // fName
/*
        Non-configurable
            A non-configurable property can not be deleted or altered with defineProperty.
            e.g.
            Math.PI is read-only, non-enumerable and non-configurable
*/
            let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

            alert( JSON.stringify(descriptor, null, 2 ) );
            /*
            {
                "value": 3.141592653589793,
                "writable": false,
                "enumerable": false,
                "configurable": false
            }
            */
/*
            Making a property non-configurable is a one-way road. We cannot change it back, because
             defineProperty doesn’t work on non-configurable properties.

        Object.defineProperties
            This method allows the programmer to define many properties at once.
            Syntax:
                Object.defineProperties(obj, descriptors)

                Object.defineProperties(obj, {
                    prop1: descriptor1,
                    prop2: descriptor2
                    // ...
                });
                e.g.
*/
                Object.defineProperties(member, {
                    firstName: { value: "James", writable: false },
                    lastName: { value: "Kariuki", writable: false },
                    // ...
                });
/*
        Object.getOwnPropertyDescriptors:
            To get all property descriptors at once.
            Together with Object.defineProperties it can be used as a “flags-aware” way of
                    cloning an object.
            i.e.
            let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

            Normally when we clone an object, we use an assignment to copy properties i.e.

                for (let key in user) {
                    clone[key] = user[key]
                }
            but this does not copy flags hence Object.defineProperties is preferred.
            Another difference is that for..in ignores symbolic properties, but 
                Object.getOwnPropertyDescriptors returns all property descriptors including 
                    symbolic ones.

        Sealing an object globally:
            Property descriptors work at the level of individual properties.
            There are also methods that limit access to the whole object:
                - Object.preventExtensions(obj) - Forbids to add properties to the object.
                - Object.seal(obj) - Forbids to add/remove properties, sets for all existing
                                     properties configurable: false.
                - Object.freeze(obj) - Forbids to add/remove/change properties, sets for all
                                        existing properties configurable: false, writable: false.

            And also there are tests for them:
                - Object.isExtensible(obj) - Returns false if adding properties is forbidden, 
                                             otherwise true.
                - Object.isSealed(obj) - Returns true if adding/removing properties is forbidden, 
                                         and all existing properties have configurable: false.
                - Object.isFrozen(obj) - Returns true if adding/removing/changing properties is 
                                        forbidden, and all current properties are configurable: false,
                                         writable: false.

                NB: These methods are rarely used in practice.
*/

/*
    Property getters and setters
        There are two kinds of properties:
            1. data properties - these are properties we've been working with in the previous chapters.
            2. accessor properties - essentially functions that work on getting and setting a value.
                                   - They are represented by “getter” and “setter” methods.
        Syntax:
            let obj = {
                get propName() {
                    // getter, the code executed on getting obj.propName
                },

                set propName(value) {
                    // setter, the code executed on setting obj.propName = value
                }
            };

            Example:
*/
            let member = {
                firstName: "James",
                secondName: "Kariuki",
                surname: "Kaguna",
            
                get fullName() {
                return `${this.firstName} ${this.secondName} ${this.surname}`;
                },
                
                set fullName(value) {
                    [this.firstName, this.secondName, this.surname] = value.split(" ");
                }
            };
            
            member.fullName = "Brian Muthii Kaguna"
            console.log(member.fullName); // James Kariuki Kaguna
            console.log(member.firstName); // Brian
            console.log(member.secondName); // Muthii
            console.log(member.surname); // Kaguna
/*
            Once a property is defined with get prop() or set prop(), it’s an accessor property, 
                not a data properety any more.
                If there’s a getter – we can read object.prop, othrewise we can’t.
                If there’s a setter – we can set object.prop=..., othrewise we can’t.
            And in either case we can’t delete an accessor property.

        Accessor descriptors
            For accessor properties, there is no value and writable, but instead there are 
                get and set functions.
            So an accessor descriptor may have:
                - get – a function without arguments, that works when a property is read,
                - set – a function with one argument, that is called when the property is set,
                - enumerable – same as for data properties,
                - configurable – same as for data properties.

            e.g. snippet
*/
            Object.defineProperty(member, 'fullName', {
                get() {
                    return `${this.firstName} ${this.secondName} ${this.surname}`;
                },
            
                set(value) {
                    [this.firstName, this.secondName, this.surname] = value.split(" ");
                }
            });

            console.log(member.fullName); // James Kariuki Kaguna

            for(let key in member) console.log(key); // firstName, secondName, surname
/*
        Smarter getters/setters
            Getters/setters can be used as wrappers over “real” property values to gain 
                more control over them.
            e.g.
*/
            let member = {
                get firstName() {
                return this._firstName;
                },
            
                set firstName(value) {
                if (value.length < 4) {
                    console.log("First name is too short, need at least 4 characters");
                    return;
                }
                this._firstName = value;
                }
            };
            
            member.firstName = "james";
            console.log(member.firstName); // Pete
            member.firstName = ""; // Name is too short, need at least 4 characters
/*
            Technically, the external code may still access the name directly by using user._name. 
                But there is a widely known agreement that properties starting with an 
                underscore "_" are internal and should not be touched from outside the object.

        Using for compatibility
            One of the great ideas behind getters and setters – they allow to take 
                control over a “normal” data property and tweak it at any moment.
            For example in place where we were storing age, we decide to store birthday. 
            To still retain age in our code, we may add a getter.
*/
            function Member(name, birthday) {
                this.name = name;
                this.birthday = birthday;
            
                // age is calculated from the current date and birthday
                Object.defineProperty(this, "age", {
                get() {
                    let todayYear = new Date().getFullYear();
                    return todayYear - this.birthday.getFullYear();
                }
                });
            }
            
            let member = new Member("James", new Date(1989, 6, 1));
            
            alert( member.birthday ); // Sat Jul 01 1989 00:00:00 GMT+0300 (East Africa Time)
            console.log( member.age );      // 30

/*
    Prototypal inheritance
        Prototype - hidden property that’s either another object or null.

        When we want to read a property from object, and it’s missing, JavaScript 
            automatically takes it from the prototype. This is called prototypal inheritance

        __proto__ is one of the ways to set a [[Prototype].
        it is a historical getter/setter for [[Prototype]]

        In modern language it is replaced with functions Object.getPrototypeOf/Object.setPrototypeOf 
            that also get/set the prototype.
        e.g.
*/
        let animal = {
            characteristic: "Living thing",
            eats: true,
            moves() {
            console.log("Animal moves");
            }
        };
        
        let cow = {
            chewCud: true,
            __proto__: animal
        };
        
        // walk is taken from the prototype
        cow.moves(); // Animal moves
/*
        Writing doesn’t use prototype
            The prototype is only used for reading properties.
            Write/delete operations work directly with the object.
        
        The value of “this”
            No matter where the method is found: in an object or its prototype. In a method call,
                 this is always the object before the dot.
            If we call obj.method(), and the method is taken from the prototype, 'this' still 
            references obj. So methods always work with the current object even if they are 
             inherited.
*/

/*
    F.prototype
        The F.prototype property is not the same as [[Prototype]]. The only thing F.prototype
         does: it sets [[Prototype]] of new objects when new F() is called.
*/
        let animal = {
            eats: true
        };
        
        function Rabbit(name) {
            this.name = name;
        }
        
        Rabbit.prototype = animal;
        
        let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
        
        console.log( rabbit.eats ); // true
/*
        Default F.prototype, constructor property
            The default "prototype" is an object with the only property constructor that 
             points back to the function itself.
             i.e.
*/
            function User() {}
            // by default:
            // User.prototype = { constructor: User }
            console.log( User.prototype.constructor == User ); // true
/*
        The "prototype" property only has such a special effect when is set to a constructor
         function, and invoked with new.

        F.prototype is only used when new F is called, it assigns [[Prototype]] of the new object.
         After that, there’s no connection between F.prototype and the new object.
*/

/*
    Native prototypes
        Object.prototype
*/
            let obj = {};
            console.log( obj ); // "[object Object]" ?
/*
            Short notation obj = {} is the same as obj = new Object(), where Object – is a built-in
             object constructor function.
            Object.prototype references a huge object with toString and other functions.
            When new Object() is called (or a literal object {...} is created), the [[Prototype]] of
             it is set to Object.prototype
            Afterwards when obj.toString() is called – the method is taken from Object.prototype.
        
        Other built-in prototypes
            All built-in objects follow the same pattern:
                The methods are stored in the prototype (Array.prototype, Object.prototype, 
                    Date.prototype etc).
*/
            let arr = [1, 2, 3];

            // it inherits from Array.prototype?
            console.log( arr.__proto__ === Array.prototype ); // true

            // then from Object.prototype?
            console.log( arr.__proto__.__proto__ === Object.prototype ); // true

            // and null on the top.
            console.log( arr.__proto__.__proto__.__proto__ ); // null
/*
            Other built-in objects also work the same way. Even functions. They are objects of a
             built-in Function constructor, and their methods: call/apply and others are taken
              from Function.prototype. 
            Functions have their own toString too.

        Primitives
            They are not objects. But if we try to access their properties, then temporary wrapper
             objects are created using built-in constructors String, Number, Boolean, they provide
              the methods and disappear.
            Methods of these objects also reside in prototypes, available as String.prototype,
             Number.prototype and Boolean.prototype with an exception of null and undefined.
        
        Changing native prototypes
            Native prototypes can be modified. For instance, if we add a method to String.prototype,
             it becomes available to all strings:
*/
            String.prototype.show = function() {
                console.log(this);
            };
            
            "Tibiim!".show(); // Tibiim!
/*
            Prototypes are global, so it’s easy to get a conflict. If two libraries add a method
             String.prototype.show, then one of them overwrites the other one.
            So, generally modifying a native prototype is considered a bad idea.

            In modern programming, there is only one case when modifying native prototypes is
             approved. That’s polyfilling but not yet supported by current JavaScript engine.

        Borrowing from prototypes
            Possible when we take a method from one object and copy it into another.
*/
            let obj = {
                0: "James",
                1: "Kariuki",
                2: "Kaguna",
                length: 3,
            };
            obj.join = Array.prototype.join;
            console.log( obj.join(',') ); // James,Kariuki,Kaguna
/*
            Another possibility is to inherit by setting obj.__proto__ to Array.prototype, then
             all Array methods are automatically available in obj.

            But that’s impossible if obj already inherits from another object. Remember, we
             only can inherit from one object at a time.

            Borrowing methods is flexible, it allows to mix functionality from different
             objects if needed.
*/

/*
    Methods for prototypes
        Modern methods to setup and directly access the prototype are:
            - Object.create(proto[, descriptors]) – creates an empty object with given proto
                as [[Prototype]] (can be null) and optional property descriptors.
            - Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj
                 (same as __proto__ getter).
            - Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto
                (same as __proto__ setter).
        
        "very plain" objects
            The built-in __proto__ getter/setter is unsafe if we’d want to put user-generated
             keys in to an object. Just because a user may enter “proto” as the key, and there’ll
              be an error with hopefully easy
            So we can either use Object.create(null) to create a “very plain” object without
             __proto__, or stick to Map objects for that.

            - Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of
                enumerable own string property names/values/key-value pairs.
            - Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic property
                names.
            - Object.getOwnPropertyNames(obj) – returns an array of all own string property names.
            - Reflect.ownKeys(obj) – returns an array of all own property names.
            - obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property 
                named key.
            
            So we can either use Object.create(null) to create a “very plain” object without
             __proto__, or stick to Map objects for that.
            
            All methods that return object properties (like Object.keys and others) – return
             “own” properties. If we want inherited ones, then we can use for..in.
*/

/*
    Class patterns
        The term “class” comes from the object-oriented programming. In JavaScript it usually means
         the functional class pattern or the prototypal pattern. The prototypal pattern is more
          powerful and memory-efficient, so it’s recommended to stick to it.
        
        Functional class pattern
             Constructor function below can be considered a “class”.
*/
            function Member(myName) {
                this.sayMyName = function() {
                console.log(myName);
                };
            }
            let member = new Member("James Kariuki");
            member.sayMyName(); // James Kariuki
/*
        Factory class pattern
            We can create a class without using new at all.
*/
            function Member(myName) {
                return {
                    sayMyName(){
                    console.log(myName);
                    }
                    };
            } 
            let member = Member("James Kariuki");
            member.sayMyName(); // James Kariuki
/*
        Prototype-based classes
            So, there is a widely known agreement that internal properties and methods are
             prepended with an underscore "_".
            In the prototypal pattern, all methods are in "Member.prototype" that is shared
             between all user objects. An object itself only stores the data.

            So the prototypal pattern is more memory-efficient.

            The code structure:
                - The constructor User only initializes the current object state.
                - Methods are added to User.prototype.
*/
            function Member(myName) {
                this._myName = myName;
            }
            Member.prototype.sayMyName = function() {
                console.log(this._myName);
            };

            let member = new Member("James Kariuki");
            member.sayMyName(); // James Kariuki
/*
        Prototype-based inheritance for classes
            Let’s say we have two prototype-based classes.

*/
            function Animal(name) {
                this.name = name;
            }
            
            // All animals can eat, right?
            Animal.prototype.eat = function() {
                console.log(`${this.name} eats.`);
            };
            
            
            function Rabbit(name) {
                this.name = name;
            }
            
            Rabbit.prototype.jump = function() {
                console.log(`${this.name} jumps!`);
            };
            
            // setup the inheritance chain
            Rabbit.prototype.__proto__ = Animal.prototype; // (*)
            
            let rabbit = new Rabbit("White Rabbit");
            rabbit.eat(); // rabbits can eat too
            rabbit.jump();
/*
            The line (*) sets up the prototype chain. So that rabbit first searches methods in
             Rabbit.prototype, then Animal.prototype. And then, just for completeness, let’s
              mention that if the method is not found in Animal.prototype, then the search
               continues in Object.prototype, because Animal.prototype is a regular plain object,
                so it inherits from it.
*/
