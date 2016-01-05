# jQuery basics

## .on( events [, selector ] [, data ], handler )
- attaches one or more event handlers for the selected elements and child elements.
- http://api.jquery.com/on/
- http://www.w3schools.com/jquery/event_on.asp
- To remove event handlers, use the off() method

```javascript
$("button").on("click", function() {
  alert("clicked!")
})
```

==

## Random numbers
- The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

```js
// Random number in range 0...255
Math.floor(Math.random() * 255)
```

==
