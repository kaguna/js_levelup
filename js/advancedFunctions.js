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
