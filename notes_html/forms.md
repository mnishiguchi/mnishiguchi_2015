# Forms
The HTML <form> element represents a document section that contains interactive controls to **submit information to a web server**.

## the input tag
- Used to get information from users

## The encrtype attribute

### application/x-www-form-urlencoded
- default format
- form data is transferred as a long text string
- Spaces are replaced with `+` character
- non-text characters(\t, \n, etc) are replaced with their hexadecimal code values
- Field names are separated from their field values with an `=` symbol

### multipart/form-data
- Used when sending files to a server
- Spaces and non-text characters are preserved
- data elements are seperated using delimiter lines
- The action types of the form element must be set to `post`

### text/plain
- Form data is transferred as plain text with no encoding of spaces or non-text characters
- Most often used when the action type of the form element is set to `mailto`

==

