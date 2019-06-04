/*
    jQuery Introduction
        The purpose of jQuery is to make it much easier to use JavaScript on your website.
        jQuery is a lightweight, "write less, do more", JavaScript library.
        The jQuery library contains the following features:
            - HTML/DOM manipulation
            - CSS manipulation
            - HTML event methods
            - Effects and animations
            - AJAX
            - Utilities

    Syntax
       $(selector).action()

       - $ => define/access jQuery
       - (selector) => "querys (or find)" HTML elements
       - action() => action to be performed on the element(s)

       e.g. 
        $(this).hide() - hides the current element.

        The Document Ready Event prevents any jQuery code from running before the document is
         finished loading (is ready).
         i.e.

        $(document).ready(function(){
            // jQuery methods go here...
        });
 
    jQuery Event Methods
        All the different visitors' actions that a web page can respond to are called events.

        Commonly used Jquery event methods
            - $(document).ready() - allows us to execute a function when the document is fully loaded
            - click() - executed when the user clicks on the HTML element.
            - dblclick() - executed when the user double-clicks on the HTML element
            - mouseenter() - executed when the mouse pointer enters the HTML element.
            - mouseleave() - executed when the mouse pointer leaves the HTML element.
            - mousedown() - executed, when the left, middle or right mouse button is pressed down,
               while the mouse is over the HTML element
            - mouseup() - executed, when the left, middle or right mouse button is released, while
               the mouse is over the HTML element
            - hover() - executed when the mouse enters the HTML element, and the second function is
               executed when the mouse leaves the HTML element.
            - focus() - executed when the form field gets focus
            - blur() - executed when the form field loses focus
*/

/*
jQuery Effects
*/

/*
   - jQuery hide() and show()
        syntax: 
            - $(selector).hide(speed,callback);
            - $(selector).show(speed,callback);
        The optional speed parameter specifies the speed of the hiding/showing, and can take the
         following values: "slow", "fast", or milliseconds.

    - toggle()
        You can also toggle between hiding and showing an element with the toggle() method
        Syntax:
            - $(selector).toggle(speed,callback);
    
    - fadeIn() - used to fade in a hidden element
    - fadeOut() - used to fade out a visible element
    - fadeToggle() - fadeToggle() method toggles between the fadeIn() and fadeOut() methods
    - fadeTo() - allows fading to a given opacity (value between 0 and 1)

    - slideDown() - used to slide down an element
    - slideUp() - used to slide up an element
    - slideToggle() - toggles between the slideDown() and slideUp() methods

    jQuery Animations - The animate() Method
        - animate() method is used to create custom animations
        Syntax:
            - $(selector).animate({params},speed,callback);

    NB: By default, all HTML elements have a static position, and cannot be moved.
        To manipulate the position, remember to first set the CSS position property of the element
         to relative, fixed, or absolute!

        - Manipulate Multiple Properties e.g.
            multiple properties can be animated at the same time.

            <body>
                <button>Start Animation</button>
                <p>By default, all HTML elements have a static position, and cannot be moved. To
                manipulate the position, remember to first set the CSS position property of the
                element to relative, fixed, or absolute!</p>

                <div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>
            </body>
*/
            $("button").click(function(){
                $("div").animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
                });
            }); 
/*
        - Using Relative Values
            It is also possible to define relative values (the value is then relative to the
                 element's current value). This is done by putting += or -= in front of the value
*/
            $("button").click(function(){
                $("div").animate({
                left: '250px',
                height: '+=150px',
                width: '+=150px'
                });
            }); 

/*
        - Using Pre-defined Values
            You can even specify a property's animation value as "show", "hide", or "toggle"
*/
            $("button").click(function(){
                $("div").animate({
                height: 'toggle'
                });
            }); 
/*
        - Uses Queue Functionality
            if you want to perform different animations after each other, we take advantage of the
              queue functionality
*/
            $("button").click(function(){
                var div = $("div");
                div.animate({height: '300px', opacity: '0.4'}, "slow");
                div.animate({width: '300px', opacity: '0.8'}, "slow");
                div.animate({height: '100px', opacity: '0.4'}, "slow");
                div.animate({width: '100px', opacity: '0.8'}, "slow");
            }); 
/*
    jQuery stop() Method
        used to stop an animation or effect before it is finished.
        Syntax:
            $(selector).stop(stopAll,goToEnd);
*/
        $("#stop").click(function(){
            $("#panel").stop();
        });
/*
    jQuery Callback Functions
        A callback function is executed after the current effect is finished.
        The example below has a callback parameter that is a function that will be executed after
         the hide effect is completed
*/
        $("button").click(function(){
            $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
            });
        });
/*
    jQuery Method Chaining
        Chaining allows us to run multiple jQuery methods (on the same element) within a single
         statement.
        e.g.
            $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
*/

