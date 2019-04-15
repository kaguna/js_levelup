/*
    Browser environment, specs
        A platform may be a browser, or a web-server, or a washing machine, or another host.
         Each of them provides platform-specific functionality. The JavaScript specification calls
          that a host environment.

        A host environment provides platform-specific objects and functions additional to the
         language core. Web browsers give a means to control web pages. Node.JS provides server-side
          features, and so on.
        
        There’s a “root” object called window. It has two roles:
            - It is a global object for JavaScript code, as described in the chapter Global object.
            - It represents the “browser window” and provides methods to control it.

        Document Object Model (DOM)
            CSSOM specification
                Describes stylesheets and style rules, manipulations with them and their
                 binding to documents

            DOM specification
                Describes the document structure, manipulations and events

        BOM (part of HTML spec)
            Browser Object Model (BOM) are additional objects provided by the browser
             (host environment) to work with everything except the document.
            
            Functions alert/confirm/prompt are also a part of BOM: they are directly not related to
             the document, but represent pure browser methods of communicating with the user. 
*/
