const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error !== null) {
      return callback(error, null);
    }
 
    const data = JSON.parse(body);
  
    if (response.statusCode !== 200) {
      return callback((data.message), null);
    }

    if (data.length === 0) {
      return callback('Invalid breed', null);
    }

    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };

