
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
        "to-do 1",
        "to-do 2",
        "to-do 10",
        "to-do 7",
      ],

      newTodo: ""
    }, // END OF DATA

    methods: {

      createNewToDo: function() {

        if(this.newTodo.length > 0) {
          this.todos.push(this.newTodo);
          this.newTodo = " ";
        } // END OF IF

      }, // END OF createNewToDo FUNCTION
      clickDeleteTodo: function(index) {
        this.todos.splice(index, 1);
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
