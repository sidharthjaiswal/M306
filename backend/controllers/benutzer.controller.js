exports.allAccess = (req, res) => {
    res.status(200).send("Öffentlicher Inhalt.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Schüler Inhalt.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Schulleitung Inhalt.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Lehrer Inhalt.");
};