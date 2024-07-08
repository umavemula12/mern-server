/*

//routers->users.js
const express = require('express');
const router = express.Router()
const User = require('../model/userSchema')

//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req, res)=>{
    try{
        const {_id,name, email, password} = req.body;
        const userQuery = new User(
            {_id,name, email, password}
        );
        //after out query is created
        //we can save it to the databa
        userQuery.save();
        res.status(201).send(
            {Message:"user created"}
        );
    }
    catch(err){
           res.status(500).send(
             {message:err.message}
         );
    }
});
//get the data
router.get('/', async (req,res)=>{
    try{
        const data = await User.find()
        res.status(201).send(data)
    }
    catch(err){
        res.status(500).send({message:err})
    }
});

//put the data
router.put('/users/:id', async (req, res)=>{
    try{
        const {password} =req.body;
        const userId = req.params.id;
        const updateUser = await User.updateOne({_id:userId},{$set:{password: password}});
        if(updateUser.nModified===0){
            return res.status(404).send({message:"user id is not found"});
        }
        //const 

        res.status(201).send({message:"password updated through the put method", updateUser})

    }catch(err){
        res.status(500).send({message:err})
    }
});
/*
router.delete('/:id', async (req, res)=>{
    try{
        const userId = req.params.id;
        const deletedUser =await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).send({message:"Id does not exist"})
        }
        res.status(201).send({message:"User deleted", deletedUser});

    }catch(err){
        res.status(500).send({message:err})
    }

});
*/
/*
router.delete('/:id', async (req, res)=>{
    try{
        const userId = req.params.id;
        const deletedUser =await User.deleteOne({_id:userId});
        if(deletedUser.nModified===0){
            return res.status(404).send({message:"Id does not exist"})
        }
        res.status(200).send({message:"User deleted", deletedUser});

    }catch(err){
        res.status(500).send({message:err})
    }

});

module.exports=router;
*/
