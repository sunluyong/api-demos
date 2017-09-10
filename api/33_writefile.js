const fs = require('fs');

const content = Buffer.from('this is a test.');

fs.writeFile('./text', content, err => {
    if (err) throw err;

    console.log('done!');
})
