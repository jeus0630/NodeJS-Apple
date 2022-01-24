const router = require('express').Router();
const db = require('../config/db');

router.post('/',async (req,res)=>{

    const {totalPost} = await db.get().collection('counter').findOne({name : '게시물개수'});

    const data = {
        _id : totalPost + 1,
        할일 : req.body.title,
        날짜 : req.body.date,
        작성자 : req.user._id
    }

    const insert = await db.get().collection('post').insertOne(data);

    const update = await db.get().collection('counter').updateOne({name : '게시물개수'},{$inc : {totalPost : 1}});

})

module.exports = router;