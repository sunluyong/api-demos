const fs = require('fs');

const rs = fs.createReadStream('./41_readstream.js');

rs.pipe(process.stdout);
