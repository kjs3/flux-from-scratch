var React = require('react');

var Item = require('./item');
var NewItemForm = require('./new_item_form');

var items = [
  {id: 1, description: 'one', done: false },
  {id: 2, description: 'two', done: false },
  {id: 3, description: 'three', done: false },
];

var Todo = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Todo</h1>
          <NewItemForm />
          {items.map(function(item) {
            if ( !item.done ) {
              return <Item key={item.id} description={item.description} done={item.done} />;
            } else {
              return false;
            }
          })}
        <h3>Done</h3>
          {items.map(function(item) {
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
