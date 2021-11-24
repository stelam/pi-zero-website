var express = require('express')
var app = express()

app.get('/', function (req, res) {
  	res.set('Content-Type', 'text/html');
	res.send(Buffer.from('<h2>Hi Michel?</h2><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/8BqGLmZP0K8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>'));
})

app.listen(80, function () {
  console.log('Listening on port 80...')
})
