require('./db/config')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, MessageType } = require('@whiskeysockets/baileys')
const fs = require('fs')
let defaultMarkupPercentage = 0;
const util = require('util')
const canvafy = require("canvafy");
const { InfoCardBuilder } = require("discord-card-canvas")
const chalk = require('chalk')
const os = require('os')
const ms = toMs = require('ms');
const pms = require('parse-ms');
const FormData = require("form-data");
const { MongoClient } = require('mongodb');
const { addUser, setRole, addSaldo, lessSaldo } = require("./function/user");
const { formatmoney } = require("./function/fmoney");
const formattedBalance = formatmoney;
const pathUser = "./function/users.json";
const cekProdukDigi = require("./function/cekproduk");
const pathTrx = "./storage/trx/";
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { remini } = require('./lib/remini.js')
const { pinterest, tiktokDl } = require('./lib/scraper');
const { color, bgcolor } = require('./lib/color')
const path = require('path')
const fetch = require('node-fetch')
const BACKUP_FILES = [
  './database/list.json',
  './database/sewa.json',
]
const {
	createCanvas,
	loadImage,
	registerFont
} = require('canvas')
registerFont('./lib/notosans.ttf', { family: 'Noto Sans' })

const {
    cekMobileLegends,
    cekFreeFire,
    cekGenshin,
    cekCodm,
    cekSus,
    cekHok,
    cekPubg
} = require('./lib/idgame');

const { 
  isSetBot,
    addSetBot,
    removeSetBot,
    changeSetBot,
    getTextSetBot,
    updateResponList,
    delResponList,
    renameList,
    isAlreadyResponListGroup,
    sendResponList,
    isAlreadyResponList,
    getDataResponList,
    addResponList,
    isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome,
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
    addPay,
    updatePay
} = require("./lib/store")
     
const jsonFilePath = './db/custom_commands.json';
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture, generateUniqueRefID, connect } = require('./lib/myfunc')
module.exports = Fath = async (client, m, chatUpdate, store, opengc, setpay, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    // Initialize global.db
    const keyId = 'P7S6yQhfMkl8y4AjprKIMMJ85R61i8SpP5qQCmJa8oYx4UcLo5leoHL4cQQgZo54'
    const signId = 'a895bd30ee97625749f091612a0d25e2'
    var prefix = "."
    const isSewa = checkSewaGroup(m.chat, sewa)
    const hariini = moment.tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY');

const reply = (text) =>{
  m.reply(text)
}
async function getGcName(groupID) {
            try {
                let data_name = await client.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
    const afk = require('./lib/afk');
    const _afk = JSON.parse(fs.readFileSync('./database/afk.json'));    
    const isCmd = body.startsWith(prefix)
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ")
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const from = mek.key.remoteJid
    const botNumber = await client.decodeJid(client.user.id)
    const isCreator = ["6285643236948@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isAfkOn = afk.checkAfkUser(m.sender, _afk)
    const isGroup = m.key.remoteJid.endsWith('@g.us')
    const content = JSON.stringify(m.message)
    const isImage = (type == 'imageMessage')
    const isQuotedMsg = (type == 'extendedTextMessage')
    const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
    const isVideo = (type == 'videoMessage')
    const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
    const isWelcome = _welcome.includes(m.chat)
    const isLeft = _left.includes(m.chat)

        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const tgl = tanggal(new Date()) // HARI & TANGGAL
        const day = tanggal(new Date()).split(',')[0]; // HARI
        const date = tanggal(new Date()).split(',')[1].trim(); // TANGGAL
        
        // WAKTU INDONESIA
        const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss') + ' WIB';
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')


    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if (time1 < "23:59:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "19:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "18:00:00") {
      var ucapanWaktu1 = 'Sore'
    }
    if (time1 < "15:00:00") {
      var ucapanWaktu1 = 'Siang'
    }
    if (time1 < "10:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "05:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "03:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    
    async function loading() {
      var vallzalyws = [
 'Tunggu ya sayang'
]
      let { key } = await client.sendMessage(from, { text: 'loading...' }) //Pengalih isu

      for (let i = 0; i < vallzalyws.length; i++) {
        /*await delay(10)*/
        await client.sendMessage(from, { text: vallzalyws[i], edit: key }); //PESAN LEPAS
      }
    }

    const fdocc = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        documentMessage: {
          title: `*Selamat ${ucapanWaktu1} ${pushname}*`,
          jpegThumbnail: m,
        }
      }
    }
    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, '')
      const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' + name + '\n' +
        'ORG:;\n' +
        'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
        'END:VCARD'
      return client.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions: mn ? mn : [] }, { quoted: quoted })
    }
    const owned = `${global.nomerOwner}@s.whatsapp.net`
    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const kiw = sender.split("@")[0]

    const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    const Input = mentionByTag ? mentionByTag[0] : q ? numberQuery : false
    if (!client.public) {
      if (!m.key.fromMe) return
    }
    async function downloadAndSaveMediaMessage(type_file, path_file) {
      if (type_file === 'image') {
        var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
        }
        fs.writeFileSync(path_file, buffer)
        return path_file
      }
    }
    
//pp buat fitur qc
    try {
ppuser = await client.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
    
    
// Lutz Send Message
    const FathMes = async (m, txt1) => {
      const mopsi = {
        text: txt1,
        contextInfo: {
          externalAdReply: {
            renderLargerThumbnail: false,
            mediaUrl: ``,
            mediaType: 1,
            title: pushname,
            body: `Follow Me`,
            thumbnail: ``,
            sourceUrl: ``,
            showAdAttribution: false,
          },
        },
      };

      client.sendMessage(m.chat, mopsi, { quoted: m });
    };
 const FathUser = async (tous, txt2) => {
      const mopsi = {
        text: txt2,
        contextInfo: {
          externalAdReply: {
            renderLargerThumbnail: false,
            mediaUrl: ``,
            mediaType: 1,
            title: `${groupName}`,
            body: `Click Here`,
            thumbnail: ``,
            sourceUrl: ``,
            showAdAttribution: false,
          },
        },
      };

      const tosend = tous + "@s.whatsapp.net";

      client.sendMessage(tosend, mopsi);
    };    
 function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
} 

//Start Fitur Cek Region by Dhaniels Store
async function fetchMoogoldData(url, params) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: params
    });

    const data = await response.json();
console.log(response);
    // Hilangkan pengecekan status invalid
    console.log('Validation result:', data);
    return data;
}

const countryMappingMg = {
    'ID': 'INDONESIA',
    'US': 'UNITED STATES',
    'CA': 'CANADA',
    'GB': 'UNITED KINGDOM',
    'AU': 'AUSTRALIA',
    'IN': 'INDIA',
    'CN': 'CHINA',
    'JP': 'JAPAN',
    'KR': 'SOUTH KOREA',
    'DE': 'GERMANY',
    'FR': 'FRANCE',
    'IT': 'ITALY',
    'ES': 'SPAIN',
    'BR': 'BRAZIL',
    'MX': 'MEXICO',
    'ZA': 'SOUTH AFRICA',
    'NG': 'NIGERIA',
    'EG': 'EGYPT',
    'RU': 'RUSSIA',
    'AR': 'ARGENTINA',
    'CL': 'CHILE',
    'CO': 'COLOMBIA',
    'PE': 'PERU',
    'VE': 'VENEZUELA',
    'MY': 'MALAYSIA',
    'PH': 'PHILIPPINES',
    'SG': 'SINGAPORE',
    'TH': 'THAILAND',
    'VN': 'VIETNAM',
    'TR': 'TURKEY',
    'SA': 'SAUDI ARABIA',
    'AE': 'UNITED ARAB EMIRATES',
    'IL': 'ISRAEL',
    'PK': 'PAKISTAN',
    'BD': 'BANGLADESH',
    'LK': 'SRI LANKA',
    'NP': 'NEPAL',
    'MM': 'MYANMAR',
    'KH': 'CAMBODIA',
    'LA': 'LAOS',
    'TW': 'TAIWAN',
    'HK': 'HONG KONG',
    'MO': 'MACAU',
    'MD': 'MOLDOVA',
    'UA': 'UKRAINE',
    'PL': 'POLAND',
    'CZ': 'CZECH REPUBLIC',
    'HU': 'HUNGARY',
    'RO': 'ROMANIA',
    'BG': 'BULGARIA',
    'GR': 'GREECE',
    'PT': 'PORTUGAL',
    'IE': 'IRELAND',
    'NL': 'NETHERLANDS',
    'BE': 'BELGIUM',
    'CH': 'SWITZERLAND',
    'AT': 'AUSTRIA',
    'SE': 'SWEDEN',
    'NO': 'NORWAY',
    'FI': 'FINLAND',
    'DK': 'DENMARK',
    'IS': 'ICELAND',
    'MT': 'MALTA',
    'LU': 'LUXEMBOURG',
    'CY': 'CYPRUS',
    'SI': 'SLOVENIA',
    'HR': 'CROATIA',
    'RS': 'SERBIA',
    'BA': 'BOSNIA AND HERZEGOVINA',
    'ME': 'MONTENEGRO',
    'MK': 'NORTH MACEDONIA',
    'AL': 'ALBANIA',
    'LT': 'LITHUANIA',
    'LV': 'LATVIA',
    'EE': 'ESTONIA',
    'KZ': 'KAZAKHSTAN',
    'UZ': 'UZBEKISTAN',
    'TJ': 'TAJIKISTAN',
    'TM': 'TURKMENISTAN',
    'GE': 'GEORGIA',
    'AM': 'ARMENIA',
    'AZ': 'AZERBAIJAN',
    'QA': 'QATAR',
    'BH': 'BAHRAIN',
    'KW': 'KUWAIT',
    'OM': 'OMAN',
    'YE': 'YEMEN',
    'SY': 'SYRIA',
    'LB': 'LEBANON',
    'JO': 'JORDAN',
    'BY': 'BELARUS'
};

function extractDetails(message) {
    const userIdMatch = message.match(/User ID: (\d+)/);
    const serverIdMatch = message.match(/Server ID: (\d+)/);
    const nickMatch = message.match(/In-Game Nickname: ([^\n]+)/);
    const countryMatch = message.match(/Country: (\w+)/);

    return {
        userId: userIdMatch ? userIdMatch[1] : 'N/A',
        serverId: serverIdMatch ? serverIdMatch[1] : 'N/A',
        nickname: nickMatch ? nickMatch[1] : 'N/A',
        country: countryMatch ? countryMappingMg[countryMatch[1]] || 'UNKNOWN' : 'UNKNOWN',
    };
}

async function validateMobileLegendsMoogold(userId, zoneId) {
    const url = 'https://moogold.com/wp-content/plugins/id-validation-new/id-validation-ajax.php';
    const params = new URLSearchParams();
    params.append('attribute_diamonds', 'Weekly Pass');
    params.append('text-5f6f144f8ffee', userId);
    params.append('text-1601115253775', zoneId);
    params.append('quatity', 1);
    params.append('add-to-chart', 5846232);
    params.append('product_id', 5846232);
    params.append('variation_id', 5846345);

    const data = await fetchMoogoldData(url, params);

    if (data && data.message) {
        const details = extractDetails(data.message);
        m.reply(`─────〔  *CEK REGION MLBB* 〕─────

*User ID* : ${details.userId}
*Server ID* : ${details.serverId}
*Nickname* : ${details.nickname}
*Region* : ${details.country}`);
    } else {
        m.reply('User Id Anda Salah Silahkan Cek Kembali');
    }
}

//Upload Foto ke imgbb.com  
function TelegraPh(Path) {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
        try {
            const form = new FormData();
            form.append("image", fs.createReadStream(Path));

            const data = await axios({
                url: "https://api.imgbb.com/1/upload?key=06e4977f2095b46cd0392531498627c3",
                method: "POST",
                headers: {
                    ...form.getHeaders()
                },
                data: form
            });

            
            if (data.data && data.data.data && data.data.data.url) {
                return resolve(data.data.data.url);
            } else {
                return reject(new Error("Unexpected API response structure"));
            }
        } catch (err) {
            return reject(new Error(String(err)));
        }
    });
}

    function readCustomCommands() {
      try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        return {};
      }
    }

    function saveCustomCommands(commands) {
      fs.writeFileSync(jsonFilePath, JSON.stringify(commands, null, 2), 'utf8');
    }

    function addCustomCommand(groupID, command, response) {
      const customCommands = readCustomCommands();
      if (!customCommands[groupID]) {
        customCommands[groupID] = {};
      }
      customCommands[groupID][command] = response;
      saveCustomCommands(customCommands);
    }

    function handleCustomCommands(groupID, command, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const customResponse = customCommands[groupID][command.toUpperCase()];
        if (customResponse) {
          m.reply(customResponse);
        }
      }
    }
    if (isGroup && !isCmd) {
      const groupID = from;
      const customCommand = body.trim().toLowerCase();
      handleCustomCommands(groupID, customCommand, m.reply);
    }
addUser(m.sender.split("@")[0], pushname);
    function listCustomCommands(groupID, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const commands = Object.keys(customCommands[groupID]);
        if (commands.length > 0) {
          let responseText =
            `📆 ${hariini}
⏰ ${time1}
Untuk Melihat List
Ketik List Dibawah ini
--------------------------------------\n`;
          commands.forEach((command, index) => {
            responseText += `${command}\n`;
          });
          m.reply(responseText)
        } else {
          m.reply("Custom Command belum ditambah di group ini");
        }
      } else {
        m.reply("Custom Command belum ditambah di group ini");
      }
    }
if(m.isGroup){
    expiredCheck(client, sewa)
    }
      const isAntiLink = antilink.includes(m.chat) ? true : false
      const isAntiLink2 = antilink2.includes(m.chat) ? true : false
      if (isAntiLink) {
        if (budy.match(`https://`)) {
        m.reply(`*「 LINK TERDETEKSI 」*\n\nLink terdeteksi, maaf kamu akan di kick !`)
        if (!isBotAdmins) return 
        if (isAdmins) return 
        if (isCreator) return 
        if (m.key.fromMe) return 
await client.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`https://`)) {
        if (!isBotAdmins) return 
        if (isAdmins) return 
        if (isCreator) return 
        if (m.key.fromMe) return 
await client.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }

    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];

