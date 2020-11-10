import * as store from './store.js';

// Plant Objects
export const iris = {name: "Iris"};
export const palm = {name: "Palm"};
export const fern = {name: "Fern"};
export const succulent = {name: "Succulent"};

// Plant Store States
export const irisStateControl = store.storeState(iris);
export const palmStateControl = store.storeState(palm);
export const fernStateControl = store.storeState(fern);
export const succulentStateControl = store.storeState(succulent);

// Functions Created with Function Factory
export const feed = store.changeState("soil")(1);
export const superFeed = store.changeState("soil")(5);
export const water = store.changeState("water")(1);
export const superWater = store.changeState("water")(5);
export const light = store.changeState("light")(1);
export const superLight = store.changeState("light")(5);