// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var add = require('./routes/add');
var sub = require('./routes/sub');
var mult = require('./routes/mult');
var slash = require('./routes/slash');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: true}));



//ROUTES

app.use('/add', add);
app.use('/sub', sub);
app.use('/mult', mult);
app.use('/slash', slash);

app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});





app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
