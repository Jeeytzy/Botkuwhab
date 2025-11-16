const fs = require('fs')
const crypto = require('crypto')
const axios = require('axios')

function getProduk(username, apikey, persen) {
  let signature = crypto
    .createHash("md5")
    .update(username + apikey + "pricelist")
    .digest("hex")

  axios({
    method: "POST",
    url: "https://api.digiflazz.com/v1/price-list",
    data: {
      cmd: "prepaid",
      username: username,
      sign: signature,
    }
  }).then(response => {
    let res = JSON.stringify(response.data.data)

    fs.writeFileSync("./listproduk.json", res)
    let data = JSON.parse(fs.readFileSync("./listproduk.json"))

    data.forEach((i) => {
      let persentase = i.price * (persen / 100)
      i.price += Number(Math.ceil(persentase))
    })
    let updatedData = JSON.stringify(data);
    fs.writeFileSync("./listproduk.json", updatedData);
  }).catch((e) => {
    console.log(e);
  })
}

module.exports = { getProduk }