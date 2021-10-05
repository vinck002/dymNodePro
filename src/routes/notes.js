const router= require('express').Router();

router.get('/notes/notes',(req,res)=>{
    res.send('<p>aqui van las notas </p>');
})

router.get('/notes/notedb',(req,res)=>{
    res.send('<p>aqui van las notas </p>');
})


module.exports = router;