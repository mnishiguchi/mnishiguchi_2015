# Disable links
- http://stackoverflow.com/questions/2091168/disable-a-link-using-css
- https://css-tricks.com/pointer-events-current-nav/
- https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
- https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

```css
.disabled-link {
   pointer-events: none;
   cursor: default;
}

.active-link {
  pointer-events: auto;
  cursor: auto;
}
```
