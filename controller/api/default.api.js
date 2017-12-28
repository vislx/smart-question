/**
 * Created by victor on 16/6/17.
 */
var express = require('express');
var router = express.Router();


router.get('/', getCurrent);

module.exports = router;

function getCurrent(req, res){

  res.json({ message: 'hello, world', time: new Date()});

}
