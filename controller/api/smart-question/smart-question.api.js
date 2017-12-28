/**
 * Created by victor on 27/12/17.
 */
var express = require('express');
var router = express.Router();


router.get('/', getRoot);
router.use('/question', require('./question.controller'));
router.use('/test', require('./test.controller'));

module.exports = router;

function getRoot(req, res){

    res.json({ message: 'hello, world. this is smart-question api', time: new Date()});

}
