const axios = require("axios");

exports.getUsernameMl = async(id, zoneId) => {
  return new Promise(async (resolve, reject) => {
    axios
    .post(
      'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
      new URLSearchParams(
        Object.entries({
          productId: '1',
          itemId: '2',
          catalogId: '57',
          paymentId: '352',
          gameId: id,
          zoneId: zoneId,
          product_ref: 'REG',
          product_ref_denom: 'AE',
        })
      ),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'https://www.duniagames.co.id/',
          Accept: 'application/json',
        },
      }
    )
    .then((response) => {
      resolve(response.data.data.gameDetail.userName)
    })
    .catch((err) => {
      resolve({
        status: 404,
        msg: 'User Id or ZoneId Not Found'
      })
    })
  })
}

exports.getUsernameFf = async(id) => {
  return new Promise(async (resolve, reject) => {
    axios
    .post(
      'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
      new URLSearchParams(
        Object.entries({
          productId: 3,
          itemId: 11,
          catalogId: 66,
          paymentId: 750,
          gameId: id,
          product_ref: 'AE',
          product_ref_denom: 'AE',
        })
      ),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'https://www.duniagames.co.id/',
          Accept: 'application/json',
        },
      }
    )
    .then((response) => {
      resolve(response.data.data.gameDetail.userName)
    })
    .catch((err) => {
      resolve({
        status: 404,
        msg: 'User Id or ZoneId Not Found'
      })
    })
  })
}

exports.getUsernameCod = async(id) => {
  return new Promise(async (resolve, reject) => {
    axios
    .post(
      'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
      new URLSearchParams(
        Object.entries({
          productId: 18,
          itemId: 88,
          catalogId: 144,
          paymentId: 828,
          gameId: id,
          product_ref: 'CMS',
          product_ref_denom: 'REG',
        })
      ),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'https://www.duniagames.co.id/',
          Accept: 'application/json',
        },
      }
    )
    .then((response) => {
      resolve(response.data.data.gameDetail.userName)
    })
    .catch((err) => {
      resolve({
        status: 404,
        msg: 'User Id or ZoneId Not Found'
      })
    })
  })
}