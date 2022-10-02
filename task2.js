//const http=require('http')
const express=require('express')
const app=express()
app.use((req,res,next)=>{
    console.log('this is the middleware')
    next();
})
app.use((req,res,next)=>{
    console.log('this is another middlware')
    res.send('<h1>welcome to express project sid</h1>')
})
//const server=http.createServer(app)
//server.listen(3000)
app.listen(3000)