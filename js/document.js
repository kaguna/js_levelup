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

/*
    DOM tree
        The backbone of an HTML document are tags.

        According to DOM, every HTML-tag and text inside a tag is an object.
         Nested tags are called “children” of the enclosing one.

        Tags are called element nodes (or just elements). Nested tags become children of the
         enclosing ones. As a result we have a tree of elements: <html> is at the root,
          then <head> and <body> are its children.
        
        Spaces and newlines – are totally valid characters, they form text nodes and become a part
         of the DOM

        Autocorrection
            If the browser encounters malformed HTML, it automatically corrects it when making DOM.

            Tables always have <tbody>
                An interesting “special case” is tables. By the DOM specification they must have
                 <tbody>, but HTML text may (officially) omit it. Then the browser creates <tbody>
                  in DOM automatically.
                
        Other node types
            There are 12 node types. In practice we usually work with 4 of them:
                1. document – the “entry point” into DOM.
                2. element nodes – HTML-tags, the tree building blocks.
                3. text nodes – contain text.
                4. comments – sometimes we can put the information there, it won’t be shown, but JS
                   can read it from the DOM.
*/
