var conf = require('../../config.js')
var my = require('mysql');

exports.database= {
    pool : function () { 
        return my.createPool(conf.db_config);
    }
};
