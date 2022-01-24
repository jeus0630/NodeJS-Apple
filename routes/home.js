const router = require('express').Router();
const db = require('../config/db');

router.delete('/delete',async (req,res)=>{
    req.body.id = parseInt(req.body.id)
    const 삭제할데이터 = {_id : req.body._id, 작성자 : req.user._id}
    await db.get().collection('post').deleteOne(삭제할데이터);

    res.status(200).json({message : "success"});
})

module.exports = router;