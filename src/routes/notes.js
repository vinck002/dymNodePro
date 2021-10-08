const router= require('express').Router();
const ModelNotes = require('../models/note');

router.get('/notes',async (req,res)=>{

    const Datos_notes = ModelNotes.find();
    res.render('notes/all_notes',Datos_notes)
    
});


router.post('/notes/new-note',  async (req,res) =>{
    const {Tittle,Description} = req.body;
    const error = [];
    if (!Tittle) {
        error.push({tet:"Please write a Tittle"})
    }
    if (!Description ) {
        error.push({tet:"Please write a Description"})
    }
    if (error.length > 0) {
        res.render('notes/new-note',{
            error,
            Tittle,
            Description
        });
    }else{
       const newNotes = new ModelNotes(req.body);
    await newNotes.save();
     res.redirect('/notes');
    // console.log(newNotes);
    }

     

});

router.get('/notes/add',(req,res)=>{
    res.render('notes/new-note');
})


module.exports = router;