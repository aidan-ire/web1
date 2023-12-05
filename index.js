// Import the 'express' module, which simplifies building web applications in Node.js
var express = require("express");

// Create a new instance of the Express application
var app = express();

// Set the template engine to EJS (Embedded JavaScript) for rendering dynamic web pages
app.set('view engine', 'ejs');

// Serve static files from the "views" directory
app.use(express.static("views"));

// Make the files in the "style" directory accessible as static resources
app.use(express.static("style"));

// Allow access to static files stored in the "images" directory
app.use(express.static("images"));
