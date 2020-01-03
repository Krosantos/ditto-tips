const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');
const homePath = path.join(distPath, 'index.html');
const options = {
	extensions: ['html'],
	maxAge: '1d',
	redirect: false,
	setHeaders(res) {
		res.set('x-timestamp', Date.now());
	},
};

app.use('/static', express.static(distPath, options));
app.get('*', (req, res) => res.sendFile(homePath));
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Front-end listening on port ${port}`));
