/*
    Recursion and stack
        Recursion a.k.a self-calling function.
        When a function calls itself, that’s called a recursion step.
        A recursive (recursively-defined) data structure is a structure that replicates itself in parts. 

        The execution stack
            execution context - storage of the information of the function being ran.
            It is an internal data structure that contains details about the execution of a function
            One function call has exactly one execution context associated with it.

            When a function makes a nested call, the following happens:
                - The current function is paused.
                - The execution context associated with it is remembered in a special data structure called 
                    execution context stack.
                - The nested call executes.
                - After it ends, the old execution context is retrieved from the stack, and the outer 
                    function is resumed from where it stopped.
*/
        // using loop. Second in terms of speed 
        function total(n) {
            let total = 0;
            for (let i = 1; i <= n; i++) {
                total += i;
            }
            return total;
        }
        console.log( total(1000) ); // 500500

        // using recursion. But the recursion involves nested calls and execution stack management. 
        // That also takes resources, so it’s slower.
        function total(n) {
            return (n == 1) ? 1 : n + total(n - 1);
        }
        console.log( total(1000) ); // // 500500

        // Using the formula. Naturally, the formula is the fastest solution.
        function total(n) {
            return n * (n + 1) / 2;
        }
        console.log( total(1000) ); // // 500500

/*
        Rest parameters and spread operator
            Rest parameters(...):
                - When ... is at the end of function parameters, it’s “rest parameters” and 
                    gathers the rest of the list of arguments into an array.
                - A function can be called with any number of arguments, no matter how it is defined.
                - The rest parameters can be mentioned in a function definition with three dots ...
                    i.e. the remaining parameters are gathered into an array.
                e.g.
*/              function productOfAll(...numbers) { // numbers is the name for the array
                let product = 1;

                for (let number of numbers) product *= number;

                return product;
                }

                console.log( productOfAll(7) ); // 7
                console.log( productOfAll(7, 10) ); // 70
                console.log( productOfAll(7, 10, 20) ); // 1400
/*
                The rest parameters must be at the end
                The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

                function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
                    // error
                }
                NB: The ...rest must always be last.
                NB: As we remember, arrow functions don’t have their own this. Now we know they don’t 
                    have the special arguments object either.
            
            Spread Operator:
                - It looks similar to rest parameters, also using ..., but does quite the opposite.
                - When ...arr is used in the function call, it “expands” an iterable object arr 
                    into the list of arguments.
                - When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.

*/              let nums1 = [-12, 5, 8, 9, 1, -9];
                let nums2 = [-11, 60, 4];

                console.log( Math.min(25, ...nums1, 13, ...nums2, 17) ); // -12
                console.log( Math.max(25, ...nums1, 13, ...nums2, 17) ); // 60
/*
            Use patterns:

            Rest parameters are used to create functions that accept any number of arguments.
            The spread operator is used to pass an array to functions that normally require a list of many arguments.
*/

/*
        Closure
            A closure is a function that remembers its outer variables and can access them.
            In JavaScript, all functions are naturally closures i.e. they automatically remember where they were created using a 
                hidden [[Environment]] property, and all of them can access outer variables.

            Lexical Environment
                In JavaScript, every running function, code block, and the script as a whole have 
                    an associated object known as the Lexical Environment.
                The Lexical Environment object consists of two parts:
                    - Environment Record – an object that has all local variables as its properties 
                        (and some other information like the value of this).
                    - A reference to the outer lexical environment, usually the one associated with the code 
                        lexically right outside of it (outside of the current curly brackets).
                Global Lexical Environment is associated with the whole script.

                A variable is a property of a special internal object, associated with the currently executing block/function/script.
                Working with variables is actually working with the properties of that object.
*/              let car = "Probox";
                function drive() {
                    console.log("I drive a" + car);
                }
                car = "Range Rover"; // (*)
                drive(); // I drive a Range Rover
/*
                The execution flow of the code above:
                    - The global Lexical Environment has name: "Probox".
                    - At the line (*) the global variable is changed, now it has name: "Range Rover".
                    - When the function drive(), is executed and takes name from outside. 
                        Here that’s from the global Lexical Environment where it’s already "Probox".

            Nested functions
                A function is called “nested” when it is created inside another function.
                a nested function can be returned: either as a property of a new object 
                    (if the outer function creates an object with methods) or as a result by itself.

            Environments in detail
                All functions “on birth” receive a hidden property [[Environment]] with a reference 
                    to the Lexical Environment of their creation.
            
            IIFE(immediately-invoked function expressions)
                Function Expression is created and immediately called. So the code executes right away and has 
                    its own private variables.
*/              (function() {
                    let message = "Say no to corruption!";
                    console.log(message); // Say no to corruption!
                })();
/*
            Garbage collection
                Usually, a Lexical Environment is cleaned up and deleted after the function run.
                But if there’s a nested function that is still reachable after the end of outer fxn, then 
                    its [[Environment]] reference keeps the outer lexical environment alive as well.
*/

/*
        The old "var"
                There are two main differences of var:
                    - Variables have no block scope, they are visible minimum at the function level.
                    - Variable declarations are processed at function start.
                
*/
/*
        Global object
            The global object provides variables and functions that are available anywhere. Mostly, the ones 
                that are built into the language or the host environment.

            Browser: the “window” object:
                1. We can use window to access properties and methods, specific to the browser window. i.e.
                    - window.innerHeight - shows the browser window height
                    - window.open(url); -  opens a new browser window

                2. Top-level var variables and function declarations automatically become properties of window.
*/
                    var name = 'james';

                    console.log(window.name); // James (var name becomes a property of window)

                    window.name = 'Kaguna';

                    console.log(name); // kaguna, variable modified 
/*
                3. Also, all scripts share the same global scope, so variables declared in one <script> become visible in another ones.
                4. The value of this in the global scope is window.

            If we set type="module" attribute on a <script> tag, then such script is considered a separate “module” with its 
                own top-level scope (lexical environment), not interfering with window

            Valid uses of the global object:
                1. to enhance accessibility from all other scripts.
                2. We can test the global object for support of modern language features. e.g. test if a build-in Promise object 
                    exists (it doesn’t in really old browsers)
*/    
                    if (!window.Promise) {
                        console.log("Your browser is really old!");
                    }
/*
                3. We can create “polyfills” i.e. add functions that are not supported by the environment 
                    (say, an old browser), but exist in the modern standard. e.g. window.Promise.
*/

/*
        Function object, NFE
            Functions are objects.
            Function Properties:
                    - name – the function name. Exists not only when given in the function definition, but 
                                also for assignments and object properties.
                    - length – the number of arguments in the function definition. Rest parameters are not counted.
*/
                        let sayMyName = function() {
                            console.log("Butita");
                        }
                        console.log(sayMyName.name); // sayMyName
                        
                        function sayYourNames(fname, sname, surname) {
                            console.log("Kaguna");
                        }
                        console.log(sayYourNames.name); // sayYourNames
                        console.log(sayYourNames.length); // 3
/*
            Custom properties:
*/              var doSomething = function() {
                    doSomething.name = 'Tom';
                    doSomething.name2 = 'John';
                    return 'Beep';
                };
                console.log(doSomething.name); //"doSomething"
                console.log(doSomething.name2); //undefined
                console.log(doSomething());//"Beep"
                console.log(doSomething.name); //"doSomething"
                console.log(doSomething.name2);//"John"
/*
            Named Function Expression(NFE)
                If the function is declared as a Function Expression (not in the main code flow), and it carries the name, 
                    then it is called a Named Function Expression.
*/
                let sayMyName = function(name) {
                    console.log(`${name}`);
                }
                console.log('Butita'); // Butita
/*
                Also, functions may carry additional properties. Many well-known JavaScript libraries make great use of this feature.
                They create a “main” function and attach many other “helper” functions to it. For instance, the jquery 
                    library creates a function named $. The lodash library creates a function _. And then adds _.clone,
                     _.keyBy and other properties too.
                They do it to lessen their pollution of the global space, so that a single library gives only one global variable. 
                    That reduces the possibility of naming conflicts.
*/
/*
        The "new Function" syntax
                The major difference from other ways we’ve seen is that the function is created literally from a string, 
                    that is passed at run time.

                All previous declarations required us, programmers, to write the function code in the script.

                But new Function allows to turn any string into a function. For example, we can receive a new function from a
                 server and then execute it.
                It is used in very specific cases, like when we receive code from a server, or to dynamically compile 
                    a function from a template.

            Syntax:    
            let func = new Function(arg1, arg2, ..., body);
*/
            let age = new Function('currentYear', 'dob', 'return currentYear - dob');
            console.log( age(2019, 1978) ); // 41
/*
            Closure
                Functions created with new Function, have [[Environment]] referencing the global Lexical Environment, 
                    not the outer one. Hence, they cannot use outer variables. But that’s actually good, because it saves us from errors.
                     Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.
*/
/*
        Scheduling: setTimeout and setInterval
            setTimeout allows to run a function once after the interval of time.
                Syntax:
                    let timerId = setTimeout(func|code, delay[, arg1, arg2...])
                    Parameters:
                        - func|code
                            Function or a string of code to execute. Usually, that’s a function. For historical reasons, 
                                a string of code can be passed, but that’s not recommended.
                        - delay
                            The delay before run, in milliseconds (1000 ms = 1 second).
                        - arg1, arg2…
                            Arguments for the function
*/
                    function sayMyNames(fname, sname) {
                        console.log( fname + ' ' + sname );
                    }
                    setTimeout(sayMyNames, 1000, "James", "Kaguna"); // James Kaguna
