const router = require('express').Router();
const db = require('../config/db');

router.delete('/delete',async (req,res)=>{
    req.body.id = parseInt(req.body.id)
    await db.get().collection('post').deleteOne({_id : req.body.id});
    res.status(200).json({message : "success"});
})

module.exports = router;