# Techniques

## Normalize.css
- makes the browsers render all elements more consistently and in line with modern standards
- The page will look the same no matter what browser you use
- Good idea to include this file in all our web projects

==

## よく忘れるCSSの小技
- http://qiita.com/matsui-a/items/9de76659429593ed7a88#css-clear-fix

==

## 点滅
- [CSSでテキスト、画像、何でも点滅](http://www.will-hp.com/wpblog/web/72/)

==

## Dividing a paragraph into three column layout

```css
#intro p {
   -moz-column-count: 3;
   -webkit-column-count: 3;
    column-count: 3;

   -moz-column-gap: 20px;
   -webkit-column-gap: 20px;
    column-gap: 20px;

   -moz-column-rule: 1px solid black;
   -webkit-column-rule: 1px solid black;
    column-rule: 1px solid black;
}  

```

==

## Make only part of an element behave differently from the rest
- Use span inside another tag

## Aligning content
#### BLOCK
- `text-align` 

#### INLINE
- 'float'

## Vertically Align text in a Div
- http://stackoverflow.com/questions/2939914/vertically-align-text-in-a-div

==

## Selecting an element by one of its attributes
```css
input[type="email"] {
    ...
}

input[placeholder="Your email"] {
    ...
}
```

==

## Controling whitespace around an HTML element
- Can use both positive and negative value to adjust margins

```css
    h2 {
      text-align: center;
      margin: -50px 0 70px 0;
    }
```

==

