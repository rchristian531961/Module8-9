const express=require('express');
PORT=process.env.PORT || 5000
const app=express();

//Link Router Page and Controller
const feedRoute=require('./routes/feedRoutes')

app.use(express.json());
app.use(feedRoute);


// app.get('/',(req,res)=>{
//     console.log("Port is 5000 and working")
//     res.send("Port is working")
// })

// app.get('/api/v1',(req,res)=>{
//     res.send(
//         "Hello your sending message from port 5000")
// })

// app.post('/',(req,res)=>{
//     res.send("Posting a message to 5000")
// })

app.listen(PORT,()=>{
    ()=>{console.log(`listening at port: http://localhost:${PORT}/`)}
})