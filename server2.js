const http = require ("http")

const server = http.createServer((req ,res)=>{
    console.log(`URL :${req.url} , METHOD ${req.method} , HEADER ${req.headers}`)
})

server.listen(3000)