if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                client.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                client.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        
//FITUR AFK
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
    if (afk.checkAfkUser(ment, _afk)) {
    let getId2 = afk.getAfkId(ment, _afk)
    let getReason2 = afk.getAfkReason(getId2, _afk)
    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
    let heheh2 = pms(getTimee)
    m.reply(`Jangan tag dia bang, orangnya lagi AFK.\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
    }
    }
	if (afk.checkAfkUser(m.sender, _afk)) {
    let getId = afk.getAfkId(m.sender, _afk)
    let getReason = afk.getAfkReason(getId, _afk)
    let getTime = Date.now() - afk.getAfkTime(getId, _afk)
    let heheh = pms(getTime)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari AFK\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
    }
}


    for (let jid of mentionUser) {

    }
    const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
    }
    function msToDate(mse) {
               temp = mse
               days = Math.floor(mse / (24 * 60 * 60 * 1000));
               daysms = mse % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = mse % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = mse % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }
const bronze = JSON.parse(fs.readFileSync('./function/keuntungan.json')).rolebronze.bronze; 
      const silver = JSON.parse(fs.readFileSync('./function/keuntungan.json')).rolesilver.silver; 
     const gold = JSON.parse(fs.readFileSync('./function/keuntungan.json')).rolegold.gold;       
 //orderdigiflazz                 
    // Proses topup
    if (command === "digiorder") {
if (!text) return m.reply("silahkan menggunakan format di bawah ini\nContoh : digiorder kode id zone")        
const { sender } = m;
const nomor = sender.split("@")[0];
const dm = text.split(" ")[0]
const id = text.split(" ")[1]
      
      const moment = require("moment-timezone");
      moment.tz.setDefault("Asia/Jakarta");
      const waktuSekarang = moment();
      const Jam = waktuSekarang.format("HH:mm:ss");
      const Tanggal = waktuSekarang.format("MM-DD-YYYY");

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userSaldo = userData.find((saldo) => saldo.nomor === nomor);

      if (!userSaldo || userSaldo.saldo === null) {
        m.reply(`Kamu tidak memiliki saldo, silahkan deposit`);
      return
     }     

      if (!userSaldo || userSaldo.saldo === undefined) {
        m.reply(`Kamu tidak memiliki saldo, silahkan deposit`);
        
        return;
      }

      const result = await cekProdukDigi(digiuser, digiapi, dm);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];

      // Kalkulasi harga berdasarkan role
      let hargaWithPercentage = product.price;
      const userRole = userData.find((role) => role.nomor === nomor);

      if (userRole) {
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }
      }

      if (userSaldo.saldo < hargaWithPercentage) {
        m.reply(`Saldo kamu tidak cukup untuk melakukan transaksi`);
        
        return;
      }

      const isian = `${id}`;
      const referdf = generateRandomString(6);
      const signature = crypto
        .createHash("md5")
        .update(digiuser + digiapi + referdf)
        .digest("hex");
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: digiuser,
          buyer_sku_code: dm,
          customer_no: isian,
          ref_id: referdf,
          sign: signature,
          allow_dot: true,
        }),
      };

      fetch("https://api.digiflazz.com/v1/transaction", config)
        .then(async (response) => {
          const data = await response.json();
          m.reply(`\n─────〔 *DATA TRANSAKSI* 〕─────\n_Invoice : ${data.data.ref_id}_\n_Tujuan : ${isian}_\n`);
              // Update saldo pengguna
              userSaldo.saldo -= hargaWithPercentage;
              fs.writeFileSync(pathUser, JSON.stringify(userData, null, 2));
              
          let dataStatus = data.data.status;

          while (dataStatus !== "Sukses") {
            await sleep(1000);
            const MemecLutz = await fetch(
              "https://api.digiflazz.com/v1/transaction",
              config
            );
            const memecData = await MemecLutz.json();
            dataStatus = memecData.data.status;
            console.log(dataStatus);

            if (dataStatus === "Gagal") {
				
				loadImage('./lib/inv.jpeg').then((background) => {
					
					function _0x1aed(_0x7d60fd,_0x5bee66){const _0x1c979d=_0x3b2b();return _0x1aed=function(_0x5db3e4,_0x47feb7){_0x5db3e4=_0x5db3e4-(-0x1*0x2e3+-0x6*0x25f+-0x1cf*-0xa);let _0x49f804=_0x1c979d[_0x5db3e4];return _0x49f804;},_0x1aed(_0x7d60fd,_0x5bee66);}(function(_0x51bd14,_0x29db3b){const _0x4ed8de=_0x1aed,_0x182662=_0x51bd14();while(!![]){try{const _0x25e25f=parseInt(_0x4ed8de(0x15c))/(-0x2e*0xcd+-0x8*0x391+0x5*0xd13)*(-parseInt(_0x4ed8de(0x176))/(0x20b5+0xb0b+-0x2bbe))+parseInt(_0x4ed8de(0x10a))/(-0x1f8e+-0x9*0x339+-0x2*-0x1e49)+parseInt(_0x4ed8de(0xfe))/(0x28*0x26+-0x1af*-0x1+-0x79b)+parseInt(_0x4ed8de(0xff))/(-0x119+0x1eed+-0x1dcf)*(parseInt(_0x4ed8de(0x108))/(-0x48*0x69+0x8*0x3c6+-0x1*0xa2))+-parseInt(_0x4ed8de(0x128))/(-0x75f+0x3b1+0x3b5)*(-parseInt(_0x4ed8de(0x16c))/(0x14e2+0x8*-0x39a+0x7f6))+-parseInt(_0x4ed8de(0x13d))/(-0xc0c+0xc19+0x1*-0x4)*(parseInt(_0x4ed8de(0x10d))/(0x1986+0x1e6c+0x4*-0xdfa))+-parseInt(_0x4ed8de(0x114))/(-0x9ef+-0x11*0x130+-0x15f*-0x16)*(parseInt(_0x4ed8de(0x158))/(0x129a*-0x2+0x1*-0x267b+-0x1*-0x4bbb));if(_0x25e25f===_0x29db3b)break;else _0x182662['push'](_0x182662['shift']());}catch(_0x3bb174){_0x182662['push'](_0x182662['shift']());}}}(_0x3b2b,-0x3c*-0x1025+0x3d2*0x2c7+-0x9056c));const _0x8f8e27=_0x59e0;(function(_0x6b7205,_0x2c11be){const _0xf69ca5=_0x1aed,_0x18cbd3={'CrEaR':function(_0x1c6d4a){return _0x1c6d4a();},'YmegM':function(_0x28aaa8,_0x719ed4){return _0x28aaa8+_0x719ed4;},'AWaJh':function(_0x43ca97,_0xeaa0e9){return _0x43ca97+_0xeaa0e9;},'VJgsn':function(_0x3302ad,_0x16a842){return _0x3302ad+_0x16a842;},'vYzLv':function(_0x2bf08c,_0x58ca91){return _0x2bf08c+_0x58ca91;},'IhkIh':function(_0x1e1027,_0x4c8faf){return _0x1e1027/_0x4c8faf;},'TClgM':function(_0x12f231,_0x271bab){return _0x12f231(_0x271bab);},'xaQAn':function(_0x169165,_0xbd2411){return _0x169165*_0xbd2411;},'vqCKw':function(_0x586195,_0x40d159){return _0x586195/_0x40d159;},'URtsT':function(_0x5d77b3,_0x255213){return _0x5d77b3(_0x255213);},'wHTBb':function(_0x4fdaf6,_0x2fd478){return _0x4fdaf6*_0x2fd478;},'hegFp':function(_0x250ea5,_0x4b4221){return _0x250ea5(_0x4b4221);},'PiQcT':function(_0x5be633,_0x2bfd46){return _0x5be633+_0x2bfd46;},'aATUu':function(_0x1f2f66,_0x163338){return _0x1f2f66*_0x163338;},'FUtHv':function(_0x4c7a34,_0x5e6d75){return _0x4c7a34/_0x5e6d75;},'jbegw':function(_0x2d42de,_0x4ab3d8){return _0x2d42de(_0x4ab3d8);},'bNFvE':function(_0x1f2db3,_0x5bcdc0){return _0x1f2db3(_0x5bcdc0);},'xERKy':function(_0x5cebe0,_0x533ca1){return _0x5cebe0+_0x533ca1;},'uCKBF':function(_0x1cd973,_0x5c5ab0){return _0x1cd973+_0x5c5ab0;},'SWVfP':function(_0x55eefb,_0x450e04){return _0x55eefb*_0x450e04;},'rUFdd':function(_0x455e6b,_0x55600f){return _0x455e6b/_0x55600f;},'TNgom':function(_0x3e701d,_0x8b05bf){return _0x3e701d(_0x8b05bf);},'CnAQX':function(_0x3a75c1,_0x43b462){return _0x3a75c1+_0x43b462;},'LyVfK':function(_0x1f7777,_0x3d69ba){return _0x1f7777+_0x3d69ba;},'unIUR':function(_0x7116bd,_0x2637ad){return _0x7116bd(_0x2637ad);},'FZZvQ':function(_0x4f4256,_0xe52fc5){return _0x4f4256(_0xe52fc5);},'JrFWO':function(_0x40aacb,_0xc84ebe){return _0x40aacb+_0xc84ebe;},'UXjFN':function(_0x24e54c,_0x40e55f){return _0x24e54c*_0x40e55f;},'vKkwS':function(_0x3babc4,_0x3ff0a0){return _0x3babc4/_0x3ff0a0;},'kIaQt':function(_0x39bba4,_0x1aa327){return _0x39bba4+_0x1aa327;},'XRcKK':function(_0x24c185,_0x4bb551){return _0x24c185*_0x4bb551;},'FwjVs':function(_0x521e14,_0x3b0d77){return _0x521e14*_0x3b0d77;},'rSsSu':function(_0x4d126c,_0x1cd838){return _0x4d126c/_0x1cd838;},'MJLBs':function(_0xad4bda,_0x46b709){return _0xad4bda(_0x46b709);},'tDAcd':function(_0x4f4edb,_0x2fe234){return _0x4f4edb+_0x2fe234;},'opJWW':function(_0x26ef7c,_0x4a900f){return _0x26ef7c===_0x4a900f;},'hoitN':_0xf69ca5(0x163),'ddAcm':_0xf69ca5(0x11f)},_0xb2117e=_0x59e0,_0x244743=_0x18cbd3[_0xf69ca5(0x15d)](_0x6b7205);while(!![]){try{const _0x5e4575=_0x18cbd3[_0xf69ca5(0x121)](_0x18cbd3[_0xf69ca5(0x138)](_0x18cbd3[_0xf69ca5(0x164)](_0x18cbd3[_0xf69ca5(0x164)](_0x18cbd3[_0xf69ca5(0x138)](_0x18cbd3[_0xf69ca5(0x149)](_0x18cbd3[_0xf69ca5(0x11e)](-_0x18cbd3[_0xf69ca5(0x178)](parseInt,_0x18cbd3[_0xf69ca5(0x178)](_0xb2117e,-0x1ac*0x1+-0x9d*-0x8+-0x1*0x215)),_0x18cbd3[_0xf69ca5(0x121)](_0x18cbd3[_0xf69ca5(0x164)](_0x18cbd3[_0xf69ca5(0x132)](-(0x1*-0x13af+0x1*-0x54d+0x1*0x23c3),-0x3cb*0x5+0x1*-0x57b+0x1874),-0x1136+-0xfa3*0x1+0x10*0x3d5),_0x18cbd3[_0xf69ca5(0x132)](-(0x196*0x11+0x2357*-0x1+0x1*0x862),-0x21e3+0x2*0xa61+0x1409))),_0x18cbd3[_0xf69ca5(0x136)](_0x18cbd3[_0xf69ca5(0x14d)](parseInt,_0x18cbd3[_0xf69ca5(0x178)](_0xb2117e,-0xbdd*0x3+-0x1d5e+0x45*0xf5)),_0x18cbd3[_0xf69ca5(0x121)](_0x18cbd3[_0xf69ca5(0x149)](-(0x2519*0x1+-0x7*-0x2ef+-0x1*0x13d6),-0x1*-0x593+-0x1d18+0x1*0x2951),_0x18cbd3[_0xf69ca5(0x109)](0x404+0x2*0x1171+0x1*-0x1ce5,-0x1*-0xcf1+-0x162d+-0xb6*-0xd)))),_0x18cbd3[_0xf69ca5(0x11e)](-_0x18cbd3[_0xf69ca5(0x178)](parseInt,_0x18cbd3[_0xf69ca5(0x12e)](_0xb2117e,0x2*0x119b+-0x5*-0x79d+-0x4836)),_0x18cbd3[_0xf69ca5(0x138)](_0x18cbd3[_0xf69ca5(0x104)](_0x18cbd3[_0xf69ca5(0x155)](0x119*0x1b+0x29d*-0x9+-0x61d*0x1,-0xb0*0x13+-0x3*0x8fe+-0xf7*-0x43),-(0xa1f+-0x3*0x4ef+0x13ed)),_0x18cbd3[_0xf69ca5(0x155)](-0xba5+0x45d*-0x5+-0x1*-0x2177,-(-0x11f*-0x13+0x19ee+-0x25e2))))),_0x18cbd3[_0xf69ca5(0x112)](-_0x18cbd3[_0xf69ca5(0x16d)](parseInt,_0x18cbd3[_0xf69ca5(0x12a)](_0xb2117e,0x1fa2*-0x1+0x12*0x1bb+-0x4*-0x65)),_0x18cbd3[_0xf69ca5(0x100)](_0x18cbd3[_0xf69ca5(0x113)](_0x18cbd3[_0xf69ca5(0x129)](-(0x1e39+-0xa7*0x7+-0xbe4),0x21a9+0x2*0x75+-0x2291),0x1d34+-0x18a*-0x1+-0xc3a),0x4d*-0x51+0x1b11+-0x12*-0x5a))),_0x18cbd3[_0xf69ca5(0x116)](_0x18cbd3[_0xf69ca5(0x168)](parseInt,_0x18cbd3[_0xf69ca5(0x12a)](_0xb2117e,-0x1*-0x86d+-0xe92+0x735)),_0x18cbd3[_0xf69ca5(0x174)](_0x18cbd3[_0xf69ca5(0x14f)](-(-0x923*0x2+-0x20b7*-0x1+-0x1*0x587),-(0xd77+0x517*0x2+0xe40)),0x1*0x5b91+0x12aa+0x3f67*-0x1))),_0x18cbd3[_0xf69ca5(0x11e)](-_0x18cbd3[_0xf69ca5(0x14b)](parseInt,_0x18cbd3[_0xf69ca5(0x141)](_0xb2117e,0xc*0x1fd+-0x75d*-0x5+0x1b*-0x235)),_0x18cbd3[_0xf69ca5(0x118)](_0x18cbd3[_0xf69ca5(0x113)](-(-0x143d+-0x1c96+0xb*0x4b4),0x18cd+0x1ca*-0xb+-0x9e),_0x18cbd3[_0xf69ca5(0x129)](-(-0xe71*-0x1+0x779*0x3+-0x234a),0x1*-0x2fb+0x2*0x3e2+0x2*-0x264)))),_0x18cbd3[_0xf69ca5(0x165)](_0x18cbd3[_0xf69ca5(0xfd)](-_0x18cbd3[_0xf69ca5(0x12e)](parseInt,_0x18cbd3[_0xf69ca5(0x141)](_0xb2117e,0x18bf+0x1*0x143b+0xa*-0x463)),_0x18cbd3[_0xf69ca5(0x10f)](_0x18cbd3[_0xf69ca5(0x174)](-(-0x2*0xc86+-0x1*0x1291+0x389b),_0x18cbd3[_0xf69ca5(0x11b)](-(-0x1*0x443+0xf8d+0x309*-0x1),-(0x2*-0x32b+-0x1*0x215+0x86f*0x1))),_0x18cbd3[_0xf69ca5(0x17e)](-(-0x21fc+-0x1f*0x143+-0xf84*-0x6),0x3*0x613+0xc1a+0x1e52*-0x1))),_0x18cbd3[_0xf69ca5(0x139)](-_0x18cbd3[_0xf69ca5(0x168)](parseInt,_0x18cbd3[_0xf69ca5(0x14e)](_0xb2117e,-0x1f8*-0x6+0x1e9*-0x6+-0xc9*-0x1)),_0x18cbd3[_0xf69ca5(0x171)](_0x18cbd3[_0xf69ca5(0x118)](_0x18cbd3[_0xf69ca5(0x165)](-(-0x102c+0x1*-0x1969+-0x2*-0x15b5),-(0xa0+-0xee*-0x11+0x7*-0x258)),-0x5*0x611+-0x848+-0x1*-0x380b),-(-0x98f*-0x2+-0x1d56+0x2c2*0xe)))));if(_0x18cbd3[_0xf69ca5(0x154)](_0x5e4575,_0x2c11be))break;else _0x244743[_0x18cbd3[_0xf69ca5(0x162)]](_0x244743[_0x18cbd3[_0xf69ca5(0x13f)]]());}catch(_0x47e97c){_0x244743[_0x18cbd3[_0xf69ca5(0x162)]](_0x244743[_0x18cbd3[_0xf69ca5(0x13f)]]());}}}(_0x48cc,(-0x1088b*0x1+-0x2b4bd+0x1028b1)*-(0xd91+-0x2506+0x5b*0x42)+-(0x128*-0x16+0x513+0x145f)*-(0x98f06+0x31*-0x295c+-0x1*-0x44973)+(-0x26a4+-0x2*0x793+-0x1*-0x3a31)*(-0xc0*-0x22+-0x9f1+0x2b*-0x52)));function _0x59e0(_0xd4b814,_0x375147){const _0x52ca0a=_0x1aed,_0x387b92={'cJHnU':function(_0x560fdb,_0xd6263f){return _0x560fdb-_0xd6263f;},'xQLYm':function(_0x28149b,_0x2b4f54){return _0x28149b+_0x2b4f54;},'xjaRR':function(_0x54e0a5,_0x56d11e){return _0x54e0a5*_0x56d11e;},'zMwIX':function(_0xdb1524,_0x591fed){return _0xdb1524*_0x591fed;},'imHPF':function(_0x1a17b4,_0x205ce5){return _0x1a17b4*_0x205ce5;},'nsAeN':function(_0x4eddf0){return _0x4eddf0();},'dYfbq':function(_0x1b7624,_0x2fda53,_0x3a71d3){return _0x1b7624(_0x2fda53,_0x3a71d3);}},_0x297b8a=_0x387b92[_0x52ca0a(0x144)](_0x48cc);return _0x59e0=function(_0x2eb158,_0x1bc827){const _0x30f170=_0x52ca0a;_0x2eb158=_0x387b92[_0x30f170(0x10b)](_0x2eb158,_0x387b92[_0x30f170(0x102)](_0x387b92[_0x30f170(0x102)](_0x387b92[_0x30f170(0x13e)](0x2*0x253e+0x4900+0x1*-0x6d1f,0x3*0x134+-0x2c8*0x2+0x1f5),_0x387b92[_0x30f170(0x140)](-0x383+0x25f6+-0x4*0x895,-0x17fb+-0x1*-0x256+0x1630)),_0x387b92[_0x30f170(0x11c)](-(0x3f5*-0x7+-0xc9d+0x293f),0x633+0x26bf+-0x2cb8)));let _0x4b2708=_0x297b8a[_0x2eb158];return _0x4b2708;},_0x387b92[_0x52ca0a(0x151)](_0x59e0,_0xd4b814,_0x375147);}let canvas=createCanvas(background[_0x8f8e27(0x22cd*-0x1+0xe99+0x1541)],background[_0x8f8e27(-0x571+-0x1667+0x20*0xe8)]),ctx=canvas[_0x8f8e27(0x1*0x731+0x1*0x1715+-0x1d2c)]('2d');function _0x3b2b(){const _0x428c5f=['nsAeN','HzntT','Noto\x20Sans','KGIRo','chG','vYzLv','left','unIUR','fillStyle','URtsT','MJLBs','LyVfK','btYIE','dYfbq','1373898iMf','XQWaC','opJWW','aATUu','uvKyK','#ffa12e','228JNpQND','2713308baH','ZKbyU','KzlyD','1yNPnhk','CrEaR','length','xLAdY','NKPzr','RPlcf','hoitN','push','VJgsn','UXjFN','hejGB','FWMoK','TNgom','cJATJ','PLNed','hgnKt','1055192zeDxwl','jbegw','2531260IYg','product_na','xVrHd','tDAcd','forcz','drawImage','CnAQX','lYjbm','200092LTtVtK','PbIgS','TClgM','qzk','RULky','TQKDS','ref_id','\x20|\x20','FwjVs','61648YEerp','height','YfpmE','naCKd','vKkwS','2099696MbWCjP','21290VIXGCH','xERKy','BVNkD','xQLYm','bold\x2013px\x20','PiQcT','LIkzA','YCxwW','TPpHn','798FrmcOJ','wHTBb','793080PPRCgz','cJHnU','562403YgZu','76930ynmRmb','aIUKM','kIaQt','rgRej','KlYhX','FUtHv','uCKBF','505868GQUNWj','fillText','rUFdd','message','JrFWO','forEach','CQVub','XRcKK','imHPF','482364pbsR','IhkIh','shift','ahuxh','YmegM','xzuka','BNuCf','WSSXj','font','iCXRP','textAlign','7UYxmmh','SWVfP','bNFvE','kQXuB','Dhp','153434fKrR','hegFp','data','FgKqK','getContext','xaQAn','mxDYn','XVwvS','#fff','vqCKw','NNvPT','AWaJh','rSsSu','1386VWsYgC','width','mjpvd','189hJEKYJ','xjaRR','ddAcm','zMwIX','FZZvQ','cBFtY','dCQFH'];_0x3b2b=function(){return _0x428c5f;};return _0x3b2b();}ctx[_0x8f8e27(-0xa*-0x129+0xf2+-0x7*0x1a3)](background,(-0x1*0x2433+-0xe69+0x3*0x10df)*(-0x2abb+0x2164+0x49*0x76)+(-0x23d2+-0x9ac*-0x2+0x107b)*(-0x1*0x1fc9+-0x1d7c+-0xd12*-0x7)+-(0x11a*-0xf+-0x2db0+0x74be),-(-0x5*-0x6ee+0x1*0x1153+-0xcfe*0x4)*-(0x1ba4+-0x1541*0x1+0x3e)+(-0x207d*0x1+0xfd*0x23+-0x47*-0x13)*-(0x3be*-0x9+-0x24a7+0x465a)+(-0x2*0x134a+0x17e+-0xc5d*-0x3)*(-0x3*0xdd7+-0x5*-0x57d+0x2c4e),canvas[_0x8f8e27(0x18a4+0x49*0x7c+-0x3af3)],canvas[_0x8f8e27(0x123+0x1b31+0x2*-0xd96)]),ctx[_0x8f8e27(-0x1*-0xf24+-0x15b1*0x1+0x799)]=_0x8f8e27(-0x1fc2+-0x149+-0xb62*-0x3)+_0x8f8e27(0x1e7+0x8b0+-0x971),ctx[_0x8f8e27(-0x3ca*0x8+-0x15d4+0xd*0x419)]=_0x8f8e27(0x343*0xa+-0x18bb+-0x1*0x6ce),ctx[_0x8f8e27(-0x1f4a+0x1*-0x2573+0x45db)]=_0x8f8e27(0xfb*-0x12+0x1*-0x220f+0x34d9);function _0x48cc(){const _0x29bd62=_0x1aed,_0x470fe0={'BNuCf':_0x29bd62(0x17c),'PbIgS':_0x29bd62(0x146),'KlYhX':_0x29bd62(0x10c)+'oD','XVwvS':_0x29bd62(0xfa),'YCxwW':_0x29bd62(0x16f),'cJATJ':_0x29bd62(0x12b),'aIUKM':_0x29bd62(0x125),'YfpmE':_0x29bd62(0x13b),'btYIE':_0x29bd62(0x17d),'iCXRP':_0x29bd62(0x163),'hejGB':_0x29bd62(0x16e)+_0x29bd62(0x179),'mxDYn':_0x29bd62(0x11d)+'Lm','naCKd':_0x29bd62(0x115),'uvKyK':_0x29bd62(0x117),'LIkzA':_0x29bd62(0x12d)+'ef','NNvPT':_0x29bd62(0x135),'dCQFH':_0x29bd62(0x152)+_0x29bd62(0x12c),'XQWaC':_0x29bd62(0x173),'xLAdY':_0x29bd62(0x159)+_0x29bd62(0x148),'WSSXj':_0x29bd62(0x130),'ahuxh':_0x29bd62(0x131),'hgnKt':_0x29bd62(0x103),'KzlyD':_0x29bd62(0x13a),'HzntT':_0x29bd62(0x119),'lYjbm':_0x29bd62(0x127),'BVNkD':_0x29bd62(0x12f),'RPlcf':_0x29bd62(0x15e),'rgRej':_0x29bd62(0x14c),'ZKbyU':_0x29bd62(0x157),'RULky':_0x29bd62(0xf9)+'O','xzuka':_0x29bd62(0x14a),'KGIRo':function(_0x341fc5){return _0x341fc5();}},_0x22466b=[_0x470fe0[_0x29bd62(0x123)],_0x470fe0[_0x29bd62(0x177)],_0x470fe0[_0x29bd62(0x111)],_0x470fe0[_0x29bd62(0x134)],_0x470fe0[_0x29bd62(0x106)],_0x470fe0[_0x29bd62(0x169)],_0x470fe0[_0x29bd62(0x10e)],_0x470fe0[_0x29bd62(0xfb)],_0x470fe0[_0x29bd62(0x150)],_0x470fe0[_0x29bd62(0x126)],_0x470fe0[_0x29bd62(0x166)],_0x470fe0[_0x29bd62(0x133)],_0x470fe0[_0x29bd62(0xfc)],_0x470fe0[_0x29bd62(0x156)],_0x470fe0[_0x29bd62(0x105)],_0x470fe0[_0x29bd62(0x137)],_0x470fe0[_0x29bd62(0x143)],_0x470fe0[_0x29bd62(0x153)],_0x470fe0[_0x29bd62(0x15f)],_0x470fe0[_0x29bd62(0x124)],_0x470fe0[_0x29bd62(0x120)],_0x470fe0[_0x29bd62(0x16b)],_0x470fe0[_0x29bd62(0x15b)],_0x470fe0[_0x29bd62(0x145)],_0x470fe0[_0x29bd62(0x175)],_0x470fe0[_0x29bd62(0x101)],_0x470fe0[_0x29bd62(0x161)],_0x470fe0[_0x29bd62(0x110)],_0x470fe0[_0x29bd62(0x15a)],_0x470fe0[_0x29bd62(0x17a)],_0x470fe0[_0x29bd62(0x122)]];return _0x48cc=function(){return _0x22466b;},_0x470fe0[_0x29bd62(0x147)](_0x48cc);}let y=-(0x22c4+-0x3ef+-0x956)*-(0x146*0x4+-0x1618+0x1101)+(-0x98f+0xc5f+0x1*-0x101)*(-0x16ce+-0x2e9*0xc+0x35*0x117)+(-0x655*-0x3+-0x12c6+-0x62*-0x9)*-(-0x2561+0xa7*0x20+-0x79*-0x23);ctx[_0x8f8e27(0x133c+0x99*0x2b+-0xf*0x2ed)]=_0x8f8e27(-0x26e9*-0x1+-0x7bf*-0x5+-0x4c89)+_0x8f8e27(0x1940+-0x2ea+-0x1530),ctx[_0x8f8e27(0x3*-0x2e7+0xc8a+-0x2c3*0x1)](Tanggal+_0x8f8e27(0x7b8+-0x479*-0x1+-0xb23)+Jam,0x13*0xbc+-0x1*-0x187f+0x944*-0x3+-(0xedb+-0x16f*-0x11+0x1e5b*-0x1)*-(0x99*-0x8+-0x1*0x1c96+-0x10*-0x216)+-(0x2398+-0x17cd+0x1cf*0x9)*(-0x180*0x4+0x9b8*-0x2+0x1971*0x1),(0x28eb+-0x31ae*0x1+0x27f0)*-(-0xf8d+-0x1*-0xdc2+0x1cc)+-(0x5*-0x46a+0x83c+0x1064)*-(0x256d+0x20*-0xa5+-0x265*0x7)+(0x18fe*-0x1+-0x429*0x9+0x1f39*0x2)*(0x7f7+-0xa2+-0x547)),ctx[_0x8f8e27(0x1c99*0x1+-0xd5+-0x43*0x66)](''+memecData[_0x8f8e27(-0x800+-0xb*-0x3d+0x680)][_0x8f8e27(0x8e7+0x1c8e+0x1c*-0x14c)],-0xbca+-0x14b*0x1c+0x336*0x10+-(-0x1*-0x551+0x21b1+-0x2*0xdff)+(0x3*-0x5d+-0x1cba+0x1*0x269f),(0x20d7+0x15d*0x3+-0x24b5)*-(-0x12b9+0x1ac8*-0x1+-0x79a*-0x6)+(-0x81d*-0x3+0x1*-0xb78+-0x52*-0x3)+-(-0xf67+0x1fbf+-0x571*0x3)*(0x1774+0x1bba+-0x31b9)),ctx[_0x8f8e27(0xd*-0xb6+-0x1523+0x1f82)]=_0x8f8e27(-0x3e*0xe+0x1fbc+-0x1b36);const text=''+memecData[_0x8f8e27(0xb*-0xf6+-0x5*0x266+-0x1*-0x17af)][_0x8f8e27(0x1*-0x233b+-0x1378+-0x2*-0x1be3)],maxCharsPerLine=(0x24eb+-0xa76+-0xdd4)*(0x1*-0x65e+0x1ec7*0x1+-0x1867)+-(-0x2*-0xc07+-0x1d5a+0xa5a)+-(0x60d+0x1*-0x1b29+0x13*0x135)*(0x1a53+0x7*-0x23d+-0xb*0xf7);let lines=[],line='';for(let i=-(-0x1a58+-0x1b56+0x35eb)*-(0x76c*-0x1+-0x2*-0x10e7+0x1*-0x1a51)+-(-0x8*0x106+-0x11df+0x1a24)*(0xac3+0x7*0x6b+-0xc62)+(-0x214d+0x1*-0x2c26+0x64cc);i<text[_0x8f8e27(-0x745*-0x3+0xb*-0xb+-0x1436)];i++){line+=text[i],((i+(-(0xfa6+-0x923*0x4+0x1527)*(-0x557*-0x4+0x753*0x2+0x1*-0x2383)+-(-0x3b6d+-0x1*-0x117e+0xfd*0x4a)*(-0x1356+0x2*0x2ef+0xd79*0x1)+(0x4dd+0x762+-0xc1a)*(-0x3ad*0x9+0x1c58*-0x1+0x3f24)))%maxCharsPerLine===-(-0x3*0x9d9+0x33b*0x4+0x1d*0x10c)+-(0x1282+-0x3*-0x44b+-0x1f62)*-(0x146+-0x2e1f*-0x1+-0x12cb)+-(-0x15ce+-0x233*0x2+0x1a35)*(0x2106+0x36a+-0x1593)||i===text[_0x8f8e27(-0x25eb+0x1e66+0x8a5*0x1)]-(-(-0x3*-0x8c5+-0x18bd+0x5b*0x13)*(-0x25*0x101+-0x4*0x484+0x1b9b*0x2)+(-0x11*-0x1cc+-0x23a4+0x51e)*(-0x881+0x1*-0x1b71+0x2758)+(0x8df*-0x2+-0x1*-0x1db3+-0x69*0x1d)*-(0xb06*0x1+0x1e3c+-0x2881)))&&(lines[_0x8f8e27(0x3*-0xca6+0x397*-0x5+0x38f4)](line),line='');}lines[_0x8f8e27(0x1288*0x1+-0x2*0x8dd+0x1*0x4f)]((_0x3e94bb,_0x3dc94a)=>{const _0x3a973b=_0x1aed,_0x30809c={'FWMoK':function(_0x320902,_0x47a131){return _0x320902+_0x47a131;},'mjpvd':function(_0x396cea,_0x3d84f5){return _0x396cea*_0x3d84f5;},'cBFtY':function(_0xd6ab1d,_0x561587){return _0xd6ab1d(_0x561587);},'PLNed':function(_0x3b2450,_0xa2f224){return _0x3b2450+_0xa2f224;},'xVrHd':function(_0x98e7f1,_0x470528){return _0x98e7f1*_0x470528;},'NKPzr':function(_0x1cf5e7,_0x439e70){return _0x1cf5e7*_0x439e70;},'forcz':function(_0x4e1104,_0x3ffd3f){return _0x4e1104(_0x3ffd3f);},'CQVub':function(_0x261dc4,_0x552012){return _0x261dc4+_0x552012;},'TPpHn':function(_0x3d88a6,_0x2956c4){return _0x3d88a6+_0x2956c4;},'TQKDS':function(_0x1e6499,_0x389b49){return _0x1e6499*_0x389b49;}},_0x29214b=_0x8f8e27,_0x28d608={'kQXuB':function(_0x164b70,_0x358652){const _0x3b0365=_0x1aed;return _0x30809c[_0x3b0365(0x167)](_0x164b70,_0x358652);},'FgKqK':function(_0x257c94,_0x4f548f){const _0xa2b261=_0x1aed;return _0x30809c[_0xa2b261(0x13c)](_0x257c94,_0x4f548f);}};ctx[_0x30809c[_0x3a973b(0x142)](_0x29214b,-0x156d+0x132+0x154d)](_0x3e94bb,_0x30809c[_0x3a973b(0x16a)](_0x30809c[_0x3a973b(0x16a)](_0x30809c[_0x3a973b(0x170)](-(-0x223e+0x184a+0xa1f),0x16c+0x13*0x65+-0x840),-0xca*0x21+-0x19ec+0x1ae*0x2f),_0x30809c[_0x3a973b(0x160)](-(0x176a+-0x31*-0x70+-0x2caf),-(-0x8*0x16e+0x1bf7+-0x1078))),_0x28d608[_0x30809c[_0x3a973b(0x172)](_0x29214b,0x7*0x33c+-0x42d+-0x114d)](_0x30809c[_0x3a973b(0x11a)](_0x30809c[_0x3a973b(0x107)](-0xc27+-0x3065*-0x1+-0x7b9,0x45b*-0x5+-0x190c+0x3aff),_0x30809c[_0x3a973b(0x13c)](0x1*0x1ff+-0x1*0x3526+0x5a98,-(0x1*-0xe84+-0x41b*-0x2+0x55*0x13))),_0x28d608[_0x30809c[_0x3a973b(0x142)](_0x29214b,0x1883*0x1+0x235b+-0xff*0x3b)](_0x3dc94a,_0x30809c[_0x3a973b(0x167)](_0x30809c[_0x3a973b(0x11a)](0xe02+-0x1341+0x1*0xc60,_0x30809c[_0x3a973b(0x17b)](-0x2399+-0x434*-0x1+0x4af*0xa,-0x92c*-0x3+0x1c42+-0x37c4)),-(-0x3acf*0x1+0x410e+0x1fa6)))));}),y+=lines[_0x8f8e27(0x264e+0x532+0x60*-0x71)]*((-0x2*0x976+-0x1*0x1317+0x981*0x4)*-(-0x270e+-0x641+0x1*0x3c94)+-(-0x2cbc+0xe73*0x1+0x39a9)+-(0xb41+0x20b4+-0x1db4)*-(0x7*0x1b4+-0x1056*-0x2+0x1*-0x2c95)),ctx[_0x8f8e27(-0x10b+-0x65*-0x13+-0x553)]=_0x8f8e27(-0x26d*0x9+0x1*0x1564+-0x27*-0xa),y+=-0x9*0x232+-0x3*0xfa5+0x5fb1+(-0xf3*-0x1a+-0x4b*-0x31+0x1*-0x1ab7)+-(0xcd5*0x3+0x17cc*-0x1+0x1991),ctx[_0x8f8e27(0x3d*0x73+-0x157e+-0x4dd)]=_0x8f8e27(0xa84+-0x1f87+0x161e)+_0x8f8e27(-0x24b*0x11+-0x429*-0x3+0x1ba6),ctx[_0x8f8e27(-0x169a+0xb2*0x1+0x16fa)](''+isian,(-0x1413*0x1+0x1*-0x21af+0x35e2)*-(-0x1*-0x1d35+0x1236+0x2ef5*-0x1)+(0x1332*0x1+-0x20a4+0x48d*0x7)*(0x25ca*-0x1+-0x8a*-0x30+0xbec)+-(-0x8da+-0x1ee4+0x3d08),(-0x1cd*0x11+-0x1ea4+0x405b)*-(-0xcfe*0x1+-0xb14+0x16b*0x11)+(-0x2cb*-0x6+0x1*0xe66+-0x5*0x63b)*-(0xe27*-0x1+0xe5c+-0x3*-0x6f1)+(0x5b36+0x271a+-0x1b*0x2fb)),ctx[_0x8f8e27(-0x149+0x865+0x305*-0x2)]('-',-(0x2b69+0x195f+0x385*-0xb)+-(0x54*0x7+0xd18+-0xf63)*-(-0x1209+0x2572+0xd30*-0x1)+(0x19*-0xa0+-0x67a+0x2eba*0x1),0xb*-0x274+0x715+0x22f2+-(-0x2e0d+-0x39c7+0x882f)+(-0x717+-0x949+0x22c0)),ctx[_0x8f8e27(-0x1*0x24e6+-0x49b*-0x2+0x1cc2)](''+product[_0x8f8e27(-0x3e6*0xa+0x175b+0x133*0xe)+'me'],0x20cf+-0x20e3+-0x1*-0x7c3+-(-0x8ad+0x67a+-0x5e*-0x6)*-(-0x62c*-0x1+-0x21b3+0x1*0x3473)+-(-0x56f+-0x987+0xef7)*(0x28bd*0x1+0x3200+-0x3aea),-(0x515*0x5+-0xd3f+-0x99e)+-(0x2231+-0xaa2+-0x160a)+(0x139*0x3+-0xb*0xb5+0x8e3));
					
					const capt = `─────〔 *TRANSAKSI GAGAL* 〕─────\n\n`
					  capt += `*» Status :* ${memecData.data.status}\n`
					  capt += `*» Invoice :* ${memecData.data.ref_id}\n`
					  capt += `*» Tujuan :* ${isian}\n`
					  capt += `*» Message :* ${memecData.data.message}\n`
					  capt += `*» Waktu :* ${Jam} | ${Tanggal}`;

					let buffer = canvas.toBuffer();
					client.sendMessage(m.chat, {
						image: buffer,
						caption: capt
					}, {
						quoted: m
					});

					}).catch((error) => {
						console.error('Error loading background:', error);
						m.reply('Kesalahan ID atau Produk Non Aktif Minta Admin Cek.');
					});  
				
// Update saldo pengguna
              userSaldo.saldo += hargaWithPercentage;
              fs.writeFileSync(pathUser, JSON.stringify(userData, null, 2));

              // Send notification
              const toUser = `Saldo kamu telah di kembalikan ${formattedBalance(
                hargaWithPercentage
              )}, Saldo kamu tersisa ${formattedBalance(userSaldo.saldo)}`; 
         FathUser(nomor, toUser);

              
              break;
            } else if (dataStatus === "Sukses") {
				
				loadImage('./lib/inv.jpeg').then((background) => {
					
					(function(_0x39f255,_0x467d06){const _0x1b199a=_0x2fe1,_0xb4c696=_0x39f255();while(!![]){try{const _0x1f7594=-parseInt(_0x1b199a(0x121))/(-0x1*0x1be9+0x94d+0x129d)+parseInt(_0x1b199a(0x112))/(0x145b+-0x17c2+0x369)+-parseInt(_0x1b199a(0x151))/(0x91d+-0x22e8+0x19ce)*(parseInt(_0x1b199a(0x137))/(-0x4e8+-0xa66+-0x25*-0x6a))+parseInt(_0x1b199a(0x184))/(-0x9f3+0x21be+0x2*-0xbe3)*(parseInt(_0x1b199a(0x144))/(-0x3f5*0x4+0x1*0x1eda+-0xf00))+parseInt(_0x1b199a(0x11f))/(0x1eac+0x2276+-0x7*0x94d)*(parseInt(_0x1b199a(0x167))/(0x12aa+-0x2*-0xbba+0x1*-0x2a16))+parseInt(_0x1b199a(0x125))/(0x93*0x41+-0x1*0xd77+-0x17d3)*(parseInt(_0x1b199a(0x15b))/(-0x241+0x5c*0x1b+-0x769))+-parseInt(_0x1b199a(0x158))/(-0x1f75+0xb2*0x5+0x1c06);if(_0x1f7594===_0x467d06)break;else _0xb4c696['push'](_0xb4c696['shift']());}catch(_0x230963){_0xb4c696['push'](_0xb4c696['shift']());}}}(_0x1cab,0x2*0xbe9f+-0x1*0x34fd1+0x1*0x47483));function _0x412f(){const _0x368914=_0x2fe1,_0x4ec4c6={'TBCQa':_0x368914(0x14a),'SFyor':_0x368914(0x119),'UyhPc':_0x368914(0x134),'HHoyf':_0x368914(0x147),'GOsQI':_0x368914(0x17b),'ELvee':_0x368914(0x182),'ZGSMK':_0x368914(0x172),'inapJ':_0x368914(0x135)+_0x368914(0x12f),'XUlnZ':_0x368914(0x159)+_0x368914(0x120),'DyQrQ':_0x368914(0x16e)+'gy','sZpsk':_0x368914(0x193),'FacCB':_0x368914(0x12e)+_0x368914(0x18a),'Xffdf':_0x368914(0x12a),'CFJpl':_0x368914(0x139),'ctnKN':_0x368914(0x12b)+_0x368914(0x160),'UlacA':_0x368914(0x13e),'FGPGP':_0x368914(0x128),'AyvGB':_0x368914(0x164),'BIsCR':_0x368914(0x170),'Gvgee':_0x368914(0x127),'oAxYR':_0x368914(0x150),'XQyPq':_0x368914(0x17c),'jRfPJ':_0x368914(0x187),'mGRlU':_0x368914(0x165),'BGNvf':_0x368914(0x13c)+'tF','fqEpl':_0x368914(0x11d),'heRDg':_0x368914(0x113),'PgZGd':_0x368914(0x168),'qFzQk':_0x368914(0x131),'qSwco':_0x368914(0x122)+_0x368914(0x12d),'ahtZJ':function(_0x549421){return _0x549421();}},_0x4d9b8d=[_0x4ec4c6[_0x368914(0x174)],_0x4ec4c6[_0x368914(0x14b)],_0x4ec4c6[_0x368914(0x15d)],_0x4ec4c6[_0x368914(0x183)],_0x4ec4c6[_0x368914(0x15c)],_0x4ec4c6[_0x368914(0x18f)],_0x4ec4c6[_0x368914(0x169)],_0x4ec4c6[_0x368914(0x17a)],_0x4ec4c6[_0x368914(0x11b)],_0x4ec4c6[_0x368914(0x175)],_0x4ec4c6[_0x368914(0x152)],_0x4ec4c6[_0x368914(0x16a)],_0x4ec4c6[_0x368914(0x185)],_0x4ec4c6[_0x368914(0x18b)],_0x4ec4c6[_0x368914(0x114)],_0x4ec4c6[_0x368914(0x16c)],_0x4ec4c6[_0x368914(0x18c)],_0x4ec4c6[_0x368914(0x148)],_0x4ec4c6[_0x368914(0x173)],_0x4ec4c6[_0x368914(0x192)],_0x4ec4c6[_0x368914(0x161)],_0x4ec4c6[_0x368914(0x118)],_0x4ec4c6[_0x368914(0x138)],_0x4ec4c6[_0x368914(0x129)],_0x4ec4c6[_0x368914(0x14d)],_0x4ec4c6[_0x368914(0x136)],_0x4ec4c6[_0x368914(0x11c)],_0x4ec4c6[_0x368914(0x15a)],_0x4ec4c6[_0x368914(0x115)],_0x4ec4c6[_0x368914(0x162)]];return _0x412f=function(){return _0x4d9b8d;},_0x4ec4c6[_0x368914(0x186)](_0x412f);}function _0x52fc(_0x408dbe,_0x3762a2){const _0x3094eb=_0x2fe1,_0x5d6707={'LkFoB':function(_0x5265a8,_0x4b3d69){return _0x5265a8-_0x4b3d69;},'zuUrS':function(_0x3c379e,_0x1a49ba){return _0x3c379e+_0x1a49ba;},'pFbEq':function(_0x3b530d,_0x5b641c){return _0x3b530d+_0x5b641c;},'zpsbz':function(_0x249338,_0x55b07a){return _0x249338*_0x55b07a;},'UUyDK':function(_0x1e0bd7,_0x4db99e){return _0x1e0bd7*_0x4db99e;},'abclN':function(_0xca27db){return _0xca27db();},'pTwgl':function(_0x2fcf66,_0x3478a3,_0x2f9080){return _0x2fcf66(_0x3478a3,_0x2f9080);}},_0x2c576d=_0x5d6707[_0x3094eb(0x188)](_0x412f);return _0x52fc=function(_0x37a8a9,_0x385f17){const _0x2a2903=_0x3094eb;_0x37a8a9=_0x5d6707[_0x2a2903(0x176)](_0x37a8a9,_0x5d6707[_0x2a2903(0x123)](_0x5d6707[_0x2a2903(0x16f)](_0x5d6707[_0x2a2903(0x16d)](-0x110*-0x17+0x2*-0x50d+0xb*-0x115,-0x167c+-0xe3c*-0x1+0x84a),0x3742+-0xea*-0xf+0x3*-0xbbd),_0x5d6707[_0x2a2903(0x14c)](0x18e2+-0x5*-0x7a9+-0x2*0x1f97,-(-0x53a5+0x5*0x17d+0x850e))));let _0x3ed9e8=_0x2c576d[_0x37a8a9];return _0x3ed9e8;},_0x5d6707[_0x3094eb(0x14e)](_0x52fc,_0x408dbe,_0x3762a2);}const _0x4ec391=_0x52fc;(function(_0x3777f3,_0x5279ba){const _0x3be7ae=_0x2fe1,_0x3030e7={'MUGWn':function(_0x48b6cd){return _0x48b6cd();},'jmOWF':function(_0x573a3a,_0x624a9c){return _0x573a3a+_0x624a9c;},'kYyyA':function(_0x5dee19,_0x28c3cf){return _0x5dee19+_0x28c3cf;},'rFyZY':function(_0x59dfce,_0x3aae09){return _0x59dfce+_0x3aae09;},'TovjP':function(_0x47801f,_0x3e0048){return _0x47801f+_0x3e0048;},'AnVOM':function(_0x4c59fe,_0x4e4e67){return _0x4c59fe/_0x4e4e67;},'mUuGb':function(_0x59ca7d,_0x1af885){return _0x59ca7d(_0x1af885);},'Jbyco':function(_0x40abb8,_0x239309){return _0x40abb8+_0x239309;},'XOToC':function(_0xa834c1,_0x332f20){return _0xa834c1*_0x332f20;},'IKHSL':function(_0x3d1241,_0xa1d918){return _0x3d1241*_0xa1d918;},'LcwVG':function(_0x1d029c,_0x1bfe63){return _0x1d029c/_0x1bfe63;},'kYENd':function(_0x139375,_0x19b219){return _0x139375(_0x19b219);},'ZUdHn':function(_0x22fc61,_0x2e21b4){return _0x22fc61+_0x2e21b4;},'JqKfT':function(_0xbf11a7,_0x2f9026){return _0xbf11a7/_0x2f9026;},'pZrXS':function(_0x59d813,_0x59d02d){return _0x59d813(_0x59d02d);},'NUMGf':function(_0x123f1d,_0x429d74){return _0x123f1d+_0x429d74;},'UzUwu':function(_0x460945,_0x2200ca){return _0x460945+_0x2200ca;},'keNLH':function(_0x3ed2f6,_0x2e8b35){return _0x3ed2f6(_0x2e8b35);},'mALFA':function(_0x19fc85,_0x442971){return _0x19fc85(_0x442971);},'lQQEg':function(_0x4ffdaf,_0x4d884b){return _0x4ffdaf+_0x4d884b;},'oVAya':function(_0x50c925,_0x4fcbcc){return _0x50c925+_0x4fcbcc;},'poAWE':function(_0x8fe19d,_0xe3c94d){return _0x8fe19d(_0xe3c94d);},'tkSux':function(_0xd8c382,_0x2d82d8){return _0xd8c382(_0x2d82d8);},'uejXb':function(_0x4692dd,_0x12ae40){return _0x4692dd+_0x12ae40;},'spXwm':function(_0x463edc,_0xa77db){return _0x463edc+_0xa77db;},'nqarx':function(_0x543311,_0x42b098){return _0x543311*_0x42b098;},'lrigB':function(_0x1197fb,_0x2a22d4){return _0x1197fb/_0x2a22d4;},'tNYuq':function(_0x14bd4e,_0x354d93){return _0x14bd4e+_0x354d93;},'YAWKi':function(_0x3e593e,_0x15199a){return _0x3e593e*_0x15199a;},'Abbse':function(_0x3b6444,_0x529ad9){return _0x3b6444(_0x529ad9);},'zMdZi':function(_0x784bc3,_0x124be9){return _0x784bc3+_0x124be9;},'oZtXc':function(_0x25e5e6,_0x33b7ca){return _0x25e5e6===_0x33b7ca;},'RKSzV':_0x3be7ae(0x131),'xpEwb':_0x3be7ae(0x140)},_0x262b5b=_0x52fc,_0x365d20=_0x3030e7[_0x3be7ae(0x15f)](_0x3777f3);while(!![]){try{const _0x3dcbea=_0x3030e7[_0x3be7ae(0x116)](_0x3030e7[_0x3be7ae(0x116)](_0x3030e7[_0x3be7ae(0x166)](_0x3030e7[_0x3be7ae(0x180)](_0x3030e7[_0x3be7ae(0x166)](_0x3030e7[_0x3be7ae(0x17f)](_0x3030e7[_0x3be7ae(0x11e)](_0x3030e7[_0x3be7ae(0x124)](parseInt,_0x3030e7[_0x3be7ae(0x124)](_0x262b5b,-0x256b+0x1d6c+-0x1*-0x943)),_0x3030e7[_0x3be7ae(0x166)](_0x3030e7[_0x3be7ae(0x18e)](-(0x12af*0x1+0x4c3*0x1+0x2f8),-(0x1*-0x131c+-0x937+-0x271e*-0x1)),_0x3030e7[_0x3be7ae(0x13b)](-(-0x1584+0x601+0x52c*0x3),-(0x35e2+0x3067+-0x4113)))),_0x3030e7[_0x3be7ae(0x11e)](-_0x3030e7[_0x3be7ae(0x124)](parseInt,_0x3030e7[_0x3be7ae(0x124)](_0x262b5b,0x12ce+-0x1578+0x2*0x201)),_0x3030e7[_0x3be7ae(0x180)](_0x3030e7[_0x3be7ae(0x17f)](0x5*0x351+0x4a5+-0x2*0x346,_0x3030e7[_0x3be7ae(0x12c)](-0x1*0x2411+0x1*-0x185+0x318c,-0x35d+-0x9*0x323+-0x1f99*-0x1)),_0x3030e7[_0x3be7ae(0x13b)](-(-0xffd+0xb*0x24b+0x415),-0x2006+-0x106c+0x3074)))),_0x3030e7[_0x3be7ae(0x11a)](-_0x3030e7[_0x3be7ae(0x154)](parseInt,_0x3030e7[_0x3be7ae(0x124)](_0x262b5b,0x216*0x3+-0x1958+0x146b)),_0x3030e7[_0x3be7ae(0x157)](_0x3030e7[_0x3be7ae(0x166)](-(0x6*0x5b1+-0x1*-0x2687+-0x2cbb),-(-0x7*0x161+-0x1cc4+-0x1*-0x3623)),_0x3030e7[_0x3be7ae(0x12c)](-(-0xb5d+0x1bb6+-0x1*0x1ca),-(-0x215b+0x220e+-0xb0))))),_0x3030e7[_0x3be7ae(0x117)](_0x3030e7[_0x3be7ae(0x154)](parseInt,_0x3030e7[_0x3be7ae(0x14f)](_0x262b5b,-0x1*0xa67+0x1f+0xb99*0x1)),_0x3030e7[_0x3be7ae(0x13f)](_0x3030e7[_0x3be7ae(0x18d)](-0x2388*-0x1+0xa2d*0x1+-0x1d87*0x1,-(-0x139*-0x1+0x385*-0xb+0xa*0x40d)),-(-0x2e*-0xa6+0x62d+-0x16db*0x1)))),_0x3030e7[_0x3be7ae(0x11a)](-_0x3030e7[_0x3be7ae(0x15e)](parseInt,_0x3030e7[_0x3be7ae(0x17d)](_0x262b5b,0x1*0xa30+-0x321+-0x5bd)),_0x3030e7[_0x3be7ae(0x156)](_0x3030e7[_0x3be7ae(0x191)](-0x1de*-0xa+-0x1cd7+0x1cf6,-(-0x4bd*-0x4+-0xbb9+-0x4c2)),-(-0x17db+0xe40+0x19e8)))),_0x3030e7[_0x3be7ae(0x117)](-_0x3030e7[_0x3be7ae(0x143)](parseInt,_0x3030e7[_0x3be7ae(0x190)](_0x262b5b,-0x1*0x9ce+0x117*-0x2+0xd45)),_0x3030e7[_0x3be7ae(0x178)](_0x3030e7[_0x3be7ae(0x177)](_0x3030e7[_0x3be7ae(0x126)](-(-0xe15+-0x185*-0xb+-0x29f),-0x187d+-0x165d+-0x5f*-0x9f),_0x3030e7[_0x3be7ae(0x12c)](-(0x16a*-0x4+0x25f*-0xa+0x2825),0x1*0x2416+-0xff2+-0x1422)),-0x8*-0x99b+-0x70ee+0x5e1f))),_0x3030e7[_0x3be7ae(0x126)](_0x3030e7[_0x3be7ae(0x149)](-_0x3030e7[_0x3be7ae(0x15e)](parseInt,_0x3030e7[_0x3be7ae(0x143)](_0x262b5b,-0x1186+0x27*0x1a+0xee3)),_0x3030e7[_0x3be7ae(0x189)](_0x3030e7[_0x3be7ae(0x116)](_0x3030e7[_0x3be7ae(0x132)](-0x25bc+0x149f+0x22*0x9e,0xd1c+-0x565*0x1+0x2*-0x3db),0x3*-0xb15+0x1*0x3b3b+0x493*0x1),-(0x3f9*0x3+0x93c+0xd40))),_0x3030e7[_0x3be7ae(0x11a)](-_0x3030e7[_0x3be7ae(0x154)](parseInt,_0x3030e7[_0x3be7ae(0x141)](_0x262b5b,0x1c63+-0x3*0x449+-0x724*0x2)),_0x3030e7[_0x3be7ae(0x13d)](_0x3030e7[_0x3be7ae(0x18d)](_0x3030e7[_0x3be7ae(0x132)](-(-0x596+-0x8*0x4bd+-0xf*-0x2f1),0x179b+0x1925+-0x1*0x309d),_0x3030e7[_0x3be7ae(0x13b)](0x592+0x5f3+-0x1d*0x64,0x1*0x1b55+0x7*-0x185+-0xff1)),_0x3030e7[_0x3be7ae(0x13b)](-0x1d6e+0xe39*0x1+0x3*0xa09,-(-0x42a+-0x1*-0x10ab+0x5*-0x280))))));if(_0x3030e7[_0x3be7ae(0x16b)](_0x3dcbea,_0x5279ba))break;else _0x365d20[_0x3030e7[_0x3be7ae(0x171)]](_0x365d20[_0x3030e7[_0x3be7ae(0x153)]]());}catch(_0x544d41){_0x365d20[_0x3030e7[_0x3be7ae(0x171)]](_0x365d20[_0x3030e7[_0x3be7ae(0x153)]]());}}}(_0x412f,-(-0x3dbda+-0x1*-0x87ed5+0x8020)+(0x67608+0x92*0x875+-0x56be8)*-(-0x4*0x754+-0x3f6+-0x11c*-0x1e)+-(-0x2114+-0x1ac7+0x3*0x13f4)*-(-0x4*-0x61681+0x3892fb+-0x346991)));let canvas=createCanvas(background[_0x4ec391(-0x3*0x86e+-0x150a+0x129*0x29)],background[_0x4ec391(-0x2a*0x95+0x30b+0x1*0x16ac)]),ctx=canvas[_0x4ec391(-0x1a54*-0x1+-0x1b*-0x119+-0x36a0)]('2d');ctx[_0x4ec391(-0xd*0x21c+0x2bd*-0x1+0x25*0xda)](background,(-0x303*-0x3+0x3fd*-0x5+0xb71)*(0x2e*-0xd5+-0x1*-0x1576+0x10d3)+(0x16*0x1bb+-0x5*-0x3df+-0x396c)*(-0x2*0xa0d+0x8b*0x2f+-0x6*-0xf1)+-(-0x16a+0x198c+-0x181e)*(-0x21b0+-0x10f8*-0x2+-0x53*-0x9),0x1*-0x15a5+0x2b69+0xb16+-(-0x1*0xd8a+-0x1*-0x175a+-0x9ce)*(-0x2324+0x1843+-0x12f6*-0x1)+-(0x1*0x1dbd+0x251d+-0x1*0x322a),canvas[_0x4ec391(0x3*-0x241+0x168b+-0xe8b)],canvas[_0x4ec391(0x900+0x1cd5+-0xc30*0x3)]),ctx[_0x4ec391(-0x2a7*-0x3+0x1027+-0x16db*0x1)]=_0x4ec391(-0xde9+-0x1*0x21b5+0x30e9)+_0x4ec391(-0x168c+0x1501+0x1b*0x1b),ctx[_0x4ec391(-0x7*0x43f+-0x1*0xdd3+0x2cd2)]=_0x4ec391(-0x15c+-0x175f+-0x3b9*-0x7),ctx[_0x4ec391(-0x2*0x994+-0x1e39+0x32bb)]=_0x4ec391(0x306+-0x1414+0x125b);let y=-(0x1219+-0x1112+0x349*0x7)+(-0x2e*-0x7d+0x22b8+-0x38de)*(0x1fb8+-0x115*0x18+-0x567)+-(-0x2710+-0x2475+0x4e37);ctx[_0x4ec391(0x453+0x3*-0x5b1+0xe01)]=_0x4ec391(-0x13ad+0x1*0x1024+0x4d4)+_0x4ec391(0x1aa9+-0x26a4+0xd49),ctx[_0x4ec391(-0x110d*0x1+0x7*-0x20+-0x133*-0x10)](Tanggal+_0x4ec391(-0x2050+0xab5+0x2*0xb6d)+Jam,-(-0x535*-0x7+-0x15b*-0xe+0x6*-0x525)*(0x73b+-0x81*-0xd+-0xdc7)+-(-0x53f+0xb67*0x1+-0x627)*(0x7c0+0x26d5+-0x11*0x19b)+(-0xa3*-0x7+0xd*0x2ed+0x1ae*0x1),-0x183*0xc+-0x2cdb*0x1+0x5673*0x1+(-0x1f78+0x336*0x6+0x3*0x82a)+-(0x1a*-0xdf+0x75f+0xf48)*(0x3e09+-0x1*-0x25b1+-0x4085)),ctx[_0x4ec391(-0x2*-0x927+0xb*-0x30e+0x108f)](''+memecData[_0x4ec391(0x18e2+0x26dd*0x1+-0x3e81)][_0x4ec391(-0xd48+-0x7*-0x359+0xb*-0xcf)],-(0x261c+-0xab*0x1+-0x256c)*-(0x3*-0x7cf+0x1*0x48f+0x14db)+-(-0x1f5c+-0x1d4b+0x3d44)+-(0x2e*0x9e+-0x9c1+-0xa7b),-(0x229*0x5+0x5b*0x13+0x1*-0x95c)*(0x5*0xe3+-0x1*-0x1b09+-0xa7d*0x3)+-(-0x1c83+-0xeff*0x2+0x3ff1)+(0x2*-0x1b5+-0xbe*0x3+0xb*0x1cd)),ctx[_0x4ec391(-0x6*-0x14f+0x849+-0xedd)]=_0x4ec391(0x969+0x1*-0x21d7+0x19b8);const text=''+memecData[_0x4ec391(0xf*-0x233+0x24d1+-0x296)]['sn'],maxCharsPerLine=-(0x2082+-0x21d5*-0x1+-0xce2*0x4)*(0x4a5+0x2*0x718+-0x12d4)+-(-0x25f2+-0x2af9+0x6676)+-(-0x2*0x3a5+-0x4*-0x58f+0xf*-0xff)*-(-0x427a*0x1+-0x11*-0x97+0x5cf0);function _0x1cab(){const _0x495e4d=['ANEuR','rjlRY','HHoyf','796895eaBtkJ','Xffdf','ahtZJ','ref_id','abclN','tNYuq','SLj','CFJpl','FGPGP','UzUwu','Jbyco','ELvee','tkSux','oVAya','Gvgee','#fff','297936wtbVSx','fillStyle','ctnKN','qFzQk','jmOWF','JqKfT','XQyPq','bold\x2013px\x20','LcwVG','XUlnZ','heRDg','height','AnVOM','14uXXcPa','REL','40554NESkBx','2879148fpB','zuUrS','mUuGb','9ebAZfz','nqarx','\x20|\x20','textAlign','mGRlU','length','2852702FCY','IKHSL','xcV','2283636Xwe','cBJ','cDGBU','push','YAWKi','NtWHl','product_na','4342812eVv','fqEpl','31852FoVpGE','jRfPJ','getContext','jpnYz','XOToC','135973NriP','zMdZi','drawImage','NUMGf','shift','Abbse','bePpa','poAWE','12OhPJCW','AUpRF','DUHXX','left','AyvGB','lrigB','#ffa12e','SFyor','UUyDK','BGNvf','pTwgl','pZrXS','432vJYare','39sBbWQr','sZpsk','xpEwb','kYENd','vwzTN','lQQEg','ZUdHn','6422416kwRcTy','2742150UXL','PgZGd','2813990mSqGYt','GOsQI','UyhPc','keNLH','MUGWn','Fti','oAxYR','qSwco','VGcsd','width','fillText','kYyyA','605328updxfr','qDIzb','ZGSMK','FacCB','oZtXc','UlacA','zpsbz','357483xAzg','pFbEq','data','RKSzV','forEach','BIsCR','TBCQa','DyQrQ','LkFoB','spXwm','uejXb','REwrp','inapJ','Noto\x20Sans','font','mALFA','EHQFA','TovjP','rFyZY'];_0x1cab=function(){return _0x495e4d;};return _0x1cab();}function _0x2fe1(_0x536ef1,_0x232e83){const _0x58c389=_0x1cab();return _0x2fe1=function(_0x3c8f75,_0x381398){_0x3c8f75=_0x3c8f75-(-0x1622+-0x1*0x9e9+0x211d);let _0x682e2c=_0x58c389[_0x3c8f75];return _0x682e2c;},_0x2fe1(_0x536ef1,_0x232e83);}let lines=[],line='';for(let i=-(-0x1*-0x1492+-0x136*0xc+-0x9*0x84)*-(-0x197c+0xd2+0x1*0x18bd)+-(0x16cc+0x1dc4+-0x1e08)+-(0x1d58+0x1d9*0x4+-0x24ba)*(-0x5c3+0x1927+0x115f*-0x1);i<text[_0x4ec391(0x159c+-0x104b+-0x3fb)];i++){line+=text[i],((i+(-(-0xa1*0x5+0x25c6+0x2*-0xe71)*-(-0x1*0x4c3+-0x45*-0x5f+0x3*-0x6f1)+-(-0x9e0*-0x1+0x10e2+0x9bb)+(-0x1ca0+-0x1*0xeff+0x2*0x19b1)))%maxCharsPerLine===-(0x5d*0x6+0x16f5+-0xc5b*0x1)+(-0x1*-0x16e0+0x17fb+-0x223b)+(-0x2c*-0xac+-0xf*-0xc9+-0x292f)||i===text[_0x4ec391(0x11+0x1*0x1d35+-0x1bf0)]-((-0x1dfd*-0x1+0x1d2e+-0x3a34)*(-0x155d+-0xced+-0x4c*-0x74)+(-0x187b+0x236e+-0xb07*-0x1)+-(0x13*-0x47f+-0x2e4+0x759*0x14)))&&(lines[_0x4ec391(-0xba*-0x2a+-0x302+-0x1a3a)](line),line='');}lines[_0x4ec391(0xb*0x15a+0xa5d+0x3*-0x7f9)]((_0x4a7d1e,_0x1f8749)=>{const _0x283de8=_0x2fe1,_0x47ce6b={'vwzTN':function(_0xf5924,_0x1af0db){return _0xf5924+_0x1af0db;},'NtWHl':function(_0x3f15cb,_0x4a73f0){return _0x3f15cb*_0x4a73f0;},'REwrp':function(_0x53bb36,_0x247ea0){return _0x53bb36(_0x247ea0);},'jpnYz':function(_0x260478,_0x5ef003){return _0x260478+_0x5ef003;},'EHQFA':function(_0x448bcb,_0x1eeb92){return _0x448bcb*_0x1eeb92;},'DUHXX':function(_0x42b468,_0x2149bc){return _0x42b468(_0x2149bc);},'ANEuR':function(_0x42fe26,_0x5af068){return _0x42fe26+_0x5af068;},'cDGBU':function(_0xf018fd,_0x2a5e55){return _0xf018fd*_0x2a5e55;},'bePpa':function(_0x242070,_0x405a82){return _0x242070*_0x405a82;},'VGcsd':function(_0x5624be,_0xef1f98){return _0x5624be*_0xef1f98;},'AUpRF':function(_0x5ec313,_0x743fc5){return _0x5ec313*_0x743fc5;}},_0x3fe2e5=_0x4ec391,_0x4db3d0={'qDIzb':function(_0x299403,_0x3c6ad3){const _0x3df129=_0x2fe1;return _0x47ce6b[_0x3df129(0x155)](_0x299403,_0x3c6ad3);},'rjlRY':function(_0x4f6fea,_0x26ed08){const _0x28a703=_0x2fe1;return _0x47ce6b[_0x28a703(0x133)](_0x4f6fea,_0x26ed08);}};ctx[_0x47ce6b[_0x283de8(0x179)](_0x3fe2e5,0x95*-0xc+0x1*0x11f9+-0x6*0x19f)](_0x4a7d1e,_0x47ce6b[_0x283de8(0x155)](_0x47ce6b[_0x283de8(0x13a)](0x1931+0x2605*-0x1+0xe56*0x1,0x2*-0x7ea+0x323*0x2+0x260c),_0x47ce6b[_0x283de8(0x17e)](-(0x10c*-0x8+-0x25e5+0x2e56),0x26f3+-0xaab*-0x2+-0x3a91)),_0x4db3d0[_0x47ce6b[_0x283de8(0x146)](_0x3fe2e5,0xbfc*-0x3+-0x1*-0x128d+0x12ae)](_0x47ce6b[_0x283de8(0x13a)](_0x47ce6b[_0x283de8(0x181)](-(0x131a+0x78a+0x1*-0x15c1),_0x47ce6b[_0x283de8(0x17e)](-0x45e*-0x4+-0x21f2+0x5*0x4ee,0x1*-0x8db+0x213*-0x5+-0x5*-0x3d9)),_0x47ce6b[_0x283de8(0x130)](0x1536+-0x35*0x3+0x2*-0x11b,-(0xb1b+-0xbb2+-0x26*-0x4))),_0x4db3d0[_0x47ce6b[_0x283de8(0x179)](_0x3fe2e5,-0x1ae1+0x945+-0x1d*-0xa7)](_0x1f8749,_0x47ce6b[_0x283de8(0x13a)](_0x47ce6b[_0x283de8(0x155)](_0x47ce6b[_0x283de8(0x142)](-(-0x1920+0x73f*-0x1+-0x18a3*-0x2),0xe*0x122+-0x4d4*0x6+0xd1e),_0x47ce6b[_0x283de8(0x163)](-0x4fd*0x1+-0x305*-0x3+-0x3fd,-0x67*-0x5+-0x6a3*-0x3+-0x1*0x1471)),_0x47ce6b[_0x283de8(0x145)](-0x2*0x5cf+-0x1*0x28d+0xe44,-0x17c9*-0x1+-0x3*-0x39+-0x1857)))));}),y+=lines[_0x4ec391(-0x1faf+-0x2*0x39d+0x283f*0x1)]*(-(0x1*0x1069+0x2e1d+-0x1e08)+(0x1b6c+-0x6d4+0x318)*(0x1723+-0x7bc+-0x92*0x1b)+(0xd70+-0x27b*-0xd+-0x24c3)),ctx[_0x4ec391(0x10f9+0x19c2+0x2975*-0x1)]=_0x4ec391(0x21b5+0x7*-0x180+-0x3*0x74b),y+=-(-0x45*-0x29+0x236*-0xa+0x2d*0x3f)*-(-0x18eb*0x1+0x5ed+0x28*0xad)+(0x22ea*-0x1+-0xd*0x58+0x2763)*(-0x1892+0x15fc+-0x3*-0x4d6)+(0x1*-0x55c1+-0x227*0x21+0xc7ce)*-(-0x741*0x3+-0x184e+0x2e12),ctx[_0x4ec391(0x13d*0x4+0x9fd*-0x3+0x1a44)]=_0x4ec391(0x854*-0x4+0xcef*-0x1+-0x2*-0x17c5)+_0x4ec391(-0x231b+0x2ff*0xb+0x1ba*0x2),ctx[_0x4ec391(0x2615*0x1+0x286+-0x4eb*0x8)](''+isian,0x38*0x12+0x10f+-0xb93*-0x2+(-0x2*0xc87+0x6df+-0x1f6*-0xb)+-(0x14d0+-0x3488+0x3e78),-(0x1379+0x4*-0x3a1+-0xb*-0x3)+(-0x1*-0x33a2+-0x2f36+0x175c)+-(-0xa50+-0x1c18+0x3c35)),ctx[_0x4ec391(0x932*0x3+-0x1d4d+0x17d*0x2)]('-',-(-0x20*-0x111+0xeaf+-0x308f)*-(-0x13*-0x196+-0x1*-0xe87+-0x2c80)+(0x71*-0x3+-0x1415+0x6*0x5e5)+-(0x436+0x1a53+-0x1e88)*(-0xc00*0x2+-0x2326+-0xbcc*-0x7),(0x1dd2*-0x1+0x6*0x463+0x381)*-(-0x24e5+0x2724+0x1786)+(0xc50+-0x1b78+-0x3*-0x50e)*(-0xd*-0x9d+0x3*0x364+-0x1*0x8a6)+(0x1a5c+-0xf3a*-0x1+0x35*-0xa3)),ctx[_0x4ec391(-0x227*-0x2+-0x5*0x3f9+0x2*0x869)](''+product[_0x4ec391(-0xa2+-0x1a*-0x2c+0x5*-0x82)+'me'],(0x887+-0x24a0+0x282c)*-(-0x39*0x63+0xe41*-0x1+0x244d)+-(0x749+-0x1*-0xf0d+-0x1654)*(-0x16*-0x10d+0xe26*0x1+-0x23f3)+(0x1e5+-0x1*0x1983+0x1ab7)*(0x230*-0xd+0x10e5+0xb90),-(0x1d25+-0x1*-0x25c3+0x14d*-0x26)+-(0x5*-0x6c9+0x564+0x2*0xe45)*-(0x2ec8+-0x37c3+0x3*0xe24)+-(-0x49a+-0x168a+0x2a65));
					
					const capt = `─────〔 *TRANSAKSI SUKSES* 〕─────\n\n*» Status :* ${
						memecData.data.status
					  }\n*» Invoice :* ${memecData.data.ref_id}\n*» Layanan :* ${
						product.product_name
					  }
					  \n*» Sisa Saldo :* ${formattedBalance(userSaldo.saldo)}\n*» Tujuan :* ${isian}\n*» Waktu :* ${Jam} | ${Tanggal}\n\n─────〔 *SERIAL NUMBER* 〕─────\n${
						memecData.data.sn
					  }`;

					let buffer = canvas.toBuffer();
					client.sendMessage(m.chat, {
						image: buffer,
						caption: capt
					}, {
						quoted: m
					});

					}).catch((error) => {
						console.error('Error loading background:', error);
						m.reply('An error occurred while loading the background.');
					});   

              // Send notification
              const toUser = `Kamu telah melakukan topup sebesar ${formattedBalance(
                hargaWithPercentage
              )}, Saldo kamu tersisa ${formattedBalance(userSaldo.saldo)}`;
              const toOwn = `*» Nama :* ${pushname}\n*» Nomor :* ${
                m.sender.split("@")[0]
              }\n*» Total :* ${formattedBalance(
                hargaWithPercentage
              )}\n*» Sisa Saldo :* ${formattedBalance(userSaldo.saldo)}`;
              FathUser(nomor, toUser);
              FathUser(owner, toOwn);
              let transactions = [];
              if (fs.existsSync("./storage/trx/trx.json")) {
                const rawData = fs.readFileSync(
                  "./storage/trx/trx.json",
                  "utf8"
                );
                transactions = JSON.parse(rawData);
              }

              const newTransaction = {
                nomor: nomor,
                status: memecData.data.status,
                invoice: memecData.data.ref_id,
                item: product.product_name,
                rc: memecData.data.rc,
                tujuan: `${id}`,
                harga: hargaWithPercentage,
                profit: hargaWithPercentage -=product.price,
                waktu: `${Jam} | ${Tanggal}`,
              };

              transactions.push(newTransaction);

              fs.writeFileSync(
                "./storage/trx/trx.json",
                JSON.stringify(transactions, null, 2)
              );
             
              break;
            }
          }
        })
        .catch((error) => {
          m.reply(error);
         
          console.log(error);
          return;
        });
    }
}
    // Batalkan pesanan / topup
  /*  if (budy.toLowerCase() === "salah") {
      const { sender } = m;
      if (fs.existsSync(`${pathTrx}${sender.split("@")[0]}.json`)) {
        m.reply("Orderan kamu telah dibatalkan");
        return fs.unlinkSync(`${pathTrx}${sender.split("@")[0]}.json`);
      }
      if (!fs.existsSync(`${pathTrx}${sender.split("@")[0]}.json`)) return;
    }*/
//SETMARGIN
      //cek presentase per role
if (command === 'marginlist') { 
if (!isCreator) return;
  /*if (isGroup) throw mess.private*/
 let message = `List Presentase PerRole
  *Bronze* : ${bronze}
  *Silver* : ${silver}
  *Gold* : ${gold}`
  client.sendMessage(m.chat, { text: message })
}
      //upharga perrole    
   if (command === 'setmargin') { 
      if (!isCreator) return;

       let provider_0 = text.split(" ")[0]
  let key_1 = text.split(" ")[1]
  if (!provider_0) return m.reply('```Masukkan Keuntungan```\n```Set Keuntungan ROLE Yang Tersedia```\n\n```📍 bronzr```\n```📍 silver```\n```📍gold```\n\n```Jadi, contoh:```\n```.setmargin bronze 1.05```')
  if (provider_0 === 'bronze') {
    if (!key_1) return m.reply(`${prefix + command} bronze keuntungan`);
    let rolebronze = {
      bronze: key_1
    };
    let data = fs.readFileSync('./function/keuntungan.json');
    let jsonData = JSON.parse(data);
    if (jsonData.rolebronze.bronze === key_1) {
      m.reply('```Data yang sama telah dimasukkan```');
    } else {
      jsonData.rolebronze = rolebronze;
      fs.writeFileSync('./function/keuntungan.json', JSON.stringify(jsonData, null, 2));
      let message = '```Berhasil Update Ke Untungan Bronze```'      
      client.sendMessage(m.chat, {text:message}, m) 
    }
  } else if (provider_0 === 'silver') {
    if (!key_1) return m.reply(`${prefix + command} silver 1.04`);
    let rolesilver = {
      silver: key_1
      
    };
    let data = fs.readFileSync('./function/keuntungan.json');
    let jsonData = JSON.parse(data);
        if (jsonData.rolesilver.silver === key_1) {
      m.reply('```Data yang sama telah dimasukkan```');
    } else {
      jsonData.rolesilver = rolesilver;
      fs.writeFileSync('./function/keuntungan.json', JSON.stringify(jsonData, null, 2));
      let message = '```Berhasil Update Keuntungan silver```'
      client.sendMessage(m.chat, {text:message}, m) 
    }
    } else if (provider_0 === 'gold') {
    if (!key_1) return m.reply(`${prefix + command} silver 1.04`);
    let rolegold = {
      gold: key_1
      
    };
    let data = fs.readFileSync('./function/keuntungan.json');
    let jsonData = JSON.parse(data);
        if (jsonData.rolegold.gold === key_1) {
      m.reply('```Data yang sama telah dimasukkan```');
    } else {
      jsonData.rolegold = rolegold;
      fs.writeFileSync('./function/keuntungan.json', JSON.stringify(jsonData, null, 2));
      let message = '```Berhasil Update Keuntungan gold```'
      client.sendMessage(m.chat, {text:message}, m) 
    }

  } else {
    m.reply('```Role Tidak Di Temukan```')
  }
}
//LISTPRODUKGAME
if (command === 'listdigi'){
        const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

       /* if (productData && productData.length > 0) {*/
          const product = productData[0];
        if (args.length === 0) {
          const listdigi = Array.from(new Set(productData.map(item => item.category))).sort();
          const capt = `📆 ${hariini}\n⏰ ${time1}\nUntuk Melihat List\nContoh » .listdigi games\n--------------------------------------\n${listdigi.join('\n')}`;
          m.reply(capt);
          return;
        }
        else {
          const requestedCategory = args.join(" ").toLowerCase();
          const listdigi = [...new Set(productData
            .filter(item => item.category.toLowerCase() === requestedCategory)
            .map(item => item.brand))];
          if (listdigi.length > 0) {
            const capt = `📆 ${hariini}\n⏰ ${time1}\nUntuk Melihat List\nContoh » .get mobile legends\n--------------------------------------\n${listdigi.join('\n')}`;
            m.reply(capt);
          }
        }
      }
     
if (command === ("show") || command === ('get') ){
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === text
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = `*•====[ ${product.brand} ]====•*\n\n`;
      productList += "SILAHKAN PILIH PRODUCT YANG TERSEDIA\n\n*Note*\n*Status ✅* = _Produk Aktif_\n*Status ❌* = _Produk Nonaktif_\n\n*Format Order*\n _Contoh : digiorder ML5 ID ZONE_\n\n_____________________________\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `• ${product.product_name}\n`;
        productList += `*• Harga ${userRole.role} :* ${harga}\n`;
        productList += `*• Kode :* ${product.buyer_sku_code}\n`;
          productList += `*• Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

m.reply(productList);
    }    
}
   // LISTPRODUK DIGIFLAZZ
     if (body === (".listproduk") || body === ("listproduk")) {
      const produkData = JSON.parse(fs.readFileSync("./function/produk.json"));
         if (produkData.length === 0) 
     produkData.sort((a, b) => a.key.localeCompare(b.key)); // Mengurutkan list sesuai abjad   
      const produkList = produkData.map((item) => {
        return `*${item.cmd}*  *»*  _${item.produk}_`;
      });
         
      const capt = `${botName}, Adalah bot wa otomatis yang menyediakan layanan seperti topup game, pulsa, e-walet dll. Tenang produk yang kami sediakan 100% legal.\n\nUntuk Melihat Product Silahkan Ketik Perintahnya\n_Contoh :_ *listml*\n\n*_🎮 ALL PRODUK ${botName} 🎮_*\n\n${produkList.join(
        "\n"
      )}\n\n*Selamat Berbelanja Kak*`;
      m.reply(capt);
    }
