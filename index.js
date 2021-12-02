const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// fetchBreedDescription(breedName, (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//       if (error) {
//         return console.log('error:', error); // Print the error if one occurred
//       }
      
//       const data = JSON.parse(body)[0];
//       let desc  = data.description
    
//       if (!data) {
//         return console.log('Breed not found');
//       } 
//     //console.log("➡️", data.description);
//   });

//     console.log(desc);
//   }
// });
