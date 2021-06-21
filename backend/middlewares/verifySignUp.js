const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
    // Username
    console.log(" checkDuplicateUsername: "+req.body.username);
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }

    });
};

checkRolesExisted = (req, res, next) => {
    console.log("checkRolesExisted "+req.body.roles);
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }

    //next();
};

const verifySignUp = {
    checkDuplicateUsername,
    checkRolesExisted
};

module.exports = verifySignUp;