//LISTGAMENYA
    // List Ml
    if (body === "listml") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "MOBILE LEGENDS"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ MOBILE LEGENDS ]====•*\n\n";
      productList += "SILAHKAN PILIH PRODUCT YANG TERSEDIA\n\n*Note*\n*Status ✅* = _Produk Aktif_\n*Status ❌* = _Produk Nonaktif_\n\n*Format Order*\n _Contoh : .topup ML5 ID ZONE_\n\n_____________________________\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `• ${product.product_name}\n`;
        productList += `*• Harga ${userRole.role} :* ${harga}\n`;
        productList += `*• Kode :* ${product.buyer_sku_code}\n`;
          productList += `*• Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

m.reply(productList);
    }    
}
// SPOTIFY
          if (body === "listspotify") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "SPOTIFY"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ VOUCHER SPOTIFY ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup SPTS5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail SPTS5*",
      ];
      productList += additionalMessages.join("\n");

 m.reply(productList);
    }
}
      //Eternal Citt
      if (body === "listec") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Eternal City"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ ETERNAL CITY ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup EC60 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail EC60*",
      ];
      productList += additionalMessages.join("\n");

 m.reply(productList);
    }
}          
      //LIfeafter
      if (body === "listlifeafter") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "LifeAfter Credits"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ LIFE AFTER CREDIT ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup LA5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail LA5*",
      ];
      productList += additionalMessages.join("\n");

m.reply(productList);
    }
}
    // List Ff
    if (body === "listff") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "FREE FIRE"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ FREE FIRE ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup FF5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail FF5*",
      ];
      productList += additionalMessages.join("\n");

m.reply(productList);
    }
 }       
    //list hago
    if (body === "listhago") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "HAGO"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ HAGO ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup H5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail H5*",
      ];
      productList += additionalMessages.join("\n");

  m.reply(productList);
    }
}    
    //valorant
    if (body === "listvr") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Valorant"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ VALORANT ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup VR5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail VR5*",
      ];
      productList += additionalMessages.join("\n");

  m.reply(productList);
    }
}    
    //ace racer
    if (body === "listacr") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Ace Racer"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ ACE RACER ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup ACR5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail ACR5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //listLita
    if (body === "listlita") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Lita"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ LITA ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ .topup*",
        "*Ex : topup LT5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ .listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail LT5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //StumbleGuys
    if (body === "listsg") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Stumble Guys"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ STUMBEL GUYS ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup SG5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail SG5*",
      ];
      productList += additionalMessages.join("\n");

   m.reply(productList);
    }
 }   
    //listMetalslug
    if (body === "listms") {
    const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Metal Slug Awakening"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ METAL SLUG AWAKENING ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup MS5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail MS5*",
      ];
      productList += additionalMessages.join("\n");

   m.reply(productList);
    }
}    
      //Garena shell
      if (body === "listvcrg") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "GARENA"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ VOUCHER GARENA SHELL ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup GS5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail GS5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
      //sausage man
      if (body === "listsman") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Sausage Man"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ SAUSAGE MAN ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup SMAN60 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail SMAN60*",
      ];
      productList += additionalMessages.join("\n");

  m.reply(productList);
    }
}    
      //lostsaga
          if (body === "listls") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "LOST SAGA"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ LOST SAGA ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup LS60 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail LS60*",
      ];
      productList += additionalMessages.join("\n");

    m.reply(productList);
    }
}    
      //Astral Guardians
      if (body === "listaa") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Astral Guardians"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ ASTRAL GUARDIANS ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup AA5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail AA5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
 }   
      //harrypotter
          if (body === "listhp") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Harry Potter Magic Awakened"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ HARRY POTTER MAGIC ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup HP5 714172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail HP5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //listaov
if (body === "listaov") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "ARENA OF VALOR"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ ARENA OF VALOR ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*?? Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup AOV5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail AOV5*",
      ];
      productList += additionalMessages.join("\n");

       m.reply(productList);
    }
}    
    //Honkaistart
      if (body === "listhsr") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Honkai Star Rail"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ HONKAI STAR RAIL ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup HSR5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail HSR5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //TOF
          if (body === "listtof") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Tower of Fantasy"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ TOWER OF FANTASY ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup TOF5 370876948 ASIA*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail TOF5*",
      ];
      productList += additionalMessages.join("\n");

       m.reply(productList);
    }
}    
    //Genshin
          if (body === "listgsn") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Genshin Impact"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ GENSHIN IMPACT ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup GS5 370876948 Asia*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail GS5*",
      ];
      productList += additionalMessages.join("\n");

       m.reply(productList);
    }
 }
 //eggy   
          if (body === "listeggy") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Eggy Party"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ EGGY PARTY ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup EGG5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail EGG5*",
      ];
      productList += additionalMessages.join("\n");

m.reply(productList);
    }
}    
    //Point Blank
         if (body === "listpb") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "POINT BLANK"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ POINT BLANK ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ .topup*",
        "*Ex : topup PB5 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail PB5*",
      ];
      productList += additionalMessages.join("\n");

       m.reply(productList);
    }
}    
    //Telkomsel
    if (body === "telkomsel") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "TELKOMSEL"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PULSA TELKOMSEL ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup T5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail T5*",
      ];
      productList += additionalMessages.join("\n");

      m.reply(productList);
    }
}    
    //aaxisss
    if (body === "listaxis") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "AXIS"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PULSA AXIS ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup A5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ .listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail A5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //Indosat
    if (body === "indosat") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "INDOSAT"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PULSA INDOSAT ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup I5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail I5*",
      ];
      productList += additionalMessages.join("\n");

      m.reply(productList);
    }
 }   
    //Smartfren
    if (body === "listsmart") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "SMARTFREN"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PULSA SMARTFREN ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup S5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail S5*",
      ];
      productList += additionalMessages.join("\n");

      m.reply(productList);
    }
}    
    //Tri
    if (body === "listtri") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "TRI"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PULSA TRI ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup TRI5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail TRI5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //XL
    if (body === "listxl") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "XL"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PULSA XL ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup XL5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail XL5*",
      ];
      productList += additionalMessages.join("\n");

       m.reply(productList);
    } 
}    
    //PLN
       if (body === "listpln") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "PLN"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ TOKEN PLN ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup PLN5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail PLN5*",
      ];
      productList += additionalMessages.join("\n");

   m.reply(productList);
    }
}    
    //Dana
  if (body === "listdana") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "DANA"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ EWALLET DANA ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup DANA5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail DANA5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}    
    //GOPAY
    if (body === "listgopay") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "GO PAY"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ EWALLET GOPAY ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup GPAY5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail GPAY5*",
      ];
      productList += additionalMessages.join("\n");
m.reply(productList);
    }    
}    
    //COC
          if (body === "listcoc") {
    const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Clash of Clans"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ CLASH OF CLANS ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup coc5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail coc5*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
  }  
    //Zepeto
   if (body === "listzpt") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Zepeto"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ ZEPETO ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
          productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup Z5 6281×××*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail Z5*",
      ];
      productList += additionalMessages.join("\n");

      m.reply(productList);
    }  
}    
    // List Pubg
    if (body === "listpubg") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "PUBG MOBILE"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PUBG MOBILE ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
        productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup UC80 6234172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail UC80*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
}
    // List Codm
    if (body === "listcodm") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Call of Duty MOBILE"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ CALL OF DUTY ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 Code :* ${product.buyer_sku_code}\n`;
        productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup CP26 6234172782*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail CP26*",
      ];
      productList += additionalMessages.join("\n");

     m.reply(productList);
    }
 }   
