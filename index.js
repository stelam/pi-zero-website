const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('static'))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(80, function () {
	console.log('Listening on port 80...')
})
