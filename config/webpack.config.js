const path = require('path');

module.exports = {
	entry: {
		app: './source/app.js'
	},
	output: {
		path: 'public',
		filename: 'main.js'
	}
};
