const request = require('request');
let args = process.argv.slice(2);
let breedSearch = args[0];

if (!breedSearch) {
  return console.log('Invalid breed name');
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  
  if (error) {
    return console.log('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body)[0];
  if (!data) {
    return console.log('Breed not found');
  }
  console.log("➡️", data.description);

});