let http = require('http')

let url = require('url')

http.createServer(function(req, res) {

  let route = req.url
  if (route == '/') {
    res.end('this is the information from backend to home page')  //data is passed through
  }
  if (route === '/getusernames') {
    let usernames = ['messi', 'ronaldo','sachin','dhoni'];
    res.end(JSON.stringify(usernames))  //cannot directly pass array as it is thats why we have to use "JSON.stringify(arrayName)"
  }

  console.log('My Nodejs server started successfully in port no 5000')

}).listen(5000) //port number : 5000