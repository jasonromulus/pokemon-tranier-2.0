const express = require('express');
const app = express();



const Trainers = [
  {
    "name": "Julia",
    "pokemon": ["Pikachu", "Starlord", "Dusk"],
  },
  {
    "name": "William",
    "pokemon": ["Volt", "Her"]
  }

]

const PokemonObj = [
  {
    "name": "Pikachu",
    "color": "Yellow",
    "id": "1",
  },
  {
    "name": "Charizard",
    "color": "Red",
    "id": "2"
  }
]



const All = {
  Trainers,
  PokemonObj
}



app.get('/', (req, res) => {
  res.json(All)
})


app.get('/trainers', (req, res) => {
  res.json(Trainers)
})


app.listen(3000, (req, res) => {
  console.log('app listening on 3000')
})