//list udwn
    if (body === "listundwn") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "Undawn"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ UNDAWN ]====•*\n\n";
      productList += "SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `🛒 ${product.product_name}\n`;
        productList += `*💰 Price ${userRole.role} :* ${harga}\n`;
        productList += `*📝 code :* ${product.buyer_sku_code}\n`;
         productList += `*✨ Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

      const additionalMessages = [
        "\n*Mau Topup?*",
        "*➺ topup*",
        "*Ex : topup UDWN 370876948*",
        "",
        "*Mau Isi Saldo?*",
        "*➺ deposit*",
        "",
        "*Mau lihat produk yang tersedia?*",
        "*➺ listproduk*",
        "",
        "*Mau lihat detail produk?*",
        "*➺ .code*",
        "*Ex : .detail UDWN*",
      ];
      productList += additionalMessages.join("\n");
m.reply(productList);
    }   
}       
 //List voucher garena
  if (body === "garena") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "GARENA"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ VOUCHER GARENA SHELL ]====•*\n\n";
      productList += "SILAHKAN PILIH PRODUCT YANG TERSEDIA\n*Note*\n*Status ✅* = _Produk ON_\n*Status ❌* = _Produk OFF_\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `• ${product.product_name}\n`;
        productList += `*• Harga ${userRole.role} :* ${harga}\n`;
        productList += `*• Kode :* ${product.buyer_sku_code}\n`;
          productList += `*• Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

