var register = require('babel-core/register');
require('babel-polyfill');
register({
	presets: ['stage-3'],
	plugins: ['transform-es2015-modules-commonjs']
});

require('./server.js');