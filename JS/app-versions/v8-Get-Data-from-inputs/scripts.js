/**
 * TODO LIST OBJECT
 * Methods to manage the todo list
 */
var todoList = {


  /* MY TODOS ARRAY
  --------------------------------------*/
  todos: [
    {
      textTodo: "First",
      completed: true
    },
    {
      textTodo: "Second",
      completed: false
    },
    {
      textTodo: "Third",
      completed: false
    },
    {
      textTodo: "Forth",
      completed: true
    }
  ],


  /* DISPLAY TODOS
  --------------------------------------*/
  displayTodos: function () {

    //Start Loop
    for (let i = 0; i < this.todos.length; i++) {

      var myItem = this.todos[i];
      var x = ' ';

      if (myItem.completed) {
        x = 'x';
      }
      var showItem = '(' + x + ') ' + myItem.textTodo;
      console.log("showItem: ", showItem);

    } // End loop

    console.log("-------------------------");

  },


  /* ADD TODO
  --------------------------------------*/
  addTodo: function (text) {
    //debugger;
    this.todos.push({
      textTodo: text,
      completed: false
    });
    this.displayTodos();
  },


  /* CHANGE TODO
    --------------------------------------*/
  changeTodo: function (index, text) {
    this.todos[index].textTodo = text;
    this.displayTodos();
  },


  /* DELETE TODO
  --------------------------------------*/
  deleteTodo: function (index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },


  /* TOGGLE COMPLETED KEY VALUE OF AN ITEM
  --------------------------------------*/
  toggleCompleted: function(index) {
    let item = this.todos[index];
    item.completed = ! item.completed;

    this.displayTodos();
  },


  /* TOGGLE ALL ITEMS
  --------------------------------------*/
  toggleAll: function () {

		var totalTodos = this.todos.length;
		var completedTodos = 0;

		// Get the number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// If everything is true, make everything false.
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		}

		// Otherwise make everthing true.
		else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();

	} //End toggleAll() method


};


/**
 * HANDLERS OBJECT
 * Methods to handle the DOM EVENTS
 */
var handlers = {

  addTodo: function() {
    var addTodoInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoInput.value);
  },

  changeTodo: function() {
    var changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
    var changeTodoInput = document.getElementById("changeTodoInput");

    //console.log(parseInt(changeTodoIndexInput.value));

    //parseInt(changeTodoInput.value) //convert to a number
    todoList.changeTodo(
      changeTodoIndexInput.valueAsNumber, 
      changeTodoInput.value
    );
  },

  deleteTodo: function() {
    var deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput");

    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
  },

  toggleCompleted: function() {
    var toggleTodoIndexInput = document.getElementById("toggleTodoIndexInput");

    todoList.toggleCompleted(toggleTodoIndexInput.valueAsNumber);
  }

};