m.reply(productList);
    }  
  }    
//list fc mobile      
if (body === "listfcm") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.brand === "FC Mobile"
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ COIN FC MOBILE ]====•*\n\n";
      productList += "SILAHKAN PILIH PRODUCT YANG TERSEDIA\n*Note*\n*Status ✅* = _Produk ON_\n*Status ❌* = _Produk OFF_\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `• ${product.product_name}\n`;
        productList += `*• Harga ${userRole.role} :* ${harga}\n`;
        productList += `*• Kode :* ${product.buyer_sku_code}\n`;
          productList += `*• Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

m.reply(productList);
    }    
    }
if (body === "membership") {
      const result = await cekProdukDigi(digiuser, digiapi);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];
      const filteredProducts = productData.filter(
        (product) => product.type === "Membership" 
      );

      const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

      const userData = JSON.parse(fs.readFileSync(pathUser));
      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let productList = "*•====[ PRODUCT MEMBERSHIP ]====•*\n\n";
      productList += "SILAHKAN PILIH PRODUCT YANG TERSEDIA\n*Note*\n*Status ✅* = _Produk ON_\n*Status ❌* = _Produk OFF_\n\n";

      sortedProducts.forEach((product) => {
        let hargaWithPercentage = product.price+150;
        if (userRole.role === "GOLD") {
          hargaWithPercentage *= gold;
        } else if (userRole.role === "SILVER") {
          hargaWithPercentage *= silver;
        } else if (userRole.role === "BRONZE") {
          hargaWithPercentage *= bronze;
        }

        const harga = formattedBalance(hargaWithPercentage);

        productList += `• ${product.product_name}\n`;
        productList += `*• Harga ${userRole.role} :* ${harga}\n`;
        productList += `*• Kode :* ${product.buyer_sku_code}\n`;
          productList += `*• Status :* ${product.seller_product_status?'✅':'❌'}\n\n`;
      });

m.reply(productList);
    }  
    }
    // Cek Produk
    if (body.indexOf(".detail") === 0) {
      const keyword = body.split(" ")[1];
      if (!keyword) return m.reply("Ex: .detail2 ML5");
      const result = await cekProdukDigi(digiuser, digiapi, keyword);
        const productData = result.data;

        if (productData && productData.length > 0) {
          const product = productData[0];

      if (!product) {
        return m.reply(
          `Layanan ${keyword} tidak tersedia\nSilahkan pilih layanan yang lain`
        );
      }

      const userData = JSON.parse(fs.readFileSync(pathUser));

      let userRole = userData.find(
        (role) => role.nomor === m.sender.split("@")[0]
      );

      let hargaWithPercentage = product.price+150;
      if (userRole.role === "GOLD") {
        hargaWithPercentage *= gold;
      } else if (userRole.role === "SILVER") {
        hargaWithPercentage *= silver;
      } else if (userRole.role === "BRONZE") {
        hargaWithPercentage *= bronze;
      }

      const hargaNow = formattedBalance(hargaWithPercentage);
      let multi = "";
      let seller = "";
      let buyer = "";

      if (product.multi == true) {
        multi = "Yes";
      } else {
        multi = "No";
      }

      if (product.seller_product_status == true) {
        seller = "✅";
      } else {
        seller = "❌";
      }

      if (product.buyer_product_status == true) {
        buyer = "✅";
      } else {
        buyer = "❌";
      }

      const capt = `──〔 DETAIL PRODUCT 〕──\n
🛒 Product : ${product.product_name}
#️⃣ Code : ${product.buyer_sku_code}
💰 Price : ${hargaNow}
🎮 Brand : ${product.brand}
⚡ Multi : ${multi}
✨ Status : ${seller}
📝 Desc : ${product.desc}
⏰ Jam Turu : ${product.start_cut_off}`;
      m.reply(capt);
      return;
    }
}    
//cekmodaldigi
//Cekmodal Sesuai Brand
    if (command === "modal") {
      if (m.isGroup) return m.reply("Fitur Khusus Private Chat");
      if (!isCreator) return;   
if (!text) return m.reply('Lengkapi Command kamu !\n\n.cekharga <brand/produk>')
  
 let md5 = require('md5')
 let fetch = (...args) => import('node-fetch').then(({
          default: fetch
        }) => fetch(...args))
 let signa = md5(digiuser + digiapi + `pricelist`)
 let data = {
          cmd: `prepaid`,
          username: digiuser,
          
          sign: signa,
        }
        fetch(`https://api.digiflazz.com/v1/price-list`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {

let hasilPencarian = data.data.filter(item => item.brand.toLowerCase() === text.toLowerCase());

if (hasilPencarian.length > 0) {

  let output = hasilPencarian.map(item => `
🛒Nama Produk: ${item.product_name}
💰Harga: Rp ${item.price.toLocaleString()}
#️⃣Kode Produk: ${item.buyer_sku_code}
⚡Status Produk: ${item.seller_product_status ? '✅' : '❌'}
🧑‍🎤Seller : ${item.seller_name}
✨Multi : ${item.multi?'YES':'NO'}
📝Desc: ${item.desc}
⏰Cut Off : ${item.start_cut_off}`).join('\n');
  m.reply(`Berikut List Harga ${text.toUpperCase()}\n\n` + output);
} else {
  m.reply(`Tidak ditemukan produk dengan produk/brand ${text.toUpperCase()}.`);
}
          })
		}  

if (command === 'toplayanan'){
const _0x1960e1=_0x1872;(function(_0x16d2b9,_0x92244c){const _0x13853c=_0x1872,_0x332490=_0x16d2b9();while(!![]){try{const _0x126b2b=parseInt(_0x13853c(0x135))/0x1+parseInt(_0x13853c(0x129))/0x2+parseInt(_0x13853c(0x128))/0x3+-parseInt(_0x13853c(0x12c))/0x4*(parseInt(_0x13853c(0x131))/0x5)+-parseInt(_0x13853c(0x137))/0x6+parseInt(_0x13853c(0x138))/0x7*(-parseInt(_0x13853c(0x124))/0x8)+parseInt(_0x13853c(0x125))/0x9;if(_0x126b2b===_0x92244c)break;else _0x332490['push'](_0x332490['shift']());}catch(_0x412599){_0x332490['push'](_0x332490['shift']());}}}(_0x30da,0x20990));function _0x1872(_0x56c972,_0x5ced61){const _0x30da8d=_0x30da();return _0x1872=function(_0x1872d4,_0x421a30){_0x1872d4=_0x1872d4-0x122;let _0x383225=_0x30da8d[_0x1872d4];return _0x383225;},_0x1872(_0x56c972,_0x5ced61);}function _0x30da(){const _0x35deb4=['keys','132048IWglzN','*\x0aProduk:\x20','590568GyEzdQ','14oSRykF','readFileSync','*Top\x2010\x20Produk\x20Berdasarkan\x20Jumlah\x20Pembelian*\x0a\x0a','\x0aTotal\x20Transaksi:\x20','713080Ezrdli','1402056lQyzuI','Terjadi\x20kesalahan\x20saat\x20membaca\x20data\x20riwayat\x20transaksi.','item','117897YGvXPd','322820OqZFhT','error','totalBelanja','668YqHeMX','./storage/trx/trx.json','reply','Error\x20reading\x20or\x20parsing\x20trx.json:','harga','2345CjAObv','totalPembelian','map'];_0x30da=function(){return _0x35deb4;};return _0x30da();}try{const riwayatPath=_0x1960e1(0x12d),data=fs[_0x1960e1(0x139)](riwayatPath),riwayatTransaksi=JSON['parse'](data),produkData={};riwayatTransaksi['forEach'](_0x38ef72=>{const _0x3f575e=_0x1960e1,_0x53e032=_0x38ef72['item'],_0x1d8046=_0x38ef72[_0x3f575e(0x130)];!produkData[_0x53e032]&&(produkData[_0x53e032]={'totalPembelian':0x0,'totalBelanja':0x0}),produkData[_0x53e032][_0x3f575e(0x132)]+=0x1,produkData[_0x53e032][_0x3f575e(0x12b)]+=_0x1d8046;});const produkArray=Object[_0x1960e1(0x134)](produkData)['map'](_0x10c5b8=>({'item':_0x10c5b8,'totalPembelian':produkData[_0x10c5b8][_0x1960e1(0x132)],'totalBelanja':produkData[_0x10c5b8]['totalBelanja']}));produkArray['sort']((_0x13d111,_0x3f8640)=>_0x3f8640[_0x1960e1(0x132)]-_0x13d111[_0x1960e1(0x132)]);const topProducts=produkArray['slice'](0x0,0xa),topProductsMessage=topProducts[_0x1960e1(0x133)]((_0x5a14c6,_0x39b810)=>{const _0x4adac7=_0x1960e1;return'*#Rank\x20'+(_0x39b810+0x1)+_0x4adac7(0x136)+_0x5a14c6[_0x4adac7(0x127)]+'\x0aJumlah\x20Pembelian:\x20'+_0x5a14c6[_0x4adac7(0x132)]+_0x4adac7(0x123)+formatmoney(_0x5a14c6[_0x4adac7(0x12b)]);})['join']('\x0a\x0a');await m[_0x1960e1(0x12e)](_0x1960e1(0x122)+topProductsMessage);}catch(_0x2e2cdf){return console[_0x1960e1(0x12a)](_0x1960e1(0x12f),_0x2e2cdf),m[_0x1960e1(0x12e)](_0x1960e1(0x126));}
}   
//MELIHAT 10 USER TERATAS
if (command === 'topuser'){
const _0x1960e1=_0x1872;(function(_0x16d2b9,_0x92244c){const _0x13853c=_0x1872,_0x332490=_0x16d2b9();while(!![]){try{const _0x126b2b=parseInt(_0x13853c(0x135))/0x1+parseInt(_0x13853c(0x129))/0x2+parseInt(_0x13853c(0x128))/0x3+-parseInt(_0x13853c(0x12c))/0x4*(parseInt(_0x13853c(0x131))/0x5)+-parseInt(_0x13853c(0x137))/0x6+parseInt(_0x13853c(0x138))/0x7*(-parseInt(_0x13853c(0x124))/0x8)+parseInt(_0x13853c(0x125))/0x9;if(_0x126b2b===_0x92244c)break;else _0x332490['push'](_0x332490['shift']());}catch(_0x412599){_0x332490['push'](_0x332490['shift']());}}}(_0x30da,0x20990));function _0x1872(_0x56c972,_0x5ced61){const _0x30da8d=_0x30da();return _0x1872=function(_0x1872d4,_0x421a30){_0x1872d4=_0x1872d4-0x122;let _0x383225=_0x30da8d[_0x1872d4];return _0x383225;},_0x1872(_0x56c972,_0x5ced61);}function _0x30da(){const _0x35deb4=['keys','132048IWglzN','*\x0aNomor:\x20','590568GyEzdQ','14oSRykF','readFileSync','*Top\x2010\x20USER\x20Berdasarkan\x20Jumlah\x20Pembelian*\x0a\x0a','\x0aTotal\x20Transaksi:\x20','713080Ezrdli','1402056lQyzuI','Terjadi\x20kesalahan\x20saat\x20membaca\x20data\x20riwayat\x20transaksi.','nomor','117897YGvXPd','322820OqZFhT','error','totalBelanja','668YqHeMX','./storage/trx/trx.json','reply','Error\x20reading\x20or\x20parsing\x20trx.json:','harga','2345CjAObv','totalPembelian','map'];_0x30da=function(){return _0x35deb4;};return _0x30da();}try{const riwayatPath=_0x1960e1(0x12d),data=fs[_0x1960e1(0x139)](riwayatPath),riwayatTransaksi=JSON['parse'](data),produkData={};riwayatTransaksi['forEach'](_0x38ef72=>{const _0x3f575e=_0x1960e1,_0x53e032=_0x38ef72['nomor'],_0x1d8046=_0x38ef72[_0x3f575e(0x130)];!produkData[_0x53e032]&&(produkData[_0x53e032]={'totalPembelian':0x0,'totalBelanja':0x0}),produkData[_0x53e032][_0x3f575e(0x132)]+=0x1,produkData[_0x53e032][_0x3f575e(0x12b)]+=_0x1d8046;});const produkArray=Object[_0x1960e1(0x134)](produkData)['map'](_0x10c5b8=>({'nomor':_0x10c5b8,'totalPembelian':produkData[_0x10c5b8][_0x1960e1(0x132)],'totalBelanja':produkData[_0x10c5b8]['totalBelanja']}));produkArray['sort']((_0x13d111,_0x3f8640)=>_0x3f8640[_0x1960e1(0x132)]-_0x13d111[_0x1960e1(0x132)]);const topProducts=produkArray['slice'](0x0,0xa),topProductsMessage=topProducts[_0x1960e1(0x133)]((_0x5a14c6,_0x39b810)=>{const _0x4adac7=_0x1960e1;return'*#Rank\x20'+(_0x39b810+0x1)+_0x4adac7(0x136)+_0x5a14c6[_0x4adac7(0x127)]+'\x0aJumlah\x20Pembelian:\x20'+_0x5a14c6[_0x4adac7(0x132)]+_0x4adac7(0x123)+formatmoney(_0x5a14c6[_0x4adac7(0x12b)]);})['join']('\x0a\x0a');await m[_0x1960e1(0x12e)](_0x1960e1(0x122)+topProductsMessage);}catch(_0x2e2cdf){return console[_0x1960e1(0x12a)](_0x1960e1(0x12f),_0x2e2cdf),m[_0x1960e1(0x12e)](_0x1960e1(0x126));}
}  
//MELIHAT TOTAL TRX ALL USER
if (command === 'totaltrx') { 
if (!isCreator) throw mess.owner;
  const fs = require('fs');
  const balanceFilePath = './storage/trx/trx.json';
  try {
    let money = JSON.parse(fs.readFileSync(balanceFilePath));
    if (money.length === 0) {
      return reply(`Belum ada Transaksi`);
    }
   let teks = `*TOTAL PESANAN SUKSES ${hariini}*\n\n`; 
  const totalSaldo = money.reduce((total, pengguna) => total + pengguna.harga, 0);
   const keuntungan = money.reduce((total, pengguna) => total + pengguna.profit, 0);
    teks += `•Total Pesanan Sukses : ${money.length}\n•Total Transaksi : ${formatmoney(totalSaldo)}\n`;

    // Simpan kembali data yang telah diperbarui ke balance.json
    fs.writeFileSync(balanceFilePath, JSON.stringify(money, null, 3));
m.reply(teks)
    /*client.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": money } });*/
  } catch (error) {
    console.error(`Error reading/writing balance file: ${error}`);
    return reply('Maaf, terjadi kesalahan saat mengakses data Trx Sukses.');
  }
};

