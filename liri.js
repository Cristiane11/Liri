require("dotenv").config(); 
var Spotify = require ("node-spotify-api");
var Twitter = require ("twitter");
var request = require("request");
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log(keys.spotify)