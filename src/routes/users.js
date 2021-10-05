const router= require('express').Router();

router.get('/users/signin',(req,res)=>{
    res.send('<p>Signing </p>');
})

router.get('/users/sigup',(req,res)=>{
    res.send('<p>Sign up </p>');
})


module.exports = router;