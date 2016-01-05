# Add on
- Fix the position of an element right next to an input form.
- Display the element as a table.
- This idea is from [bootstrap](https://github.com/twbs/bootstrap/blob/master/less/input-groups.less)

## Example
```html
<div class="gravatar-form">

  <input type="text"
    ng-model="userEmail"
    class="form-control"
    placeholder="Enter your email">

  <a
    href="..."
    class="...">
    ...
  </a>

</div>
```

```css
/*
  - Display as table-cell
 */

.gravatar-form {
  display: table;
}

.gravatar-form > a {
  display: table-cell;
  padding-left: 5px;
}
```
