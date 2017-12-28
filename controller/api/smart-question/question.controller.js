/**
 * Created by victor on 27/12/17.
 */
var express = require('express');
var router = express.Router();
var config = require('../../../config.json');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('questions');


router.get('/', listQuestions);
router.get('/:id', getQuestion);
router.put('/', createQuestion);
router.post('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

module.exports = router;

function listQuestions(req, res){

    db.questions.find({}, function(result, err){
        res.send({ method_name: 'getAllQuestions', time: new Date(), result: result});
    })
}

function getQuestion(req, res){
    res.send({ method_name: 'getQuestion', time: new Date()});
}

function createQuestion(req, res){
    res.send({ method_name: 'createQuestion', time: new Date()});
}

function updateQuestion(req, res){
    res.send({ method_name: 'updateQuestion', time: new Date()});
}

function deleteQuestion(req, res){
    res.send({ method_name: 'deleteQuestion', time: new Date()});
}