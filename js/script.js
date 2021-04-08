
function numberGenerator(min, max) {
  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;

} // END OF FUNCTION numberGenerator

// -----------------------------------------------------------------------------

function vueFunction() {

  new Vue({

    el: "#dannyVue",
    data: {
      "url": "img/boolean-logo.png",

      "todos": [
        "Grocery shopping",
        "Go to the gym",
        "Walk the dog",
        "Make dinner",
      ],

      newTodo: ""
    }, // END OF DATA

    methods: {

      createNewToDo: function() {

        if(this.newTodo.length > 0) {
          this.todos.push(this.newTodo);
          this.newTodo = "";
        } else {
          console.log("you haven't written anything :-(");
        }
      }, // END OF createNewToDo FUNCTION

      clickDeleteTodo: function(index) {
        this.todos.splice(index, 1);   // The splice() method adds/removes items to/from an array, and returns the removed item(s).
      }
    } // END OF METHODS

  }); // END OF NEW VUE

} // END OF FUNCTION vueFunction

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

document.addEventListener("DOMContentLoaded", init);
// -----------------------------------------------------------------------------
