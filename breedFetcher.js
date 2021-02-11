const request = require('request');

let arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error === null) {
    if (body.length !== 2) {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } else {
      console.log("Requested Breed Not Found.");
    }
  } else {
    console.log(error);
  }
});