/*  
                Canceling with clearTimeout
*/
                    let timerId = setTimeout(() => alert("never happens"), 1000);
                    console.log(timerId); // timer identifier
                    clearTimeout(timerId);
                    console.log(timerId); // same identifier (doesn't become null after canceling)
/*
            setInterval allows to run a function regularly with the interval between the runs.
                    Symtax:
                        let timerId = setInterval(func|code, delay[, arg1, arg2...])
                    
                    All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but 
                        regularly after the given interval of time.
                    To stop further calls, we should call clearInterval(timerId)

                    For setInterval the function stays in memory until clearInterval is called.
                    There’s a side-effect. A function references the outer lexical environment, so, while it lives, 
                        outer variables live too. They may take much more memory than the function itself. So when we 
                            don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.
*/
                    // repeat with the interval of 2 seconds
                    let timerId = setInterval(() => console.log('tick'), 2000);
                    // after 5 seconds stop
                    setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
/*
                    Recursive setTimeout guarantees a delay between the executions, setInterval – does not.

                    Nested setTimeout calls is a more flexible alternative to setInterval. Also they can guarantee 
                        the minimal time between the executions.

                    Zero-timeout scheduling setTimeout(...,0) is used to schedule the call “as soon as possible, 
                        but after the current code is complete”.
                    
                    Some use cases of setTimeout(...,0):
                        - To split CPU-hungry tasks into pieces, so that the script doesn’t “hang”
                        - To let the browser do something else while the process is going on (paint the progress bar).
                    
                    Please note that all scheduling methods do not guarantee the exact delay. We should not rely on 
                        that in the scheduled code.

                    For example, the in-browser timer may slow down for a lot of reasons:
                        - The CPU is overloaded.
                        - The browser tab is in the background mode.
                        - The laptop is on battery.
*/
/*
            Decorators and forwarding, call/apply
                Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.
            
                Transparent caching:
*/
                    function slow(x) {
                        // there can be a heavy CPU-intensive job here
                        console.log(`Called with ${x}`);
                        return x;
                    }
                    
                    function cachingDecorator(func) {
                        let cache = new Map();
                    
                        return function(x) {
                        if (cache.has(x)) { // if the result is in the map
                            return cache.get(x); // return it
                        }
                    
                        let result = func(x); // otherwise call func
                    
                        cache.set(x, result); // and cache (remember) the result
                        return result;
                        };
                    }
                    
                    slow = cachingDecorator(slow);
                    
                    console.log( slow(1) ); // slow(1) is cached
                    console.log( "Again: " + slow(1) ); // the same
                    
                    console.log( slow(2) ); // slow(2) is cached
                    console.log( "Again: " + slow(2) ); // the same as the previous line
/*
                    In the code above cachingDecorator is a decorator: a special function that takes another function 
                        and alters its behavior.

                    The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper. 
                        That’s great, because we can have many functions that could use such a feature, and all we need to 
                            do is to apply cachingDecorator to them.
                    
                    There are several benefits of using a separate cachingDecorator instead of 
                    altering the code of slow itself:
                        - The cachingDecorator is reusable. We can apply it to another function.
                        - The caching logic is separate, it did not increase the complexity of slow itself (if there were any).
                        - We can combine multiple decorators if needed (other decorators will follow).

                Using “func.call” for the context
                    Allows to call a function explicitly setting this.

                    Syntax:
                        func.call(context, arg1, arg2, ...)
                        It runs func providing the first argument as this, and the next as the arguments.

                    func(1, 2, 3);
                    func.call(obj, 1, 2, 3)
                        They both call func with arguments 1, 2 and 3. The only difference is that func.call also sets this to obj.

                Going multi-argument with “func.apply”
                    Calls func passing context as this and array-like args into a list of arguments.

                    Syntax:
                        func.apply(context, args)
                        It runs the func setting this=context and using an array-like object args as the list of arguments.

                    func(1, 2, 3);
                    func.apply(context, [1, 2, 3])
                        Both run func giving it arguments 1,2,3. But apply also sets this=context
                
                    NB: The only syntax difference between call and apply is that call expects a list of arguments, 
                        while apply takes an array-like object with them.
                
                Borrowing a method
                    We take (borrow) a join method from a regular array [].join. And use [].join.call to run it in 
                        the context of arguments.
                    So, technically it takes this and joins this[0], this[1] …etc together. It’s intentionally written in a way 
                        that allows any array-like this (not a coincidence, many methods follow this practice). 
                            That’s why it also works with this=arguments
*/

