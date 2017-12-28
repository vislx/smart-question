/**
 * Created by victor on 28/12/17.
 */
var service = {};

service.r = response;

function response(name, count, result){
    return {
        method: name,
        time: new Date(),
        count: (result && count) ? count : 0,
        result: result
    }
}


module.exports = service;