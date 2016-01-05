# Generating random background colors on button click

```js
/**
 * I ensure that document has been loaded.
 * https://api.jquery.com/ready/
 */
$( document ).ready(function(){

  /**
   * I change the backgrond color to a random color when clicked.
   */
  $( ".randomColor" ).click(function() {

    // Generate random values for RGB
    var red   = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue  = Math.floor(Math.random() * 255);

    // Prepare a CSS RGBA value as a string
    var randomRGBA = 'rgba(' + red + ',' + green + ',' + blue + ',1)';

    // Set the backbround to a new color
    $( this ).css( "background", randomRGBA );

  });

});
```
