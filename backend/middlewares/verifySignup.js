const db = require("../models");
const ROLLEN = db.ROLLEN;
const Benutzer = db.benutzer;

checkDuplicateBenutzername = (req, res, next) => {
    // Benutzername
    Benutzer.findOne({
        benutzername: req.body.benutzername
    }).exec((err, benutzer) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (benutzer) {
            res.status(400).send({ message: "Fehlgeschlagen! Benutzername schon vergeben!" });
            return;
        }

    });
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLLEN.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateBenutzername,
    checkRolesExisted
};

module.exports = verifySignUp;