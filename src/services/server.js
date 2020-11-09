const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const path = require('path');

var db = mongo.connect("mongodb://localhost:3000/", function(err, response){
  if (err) console.log('Error: ', err)
  else console.log('Connected to ' + db, '+', response)
})


var app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

var Schema = mongo.Schema

var Album = new Schema({
  title: { type: String },
  artistId: { type: String },
  coverUrl: { type: String },
  year: { type: Number },
  genre: { type: String }
}, { versionKey: false })