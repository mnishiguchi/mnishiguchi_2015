# Responsive design ~ Mobile best practices
- The goal: to make our website look great no matter which device we are on.
- Some CSS tricks (max-width, @media, etc)
- Make our content adapt gracefully to different screen widths
- Avoid these:
  + Flash-only page
  + PDF-only document
  + auto-playing music

==

## Need special stylesheet for vertically-oriented phones
- Many smartphones, when horizontally-oriented, are more than 700px wide. So are al most all tablets, regardless of orientattion. So, the only screen we'll need to set up a special stylesheet for are vertically-oriented phones.

==

## margin: 0 auto;
- Aligns an element center

==

## max-width
- Use max-width instead of width
- When the screen size is smaller than the specified value, the content get reorganized to adjust the device size.
```css
article {
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
}
```

==

## image size
- Use `background-size: cover;` instead of `background-size: 100%`;
- Do NOT assign images a specific width and height with CSS, unless necessary

### cover vs 100%
- With background-size set to 100%, When the screen size is less than the width of the image, the height becomes less than the original value.

==

## media query
- Allows us to set CSS styles that only activate when the browser is a certain width
- Some things to consider:
  + Page header (font-size, margin, line-height etc)
```css
@media (max-width: 500px) {
  body {
    background: red;
  }
}
```

```css
@media (max-width: 500px) {
  h1 {
    font-size: 36px;
  }
  li {
    display: block;
    padding: 5px;
  }
}
```

==

## Bootstrap breakpoints
- https://scotch.io/bar-talk/whats-new-in-bootstrap-4

```scss
$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 34em,
  // Medium screen / tablet
  md: 48em,
  // Large screen / desktop
  lg: 62em,
  // Extra large screen / wide desktop
  xl: 75em
) !default;
```

==

## Extra whitespace for readability
- At smaller sizes, whitespace increases readability


