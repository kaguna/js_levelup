/*
    Error handling, "try..catch"
        The “try…catch” syntax
            The try..catch construct allows to handle runtime errors. It literally allows to try
             running the code and catch errors that may occur in it.
            try {
                // run this code
            } catch(err) {
                // if an error happened, then jump here
                // err is the error object
            } finally {
                // do in any case after try/catch
            }

        Error object
            When an error occurs, JavaScript generates an object containing the details about it.
             The object is then passed as an argument to catch
            Properties:
                name
                    Error name. For an undefined variable that’s "ReferenceError".
                message
                    Textual message about error details.
                    There are other non-standard properties available in most environments.
                     One of most widely used and supported is:
                stack
                    Current call stack: a string with information about the sequence of nested
                     calls that led to the error. Used for debugging purposes.

        Optional “catch” binding
            This is a recent addition to the language. Old browsers may need polyfills.
            If we don’t need error details, catch may omit it
        
        Using “try…catch”
            
*/
            let user = "{ name James  }";
            try {
            let member = JSON.parse(user); // <-- when an error occurs...
            console.log( member.name ); // doesn't work
            } catch (e) {
            // ...the execution jumps here
            console.log( "Our apologies, the data has errors." );
            console.log( e.name ); // SyntaxError
            console.log( e.message ); // Unexpected token n in JSON at position 2
            }
/*
        Throwing our own errors
            We can also generate our own errors using the throw operator. Technically, the argument
             of throw can be anything, but usually it’s an error object inheriting from the
              built-in Error class.
        
        Rethrowing
            Rethrowing is a basic pattern of error handling: a catch block usually expects and
             knows how to handle the particular error type, so it should rethrow errors it
              doesn’t know.

        Global catch
            Even if we don’t have try..catch, most environments allow to setup a “global” error
             handler to catch errors that “fall out”. In-browser that’s window.onerror.

             window.onerror = function(message, url, line, col, error) {
                // ...
            };

            - message
                Error message.
            - url
                URL of the script where error happened.
            - line, col
                Line and column numbers where error happened.
            - error
                Error object.
*/
