const router= require('express').Router();

router.get('/notes/notes',(req,res)=>{
    res.send('<p>aqui van las notas </p>');
})

router.post('/notes/new-note',(req,res) =>{
    const {Email_Sub,Pass} = req.body;
    const error = [];
    if (!Email_Sub ) {
        error.push({tet:"please write a Email"})
    }
    if (!Pass ) {
        error.push({tet:"please write a Password"})
    }
    if (error.length > 0) {
        res.render('notes/new-note',{
            error,
            Email_Sub,
            Pass
        });
    }else{
        res.send('Ok')
    }

    // console.log(Email_Sub,Pass);

});

router.get('/notes/add',(req,res)=>{
    res.render('notes/new-note');
})


module.exports = router;