# Flashing
- [Some tricks](http://black-flag.net/jquery/20120124-3649.html)
- [Can be done in CSS as well](http://www.will-hp.com/wpblog/web/72/)

```js
setInterval(function() {
    $('#blink').fadeOut.fadeIn(500);
}, 1000);
```

```js
$("div#startBlink").on('click', function(){
    $self = $(this);
    setInterval(function(){
      $self.fadeOut(1500).fadeIn(1500);
    },1000)
});
```

