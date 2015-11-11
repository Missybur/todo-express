var Todo = require('./models/todo');


Todo.find(function(err, todos) {
  if(err){
    console.log('ERROR:', err);
  } else {
    console.log('todos:', todos);
  }
});

