const Flag = require('../models/Flag');
const fs = require('fs');
const path = require('path');

async function up() {
  const content = fs.readFileSync(path.join(__dirname, 'flags.json'));
  const flags = JSON.parse(content);

  for (const flag of flags) {
    await Flag.create(flag);
  }
}

module.exports = { up };
