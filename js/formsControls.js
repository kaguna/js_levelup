/*
    Form properties and methods
        Form navigation:
            - document.forms
                A form is available as document.forms[name/index].
            - form.elements
                Form elements are available as form.elements[name/index], or can use just
                 form[name/index]. The elements property also works for <fieldset>.
            - element.form
                Elements reference their form in the form property.

            Value is available as input.value, textarea.value, select.value etc, or input.checked
             for checkboxes and radio buttons.

            For <select> we can also get the value by the index select.selectedIndex or through the
             options collection select.options. 

    Focusing: focus/blur
        An element receives a focus when the user either clicks on it or uses the Tab key on the
         keyboard. There’s also an autofocus HTML attribute that puts the focus into an element by
          default when a page loads and other means of getting a focus.

        The focus event is called on focusing, and blur – when the element loses the focus.

        Let’s use them for validation of an input field.
            In the example below:
                - The blur handler checks if the field the email is entered, and if not –
                  shows an error.
                - The focus handler hides the error message (on blur it will be checked again):

            <style>
            .invalid { border-color: red; }
            #error { color: red }
            </style>

            Your email please: <input type="email" id="input">

            <div id="error"></div>
*/          input.onblur = function() {
                if (!input.value.includes('@')) { // not email
                    input.classList.add('invalid');
                    error.innerHTML = 'Please enter a correct email.'
                }
            };

            input.onfocus = function() {
                if (this.classList.contains('invalid')) {
                    // remove the "error" indication, because the user wants to re-enter something
                    this.classList.remove('invalid');
                    error.innerHTML = "";
                }
            };
/*
        Methods elem.focus() and elem.blur() set/unset the focus on the element.
        Events focus and blur trigger on focusing/losing focus on the element.
            Their specials are:
                - They do not bubble. Can use capturing state instead or focusin/focusout.
                - Most elements do not support focus by default. Use tabindex to make anything
                  focusable.
                - The current focused element is available as document.activeElement.

    Events: change, input, cut, copy, paste
        change - A value was changed -> For text inputs triggers on focus loss.
        input - For text inputs on every change -> Triggers immediately unlike change.
        cut/copy/paste - Cut/copy/paste actions -> The action can be prevented. The event.clipboardData
         property gives read/write access to the clipboard.

    Form submission: event and method submit
        Event: submit
            There are two main ways to submit a form:
                - The first – to click <input type="submit"> or <input type="image">.
                - The second – press Enter on an input field.
            Both actions lead to submit event on the form. The handler can check the data, and if
             there are errors, show them and call event.preventDefault(), then the form won’t be
              sent to the server.
            
        Method: submit
            To submit a form to the server manually, we can call form.submit()
            Then the submit event is not generated. It is assumed that if the programmer calls
             form.submit(), then the script already did all related processing.
*/
