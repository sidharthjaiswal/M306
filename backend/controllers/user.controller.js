exports.allAccess = (req, res) => {
    res.status(200).send("Willkommen zu unserer Schülerdatenbank.");
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