/*
    jQuery HTML
        - One very important part of jQuery is the possibility to manipulate the DOM.
        - Three simple, but useful, jQuery methods for DOM manipulation are:
            - text() - Sets or returns the text content of selected elements
            - html() - Sets or returns the content of selected elements (including HTML markup)
            - val() - Sets or returns the value of form fields
        
        Get Attributes - attr()
            - used to get attribute values.
*/
            $("button").click(function(){
                alert($("#w3s").attr("href"));
            });            
/*
        Set Content - text(), html(), and val()
*/
            $("#btn1").click(function(){
                $("#test1").text("Hello world!");
            });
            $("#btn2").click(function(){
                $("#test2").html("<b>Hello world!</b>");
            });
            $("#btn3").click(function(){
                $("#test3").val("Dolly Duck");
            });
/*
        Set Attributes - attr()
*/
            $("button").click(function(){
                $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
            });
/*
            The attr() method also allows you to set multiple attributes at the same time.
*/
                $("button").click(function(){
                    $("#w3s").attr({
                    "href" : "https://www.w3schools.com/jquery/",
                    "title" : "W3Schools jQuery Tutorial"
                    });
                });
/*
        jQuery - Add Elements
            - append() - Inserts content at the end of the selected elements
            - prepend() - Inserts content at the beginning of the selected elements
            - after() - Inserts content after the selected elements
            - before() - Inserts content before the selected elements
        
        jQuery - Remove Elements
            To remove elements and content, there are mainly two jQuery methods:
                - remove() - Removes the selected element (and its child elements)
                - empty() - Removes the child elements from the selected element        

        jQuery Manipulating CSS
            jQuery has several methods for CSS manipulation:
                - addClass() - Adds one or more classes to the selected elements
                - removeClass() - Removes one or more classes from the selected elements
                - toggleClass() - Toggles between adding/removing classes from the selected elements
                - css() - Sets or returns the style attribute
        
        jQuery css() Method
            It sets or returns one or more style properties for the selected elements.
            Return a CSS Property
                - css("propertyname"); e.g. $("p").css("background-color");
            
            Set a CSS Property
                - css("propertyname","value"); e.g. $("p").css("background-color", "yellow");

            Set Multiple CSS Properties
                - css({"propertyname":"value","propertyname":"value",...});

        jQuery Dimension Methods
            - width() - sets or returns the width of an element (excludes padding, border and margin).
            - height() - sets or returns the height of an element (excludes padding, border and margin).

            - innerWidth() - returns the width of an element (includes padding).
            - innerHeight() - returns the height of an element (includes padding).

            - outerWidth() - returns the width of an element (includes padding and border).
            - outerHeight() -  returns the height of an element (includes padding and border).         
*/
/*
    jQuery Traversing
*/
/*
        Traversing means move through and used to find( or select) HTML elements based on their
         relation to other elements.
        
        Traversing the DOM
            - jQuery provides a variety of methods that allow us to traverse the DOM.
            - The largest category of traversal methods are tree-traversal.

        1. Ancestors
            Three useful jQuery methods for traversing up the DOM tree are:
                - parent() - returns the direct parent element of the selected element.

                    $(document).ready(function(){
                        $("span").parent();
                    });

                - parents() -  returns all ancestor elements of the selected element, all the way
                  up to the document's root element (<html>).

                  $(document).ready(function(){
                        $("span").parents("ul");
                    });

                - parentsUntil() - returns all ancestor elements between two given arguments.
                    The following example returns all ancestor elements between a
                     <span> and a <div> element

                    $(document).ready(function(){
                        $("span").parentsUntil("div");
                    });
        
        2. Descendants
            - A descendant is a child, grandchild, great-grandchild, and so on.
            - Two useful jQuery methods for traversing down the DOM tree are:
                - children() - returns all direct children of the selected element.
                - find() - returns descendant elements of the selected element, all the way down
                           to the last descendant.
        
        3. Siblings
            - There are many useful jQuery methods for traversing sideways in the DOM tree:
                - siblings() - returns all sibling elements of the selected element.
                - next() - returns the next sibling element of the selected element.
                - nextAll() - returns all next sibling elements of the selected element.
                - nextUntil() - returns all next sibling elements of the selected element.
                - prev() - returns all next sibling elements between two given arguments.
                - prevAll() - they return previous sibling elements (traverse backwards along
                               sibling elements in the DOM tree, instead of forward).
                - prevUntil() - they return previous sibling elements (traverse backwards along
                                sibling elements in the DOM tree, instead of forward).

        4. Filtering
            The most basic filtering methods are first(), last() and eq(), which allow you to
             select a specific element based on its position in a group of elements.
            
            Other filtering methods, like filter() and not() allow you to select elements that
             match, or do not match, a certain criteria.
            
            - first() - returns the first element of the specified elements.
            - last() - returns the last element of the specified elements.
            - eq() - returns an element with a specific index number of the selected elements.
            - not() - returns all elements that do not match the criteria.
*/
