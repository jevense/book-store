// app.js
let express = require('express');
let app = express();

//you won't need 'connect-livereload' if you have livereload plugin for your browser
app.use(require('connect-livereload')());

module.exports = {
    app,
}