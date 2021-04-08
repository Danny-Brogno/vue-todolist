
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
    }, // END OF DATA

    methods: {

    }, // END OF METHODS

  }); // END OF VUE

} // END OF FUNCTION vueFunction

// -----------------------------------------------------------------------------

function init () {
  vueFunction();
}

$(init);
// -----------------------------------------------------------------------------
