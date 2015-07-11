var settings = require('../settings');
var mongo = require('mongodb');
var Db = mongo.Db;
var Connection = mongo.Connection;
var Server = mongo.Server;

module.exports = new Db(
	settings.db,
	new Server(settings.host, settings.port, {})
);