# Stylesheet basics
- http://css3clickchart.com/#box-sizing
- Note: Enter the style names in alphabetical order so that we can make our stylesheets easier to manage

## CSS reset code
- http://cssreset.com/

==

## Defining a styling rule

### User-defined styles

- Modifies the default setting of the browser's internal stylesheet

### External stylesheets

- Stored in an external stylesheet
- Loaded after internal and user-defined stylesheets
- Take precedence over any rules set in the browser's internal stylesheet or in a user-defined stylesheet

```html
<link href="nishiguchi_styles.css" rel="stylesheet" type="text/css" />
```

### Embedded stylesheets

- Inserted directly within the head element of the HTML document, using the style element
- Applied only in the web page in which it is placed
- Note: Always place embedded stylesheets  after external stylesheets to avoid confusion about which stylesheet is loaded last

```html
<style type="text/css">
     h1 {
        text-align: center;
     }
     p {
        color: pink;
        font-size: 50px;
     }
</style>
```

### Inline styles

- Applied directly to specific elements, using the style element
- Not recommended
```html
 <h4 style="color: green; text-align: center;">Course Outline</h4>
```

### Importing style rules from other style sheets
- https://developer.mozilla.org/en-US/docs/Web/CSS/@import

```css
/* Import layout style sheet */
@import url(cw_layout.css);
```

==

## Precedence
- The stylesheet that is loaded last has precedence over stylesheets loaded earlier

### the order in which styesheets are interpreted
[ACCESSED LAST]

1. author's inline styles
2. author's embedded stylesheet
3. author's external stylesheet
4. user-defined styles
5. browser's nternal stylesheet

[ACCESSED FIRST]

==

## Colors

### RGB triplet
- Describes 256^3(16.7million) possibe colors, which is a greater number of colors than the human eye can distinguish.
- The format
    + `#FFFF00`
    + `rgb(255, 255, 0)`
    + `rgb(100%, 65%, 0%)`

### HSL color values
- Describes colors based on hue, saturation and lightness
- [wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)

#### Hue
- the tint of the color and is based on the color's **location on the color wheel**
- ranges 0..360 degrees, where { 0: red, 120: green, 240: blue }

#### Saturation:
- Measures the **intensity** of the color
- ranges 0..100%, where  where { 0%: no color, 100%: full color }

#### Lightness:
- Measures the **brightness** of the color
- ranges from 0..100%, where { 0%: black, 100%: whilte }

### Opacity values in CSS3
- Specified using either of the folllowing `rgba` and `hsla` color values
- Set the transparency of the color as a decimal
- Ranges from 0.0 up to 1.0, where { 0.0: completely transparent, 1.0: completely opaque }

==

## Progressive enhancement
- Placing code conforming to older standards before newer properties
- E.g., Older browsers that do not support CSS3 will ignore the RGBA

==

## Style inheritance
- passed from a parent element to its children
- not all properties are inherited
- The summary of every CSS property definition says whether that property is inherited by default ("Inherited: Yes") or not inherited by default ("Inherited: no"). This controls what happens when no value is specified for a property on an element.

- https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance
- http://www.w3schools.com/cssref/css_inherit.asp
- [css-properties-are-inherited](http://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)

==

## Contextual selectors
- [保存版！CSS3セレクタの説明書](http://weboook.blog22.fc2.com/blog-entry-287.html)
- [CSS3 structural pseudo-class selector tester](http://lea.verou.me/demos/nth.html)
- [w3.org](http://www.w3.org/TR/CSS21/selector.html%23id-selectors)
- [w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp)
- http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

### *
- Select **all elements** in the document
- aka wildcard selector

### e
- Select **any element e** in the document

### e1, e2, ...
- Select the **group** of elements e1, e2, ...

### e f
- **descendent selector**
- Select any element f that is a **descendent of** an element e

### e>f
- *child selector*
- Select any element f that is a **direct child of** an element e
- https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors

### e+f
- **adjacent selector**
- Select any element f that is placed **immediately after** an element e

### e~f
- **sibling combinator**
- Select any element f that is a **sibling to** an element e
- similar to e+f, but less strict

==

## Attribute selectors

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [w3schools](http://www.w3schools.com/css/css_attribute_selectors.asp)

==

## Creating a link to #id_name

```html
<!--Define an element id-->
<body>
   <header id="top">
      ...
   </header>
</body>

<!--Create a link to an #id_name-->
<a href="index.htm#top">Back to top of the page</a>
```

==

## Unicode - Geometric Shapes
- https://en.m.wikipedia.org/wiki/Geometric_Shapes

==

## Vendor_Prefix
- https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix
