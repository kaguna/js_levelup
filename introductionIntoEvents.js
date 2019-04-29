/*
    Introduction to browser events
        An event is a signal that something has happened.

        Event handlers
             handler – a function that runs in case of an event.
             There are 3 ways to assign event handlers:
                - HTML attribute: onclick="...". A handler can be set in HTML with an attribute
                  named on<event>. e.g. onClick, onKeyPress e.t.c 
                - DOM property: elem.onclick = function.
                - Methods: elem.addEventListener(event, handler[, phase]) to add,
                  removeEventListener to remove.
                
        Accessing the element: this
            The value of this inside a handler is the element.
            e.g.
            <button onclick="alert(this.innerHTML)">Click me</button>
        
        Possible mistakes
            - The function should be assigned as sayThanks, not sayThanks().
            - Use functions, not strings.
                The assignment elem.onclick = "alert(1)" would work too. It works for compatibility
                 reasons, but strongly not recommended.
            - Don’t use setAttribute for handlers.
            - DOM-property case matters.
        
        addEventListener
            synntax: 
            element.addEventListener(event, handler[, options]);

            The method is immune from the overwriting of the the old DOM properties.
            event
                - Event name, e.g. "click".
            handler
                - The handler function.
            options
                An additional optional object with properties:
                - once: if true, then the listener is automatically removed after it triggers.
                - capture: the phrase where to handle the event, to be covered later in the chapter
                  Bubbling and capturing. For historical reasons, options can also be false/true, 
                  that’s the same as {capture: false/true}.
                - passive: if true, then the handler will not preventDefault(), we’ll cover that
                  later in Browser default actions.

        Event object
            When an event happens, the browser creates an event object, puts details into it and
             passes it as an argument to the handler.
            
            <input type="button" value="Click me" id="elem">
*/
            elem.onclick = function(event) {
                // show event type, element and coordinates of the click
                console.log(event.type + " at " + event.currentTarget);
                console.log("Coordinates: " + event.clientX + ":" + event.clientY);
            };
/*            
            Some properties of event object:
                - event.type
                    Event type, here it’s "click".
                - event.currentTarget
                    Element that handled the event. That’s exactly the same as this, unless you bind
                     this to something else, and then event.currentTarget becomes useful.
                - event.clientX / event.clientY
                    Window-relative coordinates of the cursor, for mouse events.

        Object handlers: handleEvent
            when addEventListener receives an object as the handler, it calls
             object.handleEvent(event) in case of an event.
            
            No matter how you assign the handler – it gets an event object as the first argument.
             That object contains the details about what’s happened.
*/
