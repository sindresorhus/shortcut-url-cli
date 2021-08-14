#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import shortcutUrl from 'shortcut-url';

const cli = meow(`
	Usage
	  $ shortcut-url <file-path>

	Example
	  $ shortcut-url google
	  https://google.com

	Leave out the extension for cross-platform compatibility
`, {
	importMeta: import.meta,
});

if (cli.input.length === 0) {
	console.error('Specify a file path');
	process.exit(1);
}

(async () => {
	console.log(await shortcutUrl(cli.input[0]));
})();
