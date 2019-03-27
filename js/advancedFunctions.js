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
