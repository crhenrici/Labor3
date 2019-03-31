"use strict";

var taskList;
var task;

$(function() {

  // code placed here will be executed each time the page
  // is rendered

    task = new Task();
  // create a tasklist to display
  taskList = new TaskList();
  taskList.createTask("Setup todo list");
  taskList.createTask("Buy milk");
  taskList.createTask("Read recipe");
  taskList.createTask("Invite guests");
  taskList.tasks[0].done = true;

  // TODO: add rendered markup ot the tasklist to the container #taskList
    $('#saveTasks').click(function () {
        $('h1').css('color', 'blue');
    });

    $('#createTask').click(function () {
      task.render();
    });


  console.log('Application successfully initialized');

});
