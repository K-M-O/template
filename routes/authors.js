const express = require('express');
const router = express.Router();
// all authors
router.get('/', (req, res)=>{
    res.render('authors/index');
});
// new author
router.get('/new', (req,res) =>{
    res.render('authors/new');
});
// create author
router.post('/', (req, res)=>{
    res.send('create');
});
module.exports = router;