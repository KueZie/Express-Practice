const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyparser = require('body-parser');
const app = express();
const port = app.env.port || 1337;

app.use(bodyparser());

app.use('/css', express.static(__dirname + '/assets'));

app.listen(port, () => {
	console.log(`Server is now listening on port ${port}!`);
});