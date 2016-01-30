#!/usr/bin/env node

var app = require('express')();

var port = parseInt(process.argv[2], 10) || 80;
var interface = process.argv[3] || null;

app.listen(port, interface);
