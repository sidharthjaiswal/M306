const config = require("../config/auth.config");
const db = require("../models");
const Benutzer = db.benutzer;
const Rolle = db.rolle;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const benutzer = new Benutzer({
        benutzername: req.body.benutzername,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    benutzer.save((err, benutzer) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (req.body.rollen) {
            Rolle.find({
                    name: { $in: req.body.rollen }
                },
                (err, rollen) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    benutzer.rollen = roles.map(rolle => rolle._id);
                    benutzer.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({ message: "Benutzer erfolgreich registriert!" });
                    });
                }
            );
        } else {
            Rolle.findOne({ name: "benutzer" }, (err, rolle) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                benutzer.rollen = [rolle._id];
                benutzer.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "Benutzer erfolgreich registriert!" });
                });
            });
        }
    });
};

exports.signin = (req, res) => {
    Benutzer.findOne({
            benutzername: req.body.benutzername
        })
        .populate("roles", "-__v")
        .exec((err, benutzer) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!benutzer) {
                return res.status(404).send({ message: "Benutzer nicht gefunden!" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                benutzer.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Ungültiges Passwort!"
                });
            }

            var token = jwt.sign({ id: benutzer.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < benutzer.rollen.length; i++) {
                authorities.push("ROLLEM_" + benutzer.rollen[i].name.toUpperCase());
            }
            res.status(200).send({
                id: benutzer._id,
                benutzername: benutzer.benutzername,
                email: benutzer.email,
                rollen: authorities,
                accessToken: token
            });
        });
};