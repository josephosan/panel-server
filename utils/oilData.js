const cheerio = require('cheerio');
const axios = require('axios');
const config = require('../config/config');

module.exports = async function() {
  try {
    let data = await axios.get(config.oilDataURL());
    if(!data) return {
      success: false,
      message: `Could not get the data form ${config.oilDataURL()}.`
    };

    let $ = cheerio.load(data.data);

    let lightIranOil = $('tbody > tr[data-name="Iran-Light"] > .last_price').text().split('.')[0];
    let heavyIranOil = $('tbody > tr[data-name="Iran-Heavy"] > .last_price').text().split('.')[0];
    let forozanIranOil = $('tbody > tr[data-name="Forozan-Blend"] > .last_price').text().split('.')[0];
    
    let lightArabOil = $('tbody > tr[data-name="Arab-Extra-Light"] > .last_price').text().split('.')[0];
    let heavyArabOil = $('tbody > tr[data-name="Arab-Heavy"] > .last_price').text().split('.')[0];
    let mediumArabOil = $('tbody > tr[data-name="Arab-Medium"] > .last_price').text().split('.')[0];

    return {
      success: true,
      arabOilPrice: {
        light: lightArabOil,
        heavy: heavyArabOil,
        medium: mediumArabOil
      },
      iranOilPrice: {
        light: lightIranOil,
        heavy: heavyIranOil,
        medium: forozanIranOil
      }
    }
  } catch(err) {
    return {
      success: false,
      message: `Could not get the data form ${config.oilDataURL()}.`,
      errMessage: err.message 
    };
  }
}