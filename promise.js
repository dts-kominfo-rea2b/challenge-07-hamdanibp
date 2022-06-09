const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = emosi => {
  const ixx = promiseTheaterIXX()
    .then(results => results.map(result => result.hasil))

  const vgc = promiseTheaterVGC()
    .then(results => results.map(result => result.hasil));

  
  return Promise.all([ixx, vgc])
    .then(values => {
      const items = [];
      const [ixx, vgc] = values;
      
      ixx.map(ixxData => items.push(ixxData));
      vgc.map(vgcData => items.push(vgcData));

      return items.filter(item => item == emosi).length;
    })
};

module.exports = {
  promiseOutput,
};
