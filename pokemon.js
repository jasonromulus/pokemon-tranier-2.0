const pokemon = require('express').Router();


Pokemon = {
  name: "Pikachu",
  color: "Yellow",
  id: Math.random(),
  name: "Charizard",
  color: "Red",
  id: Math.random()
}

const Trainers = {
  name: "Julia",
  pokemon: ["Pikachu", "Starlord", "Dusk"],

}

pokemon.get('/', (req, res, next) => {
  res.send(Pokemon)
  res.send(Trainers)
})

pokemon.get('/trainers', (req, res, next) => {
  res.send(Trainers)
})

console.log(Trainers)