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

/*
    Node properties: type, tag and contents
        DOM node classes
            The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM
             nodes inherit from it.

            The classes are:
                1. EventTarget – is the root “abstract” class. Objects of that class are never 
                   created. It serves as a base, so that all DOM nodes support so-called “events”
                2. Node – is also an “abstract” class, serving as a base for DOM nodes. It provides
                   the core tree functionality: parentNode, nextSibling, childNodes
                    Objects of Node class are never created. But there are concrete node classes
                     that inherit from it, namely: Text for text nodes, Element for element nodes
                      and more exotic ones like Comment for comment nodes.
                3. Element – is a base class for DOM elements. It provides element-level navigation
                   like nextElementSibling, children and searching methods like getElementsByTagName,
                    querySelector.
                    Element class serves as a base for more specific classes: SVGElement, XMLElement
                     and HTMLElement
                4. TMLElement – is finally the basic class for all HTML elements. It is inherited by
                   various HTML elements:
                   - HTMLInputElement – the class for <input> elements,
                   - HTMLBodyElement – the class for <body> elements,
                   - HTMLAnchorElement – the class for <a> elements
                
            Console.log(elem) shows the element DOM tree.
            Console.dir(elem) shows the element as a DOM object, good to explore its properties.

        The “nodeType” property
            elem.nodeType == 1 for element nodes,
            elem.nodeType == 3 for text nodes,
            elem.nodeType == 9 for the document object

            <body>
            <script>
            let elem = document.body;

            // let's examine what it is?
            console.log(elem.nodeType); // 1 => element

            // and the first child is...
            console.log(elem.firstChild.nodeType); // 3 => text

            // for the document object, the type is 9
            console.log( document.nodeType ); // 9
            </script>
            </body>

        Tag: nodeName and tagName
            For elements, tag name (uppercased unless XML-mode). For non-element nodes nodeName
             describes what it is. Read-only.
            Difference between tagName and nodeName:
                1. The tagName property exists only for Element nodes.
                2. The nodeName is defined for any Node:
                    - for elements it means the same as tagName.
                    - for other node types (text, comment, etc.) it has a string with the node type.

        innerHTML: the contents
            The HTML content of the element. Can be modified.
            We can append “more HTML” by using elem.innerHTML+="something"
        
        outerHTML: full HTML of the element
            The full HTML of the element. A write operation into elem.outerHTML does not touch elem
             itself. Instead it gets replaced with the new HTML in the outer context.
            The outerHTML assignment does not modify the DOM element, but extracts it from the outer
             context and inserts a new piece of HTML instead of it.
        
        nodeValue/data: text node content
            The content of a non-element node (text, comment). These two are almost the same, usually
             we use data. Can be modified.

            <body>
            Hello
            <!-- Comment -->
            <script>
                let text = document.body.firstChild;
                console.log(text.data); // Hello

                let comment = text.nextSibling;
                console.log(comment.data); // Comment
            </script>
            </body>

        textContent: pure text
            The text inside the element, basically HTML minus all <tags>. Writing into it puts the
             text inside the element, with all special characters and tags treated exactly as text.
              Can safely insert user-generated text and protect from unwanted HTML insertions.

            <div id="news">
            <h1>Headline!</h1>
            <p>Martians attack people!</p>
            </div>

            console.log(news.textContent);
            // Headline!
            // Martians attack people!

        The “hidden” property
            When set to true, does the same as CSS display:none.

        More properties
            DOM nodes also have other properties depending on their class. For instance, <input> 
            elements (HTMLInputElement) support value, type, while <a> elements (HTMLAnchorElement)
             support href etc. Most standard HTML attributes have a corresponding DOM property.
*/

/*

    Attributes and properties
        DOM properties
            Properties – is what’s in DOM objects.
            i.e. let’s create a new property in document.body
*/
            document.body.details = {
                name: 'James',
                role: 'Midfielder'
            };
            console.log(document.body.details.role); // Midfielder
