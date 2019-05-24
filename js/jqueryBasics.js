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
