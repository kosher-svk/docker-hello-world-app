const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Dobre ranko svete... Jdi se vycpat vole... :D'))
app.listen(80, function () {
    console.log('"Hello Simpsons" app listening on port 80!');
  });