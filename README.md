# Masatoshi Nishiguchi's personal website

- This is a simple single-page app of my personal profile.
- Demo: http://mnishiguchi.bitballoon.com/

==

## Features
- Client-side only, powered by AngularJS
- Simple tab interface for site navigation (no routes)
- Fetches data from public APIs
  + [Open Movie Database](http://www.omdbapi.com/)
  + [Blogger API](https://developers.google.com/blogger/?hl=en)

==

## Dependencies
This app is built with these open-source / free projects. Thank you so much.
- [AngularJS v1.5.0-rc.0](https://angularjs.org/)
- [Bootstrap v4](http://v4-alpha.getbootstrap.com/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [Gravatar](http://en.gravatar.com/)
- [Open Movie Database](http://www.omdbapi.com/)
- [Blogger API](https://developers.google.com/blogger/?hl=en)

==

## Background image
- Picture of Mt. Fuji taken from: http://i.imgur.com/kVJs7Pb.jpg

==

## Sitemaps
- I follow the protocol that is defined here.
    + http://www.sitemaps.org/protocol.html
- Google introduced Google Sitemaps so web developers can publish lists of links from across their sites. The basic premise is that some sites have a large number of dynamic pages that are only available through the use of forms and user entries. The Sitemap files contains URLs to these pages so that web crawlers can find them. Bing, Google, Yahoo and Ask now jointly support the Sitemaps protocol.
Since Bing, Yahoo, Ask, and Google use the same protocol, having a Sitemap lets the four biggest search engines have the updated page information. Sitemaps do not guarantee all links will be crawled, and being crawled does not guarantee indexing. However, a Sitemap is still the best insurance for getting a search engine to learn about your entire site. Google Webmaster Tools allow a website owner to upload a sitemap that Google will crawl, or they can accomplish the same thing with the robots.txt file. ([Wikipedia](https://en.wikipedia.org/wiki/Site_map))

==

## Known issues
- [Google chrome cast sender error if chrome cast extension is not installed or using incognito](http://stackoverflow.com/questions/24490323/google-chrome-cast-sender-error-if-chrome-cast-extension-is-not-installed-or-usi)
- [AngularJS app not passing official W3C HTML5 validation](http://stackoverflow.com/questions/18607437/should-i-care-about-w3c-validation)

==

## Accessing properties that are configured in $routeProvider

```js
console.info( $route.routes[ $location.path() ] );
```

==

## Extracting a list of paths from routes info
```js
      // Extracts a list of paths and tabNames from routes info.
      vm.paths    = [];
      vm.tabNames = [];

      angular.forEach( $route.routes, function( value, key ) {

        // If a valid path name is found, push to the lists.
        if ( key == "/" || key.match( /^\/\w*[^\/]$/ ) ) {
          vm.paths.push( "#" + key );
          vm.tabNames.push( value.title );
        }

      });
```
