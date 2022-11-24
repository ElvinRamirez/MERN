const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    //takes setup and punchline
    setup: String,
    punchline: String,
}, 
{timestamps: true})

//constructor function for the model:
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;