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

/*
    Bubbling and capturing
        The event handling process:
            - When an event happens – the most nested element where it happens gets labeled as the
              “target element” (event.target).
            - Then the event first moves from the document root down to the event.target, calling
              handlers assigned with addEventListener(...., true) on the way (true is a shorthand
                 for {capture: true}).
            - Then the event moves from event.target up to the root, calling handlers assigned
              using on<event> and addEventListener without the 3rd argument or with the 3rd
               argument false.

        Each handler can access event object properties:
            - event.target – the deepest element that originated the event.
            - event.currentTarget (=this) – the current element that handles the event
              (the one that has the handler on it)
            - event.eventPhase – the current phase (capturing=1, bubbling=3).

        Any event handler can stop the event by calling event.stopPropagation(), but that’s not
         recommended, because we can’t really be sure we won’t need it above

        Bubbling and capturing lay the foundation for “event delegation” – an extremely powerful
         event handling pattern
*/

/*
    Event delegation
        It’s often used to add same handling for many similar elements, but not only for that.

        The algorithm:
            - Put a single handler on the container.
            - In the handler – check the source element event.target.
            - If the event happened inside an element that interests us, then handle the event.

        Benefits:
            - Simplifies initialization and saves memory: no need to add many handlers.
            - Less code: when adding or removing elements, no need to add/remove handlers.
            - DOM modifications: we can mass add/remove elements with innerHTML and alike.
        
        Limitations:
            - First, the event must be bubbling. Some events do not bubble. Also, low-level
              handlers should not use event.stopPropagation().
            - Second, the delegation may add CPU load, because the container-level handler reacts
              on events in any place of the container, no matter if they interest us or not. But
               usually the load is negligible, so we don’t take it into account.     
*/
