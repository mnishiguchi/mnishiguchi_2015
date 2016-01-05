# Array

## Sorting an object array.

- http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects/979325#979325

**by string**

```js
[
    {
        category : "Sporting Goods",
           price : "49.99",
         stocked : true,
            name : "Football"
    },
    {
        category : "Sporting Goods",
           price : "9.99",
         stocked : true,
            name : "Baseball"
    },
    ...
]
```


```js
// Sort the filtered products by category.
filtered = filtered.sort( function(a, b) {

    return a.category.localeCompare( b.category );

});
```

## Removing duplicate objects from an array
- http://stackoverflow.com/questions/19501441/remove-duplicate-objects-from-an-array-using-javascript

```js
/**
 * Usage: uniqueDishes = removeDuplicatesFromObjArray(products, "name");
 * @param  arr
 * @param  field
 * @return unique array.
 */
function removeDuplicatesFromObjArray( arr, field ) {

  var uniq = [];
  arr.reduce( function ( a, b ) {
    if ( a[ field ] !== b[ field ] ) {
      uniq.push( b );
    } else {
      console.info( "Dupulicate removed: %s", a[ field ]);
    }
    return b;
  }, []);

  return uniq;

} // end removeDuplicatesFromObjArray
```
