const axios = require('axios');
const config = require('../config/config');
const cheerio = require('cheerio');

module.exports = async function() {
  try {
    let data = await axios.get(config.dcData());
    
    if(!data.data) return {
      success: false,
      message: `Could not get the data form ${config.dcData()}.`
    };

    let $ = cheerio.load(data.data);

    const dcPrices = $('tbody > tr > td > b').text().split("$");
    
    return {
      success: true, 
      data: {
        bitCoin: dcPrices[0],
        etherium: dcPrices[1],
        tether: dcPrices[2],
        usdCoin: dcPrices[3],
        BNB: dcPrices[4],
        BUSD: dcPrices[5]
      }
    }

  } catch(err) {
    return {
      success: false,
      message: `Something bad happend, form ${config.dcData()}.`,
      errMessage: err.message 
    };
  }
}