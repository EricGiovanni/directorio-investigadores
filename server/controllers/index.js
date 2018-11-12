var db = require('../models/index')


module.exports = {
    /*
    Revisa la base de datos para ver si existe el corre y luego confirma que las contraseñas coincidan.
    */
    confirmLogIn(req,res){
        var email = req.body.email
        var password = req.body.password
        db.sequelize.query('SELECT * FROM User WHERE email=?',{replacements:[email]})
        .then(user => {
            console.log(user)
            res.send(user)
        })
    }


}