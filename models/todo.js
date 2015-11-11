
var fs = require('fs');

var Todo = {};

Todo.find = function(cb) {
  fs.readFile('db/todos.json', function (err, data) {
    if(err){
      cb(err);
    } else {
      var todos = JSON.parse(data);
      cb(null, todos);
    }
  });
};

module.exports = Todo;
