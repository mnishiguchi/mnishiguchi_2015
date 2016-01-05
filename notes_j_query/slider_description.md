# slider description text

## How to do it
1. Add `opacity: 0;` to the element so that the element is hidden by default
2. Create a class (e.g. `class="show-description"`) and add it to the parent element
3. Create styles for when the element is shown
4. Use on-click listener and .toggleClass()
5. Add `transition` property for animation

HTML
```html
  <div class="first">
    <p>welsh onion soko <span class="price">$14</span><br />
      <small>
        Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.
      </small>
    </p>
  </div>
```

CSS
```css
    p {
      color: rgba(255, 255, 255, 1);
      background: #000;
      background: linear-gradient(to top, rgba(0,0,0,1) , rgba(0,0,0,.4));
      padding: 10px;
      text-align: justify;
      line-height: 28px;
      position: absolute;
      bottom: 0;
      margin: 0;
      height: 30px;
              transition: height .5s;
      -webkit-transition: height .5s;
         -moz-transition: height .5s;
    }
    small {
      opacity: 0;
    }

    /* For when description is shown */
    .show-description p {
      height: 150px;
    }
    .show-description small {
      opacity: 1;
    }
```

JS
```javascript
    // jQuery
    $(".menu div").on("click", function() {
      $(this).toggleClass("show-description");
    });
```

or

```javascript
    // Vanilla
    var menuItems = document.querySelector('.menu div');

    menuItems.addEventListener('click', function(e) {
        menuItems.classList.toggle('show-description');
    }, false);
```

```javascript
// Vanilla
[].forEach.call( document.querySelectorAll( '.menuItem div' ), function ( el ) {
    el.addEventListener( 'click', function () {
        el.classList.toggle('show-description');
    }, false );
});
```

