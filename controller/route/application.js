/**
 * Created by victor on 16/6/17.
 */
var express = require('express');
var router = express.Router();

// serve angular app files from the '/app' route
router.use('/', express.static('app'));

module.exports = router;