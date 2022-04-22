var http = require("http");
var https = require("https");
fs = require("fs");

const path2020 = '/repos/smallyunet/hexo-blog/issues/7/comments?per_page=100'
const fill2020 = "./source/micro-blog/2020.json"

const fill2021 = "./source/micro-blog/2021.json"
const path2021_1 = '/repos/smallyunet/hexo-blog/issues/10/comments?per_page=100'
const fill2021_1 = "./source/micro-blog/2021_1.json"
const path2021_2 = '/repos/smallyunet/hexo-blog/issues/10/comments?page=2&per_page=100'
const fill2021_2 = "./source/micro-blog/2021_2.json"

const path2022 = '/repos/smallyunet/hexo-blog/issues/19/comments?per_page=100'
const fill2022 = "./source/micro-blog/2022.json"

let requestPath = path2022
let responsePath = fill2022

var options = {
  host: "api.github.com",
  path: requestPath,
  method: "GET",
  headers: { "user-agent": "node.js" }
};

var callback = function (response) {
  var buffer = Buffer.from("")

  response.on("data", function (buf) {
    buffer = Buffer.concat([buffer, buf])
    console.log(`[micro-blog] ${Date.now()} Got something...`);
  });

  response.on("end", function () {
    fs.writeFile(responsePath, buffer.toString(), 'utf8', (err) => {
      if (err) {
        console.log('[micro-blog] Save data fail. ', err);
      } else {
        console.log(`[micro-blog] Save data success.`);
      }
    });
  });

  response.on("error", function (err) {
    next(err);
  });
};

var merge = function () {
  var path1 = fill2021_1
  var path2 = fill2021_2
  var path = fill2021
  fs.readFile(path1, 'utf8', (err, data1) => {
    if (err) {
      console.log('[micro-blog] Read data fail. ', err);
    } else {
      fs.readFile(path2, 'utf8', (err, data2) => {
        if (err) {
          console.log('[micro-blog] Read data fail. ', err);
        } else {
          let d1 = JSON.parse(data1)
          let d2 = JSON.parse(data2)
          d1 = d1.concat(d2)
          fs.writeFile(path, JSON.stringify(d1), 'utf8', (err) => {
            if (err) {
              console.log('[micro-blog] Merge data fail. ', err);
            } else {
              console.log(`[micro-blog] Merge data success.`);
            }
          });
        }
      })
    }
  })
}

const [,, ...args] = process.argv
args.map(i => {
  if (i == '--micro-blog') {
    console.log('[micro-blog] Start request data.');
    https.request(options, callback).end();
  }
  if (i == '--merge') {
    // wait 2022
    // merge()
  }
})

