const fs = require('fs');
const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end;
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
// const fs = require('fs');
// const http = require('http');
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');

//   let path = './';
//   switch (req.url) {
//     case '/':
//       path += 'index.html';
//       break;
//     case '/about':
//       path += 'about.html';
//       break;
//     default:
//       path += '404.html';
//       break;
//   }
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end;
//     } else {
//       res.end(data);
//     }
//   });
// });

// server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// const http = require('http');
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World Bongani Here</h1>');
// });

// server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// const http = require('http');
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('Hello World');
//   res.write('\nIce is amazing');

//   res.end();
// });

// server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// const addNums = require('./addNums');
// import { addNums } from "./addNums.js";

// const results = addNums(1, 1);
// console.log(results);

// const { unlink } = require('fs');

// unlink('style.css', (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log('File deleted');
// });

// const { rename } = require('fs');

// rename('test.txt', 'updated.txt', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('File renamed');
// });

// const { appendFile } = require('fs');

// const newContent = "\nYandiswa has the most beautiful eyes i've ever seen";

// appendFile('test.txt', newContent, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Content written!');
// });

// try {
//   writeFileSync('test.txt', newContent, { flag: 'a' });
//   console.log('contnet written');
// } catch (err) {
//   console.error(err);
// }

// const data = readFileSync('test.txt', 'utf8');
// const newContent = `\n i love Skhona`;

// const { writeFile, readFileSync } = require('fs');
// writeFile('test.txt', newContent, { flag: 'a' }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log('Content written!');
// });

// const fs = require('fs');
// try {
//   const data = fs.readFileSync('test.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

//reading files async
// fs.readFile('test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const http = require('http');

// const HOSTNAME = process.env.HOSTNAME || 'localhost';

// const PORT = process.env.PORT || 5500;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello World');
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });

// console.log(__filename);
// console.log(__dirname);
