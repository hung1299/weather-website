const request = require('postman-request');

const forecast = (latitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=67dc50ea98304df168227d71b90c70bc&query=${latitude},${longtitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      const data = response.body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out. The humidity is ${data.humidity}%`
      );
    }
  });
};

module.exports = forecast;
