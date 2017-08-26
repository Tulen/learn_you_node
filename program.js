const fs = require('fs');

let output = [];
let file = fs.readdir(process.argv[2], (err, data) => {
  data.forEach((filename) => {
    if (filename.split('.')[1] == process.argv[3]) {
      console.log(filename)
    }
  });
});

