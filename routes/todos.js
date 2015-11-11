'use strict';

var express = require('express');
var router = express.Router();

// Model
var Todo = require('../models/todo');

router.get('/', function(req, res){
  Todo.find(function(err, todos) {
    if(err){
      return res.status(400).send(err);
    }
    res.send(todos);
  });
});

module.exports = router;
