# image map
- [Easy Imagemap Generator](http://imagemap-generator.dariodomi.de/)
- [Image maps examples](https://www.google.com/search?q=image+maps+example)
- http://www.w3schools.com/tags/tag_map.asp

## How to create a image map
1. Create `<map name="map_name"></map>`
2. Inside `<map></map>`, define hotspots using `<area shape="" coord=""  href="" alt="">`
3. Apply the image map to an image. `<img ... usemap="#map_name">` 

## HTML <area> tag

- http://www.w3schools.com/tags/tag_area.asp
### shape Attribute
- **rect**:   Defines a rectangular region
- **circle**: Defines a circular region
- **poly**:   Defines a polygonal region

### coords attribute
#### rect
- `<area shape="rect"   coords="x1, y1, x2, y2" href="" alt="">`, where
    + x1, y1 are the coordinates of the upper-left corner of the rectangle
    + x2, y2 are the coordinates of the lower-right corner of the rectangle

#### circle
- `<area shape="circle" coords="x, y, r" href="" alt="">`, where
    + x, y are the coordinates of the ceter of the circle
    + r is hte circle's radius

#### poly
- `<area shape="poly" coords="x1, y1, x2, y2, x3, y3, ..." href="" alt="">`, where
    + (x1, y1), (x2, y2), (x3, y3) etc define the coordinates of each corner in the multisided shape

```html
<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

<map name="planetmap">
  <area shape="circle" coords="124, 58, 8" href="venus.htm" alt="Venus">
</map>
```
