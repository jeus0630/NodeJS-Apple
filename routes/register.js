const router = require('express').Router();
const db = require('../config/db');

router.post('/',async (req,res)=>{

    await db.get().collection('login').insertOne({id : req.body.id, pw : req.body.pw});
    res.redirect('/');
})

module.exports = router;