const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection info

const url = 'mongodb+srv://mongodb-stitch-passes-weafv:Nigahiga0!@cluster0-zlco8.mongodb.net/test?retryWrites=true';

function connection(callback) {

	MongoClient.connect(url, (err, db) => {

		assert.equal(null, err);
		callback(db);
		db.close();

	});

};

module.exports.connection = connection;