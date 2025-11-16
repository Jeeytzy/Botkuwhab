const axios = require("axios");
const fs = require("fs");
require('../setting.js');

const getmerchantIdAndSignature = async () => {
    try {
        console.log("🔑 Request fresh API key dari /api/key-orkut...");
        const url = `https://api.wahdx.co/api/key-orkut`;
        const response = await axios.post(url, {
            username_orkut: global.usernameOrkut,
            token_orkut: global.tokenOrkut,
        }, {
            headers: {
                "Content-Type": "application/json",
                tokenKey: global.tokenKey,
            },
        });
        if (response.data.success) {
        // Update merchantid in settings.json
        try {
            const settingsPath = "./db/payment.json";
            const settingsData = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
            
            // Update the merchantid
            settingsData.orderkuota.merchantid = response.data.merchantId;
            settingsData.orderkuota.signature = response.data.key;
            
            // Write the updated settings back to the file
            fs.writeFileSync(settingsPath, JSON.stringify(settingsData, null, 2));
            // console.log(`[+] Settings updated: signature set to ${response.data.key}`);
        } catch (error) {
            console.error("Error updating settings.json:", error.message);
        }
        
            return response.data;
        }
    } catch (error) {
        return error.response.data;
    }
};

  module.exports = { getmerchantIdAndSignature };