const http = require('http');
const fs = require('fs'); 

const reListener = (req,     res) =>{
      const method = req.method;
      const url = req.url;

      //  if the url === / 

      if (url === '/') { 
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>first</title></head>');
        res.write('<body> <h1> MY FIRST NODEJS CODE </h1> <form action="/message" method="POST"><input type="text" name="message" ><input type="submit" value="Send"> </form></body>')
        return res.end(); 
      }

        // redirecting code

      if(url === '/message' && method == 'POST' ){

        // capturing data
        const body = [];
        req.on('data',(chunk)=>{
          body.push(chunk)
          // console.log(chunk);
        })

        // converting into human readable format 
        return req.on('end',() =>{
          console.log('end Evend Received');
          const parsedBody = Buffer.concat(body).toString();
          const data =  parsedBody.split('=');
          fs.writeFile('Data.txt',data[1],(error)=>{
            console.log('file write compleleted');
            res.setHeader('Location','/test');
            res.statusCode = 302;
            return res.end();
          });
        })

        
      }
  
  
      if (url === '/test') {
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>first</title></head>');
        res.write('<body><h1> Redirected Web Page</h1><br></body>');
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