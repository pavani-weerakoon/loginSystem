const AdminUserSchema = require('../model/AdminUser');
const bcrypt = require('bcrypt');

const user = (req, resp) => {

    console.log(req.body);

    AdminUserSchema.findOne({userName: req.body.userName}, (error, result) => {

        if (error) {
            resp.status(500).json({message: error});
        } else {
            if (result != null) {
                resp.status(200).json({message: 'Already Exists!'});
            } else {

                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, function (error, hash) {
                        const admin = new AdminUserSchema({
                            userName: req.body.userName,
                            password: hash
                        });

                        admin.save().then(finalResult => {
                            resp.status(200).json({message: 'success'});
                        }).catch(finalError => {
                            resp.status(500).json({message: finalError})
                        })
                    })
                });
            }
        }
    });
};

const loginuser = (req,resp) => {
    const password = req.headers.password;
    const username = req.headers.username;
     console.log(username);
     console.log(password);

     if (password != null) {
         AdminUserSchema.findOne({userName: username}, (error, result) => {
            if (result != null) {

                bcrypt.compare(password, result.password, function (err, finalResult) {
                    if (finalResult) {
                        resp.status(200).json({message: 'success'});
                        console.log('oK');
                    } else {
                        resp.status(200).json({message: 'Failed answer!'});
                    }
                });

            } else {
                resp.status(200).json({message: 'Please Register Your Email or check your password'});
            }
        });

    } else {
        resp.status(200).json({message: 'Failed!'});
    }
}
module.exports = {
    user,loginuser
}
