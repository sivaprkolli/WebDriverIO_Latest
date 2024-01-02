const totp = require("totp-generator");

const token = totp("FQRGPW7XIWN3E3HSILHT6BRTJCIHN6QJJUSGBFEJRKNK2NEXHVOA", { digits: 6 });
console.log(token);