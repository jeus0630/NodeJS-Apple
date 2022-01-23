const router = require('express').Router();
const db = require('../config/db');

router.get('/:id',async (req,res)=>{
    const result = await db.get().collection('post').findOne({_id : parseInt(req.params.id)});
    result ?? res.send('404 NOT FOUND');
    res.render('detail.ejs',{data : result});
})

module.exports = router;