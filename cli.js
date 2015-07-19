#!/usr/bin/env node
'use strict';
var meow = require('meow');
var shortcutUrl = require('shortcut-url');

var cli = meow({
	help: [
		'Usage',
		'  $ shortcut-url <filepath>',
		'',
		'Example',
		'  $ shortcut-url google',
		'  https://google.com',
		'',
		'Leave out the extension for cross-platform compatibility'
	]
});

if (cli.input.length === 0) {
	console.error('Please supply a filepath');
	process.exit(1);
}

shortcutUrl(cli.input[0], function (err, url) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(url);
});
