"use strict";

describe("TaskList", function() {
  var taskList;

  beforeEach(function() {
    taskList = new TaskList();
  });

  it("adds a new element", function() {
    taskList.createTask('test');
    expect(taskList.tasks[0].title).toEqual('test');
  });

  describe("render", function() {
    it("renders an ul element", function() {

      expect(taskList.render()).toEqual('ul');
    });

    it("renders empty list when empty", function() {
      expect(taskList.render()).toBeEmpty();
    });
    it("renders tasks", function() {
      taskList.createTask('test task');
      console.log(taskList.render());
      expect(taskList.render().find('input[name=title]').val()).
        toBe('test task');
    });
  });

});
