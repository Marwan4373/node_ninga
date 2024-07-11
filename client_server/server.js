const http = require('http');
const fs = require('fs');

// This function creates a server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  let path = './views';
  fs.readFile('./views/index.html', (err, data) => {
    if(err){
        console.log(err);
        res.end();

    }
    else{
          // res.write(data);

      res.end(data);

    }
  });
//   res.write('done from res');
//   res.end();
  //is request in return
//   console.log(req);
});

server.listen(3000, 'localhost', () => {
  console.log("Port is: 3000 and host is: localhost");
});
