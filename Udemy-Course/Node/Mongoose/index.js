const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('Connection Open!!')
    })
    .catch(err => {
        console.log("Error");
        console.log(err)
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);

//const amadeus = new Movie({title: 'Amadeus', year: 1978, score: 9.2, rating: 'A'})

Movie.insertMany([
    { title: 'The Matrix', year: 1999, score: 8.7, rating: 'R' },
    { title: 'Interstellar', year: 2014, score: 8.6, rating: 'PG-13' },
    { title: 'Barbie', year: 2023, score: 7.2, rating: 'PG-13' },
    { title: 'Oppenheimer', year: 2023, score: 8.5, rating: 'R' },
    { title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'PG-13' },
    { title: 'Spider-Man: Into the Spider-Verse', year: 2018, score: 8.4, rating: 'PG' },
    { title: 'RRR', year: 2022, score: 8.0, rating: 'NR' }
])
.then(data => {
    console.log('It worked');
    console.log(data);
})