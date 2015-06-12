var React = require('react');
var TodoStore = require('../todo_store');

var Item = require('./item');
var NewItemForm = require('./new_item_form');

var Todo = React.createClass({
  getInitialState: function () {
    return {
      items: TodoStore.getAll()
    }
  },

  componentDidMount: function () {
    TodoStore.addListener('change', this._updateTodo);
  },
  componentWillUnmount: function () {
    TodoStore.removeListener('change', this._updateTodo);
  },

  _updateTodo: function () {
    this.setState({
      items: TodoStore.getAll()
    });
  },

  render: function () {
    return (
      <div>
        <h1>Todo</h1>
          <NewItemForm />
          {this.state.items.map(function(item) {
            if ( !item.done ) {
              return <Item key={item.id} description={item.description} done={item.done} />;
            } else {
              return false;
            }
          })}
        <h3>Done</h3>
          {this.state.items.map(function(item) {
            if ( item.done ) {
              return <Item key={item.id} description={item.description} done={item.done} />;
            } else {
              return false;
            }
          })}
      </div>
    );
  }
});

module.exports = Todo;
