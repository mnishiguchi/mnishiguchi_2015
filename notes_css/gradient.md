# Gradient
- Two types
- http://www.w3schools.com/css/css3_gradients.asp

## RADIAL
- Radiate outward, in all directions from a central point
- Can be circle or ellipse
- Color can include size in pixels or in percent

```css
/* Standard syntax
background: radial-gradient(shape, centercolor, outercolor), backgroundcolor; */
background: radial-gradient(circle, while 15%, transparent 40%), #CC5;
```


## LINEAR
- Only go in one directioon in a line

```css
/* Standard syntax
background: linear-gradient(direction, start-color, end-color); */
background: #000;  /* graceful degration */
background: linear-gradient(to top, rgba(0,0,0,1) , rgba(0,0,0,.4));
```
