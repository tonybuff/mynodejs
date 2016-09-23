var db = require('../service/db.js')

module.exports.index = function (req, res) {
    db.database.pool().getConnection(function (err,connection) {
        if (err) { 
            connection.release();
            
        }
        connection.query("select * from student", function (errs,result) {
            connection.release();
            res.render('index', { title: '首页',data:result });
        })
    })
   
}