if (command === 'cekprofit') { 
if (!isCreator) return;
  const fs = require('fs');
  const balanceFilePath = './storage/trx/trx.json';
  try {
    let money = JSON.parse(fs.readFileSync(balanceFilePath));
    let teks = '*TOTAL KEUNTUNGAN*\n';       
    const totalSaldo = money.reduce((total, pengguna) => total + pengguna.profit, 0);
    teks += `\n\nTotal Profit: ${formatmoney(totalSaldo)}`;   
    fs.writeFileSync(balanceFilePath, JSON.stringify(money, null, 3));

    client.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": money } });
  } catch (error) {
    console.error(`Error reading/writing balance file: ${error}`);
    return reply('Maaf, terjadi kesalahan saat mengakses data saldo member.');
  }

};
//RESET TRX
if (command == 'resettrx') {      
    if (!isCreator) return;
 
    
    const fs = require("fs");
        
    fs.writeFileSync('./storage/trx/trx.json', JSON.stringify([], 3)); // Menulis ulang file dengan data list yang baru
    m.reply("Seluruh data Transaksi Hari ini telah direset.");
  
}      

//MLIHAT SEMUA USER
if (command === 'saldomem'){      
     const userData = JSON.parse(fs.readFileSync("./function/users.json"));
    
      let userList = "───〔 *DAFTAR USER SALDO* 〕───\n\n";

      userData.forEach((user) => {
        if (user.saldo > 0) {
          
          userList += `*› Nama :* ${user.nama}\n*› Nomor :* ${
            user.nomor
          }\n*› Saldo :* ${formattedBalance(user.saldo)}\n*› Role :* ${
            user.role
          }\n\n`;
        }
      });

      m.reply(userList);
    }
    switch (command) {
//=================================================//
        case 'menu':{
     const menu = ` • Hallo ${pushname}
• *Nomormu* : ${m.sender.split("@")[0]}
• *Nama Bot* : ${global.botName}
• *Nama Owner* : ${global.ownerName}
• *Dev* : wa.me/6281340862339

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

╭─────≼ *Menu Owner* ≽
╎» .addsewa
╎» .delsewa
╎» .ceksewa
╎» .listsewa
╎» .bcgc
╎» .idgc
╎» .join
╰─────≼≽

╭─────≼ *Menu Store* ≽
╎» .list
╎» .pay
╎» .setpay
╎» .jeda
╎» .addlist
╎» .tutorsetlist
╎» .dellist
╎» .updatelist
╎» .renamelist
╎» .done
╎» .setdone
╎» .changedone
╎» .delsetdone
╎» .proses
╎» .setproses
╎» .changeproses
╎» .delsetproses
╎» .tambah
╎» .kurang
╎» .bagi
╰─────≼≽

╭─────≼ *Menu Group* ≽
╎» .open
╎» .setopen
╎» .close
╎» .setclose
╎» .welcome
╎» .goodbye
╎» .setwelcome
╎» .changewelcome
╎» .delsetwelcome
╎» .setleft
╎» .changeleft
╎» .delsetleft
╎» .antilink
╎» .antilink2
╎» .hidetag
╎» .kick
╎» .setppgc
╎» .setnamegc
╎» .setdesgc
╎» .linkgc
╎» .resetlinkgc
╎» .promote
╎» .demote
╎» .stiker
╎» .brat
╎» .qc
╎» .afk
╰─────≼≽

╭─────≼ *Menu Bot* ≽
╎» .bot
╎» .setbot
╎» .updatesetbot
╎» .delsetbot
╰─────≼≽

╭─────≼ *Sewa Bot* ≽
╎» Ketik *.owner* jika ingin sewa bot ini
╰─────≼≽`
     m.reply(menu)
        }
break
            case 'owner':{
client.sendContact(m.chat, global.owner, m)
}
break
            case'antilink2':{
   if (!m.isGroup) return m.reply('Fitur Khusus Group!')
   if (!isAdmins) return m.reply('Fitur Khusus admin!')
   if (!isBotAdmins) return m.reply("Bot harus menjadi admin")
   if (args[0] === "on") {
   if (isAntiLink2) return m.reply(`Fitur Sudah Aktif`)
   antilink2.push(m.chat)
   fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
   m.reply('Successfully Activate antilink2 In This Group')
   } else if (args[0] === "off") {
  if (!isAntiLink2) return m.reply(`Udah nonaktif`)
   let anu = antilink2.indexOf(m.chat)
   antilink2.splice(anu, 1)
   fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
   m.reply('Successfully Disabling antilink2 In This Group')
} else {
      m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}  
}
break
            case'antilink':{
     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	 if (!isAdmins) return m.reply('Fitur Khusus admin!')
     if (!isBotAdmins) return m.reply("Bot harus menjadi admin")
     if (args[0] === "on") {
     if (isAntiLink) return m.reply(`Fitur Sudah Aktif`)
       antilink.push(m.chat)
       fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
       m.reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
     if (!isAntiLink) return m.reply(`Fitur Sudah Nonaktif`)
     let anu = antilink.indexOf(m.chat)
        antilink.splice(anu, 1)
        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
        m.reply('Successfully Disabling Antilink In This Group')
} else {
        m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
} 
}
break
            case 'idgc':
case 'idgroup': {
if (!isCreator) return m.reply(`Fitur Khusus Owner bang`)
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await client.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n────────────────────────\n\n`
}
m.reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak idgroup|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
            case 'bcgc':
case 'bcgroup': {
if (!isCreator) return m.reply(`Khusus Owner!`)
if (!text) throw `Textnya mana?\n\nExample : ${prefix + command} Test Broadcast`
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
client.sendMessage(i, {text: `${text}`}, {quoted:m})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
break
}
case 'listsewa':
case 'ceksewa':{
      if (!isAdmins) return m.reply('Fitur Khusus owner dan admin!')
      let list_sewa_list = `*LIST SEWA BOT*\n\n*Total:* ${sewa.length}\n\n`
      let data_array = [];
      for (let x of sewa) {
           list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
      if (x.expired === 'PERMANENT') {
      let ceksewa = 'PERMANENT'
           list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
      let ceksewa = x.expired - Date.now()
           list_sewa_list += `*Expired :* ${msToDate(ceksewa)}\n\n`
}
}
          client.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
}
break
case'delsewa':{
     if (!isCreator) return m.reply("Fitur Khusus Owner bang")
     if (!m.isGroup) return m.reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
     if (!isSewa) return m.reply(`Bot tidak disewa di Grup ini`)
        sewa.splice(getSewaPosition(m.chat, sewa), 1)
        fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
        m.reply(`Sukses menghapus sewa di grup ini`)
        break
}
            case'addsewa':{
     if (!isCreator) return m.reply("Fitur khusus owner!")
     if (text < 2) return m.reply(`Gunakan dengan cara ${prefix + command} *linkgc waktu*\n\nContoh : ${command} https://chat.whatsapp.com/JanPql7MaMLa 30d\n\n*CATATAN:*\nd = hari (day)\nm = menit(minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)`)
     if (!isUrl(args[0])) return m.reply("Link grup wa gk gitu modelnya cuy")
     var url = args[0]
         url = url.split('https://chat.whatsapp.com/')[1]
     if (!args[1]) return m.reply(`Waktunya?`)
     var data = await client.groupAcceptInvite(url)
     if(checkSewaGroup(data, sewa)) return m.reply(`Bot sudah disewa oleh grup tersebut!`)
         addSewaGroup(data, args[1], sewa)
         m.reply(`Success menambah sewa untuk grup ini`)
         break
}
            case'delsetleft':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetLeft(m.chat, set_left_db)) return m.reply(`Belum ada set left di sini..`)
            removeSetLeft(m.chat, set_left_db)
            m.reply(`Sukses delete set left`)
            break
        }
           
            case'changeleft':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(m.chat, set_left_db)) {
               changeSetLeft(q, m.chat, set_left_db)
                m.reply(`Sukses change set left teks!`)
            } else {
                addSetLeft(q, m.chat, set_left_db)
                m.reply(`Sukses change set left teks!`)
            }
            break
        }
            
            case'setleft':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set left already active`)
           addSetLeft(q, m.chat, set_left_db)
            m.reply(`Successfully set left!`)
            break
        }
            case'delsetwelcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Belum ada set welcome di sini..`)
            removeSetWelcome(m.chat, set_welcome_db)
           m.reply(`Sukses delete set welcome`)
           break
        }
            case'changewelcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(m.chat, set_welcome_db)) {
               changeSetWelcome(q, m.chat, set_welcome_db)
                m.reply(`Sukses change set welcome teks!`)
            } else {
              addSetWelcome(q, m.chat, set_welcome_db)
                m.reply(`Sukses change set welcome teks!`)
            }}
break
            case'setwelcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
            if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
            addSetWelcome(text, m.chat, set_welcome_db)
           m.reply(`Successfully set welcome!`)
        	}
break
            case'left': case 'goodbye':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isLeft) return m.reply(`Udah on`)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                m.reply('Sukses mengaktifkan goodbye di grup ini')
            } else if (args[0] === "off") {
               if (!isLeft) return m.reply(`Udah off`)
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                m.reply('Sukses menonaktifkan goodbye di grup ini')
            } else {
                m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
break
            case'welcome':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isWelcome) return m.reply(`Udah on`)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                m.reply('Sukses mengaktifkan welcome di grup ini')
            } else if (args[0] === "off") {
               if (!isWelcome) return m.reply(`Udah off`)
                let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                m.reply('Sukses menonaktifkan welcome di grup ini')
            } else {
                m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
			}
			}
break
            case "d": case'done':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
			if (!m.quoted) return m.reply('Reply pesanan yang telah di proses')
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`            
            const getTextD = getTextSetDone((m.isGroup? m.chat: botNumber), set_done);
            if (getTextD !== undefined) {
            	var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time1).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
            	client.sendTextWithMentions(m.chat, anunya, m)
               } else {
               	client.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time1).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
               }
   }
break
            case"proses": case'p':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
			if (!m.quoted) return m.reply('Reply pesanan yang akan proses')
            let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
            const getTextP = getTextSetProses((m.isGroup? m.chat: botNumber), set_proses);
            if (getTextP !== undefined) {
            	var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time1).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
                client.sendTextWithMentions(m.chat, anunya, m)
            } else {
    client.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time1).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
            }
            }
            break
            case 'delsetdone': case 'delsetd':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!isSetDone((m.isGroup? m.chat: botNumber), set_done)) return m.reply(`Belum ada set done di gc ini`)
            removeSetDone((m.isGroup? m.chat: botNumber), set_done)
            m.reply(`Sukses delete set done`)
        }
break
            case 'changedone': 
case 'changed':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
            if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) {
                changeSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
                m.reply(`Sukses ubah set done!`)
            } else {
                addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
                m.reply(`Sukses ubah set done!`)
            }
           }
break
            case 'setdone':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
		if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
        if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) return m.reply(`Udh set done sebelumnya`)
            addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
            m.reply(`Sukses set done!`)
            }
break
            case 'delsetproses': case 'delsetp':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
            if (!isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return m.reply(`Belum ada set proses di gc ini`)
            removeSetProses((m.isGroup? m.chat: botNumber), set_proses)
            reply(`Sukses delete set proses`)
        }
break
            case 'changeproses':
case 'changep':{
	  if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
      if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
      if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) {
      changeSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
      m.reply(`Sukses ubah set proses!`)
} else {
      addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
      m.reply(`Sukses ubah set proses!`)
}
}
break
            case 'setproses': case 'setp':{
		if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
        if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
        if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return m.reply(`Set proses sudah ada`)
        addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
        m.reply(`✅ Done set proses!`)
}
break
            case 'jeda': {
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin terlebih dahulu")
            if (!text) return m.reply(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
            opengc[m.chat] = { id: m.chat, time: Date.now() + toMs(text) }
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            client.groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses, group akan dibuka ${text} lagi`))
            .catch((err) => m.reply('Error'))
}
break
            case 'delsetbot':{
      if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
            if (!isSetBot((m.isGroup? m.chat: botNumber), set_bot)) return m.reply(`Belum ada set bot di chat ini`)
            removeSetBot((m.isGroup? m.chat: botNumber), set_bot)
            m.reply(`Sukses delete set bot`)
        }
break
            case "updatesetbot": case 'setbot': case 'changebot':{
            if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_bot*\n\n_Contoh_\n\n${command} Halo saya adalah @bot\n\n@bot = nama bot\n@owner = nama owner\n@jam = jam\n@tanggal = tanggal`)
            if (isSetBot((m.isGroup? m.chat: botNumber), set_bot)) {
                changeSetBot(q, (m.isGroup? m.chat: botNumber), set_bot)
                m.reply(`Sukses update set bot teks!`)
            } else {
                addSetBot(q, (m.isGroup? m.chat: botNumber), set_bot)
                m.reply(`Sukses set teks bot!`)
            }
        }
            break
            case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
                if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
				if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin")
                if (!quoted) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply("Berhasil mengganti pp group")
                }
                break
            case "setlinkgc":
case'revoke':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
				if (!isAdmins) return m.reply('Fitur Khusus admin!')
                if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin")
            await client.groupRevokeInvite(m.chat)
            .then( res => {
                m.reply(`Sukses menyetel tautan undangan grup ini`)
            }).catch(() => m.reply("Terjadi kesalahan"))
}
            break
            case 'demote': {
	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins) return m.reply('Fitur Khusus admin!')
    if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin")
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	await client.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
	}
	break
            case 'promote': {
	if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins) return m.reply('Fitur Khusus admin!')
    if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin")
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	await client.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
	}
	break
            case 'setdesc':
case 'setdesk': {
     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins) return m.reply('Fitur Khusus admin!')
    if (!isBotAdmins) return m.reply("Jadikan bot sebagai admin")
    if (!text) return m.reply(`Example ${prefix + command} WhatsApp Bot`)
    await client.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply("Terjadi kesalahan"))
    }
break
/*            case 'setpay':
case 'setpayment':{
     if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
     if(!text) return m.reply(`Reply payment dengan caption ${prefix + command} *caption*\n\n_Contoh_\n\n${prefix + command} ini kak paymentnya`)
     if (!/image/.test(mime)) return m.reply(`Reply payment dengan caption ${prefix + command} *caption*\n\n_Contoh_\n\n${prefix + command} ini kak paymentnya`)
     let dwnld = await client.downloadAndSaveMediaMessage(quoted)
     let nungguya = await TelegraPh(dwnld)
     if(isAlreadyResponListGroup(m.isGroup? m.chat: botNumber, setpay))
     {
     const imgUp = await TelegraPh(dwnld)
updatePay(m.isGroup?m.chat:botNumber, imgUp, text, setpay)
} else {
    const imgNew = await TelegraPh(dwnld)
addPay(m.isGroup?m.chat:botNumber, imgNew, text, setpay)
}
m.reply("Done setting payment")

}
break
            case "payment":
case 'qris':
case 'bayar':
case 'pay':{
const getTextSetDone = (groupID, _db) => {
let position = null
Object.keys(_db).forEach((x) => {
if (_db[x].id === groupID) {
position = x
}
})
if (position !== null) {
return _db[position]
}
}
let bentargwcekpaynya = await getTextSetDone(m.isGroup? m.chat: botNumber, setpay)
if (bentargwcekpaynya !== undefined) {
client.sendMessage(m.chat, {image: await getBuffer(bentargwcekpaynya.pay), caption: bentargwcekpaynya.caption}, {quoted:m})
} else {
client.sendMessage(m.chat, {image: qris, caption: caption_pay}, {quoted:m})
}
}
break*/
      case 'depo': {
        const nomor = sender.split("@")[0];
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const userProfile = await userCollection.findOne({ nomor });
        if (!userProfile) {
          return m.reply('Kamu belom terdaftar, silahkan ketik *Daftar*');
        }
        const ref_id = generateUniqueRefID()
        const apiUrl = 'https://api.tokopay.id/v1/order';
        const jumlah = args[0];
        if (!jumlah || isNaN(jumlah) || parseInt(jumlah) <= 99) {
          return m.reply(`Minimum Deposit adalah 100. \nNilai deposit tidak boleh mengandung titik atau koma, hanya angka.`);
        }
        const formatSaldo = (amount) => `${amount.toLocaleString()}`;
        const requestData = {
          merchant: merchantTP,
          secret: secretTP,
          ref_id: ref_id,
          nominal: jumlah,
          metode: 'QRIS',
        };
        const queryString = new URLSearchParams(requestData).toString();
        const requestUrl = `${apiUrl}?${queryString}`;
        const depoCollection = db.collection(collectionDepo);
        const existingDepo = await depoCollection.findOne({ nomor });
        if (existingDepo) {
          return m.reply(`Maaf, kamu sudah memiliki deposit yang sedang diproses...`);
        }
        const userDepoInfo = {
          nomor: nomor,
          amount_received: jumlah
        };
        await depoCollection.insertOne(userDepoInfo);
        fetch(requestUrl)
          .then(async (response) => {
            const data = await response.json();
            const capt = `─────〔 *OTOMATIS* 〕─────\n\n*» Ref ID :* ${ref_id}\n*» Username Deposit :* ${pushname}\n*» Jumlah Deposit :* ${formatSaldo(data.data.total_diterima)}\n\n*UNPAID*\n\nSilahkan transfer Ke QRIS diatas sebesar _*${formatSaldo(data.data.total_bayar)}*_\nDeposit di cek otomatis dan akan langsung masuk ke saldo kalian, Batas waktu transfer adalah 3 Menit`
            client.sendMessage(m.chat, { image: { url: `${data.data.qr_link}` }, caption: capt, })
            let dataStatus = data.data.status;
            const startTime = new Date().getTime();
            while (dataStatus !== "Success") {
              await sleep(1000);
              const neko = await fetch(requestUrl);
              const memecData = await neko.json();
              let dataStatus = memecData.data.status;
              console.log(dataStatus);
              const currentTime = new Date().getTime();
              const elapsedTime = (currentTime - startTime) / 1000;
              if (elapsedTime >= 150) {
                m.reply(`─────〔 *GAGAL* 〕─────\n\n*» Ref ID :* ${ref_id}\n*» Username Deposit :* ${pushname}\n*» Jumlah Deposit :* ${formatSaldo(memecData.data.total_diterima)}\n\n*TIME OUT*\n\nSesi Deposit Expired, Silahkan Deposit Ulang`);
                await depoCollection.deleteOne({ nomor });
                break;
              }
              if (dataStatus === "Success") {
                const dep = memecData.data.total_diterima
                const capt = `─────〔 *CIHUYYY* 〕─────\n\n*» Ref ID :* ${ref_id}\n*» Nomer User :* ${nomor}\n*» Waktu :* ${hariini}, ${time1} WIB\n\n*${memecData.data.status}*\n\nSaldo sebesar *${formatSaldo(memecData.data.total_diterima)}* Telah ditambah ke Akun Anda King 👑\n© _${global.botName}_`
                m.reply(capt)
                const updatedUserProfile = await userCollection.findOne({ nomor });
                const updatedSaldo = updatedUserProfile.saldo + dep;
                await userCollection.updateOne({ nomor }, { $set: { saldo: updatedSaldo } });
                await depoCollection.deleteOne({ nomor });
                break;
              }
            }
          })
      }
      break
//=================================================//
// CASE STALKING AKUN GAME TANPA APIKEY //

case 'cekff':{
if (args.length == 0) return m.reply(`*FREE FIRE NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 570098876`)
      const id = body.split(" ")[1];
    //  const zona = body.split(" ")[2];
 var ff = await fetchJson(`https://api.isan.eu.org/nickname/ff?id=${id}`)
 const hasil = `─────〔  *FREE FIRE STALK* 〕─────

*Nama Game* : ${ff.game}
*ID Game* : ${id}
*Nickname* : ${ff.name || null}`
m.reply(hasil);
}break

case 'cekml':{
if (args.length == 0) return m.reply(`*MOBILE LEGENDS NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 1265789123 15250`)
      const id = body.split(" ")[1];
      const server = body.split(" ")[2];
 var mlid = await fetchJson(`https://api.isan.eu.org/nickname/ml?id=${id}&server=${server}`)
 const hasil = `─────〔  *MOBILE LEGENDS STALK* 〕─────

*Nama Game* : ${mlid.game}
*ID Game* : ${id} (${server})
*Nickname* : ${mlid.name || null}`
m.reply(hasil);
}break

case 'mlregion':
case 'mlreg':{
     if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
     const [userId, zoneId] = text.split(" ");  
     if(!userId) return m.reply(`Mana ID Servernyaa?

- Contoh : ${command} 12345678 1234`);
validateMobileLegendsMoogold(userId, zoneId)
    }
break

