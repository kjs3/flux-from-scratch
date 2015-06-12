var React = require('react');
var TodoStore = require('../todo_store');

var Item = React.createClass({
  PropTypes: {
    item: React.PropTypes.object.isRequired
  },

  _toggleDone: function (e) {
    e.preventDefault();
    
    TodoStore.toggleDone(this.props.item.id);
  },

  _removeItem: function (e) {
    e.preventDefault();
    
    TodoStore.removeItem(this.props.item.id);
  },

  render: function () {
    return (
      <div>
        <a href='' onClick={this._toggleDone}>
          {this.props.item.description}
        </a>
        <a href='' style={{'margin-left': '30px'}} onClick={this._removeItem}>
          remove
        </a>
      </div>
    );
  }
});

module.exports = Item;
