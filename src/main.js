import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as plant from './js/plant.js';

let iris = plant.irisStateControl; 
let palm = plant.palmStateControl; 
let fern = plant.fernStateControl; 
let succulent = plant.succulentStateControl; 

$(document).ready(function() {
  // Iris Functionality
  $('#feed-iris').click(function() {
    const newState = iris(plant.feed);
    const currentState = iris();
    $('#iris-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-iris').click(function() {
    const newState = iris(plant.water);
    const currentState = iris();
    $('#iris-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-iris').click(function() {
    const newState = iris(plant.light);
    const currentState = iris();
    $('#iris-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });

   // Palm Functionality
   $('#feed-palm').click(function() {
    const newState = palm(plant.feed);
    const currentState = palm();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-palm').click(function() {
    const newState = palm(plant.water);
    const currentState = palm();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-palm').click(function() {
    const newState = palm(plant.light);
    const currentState = palm();
    $('#palm-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });

  //  Fern Functionality
  $('#feed-fern').click(function() {
    const newState = fern(plant.feed);
    const currentState = fern();
    $('#fern-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-fern').click(function() {
    const newState = fern(plant.water);
    const currentState = fern();
    $('#fern-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-fern').click(function() {
    const newState = fern(plant.light);
    const currentState = fern();
    $('#fern-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });

   // Succulent Functionality
   $('#feed-succulent').click(function() {
    const newState = succulent(plant.feed);
    const currentState = succulent();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#water-succulent').click(function() {
    const newState = succulent(plant.water);
    const currentState = succulent();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
  $('#light-succulent').click(function() {
    const newState = succulent(plant.light);
    const currentState = succulent();
    $('#succulent-stats').html(`<p>Soil: ${currentState.soil}</p> <p>Water: ${currentState.water}</p> <p>Light: ${currentState.light}</p>`);
  });
});