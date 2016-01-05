# Tables

## Creating row groups
- Must be entered in the following order:
    - `<thead></thead>` 
    - `<tfoot></tfoot>`
    - `<tbody></tbody>`
- A table can contain multiple `<tbody>`s

```html
<table>
    <thead>
        table rows
    </thead>
    <tfoot>
        table rows
    </tfoot>
    <tbody>
        table rows
    </tbody>
</table>
```

==

## Creating column groups
- Enables us to assign a common format to all of the cells within a given column

```html
<colgroup>
 <col class="col-time" />
 <col class="cols-large-room" span="4" />
 <col class="cols-small-room" span="3" />
</colgroup>
```

```css
/* Column groups */

.reservation-info table col.timeColumn {
    background-color: #DDD;
}

.reservation-info table col.cols-small-room {
    background-color: #f5eafa;
}

.reservation-info table col.cols-large-room {
    background-color: #fff6df;
}
```

==

## Adding a table summary
- For non-visual browsers, such as aural browsers
- Includes a summary of a tables's contents
- Use the CSS caption-side property to position the caption

```html
<table summary="Lists which conference rooms are available and
                which are being used.
                8:00 a.m. to 5:00 p.m. (eastern time)">
<caption>Eastern time zone (UTC - 5:00)</caption>
```

==

## Creating tables with preformatted text
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
