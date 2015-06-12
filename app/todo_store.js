var EventEmitter = require('wolfy87-eventemitter');
var merge = require('lodash.merge');
var TodoItem = require('./todo_item');

var _id = 1;

function TodoStore(){};

var TodoStorePrototype = {
  constructor: TodoStore,

  items: [],

  addItem: function (description) {
    var newItem = new TodoItem(description);
    newItem.id = _id++;

    this.items.push(newItem);
    return this.emit('change');
  },

  removeItem: function (id) {
    var index = itemIndexFor(id);

    if ( index !== -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  },

  getAll: function () {
    return this.items;
  }
};

TodoStore.prototype = merge(TodoStorePrototype, EventEmitter.prototype);

var AppTodoStore = new TodoStore();

['one', 'two', 'three', 'four'].forEach(function(item){
  AppTodoStore.addItem(item);
});


module.exports = AppTodoStore;

// utility function to get the index of a TodoItem
function itemsIndexFor(id) {
  var len = AppTodoStore.items.length;

  for(var i = 0; i < len; i++) {
    if (AppTodoStore.items[i].id === id) return i;
  }
  return -1;
}
