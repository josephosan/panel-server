const localDBURL = (name) => `mongodb://localhost:27017/${name}`;
const jwtPrivateKey = (key) => key;

module.exports = {
  localDBURL,
  jwtPrivateKey
}