const getData = async (req, res) => {
  const address = req.query.address
  if(!address) {
      return res.send({
          error: "You must enter address in search text box"
      })
  }

  weatherData(address, (error, {temperature, description, cityName} = {}) => {
      if(error) {
          return res.send({
              error
          })
      }
      console.log("Response controller: ",temperature, description, cityName);
      res.send({
          temperature,
          description,
          cityName
      })
  })
}

module.exports = {
  getData
}