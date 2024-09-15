const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { json } = require('body-parser');

router.get(('/get') ,async (req,res) => {
    console.log("i am in get method");
    try{
        const a1 = await User.find();
        res.json(a1);
    } catch(err){
       res.send(err);
    }
})

router.get(('/get/:id') ,async (req,res) => {
    try{
        const a1 = await User.findById(req.params.id);
        res.json(a1);
    } catch(err){
       res.send(err);
    }
})

router.post(('/post') , async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    const a1 = await user.save();
    return res.json(a1);
})

router.delete(('/delete/:id') ,async (req,res) => {
    try{
        const a1 = await User.findByIdAndDelete(req.params.id);
        res.json(a1);
    } catch(err){
       res.send(err);
    }
})

router.patch(('/patch/:id') ,async (req,res) => {
    try{
        const a1 = await User.findById(req.params.id);
        a1.name = req.body.name;
        const savea1 = await a1.save();
        res.json(savea1);
    } catch(err){
       res.send(err);
    }
})


module.exports = router;