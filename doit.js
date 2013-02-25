
var fs = require('fs');
var ejs = require('ejs');
var util = require('util');

var data = require('./config.js');

util.log('start');
var headertext = fs.readFileSync('header.ejs', 'utf8');
util.log('read header.ejs');
var header = ejs.render(headertext, data);
util.log('rendered');
fs.writeFileSync('header.html', header, 'utf8');
util.log('written');

var footertext = fs.readFileSync('footer.ejs', 'utf8');
util.log('read footer.ejs');
var footer = ejs.render(footertext, data);
util.log('rendered');
fs.writeFileSync('footer.html', footer, 'utf8');
util.log('written');
util.log('end');
