
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

      // ANIMATION IN FOOTER
      show: true,

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
          this.todos.push(this.newTodo); // this pushes the conent of the input into the array at line 22 of JS
          this.newTodo = ""; // this vacates the input once tou click the button or press enter (normally the text would stay there)
        } else {
          console.log("you haven't written anything :-(");
        }
      }, // END OF createNewToDo FUNCTION

      clickDeleteTodo: function(index) {
        this.todos.splice(index, 1);   // The splice() method adds/removes items to/from an array, and returns the removed item(s). In this case we select THIS particular "X" icon (clicked by the user) and we delete it
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
