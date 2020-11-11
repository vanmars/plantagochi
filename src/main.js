import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as plant from './js/plant.js';
import * as store from './js/store.js';

// Plant Objects and State Controls
let octavia = plant.orchid("Octavia");
const octaviaStateControl = store.storeState(octavia);

let peter = plant.palm("Peter");
const peterStateControl = store.storeState(peter);

let callie = plant.cactus("Callie");
const callieStateControl = store.storeState(callie);

let samwise = plant.succulent("Samwise");
const samwiseStateControl = store.storeState(samwise);



// User Interface Logic
$(document).ready(function() {
  // Card Names and Special Abilities
  $('#orchid-name').text(`${octavia.name} the Orchid`);
  $('#palm-name').text(`${peter.name} the Palm`);
  $('#cactus-name').text(`${callie.name} the Cactus`)

  $('#succulent-name').text(`${samwise.name} the Succulent`)
  $('#succulent-powers').text(`${samwise.charm("everyone")}`);

  // Orchid Functionality
  $('#orchid-form').submit(function(event){
    event.preventDefault();
    const inputtedColor = $('input#color').val();
    $('#orchid-powers').text(`${octavia.color(inputtedColor)}`);
  })
  $('#feed-orchid').click(function() {
    const newState = octaviaStateControl(plant.feed);
    const currentState = octaviaStateControl();
    $('#orchid-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#water-orchid').click(function() {
    const newState = octaviaStateControl(plant.water);
    const currentState = octaviaStateControl();
    $('#orchid-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#light-orchid').click(function() {
    const newState = octaviaStateControl(plant.light);
    const currentState = octaviaStateControl();
    $('#orchid-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });

  // Palm Functionality
  $('#palm-form').submit(function(event){
    event.preventDefault();
    const inputtedItem = $('input#palm-item').val();
    $('#palm-powers').text(`${peter.shade(inputtedItem)}`);
  })
  $('#feed-palm').click(function() {
    const newState = peterStateControl(plant.superFeed);
    const currentState = peterStateControl();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#water-palm').click(function() {
    const newState = peterStateControl(plant.superWater);
    const currentState = peterStateControl();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#light-palm').click(function() {
    const newState = peterStateControl(plant.light);
    const currentState = peterStateControl();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });

  //  Cactus Functionality
  $('#cactus-form').submit(function(event){
    event.preventDefault();
    const inputtedItem = $('input#cactus-item').val();
    $('#cactus-powers').text(`${callie.poke(inputtedItem)}`);
  })

  $('#feed-cactus').click(function() {
    const newState = callieStateControl(plant.superFeed);
    const currentState = callieStateControl();
    $('#cactus-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#water-cactus').click(function() {
    const newState = callieStateControl(plant.water);
    const currentState = callieStateControl();
    $('#cactus-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#light-cactus').click(function() {
    const newState = callieStateControl(plant.superLight);
    const currentState = callieStateControl();
    $('#cactus-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });

  // Succulent Functionality
  $('#feed-succulent').click(function() {
    const newState = samwiseStateControl(plant.feed);
    const currentState = samwiseStateControl();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#water-succulent').click(function() {
    const newState = samwiseStateControl(plant.water);
    const currentState = samwiseStateControl();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
  $('#light-succulent').click(function() {
    const newState = samwiseStateControl(plant.superLight);
    const currentState = samwiseStateControl();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil || 0}</p> <p>Water: ${currentState.water || 0}</p> <p>Light: ${currentState.light || 0}</p>`);
  });
});