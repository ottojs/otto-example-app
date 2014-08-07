
'use strict';

// Modules
var otto = require('otto');

// New Otto/Express App
var app = otto.app();

// Routes
require('otto-example-routes')(app);

// Handle Errors
// 404s / 500s
otto.error_handler(app);

// Start the Server
otto.server(app);
