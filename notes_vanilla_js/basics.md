# JavaScript basics

## Converting jQuery code into vanilla
- https://gist.github.com/liamcurry/2597326
- http://bl.ocks.org/joyrexus/5322252
- http://gomakethings.com/ditching-jquery-for-vanilla-js/

==

## querySelector and querySelectorAll vs getElementsByClassName and getElementById
- http://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid

==

```javascript
// $(document).ready equivalent without jQuery
document.addEventListener("DOMContentLoaded", function(event) { 
  //do something
});
```

==

## Getting child element
- http://stackoverflow.com/questions/10567709/javascript-get-child-element
```javascript
aDiv.getElementsByTagName("P")[0].scrollTop = 0;
```

==

## Resetting scroll position
```javascript
var aDiv = document.getElementById('aDivId');
aDiv.scrollTop = 0;
```

==

## Inspecting code using console.log(...) or alert(...)

### Printing the content of an array
- Using console.log(aArrayName) or alert(aArrayName), we can inspect all the elements that the array currently holds.

## Printing the content of a function
- Using console.log(aFuncName) or alert(aFuncName), we can inspect the actual code.

==







