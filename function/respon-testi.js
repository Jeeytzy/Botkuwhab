// respon-testi.js
const fs = require('fs');

// Tambahkan respon baru
function addResponTesti(key, response, isImage = false, image_url = null) {
  const obj_add = {
    key: key.toLowerCase(),
    response,
    isImage,
    image_url
  }
  db.data.testi.push(obj_add);
}

// Ambil data respon berdasarkan key
function getDataResponTesti(key) {
  return db.data.testi.find(item => item.key.toLowerCase() === key.toLowerCase());
}

// Cek apakah key sudah pernah ditambahkan
function isAlreadyResponTesti(key) {
  return db.data.testi.some(item => item.key.toLowerCase() === key.toLowerCase());
}

// Kirim respon sebagai text (optional)
function sendResponTesti(key) {
  const found = db.data.testi.find(item => item.key.toLowerCase() === key.toLowerCase());
  return found ? found.response : null;
}

// Reset seluruh isi list testi
function resetTestiAll() {
  db.data.testi = [];
}

// Hapus data testi berdasarkan key
function delResponTesti(key) {
  const index = db.data.testi.findIndex(item => item.key.toLowerCase() === key.toLowerCase());
  if (index !== -1) {
    db.data.testi.splice(index, 1);
  }
}

// Update isi testi
function updateResponTesti(key, response, isImage = false, image_url = null) {
  const index = db.data.testi.findIndex(item => item.key.toLowerCase() === key.toLowerCase());
  if (index !== -1) {
    db.data.testi[index].response = response;
    db.data.testi[index].isImage = isImage;
    db.data.testi[index].image_url = image_url;
  }
}

module.exports = {
  addResponTesti,
  delResponTesti,
  resetTestiAll,
  isAlreadyResponTesti,
  sendResponTesti,
  updateResponTesti,
  getDataResponTesti
}