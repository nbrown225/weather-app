

// API KEY
const API_KEY = "43a7fd61b9f2df3eab9c7cf15eae3f6c";
// DOM QUERY
var searchBtn = document.querySelector("#search-btn");
var searchHistory = document.querySelector('#history');
var currentCity = document.querySelector('#current-city');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4');
var day5 = document.querySelector('#day5');

// get city
var city = "";
function getCity() {
    fetch("https://api.openweatermap.org/data/2.5/weather?q=" + city + "&appid" + API_KEY)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(){
    }
    )
}
window.onload = function() {
    getCity( )
}