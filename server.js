/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public')); // what is this doing? serves static files like imgs, css, and js files

// function renderAnyRequest (request, response, nextFn) {
//     response.send(VARIBLE ARGUMENT);
//     nextFn();
// };

// GET /api/albums
function getAlbums (request, response, nextFn) {
    console.log('You rendered albums from the server');
    console.log('This is the request object: ', request);
    console.log('This is the response object: ', response);
    response.send(albums); // this serves the html to the page
    nextFn(); // this invokes the next middleware function in the app
};
app.get('/api/albums', getAlbums); // the first argument in .get() can be any url, this is from where the request is made

// GET /api/circles
function getCircles (request, response, nextFn) {
    response.send(circles);
    nextFn();
};
app.get('/api/circles', getCircles);

// GET /api/movies
function getMovies (request, response, nextFn) {
    response.send(movies);
    nextFn();
};
app.get('/api/movies', getMovies);

// GET /api/nametags
function getnameTags (request, response, nextFn) {
    response.send(nameTags);
    nextFn();
};
app.get('/api/nameTags', getnameTags);

// GET /api/poker
function getPoker (request, response, nextFn) {
    response.send(poker);
    nextFn();
};
app.get('/api/poker', getPoker);

// GET /api/rectangle
function getRectangle (request, response, nextFn) {
    response.send(rectangle);
    nextFn();
};
app.get('/api/rectangle', getRectangle);

// GET /api/restaurants
function getRestaurants (request, response, nextFn) {
    response.send(restaurants);
    nextFn();
};
app.get('/api/restaurants', getRestaurants);

// GET /api/students
function getStudents (request, response, nextFn) {
    response.send(students);
    nextFn();
};
app.get('/api/students', getStudents);

// GET /api/surveys
function getSurveys (request, response, nextFn) {
    response.send(surveys);
    nextFn();
};
app.get('/api/surveys', getSurveys);

// GET /api/tweets
function getTweets (request, response, nextFn) {
    response.send(tweets);
    nextFn();
};
app.get('/api/tweets', getTweets);

// Listens to the local server

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})