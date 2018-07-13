const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 1337;
const engines = require('consolidate');
const path = require('path');
const connection = require('./public/dbConnection').connection;

app.use(bodyparser());
console.log(connection((db) => {
	console.log(db.collections);
}))
app.get('/', (req, resp) => {
	resp.sendFile('index.html', { root: path.join(__dirname + '/public') });
	console.log('Index sent!');
});

app.post('/', (req, resp) => {
	console.log(`Params: ${req.body.date}`);
});


app.listen(port, () => {
	console.log(`Server is now listening on port ${port}!`);
});