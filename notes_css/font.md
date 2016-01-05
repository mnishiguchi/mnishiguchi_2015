# Font

## Font family
- [Commonly Used Font Combinations](http://www.w3schools.com/cssref/css_websafe_fonts.asp)
- http://www.w3schools.com/cssref/pr_font_font-family.asp
- If a font name contains white-space, it must be quoted. Single quotes must be used when using the "style" attribute in HTML.
- If the browser does not support the first font, it tries the next font.

```css
h1#top {
  font-family: Arial, Helvetica, sans-serif;
}

p {
    font-family: "Times New Roman", Georgia, Serif;
}
```

==

## Google web fonts
- one free, easy-to-use resource
- http://www.google.com/fonts/

==

## Combining all text formatting in a single style
- font: font-style font-variant font-weight font-size/font-height font-family;
- Do not have to include all of the values in the font property
- The only required values: **font-size** and **font-family**

```css
footer address {
    background-color: rgb(55, 102, 55);
    color: white;
    color: rgba(255, 255, 255, 0.8);
    font: normal small-caps 0.8em/4em 'Times New Roman', Times, Serif;
    text-align: center;
}
```
