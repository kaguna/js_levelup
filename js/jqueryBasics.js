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
