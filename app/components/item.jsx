var React = require('react');

var Item = React.createClass({
  PropTypes: {
    description: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired
  },

  _toggleDone: function (e) {
    e.preventDefault();
    
    var done = !this.props.done;
    console.log('should change "done" status to: ', done);
  },

  render: function () {
    return (
      <div>
        <a href='' onClick={this._toggleDone}>
          {this.props.description}
        </a>
      </div>
    );
  }
});

module.exports = Item;
