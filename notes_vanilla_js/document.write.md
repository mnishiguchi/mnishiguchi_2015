# document.write(...)
- NOTE: An automatic document.open() call happens when document.write() is called after the page has loaded, but that's not defined in the W3C specification.
- [w3](http://www.w3schools.com/jsref/met_doc_write.asp)

## [document.open](https://developer.mozilla.org/en-US/docs/Web/API/Document/open)
- The document.open() method opens a document for writing.

## [document.write](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
- Writes a string of text to a document stream opened by document.open().

## [document.close](https://developer.mozilla.org/en-US/docs/Web/API/Document/close)
- The document.close() method finishes writing to a document, opened with document.open().

```js
<html>
<head>
    <title>write example</title>

    <script type="text/javascript">

        function newContent() {
            alert("load new content");
            document.open();
            document.write("<h1>Out with the old - in with the new!</h1>");
            document.close();
        }
    </script>
</head>

<body onload="newContent();">
    <p>Some original document content.</p>
</body>
</html>
```


