# Aniation

## Keyframes
- Two parts
    1. Define
    2. Assign

```css
    /* Step1: Defines a keyframe animation called blink
       50% of the way through the animation, the color changes from white to red
       Note: Make sure that the keyframe prefixes match up with the gradient prefixes
    */
    @keyframes blink {
      50% {
        background: radial-gradient(circle, red 15%, transparent 40%), #cc5;
      }
    }
    @-webkit-keyframes blink {
      50% {
        background: -webkit-radial-gradient(circle, red 15%, transparent 40%), #cc5;
      }
    }
    @-moz-keyframes blink {
      50% {
        background: -moz-radial-gradient(circle, red 15%, transparent 40%), #cc5;
      }
    }

    .brain {
      /* Step2: Assign the animation defined above
         Half a secondd long, repeating infinitely
         This can be a separate class
      */
              animation: blink .5s infinite;
      -webkit-animation: blink .5s infinite;
         -moz-animation: blink .5s infinite;

      background:         radial-gradient(circle, white 15%, transparent 40%), #cc5;
      background: -webkit-radial-gradient(circle, white 15%, transparent 40%), #cc5;
      background:    -moz-radial-gradient(circle, white 15%, transparent 40%), #cc5;
      
      background-size: 75px 150px;   /* width height */
      
      height: 150px;
      width: 150px;
      border-radius: 60px 60px 10px 10px;
      border-bottom: 40px solid #666;

      position: relative;
      left: 70px;
    }
```

==

## Turn on/off the animation effect using jQuery
```html
  <div class="brain"></div>
  <button class="flash">laser eyes on/off</button>

  <script>
  $(".flash").click( function() {
    $(".brain").toggleClass("laser");
  });
  </script>
```

```css
    /* Defines a keyframe animation called blink
       50% of the way through the animation, the color changes from white to red
       Make sure that the keyframe prefixes match up with the gradient prefixes
    */
    @keyframes blink {
      50% {
        background: radial-gradient(circle, red 15%, transparent 40%), #cc5;
        background-size: 75px 150px;   /* width height */
      }
    }
    @-webkit-keyframes blink {
      50% {
        background: -webkit-radial-gradient(circle, red 15%, transparent 40%), #cc5;
        background-size: 75px 150px;   /* width height */
      }
    }
    @-moz-keyframes blink {
      50% {
        background: -moz-radial-gradient(circle, red 15%, transparent 40%), #cc5;
        background-size: 75px 150px;   /* width height */
      }
    }

    /* Applies flashing effect */
    .laser {
              animation: blink .5s infinite;
      -webkit-animation: blink .5s infinite;
         -moz-animation: blink .5s infinite;
    }

    .brain {
      background:         radial-gradient(circle, white 15%, transparent 40%), #cc5;
      background: -webkit-radial-gradient(circle, white 15%, transparent 40%), #cc5;
      background:    -moz-radial-gradient(circle, white 15%, transparent 40%), #cc5;

      background-size: 75px 150px;   /* width height */

      height: 150px;
      width: 150px;
      border-radius: 60px 60px 10px 10px;
      border-bottom: 40px solid #666;
    }

```
