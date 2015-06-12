var React = require('react');

var Item = React.createClass({
  PropTypes: {
    description: React.PropTypes.string.isRequired
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var input = this.refs['itemInput'].getDOMNode();
    console.log('should add item: ', input.value);
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
