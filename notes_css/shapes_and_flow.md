# Shapes and flow

## Making an empty dic visible
1. add width
2. add height
3. add background or border color

==

## border-radius
```css
/* All four corners the same border-radius */
div {
    border-radius: 20px;
}

/* topleft topright bottomright bottomleft */
div {
    border-radius: 20px 20px 0 0;
}
```

==

## border
```css
/* width style color
   style can be: solid, dashed, dotted or double */
div {
    border: width style color;
}
```

==

## triangle shape
```css
    .triangle {
      height: 0;
      width: 300px;
      
      border-left: 150px solid transparent;
      border-right: 150px solid transparent;
      border-bottom: 300px solid #000;
    }
```

==

## backbround-size
- Controls how many times and where backbround appears in the shape

```css
background: radial-gradient(circle, white 15%, transparent 40%), #CC5;
background: -moz-radial-gradient(circle, white 15%, transparent 40%), #CC5;
background: -webkit-radial-gradient(circle, white 15%, transparent 40%), #CC5;
background-size: 50% 100%;  /* width height */
height: 150px;
width: 150px;
```

==

## Hourglass shape
- Magical!!!

```css
width: 5px;
height: 0;
border: 5px solid transparent;
border-top: 10px solid #777;
border-bottom: 80px solid #888;
```

==

## CSS Positioning
- There are 5 ways to position things with CSS
- Use the position property
- Think of the screen as a grid
- Top left corner is (0, 0)
- The unit is px

### position: static
- default
- No positioning is applied at all

### position: relative
- Allows you to move things around on the page relative to other things
- use top right bottom left properties

```css
position: relative;
left: 140px;
```

### The z-index propperty
- 0 by default
- negative value to move something behind our main working layer
- positive valud to move something in front

```css
position: relative;
top: -620px;
left: 190px;
z-index: -1;
```

### The transform property
- lets us modify the coordinate space of the CSS visual formatting model.
- Elements can be translated, rotated, scaled, and skewed.
- Can be declared only one time for any item
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform
https://css-tricks.com/almanac/properties/t/transform/

```css
/* scaleY(-1)
   Creates a mirror image across the Y-axis */
        transform: scaleY(-1) rotate(20deg);
-webkit-transform: scaleY(-1) rotate(20deg);
   -moz-transform: scaleY(-1) rotate(20deg);
```


