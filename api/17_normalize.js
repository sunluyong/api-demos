const {normalize} = require('path');
// const normalize = require('path').normalize;

console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));
