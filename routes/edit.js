const router = require('express').Router();
const db = require('../config/db');

router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    const data = await db.get().collection('post').findOne({_id : parseInt(id)});
    res.render('edit.ejs', {data});
})

router.put('/:id',async (req,res)=>{
    const id = req.params.id;
    const data = await db.get().collection('post').updateOne({_id : parseInt(id)},{$set : {할일 : req.body.title, 날짜 : req.body.date}});
    res.redirect('/list');
})

module.exports = router;