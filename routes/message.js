const router = require('express').Router();
const db = require('../config/db');

router.post('/',async (req,res)=>{


    db.get().collection('message').insertOne({
        parent : req.body.parent,
        content : req.body.content,
        userid : req.user.id,
        date : new Date()
    })
})

module.exports = router;