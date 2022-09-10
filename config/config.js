const localDBURL = (name) => `mongodb://localhost:27017/${name}`;
const jwtPrivateKey = (key) => key;
const cloudDBURL = (name, password) => `mongodb+srv://${name}:${password}@panel.zex2nqq.mongodb.net/?retryWrites=true&w=majority`;
const monyDataURL = () => 'https://www.tgju.org/';
const oilDataURL = () => 'https://oilprice.com/oil-price-charts/';
const digitalCurrencyData = () => 'https://pay98.app/%D9%82%DB%8C%D9%85%D8%AA-%D8%A7%D8%B1%D8%B2%D9%87%D8%A7%DB%8C-%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84';
const carData = () => 'https://api.car.ir/car-prices';
const emailAuthPassword = () => (process.env.EMAIL_AUTH_PASSWORD) ? process.env.EMAIL_AUTH_PASSWORD : null;


module.exports = {
  localDBURL,
  jwtPrivateKey,
  cloudDBURL,
  monyDataURL,
  oilDataURL,
  dcData: digitalCurrencyData,
  carData,
  emailAuthPassword
}