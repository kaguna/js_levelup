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
