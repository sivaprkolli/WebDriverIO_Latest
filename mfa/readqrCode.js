const Jimp = require("jimp");
const fs = require('fs')
const QrCode = require('qrcode-reader');

const buffer = fs.readFileSync(__dirname + '/elementLogo.png');

// Parse the image using Jimp.read() method
Jimp.read(buffer, function (err, image) {
    if (err) {
        console.error(err);
    }
    // Creating an instance of qrcode-reader module
    let qrcode = new qrCode();
    qrcode.callback = function (err, value) {
        if (err) {
            console.error(err);
        }
        // Printing the decrypted value
        console.log(value.result);
    };
    // Decoding the QR code
    qrcode.decode(image.bitmap);
});