import test from 'ava';
import execa from 'execa';

test(async t => {
	const stdout = await execa.stdout('./cli.js', ['fixture/google'], {cwd: __dirname});
	t.is(stdout, 'https://google.com');
});
