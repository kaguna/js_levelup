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
