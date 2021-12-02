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


//Write logic to fetch Siberian data from the API endpoint using request.
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log('body:', body); // Print the HTML for the Google homepage.
//   console.log(typeof body) //should be string

//   const data = JSON.parse(body);
//   console.log(data); //=> data more structured.
//   console.log(typeof data); //=> now will be an obj

//   console.log("➡️", data[0].description);
// });

//Satrt off
//print out the body content to the terminal. The body is the entire response body sent back from the API server.
//Take a moment to also check what the type of body is:
//use console.log(typeof body) ==> will be string.

//Use JSON.parse to convert string into an actual obj
//const data = JSON.parse(body);
//console.log(data); => data more structured.
//console.log(typeof data);  => now will be an obj

// => Access the 1st entry in the data array and print out the descripton for the user.

//Allow the user to specify the breed name using command line args.

//Edge cases
// - Breed not found - write code to output message if breed not found.
// - Request Failed
//      - In event request fails, error argument in callback func would not be undefined
//      - instead it contains details.
//      - Handle request errors and print error details to the screen.
//      - Test by breaking the URL, or introduce a typo in domain name.
//TIP - data validate pattern

