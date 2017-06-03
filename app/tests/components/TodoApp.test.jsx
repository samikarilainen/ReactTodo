var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require ('jQuery');

var TodoApp = require('Todo');

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });
});
