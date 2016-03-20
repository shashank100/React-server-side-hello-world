require('babel-core/register')({
    presets: ['es2015', 'react']
});
var express = require('express'),
	swig = require('swig'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	React = require('react'),
	TODOHome = require('./react-app/src/components/HelloWorld.jsx').default,
	app = express();

app.set('port', process.env.port || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static('./dist'));

app.get('/', function (req, res) {
  var renderedString = React.renderToStaticMarkup(React.createElement(TODOHome));
  var page = swig.renderFile('./react-app/index.html', {html: renderedString});
  res.send(page);
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
