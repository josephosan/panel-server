const cheerio = require('cheerio');
const axios = require('axios');
const config = require('../config/config');

module.exports = async function() {
  try {
    let data = await axios.get(config.monyDataURL());
    if(!data) return {
      success: false,
      message: `Could not get the data form ${config.monyDataURL()}.`
    };

    let $ = cheerio.load(data.data);
    
    // getting prices
    let gold = $('.home-quickview-wrapper > .container > div > ul > #l-geram18 > h3').text();
    let goldPrice = $('.home-quickview-wrapper > .container > div > ul > #l-geram18 > span > span').text();
    let goldChange = $('.home-quickview-wrapper > .container > div > ul > #l-geram18 > .info-change').text();

    let dolar = $('.home-quickview-wrapper > .container > div > ul > #l-sana_real_sell_usd > h3').text();
    let dolarPrice = $('.home-quickview-wrapper > .container > div > ul > #l-sana_real_sell_usd > span > span').text();
    let dolarChange = $('.home-quickview-wrapper > .container > div > ul > #l-sana_real_sell_usd > .info-change').text();

    let coin = $('.home-quickview-wrapper > .container > div > ul > #l-sekee > h3').text();
    let coinPrice = $('.home-quickview-wrapper > .container > div > ul > #l-sekee > span > span').text();
    let coinChange = $('.home-quickview-wrapper > .container > div > ul > #l-sekee > .info-change').text();
  
    let bourse = $('.home-quickview-wrapper > .container > div > ul > #l-bourse > h3').text();
    let boursePrice = $('.home-quickview-wrapper > .container > div > ul > #l-bourse > span > span').text();
    let bourseChange = $('.home-quickview-wrapper > .container > div > ul > #l-bourse > .info-change').text();

    return {
      success: true, 
      data: {
        gold: {
          name: gold,
          price: goldPrice,
          change: goldChange
        },
        dolar: {
          name: dolar,
          price: dolarPrice, 
          change: dolarChange
        },
        coin: {
          name: coin,
          price: coinPrice, 
          change: coinChange
        },
        bourse: {
          name: bourse,
          price: boursePrice, 
          change: bourseChange
        }
      }
    }
  } catch(err) {
    return {
      success: false,
      message: `Could not get the data form ${config.monyDataURL()}.`,
      errMessage: err.message 
    };
  }
}