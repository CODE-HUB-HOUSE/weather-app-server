require('dotenv').config(
  { path: `../../${process.env.NODE_ENV}.env` }
);

module.exports = {
    port: process.env.PORT || 3000,
    weather_api_url: process.env.WEATHER_API_URL,
    weather_api_key: process.env.WEATHER_API_KEY,
    images_url: process.env.IMAGES_URL
}
