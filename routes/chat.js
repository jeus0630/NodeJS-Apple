const router = require('express').Router();
const db = require('../config/db');
const {ObjectId} = require('mongodb');

router.get('/',async (req, res) => {

    const data =await db.get().collection('chatroom').find({
        member : req.user._id
    }).toArray();

    console.log(data);

    res.render('chat.ejs',{data});
})

router.post('/',async (req,res)=>{
    await db.get().collection('chatroom').insertOne({
        member : [req.user._id,ObjectId(req.body.아이디)],
        date : new Date(),
        title : req.body.타이틀
    });

    res.redirect('/');
})

module.exports = router;