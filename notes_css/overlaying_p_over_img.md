# Overlaying stuff over an image
- [position:relativeとposition:absoluteで画像や文字を重ねてみよう](http://naifix.com/relative-absolute/) 

## Putting discriptive paragraph over a picture

### 1. Add relative positioning to the container
- Add `position: relative;` to the parent element

### 2. Set the paragraph's bottom to zero
- Add `bottom: 0;` to the paragraph style

### 3. Position the paragraph absolutely
- Add `position: absolute;` to the paragraph style

### 4. Set the paragraph margin to zero
- Add `margin: 0;` to the paragraph style

### 5. (Optional) Add a header to the paragraph
- Add a line break between the header and the rest of the paragraph
- Wrap the paragraph content in a small tag to preserve the visual hierarchy

==
