import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as plant from './js/plant.js';
import * as store from './js/store.js';

// Plant Objects and State Controls
const octavia = plant.orchid("Octavia");
const octaviaStateControl = store.storeState(octavia);

const peter = plant.palm("Peter");
const peterStateControl = store.storeState(peter);

const callie = plant.cactus("Callie");
const callieStateControl = store.storeState(callie);

const samwise = plant.succulent("Samwise");
const samwiseStateControl = store.storeState(samwise);

$(document).ready(function() {
  $('#orchid-name').text(`${octavia.name} the Orchid`)
  $('#palm-name').text(`${peter.name} the Palm`)
  $('#cactus-name').text(`${callie.name} the Cactus`)
  $('#succulent-name').text(`${samwise.name} the Succulent`)

  // Orchid Functionality
  $('#feed-orchid').click(function() {
    const newState = octaviaStateControl(plant.feed);
    const currentState = octaviaStateControl();
    $('#orchid-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-orchid').click(function() {
    const newState = octaviaStateControl(plant.water);
    const currentState = octaviaStateControl();
    $('#orchid-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-orchid').click(function() {
    const newState = octaviaStateControl(plant.light);
    const currentState = octaviaStateControl();
    $('#orchid-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });

   // Palm Functionality
   $('#feed-palm').click(function() {
    const newState = peterStateControl(plant.feed);
    const currentState = peterStateControl();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-palm').click(function() {
    const newState = peterStateControl(plant.water);
    const currentState = peterStateControl();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-palm').click(function() {
    const newState = peterStateControl(plant.light);
    const currentState = peterStateControl();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });

  //  Cactus Functionality
  $('#feed-cactus').click(function() {
    const newState = callieStateControl(plant.feed);
    const currentState = callieStateControl();
    $('#cactus-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-cactus').click(function() {
    const newState = callieStateControl(plant.water);
    const currentState = callieStateControl();
    $('#cactus-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-cactus').click(function() {
    const newState = callieStateControl(plant.light);
    const currentState = callieStateControl();
    $('#cactus-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });

   // Succulent Functionality
   $('#feed-succulent').click(function() {
    const newState = samwiseStateControl(plant.feed);
    const currentState = samwiseStateControl();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-succulent').click(function() {
    const newState = samwiseStateControl(plant.water);
    const currentState = samwiseStateControl();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-succulent').click(function() {
    const newState = samwiseStateControl(plant.light);
    const currentState = samwiseStateControl();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
});