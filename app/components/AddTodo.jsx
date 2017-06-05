var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    var {onAddTodo} = this.props;
    e.preventDefault();
    var text = this.refs.text.value;

    if (text && text.length > 0)
    {
      this.refs.text.value = '';
      onAddTodo(text);
    } else {
        this.refs.text.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="text" placeholder="Enter todo"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
