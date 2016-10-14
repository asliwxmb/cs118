## showElement(id)

Category: UI controls

Shows the element with the provided id.

The user interface elements you place on the screen on not static. Your app sometimes needs to move, resize, hide or show them. All UI elements (button(), textInput(), textLabel(), dropDown(), checkBox(), radioButton(), image()), can be shown.

### Examples
```javascript
image("logo", "http://code.org/images/logo.png");
button("hideButton", "Hide logo");
button("showButton", "Show logo");
onEvent("hideButton", "click", function(event) {
  hideElement("logo");
});
onEvent("showButton", "click", function(event) {
  showElement("logo");
});
