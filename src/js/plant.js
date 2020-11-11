import * as store from './store.js';

// Functions Created with Change State Function Factory
export const feed = store.changeState("soil")(1);
export const superFeed = store.changeState("soil")(5);
export const water = store.changeState("water")(1);
export const superWater = store.changeState("water")(5);
export const light = store.changeState("light")(1);
export const superLight = store.changeState("light")(5);


// Plant Method Compositions
const canBeColorful = (plant) => ({
  color: (color) => `${plant.name} is ${color}.`
});

const canShade = (plant) => ({
  shade: (item) => `${plant.name} is shading ${item}.`
})

const canPoke = (plant) => ({
  poke: (item) => `${plant.name} is poking ${item}.`
})

const canCharm = (plant) => ({
  charm: (item) => `${plant.name} is charming ${item}.`
})

const canSleep = (plant) => ({
  sleep: () => `${plant.name} is sleeping.`
})


// Plant Function Factories
export const orchid = (name) => {
  let state = {
    name
  }
  return { ...state, ...canBeColorful(state), ...canSleep(state) }
}

export const palm = (name) => {
  let state = {
    name
  }
  return { ...state, ...canShade(state), ...canSleep(state)}
}

export const cactus = (name) => {
  let state = {
    name
  }
  return { ...state, ...canPoke(state), ...canSleep(state)}
}

export const succulent = (name) => {
  let state = {
    name
  }
  return { ...state, ...canCharm(state), ...canSleep(state)}
}