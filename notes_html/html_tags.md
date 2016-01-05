# Some HTML tags

## Telling the browsers we are using HTML5
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!--some boilerplate (meta info)-->
        <meta charset="UTF-8">
        <title>Document</title>
    </head>

    <body>
        <!--content-->
    </body>
</html>
```

==

## Sementic tags
- article
- nav
- header
- footer
- Compare to: div that is non-semantic and multi-purpose

==

## Creating a navigation list

```html
<nav>
    <ul>
        <li></li>
        <li></li>
    </ul>
</nav>
```

==

## HTML `<hgroup>` tag
- represents a group of headings
- http://www.w3.org/TR/html-markup/hgroup.html
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup

```html
<!---->
<hgroup>
    <h1>Title</h1>
    <h2>Subtitle</h2>
</hgroup>
```

==

## HTML `<figure>` tag
- mark up a photo in a document
- http://www.w3schools.com/tags/tag_figure.asp

```html
<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
    <figcaption>caption</figcaption>
</figure>
```

==

## One-sided tags
- E.g. `<br />`, `<hr>`, etc

==

## meta
- `<meta name="..." content="...">`
- provides metadata about the HTML document.
    + keywords for search engines
    + etc
- http://www.w3schools.com/tags/tag_meta.asp

==

## pre
- `<pre>`
- Preformatted text
- Displayed in a fixed-width font (usually Courier)
- Preserves both spaces and line breaks.
- http://www.w3schools.com/tags/tag_pre.asp

### Creating tables with preformatted text
- Can make simple tables quickly
- Preformatted text is displayed by browsers in a monospace font in which each letter takes up the same amount of space
```html
<pre>
Time   Saturday   Sunday
====   ========   ========
7:30   Breakfast  Study
8:00   something  something
</pre>
```


