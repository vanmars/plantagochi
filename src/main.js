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
    $('#iris-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });
  $('#water-iris').click(function() {
    const newState = iris(plant.water);
    const currentState = iris();
    $('#iris-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });
  $('#light-iris').click(function() {
    const newState = iris(plant.light);
    const currentState = iris();
    $('#iris-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });

   // Palm Functionality
   $('#feed-palm').click(function() {
    const newState = palm(plant.feed);
    const currentState = palm();
    $('#palm-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });
  $('#water-palm').click(function() {
    const newState = palm(plant.water);
    const currentState = palm();
    $('#palm-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });
  $('#light-palm').click(function() {
    const newState = palm(plant.light);
    const currentState = palm();
    $('#palm-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });

  //  Fern Functionality
  $('#feed-fern').click(function() {
    const newState = fern(plant.feed);
    const currentState = fern();
    $('#fern-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });
  $('#water-fern').click(function() {
    const newState = fern(plant.water);
    const currentState = fern();
    $('#fern-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });
  $('#light-fern').click(function() {
    const newState = fern(plant.light);
    const currentState = fern();
    $('#fern-stats').text(`Soil: ${currentState.soil} Water: ${currentState.water} Light: ${currentState.light}`);
  });

  





});