case 'cekag':{
if (args.length == 0) return m.reply(`*AETHER GAZER NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 53687200000`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/ag?id=${id}`)
 const hasil = `─────〔  *AETHER GAZER STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekgi':{
if (args.length == 0) return m.reply(`*GENSHIN IMPACT NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 600000000`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/gi?id=${id}`)
 const hasil = `─────〔  *GENSHIN IMPACT STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Server* : ${idgame.server}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekhsr':{
if (args.length == 0) return m.reply(`*HONKAI: STAR RAIL NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 600000001`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/hsr?id=${id}`)
 const hasil = `─────〔  *HONKAI: STAR RAIL STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Server* : ${idgame.server}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekhi':{
if (args.length == 0) return m.reply(`*HONKAI IMPACT 3RD NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 10000001`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/hi?id=${id}`)
 const hasil = `─────〔  *HONKAI IMPACT 3RD STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekpb':{
if (args.length == 0) return m.reply(`*POINT BLANK NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} wakwaw55`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/pb?id=${id}`)
 const hasil = `─────〔  *POINT BLANK STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'ceksm':{
if (args.length == 0) return m.reply(`*SAUSAGE MAN NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 5sn9jf`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/sm?id=${id}`)
 const hasil = `─────〔  *SAUSAGE MAN STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'ceksus':{
if (args.length == 0) return m.reply(`*SUPER SUS NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 15916600`)
      const id = body.split(" ")[1];
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/sus?id=${id}`)
 const hasil = `─────〔  *SUPER SUS STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekvalo':{
if (args.length == 0) return m.reply(`*VALORANT NICKNAME VALIDATOR*\n\n- Contoh ID INDO : ${prefix + command} yuyun#123\n- Contoh ID NON INDO : ${prefix + command} Westbourne#USA`)
      let id = body.split(" ")[1];
      id = id.replace('#', '%23');
      //const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/valo?id=${id}`)
 let hasil = `─────〔  *VALORANT STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Server* : ${idgame.server}
*Nickname* : ${idgame.name || null}`
hasil = hasil.replace(/%23/g, '#');
m.reply(hasil);
}break

case 'cekpgr':{
if (args.length == 0) return m.reply(`*PUNISHING: GR NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 16746755 AP\n\n*Keterangan untuk identifikasi server:*\n- AP (Asia-Pasifik),\n- EU (Europe),\n- NA (North America)`)
      const id = body.split(" ")[1];
      const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/pgr?id=${id}&server=${server}`)
 const hasil = `─────〔  *PUNISHING: GRAY RAVEN STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Server* : ${idgame.server}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekzzz':{
if (args.length == 0) return m.reply(`*ZENLESS ZONE ZERO NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 1000000100`)
      const id = body.split(" ")[1];
    //  const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/zzz?id=${id}`)
 const hasil = `─────〔  *ZENLESS ZONE ZERO STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Server* : ${idgame.server}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekaov':{
if (args.length == 0) return m.reply(`*ARENA OF VALOR NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 124590895269021`)
      const id = body.split(" ")[1];
    //  const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/aov?id=${id}`)
 const hasil = `─────〔  *ARENA OF VALOR STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'cekcod':{
if (args.length == 0) return m.reply(`*CALL OF DUTY NICKNAME VALIDATOR*\n\n- Contoh : ${prefix + command} 243402956362890880`)
      const id = body.split(" ")[1];
    //  const server = body.split(" ")[2];
 var idgame = await fetchJson(`https://api.isan.eu.org/nickname/cod?id=${id}`)
 const hasil = `─────〔  *CALL OF DUTY STALK* 〕─────

*Nama Game* : ${idgame.game}
*ID Game* : ${id}
*Nickname* : ${idgame.name || null}`
m.reply(hasil);
}break

case 'idpubg': 
case 'cekpubg': {
        if (!text) return m.reply(`─────〔  *PUBG MOBILE STALK* 〕─────\n\n- Contoh : ${prefix + command} 5178789962`);
        cekPubg(text)
            .then(data => {
            if (data.message === "Success") {
                const hasil = `─────〔  *PUBG MOBILE STALK* 〕─────

*ID Game*: ${text}
*Nickname:* ${data.data}`;
                client.sendMessage(m.chat, { text: hasil }, { quoted: m });
            } else {
                return m.reply(`Maaf, username tidak ditemukan`);
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    break;}

case 'cekhok': {
        if (!text) return m.reply(`─────〔  *HONOR OF KINGS STALK* 〕─────\n\n- Contoh : ${prefix + command} 9373893688518913655`);
        cekHok(text)
            .then(data => {
            if (data.message === "Success") {
                const hasil = `─────〔  *HONOR OF KINGS STALK* 〕─────

*ID Game*: ${text}
*Nickname:* ${data.data}`;
                client.sendMessage(m.chat, { text: hasil }, { quoted: m });
            } else {
                return m.reply(`Maaf, username tidak ditemukan`);
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    break;}

//=================================================//
// FITUR DOWNLOADER APIKEY BY BETABOTZ
//=================================================//
case 'ttslide': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *TIKTOK SLIDE DOWNLOADER* 〕─────\n\n- Silakan masukkan URL TikTok yang ingin diunduh slide-nya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    const response = await fetch(`https://api.betabotz.eu.org/api/download/ttslide?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });
    const result = await response.json();

    if (!result.status) {
      return m.reply(`Gagal mengambil data TikTok. Pesan: ${result.message || 'Unknown error'}`);
    }
    // Ambil data hasil dari API
    const { title, thumbnail, images } = result.result;

    // Kirim slide dalam format album
    const media = images.map((url, index) => ({
      image: { url },
    }));

    // Kirim album ke pengguna
    for (let slide of media) {
      await client.sendMessage(m.chat, slide, { quoted: m });
    }

    // Kirim thumbnail dan info
    await client.sendMessage(
      m.chat,
      { image: { url: thumbnail }, caption: `─────〔 *TIKTOK SLIDE DOWNLOADER* 〕─────\n\n- *Judul:* ${title}\n- *Total Slide:* ${images.length}` },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'ttdl': 
case 'ttvideo': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *TIKTOK VIDEO DOWNLOADER* 〕─────\n\n- Silakan masukkan URL TikTok yang ingin diunduh videonya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Panggil API
    const response = await fetch(`https://api.betabotz.eu.org/api/download/tiktok?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });
    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data TikTok. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil data hasil dari API
    const { title, video, audio } = result.result;

    // Kirim video ke pengguna
    await client.sendMessage(
      m.chat,
      { video: { url: video[0] }, caption: `─────〔 *TIKTOK VIDEO DOWNLOADER* 〕─────\n\n- *Judul:* ${title}` },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'twdl':
case 'twtdl': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *TWITTER VIDEO DOWNLOADER* 〕─────\n\n- Silakan masukkan URL Twitter yang ingin diunduh videonya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Panggil API
    const response = await fetch(`https://api.betabotz.eu.org/api/download/twitter?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });
    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data Twitter. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil data hasil dari API
    const { title, url } = result.result;
    const hdVideo = url.find(video => video.hd)?.hd;

    if (!hdVideo) {
      return m.reply('Video HD tidak tersedia untuk URL yang diberikan.');
    }

    // Kirim video ke pengguna
    await client.sendMessage(
      m.chat,
      { video: { url: hdVideo }, caption: `─────〔 *TWITTER VIDEO DOWNLOADER* 〕─────\n\n- *Judul:* ${title}` },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'igdl':
case 'ig': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *INSTAGRAM VIDEO DOWNLOADER* 〕─────\n\n- Silakan masukkan URL Instagram yang ingin diunduh videonya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Panggil API
    const response = await fetch(`https://api.betabotz.eu.org/api/download/igdowloader??url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });
    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data Instagram. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil data hasil dari API
    const { wm, thumbnail, _url } = result.message[0];

    if (!_url) {
      return m.reply('Video tidak tersedia untuk URL yang diberikan.');
    }

    // Kirim video ke pengguna
    await client.sendMessage(
      m.chat,
      {
        video: { url: _url },
        caption: `─────〔 *INSTAGRAM VIDEO DOWNLOADER* 〕─────'}`,
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'fbdl': 
case 'fb': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *FACEBOOK VIDEO DOWNLOADER* 〕─────\n\n- Silakan masukkan URL Facebook yang ingin diunduh videonya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Endpoint API Facebook Downloader
    const response = await fetch(`https://api.betabotz.eu.org/api/download/fbdown?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });

    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data Facebook. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil video dengan resolusi terbaik
    const videos = result.result;
    if (videos.length === 0) {
      return m.reply('Tidak ada video yang ditemukan untuk URL yang diberikan.');
    }

    const bestVideo = videos.reduce((prev, curr) => {
      const prevRes = parseInt(prev.resolution) || 0;
      const currRes = parseInt(curr.resolution) || 0;
      return currRes > prevRes ? curr : prev;
    });

    // Kirim video ke pengguna
    await client.sendMessage(
      m.chat,
      {
        video: { url: bestVideo._url },
        caption: `─────〔 *FACEBOOK VIDEO DOWNLOADER* 〕─────\n\n- *Resolution*: ${bestVideo.resolution}`,
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'capcutdl': 
case 'ccdl': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *CAPCUT VIDEO DOWNLOADER* 〕─────\n\n- Silakan masukkan URL CapCut yang ingin diunduh videonya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Panggil API
    const response = await fetch(`https://api.betabotz.eu.org/api/download/capcut?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });

    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data CapCut. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil data hasil dari API
    const { title, owner, video } = result.result;

    if (!video) {
      return m.reply('Video tidak tersedia untuk URL yang diberikan.');
    }

    // Kirim video ke pengguna
    await client.sendMessage(
      m.chat,
      {
        video: { url: video },
        caption: `─────〔 *CAPCUT VIDEO DOWNLOADER* 〕─────\n\n- *Judul*: ${title}\n- *Pemilik*: ${owner}`,
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'ytvideo': 
case 'ytdl': 
case 'ytmp4': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *YOUTUBE VIDEO DOWNLOADER* 〕─────\n\n- Silakan masukkan URL YouTube yang ingin diunduh videonya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Panggil API
    const response = await fetch(`https://api.betabotz.eu.org/api/download/ytmp4?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });

    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data YouTube. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil data hasil dari API
    const { title, duration, mp4 } = result.result;

    if (!mp4) {
      return m.reply('Video tidak tersedia untuk URL yang diberikan.');
    }

    // Kirim video ke pengguna
    await client.sendMessage(
      m.chat,
      {
        video: { url: mp4 },
        caption: `─────〔 *YOUTUBE VIDEO DOWNLOADER* 〕─────\n\n- *Judul*: ${title}\n- *Durasi*: ${duration} detik`,
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}

case 'ytmp3': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
  if (!args[0]) {
    return m.reply(`─────〔 *YOUTUBE MP3 DOWNLOADER* 〕─────\n\n- Silakan masukkan URL YouTube yang ingin diunduh audionya.`);
  }
  m.reply('Sedang memproses, silakan tunggu...');
  try {
    // Panggil API
    const response = await fetch(`https://api.betabotz.eu.org/api/download/ytmp3?url=${args[0]}&apikey=${apikeyBeta}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' },
    });

    const result = await response.json();

    // Periksa status API
    if (!result.status) {
      return m.reply(`Gagal mengambil data YouTube. Pesan: ${result.message || 'Unknown error'}`);
    }

    // Ambil data hasil dari API
    const { title, duration, mp3 } = result.result;

    if (!mp3) {
      return m.reply('Audio tidak tersedia untuk URL yang diberikan.');
    }

    // Kirim audio ke pengguna
    await client.sendMessage(
      m.chat,
      {
        audio: { url: mp3 },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        caption: `─────〔 *YOUTUBE MP3 DOWNLOADER* 〕─────\n\n- *Judul*: ${title}\n- *Durasi*: ${duration} detik`,
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
  }
  break;
}
      case 'ping':
      case 'bot': {
        const randomAudioIndex = Math.floor(Math.random() * 3) + 1;
        const audioPath = `./db/ara${randomAudioIndex}.mp3`;
        client.sendMessage(from, { audio: { url: audioPath }, mimetype: 'audio/mpeg', ptt: true });
      }
      break;
      
     
      case 'daftarmember':
      case 'listuser':
      case 'listusers': {
        if (!isCreator) return;
        const fs = require('fs');

  const balanceFilePath = './function/users.json';

  try {
    let money = JSON.parse(fs.readFileSync(balanceFilePath));

    if (money.length === 0) {
      return reply(`Belum ada list pengguna`);
    }

    // Tambahkan role Bronze ke pengguna yang belum memiliki role dan perbarui balance.json
    money.forEach(pengguna => {
      if (!pengguna.role) {
        pengguna.role = "BRONZE"; // Set role ke Bronze jika belum memiliki role
      }
    });

    // Kelompokkan pengguna berdasarkan peran (role)
    const penggunaBronze = money.filter(pengguna => pengguna.role === "BRONZE");
    const penggunaSilver = money.filter(pengguna => pengguna.role === "SILVER");
    const penggunaGold = money.filter(pengguna => pengguna.role === "GOLD");

    // Mengurutkan pengguna dalam setiap kelompok berdasarkan saldo (money)
    penggunaBronze.sort((a, b) => b.money - a.money);
    penggunaSilver.sort((a, b) => b.money - a.money);
    penggunaGold.sort((a, b) => b.money - a.money);

    let teks = '*DASHBOARD SALDO MEMBER*\n\n';

    // Menambahkan pengguna dalam setiap kelompok ke teks
    function appendUsersToText(users, role) {
      users.forEach(pengguna => {
        teks += `\nNama : ${pengguna.nama}\nNomor : ${pengguna.nomor}\nSaldo : ${formatmoney(pengguna.saldo)}\nRole : ${pengguna.role}\n`;
      });
    }

    appendUsersToText(penggunaGold, "GOLD");
    appendUsersToText(penggunaSilver, "SILVER");
    appendUsersToText(penggunaBronze, "BRONZE");    

    const totalSaldo = money.reduce((total, pengguna) => total + pengguna.saldo, 0);
    teks += `\n\nTotal User : ${money.length}\nTotal Saldo : ${formatmoney(totalSaldo)}`;

    // Simpan kembali data yang telah diperbarui ke balance.json
    fs.writeFileSync(balanceFilePath, JSON.stringify(money, null, 3));

    client.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": money } });
  } catch (error) {
    console.error(`Error reading/writing balance file: ${error}`);
    return reply('Maaf, terjadi kesalahan saat mengakses data saldo member.');
  }

};    
      break;
      case 'kurangsaldo':
      case 'removesaldo': {

if (!isCreator) return;
      if (isNaN(text.split(" ")[1]) || !Number(text.split(" ")[1]))
        return m.reply("kyk gini kurangsaldo nomor jumlah");
      if (!text) return m.reply("masukan nomer orangnya");

      const targetNumber = text.split(" ")[0];
      const amount = parseInt(text.split(" ")[1]);

      try {
        const usersData = JSON.parse(fs.readFileSync(pathUser));
        const userIndex = usersData.findIndex(
          (user) => user.nomor === targetNumber
        );

        if (userIndex !== -1) {
          const userData = usersData[userIndex];
          const currentSaldo = userData.saldo || 0;

          if (currentSaldo >= amount) {
            const newSaldo = currentSaldo - amount;

            userData.saldo = newSaldo;
            fs.writeFileSync(pathUser, JSON.stringify(usersData, null, 2));

            const txt1 = `*» Note* : Sukses Mengurangi Saldo\n*» Nomor* : ${targetNumber}\n*» Jumlah* : ${formatmoney(
              amount
            )}\n*» Sisa Saldo* : ${formatmoney(newSaldo)}`;
            const capt = `Saldo kamu telah dikurangi sebesar ${formatmoney(
              amount
            )} oleh Admin.`;
            FathMes(m, txt1);
            FathUser(targetNumber, capt);
          } else {
            m.reply("Saldo tidak mencukupi untuk melakukan pengurangan.");
          }
        } else {
          m.reply("Nomor tidak ditemukan dalam database.");
        }
      } catch (err) {
        console.error("Terjadi kesalahan:", err);
      }

      return;
    }
 break;     
      
      case 'addsaldo':
      case 'tambahsaldo': {
         if (!isCreator) return;
      if (isNaN(text.split(" ")[1]) || !Number(text.split(" ")[1]))
        return m.reply("Cgini .addsaldo nomor jumlah");
      if (!text) return m.reply("Cgini addsaldo nomor jumlah");

      const targetNumber = text.split(" ")[0];
      const amount = parseInt(text.split(" ")[1]);

      try {
        const usersData = JSON.parse(fs.readFileSync(pathUser));
        const userIndex = usersData.findIndex(
          (user) => user.nomor === targetNumber
        );

        if (userIndex !== -1) {
          const userData = usersData[userIndex];
          const currentSaldo = userData.saldo || 0;
          const newSaldo = currentSaldo + amount;

          userData.saldo = newSaldo;

          fs.writeFileSync(pathUser, JSON.stringify(usersData, null, 2));

          const txt1 = `*» Note* : Success Add Balance\n*» Nomor* : ${targetNumber}\n*» Jumlah* : ${formattedBalance(
            amount
          )}\n*» Total Saldo* : ${formattedBalance(newSaldo)}`;
          FathMes(m, txt1);

          const capt = `Saldo kamu telah ditambahkan sebesar *${formattedBalance(
            amount
          )}* oleh ADMIN`;
          FathUser(targetNumber, capt);
        } else {
          const newUserData = {
            nomor: targetNumber,
            nama: "No Name",
            saldo: amount,
          };

          usersData.push(newUserData);

          fs.writeFileSync(pathUser, JSON.stringify(usersData, null, 2));

          const txt1 = `*» Note* : Success Add Balance\n*» Nomor* : ${targetNumber}\n*» Jumlah* : ${formattedBalance(
            amount
          )}\n*» Total Saldo* : ${formattedBalance(amount)}`;
          FathMes(m, txt1);

          const capt = `Saldo kamu telah ditambahkan sebesar *${formattedBalance(
            amount
          )}* oleh Admin`;
          FathUser(targetNumber, capt);
        }
      } catch (err) {
        console.error("Terjadi kesalahan:", err);
      }
      return;
    }
break;

      case 'ubahrole':
      case 'changerole': {
   if (!isCreator) return;
      const targetNumber = text.split(" ")[0];
      if (!text) return m.reply("Masukan Nomer Target");
      const newRole = text.split(" ")[1];
      if (!newRole) return m.reply("ubahrole nomor ROLE");

      if (!["BRONZE", "SILVER", "GOLD"].includes(newRole)) {
        return m.reply("Hanya bisa BRONZE, SILVER, dan GOLD!");
      }

     FathMes(m, `${setRole(targetNumber, newRole)}`);
    }
      break;
      case 'profile':
      case 'profil':
      case 'saldo': {
        const fs = require('fs');
  const balanceFilePath = './function/users.json';

  try {
    const balanceData = JSON.parse(fs.readFileSync(balanceFilePath));
    const userNumber = m.sender.split("@")[0];
    const userBalance = balanceData.find(user => user.nomor === userNumber);

    if (userBalance) {
      const saldo = userBalance.saldo;
      const userRole = userBalance.role || "BRONZE"; // Mengambil peran atau mengatur peran default jika belum ada

      if (saldo === 0) {
        m.reply(`Anda memiliki saldo 0 sebagai role ${userRole} Nomor Anda : ${userNumber}\n\n \nSilahkan Chat Ke Admin jika ingin deposit saldo. Dengan Cara kirim bukti Transfer Jumlah deposit Nomor Anda`);
      } else {
        m.reply(`Sisa Saldo Anda saat ini: *${formatmoney(saldo)}* sebagai role ${userRole}\nNomor Anda : ${userNumber}\n\nSilahkan ketik ${prefix}menu untuk topup.`);
      }
    } else {
      // Jika pengguna belum terdaftar dalam balance.json, tambahkan entri baru dengan saldo awal 0 dan peran "bronze".
      balanceData.push({ id: userNumber, money: 0, role: "BRONZE" });
      fs.writeFileSync(balanceFilePath, JSON.stringify(balanceData, null, 3));

      m.reply("Anda belum memiliki saldo. Saldo Anda telah terdaftar sebagai role bronze dengan saldo awal 0. Silahkan ketik .depo jika mau deposit");
    }
  } catch (error) {
    console.error(`Error reading balance file: ${error}`);
    m.reply('Maaf, terjadi kesalahan saat mengakses saldo Anda.');
  }
break;
};
 //SET KE UNTUNGAN     
      case 'saldodigi': 
      case 'dashboard': {
        if (!isCreator) return
        if (isGroup) return
        const combinedString = username + apiKey + "depo";
        const signature = crypto.createHash('md5').update(combinedString).digest('hex');
        const endPoint = "https://api.digiflazz.com/v1/cek-saldo";
        const postData = {
          cmd: "deposit",
          username: username,
          sign: signature,
        };
        connect(endPoint, postData)
          .then((apiResponse) => {
            if (apiResponse && apiResponse.data) {
              const profile = apiResponse.data;
              const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
              const ngen = `─────〔 *PROFIE* 〕─────\n\n» *Username* : ${username}\n» *Nama Bot* : ${botName}\n» *Saldo* : ${formatSaldo(profile.deposit)}\n» *Status* : Aktif`
              m.reply(ngen)
            } else {
              console.log("Failed to get API data.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            console.log("Failed to make API request.");
          });
      }
      break

/*      case 'list':{
if (db_respon_list.length === 0) return m.reply(`Belum ada list di database`)
if (!isAlreadyResponListGroup((m.isGroup ? m.chat: botNumber), db_respon_list)) return m.reply(`Belum ada list yang terdaftar di group/chat ini`)
if(m.isGroup){
let teks = `📆 ${hariini}
⏰ ${time1}
Untuk Melihat List
Ketik List Dibawah ini
--------------------------------------\n`
for (let i of db_respon_list) {
if (i.id === (m.isGroup ? m.chat : botNumber)) {
teks += `» ${i.key.toLowerCase()}\n`
}
}
teks += `\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas.`
client.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m})
}
}
break*/
//=================================================//
// SETING LIST

case "setlist": {
    if (!(m.isGroup ? isAdmins : isCreator)) return reply('Fitur Khusus admin!');

    // Cek jika ada argumen setelah command
    let storeName = args.join(' ');

    // Jika tidak ada argumen, cek apakah ada pesan yang di-quote
    if (!storeName) {
        if (!m.quoted) return reply('Silakan Masukan *Header Textnya* kak\nHeader Text maksudnya text untuk dibagian atas list, posisinya ada di atas *Symbol*');
        storeName = m.quoted.text; // Menggunakan teks dari pesan yang di-quote sebagai nama toko
    }

    const settingsPath = path.join(__dirname, `./database/groupsetting/setlist.json`);
    let storeNames = [];

    // Memuat data nama toko dari file
    if (fs.existsSync(settingsPath)) {
        storeNames = JSON.parse(fs.readFileSync(settingsPath));
    }

    // Cek jika grup sudah ada namanya
    const existingStore = storeNames.find(s => s.id === m.chat);
    if (existingStore) {
        existingStore.name = storeName; // Update nama toko
    } else {
        storeNames.push({ id: m.chat, name: storeName }); // Tambah entry baru
    }

    // Simpan kembali ke file
    fs.writeFileSync(settingsPath, JSON.stringify(storeNames));
    reply(`*Header Text* berhasil di setting, silahkan ketik *List* untuk melihat hasilnya yaa kak.`);
    break;
}

case "setlist2": {
    if (!(m.isGroup ? isAdmins : isCreator)) return reply('Fitur Khusus admin!');

    // Cek jika ada argumen setelah command
    let storeName2 = args.join(' ');

    // Jika tidak ada argumen, cek apakah ada pesan yang di-quote
    if (!storeName2) {
        if (!m.quoted) return reply('Silakan Masukan Symbolnya kak\nSymbol maksudnya tanda dibagian samping list, posisinya ada di tengah List');
        storeName2 = m.quoted.text; // Menggunakan teks dari pesan yang di-quote sebagai nama toko 2
    }

    const settingsPath = path.join(__dirname, `./database/groupsetting/setlist.json`);
    let storeNames = [];

    // Memuat data nama toko dari file
    if (fs.existsSync(settingsPath)) {
        storeNames = JSON.parse(fs.readFileSync(settingsPath));
    }

    // Cek jika grup sudah ada namanya
    const existingStore = storeNames.find(s => s.id === m.chat);
    if (existingStore) {
        existingStore.name2 = storeName2; // Update nama toko 2
    } else {
        storeNames.push({ id: m.chat, name2: storeName2 }); // Tambah entry baru
    }

    // Simpan kembali ke file
    fs.writeFileSync(settingsPath, JSON.stringify(storeNames));
    reply(`*Symbol* berhasil di setting, silahkan ketik *List* untuk melihat hasilnya yaa kak.`);
    break;
}

case "setlist3": {
    if (!(m.isGroup ? isAdmins : isCreator)) return reply('Fitur Khusus admin!');

    // Cek jika ada argumen setelah command
    let storeName3 = args.join(' ');

    // Jika tidak ada argumen, cek apakah ada pesan yang di-quote
    if (!storeName3) {
        if (!m.quoted) return reply('Silakan Masukan *Footer Textnya* kak\nFooter Text maksudnya text untuk dibagian bawah list, posisinya ada di bawah *Symbol*');
        storeName3 = m.quoted.text; // Menggunakan teks dari pesan yang di-quote sebagai nama toko 3
    }

    const settingsPath = path.join(__dirname, `./database/groupsetting/setlist.json`);
    let storeNames = [];

    // Memuat data nama toko dari file
    if (fs.existsSync(settingsPath)) {
        storeNames = JSON.parse(fs.readFileSync(settingsPath));
    }

    // Cek jika grup sudah ada namanya
    const existingStore = storeNames.find(s => s.id === m.chat);
    if (existingStore) {
        existingStore.name3 = storeName3; // Update nama toko 3
    } else {
        storeNames.push({ id: m.chat, footerText: storeName3 }); // Tambah entry baru
    }

    // Simpan kembali ke file
    fs.writeFileSync(settingsPath, JSON.stringify(storeNames));
    reply(`*Footer Text* berhasil di setting, silahkan ketik *List* untuk melihat hasilnya yaa kak.`);
    break;
}
/*case 'resetwdlist': {
    const settingsPath = path.join(__dirname, `./database/groupsetting/setlist.json`);

    // Cek apakah file storeNames.json ada
    if (fs.existsSync(settingsPath)) {
        // Hapus semua entri di dalam file storeNames.json
        fs.writeFileSync(settingsPath, JSON.stringify([], null, 2));
        reply('Wording List berhasil direset.');
    } else {
        reply('Belum ada data Wording List untuk grup ini kak.');
    }

    break;
}*/

case 'resetwdlist': {
    const settingsPath = path.join(__dirname, `./database/groupsetting/setlist.json`);

    // Cek apakah file setlist.json ada
    if (fs.existsSync(settingsPath)) {
        // Baca data dari file
        const setlistData = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));

        // Filter data untuk menghapus entri sesuai id grup
        const groupId = m.chat; // Ambil id grup dari konteks
        const updatedData = setlistData.filter(entry => entry.id !== groupId);

        // Tulis data yang sudah difilter kembali ke file
        fs.writeFileSync(settingsPath, JSON.stringify(updatedData, null, 2));

        reply('Wording List untuk grup ini berhasil direset.');
    } else {
        reply('Belum ada data Wording List untuk grup ini kak.');
    }

    break;
}

case 'tutorsetlist': {
const ini_tutor = `─────〔  *PENJELASAN CARA MENGGUNAKAN SETLIST* 〕─────

Setlist adalah fitur untuk design ulang tampilan *List* berikut penjelasannya

List : Menampilkan produk jualan kamu
Setlist : Setting Header Text Dibagian *List*
Setlist2 : Setting Tanda atau Symbol Dibagian Belakang *List*
Setlist3 : Setting Footer Text Dibagian *List*
Resetwdlist : Hapus database Setlist, mengembalikan ke setelan default

*WORDING COMMAND*
@User : Tag User
@Tanggal : Tanggal hari ini
@Day : Hari Ini
@Tgl : Hari + Tanggal
@Wib : Waktu WIB
@Wit : Waktu WIT
@Wita : Waktu WITA
@Jam : Waktu WIB juga
@Group : Nama Grup
@Totallist : Total List Grup
@Newline : Garis baru kebawah
@2Newline : 2 Garis baru kebawah

*Penjelasan Newline*
Newline itu semacam enter, kalo newline langsung pake enter yang di keyboard lu, di WhatsApp bakal ke hapus makanya dibikin kode @Newline biar ga dihapus otomatis sama WhatsApp, kode @newline pake di awal atau akhir wording lu, kalo di tengah tengah pake enter di keyboard lu aja.
`
m.reply(ini_tutor)
}break
//=================================================//
case 'list': {
    const settingsPathNames = path.join(__dirname, `./database/groupsetting/setlist.json`);
    let storeNames = [];

    if (fs.existsSync(settingsPathNames)) {
        storeNames = JSON.parse(fs.readFileSync(settingsPathNames));
    }

    const groupId = m.isGroup ? m.chat : botNumber;
    const groupStore = storeNames.find(s => s.id === groupId);

    // Cek apakah namastore, namastore2, dan namastore3 ada, jika tidak, beri nilai default
    const namastore = groupStore && groupStore.name ? groupStore.name : `Halo @user\n\nberikut beberapa list yang tersedia saat ini.\n\n╭─────✧ [ *LIST MENU* ]\n│`;
    const namastore2 = groupStore && groupStore.name2 ? groupStore.name2 : '│»';
    const namastore3 = groupStore && groupStore.name3 ? groupStore.name3 : '│\n╰───────✧\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas.';

    // Menghitung total jumlah data list
    const totalList = db_respon_list.filter(i => i.id === (m.isGroup ? m.chat : botNumber)).length;

    const finalStoreName = namastore
        .replace(/@user/g, `@${m.sender.split('@')[0]}`)
        .replace(/@wib/g, wib)
        .replace(/@wit/g, wit)
        .replace(/@wita/g, wita)
        .replace(/@tanggal/g, date)
        .replace(/@day/g, day)
        .replace(/@tgl/g, tgl)
        .replace(/@newline/g, '\n')
        .replace(/@2newline/g, '\n\n')
        .replace(/@jam/g, time)
        .replace(/@group/g, groupName)
        .replace(/@totallist/g, totalList);

    const finalStoreName2 = namastore2
        .replace(/@user/g, `@${m.sender.split('@')[0]}`)
        .replace(/@wib/g, wib)
        .replace(/@wit/g, wit)
        .replace(/@wita/g, wita)
        .replace(/@tanggal/g, date)
        .replace(/@day/g, day)
        .replace(/@tgl/g, tgl)
        .replace(/@newline/g, '\n')
        .replace(/@2newline/g, '\n\n')
        .replace(/@jam/g, time)
        .replace(/@group/g, groupName)
        .replace(/@totallist/g, totalList);

    const finalStoreName3 = namastore3
        .replace(/@user/g, `@${m.sender.split('@')[0]}`)
        .replace(/@wib/g, wib)
        .replace(/@wit/g, wit)
        .replace(/@wita/g, wita)
        .replace(/@tanggal/g, date)
        .replace(/@day/g, day)
        .replace(/@tgl/g, tgl)
        .replace(/@newline/g, '\n')
        .replace(/@2newline/g, '\n\n')
        .replace(/@jam/g, time)
        .replace(/@group/g, groupName)
        .replace(/@totallist/g, totalList);

    if (db_respon_list.length === 0) return reply(`Belum ada list message di database`);
    if (!isAlreadyResponListGroup((m.isGroup ? m.chat : botNumber), db_respon_list)) return reply(`Belum ada list message yang terdaftar di group/chat ini`);

    let teks = `${finalStoreName}\n`;
    // Mengurutkan daftar pesan sesuai abjad
    db_respon_list.sort((a, b) => a.key.localeCompare(b.key));
    for (let i of db_respon_list) {
        if (i.id === (m.isGroup ? m.chat : botNumber)) {
            teks += `${finalStoreName2} *${i.key.toLowerCase()}*\n`;
        }
    }
    teks += `${finalStoreName3}`;

    // Kirim pesan teks tanpa tombol
    client.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m });
    break;
}
//=================================================//
      case 'hidetag':
      case 'h': {
        if (!m.isGroup) return
        if (!isAdmins) return
        client.sendMessage(m.chat, {
          text: text ? text : '',
          mentions: participants.map(a => a.id)
        })
      }
      break
      case 'join': {
        if (!isCreator) return
        if (!text) return m.reply(`Link Groupnya Mana?`)
        var ini_urrrl = text.split('https://chat.whatsapp.com/')[1]
        var data = await client.groupAcceptInvite(ini_urrrl).then((res) => m.reply(`Berhasil Join ke grup...`)).catch((err) => m.reply(`Eror.. Munkin bot telah di kick Dari grup tersebut`))
      }
      break
      case 'getip': {
        if (!isCreator) return
        var http = require('http')
        http.get({
          'host': 'api.ipify.org',
          'port': 80,
          'path': '/'
        }, function(resp) {
          resp.on('data', function(ip) {
            m.reply("IP : " + ip);
          })
        })
      }
      break
      case 'kick': {
        if (!m.isGroup) return
        if (!isAdmins && !isCreator) return
        if (!isBotAdmins) return
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`${users} telah di kick...`)).catch((err) => m.reply('hmmm gagal kick dia'))
      }
      break
      case 'linkgroup':
      case 'linkgrup':
      case 'linkgc': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        let response = await client.groupInviteCode(m.chat)
        client.sendText(m.chat, `『 *INFO LINK GROUP 』*\n\n» *Nama Grup :* ${groupMetadata.subject}\n» *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n» *ID Grup:* ${groupMetadata.id}\n» *Link Grup :* https://chat.whatsapp.com/${response}\n» *Member :* ${groupMetadata.participants.length}\n`, m, {
          detectLink: true
        })
        console.log(groupMetadata)
      }
      break
      case'addlist':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins) return m.reply('Fitur Khusus Admin')
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
            if (isAlreadyResponList((m.isGroup ? m.chat :botNumber), args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di chat ini.`)
            if(m.isGroup){
            if (/image/.test(mime)) {
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        addResponList(m.chat, args1, args2, true, mem, db_respon_list)
                        m.reply(`Sukses set list message\nKata Kunci : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message\nKata Kunci : *${args1}*`)
            }
            } else {
            if (/image/.test(mime)) {
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        addResponList(botNumber, args1, args2, true, mem, db_respon_list)
                        m.reply(`Sukses set list message\nKata Kunci : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(botNumber, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message\nKata Kunci : *${args1}*`)
            }
            }
}
break
      case 'dellist':{
     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
     if (!isAdmins) return m.reply('Fitur Khusus admin & owner!')
     if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
     if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
     if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)
            m.reply(`Sukses delete list dengan key *${q}*`)
			}
break
            case 'rename':
case 'renamelist': {
              if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
                    var args1 = q.split("|")[0].toLowerCase()
                    var args2 = q.split("|")[1]
                    if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|new key*\n\n_Contoh_\n\n${prefix+command} list dm|list dm baru`)
                    if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), args1, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di chat ini`)
                    renameList((m.isGroup? m.chat: botNumber), args1, args2, db_respon_list)
                    m.reply(`*✅ Done*`)
            }
            break
//=================================================//
case 'updatelist': case 'update':{
   	    // if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
            if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), args1, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di chat ini`)
            if (/image/.test(mime)) {
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        updateResponList((m.isGroup? m.chat: botNumber), args1, args2, true, mem, db_respon_list)
                        m.reply(`Sukses update respon list dengan key *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList((m.isGroup? m.chat: botNumber), args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses update respon list dengan key *${args1}*`)
            }
			}
            break
            
            
case 'open':{
     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	 if (!isAdmins) return m.reply('Fitur Khusus admin!')
     if (!isBotAdmins) return m.reply("Bot bukan admin")
       client.groupSettingUpdate(m.chat, 'not_announcement')
     const textOpen = await getTextSetOpen(m.chat, set_open);
       reply(textOpen || `Sukses mengizinkan semua member dapat mengirim pesan ke grup ini`)
}
break

case 'close':{
     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
     if (!isAdmins) return m.reply('Fitur Khusus admin!')
     if (!isBotAdmins) return m.reply("Bot bukan admin")
   client.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
   reply(textClose || `─────〔 *SUKSES GROUP DITUTUP* 〕─────\n\n*» Alasan* : ${text}\n\n📑 *Tenang ini hanya sementara kok, Bukan seperti dia yang meninggalkanmu selamanya* :)`)
}
break            
            
            
            
            
/*      case 'close': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya = `─────〔 *GROUP CLOSE* 〕─────

*Group Telah Di Tutup Oleh* @${sender.split("@")[0]}

\`\`\`📆 ${hariini}
⏰ ${time1} WIB\`\`\``
        await client.groupSettingUpdate(m.chat, 'announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
      case 'open': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya =
          `─────〔 *GROUP OPEN* 〕─────

*Group Telah Di Buka Oleh* @${sender.split("@")[0]}

\`\`\`📆 ${hariini}
⏰ ${time1} WIB\`\`\``
        await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break*/


      case 'hd':{    
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			await loading()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			try {
			client.sendMessage(m.chat, { image: proses, caption: 'Done, Jangan spam ya sayang jeda 20 detik'}, { quoted: m})
			} catch (error) {
			m.reply("gagal")
			}
  // tangani kesalahan untuk semua case di sini
}
break

case 'hdvid': {
  if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot');
  if (!quoted) return m.reply(`Maaf vidionya mana yaa?`);
  if (!/video/.test(mime)) return m.reply(`Kirim/Reply video dengan caption ${prefix + command}`);
  
  m.reply('Sedang memproses *HD VIDEO* silahkan tunggu...');
 // await sleep(1500);
  
  let media = await quoted.download();
  let video = Math.floor(Math.random() * 100) + 1;

  const inputFilePath = `./input-${video}.mp4`;
  const outputFilePath = `./output-${video}.mp4`;
  fs.writeFileSync(inputFilePath, media);

  const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "hqdn3d=1.5:1.5:6:6,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.1:saturation=1.05" -vcodec libx264 -preset slower -crf 22 -acodec copy -movflags +faststart ${outputFilePath}`;
  
  exec(ffmpegCommand, async (error) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return m.reply(`Proses gagal: ${error.message}`);
    }

    await client.sendMessage(m.chat, { caption: `Success, Silahkan didownload`, video: { url: outputFilePath } }, { quoted: m });

    // Hapus file setelah dikirim
    fs.unlinkSync(inputFilePath);
    fs.unlinkSync(outputFilePath);
  });
}
break;

case 'pin':
case 'pinterest': {
if (!m.isGroup) return m.reply('Fitur Khusus Penyewa Bot')
if (!text) return reply (`─────〔  *PINTEREST SEARCHING* 〕───── :\n\n- Contoh : ${command} Dhaniels Store`)
let { pinterest, sleep } = require('./lib/scraper')
reply('Sedang memproses silahkan tunggu...');
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
client.sendMessage(m.chat, { image: { url: result }, caption: `Berikut Hasil dari Pencarian Pinterest untuk ${text}`}, { quoted: m })
}
break

      break

case 'mlregion':
case 'mlreg':
case 'mlign':
case 'cekregml':
case 'cekreg': {
const [userId, zoneId] = text.split(" ");  
if(!userId) return m.reply(`Mana ID Servernyaa?

Contoh : ${command} 12345678 1234`);
validateMobileLegendsMoogold(userId, zoneId)
    }
    break

case 'afk': {
    if (!m.isGroup) return m.reply("Fitur Ini Khusus Untuk Grup")
    if (!isAdmins) return m.reply("Fitur Ini Khusus Admin Kak");
    
	const cooldowns = new Map();              
    const now = Date.now();
    const cooldownTime = 5000; // Batas waktu antara eksekusi perintah AFK dalam milidetik (misalnya, 5 detik)

    if (cooldowns.has(m.sender)) {
        const lastExecutionTime = cooldowns.get(m.sender);
        const remainingTime = lastExecutionTime + cooldownTime - now;
        if (remainingTime > 0) {
            return m.reply(`Tunggu beberapa saat sebelum menggunakan perintah AFK lagi. (Sisa Waktu: ${msToDate(remainingTime)})`);
        }
    }

    let reason = text ? text : 'Tidak ada alasan';
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang AFK\n\n*Alasan* : ${reason}`, m);
    cooldowns.set(m.sender, now); // Catat waktu terakhir pengguna menjalankan perintah AFK
break;
};
//=================================================//
//Fitur QC = Text to Stiker
case "qc": {
         if (!quoted){
         const getname = await client.getName(mentionUser[0])
         const json = {
                    "type": "quote",
                    "format": "png",
                    "backgroundColor": "#FFFFFF",
                    "width": 512,
                    "height": 768,
                    "scale": 2,
                    "messages": [
                       {
                    "entities": [],
                    "avatar": true,
                    "from": {
                    "id": 1,
                    "name": getname,
                    "photo": {
                    "url": ppuser
                       }
                       },
                    "text": quotedMsg.chats,
                    "replyMessage": {}}]};
                    
         const response = axios.post('https://bot.lyo.su/quote/generate', json, {
               headers: {'Content-Type': 'application/json'}}).then(res => {
         const buffer = Buffer.from(res.data.result.image, 'base64')
         const opt = { packname: global.packname, author: global.author }
               client.sendImageAsSticker(from, buffer, m, opt)});
         } else if (q) {
         const json = {
                    "type": "quote",
                    "format": "png",
                    "backgroundColor": "#FFFFFF",
                    "width": 512,
                    "height": 768,
                    "scale": 2,
                    "messages": [
                    {
                    "entities": [],
                    "avatar": true,
                    "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                    "url": ppuser
                    }
                    },
                    "text": q,
                    "replyMessage": {}
                    }]};
         const response = axios.post('https://bot.lyo.su/quote/generate', json, {
               headers: {'Content-Type': 'application/json'}}).then(res => {
         const buffer = Buffer.from(res.data.result.image, 'base64')
         const opt = { packname: global.packname, author: global.author }
               client.sendImageAsSticker(from, buffer, m, opt)
               });
         } else {
              reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break

//Foto jadi stiker
case 's':
case 'sticker':
case 'stiker': {
      if (!quoted) return reply(`Reply foto/video dengan caption ${prefix + command}\n\ndurasi video maks 1-9 detik`)
      if (/image/.test(mime)) {
      let media = await quoted.download()
      let encmedia = await client.sendImageAsSticker(m.chat, media, m, {packname: global.packname, author: global.author})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
      if ((quoted.msg || quoted).seconds > 11) return reply(`Reply foto/video dengan caption ${prefix + command}\n\ndurasi video maks 1-9 detik`)
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, {packname: global.packname, author: global.author})
await fs.unlinkSync(encmedia)
} else {reply(`Reply foto/video dengan caption ${prefix + command}\n\ndurasi video maks 1-9 detik`)
} 
}
break

case 'brat': {
    if (!args.length) return reply('Masukkan Textnya\n\n- Contoh : Brat Dhaniels Store');
    try {
        // Ambil teks dari argumen
        let text = args.join(' ');

        // Reaction awal: Proses dimulai
        await client.sendMessage(m.chat, {react: {text: '⏳', key: m.key}});

        // URL endpoint dengan teks dinamis
        let url = `https://tiodevhost.eu.org/?q=${encodeURIComponent(text)}`;
        
        // Unduh gambar dari endpoint
        let res = await fetch(url);
        if (!res.ok) throw new Error(`Gagal mengambil gambar dari endpoint: ${res.statusText}`);
        let buffer = await res.buffer();
        
        // Kirim gambar sebagai stiker
        let encmedia = await client.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);

        // Reaction kedua: Proses selesai
        await client.sendMessage(m.chat, {react: {text: '✅', key: m.key}});

    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengambil gambar. Pastikan endpoint bekerja dengan benar.');

        // Optional: Reaction jika terjadi error
        await client.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
    }
}
break;

//================= Kalkulator

case 'tambah':{
	if (!text.includes('+')) return m.reply(`Gunakan dengan cara ${command} *angka* + *angka*\n\n_Contoh_\n\n${command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`= ${nilai_one + nilai_two}`)}
            break

case 'kurang':{
            if (!text.includes('-')) return m.reply(`Gunakan dengan cara ${command} *angka* - *angka*\n\n_Contoh_\n\n${command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`= ${nilai_one - nilai_two}`)}
            break

case 'kali':{
            if (!text.includes('*')) return m.reply(`Gunakan dengan cara ${command} *angka* * *angka*\n\n_Contoh_\n\n${command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`= ${nilai_one * nilai_two}`)}
            break

case 'bagi':{
            if (!text.includes('/')) return m.reply(`Gunakan dengan cara ${command} *angka* / *angka*\n\n_Contoh_\n\n${command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`= ${nilai_one / nilai_two}`)}
            break
            
case 'backupdb': {
  // izinnya ikut gaya project: pakai isCreator, bukan isOwner
  // di kode kamu, isCreator sudah dihitung lebih dulu (dekat bagian awal handler)
  if (isGroup) return reply(mess.private)
  if (!isCreator) return reply(mess.owner)

  try {
    // ambil daftar owner dari global.owner (db/config.js)
    const owners = (global.owner || []).map(num => `${String(num).replace(/[^0-9]/g, '')}@s.whatsapp.net`)
    if (!owners.length) return reply('❌ Owner belum diset di db/config.js')

    let sent = 0
    for (const filePath of BACKUP_FILES) {
      if (!fs.existsSync(filePath)) {
        console.warn(`File ${filePath} tidak ditemukan, skip`)
        continue
      }

      const fileName = path.basename(filePath)
      const buffer = fs.readFileSync(filePath)

      // kirim ke semua owner
      for (const jid of owners) {
        await client.sendMessage(jid, {
          document: buffer,
          fileName: fileName,
          // deteksi mimetype sederhana (opsional)
          mimetype: fileName.endsWith('.json') ? 'application/json'
                   : fileName.endsWith('.js')   ? 'text/javascript'
                   : 'application/octet-stream',
          caption: `Backup file: ${fileName}`
        })
      }

      sent++
    }

    if (!sent) return reply('❌ Tidak ada file backup yang ditemukan.')
    reply(`✅ Backup ${sent} file terkirim ke owner.`)
  } catch (err) {
    console.error('[BACKUP ERROR]', err)
    reply('❌ Terjadi error saat backup.')
  }
  break
}

//=================================================//

case 'setopen':
case 'changeopen':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus Admin!')
            if (!text) return m.reply(`─────〔  *SETTING TEXT OPEN* 〕─────\n\n*Kegunaan :* Mengatur text saat admin menggunakan command *OPEN*\n\n- *Cara Penggunaan:* Setopen Grup sudah buka ya`)
            if (isSetOpen(m.chat, set_open)) {
               changeSetOpen(q, m.chat, set_open)
                reply(`Sukses Memperbarui  Text Open.`)
            } else {
              addSetOpen(q, m.chat, set_open)
                reply(`Sukses Memperbarui Text Open.`)
            }}
break

case 'delsetopen':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetOpen(m.chat, set_open)) return m.reply(`Belum Ada Settingan Text Open Di Grup Ini`)
            removeSetOpen(m.chat, set_open)
           reply(`Sukses Menghapus Text Open`)
        }
break

case 'setclose':
case 'changeclose':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!text) return m.reply(`─────〔  *SETTING TEXT CLOSE* 〕─────

*Kegunaan :* Mengatur text saat admin menggunakan command *CLOSE*

- *Cara Penggunaan:* Setclose Grup tutup dulu ya`)
            if (isSetClose(m.chat, set_close)) {
               changeSetClose(q, m.chat, set_close)
                reply(`Sukses Memperbarui Text Close`)
            } else {
              addSetClose(q, m.chat, set_close)
                reply(`Sukses Memperbarui Text Close`)
            }}
break

case 'delsetclose':{
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
            if (!isSetClose(m.chat, set_close)) return m.reply(`Belum ada set close di sini..`)
            removeSetClose(m.chat, set_close)
           reply(`Sukses Menghapus Text Close`)
        }
break

//=================================================//
      default:
    }
  } catch (err) {
    console.log(err)
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})