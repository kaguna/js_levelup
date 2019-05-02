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
