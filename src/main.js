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



  





});