exports.allAccess = (req, res) => {
    res.status(200).send(
        "Willkommen zu unserer Schülerdatenbank. "+ 
        "Auf dieser Webseite können Sie als Lehrperson oder als Schulleiter ihre Klassen und Schüler anpassen."
     );
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