/*
            Function binding
                When using setTimeout with object methods or passing object methods along, there’s a known problem: "losing this".
                
                Losing “this”
                    This happens once a method is passed somewhere separately from the object.
                    The method setTimeout in-browser is a little special: it sets this=window for the function call 
                    i.e.
*/                  let member = {
                        names: "James Kariuki",
                        sayMyNames() {
                        console.log(`${this.names}`);
                        }
                    };
                    setTimeout(member.sayMyNames, 1000); // undefined
/*
                    So for this.names it tries to get window.names, which does not exist.
                
                SOLUTIONS:
                    1. A wrapper
*/                      setTimeout(function() {
                            member.sayMyNames(); // James Kariuki
                        }, 1000);

                        // OR
                        setTimeout(() => member.sayMyNames(), 1000); // James Kariuki
/*
                        It works, because it receives user from the outer lexical environment, and then calls the method normally.

                    2. bind
                        Functions provide a built-in method bind that allows to fix this.
                        Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context 
                            this and first arguments if given.

                        Syntax:
                            let boundFunc = func.bind(context);
                        The result of func.bind(context) is a special function-like “exotic object”, that is callable as function 
                            and transparently passes the call to func setting this=context.                    
*/
                        let sayMyNames = member.sayMyNames.bind(member);

                        sayMyNames(); // James Kariuki

                        setTimeout(sayMyNames, 1000); // James Kariuki
/*
                    If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:
                        for (let key in user) {
                            if (typeof user[key] == 'function') {
                                user[key] = user[key].bind(user);
                            }
                        }
                    NB: JavaScript libraries also provide functions for convenient mass binding , e.g. _.bindAll(obj) in lodash.
*/

/*
            Currying and partials
                We can bind not only this, but also arguments.

                Syntax:
                    let bound = func.bind(context, arg1, arg2, ...);
                
                Partials:
                    partial function application -> we create a new function by fixing some parameters of the existing one
                    They are convenient when we don’t want to repeat the same argument over and over again. Like if we have a 
                        send(from, to) function, and from should always be the same for our task, we can get a partial and go on with it.
                    
                    Why do we usually make a partial function?
                        Creation of independent function with a readable name.
                        We can use it and don’t write the first argument of every time, cause it’s fixed with bind.
                        In other cases, partial application is useful when we have a very generic function, and want 
                            a less universal variant of it for convenience.
                        For instance, we have a function send(from, to, text). Then, inside a user object we may want to   
                            use a partial variant of it: sendTo(to, text) that sends from the current user.
*/
                        function add(num1, num2) {
                            return num1 + num2;
                        }
                        
                        let addition = add.bind(null, 2);
                        
                        console.log( addition(3) ); // = add(2, 3) = 5
                        console.log( addition(8) ); // = add(2, 8) = 10
                        console.log( addition(5) ); // = add(2, 5) = 7
/*
                Currying:
                    It is translating a function from callable as f(a, b, c) into callable as f(a)(b)(c).
                    Advanced currying allows the function to be both callable normally and get partials.
                    It is great when we want easy partials.
                    the universal function log(date, importance, message) after currying gives us partials when called 
                        with one argument like log(date) or two arguments log(date, importance).
*/
                    function curry(func) {

                        return function curried(...args) {
                        if (args.length >= func.length) {
                            return func.apply(this, args);
                        } else {
                            return function(...args2) {
                            return curried.apply(this, args.concat(args2));
                            }
                        }
                        };
                    
                    }
                    
                    function sum(a, b, c) {
                        return a + b + c;
                    }
                    
                    let curriedSum = curry(sum);
                    
                    // still callable normally
                    console.log( curriedSum(1, 2, 3) ); // 6
                    
                    // get the partial with curried(1) and call it with 2 other arguments
                    console.log( curriedSum(1)(2,3) ); // 6
                    
                    // full curried form
                    console.log( curriedSum(1)(2)(3) ); // 6

                // NB: The currying requires the function to have a known fixed number of arguments.

/*
            Arrow functions revisited:
                Arrow functions have no “this” hence can’t be used as constructors. 
                Do not have arguments.
                Can’t be called with new.
                They also don’t have super

                That’s because they are meant for short pieces of code that do not have their own “context”, 
                    but rather works in the current one. And they really shine in that use case.
*/
                let media = {
                    title: "Social Media",
                    apps: ["whatsApp", "Facebook", "Instagram"],
                
                    showList() {
                    this.apps.forEach(
                        app => console.log(this.title + ': ' + app)
                    );
                    }
                };
                
                media.showList();
/*
                If we used a “regular” function, there would be an error. It occurs because forEach runs 
                functions with this=undefined by default, so the attempt to access undefined.title is made.
*/
