(function(){

  'use strict';

  $(document).ready(init);

  var tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  updateList();

  function init() {
    $('#add').click(addTodo);
    $('#list').on('change', 'input', checkboxChanged);
    $('#list').on('click', '.remove', removeTodo);
  }

  function removeTodo(e) {
    var $target = $(e.target);
    var $targetRow = $target.closest('tr');

    var index = $targetRow.index();
    tasks.splice(index, 1);

    updateList();
    saveLocalStorage();
  }

  function checkboxChanged(e) {
    var $target = $(e.target);
    var $targetRow = $target.closest('tr');

    var index = $targetRow.index();
    tasks[index].completed = $target.is(':checked');

    updateList();
    saveLocalStorage();
  }

  function addTodo() {
    var description = $('#description').val();
    var date = $('#date').val();

    var task = {
      description: description,
      date: date,
      completed: false
    };

    tasks.push(task);

    updateList();
    saveLocalStorage();
  }

  function updateList() {
    console.log('tasks:', tasks);
    $('#list').empty();

    if(tasks.length){
      $('table.table').show();
    } else {
      $('table.table').hide();
    }

    var taskElements = tasks.map(function(task){
      var $tr = $('#sample').clone();
      $tr.removeAttr('id');
      $tr.children('.description').text(task.description);
      $tr.children('.date').text(task.date);
      $tr.find('input').prop('checked', task.completed);
      $tr.css({
        'text-decoration': task.completed ? 'line-through' : '',
        'color': task.completed ? '#aaa' : ''
      });
      $tr.show();
      return $tr;
    });

    $('#list').append(taskElements);
  }

  function saveLocalStorage() {
    localStorage.tasks = JSON.stringify(tasks);
  }


})();
