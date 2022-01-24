const passport = require("passport");
const router = require('express').Router();
const db = require('../config/db');

const checkLogin = (req, res, next)=>{
    if(req.user) next();
    else res.send('로그인 안하셨는데요');
}

router.get('/',checkLogin,(req,res)=>{
    res.render('mypage.ejs',{data : req.user});
})

passport.deserializeUser(function(id, done) {
    db.get().collection('login').findOne({ id: id }, function (에러, 결과) {
        done(null, 결과)
    })
});

module.exports = router;