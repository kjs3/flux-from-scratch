
function TodoItem (description) {
  this.done = false;
  this.description = description || '';
}

module.exports = TodoItem;
