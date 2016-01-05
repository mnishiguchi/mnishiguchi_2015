# Navbar logo - absolute positioning

**advantages**
- Can control the position precisely.

**disadvantages**
- When it may go overlapping on other elements when displayed on the smaller screen.

```html
<nav
  class="navbar navbar-light bg-faded top-navbar" >

  <a
    href="https://github.com/mnishiguchi"
    class="navbar-brand">
  </a>

  <ul class="nav navbar-nav">
    <li class="nav-item">
      <a
        class="logo"
        href="#">
        Masatoshi Nishiguchi
      </a>
    </li>
  </ul>
```

```css
.navbar {
  padding: 18px 10px 10px 10px;
  position: relative;
}

.logo {
  position: absolute;
  bottom: 5px;
  ...
```

## Divider

```css
.divider{
  margin: 0 8px 0 8px;
}

.divider:before {
  content: "|";
}
```
