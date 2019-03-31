"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
  // TODO implement tasklist rendering
    var html =  $('<li>' +
                    '<input type="checkbox"' + done + '/>' +
                      '<input type="text"'+ title +' />' +
                  '</li>').appendTo('#taskList');
  return $(html);
};

