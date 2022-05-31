const http = require("http")

//req =>incoming user request 
//res => server response

const server = http.createServer((req,res)=>{
    console.log(req)
   if(req.url == '/' ){
    res.end('Welcome to Home page')
}
   if(req.url == '/about'){
    res.end('This is About page')
}

   res.end(`
   <h1>Oops !</h1>
   <p>No results for your page</p>
   <a href="/">Back To home</a>
   
   `)
})

server.listen(5000)