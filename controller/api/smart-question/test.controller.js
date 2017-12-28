/**
 * Created by victor on 27/12/17.
 */
var express = require('express');
var router = express.Router();


router.get('/', listTests);
router.get('/:id', getTest);
router.put('/', createTest);
router.post('/:id', updateTest);
router.delete('/:id', deleteTest);

module.exports = router;

function listTests(req, res){
    res.send({ method_name: 'getAllTests', time: new Date()});
}

function getTest(req, res){
    res.send({ method_name: 'getTest', time: new Date()});
}

function createTest(req, res){
    res.send({ method_name: 'createTest', time: new Date()});
}

function updateTest(req, res){
    res.send({ method_name: 'updateTest', time: new Date()});
}

function deleteTest(req, res){
    res.send({ method_name: 'deleteTest', time: new Date()});
}