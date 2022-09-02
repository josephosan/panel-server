const axios = require('axios');
const config = require('../config/config');


module.exports = async function() {
  try {
    let JSONdata = await axios.post(config.carData(), {});
    

    return {
      iranKhodro: JSONdata.data.items[0],
      sipa: JSONdata.data.items[1]
    }

  } catch(err) {
    return {
      success: false,
      message: `Something bad happend, form ${config.carData()}.`,
      errMessage: err.message 
    };
  }
}