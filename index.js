/**
 * Created by gqadonis on 6/27/16.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);