const router = require('express').Router();
const db = require('../config/db');

router.get('/',async (req,res)=>{
    const data = await db.get().collection('post').find().toArray();
    res.render('list.ejs',{posts : data});
})

module.exports = router;