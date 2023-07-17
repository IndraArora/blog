const jwt=require('jsonwebtoken')
const blogModel=require('../schema/blogsSchema')
module.exports.addBlog=async (req,res)=>{
    try{
    let blogData=await blogModel.create(req.body)
    if(!req.body.title){
        return res.status(400).send({status:false,message:'title is required'})
    }
    if(!req.body.content){
        return res.status(400).send({status:false,message:'content is required'})
    }
    return res.status(201).send({status:true,data:blogData})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}


