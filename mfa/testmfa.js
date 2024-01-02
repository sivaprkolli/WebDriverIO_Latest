const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const jsQR = require('jsqr');

async function readQRCodeFromImage(filePath) {
  try {
    const imageData = await loadImage(filePath);
    const canvas = createCanvas(imageData.width, imageData.height);
    const context = canvas.getContext('2d');
    context.drawImage(imageData, 0, 0);

    const imageDataArray = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const code = jsQR(imageDataArray, canvas.width, canvas.height);

    return code ? code.data : null;
  } catch (error) {
    console.error('Error reading QR code:', error.message);
    return null;
  }
}

// Example usage
const imagePath = 'elementLogo.png';

readQRCodeFromImage(imagePath)
  .then((qrCodeData) => {
    if (qrCodeData) {
      console.log('QR Code detected! Content:', qrCodeData);
    } else {
      console.log('No QR Code detected.');
    }
  })
  .catch((error) => console.error(error));
