const request = require('request');
//let breedSearch = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {
  if (!breedName) {
    return callback('Invalid breed name');
  } 

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, _response, body) => {
    if (error) {
      return callback(error, null) //console.log('error:', error); // Print the error if one occurred
    }
    
    const data = JSON.parse(body);
    const breed = data[0];
    
    if (breed) {
      return callback(null, breed.description); //console.log('Breed not found');
    } else {
      return callback('breed not found')
    }
  });
};


module.exports = { fetchBreedDescription };