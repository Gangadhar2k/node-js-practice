const http = require('http');

const reListener = (req,res) =>{

  const url = req.url;
  if (url === '/') {
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>first</title></head>');
    res.write('<body><h1> My First Nodejs code</h1><br><form action ="/message" method="POST"><input type="text"> <button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end(); 
  }
  
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>first</title></head>');
  res.write('<body><h1> My First Nodejs code</h1></body>');
  res.write('</html>');
  res.end(); 

}

const server = http.createServer(reListener);

server.listen(3200);