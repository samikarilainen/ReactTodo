var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require ('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = "poop";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = [{
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }];
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: todoData});

    //check that todos first item has compelted value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);

    //expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  it('should toggle from true to false completedAt gets removed', () => {
    var todoData = [{
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 10
    }];
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: todoData});

    //check that todos first item has compelted value of false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);

    //expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toEqual(undefined);

  });
});
