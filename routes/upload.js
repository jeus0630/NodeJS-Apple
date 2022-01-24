const router = require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './public/image')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage : storage});

router.get('/',(req,res)=>{
    res.render('upload.ejs');
})

router.post('/',upload.single('프로필'),(req,res)=>{

})

module.exports = router;