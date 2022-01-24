const router = require('express').Router();
const db = require('../config/db');

router.post('/',async (req,res)=>{
    const 검색조건 = [
        {
            $search: {
                index: 'titleSearch',
                text: {
                    query: req.body.search,
                    path: '할일'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
                }
            }
        }
    ]
    const data = await db.get().collection('post').aggregate(검색조건).toArray();
    res.render('search.ejs',{posts : data});
})

module.exports = router;