/*
        So, DOM properties and methods behave just like those of regular JavaScript objects:
            - They can have any value.
            - They are case-sensitive (write elem.nodeType, not elem.NoDeTyPe).

        HTML attributes
            Attributes – is what’s written in HTML.
            So when an element has id or another standard attribute, the corresponding property gets
             created. But that doesn’t happen if the attribute is non-standard.
            
            <body id="homepage" something="non-standard">
            <script>
                console.log(document.body.id); // homepage
                // non-standard attribute does not yield a property
                console.log(document.body.something); // undefined
            </script>
            </body>

            Methods to work with attributes are:
                - elem.hasAttribute(name) – to check for existence.
                - elem.getAttribute(name) – to get the value.
                - elem.setAttribute(name, value) – to set the value.
                - elem.removeAttribute(name) – to remove the attribute.
                - elem.attributes is a collection of all attributes.
        
        Property-attribute synchronization
            <input>
*/
            let input = document.querySelector('input');
            // attribute => property
            input.setAttribute('id', 'id');
            alert(input.id); // id (updated)

            // property => attribute
            input.id = 'newId';
            alert(input.getAttribute('id')); // newId (updated)

/*
            In the example above:
                - Changing the attribute value updates the property.
                - But the property change does not affect the attribute.
        
        DOM properties are typed
            DOM properties are not always strings. For instance, the input.checked property
             (for checkboxes) is a boolean
            e.g. 
            <input id="input" type="checkbox" checked> checkbox>
            <div id="div" style="color:red;font-size:120%">Hello</div>
            The style attribute is a string, but the style property is an object

        Non-standard attributes, dataset
            Sometimes non-standard attributes are used to pass custom data from HTML to JavaScript,
             or to “mark” HTML-elements for JavaScript.
            
            <!-- mark the div to show "name" here -->
            <div show-info="name"></div>
            <!-- and age here -->
            <div show-info="age"></div>
*/
            // the code finds an element with the mark and shows what's requested
            let user = {
                name: "James",
                age: 32
            };

            for(let div of document.querySelectorAll('[show-info]')) {
                // insert the corresponding info into the field
                let field = div.getAttribute('show-info');
                div.innerHTML = user[field]; // James, then age
            }
/*
            All attributes starting with “data-” are reserved for programmers’ use. They are
             available in the dataset property.
            Multiword attributes like data-order-state become camel-cased: dataset.orderState.
            Using data-* attributes is a valid, safe way to pass custom data.
*/

/*
    Modifying the document
        DOM modifications is the key to create “live” pages.

        Methods to create new nodes:
            - document.createElement(tag) – creates an element with the given tag
            - document.createTextNode(value) – creates a text node (rarely used)
            - elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.
*/
            let div = document.createElement('div');
            let textNode = document.createTextNode('This is me.');

            let div = document.createElement('div');
            div.className = "alert alert-success";
            div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
/*
        Insertion and removal of nodes:
            From the parent:
                - parent.appendChild(node)
                    Appends node as the last child of parentElem.
                - parent.insertBefore(node, nextSibling)
                    Inserts node before nextSibling into parentElem.
                - parent.removeChild(node)

                - parentElem.replaceChild(node, oldChild)
                    Replaces oldChild with node among children of parentElem.
            All these methods return node.

        This set of methods provides more flexible insertions:
            - node.append(...nodes or strings) – append nodes or strings at the end of node,
            - node.prepend(...nodes or strings) – insert nodes or strings into the beginning of node,
            - node.before(...nodes or strings) –- insert nodes or strings before the node,
            - node.after(...nodes or strings) –- insert nodes or strings after the node,
            - node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
            - node.remove() –- remove the node.

        Given a piece of HTML: elem.insertAdjacentHTML(where, html), inserts depending on where:
            - "beforebegin" – insert html right before elem,
            - "afterbegin" – insert html into elem, at the beginning,
            - "beforeend" – insert html into elem, at the end,
            - "afterend" – insert html right after elem.

        The call elem.cloneNode(true) creates a “deep” clone of the element – with all attributes
         and subelements. If we call elem.cloneNode(false), then the clone is made without child
          elements.
        
        Also there are similar methods elem.insertAdjacentText and elem.insertAdjacentElement,
         they insert text strings and elements, but they are rarely used.

        document.write(html) -  appends HTML to the page before it has finished loading.
*/

