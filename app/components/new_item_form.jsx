var React = require('react');
var TodoStore = require('../todo_store');

var Item = React.createClass({
  PropTypes: {
    description: React.PropTypes.string.isRequired
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var input = this.refs['itemInput'].getDOMNode();
    TodoStore.addItem(input.value);

    input.value = null;
  },

  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input ref='itemInput' />
      </form>
    );
  }
});

module.exports = Item;
