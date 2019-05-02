/*
    Mouse events basics
        Simple events
            The most used simple events are:
            - mousedown/mouseup
                Mouse button is clicked/released over an element.
            - mouseover/mouseout
                Mouse pointer comes over/out from an element.
            - mousemove
                Every mouse move over an element triggers that event.

        Complex events
            - click
                Triggers after mousedown and then mouseup over the same element if the left mouse
                 button was used.
            - contextmenu
                Triggers after mousedown if the right mouse button was used.
            - dblclick
                Triggers after a double click over an element.

        Mouse events have the following properties:
            - Button: which: allows to get the exact mouse button.
            - Modifier keys (true if pressed): altKey, ctrlKey, shiftKey and metaKey (Mac).
                If you want to handle Ctrl, then don’t forget Mac users, they use Cmd, so it’s
                 better to check if (e.metaKey || e.ctrlKey).
            - Window-relative coordinates: clientX/clientY.
            - Document-relative coordinates: pageX/pageY.

        Mouseover/mouseout, relatedTarget
            These events are special, because they have a relatedTarget.
            For mouseover:
                - event.target – is the element where the mouse came over.
                - event.relatedTarget – is the element from which the mouse came.

            For mouseout the reverse:
                - event.target – is the element that mouse left.
                - event.relatedTarget – is the new under-the-pointer element (that mouse left for).

        Things that are good to note:
            - A fast mouse move can make mouseover, mousemove, mouseout to skip intermediate elements.
            - Events mouseover/out and mouseenter/leave have an additional target: relatedTarget.
              That’s the element that we are coming from/to, complementary to target.
            - Events mouseover/out trigger even when we go from the parent element to a child element.
              They assume that the mouse can be only over one element at one time – the deepest one.
            - Events mouseenter/leave do not bubble and do not trigger when the mouse goes to a
              child element. They only track whether the mouse comes inside and outside the element
               as a whole.
*/

/*
    Drag'n'Drop with mouse events
        The key components:
            - Events flow: ball.mousedown → document.mousemove → ball.mouseup
              (cancel native ondragstart).
            - At the drag start – remember the initial shift of the pointer relative to the element:
              shiftX/shiftY and keep it during the dragging.
            - Detect droppable elements under the pointer using document.elementFromPoint.

        We can lay a lot on this foundation.
            - On mouseup we can finalize the drop: change data, move elements around.
            - We can highlight the elements we’re flying over.
            - We can limit dragging by a certain area or direction.
            - We can use event delegation for mousedown/up. A large-area event handler that checks
              event.target can manage Drag’n’Drop for hundreds of elements.
        
        Keyboard: keydown and keyup
            The keydown events happens when a key is pressed down, and then keyup –
             when it’s released.

            event.code and event.key
                The key property of the event object allows to get the character, while the code
                 property of the event object allows to get the “physical key code”.
                
                Key(Z) - event.key(z (lowercase)) - event.code(KeyZ)
*/
