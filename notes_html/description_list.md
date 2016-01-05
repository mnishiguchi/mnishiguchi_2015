## Horizontal description
- http://v4-alpha.getbootstrap.com/content/typography/#horizontal-description

```html
  <div class="container">
    <dl class="dl-horizontal ">
      <dt class="col-sm-3">
        <span class="label label-primary">Directors</span>
      </dt>
      <dd class="col-sm-9">
        {{ vm.movieInfo.Director }}
      </dd>

      <dt class="col-sm-3">
        <span class="label label-primary">Actors</span>
      </dt>
      <dd class="col-sm-9">
        {{ vm.movieInfo.Actors }}
      </dd>

      <dt class="col-sm-3">
        <span class="label label-primary">Genre</span>
      </dt>
      <dd class="col-sm-9">
        {{ vm.movieInfo.Genre }}
      </dd>
    </dl>
  </div>
```
