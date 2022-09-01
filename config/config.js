const localDBURL = (name) => `mongodb://localhost:27017/${name}`;
const jwtPrivateKey = (key) => key;
const cloudDBURL = (name, password) => `mongodb+srv://${name}:${password}@panel.zex2nqq.mongodb.net/?retryWrites=true&w=majority`;
const monyDataURL = () => 'https://www.tgju.org/';
const oilDataURL = () => 'https://oilprice.com/oil-price-charts/';

module.exports = {
  localDBURL,
  jwtPrivateKey,
  cloudDBURL,
  monyDataURL,
  oilDataURL
}