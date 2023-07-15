const post=require('../data/database')

function getAllPosts(req,res){
    res.send(post);
    console.log( "Data from controller" +post);
    // console.log(post.length)
}

function addPost(req,res){
    const author=req.body.author;
    const title=req.body.title;
    const desc=req.body.desc;
    const id=post.length+1;

    const newPost={id,author, title,desc}

    post.push(newPost)
    console.log('New Complete Post: ' + post)

    //Use 201 for successful
    res.status(201).json("Successful Addition");
    
}
module.exports={getAllPosts,addPost}