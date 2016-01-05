# HTML basics

## Some interesting websites
- [HTML Element Reference](http://www.w3schools.com/tags/default.asp)
- [Best Online WYSIWYG HTML Editor](http://bestonlinehtmleditor.com/)
- [The World Wide Web Consortium](W3C.org)
- [Markup validatior](http://validator.w3.org/)
- [Bad design examples](wepagesthatsuck.com)
- [wayback machine](http://archive.org/web/) - to look up old websites
- [backlink watch](http://backlinkwatch.com/) - to see a website’s incoming links

==

## Character encoding (& code)
- Special characters
- HTML Entities and/or ISO Latin-1 codes can be placed in source code like any other alphanumeric characters to produce special characters and symbols that cannot be generated in HTML with normal keyboard commands.
- https://www.utexas.edu/learn/html/spchar.html
- http://www.degraeve.com/reference/specialcharacters.php
- http://www.ascii.cl/htmlcodes.htm

```
using name:   &trade;
using number: &#8482;
```

==

## HTML URL Encoding (% code)
- [HTML URL Encoding Reference ](http://www.w3schools.com/tags/ref_urlencode.asp)

==

## Creating HTML documents
### with Notepad
- save a document as html (The default format is txt)

### with MS Word
- save a document as html filtered (The html format has a lot of noise all over the place)

### with a WYSIWYG HTML Editor
- [Best Online WYSIWYG HTML Editor](http://bestonlinehtmleditor.com/)
- Edit a document just like MS Word, then the editor automatically convert it to html.
- Cut and paste to a new document on a text editor and save it as html.

==

## Markup languages
- Designed for the processing, definition and presentation of text.
- Specifies code for formatting, both the layout and style, within a text file.
- The code used to specify the formatting are called tags.
- www.webopedia.com/TERM/M/markup_language.html

### SGML
The language that this Web browser uses, Hypertext Markup Language (HTML), is an example of an SGML-based language. There is a document type definition for HTML (and reading the HTML specification is effectively reading an expanded version of the document type definition). In today's distributed networking environment, many documents are being described with the Extensible Markup Language (XML) which is a data description language (and a document can be viewed as a collection of data) that uses SGML principles.
http://searchsoa.techtarget.com/definition/SGML

### XHTML
- http://www.w3schools.com/html/html_xhtml.asp
- EXtensible HyperText Markup Language
- almost identical to HTML
- stricter than HTML
- HTML defined as an XML application
- combining the strengths of HTML and XML
- supported by all major browsers

#### Important Differences from HTML
- It is a good practice to write all code to be XHTML compliant whenever possible

#### Document Structure
- XHTML DOCTYPE is mandatory
- The xmlns attribute in <html> is mandatory
- `<html>`, `<head>`, `<title>`, and `<body>`are mandatory

#### XHTML Elements
- XHTML elements must be properly nested
- XHTML elements must always be closed
- XHTML elements must be in lowercase
- XHTML documents must have one root element

#### XHTML Attributes
- Attribute names must be in lower case
- Attribute values must be quoted
- Attribute minimization is forbidden

==

## Some organizations
### the W3C
- The World Wide Web Consortium
- the main international standards organization for the World Wide Web 

### WHATWG
- An unofficial collaboration of Web browser manufacturers and interested parties
- https://whatwg.org/
- https://wiki.whatwg.org/wiki/FAQ#What_is_the_WHATWG.3F

==

## doctype, and two uses of the doctype
- Indicates the types of markup language used in the document
- used by validators

==

## whitespace in HTML files
- includes the blank spaces, tabs, and line breaks
- no difference between a blank space, a tab, or a line break
- Browsers ignore consecutive occurrences of white space, collapsing extra white space characters into a single blank space
## HTML misc.

==

## Absolute path vs Relative path
### Absolute path
- From the top

### Relative path
- From where you are

==

## FTP
- https://kb.iu.edu/d/aerg

==

## XML

- asterisk (*) - The element may appear zero or more times
- question mark (?) - The element may appear zero or one time, only
- plus sign (+) - The element appears at least once if not more times

