# Setting up a simple development server using ExpressJS
- reference: http://shawnsimondeveloper.com/nodeproxyangular/

**1. install NodeJS**

**2. make a project directory**
```
npm init
```

**3. Organize the directory structure**
```
/ProjectName
    /app (angular project)
    index.js (node server)
```

**4. Install ExpressJS**
```
npm install express --save
```

**5. Write server code in index.js**
```js
var express = require("express");

// I am a node server.
var server = express();
server.set("port", 3000);
server.use(express.static(__dirname + "/app"));
server.listen(server.get('port'), function() {
  console.log('Express server listening on port ' + server.get('port'));
});
```

**6. Run the server**
```
node index.js
```
(NOTE: control + C to stop the server)

**7. View the app on a browser**
```
http://localhost:3000/
```
