const fs = require('fs')
const chalk = require('chalk')
global.apivelix = "5e6cfd14aa403e0b09eb270653c5e7085e0aec7c8a74969353"; // Daftar https://velixs.com
// OWNER
global.owner = ['6285175331410'] // Nomer Owner, Diawali 628...., Lebih dari 1 pisahkan dengan koma
global.nomerOwner = '6285175331410' // Nomer Real Owner, Diawali 628....
global.botName = 'AsistenBot' // Nama Bot
global.ownerName = 'SECRET' // Nama Owner
global.packname = 'Kay Stiker' //Nama Pack Stiker
global.author = 'Kayy Store' //Nama Owner Stiker
global.sessionName = 'nyan~' //JANGAN DI GANTI
global.qris = fs.readFileSync("./db/qris.jpg") //Foto Qris

global.apikey = 'Reyza' //Apikey Lolhuman
global.apikeyBeta = 'dhaniels'

global.caption_pay = ``


// DIGIFLAZZ 
global.digiuser = 'c' // Username Digi
global.digiapi = 'gc' // Production Key

// TOKOPAY
merchantTP = '' // Untuk Depo Otomatis
secretTP = '' // Untuk Depo Otomatis 

// Database
uri = 'mongodb+srv://kenreyza:GlvP8IbDXEcEPiOB@cluster0.ro2v731.mongodb.net/' // jangan diganti kalo ga ngerti
dbName = 'kenreyza' // isi nama db, tanpa spasi, huruf kecil semua
collectionUsers = 'users' // Jangan diganti
collectionUser = 'user' // Jangan diganti
collectionDepo = 'depo' // Jangan diganti
collectionTrx = 'trx' // Jangan diganti
collectionMarkup = 'markup' // Jangan diganti
collectionEw = 'ewallet' // Jangan diganti
collectionCommands = 'cmd' // Jangan diganti

// EMBED
linkGC = 'https://chat.whatsapp.com/DW45Wul2tZ64XbWJs3jSsI' // Group di command Menu
poster1 = 'https://telegra.ph/file/267ad2a82db9bed8b5a2f.jpg' // Banner


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})