/**
 * Created by victor on 27/12/17.
 */
var express = require('express');
var router = express.Router();
var config = require('../../../config.json');
var r = require('./response.service');
var Q = require('q');
// var jwt = require('jsonwebtoken');
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

    _query().then(function (result, count){
        res.send(r.r('listQuestions', count, result));
    }).catch(function (err) {
        res.status(400).send(err);
    });

    function _query(){
        var _d = Q.defer();
        db.questions.find({available: true}).toArray(

            function (err, items) {
                if (err) _d.reject(err.name + ': ' + err.message);
                _d.resolve(items, items ? items.length: 0);
            }

        );
        return _d.promise;
    }


}

function getQuestion(req, res){

    _query().then(function(result){
        res.send(r.r('getQuestion', 1, result));
    }).catch(function (err) {
        res.status(400).send(err);
    });

    function _query(){
        var _d = Q.defer();

        db.questions.findById(req.params.id,
            function (err, result) {
            if (err) _d.reject(err.name + ': ' + err.message);
                _d.resolve(result);
            }
        );

        return _d.promise;
    }

}

function createQuestion(req, res){

    _query().then(function(result){
        res.send(r.r('createQuestion', 1, result));
    }).catch(function (err) {
        res.status(400).send(err);
    });

    function _query(){
        var _d = Q.defer();

        var set = {
            question: req.body.question,
            detail: req.body.detail,
            available: true
        };

        db.questions.insert(set,
            function (err, doc) {
                if (err) _d.reject(err.name + ': ' + err.message);
                _d.resolve(doc);
            }
        );

        return _d.promise;
    }

}

function updateQuestion(req, res){

    _query().then(function(result){
        res.send(r.r('updateQuestion', 1, result));
    }).catch(function (err) {
        res.status(400).send(err);
    });

    function _query(){

        var set = {
            question: req.body.question,
            detail: req.body.detail
        };

        var _d = Q.defer();

        db.questions.updateById(req.params.id, {$set: set},
            function (err, doc) {
                if (err) _d.reject(err.name + ': ' + err.message);
                _d.resolve(doc);
            }
        );

        return _d.promise;
    }

}

function deleteQuestion(req, res){
    _query().then(function(result){
        res.send(r.r('updateQuestion', 1, result));
    }).catch(function (err) {
        res.status(400).send(err);
    });

    function _query(){

        var set = {
            available: false
        };

        var _d = Q.defer();

        db.questions.updateById(req.params.id, {$set: set},
            function (err, doc) {
                if (err) _d.reject(err.name + ': ' + err.message);
                _d.resolve(doc);
            }
        );

        return _d.promise;
    }
}