/*
    Styles and classes
        To manage classes, there are two DOM properties:
            - className – the string value, good to manage the whole set of classes.
            - classList – the object with methods add/remove/toggle/contains, good for
              individual classes.

        Methods of classList:
            - elem.classList.add/remove("class") – adds/removes the class.
            - elem.classList.toggle("class") – if the class exists, then removes it,
               otherwise adds it.
            - elem.classList.contains("class") – returns true/false, checks for the given class.

        Element style
            The property elem.style is an object that corresponds to what’s written in the "style"
             attribute. Setting elem.style.width="100px" works as if we had in the attribute
              style="width:100px".

        To change the styles:
            - The style property is an object with camelCased styles. Reading and writing to it has
             the same meaning as modifying individual properties in the "style" attribute. To see
              how to apply important and other rare stuff – there’s a list of methods at MDN.
            - The style.cssText property corresponds to the whole "style" attribute, the full string
               of styles.

        There are two concepts in CSS:
            - A computed style value is the value after all CSS rules and CSS inheritance is
               applied, as the result of the CSS cascade. It can look like height:1em or
                font-size:125%.

            - A resolved style value is the one finally applied to the element. Values like 1em or
               125% are relative. The browser takes the computed value and makes all units fixed
                and absolute, for instance: height:20px or font-size:16px. For geometry properties
                 resolved values may have a floating point, like width:50.5px.
*/

/*
    Element size and scrolling
        Elements have the following geometry properties:
            - offsetParent – is the nearest positioned ancestor or td, th, table, body.
            - offsetLeft/offsetTop – coordinates relative to the upper-left edge of offsetParent.
            - offsetWidth/offsetHeight – “outer” width/height of an element including borders.
            - clientLeft/clientTop – the distance from the upper-left outer corner to its upper-left
               inner corner. For left-to-right OS they are always the widths of left/top borders.
                For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its
                 width too.
            - clientWidth/clientHeight – the width/height of the content including paddings, but
               without the scrollbar.
            - scrollWidth/scrollHeight – the width/height of the content including the scrolled
             out parts. Also includes paddings, but not the scrollbar.
            - scrollLeft/scrollTop – width/height of the scrolled out part of the element, starting
              from its upper-left corner.
        All properties are read-only except scrollLeft/scrollTop. They make the browser scroll the
         element if changed.
*/

/*
    Window sizes and scrolling
        Width/height of the visible part of the document (content area width/height):
         document.documentElement.clientWidth/Height
        Width/height of the whole document, with the scrolled out part:
*/
        let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
        );
        console.log(scrollHeight)
/*
        Scrolling:
            Read the current scroll: window.pageYOffset/pageXOffset.
            Change the current scroll:
                - window.scrollTo(pageX,pageY) – absolute coordinates,
                - window.scrollBy(x,y) – scroll relative the current place
                - elem.scrollIntoView(top) – scroll to make elem visible
                   (align with the top/bottom of the window).
*/

/*
    Coordinates
        Any point on the page has coordinates:
            - Relative to the window – elem.getBoundingClientRect().
            - Relative to the document – elem.getBoundingClientRect() plus the current page scroll.
        
        elementFromPoint(x, y)
            The call to document.elementFromPoint(x, y) returns the most nested element at window
             coordinates (x, y).

        For out-of-window coordinates the elementFromPoint returns null

        Window coordinates are great to use with position:fixed, and document coordinates do well
         with position:absolute.

        Both coordinate systems have their “pro” and “contra”, there are times we need one or the
         other one, just like CSS position absolute and fixed.
*/
