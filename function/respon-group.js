const moment = require('moment');

exports.groupResponseRemove = async (ronzz, update) => {
  const metadata = await ronzz.groupMetadata(update.id)
  for (let num of update.participants) {
    try {
      try {
        ppuser = await ronzz.profilePictureUrl(num, 'image')
      } catch {
        ppuser = 'https://j.top4top.io/p_3291h81r21.jpg'
      }
      if (update.action == 'remove') {
        ronzz.fetchStatus(num).then(async bio => {
          await ronzz.sendMessage(update.id, { image: { url: ppuser }, caption: `_@${num.split("@")[0]}_ telah meninggalkan grup *${metadata.subject}*\n jumlah member menjadi : _${metadata.participants.length ? metadata.participants.length : "Undefined"}_\n\n`, mentions: [num] })
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

exports.groupResponseWelcome = async (ronzz, update) => {
  const metadata = await ronzz.groupMetadata(update.id)
  for (let num of update.participants) {
    try {
      try {
        ppuser = await ronzz.profilePictureUrl(num, 'image')
      } catch {
        ppuser = 'https://j.top4top.io/p_3291h81r21.jpg'
      }
      if (update.action == 'add') {
        ronzz.fetchStatus(num).then(async bio => {
          await ronzz.sendMessage(update.id, { image: { url: ppuser }, caption: `👋Halo kak _${num.split("@")[0]}_\n👤 member ke : _${metadata.participants.length ? metadata.participants.length : "Undefined"}_\nSelamat Datang di Grup ${metadata.subject}\n\nGunakan perintah *List* untuk menampilkan daftar layanan yang tersedia dan *#stok* jika ingin order otomatis pada bot.`, mentions: [num] })
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

exports.groupResponsePromote = async (ronzz, update) => {
  const metadata = await ronzz.groupMetadata(update.id)
  for (let num of update.participants) {
    try {
      if (update.action == 'promote') {
        await ronzz.sendMessage(update.id, { text: `*@${num.split("@")[0]} Promote From ${metadata.subject}*`, mentions: [num] })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

exports.groupResponseDemote = async (ronzz, update) => {
  const metadata = await ronzz.groupMetadata(update.id)
  for (let num of update.participants) {
    try {
      if (update.action == 'demote') {
        await ronzz.sendMessage(update.id, { text: `*@${num.split("@")[0]} Demote From ${metadata.subject}*`, mentions: [num] })
      }
    } catch (err) {
      console.log(err)
    }
  }
}