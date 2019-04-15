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

/*
    Walking the DOM
        On top: documentElement and body
            The topmost tree nodes are available directly as document properties:
                - <html> = document.documentElement
                    The topmost document node is document.documentElement. That’s DOM node of
                     <html> tag.
                - <body> = document.body
                    Another widely used DOM node is the <body> element – document.body.
                - <head> = document.head
                    The <head> tag is available as document.head.

        NB: In the DOM, the null value means “doesn’t exist” or “no such node”.

        Children: childNodes, firstChild, lastChild
            The are two terms used:
                - Child nodes (or children) – elements that are direct children. In other words,
                   they are nested exactly in the given one. For instance, <head> and <body> are
                    children of <html> element.
                - Descendants – all elements that are nested in the given one, including children,
                   their children and so on.

            The childNodes collection provides access to all child nodes, including text nodes.

            elem.hasChildNodes() - a special function to check whether there are any child nodes

        DOM collections
            childNodes looks like an array but it’s not an array, but rather a collection.
                - We can use for..of to iterate over it.
                    That’s because it’s iterable (provides the Symbol.iterator property, as
                     required).
                - Array methods won’t work, because it’s not an array
                    we can use Array.from to create a “real” array from the collection, if we want
                     array methods.

            DOM collections are read-only
            Almost all DOM collections with minor exceptions are live i.e. they reflect the current
             state of DOM.
        
        Siblings and the parent
            Siblings are nodes that are children of the same parent. For instance, <head> and 
            <body> are siblings:
                - <body> is said to be the “next” or “right” sibling of <head>,
                - <head> is said to be the “previous” or “left” sibling of <body>.
            The parent is available as parentNode.

            The next node in the same parent (next sibling) is nextSibling, and the previous one
             is previousSibling.
        
        Element-only navigation
            The links are similar to those given above, just with Element word inside:
                - children – only those children that are element nodes.
                - firstElementChild, lastElementChild – first and last element children.
                - previousElementSibling, nextElementSibling – neighbour elements.
                - parentElement – parent element.

            <table id="table">
            <tr>
                <td>one</td>
                <td>two</td>
            </tr>
            <tr>
                <td>three</td>
                <td>four</td>
            </tr>
            </table>

            <script>
            // get the content of the second row, first cell
            console.log( table.rows[1].cells[0].innerHTML ) // "three"
            </script>
*/

/*
    Searching: getElement* and querySelector*
        Method	Searches by...	
        getElementById -Searches by- id	
        getElementsByName -Searches by-	name
        getElementsByTagName -Searches by- tag or '*'
        getElementsByClassName -Searches by- class
        querySelector -Searches by-	CSS-selector
        querySelectorAll -Searches by- CSS-selector

        NB: Methods getElementById and getElementsByName can only be called in the context of the
            document: document.getElementById(...). But not on an element: elem.getElementById(...)
             would cause an error.

        Other methods can be called on elements too. For instance elem.querySelectorAll(...) will
         search inside elem (in the DOM subtree).
        
        Besides that:
            - There is elem.matches(css) to check if elem matches the given CSS selector.
            - There is elem.closest(css) to look for the nearest ancestor that matches the given
              CSS-selector. The elem itself is also checked.
        
        Method to check for the child-parent relationship:
            elemA.contains(elemB) returns true if elemB is inside elemA (a descendant of elemA)
             or when elemA==elemB.

        All methods "getElementsBy*" return a live collection. Such collections always reflect the
         current state of the document and “auto-update” when it changes.
*/
