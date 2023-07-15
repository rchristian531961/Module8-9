const router=require('express').Router();
const feedController=require('../Controller/feedController')

router.get('/api/v1',feedController.getAllPosts)

router.post('/api/v1',feedController.addPost)

router.get('/',feedController.getAllPosts);


module.exports=router;

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